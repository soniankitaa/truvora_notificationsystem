import { prisma } from "../lib/prisma.js";

export async function getNotifications(
  tenantId: string,
  userId: string,
  page: number = 1,
  limit: number = 10,
  isRead?: boolean,
  search?: string,
  order: "asc" | "desc" = "desc"
){
  return await prisma.notification.findMany({
where: {
  tenantId,

  OR: [
    {
      userId,
    },
    {
      userId: null,
    },
  ],

  ...(isRead !== undefined && {
    isRead,
  }),

  ...(search && {
    OR: [
      {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        body: {
          contains: search,
          mode: "insensitive",
        },
      },
    ],
  }),
},
    orderBy: [
  {
    isRead: "asc",
  },
  {
    createdAt: "desc",
  },
],
    skip: (page - 1) * limit,
    take: limit,
  });
}

export async function getUnreadCount(
  tenantId: string,
  userId: string
) {
  return await prisma.notification.count({
   where: {
  tenantId,

  OR: [
    {
      userId,
    },
    {
      userId: null,
    },
  ],

  isRead: false,
},
  });
}
export async function markAllAsRead(
  tenantId: string,
  userId: string
) {
  return await prisma.notification.updateMany({
    where: {
  tenantId,

  OR: [
    {
      userId,
    },
    {
      userId: null,
    },
  ],

  isRead: false,
},
    data: {
      isRead: true,
      readAt: new Date(),
    },
  });
}

export async function markAllNotificationsAsRead(
  tenantId: string,
  userId: string
) {
  return await prisma.notification.updateMany({
    where: {
  tenantId,
  userId: null,
  isRead: false,
},
    data: {
      isRead: true,
      readAt: new Date(),
    },
  });
}

export async function markAsRead(
  id: string,
  tenantId: string,
  userId: string
) {
  const notification = await prisma.notification.findFirst({
  where: {
    id,
    tenantId,

    OR: [
      {
        userId,
      },
      {
        userId: null,
      },
    ],
  },
});

  if (!notification) {
    throw new Error("Notification not found");
  }

  return await prisma.notification.update({
    where: {
      id,
    },
    data: {
      isRead: true,
      readAt: new Date(),
    },
  });
}



export async function createNotification(data: {
  tenantId: string;
  userId?: string | null;
  title: string;
  body: string;
  type: "TEAM_INVITATION" | "CREATOR_REPLY" | "SYSTEM";
}) {
  return await prisma.notification.create({
    data,
  });
}

export async function deleteNotification(id: string) {
  return await prisma.notification.delete({
    where: {
      id,
    },
  });
}

export async function clearNotifications(
  tenantId: string,
  userId: string
) {
  return await prisma.notification.deleteMany({
    where: {
  tenantId,

  OR: [
    {
      userId,
    },
    {
      userId: null,
    },
  ],
}
  });
}