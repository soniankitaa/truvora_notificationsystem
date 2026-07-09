"use client";

const meetings = [
  {
    time: "09:30",
    title: "Enterprise Client Review",
  },
  {
    time: "11:00",
    title: "Marketing Strategy",
  },
  {
    time: "02:00",
    title: "Sales Pipeline Review",
  },
  {
    time: "04:30",
    title: "Investor Meeting",
  },
];

export default function UpcomingMeetings() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Today's Meetings
      </h2>

      <div className="space-y-4">

        {meetings.map((meeting) => (

          <div
            key={meeting.time}
            className="rounded-xl border p-4"
          >

            <p className="text-xs text-muted-foreground">

              {meeting.time}

            </p>

            <p className="mt-1 font-semibold">

              {meeting.title}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}