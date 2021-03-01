import express, { json } from "express";
import { config } from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import jwtValidate from "express-jwt";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

// Importing Routes
import authRoutes from "./routes/auth";
import roleRoutes from "./routes/roles";
import userRoutes from "./routes/users";

config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/roles", roleRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "Hola Mundo",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
