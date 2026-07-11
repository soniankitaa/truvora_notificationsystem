const BASE_URL = "http://localhost:4000";

const headers = {
  "Content-Type": "application/json",
  "x-user-id": "user-1",
  "x-tenant-id": "tenant-1",
};

export async function getNotifications() {
 
  const res = await fetch(`${BASE_URL}/notifications`, {
    headers,
    cache: "no-store",
  });

  

  const data = await res.json();

  

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