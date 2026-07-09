import ActivityFeed from "./activity-feed";
import AIInsights from "./ai-insights";
import BusinessHealth from "./business-health";
import CustomerMap from "./customer-map";
//import Pipeline from "./pipeline";
import { DashboardHeader } from "./dashboard-header";
import { Notifications } from "./notification";
import QuickActions from "./quick-actions";
import RevenueChart from "./revenue-chart";
import SalesLeaderboard from "./sales-leaderboard";
import { StatsGrid } from "./stats-grid";
import { Tasks } from "./tasks";
import { TeamPerformance } from "./team-performance";
import UpcomingMeetings from "./upcoming-meetings";

export function Dashboard() {
  return (
    <div className="space-y-8">

      <DashboardHeader />

      <StatsGrid />

      {/* Revenue + AI */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <AIInsights />
      </div>

      {/* Pipeline + Activity */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* <Pipeline /> */}
        <ActivityFeed />
      </div>

      {/* Customer Map + Leaderboard */}
      <div className="grid gap-6 xl:grid-cols-2">
        <CustomerMap />
        <SalesLeaderboard />
      </div>

      {/* Business Health + Team */}
      <div className="grid gap-6 xl:grid-cols-2">
        <BusinessHealth />
        <TeamPerformance />
      </div>

      {/* Meetings + Tasks */}
      <div className="grid gap-6 xl:grid-cols-2">
        <UpcomingMeetings />
        <Tasks />
      </div>

      {/* Quick Actions + Notifications */}
      <div className="grid gap-6 xl:grid-cols-2">
        <QuickActions />
        <Notifications />
      </div>

    </div>
  );
}