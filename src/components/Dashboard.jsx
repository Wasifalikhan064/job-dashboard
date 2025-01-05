import React from "react";
import {
  Announcements,
  DisplayCard,
  RecentActivityCard,
  StatisticsCard,
  UpcomingSchedule,
} from "../utils/CustomCard";
import { employeesData, talentRequestData } from "../lib/Data";
export default function Dashboard() {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 md:p-6">
        <header className="md:col-span-12">
        <h1 className="text-2xl text-[#161E54]">Dashboard</h1>
      </header>  
      <div className="md:col-span-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DisplayCard
            title="Available Position"
            value="24"
            subtitle="4 Urgently needed"
            className="bg-red-50 text-[#FFEFE7] min-h-[150px]"
            subtitleColor="text-[#FF5151]"
          />
          <DisplayCard
            title="Job Open"
            value="10"
            subtitle="4 Active hiring"
            className="bg-blue-50 text-[#E8F0FB] min-h-[150px]"
            subtitleColor="text-[#3786F1]"
          />
          <DisplayCard
            title="New Employees"
            value="24"
            subtitle="4 Departments"
            className="bg-pink-50 text-[#FDEBF9] min-h-[150px]"
            subtitleColor="text-[#EE61CF]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatisticsCard
            title="Total Employees"
            value={216}
            menCount={120}
            womenCount={96}
            data={employeesData}
            percentage={2}
            trend="decrease"
          />
          <StatisticsCard
            title="Talent Request"
            value={16}
            menCount={6}
            womenCount={10}
            data={talentRequestData}
            percentage={5}
            trend="increase"
          />
        </div>
        <div>
          <Announcements className="min-h-[150px]" />
        </div>
      </div>
      <div className="md:col-span-4 flex flex-col gap-6">
        <div className="">
          <RecentActivityCard className="min-h-[150px]" />
        </div>
        <div>
          <UpcomingSchedule className="min-h-[150px]" />
        </div>
      </div>
    </div>
  );
}
