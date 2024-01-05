const express = require("express");
// const cors = require("cors");
const app = express();
const router = require("./src/routers/productRoute");

const PORT = process.env.PORT || 2000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
