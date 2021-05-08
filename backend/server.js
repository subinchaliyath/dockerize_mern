const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const userRoutes = require("./Router/userRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json())


app.get("/", (req, res) => {
    res.send("hi");
  });

app.use("/api/users", userRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started at ${PORT}`));
