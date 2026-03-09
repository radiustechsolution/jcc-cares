"use client";
import { LuImport } from "react-icons/lu";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiEdit3,
  FiMail,
  FiRotateCcw,
} from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { BsTicket } from "react-icons/bs";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FiPhone } from "react-icons/fi"; // using FiPhone for the phone icon
import { HiOutlineDocumentText } from "react-icons/hi2"; // for file icon
import { HiOutlineMail } from "react-icons/hi";
import { PiCopySimpleBold, PiCopySimpleLight } from "react-icons/pi";

type Ticket = {
  id: string;
  subject: string;
  assignedTo: string;
  group: string;
  status: "InProgress" | "Resolved" | "Assigned" | "New" | "Escalated";
  isChecked?: boolean;
};

const demoTickets: Ticket[] = [
  {
    id: "JCC-2026-001",
    subject: "Suggestion",
    assignedTo: "Olumide",
    group: "Network",
    status: "InProgress",
  },
  {
    id: "JCC-2026-002",
    subject: "Compliant",
    assignedTo: "Administrator",
    group: "Network",
    status: "Resolved",
  },
  {
    id: "JCC-2026-003",
    subject: "Feedback",
    assignedTo: "Kelvin",
    group: "-",
    status: "Escalated",
  },

  {
    id: "JCC-2026-004",
    subject: "Compliant",
    assignedTo: "HR",
    group: "-",
    status: "Resolved",
  },
  {
    id: "JCC-2026-005",
    subject: "Suggestion",
    assignedTo: "Administrator",
    group: "Network",
    status: "New",
  },
];

