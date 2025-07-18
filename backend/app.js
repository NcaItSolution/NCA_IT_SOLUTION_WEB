// External Module
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();

const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log('Hello');
    console.log(`Server running at: http://localhost:${PORT}`);
  });