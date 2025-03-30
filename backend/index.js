const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

/*hello*/

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("Error:",err));

app.get("/", (req, res) => res.send("Backend Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
