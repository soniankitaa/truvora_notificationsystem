const BASE_URL = "http://localhost:4000";

const headers = {
  "X-Tenant-Id": "tenant-1",
  "X-User-Id": "user-1",
};

export async function getNotifications() {
  console.log("Calling:", `${BASE_URL}/notifications`);

  const res = await fetch(`${BASE_URL}/notifications`, {
    headers,
    cache: "no-store",
  });

  console.log("Status:", res.status);

  const data = await res.json();

  console.log("Data:", data);

  return data;
}

export async function getUnreadCount() {
  console.log("Calling:", `${BASE_URL}/notifications/unread-count`);

  const res = await fetch(`${BASE_URL}/notifications/unread-count`, {
    headers,
    cache: "no-store",
  });

  console.log("Status:", res.status);

  const data = await res.json();

  console.log("Unread:", data);

  return data;
}

export async function markAsRead(id: string) {
  console.log("Calling:", `${BASE_URL}/notifications/${id}/read`);

  const res = await fetch(
    `${BASE_URL}/notifications/${id}/read`,
    {
      method: "PATCH",
      headers,
    }
  );

  return await res.json();
}

export async function deleteNotification(id: string) {
  const res = await fetch(
    `${BASE_URL}/notifications/${id}`,
    {
      method: "DELETE",
      headers,
    }
  );

  return await res.json();
}

export async function markAllAsRead() {
  const res = await fetch(
    `${BASE_URL}/notifications/read-all`,
    {
      method: "PATCH",
      headers,
    }
  );

  return await res.json();
}