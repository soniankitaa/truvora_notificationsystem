import express from "express";
import cors from "cors";

import notificationRoutes from "./routes/notifications.js";
import triggerRoutes from "./routes/triggers.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import healthRoutes from "./routes/health.js";
const app = express();

app.use(cors());

app.use(express.json());

app.use("/notifications", notificationRoutes);
app.use("/triggers", triggerRoutes);
app.use("/health", healthRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorMiddleware);
app.use("/health", healthRoutes);
export default app;