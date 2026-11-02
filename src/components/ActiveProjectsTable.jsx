import React, { useState } from 'react';
import { LayoutGrid, List, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Brand Logo Design',
    lead: 'Kato F. Tucker',
    leadAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    progress: 100,
    status: 'Completed', // green
    dueDate: '10 Feb 2022',
    assignees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 2,
    name: 'Redesign - Landing Page',
    lead: 'Hedwig F. Nguyen',
    leadAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    progress: 60,
    status: 'In Process', // blue
    dueDate: '15 Mar 2022',
    assignees: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 3,
    name: 'Multipurpose Landing',
    lead: 'Genevieve U. Watts',
    leadAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    progress: 50,
    status: 'In Process', // blue
    dueDate: '26 Nov 2022',
    assignees: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 4,
    name: 'Chat Application',
    lead: 'Casey E. Hood',
    leadAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    progress: 25,
    status: 'Pending', // red
    dueDate: '06 Sep 2021',
    assignees: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 5,
    name: 'Create Wireframe',
    lead: 'Caleb X. Finch',
    leadAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    progress: 100,
    status: 'Completed', // green
    dueDate: '21 Dec 2022',
    assignees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 6,
    name: 'Redesign - Landing Page',
    lead: 'Hedwig F. Nguyen',
    leadAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    progress: 60,
    status: 'In Process', // blue
    dueDate: '15 Mar 2022',
    assignees: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    ],
  },
];

export default function ActiveProjectsTable() {
  const [viewMode, setViewMode] = useState('list'); // 'grid' or 'list'
  const [page, setPage] = useState(1);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-block px-2.5 py-1 text-[11px] font-bold rounded-full bg-[#E6F7EF] text-[#00AB55]">
            Completed
          </span>
        );
      case 'In Process':
        return (
          <span className="inline-block px-2.5 py-1 text-[11px] font-bold rounded-full bg-[#EEF1FE] text-[#4361EE]">
            In Process
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-block px-2.5 py-1 text-[11px] font-bold rounded-full bg-[#FCEFEE] text-[#E7515A]">
            Pending
          </span>
        );
      default:
        return null;
    }
  };

  const getProgressBar = (progress, status) => {
    let color = 'bg-[#4361EE]';
    if (status === 'Completed') color = 'bg-[#00AB55]';
    if (status === 'Pending') color = 'bg-[#E7515A]';

    return (
      <div className="w-24 sm:w-28 bg-[#EBEDF2] h-2 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-[#e0e6ed] shadow-card flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 className="text-base font-bold text-[#0E1726]">Active Projects</h3>

        <div className="flex items-center gap-3">
          {/* Export Report Button */}
          <button className="px-3 py-1.5 rounded-lg border border-[#e0e6ed] bg-[#fdfaf3] text-[#E2A03F] hover:bg-[#faf4e6] text-xs font-bold flex items-center gap-1.5 transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>

          {/* Grid / List toggle pill */}
          <div className="flex items-center bg-[#4361EE] p-1 rounded-full text-white">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1 rounded-full transition-colors ${
                viewMode === 'grid' ? 'bg-white text-primary' : 'text-white/80 hover:text-white'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1 rounded-full transition-colors ${
                viewMode === 'list' ? 'bg-white text-primary' : 'text-white/80 hover:text-white'
              }`}
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Table view */}
      <div className="overflow-x-auto -mx-5 px-5">
        <table className="w-full text-left text-xs whitespace-nowrap">
          <thead>
            <tr className="border-b border-[#e0e6ed] text-[#888ea8] font-bold">
              <th className="pb-3 pr-4">Project Name</th>
              <th className="pb-3 px-4">Project Lead</th>
              <th className="pb-3 px-4">Progress</th>
              <th className="pb-3 px-4">Assignee</th>
              <th className="pb-3 px-4">Status</th>
              <th className="pb-3 pl-4">Due Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f3f6]">
            {projects.map((proj, idx) => (
              <tr key={idx} className="hover:bg-[#f6f8fa] transition-colors group">
                <td className="py-3.5 pr-4 font-bold text-[#0E1726] group-hover:text-primary">
                  {proj.name}
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={proj.leadAvatar}
                      alt={proj.lead}
                      className="w-7 h-7 rounded-full object-cover border border-[#e0e6ed]"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="font-semibold text-[#506690]">{proj.lead}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  {getProgressBar(proj.progress, proj.status)}
                </td>
                <td className="py-3.5 px-4">
                  {/* Overlapping Assignee Avatars */}
                  <div className="flex items-center -space-x-2">
                    {proj.assignees.map((av, aIdx) => (
                      <img
                        key={aIdx}
                        src={av}
                        alt="Assignee"
                        className="w-6 h-6 rounded-full object-cover ring-2 ring-white"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ))}
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  {getStatusBadge(proj.status)}
                </td>
                <td className="py-3.5 pl-4 text-[#506690] font-medium">
                  {proj.dueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 pt-5 border-t border-[#f1f3f6] mt-4">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#e0e6ed] bg-white hover:bg-[#f6f8fa] text-xs font-bold text-[#506690] transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Prev</span>
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#e0e6ed] bg-white hover:bg-[#f6f8fa] text-xs font-bold text-[#506690] transition-colors"
        >
          <span>Next</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

