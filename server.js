const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({});
require("dotenv").config();
const connectDB = require("./db/connectDB");
connectDB();


const Book = require("./models/users");
const PORT = 3004;

app.use(express.json());

app.listen(PORT, () => {
    console.log('Server running on port')
})