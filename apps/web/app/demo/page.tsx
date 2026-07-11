"use client";

import { useState } from "react";
import {
  ArrowDown,
  Database,
  Bell,
  Server,
  Workflow,
  User,
} from "lucide-react";
export default function DemoPage() {
  const [message, setMessage] = useState("");
  


 
  async function triggerInvite() {
    setMessage("Creating notification...");

    try {
      const res = await fetch(
        "http://localhost:4000/triggers/member-invited",
        {
          method: "POST",
          headers: {
            "X-Tenant-Id": "tenant-1",
            "X-User-Id": "user-1",
          },
        }
      );

      const data = await res.json();

      if (data.success) {
       setMessage("Team member invitation notification created successfully.");
    } else {
        setMessage("Team member invitation notification creation failed.");
      }
    } catch {
      setMessage(" Server unavailable.");
    }
  }

  async function triggerReply() {
    setMessage("Creating notification...");

    try {
      const res = await fetch(
        "http://localhost:4000/triggers/creator-replied",
        {
          method: "POST",
          headers: {
            "X-Tenant-Id": "tenant-1",
            "X-User-Id": "user-1",
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        setMessage("Creator reply notification created successfully.");
    } else {
        setMessage("Creator reply notification creation failed.");
      }
    } catch {
      setMessage(" Server unavailable.");
    }
  }

  return (
  <div className="space-y-8">

    {/* Header */}

    <div className="rounded-2xl border bg-background p-8 shadow-sm">

  <div className="flex items-center justify-between">

    <div>

      <h1 className="text-4xl font-bold">
        Notification System
      </h1>

      <p className="mt-2 text-muted-foreground">
        Full Stack Demonstration
      </p>

    </div>

    <div className="grid grid-cols-2 gap-2 text-sm">

      <div className="rounded-lg border px-4 py-2 text-center">
        Express
      </div>

      <div className="rounded-lg border px-4 py-2 text-center">
        Prisma
      </div>

      <div className="rounded-lg border px-4 py-2 text-center">
        PostgreSQL
      </div>

      <div className="rounded-lg border px-4 py-2 text-center">
        Next.js
      </div>

    </div>

  </div>

  <div className="mt-8 grid grid-cols-3 gap-6">

    <div className="rounded-xl border p-5">

      <div className="text-3xl font-bold">
        2
      </div>

      <div className="mt-1 text-sm text-muted-foreground">
        Trigger Events
      </div>

    </div>

    <div className="rounded-xl border p-5">

      <div className="text-3xl font-bold">
        7
      </div>

      <div className="mt-1 text-sm text-muted-foreground">
        API Endpoints
      </div>

    </div>

    <div className="rounded-xl border p-5">

      <div className="text-3xl font-bold">
        15s
      </div>

      <div className="mt-1 text-sm text-muted-foreground">
        Auto Polling
      </div>

    </div>

  </div>

</div>

{/* Event Cards */}

<div className="grid gap-6 lg:grid-cols-2">

  {/* Team Member Invited */}

  <div className="rounded-2xl border bg-background p-6 shadow-sm">

    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
      CRM Event
    </span>

    <h2 className="mt-3 text-xl font-semibold">
      Team Member Invited
    </h2>

    <p className="mt-3 text-sm leading-6 text-muted-foreground">
      Simulates inviting a new employee into the organisation.
      The backend automatically creates a tenant-wide notification
      visible to every user within the same tenant.
    </p>

    <div className="mt-5 rounded-lg border bg-muted/30 p-3">
      <div className="text-sm font-medium">
        Creates
      </div>

      <div className="mt-1 text-sm text-muted-foreground">
        Tenant-wide Notification
      </div>
    </div>

    <button
      onClick={triggerInvite}
      className="mt-6 w-full rounded-lg bg-black py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
    >
      Trigger Event
    </button>

  </div>

  {/* Creator Reply */}

  <div className="rounded-2xl border bg-background p-6 shadow-sm">

    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
      CRM Event
    </span>

    <h2 className="mt-3 text-xl font-semibold">
      Creator Reply Received
    </h2>

    <p className="mt-3 text-sm leading-6 text-muted-foreground">
      Simulates a creator replying to an outreach campaign.
      The backend automatically creates a notification for the
      assigned account manager only.
    </p>

    <div className="mt-5 rounded-lg border bg-muted/30 p-3">
      <div className="text-sm font-medium">
        Creates
      </div>

      <div className="mt-1 text-sm text-muted-foreground">
        User-specific Notification
      </div>
    </div>

    <button
      onClick={triggerReply}
      className="mt-6 w-full rounded-lg bg-black py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
    >
      Trigger Event
    </button>

  </div>

</div>

    <div className="rounded-2xl border bg-background p-6 shadow-sm">

    <div className="flex items-center justify-between">

        <h2 className="text-lg font-semibold">
            Activity Log
        </h2>

        <span className="rounded-full border px-3 py-1 text-xs">
            Live
        </span>

    </div>

    <div className="mt-5 rounded-xl border bg-muted/20 p-4">

        <p className="text-sm">
            {message || "Waiting for a simulated CRM event..."}
        </p>

    </div>

</div>

    {/* Flow */}

    <div className="rounded-2xl border bg-background p-8 shadow-sm">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="text-2xl font-semibold">
        End-to-End Notification Pipeline
      </h2>

      <p className="mt-2 text-muted-foreground">
        Every notification follows the same lifecycle from business event
        to user interaction.
      </p>

    </div>

    <div className="rounded-lg border px-4 py-2 text-sm font-medium">
      Live Workflow
    </div>

  </div>

  <div className="mt-10 flex flex-col items-center">

    {/* Event */}

    <div className="w-full max-w-md rounded-xl border p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <Workflow className="h-7 w-7" />

        <div>

          <h3 className="font-semibold">
            CRM Event
          </h3>

          <p className="text-sm text-muted-foreground">
            Team invited or creator replied
          </p>

        </div>

      </div>

    </div>

    <ArrowDown className="my-4 h-6 w-6 text-muted-foreground" />

    {/* Trigger */}

    <div className="w-full max-w-md rounded-xl border p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <Server className="h-7 w-7" />

        <div>

          <h3 className="font-semibold">
            Trigger API
          </h3>

          <p className="text-sm text-muted-foreground">
            Express endpoint automatically creates a notification
          </p>

        </div>

      </div>

    </div>

    <ArrowDown className="my-4 h-6 w-6 text-muted-foreground" />

    {/* Database */}

    <div className="w-full max-w-md rounded-xl border p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <Database className="h-7 w-7" />

        <div>

          <h3 className="font-semibold">
            PostgreSQL Database
          </h3>

          <p className="text-sm text-muted-foreground">
            Prisma stores tenant, user and notification details
          </p>

        </div>

      </div>

    </div>

    <ArrowDown className="my-4 h-6 w-6 text-muted-foreground" />

    {/* Bell */}

    <div className="w-full max-w-md rounded-xl border p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <Bell className="h-7 w-7" />

        <div>

          <h3 className="font-semibold">
            Notification Bell
          </h3>

          <p className="text-sm text-muted-foreground">
            Frontend polls every 15 seconds and updates unread count
          </p>

        </div>

      </div>

    </div>

    <ArrowDown className="my-4 h-6 w-6 text-muted-foreground" />

    {/* User */}

    <div className="w-full max-w-md rounded-xl border p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <User className="h-7 w-7" />

        <div>

          <h3 className="font-semibold">
            User Interaction
          </h3>

          <p className="text-sm text-muted-foreground">
            User views, marks as read or deletes the notification
          </p>

        </div>

      </div>

    </div>

  </div>

</div>
    <div className="rounded-2xl border bg-background p-8 shadow-sm">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="text-2xl font-semibold">
        System Architecture
      </h2>

      <p className="mt-2 text-muted-foreground">
        The notification service is designed as an independent module that can
        integrate with any CRM platform.
      </p>

    </div>

    <div className="rounded-lg border px-4 py-2 text-sm">
      Enterprise Ready
    </div>

  </div>

  <div className="mt-8 grid gap-6 lg:grid-cols-4">

    <div className="rounded-xl border p-5">

      <h3 className="font-semibold">
        CRM Modules
      </h3>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">

        <div>Sales</div>

        <div>Campaigns</div>

        <div>Creators</div>

        <div>Reports</div>

      </div>

    </div>

    <div className="rounded-xl border p-5">

      <h3 className="font-semibold">
        Notification Service
      </h3>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">

        <div>Trigger APIs</div>

        <div>Tenant Isolation</div>

        <div>Notification Logic</div>

        <div>REST Endpoints</div>

      </div>

    </div>

    <div className="rounded-xl border p-5">

      <h3 className="font-semibold">
        Data Layer
      </h3>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">

        <div>Prisma ORM</div>

        <div>PostgreSQL</div>

        <div>Notification Model</div>

      </div>

    </div>

    <div className="rounded-xl border p-5">

      <h3 className="font-semibold">
        Frontend
      </h3>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">

        <div>Notification Bell</div>

        <div>Unread Badge</div>

        <div>Polling</div>

        <div>Read Actions</div>

      </div>

    </div>

  </div>

</div>
<div className="rounded-2xl border bg-background p-8 shadow-sm">

<h2 className="text-2xl font-semibold">
Existing CRM Integration
</h2>

<p className="mt-2 text-muted-foreground">
The notification service plugs into existing business modules without changing
their internal logic.
</p>

<div className="mt-8 flex flex-col items-center">

<div className="rounded-xl border px-8 py-4 font-semibold">
Sales Module
</div>

<div className="my-3 text-2xl">↓</div>

<div className="rounded-xl border px-8 py-4 font-semibold">
Campaign Module
</div>

<div className="my-3 text-2xl">↓</div>

<div className="rounded-xl border px-8 py-4 font-semibold">
Notification Service
</div>

<div className="my-3 text-2xl">↓</div>

<div className="rounded-xl border px-8 py-4 font-semibold">
PostgreSQL
</div>

<div className="my-3 text-2xl">↓</div>

<div className="rounded-xl border px-8 py-4 font-semibold">
REST APIs
</div>

<div className="my-3 text-2xl">↓</div>

<div className="rounded-xl border px-8 py-4 font-semibold">
Notification Bell
</div>

</div>

</div>
<div className="rounded-2xl border bg-background p-8 shadow-sm">

<h2 className="text-2xl font-semibold">
Future Roadmap
</h2>

<div className="mt-8 grid gap-4 md:grid-cols-3">

<div className="rounded-xl border p-5">

<h3 className="font-semibold">
Real-time Updates
</h3>

<p className="mt-2 text-sm text-muted-foreground">
Replace polling using WebSockets or Server-Sent Events.
</p>

</div>

<div className="rounded-xl border p-5">

<h3 className="font-semibold">
Notification Preferences
</h3>

<p className="mt-2 text-sm text-muted-foreground">
Allow users to configure notification categories and delivery methods.
</p>

</div>

<div className="rounded-xl border p-5">

<h3 className="font-semibold">
Push Notifications
</h3>

<p className="mt-2 text-sm text-muted-foreground">
Deliver notifications through email and mobile devices.
</p>

</div>

<div className="rounded-xl border p-5">

<h3 className="font-semibold">
Advanced Filters
</h3>

<p className="mt-2 text-sm text-muted-foreground">
Search, archive and categorize notifications.
</p>

</div>

<div className="rounded-xl border p-5">

<h3 className="font-semibold">
Event Bus
</h3>

<p className="mt-2 text-sm text-muted-foreground">
Integrate with Kafka or RabbitMQ for scalable event processing.
</p>

</div>

<div className="rounded-xl border p-5">

<h3 className="font-semibold">
Mobile Support
</h3>

<p className="mt-2 text-sm text-muted-foreground">
Provide native Android and iOS notification experiences.
</p>

</div>

</div>

</div>
<div className="rounded-2xl border bg-background p-8 shadow-sm">

<h2 className="text-2xl font-semibold">
Challenge Requirements
</h2>

<p className="mt-2 text-muted-foreground">
Implementation status for the Full-Stack Notification System challenge.
</p>

<div className="mt-8 overflow-hidden rounded-xl border">

<table className="w-full">

<thead className="border-b bg-muted/40">

<tr>

<th className="px-6 py-3 text-left">
Requirement
</th>

<th className="px-6 py-3 text-center">
Status
</th>

</tr>

</thead>

<tbody>

<tr className="border-b">

<td className="px-6 py-4">
Notification CRUD APIs
</td>

<td className="text-center">
✓
</td>

</tr>

<tr className="border-b">

<td className="px-6 py-4">
Tenant Isolation
</td>

<td className="text-center">
✓
</td>

</tr>

<tr className="border-b">

<td className="px-6 py-4">
Trigger Endpoints
</td>

<td className="text-center">
✓
</td>

</tr>

<tr className="border-b">

<td className="px-6 py-4">
Notification Bell
</td>

<td className="text-center">
✓
</td>

</tr>

<tr className="border-b">

<td className="px-6 py-4">
Unread Badge
</td>

<td className="text-center">
✓
</td>

</tr>

<tr className="border-b">

<td className="px-6 py-4">
Automatic Polling
</td>

<td className="text-center">
✓
</td>

</tr>

<tr className="border-b">

<td className="px-6 py-4">
PostgreSQL + Prisma
</td>

<td className="text-center">
✓
</td>

</tr>

<tr>

<td className="px-6 py-4">
CRM Integration Design
</td>

<td className="text-center">
✓
</td>

</tr>

</tbody>

</table>

</div>

</div>
  </div>
);
}