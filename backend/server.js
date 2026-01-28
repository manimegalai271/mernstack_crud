require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Compass connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

app.listen(PORT, () => console.log("Server running on port 4000"));
