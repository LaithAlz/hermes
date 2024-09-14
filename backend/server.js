const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/translate-text', (req, res) => {
});

app.post('/translate-voice', upload.single('audio'), (req, res) => {
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
