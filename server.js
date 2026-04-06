const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 3001;

let books = [];

// GET
app.get("/books", (req, res) => {
  res.json(books);
});

// POST
app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.json({ message: "Book added successfully", book });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});