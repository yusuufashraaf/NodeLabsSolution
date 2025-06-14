const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const postsRoutes = require("./Routers/postRoutes");

const app = express();

// body parser
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1/posts", postsRoutes);

app.listen(3000, () => {
  console.log("✅✅ Server is running on port 3000");
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("✅✅ Connected to MongoDB");
    })
    .catch((err) => {
      console.log("❌❌ Error connecting to MongoDB", err);
    });
});
