# Tenant Isolation Tests

## Test 1 - Tenant A only sees Tenant A notifications

Request

GET /notifications

Headers

X-Tenant-Id: tenant-1
X-User-Id: user-1

Expected Result

- Only notifications belonging to tenant-1 are returned.
- Notifications from tenant-2 are never returned.

Result

✅ Passed


---

## Test 2 - Tenant B only sees Tenant B notifications

Request

GET /notifications

Headers

X-Tenant-Id: tenant-2
X-User-Id: user-2

Expected Result

- Only tenant-2 notifications are returned.

Result

✅ Passed


---

## Test 3 - Unread Count Isolation

Request

GET /notifications/unread-count

Headers

Tenant 1

Expected

Only unread notifications from tenant-1 are counted.

Result

✅ Passed


---

## Test 4 - Cross Tenant Read Protection

Request

PATCH /notifications/:id/read

Headers

Tenant 1

Notification belongs to Tenant 2

Expected

404 Not Found

Result

✅ Passed