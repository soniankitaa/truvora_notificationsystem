"use client";

import { useState } from "react";

export default function TriggerPanel() {
  const [loading, setLoading] = useState(false);

  async function triggerMemberInvite() {
    setLoading(true);

    await fetch("http://localhost:4000/triggers/member-invited", {
      method: "POST",
      headers: {
        "X-Tenant-Id": "tenant-1",
        "X-User-Id": "user-1",
      },
    });

    setLoading(false);
  }

  async function triggerCreatorReply() {
    setLoading(true);

    await fetch("http://localhost:4000/triggers/creator-replied", {
      method: "POST",
      headers: {
        "X-Tenant-Id": "tenant-1",
        "X-User-Id": "user-1",
      },
    });

    setLoading(false);
  }

  return (
    <div className="rounded-xl border bg-background p-6 shadow-sm">

      <h2 className="text-xl font-semibold">
        Event Simulator
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        Simulate CRM events that automatically generate notifications.
      </p>

      <div className="mt-6 flex gap-4">

        <button
          onClick={triggerMemberInvite}
          disabled={loading}
          className="rounded-lg border px-4 py-2 hover:bg-muted"
        >
          Simulate Team Invitation
        </button>

        <button
          onClick={triggerCreatorReply}
          disabled={loading}
          className="rounded-lg border px-4 py-2 hover:bg-muted"
        >
          Simulate Creator Reply
        </button>

      </div>

    </div>
  );
}