import type { Request, Response } from "express";
import { createNotification } from "../services/notification.service.js";

export async function inviteTeamMember(
  req: Request,
  res: Response
) {
  try {
    const tenantId = req.header("X-Tenant-Id")!;

    const notification = await createNotification({
      tenantId,
      userId: null,
      type: "TEAM_INVITATION",
      title: "New Team Member",
      body: "Sarah joined Nova Talent",
    });

    res.status(201).json({
      success: true,
      event: "member_invited",
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

export async function creatorReply(
  req: Request,
  res: Response
) {
  try {
    const tenantId = req.header("X-Tenant-Id")!;
    const userId = req.header("X-User-Id")!;

    const notification = await createNotification({
      tenantId,
      userId,
      type: "CREATOR_REPLY",
      title: "Creator Replied",
      body: "Priya Sharma replied to your outreach message",
    });

    res.status(201).json({
      success: true,
      event: "creator_reply",
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