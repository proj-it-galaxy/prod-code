const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User')
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ahad:m0cDpmzqYDDUj7Zi@clusterx.m1n2ijj.mongodb.net/?retryWrites=true&w=majority');

app.post('/register',async (req, res) => {
    const {username,password} = req.body;
    const userDoc = await User.create({username,password});
    res.json(userDoc);
});

app.listen(4000);