const statusStyles = {
  InProgress: "bg-orange-100 text-orange-700 border border-orange-300",
  Resolved: "bg-green-100 text-green-700 border border-green-300",
  Assigned: "bg-blue-100 text-blue-700 border border-blue-300",
  New: "bg-gray-100 text-gray-700 border border-gray-300",
  Escalated: "bg-red-100 text-red-700 border border-red-300",
};
export default function Home() {
  const [currentTableAction, setCurrentTableAction] = useState("submissions");

  const [tickets] = useState(
    demoTickets.map((t) => ({ ...t, isChecked: false }))
  );
  const tableControls = [
    {
      count: 312,
      title: "Submissions",
      id: "submissions",
    },
    {
      count: 120,
      title: "Resolved",
      id: "resolved",
    },
    {
      count: 50,
      title: "InProgress",
      id: "inprogress",
    },
  ];

  return (
    <section className="w-full h-full flex items-start flex-col md:flex-row justify-between">
      {/* left – unchanged */}
      <div className="w-[100%] md:w-[75%] h-full flex flex-col ">
        {/* Top controls */}
        <div className="py-4 flex items-center px-5 justify-between">
          {/* Left */}
          <div className="flex items-center gap-12">
            <p className="text-[22px]">All tasks</p>
            <div className="hidden md:flex items-center gap-2 cursor-pointer">
              <LuImport size={15} className="text-primary" />
              <p className="text-[12px] text-primary">Import request</p>
            </div>
            <div className="hidden md:flex items-center gap-2 cursor-pointer">
              <IoSettingsOutline size={15} className="text-primary" />
              <p className="text-[12px] text-primary">Settings</p>
              <FiChevronDown size={15} className="text-primary" />
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center gap-2">
            <FiHelpCircle size={15} className="text-primary" />
            <p className="text-[12px] text-primary">Help & Support</p>
          </div>
        </div>

        {/* Search Controls */}
        <div className="px-4 sm:px-5 py-4 bg-content1">
          <div className="border border-gray-300 rounded-md overflow-hidden">
            {/* Mobile: stacked – Desktop: grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] divide-y md:divide-y-0 md:divide-x divide-gray-300">
              {/* Filter 1 */}
              <div className="min-h-[44px] flex items-center px-3 sm:px-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between w-full text-[13px] sm:text-[12px]">
                  <span>
                    Search in - <span className="opacity-50">Compliants</span>
                  </span>
                  <FiChevronDown size={15} className="ml-2 flex-shrink-0" />
                </div>
              </div>

              {/* Filter 2 */}
              <div className="min-h-[44px] flex items-center px-3 sm:px-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between w-full text-[13px] sm:text-[12px]">
                  <span>
                    Sub modules -{" "}
                    <span className="opacity-50">Default search</span>
                  </span>
                  <FiChevronDown size={15} className="ml-2 flex-shrink-0" />
                </div>
              </div>

              {/* Keyword input area */}
              <div className="min-h-[44px] flex items-center px-3 sm:px-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center w-full text-[13px] sm:text-[12px]">
                  <span className="opacity-50">Enter keyword</span>
                  {/* Optional: could turn this into real <input> later */}
                </div>
              </div>

              {/* Search button */}
              <div className="min-h-[44px] md:min-h-[auto]">
                <button
                  type="button"
                  className="
            w-full md:w-auto h-full px-5 sm:px-6 
            text-[13px] font-medium text-primary 
            hover:bg-primary/5 active:bg-primary/10 
            transition-colors flex items-center justify-center
          "
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Record section */}
        <div className="bg-content1 flex-1 border-t border-gray-300 py-2">
          {/* Actions */}
          <div className="flex items-center justify-between p-3 px-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer">
                <BsTicket size={15} className="text-primary" />
                <p className="text-[12px] text-primary">Compliants</p>
                <FiChevronDown size={15} className="text-primary" />
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <HiOutlineHandRaised size={15} className="" />
                <p className="text-[12px] ">Suggestions</p>
              </div>
            </div>

            {/* Pagination Control */}
            <div className="hidden md:flex items-center gap-10">
              <FiChevronLeft
                size={14}
                className="text-primary cursor-pointer"
              />
              {[1, 2, 3].map((num) => (
                <p className="text-[12px] cursor-pointer" key={num}>
                  {num}
                </p>
              ))}
              <FiChevronRight
                size={14}
                className="text-primary cursor-pointer"
              />
            </div>
          </div>

          {/* Total ticket, resolve etc Add the ui here */}
          <div className="mt-3">
            {/* Tabs + Search row */}
            <div className="border-b border-gray-300">
              <div className="px-4 pt-3 pb-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Tabs – horizontal scroll on small screens */}
                <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide scrollbar-thumb-gray-300/60">
                  <div className="flex items-center gap-6 sm:gap-10 min-w-max">
                    {tableControls.map((control) => (
                      <button
                        key={control.id}
                        type="button"
                        onClick={() => setCurrentTableAction(control.id)}
                        className={`
                flex shrink-0 items-center gap-2 pb-2 text-sm whitespace-nowrap transition-colors
                ${
                  currentTableAction === control.id
                    ? "border-b-2 border-primary text-primary font-medium"
                    : "text-gray-600 hover:text-gray-800"
                }
              `}
                      >
                        <span>{control.title}</span>
                        <span
                          className={`
                  min-w-[2rem] text-center text-[10px] font-medium px-2.5 py-0.5 rounded-full text-white
                  ${currentTableAction === control.id ? "bg-gray-900" : "bg-gray-500/90"}
                `}
                        >
                          {control.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search input – always visible, but narrower on mobile */}
                <div className="relative flex items-center border border-gray-300 rounded  min-w-[220px] sm:min-w-[260px] h-9 sm:h-10">
                  <input
                    type="text"
                    placeholder="Search Request ID"
                    className="flex-1 h-full px-3 text-sm bg-transparent outline-none placeholder:text-gray-400"
                  />
                  <div className="pr-3 text-gray-400">
                    <RiSearch2Line size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Table area */}
            <div className="overflow-x-auto">
              <div className="min-w-[680px] px-4 py-1">
                {" "}
                {/* ← minimum sensible width for table */}
                <table className="w-full text-left border-collapse text-sm">
                  <thead className="sticky top-0 z-10 ">
                    <tr className="border-b border-gray-200">
                      <th className="w-10 p-3">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </th>
                      <th className="whitespace-nowrap p-3 font-medium">
                        Ticket ID
                      </th>
                      <th className="whitespace-nowrap p-3 font-medium">
                        Type
                      </th>
                      <th className="whitespace-nowrap p-3 font-medium">
                        Assigned to
                      </th>
                      <th className="whitespace-nowrap p-3 font-medium">
                        Status
                      </th>
                      <th className="whitespace-nowrap p-3 text-center font-medium w-28">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tickets.map((ticket, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50/70 transition-colors"
                      >
                        <td className="p-3">
                          <input
                            type="checkbox"
                            checked={ticket.isChecked ?? false}
                            onChange={() => {}}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                        </td>
                        <td className="p-3 text-[13px] opacity-70">
                          {ticket.id}
                        </td>
                        <td className="p-3 text-[13px] opacity-70">
                          {ticket.subject}
                        </td>
                        <td className="p-3 text-[13px] opacity-70">
                          {ticket.assignedTo}
                        </td>
                        <td className="p-3">
                          <span
                            className={`inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full ${statusStyles[ticket.status]}`}
                          >
                            {ticket.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center justify-center gap-4 sm:gap-5 text-gray-500">
                            <button
                              title="Reply / Email"
                              className="hover:text-gray-700 transition-colors"
                            >
                              <HiOutlineMail size={17} className="opacity-80" />
                            </button>
                            <button
                              title="Re-open / Loop"
                              className="hover:text-gray-700 transition-colors"
                            >
                              <PiCopySimpleBold
                                size={17}
                                className="opacity-80"
                              />
                            </button>
                            <button
                              title="Edit"
                              className="hover:text-gray-700 transition-colors"
                            >
                              <FiEdit3 size={17} className="opacity-80" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right – this is the new part matching your screenshot */}
      <div className="w-full md:w-[25%] border-l border-gray-300 flex flex-col h-full bg-content1">
        {/* Quick Ticket Creation Card */}
        <div className="">
          <div className="px-4 py-3">
            <p className="text-[14px] font-medium">Create New Submission</p>
          </div>

          <div className="p-4 flex flex-col gap-4">
            {/* Requester name */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] ">Submision Type</label>
              {/* Dropdown Selection */}
              <div className="relative">
                <select className="w-full  border border-gray-300 rounded px-3 py-2 text-[13px] appearance-none focus:outline-none focus:border-primary">
                  <option value="" className="">
                    Select Type
                  </option>
                  <option value="1">Compliant</option>
                  <option value="2">Suggestion</option>
                  <option value="2">Feedback</option>
                  {/* add more as needed */}
                </select>
                <FiChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2  pointer-events-none"
                />
              </div>
            </div>

            {/* Site dropdown */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px]">Show / Hide Identity</label>
              {/* Dropdown Selection */}
              <div className="relative">
                <select className="w-full  border border-gray-300 rounded px-3 py-2 text-[13px] appearance-none focus:outline-none focus:border-primary">
                  <option value="" className="">
                    Select Identity
                  </option>
                  <option value="1">Visible</option>
                  <option value="2">Hidden</option>
                  {/* add more as needed */}
                </select>
                <FiChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2  pointer-events-none"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] ">Description</label>
              <textarea
                rows={4}
                className="w-full  border border-gray-300 rounded px-3 py-2 text-[13px]  focus:outline-none focus:border-primary resize-none"
                placeholder="Enter description"
              />
            </div>

            {/* Create button */}
            <button className="mt-1 bg-primary hover:bg-primary/90 text-white text-[13px] font-medium py-2.5 rounded flex items-center justify-center gap-2 transition">
              <span>+</span> Create Ticket
            </button>

            {/* Add more details */}
            <p className="text-[12px] text-primary cursor-pointer hover:underline text-center mt-1">
              Add more details &gt;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
