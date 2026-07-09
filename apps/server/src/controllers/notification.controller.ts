import type { Request, Response } from "express";
import {
  getNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  createNotification,
  deleteNotification,
  clearNotifications,
} from "../services/notification.service.js";

export async function listNotifications(
  req: Request,
  res: Response
) {
  const tenantId = req.header("X-Tenant-Id")!;
  const userId = req.header("X-User-Id")!;

const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;
const search = req.query.search as string | undefined;
const order = req.query.order as "asc" | "desc" | undefined || "desc";

const read =
  req.query.read === undefined
    ? undefined
    : req.query.read === "true";

const data = await getNotifications(
  tenantId,
  userId,
  page,
  limit,
  read,
  search,
  order
);
  res.json({
    success: true,
    count: data.length,
    notifications: data,
  });
}

export async function unreadCount(
  req: Request,
  res: Response
) {
  const tenantId = req.header("X-Tenant-Id")!;
  const userId = req.header("X-User-Id")!;

  const count = await getUnreadCount(
    tenantId,
    userId
  );

  res.json({
    success: true,
    count,
  });
}

export async function markNotificationAsRead(
  req: Request,
  res: Response
) {
  try {
    const tenantId = req.header("X-Tenant-Id")!;
    const userId = req.header("X-User-Id")!;
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

   const notification = await markAsRead(id, tenantId, userId);

    res.json({ success: true, notification });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Notification not found",
    });
  }
}

    export async function createNewNotification(
  req: Request,
  res: Response
) {
  try {
    const tenantId = req.header("X-Tenant-Id")!;
    const userId = req.header("X-User-Id")!;

    const { title, body, type } = req.body;

    if (!title || !body || !type) {
      return res.status(400).json({
        success: false,
        message: "title, body and type are required",
      });
    }

    const allowedTypes = [
      "TEAM_INVITATION",
      "CREATOR_REPLY",
      "SYSTEM",
    ];

    if (!allowedTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message: "Invalid notification type",
      });
    }

    const notification = await createNotification({
      tenantId,
      userId,
      title,
      body,
      type,
    });

    // ... rest of the function

    res.status(201).json({
      success: true,
      message: "Notification created successfully",
      notification,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create notification",
    });
  }
}
export async function markAllNotificationsAsRead(
  req: Request,
  res: Response
) {
  try {
    const tenantId = req.header("X-Tenant-Id")!;
    const userId = req.header("X-User-Id")!;

    await markAllAsRead(tenantId, userId);

    res.json({
      success: true,
      message: "All notifications marked as read",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to mark notifications",
    });
  }
}

export async function deleteNotificationById(
  req: Request,
  res: Response
) {
  try {
    const id = Array.isArray(req.params.id)
  ? req.params.id[0]
  : req.params.id;

    await deleteNotification(id);

    res.json({
      success: true,
      message: "Notification deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(404).json({
      success: false,
      message: "Notification not found",
    });
  }
}

export async function clearAllNotifications(
  req: Request,
  res: Response
) {
  try {
    const tenantId = req.header("X-Tenant-Id")!;
    const userId = req.header("X-User-Id")!;

    const result = await clearNotifications(
      tenantId,
      userId
    );

    res.json({
      success: true,
      message: "All notifications cleared",
      deleted: result.count,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to clear notifications",
    });
  }
}