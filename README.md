# 📁 File Upload & Management REST API System

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Multer](https://img.shields.io/badge/Multer-Middleware-008CDD?style=for-the-badge&logo=npm&logoColor=white)](https://github.com/expressjs/multer)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **File Upload & Management REST API System** built with Node.js, Express, and **Multer** middleware for secure disk storage handling, metadata tracking, and a responsive dark-mode file manager interface styled with **Tailwind CSS**.

---

## 📋 Table of Contents
1. [Core Features & Highlights](#-core-features--highlights)
2. [Tech Stack & Architecture](#-tech-stack--architecture)
3. [Project Folder Structure](#-project-folder-structure)
4. [API Endpoints Reference](#-api-endpoints-reference)
5. [Local Installation & Setup](#-local-installation--setup)
6. [Testing the Application](#-testing-the-application)
7. [Author & Developer](#-author--developer)

---

## 🌟 Core Features & Highlights

* **Multer Disk Storage:** Securely parses multipart form data and saves uploaded files with unique timestamps and sanitized filenames.
* **File Metadata Tracking:** Maintains records of file sizes, original names, mime types, and upload timestamps.
* **Dynamic File Manager UI:** Clean dark-mode dashboard gallery enabling instant file previews, downloads, and deletions.
* **Robust Error Handling:** File size limits, validation filters, and clean disk unlinking on record removal.
* **Clean Code Architecture:** Modular routing and structured separation of concerns for scalable enterprise applications.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5 & Tailwind CSS | Responsive dark-mode upload panel and file gallery |
| **Backend Runtime** | Node.js & Express.js | REST routing, static serving, and middleware integration |
| **File Handling** | Multer SDK (`v1.4`) | Multipart form data processing and disk storage management |

---

## 📂 Project Folder Structure

```text
file-upload-management-api/
├── public/
│   └── index.html             # Tailwind CSS file manager UI
├── uploads/                   # Destination folder for server-stored files
├── src/
│   ├── routes/
│   │   └── fileRoutes.js      # Upload, retrieval and deletion endpoints
│   └── data/
│       └── store.js           # In-memory file metadata database store
├── server.js                  # Main entry point & Express static bindings
├── package.json               # Dependencies and scripts manifest
├── .env                       # Environment variables configuration
├── .gitignore                 # Git ignore exclusions
└── README.md                  # Comprehensive technical documentation
