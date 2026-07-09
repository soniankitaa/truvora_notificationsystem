import { Router } from "express";
import { tenantMiddleware } from "../middleware/tenant.middleware.js";

import {
  listNotifications,
  unreadCount,
  markNotificationAsRead,
  createNewNotification,
  markAllNotificationsAsRead,
  deleteNotificationById,
  clearAllNotifications,
} from "../controllers/notification.controller.js";
const router = Router();

router.use(tenantMiddleware);

router.get("/", listNotifications);

router.get("/unread-count", unreadCount);

router.post("/", createNewNotification);

router.patch("/:id/read", markNotificationAsRead);

router.patch("/read-all", markAllNotificationsAsRead);

router.delete("/:id", deleteNotificationById);

router.delete("/", clearAllNotifications);

export default router;