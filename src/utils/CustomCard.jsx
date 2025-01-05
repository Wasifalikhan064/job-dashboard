import React from 'react';
import { useState } from 'react';
import { Card } from 'flowbite-react';
import {AreaChart, Area,ResponsiveContainer} from "recharts"
import { FaThumbtack } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { announcements,schedules } from '../lib/Data';

export const DisplayCard = ({ title, value, subtitle, children, className,subtitleColor }) => {
  return (
    <Card className={`p-0 ${className}`}>
      <div className="flex flex-col justify-between">
        <div>
          <h5 className="text-sm font-medium text-[#161E54]">{title}</h5>
          <h2 className="text-2xl font-bold text-[#161E54]">{value}</h2>
          {subtitle && <p className={`text-sm mt-1 ${subtitleColor || 'text-[#FF5151]'}`}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </Card>
  );
};


export const StatisticsCard = ({ title, value, menCount, womenCount, data,trend ,percentage  }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg flex justify-between items-center w-full max-w-md">
      {/* Left Section */}
      <div>
        <h2 className="text-lg font-bold text-[#161E54]">{title}</h2>
        <p className="text-4xl font-bold text-[#161E54]">{value}</p>
        <div className="flex flex-col col-span-2 gap-2 text-sm text-[#303030] mt-2">
          <p>Men: {menCount}</p>
          <p>Women: {womenCount}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center">
        {/* Percentage and Chart */}
        <div className="flex flex-col items-center">
          {/* Percentage */}
          {/* <p className="text-sm font-bold text-red-600 mb-1">
            +{percentage}% <span className="text-xs">↑</span>
          </p> */}
           <div className="flex items-center mb-1">
          <p
            className={`text-sm font-bold ${
              trend === "increase" ? "text-[#FF5151]" : "text-[#161E54]"
            }`}
          >
            {trend === "increase" ? "+" : "-"}{percentage}%
          </p>
          <span className="ml-1">
            {trend === "increase" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#FF5151]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#161E54]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        </div>
            <div className="w-32 h-16">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area
                type="natural"
                dataKey="value"
                stroke="#FF4C61"
                fill="rgba(255, 76, 97, 0.2)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        </div>
 <p className="mt-2 text-xs bg-[#FFEFE7] text-[#303030]">{trend === "increase" ? "+" : "-"}{percentage}%  Past Month</p>
      </div>
    </div>
  );

};

export const RecentActivityCard = () => {
  return (
    <div className="max-w-sm bg-gray-900 text-white rounded-lg shadow-lg p-6">
      <div className="text-sm text-gray-400">10.40 AM, Fri 10 Sept 2021</div>
      <h2 className="mt-2 text-lg font-semibold">You Posted a New Job</h2>
      <p className="mt-1 text-sm text-gray-300">
        Kindly check the requirements and terms of work and make sure everything is right.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-400">Today you makes 12 Activity</span>
        <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export const Announcements = () => {
  const [selectedDate, setSelectedDate] = useState("2021-09-13");
  const filteredAnnouncements = announcements.filter(
    (announcement) => announcement.date === selectedDate
  );

  return (
    <div className=" mx-auto bg-white rounded-lg shadow-lg border">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Announcement</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="text-sm text-gray-600 border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="flex items-start justify-between p-4 border-b last:border-none"
            >
              <div>
                <h3 className="font-medium text-gray-800">
                  {announcement.title}
                </h3>
                <p className="text-sm text-gray-500">{announcement.time}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaThumbtack className="text-gray-400" />
                <HiDotsVertical className="text-gray-400" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 p-4">
            No announcements for this date.
          </p>
        )}
      </div>
      <div className="text-center p-4 border-t">
        <button className="text-sm font-medium text-red-600 hover:underline">
          See All Announcement
        </button>
      </div>
    </div>
  );
};
 
export const UpcomingSchedule = () => {
  const [selectedDate, setSelectedDate] = useState("2021-09-13");
  const filteredSchedules = schedules.filter(
    (schedule) => schedule.date === selectedDate
  );
  const groupedSchedules = filteredSchedules.reduce((acc, schedule) => {
    if (!acc[schedule.priority]) {
      acc[schedule.priority] = [];
    }
    acc[schedule.priority].push(schedule);
    return acc;
  }, {});

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg border">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Upcoming Schedule</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="text-sm text-gray-600 border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        {Object.keys(groupedSchedules).map((priority) => (
          <div key={priority} className="p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">{priority}</h3>
            {groupedSchedules[priority].map((schedule) => (
              <div
                key={schedule.id}
                className="flex items-start justify-between p-3 border rounded-lg mb-2 shadow-sm"
              >
                <div>
                  <h4 className="font-medium text-gray-800">{schedule.title}</h4>
                  <p className="text-sm text-gray-500">{schedule.time}</p>
                </div>
                <HiDotsVertical className="text-gray-400" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-center p-4 border-t">
        <button className="text-sm font-medium text-red-600 hover:underline">
          Create a New Schedule
        </button>
      </div>
    </div>
  );
};