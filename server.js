/**
 * @project File Upload & Management REST API System
 * @author Rana Yasir Mahy Ud Din
 * @website https://ranayasir.unaux.com/
 * @github https://github.com/Sameerjeez88-max
 * @copyright 2026 Rana Yasir Mahy Ud Din. All Rights Reserved.
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fileRoutes = require('./src/routes/fileRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static public UI & uploaded files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api', fileRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`========================================================`);
  console.log(`File Manager API running on http://localhost:${PORT}`);
  console.log(`Developed by: Rana Yasir Mahy Ud Din`);
  console.log(`========================================================`);
});