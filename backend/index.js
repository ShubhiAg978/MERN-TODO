const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const todoRoutes = require("./routes/todoRoutes");

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "TODO",
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
