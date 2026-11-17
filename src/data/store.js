/**
 * @project File Upload & Management REST API System
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

// In-memory metadata store for uploaded files
const uploadedFiles = [
  {
    id: 1,
    filename: 'sample-document.pdf',
    originalName: 'Project_Specification_2026.pdf',
    size: '245 KB',
    mimetype: 'application/pdf',
    uploadDate: '2026-11-17 17:20'
  }
];

module.exports = { uploadedFiles };