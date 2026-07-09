const BASE_URL = "http://localhost:4000";

export async function getNotifications() {
  const res = await fetch(`${BASE_URL}/notifications`, {
    headers: {
      "X-Tenant-Id": "tenant-1",
      "X-User-Id": "user-1",
    },
  });

  return res.json();
}