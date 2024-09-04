require('dotenv').config();
const express = require('express');
const multer = require('multer');
const Pinata = require('@pinata/sdk');
const fs = require('fs');
const path = require('path');

// Initialize Express app
const app = express();
const port = 3000;

// Initialize Pinata SDK
const pinata = new Pinata(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_API_KEY);

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage for this example
const upload = multer({ storage });

// Handle file upload
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.file.buffer;
    const fileName = req.file.originalname;
    const readableStream = new require('stream').Readable();
    readableStream._read = () => {}; // _read is required but you can noop it
    readableStream.push(file);
    readableStream.push(null);

    const result = await pinata.pinFileToIPFS(readableStream, { pinataMetadata: { name: fileName } });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
