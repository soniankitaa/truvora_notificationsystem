"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import {
  getNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  deleteNotification,
} from "@/services/notification.service";

type Notification = {
  id: string;
  title: string;
  body: string;
  type: string;
  isRead: boolean;
  createdAt: string;
};

export function NotificationMenu() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

 async function loadNotifications() {
  setLoading(true);
  setError("");

  try {
    const data = await getNotifications();
    const unread = await getUnreadCount();

    setNotifications(data.notifications ?? []);
    setUnreadCount(unread.count ?? 0);
  } catch (err) {
    console.error(err);
    setError("Unable to load notifications.");
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
  const timer = setTimeout(() => {
    loadNotifications();
  }, 0);

  const interval = setInterval(() => {
    loadNotifications();
  }, 30000);

  return () => {
    clearTimeout(timer);
    clearInterval(interval);
  };
}, []);
  async function handleNotificationClick(id: string, isRead: boolean) {
  if (isRead) return;

  try {
    await markAsRead(id);
    await loadNotifications();
  } catch (err) {
    console.error(err);
  }
}

  async function handleMarkAllRead() {
  try {
    await markAllAsRead();
    await loadNotifications();
  } catch (err) {
    console.error(err);
  }
}

async function handleDelete(id: string) {
  try {
    await deleteNotification(id);
    await loadNotifications();
  } catch (err) {
    console.error(err);
  }
}

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background hover:bg-muted transition"
      >
        <Bell className="h-5 w-5" />

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-96 max-h-[500px] overflow-y-auto rounded-xl border bg-background shadow-xl z-50">  
          <div className="sticky top-0 flex items-center justify-between border-b bg-background px-4 py-3">
  <span className="font-semibold">
    Notifications
  </span>

  {unreadCount > 0 && (
    <button
      onClick={handleMarkAllRead}
      className="text-xs font-medium text-blue-600 hover:underline"
    >
      Mark all as read
    </button>
  )}
</div>

          {loading ? (
  <div className="p-4 text-center text-sm text-muted-foreground">
    Loading notifications...
  </div>
) : error ? (
  <div className="p-4 text-center text-sm text-red-500">
    {error}
  </div>
) : notifications.length === 0 ? (
            <div className="p-3 text-sm text-muted-foreground">
              No notifications
            </div>
          ) : (
            notifications.map((item) => (
  <div
    key={item.id}
    className={`flex items-start justify-between border-b border-gray-200 dark:border-gray-700 px-4 py-4 transition hover:bg-muted ${
  item.isRead
    ? "bg-background"
    : "bg-blue-50 dark:bg-blue-950/20"
}`}
  >
    {/* Left Side */}
    <div
      className="flex-1 cursor-pointer"
      onClick={() =>
        handleNotificationClick(item.id, item.isRead)
      }
    >
     {!item.isRead && (
  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-600"></span>
)}
     
      <span className="mb-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-700 dark:bg-gray-700 dark:text-gray-200">
  {item.type.replace("_", " ")}
</span>

<div
  className={
    item.isRead
      ? "text-base font-semibold text-gray-800 dark:text-gray-200"
      : "text-base font-bold text-black dark:text-white"
  }
>
  {item.title}
</div>

<div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
  {item.body}
</div>

<div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
  {formatDistanceToNow(new Date(item.createdAt), {
    addSuffix: true,
  })}
</div>

     
    </div>

    {/* Delete Button */}
    <button
  onClick={() => handleDelete(item.id)}
  className="ml-3 rounded-md p-2 text-gray-500 transition hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30"
  title="Delete notification"
>
  ✕
</button>
  </div>
))
          )}
        </div>
        
      )}
      
    </div>
  );
}