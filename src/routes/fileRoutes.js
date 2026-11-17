const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { uploadedFiles } = require('../data/store');

const router = express.Router();

// Configure Multer Disk Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname.replace(/\s+/g, '_'));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    // Allow images, pdfs, docs, text
    cb(null, true);
  }
});

// GET: Retrieve all uploaded files metadata
router.get('/files', (req, res) => {
  res.status(200).json({ success: true, data: uploadedFiles });
});

// POST: Upload single file
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded.' });
    }

    const fileRecord = {
      id: Date.now(),
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: (req.file.size / 1024).toFixed(1) + ' KB',
      mimetype: req.file.mimetype,
      uploadDate: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    uploadedFiles.unshift(fileRecord);
    res.status(201).json({ success: true, message: 'File uploaded successfully!', data: fileRecord });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: Remove file by id
router.delete('/files/:id', (req, res) => {
  try {
    const fileId = parseInt(req.params.id);
    const index = uploadedFiles.findIndex(f => f.id === fileId);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'File record not found.' });
    }

    const file = uploadedFiles[index];
    const filePath = path.join(__dirname, '../../uploads', file.filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    uploadedFiles.splice(index, 1);
    res.status(200).json({ success: true, message: 'File deleted successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;