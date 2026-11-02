import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WelcomeBanner from '../components/WelcomeBanner';
import StatCard from '../components/StatCard';
import ProjectStatisticsChart from '../components/ProjectStatisticsChart';
import ProjectSummaryCalendar from '../components/ProjectSummaryCalendar';
import ProjectCategoryDonut from '../components/ProjectCategoryDonut';
import MetricMiniCard from '../components/MetricMiniCard';
import ActivitiesFeed from '../components/ActivitiesFeed';
import ActiveProjectsTable from '../components/ActiveProjectsTable';
import FileManagerWidget from '../components/FileManagerWidget';
import MessagesWidget from '../components/MessagesWidget';
import Footer from '../components/Footer';
import TopNavSwitcher from '../components/TopNavSwitcher';
import { 
  FolderCheck, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  DollarSign, 
  UserPlus, 
  Clock3, 
  Users 
} from 'lucide-react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  });

  // Automatically adjust on initial load / resize if crossed threshold
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && sidebarOpen) {
        // Auto close on small mobile to avoid blocking content
        // But leave user in control
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-[#FAFBFD] flex flex-col">
      {/* Quick Switcher for Design Review */}
      <TopNavSwitcher />

      {/* Left Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div 
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          sidebarOpen ? 'md:ml-64' : 'md:ml-20'
        }`}
      >
        {/* Top Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Dashboard Body */}
        <main className="flex-1 p-3 sm:p-5 md:p-6 space-y-6 max-w-[1600px] w-full mx-auto pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center text-xs font-semibold text-[#506690]">
            <span className="text-[#4361EE] cursor-pointer hover:underline">Dashboard</span>
            <span className="mx-2 text-[#888ea8]">/</span>
            <span>Multipurpose</span>
          </div>

          {/* Row 1: Welcome Banner + 4 KPI Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Welcome Banner */}
            <div className="lg:col-span-5 flex">
              <div className="w-full">
                <WelcomeBanner />
              </div>
            </div>

            {/* 4 Stat Cards (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <StatCard
                title="Total Projects"
                value="7,522"
                icon={FolderCheck}
                color="blue"
              />
              <StatCard
                title="Completed Projects"
                value="5506"
                icon={CheckCircle2}
                color="green"
              />
              <StatCard
                title="Overdue Projects"
                value="105"
                icon={XCircle}
                color="orange"
              />
              <StatCard
                title="Upcoming Projects"
                value="15"
                icon={Clock}
                color="red"
              />
            </div>
          </div>

          {/* Row 2: Project Statistics + Project Summary Calendar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Statistics Bar Chart */}
            <div className="lg:col-span-8">
              <ProjectStatisticsChart />
            </div>

            {/* Project Summary Calendar */}
            <div className="lg:col-span-4">
              <ProjectSummaryCalendar />
            </div>
          </div>

          {/* Row 3: Project Category + 4 Mini Cards + Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Category Donut */}
            <div className="xl:col-span-3">
              <ProjectCategoryDonut />
            </div>

            {/* 4 Mini Cards in 2x2 Grid */}
            <div className="xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <MetricMiniCard
                title="Earning"
                value="$20,125"
                trend="100%"
                trendIsUp={true}
                period="vs last month"
                icon={DollarSign}
                colorScheme="green"
              />
              <MetricMiniCard
                title="New Clients"
                value="129"
                trend="99%"
                trendIsUp={false}
                period="vs last month"
                icon={UserPlus}
                colorScheme="pink"
              />
              <MetricMiniCard
                title="Hours"
                value="154"
                trend="45%"
                trendIsUp={false}
                period="vs This month"
                icon={Clock3}
                colorScheme="blue"
              />
              <MetricMiniCard
                title="Employees"
                value="650"
                trend="96%"
                trendIsUp={true}
                period="vs last month"
                icon={Users}
                colorScheme="orange"
              />
            </div>

            {/* Activities Feed */}
            <div className="md:col-span-2 xl:col-span-4">
              <ActivitiesFeed />
            </div>
          </div>

          {/* Row 4: Active Projects Table + (FileManager & Messages) */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Active Projects Table */}
            <div className="xl:col-span-8">
              <ActiveProjectsTable />
            </div>

            {/* Right Column: File Manager + Messages */}
            <div className="xl:col-span-4 space-y-5 sm:space-y-6">
              <FileManagerWidget />
              <MessagesWidget />
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
