export type NotificationType =
  | "team_invitation"
  | "creator_reply"
  | "system"
  | "task"
  | "lead";

export interface Notification {
  id: string;
  tenantId: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  metadata?: {
    creatorName?: string;
    teamName?: string;
    projectId?: string;
    taskId?: string;
    leadId?: string;
  };
}