const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const userRoute = require("./Routes/user")
const authRoute = require("./Routes/auth")

dotenv.config();


mongoose.
    connect(process.env.Mongo_url)
    .then(() => console.log("DB connection successfull"))
    .catch((err) => { console.log(err); });


app.use(express.json());  //research about that

app.use("/api/users", userRoute);  //type localhost:8000/api/users/usertest to see the result on web
app.use("/api/auth", authRoute); 


app.listen(process.env.PORT, () => {
    console.log("backend server is running !");
});
