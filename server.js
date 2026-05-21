const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({});
require("dotenv").config();
const connectDB = require("./db/connectDB");
connectDB();


const Book = require("./models/users");
const User = require("./models/users");
const PORT = 3004;


// middleware
app.use(express.json());



//routes enpoints

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }
        // if no user, create user

        const newUser = new User({
            username,
            email,
            password,
        });
        await newUser.save();
        // created user, sending response

        res.status(201).json({
            message: "User Saved Successfully",
            user: {
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.log("Full ERROR:");
        console.log(error);
        res.status(500).json({
            message: "Server Error",
            error: error.message

        });
    }
});
//connects router to the Express app AND sets a base URL ("/api/users" (prefix)) for all routes inside that router.
app.use("/api/users", router)
//port

app.listen(PORT, () => {
    console.log('Server running on port')
})