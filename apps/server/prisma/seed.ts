import { PrismaClient, NotificationType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.notification.deleteMany();

  await prisma.notification.createMany({
    data: [
      {
        tenantId: "tenant-1",
        userId: "user-1",
        type: NotificationType.TEAM_INVITATION,
        title: "Team Invitation",
        body: "John invited you to Marketing Team.",
      },
      {
        tenantId: "tenant-1",
        userId: "user-1",
        type: NotificationType.CREATOR_REPLY,
        title: "Creator Replied",
        body: "Sarah replied to your comment.",
      },
      {
        tenantId: "tenant-1",
        userId: "user-2",
        type: NotificationType.SYSTEM,
        title: "Task Assigned",
        body: "New sales task assigned.",
      },
    ],
  });

  console.log("✅ Notifications seeded successfully!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });