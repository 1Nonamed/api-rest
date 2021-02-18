import express from "express";
import morgan from "morgan";

const app = express();

// Middlewares
app.use(morgan("dev"));


// Routes
app.get("/", (req, res) => {
  res.send({
    message: "Hola Mundo",
  });
});

app.listen(4000, () => {
  console.log("Server running at port 4000");
});
