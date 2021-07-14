const mongoose = require("mongoose");
const Customer = require("./models/user");

mongoose.connect("mongodb://localhost:27017/banking", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("error", err);
    })

const v = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany([{
        username: "Alan Thomas", email: "alanthomas@gmail.com", Balance: 1500, avatar: "https://images.unsplash.com/photo-1601233749763-354ad977e784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=995&q=80", contact: 8219232323, about: "Certified User."
    }, 
    {
        username: "Karthik Nair", email: "karthik2001@gmail.com", Balance: 1500, avatar: "https://images.unsplash.com/photo-1600896997793-b8ed3459a17f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", contact: 2098453187, about: "Certified User."
    }]);
};

v();
