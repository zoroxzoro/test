import React, { useState } from 'react';
import { 
  Home, 
  MessageSquare, 
  Mail, 
  CheckSquare, 
  FileText, 
  Kanban, 
  Contact, 
  Receipt, 
  Calendar, 
  Box, 
  Zap, 
  PieChart, 
  LayoutGrid, 
  Disc, 
  Move, 
  Table, 
  Layers, 
  FileEdit, 
  UserCheck, 
  FileCode, 
  Lock, 
  BookOpen, 
  ChevronDown, 
  ChevronRight, 
  ChevronsLeft,
  ChevronsRight,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [dashboardOpen, setDashboardOpen] = useState(true);
  const [appsOpen, setAppsOpen] = useState(true);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [uiOpen, setUiOpen] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(false);
  const [elementsOpen, setElementsOpen] = useState(false);
  const [tablesOpen, setTablesOpen] = useState(false);
  const [dataTablesOpen, setDataTablesOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [activeSubItem, setActiveSubItem] = useState('Multipurpose');

  const handleItemClick = (openSetter) => {
    if (!isOpen) {
      setIsOpen(true);
    }
    if (openSetter) {
      openSetter((prev) => !prev);
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-xs transition-opacity duration-300"
        />
      )}

      {/* Main Sidebar */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 z-50 bg-white border-r border-[#e0e6ed] transition-all duration-300 flex flex-col ${
          isOpen 
            ? 'w-64 translate-x-0 shadow-xl md:shadow-none' 
            : '-translate-x-full md:translate-x-0 md:w-20'
        }`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-[#f1f3f6]">
          <div className="flex items-center gap-2.5 overflow-hidden">
            {/* Logo Glyph */}
            <button
              onClick={() => {
                if (!isOpen) setIsOpen(true);
              }}
              className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4361EE] to-[#805DCA] flex items-center justify-center text-white font-black text-xl shadow-sm flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
              title={isOpen ? "VRISTO" : "Click to expand sidebar"}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 14.5l-4.5-4.5 1.41-1.41L12 13.67l6.09-6.09 1.41 1.41L12 16.5z" />
              </svg>
            </button>

            {isOpen && (
              <Link to="/" className="font-extrabold text-2xl tracking-wide text-[#0E1726] truncate">
                VRISTO
              </Link>
            )}
          </div>

          {/* Desktop & Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-7 h-7 rounded-full bg-[#f4f6fa] hover:bg-[#eef1fe] hover:text-primary flex items-center justify-center text-gray-500 transition-colors flex-shrink-0"
            title={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {/* On mobile show X when open, on desktop show Chevrons */}
            <span className="md:hidden">
              <X className="w-4 h-4" />
            </span>
            <span className="hidden md:block">
              {isOpen ? <ChevronsLeft className="w-4 h-4" /> : <ChevronsRight className="w-4 h-4" />}
            </span>
          </button>
        </div>

        {/* Nav List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5 text-[#506690] text-[13.5px] font-semibold custom-scrollbar">
          {/* DASHBOARD SECTION */}
          <div>
            <button
              onClick={() => handleItemClick(setDashboardOpen)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${
                dashboardOpen ? 'bg-[#EEF1FE] text-primary' : 'hover:bg-[#f6f8fa] text-[#0e1726]'
              }`}
              title="Dashboard"
            >
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4 flex-shrink-0" />
                {isOpen && <span>Dashboard</span>}
              </div>
              {isOpen && (
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dashboardOpen ? 'rotate-0' : '-rotate-90'
                  }`} 
                />
              )}
            </button>

            {isOpen && dashboardOpen && (
              <div className="mt-1 ml-4 pl-4 border-l border-[#e0e6ed] space-y-1 text-[13px] font-normal text-[#506690]">
                {[
                  { name: 'Sales', path: '/' },
                  { name: 'Analytics', path: '/' },
                  { name: 'Finance', path: '/' },
                  { name: 'Crypto', path: '/' },
                ].map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    onClick={() => {
                      setActiveSubItem(sub.name);
                      if (window.innerWidth < 768) setIsOpen(false);
                    }}
                    className={`block py-1.5 px-2 rounded hover:text-primary hover:bg-[#f6f8fa] transition-colors ${
                      activeSubItem === sub.name ? 'text-primary font-bold bg-[#f6f8fa]' : ''
                    }`}
                  >
                    <span className="mr-1.5">-</span> {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* APPS */}
          <div>
            {isOpen && (
              <p className="px-3 mb-2 text-[11px] font-extrabold uppercase tracking-wider text-[#888ea8]">
                Apps
              </p>
            )}
            <div className="space-y-0.5">
              {[
                { icon: MessageSquare, name: 'Chat' },
                { icon: Mail, name: 'Mailbox' },
                { icon: CheckSquare, name: 'Todo List' },
                { icon: FileText, name: 'Notes' },
                { icon: Kanban, name: 'Scrumboard' },
                { icon: Contact, name: 'Contacts' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (!isOpen) setIsOpen(true);
                  }}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group"
                  title={!isOpen ? item.name : undefined}
                >
                  <item.icon className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                  {isOpen && <span>{item.name}</span>}
                </a>
              ))}

              {/* Invoice with expandable submenu */}
              <div>
                <button
                  onClick={() => handleItemClick(setInvoiceOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group cursor-pointer"
                  title={!isOpen ? "Invoice" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Receipt className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                    {isOpen && <span>Invoice</span>}
                  </div>
                  {isOpen && (
                    <ChevronRight 
                      className={`w-3.5 h-3.5 text-[#888ea8] group-hover:text-primary transition-transform ${
                        invoiceOpen ? 'rotate-90' : ''
                      }`} 
                    />
                  )}
                </button>

                {isOpen && invoiceOpen && (
                  <div className="mt-1 ml-4 pl-4 border-l border-[#e0e6ed] space-y-1 text-[13px] font-normal text-[#506690]">
                    <a href="#invoice-list" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- List</a>
                    <a href="#invoice-preview" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Preview</a>
                    <a href="#invoice-add" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Add</a>
                    <a href="#invoice-edit" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Edit</a>
                  </div>
                )}
              </div>

              {/* Calendar */}
              <a
                href="#calendar"
                onClick={(e) => {
                  e.preventDefault();
                  if (!isOpen) setIsOpen(true);
                }}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group"
                title={!isOpen ? "Calendar" : undefined}
              >
                <Calendar className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                {isOpen && <span>Calendar</span>}
              </a>
            </div>
          </div>

          {/* USER INTERFACE */}
          <div>
            {isOpen && (
              <p className="px-3 mb-2 text-[11px] font-extrabold uppercase tracking-wider text-[#888ea8]">
                User Interface
              </p>
            )}
            <div className="space-y-0.5">
              {/* Components */}
              <div>
                <button
                  onClick={() => handleItemClick(setComponentsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group cursor-pointer"
                  title={!isOpen ? "Components" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Box className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                    {isOpen && <span>Components</span>}
                  </div>
                  {isOpen && (
                    <ChevronRight 
                      className={`w-3.5 h-3.5 text-[#888ea8] group-hover:text-primary transition-transform ${
                        componentsOpen ? 'rotate-90' : ''
                      }`} 
                    />
                  )}
                </button>
                {isOpen && componentsOpen && (
                  <div className="mt-1 ml-4 pl-4 border-l border-[#e0e6ed] space-y-1 text-[13px] font-normal text-[#506690]">
                    <a href="#tabs" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Tabs</a>
                    <a href="#modals" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Modals</a>
                    <a href="#cards" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Cards</a>
                  </div>
                )}
              </div>

              {/* Elements */}
              <div>
                <button
                  onClick={() => handleItemClick(setElementsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group cursor-pointer"
                  title={!isOpen ? "Elements" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                    {isOpen && <span>Elements</span>}
                  </div>
                  {isOpen && (
                    <ChevronRight 
                      className={`w-3.5 h-3.5 text-[#888ea8] group-hover:text-primary transition-transform ${
                        elementsOpen ? 'rotate-90' : ''
                      }`} 
                    />
                  )}
                </button>
                {isOpen && elementsOpen && (
                  <div className="mt-1 ml-4 pl-4 border-l border-[#e0e6ed] space-y-1 text-[13px] font-normal text-[#506690]">
                    <a href="#alerts" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Alerts</a>
                    <a href="#buttons" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Buttons</a>
                    <a href="#badges" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Badges</a>
                  </div>
                )}
              </div>

              <a
                href="#charts"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group"
                title={!isOpen ? "Charts" : undefined}
              >
                <PieChart className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                {isOpen && <span>Charts</span>}
              </a>
              <a
                href="#widgets"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group"
                title={!isOpen ? "Widgets" : undefined}
              >
                <LayoutGrid className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                {isOpen && <span>Widgets</span>}
              </a>
              <a
                href="#font-icons"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group"
                title={!isOpen ? "Font Icons" : undefined}
              >
                <Disc className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                {isOpen && <span>Font Icons</span>}
              </a>
              <a
                href="#drag-drop"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group"
                title={!isOpen ? "Drag and Drop" : undefined}
              >
                <Move className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                {isOpen && <span>Drag and Drop</span>}
              </a>
            </div>
          </div>

          {/* TABLES AND FORMS */}
          <div>
            {isOpen && (
              <p className="px-3 mb-2 text-[11px] font-extrabold uppercase tracking-wider text-[#888ea8]">
                Tables and Forms
              </p>
            )}
            <div className="space-y-0.5">
              <a
                href="#tables"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group"
                title={!isOpen ? "Tables" : undefined}
              >
                <Table className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                {isOpen && <span>Tables</span>}
              </a>

              {/* Data Tables */}
              <div>
                <button
                  onClick={() => handleItemClick(setDataTablesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group cursor-pointer"
                  title={!isOpen ? "Data Tables" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Layers className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                    {isOpen && <span>Data Tables</span>}
                  </div>
                  {isOpen && (
                    <ChevronRight 
                      className={`w-3.5 h-3.5 text-[#888ea8] group-hover:text-primary transition-transform ${
                        dataTablesOpen ? 'rotate-90' : ''
                      }`} 
                    />
                  )}
                </button>
                {isOpen && dataTablesOpen && (
                  <div className="mt-1 ml-4 pl-4 border-l border-[#e0e6ed] space-y-1 text-[13px] font-normal text-[#506690]">
                    <a href="#basic-dt" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Basic</a>
                    <a href="#advanced-dt" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Advanced</a>
                  </div>
                )}
              </div>

              {/* Forms */}
              <div>
                <button
                  onClick={() => handleItemClick(setFormsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group cursor-pointer"
                  title={!isOpen ? "Forms" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <FileEdit className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                    {isOpen && <span>Forms</span>}
                  </div>
                  {isOpen && (
                    <ChevronRight 
                      className={`w-3.5 h-3.5 text-[#888ea8] group-hover:text-primary transition-transform ${
                        formsOpen ? 'rotate-90' : ''
                      }`} 
                    />
                  )}
                </button>
                {isOpen && formsOpen && (
                  <div className="mt-1 ml-4 pl-4 border-l border-[#e0e6ed] space-y-1 text-[13px] font-normal text-[#506690]">
                    <a href="#form-basic" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Basic Inputs</a>
                    <a href="#form-layouts" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Layouts</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* USER AND PAGES */}
          <div>
            {isOpen && (
              <p className="px-3 mb-2 text-[11px] font-extrabold uppercase tracking-wider text-[#888ea8]">
                User and Pages
              </p>
            )}
            <div className="space-y-0.5">
              {/* Users */}
              <div>
                <button
                  onClick={() => handleItemClick(setUsersOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group cursor-pointer"
                  title={!isOpen ? "Users" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <UserCheck className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                    {isOpen && <span>Users</span>}
                  </div>
                  {isOpen && (
                    <ChevronRight 
                      className={`w-3.5 h-3.5 text-[#888ea8] group-hover:text-primary transition-transform ${
                        usersOpen ? 'rotate-90' : ''
                      }`} 
                    />
                  )}
                </button>
                {isOpen && usersOpen && (
                  <div className="mt-1 ml-4 pl-4 border-l border-[#e0e6ed] space-y-1 text-[13px] font-normal text-[#506690]">
                    <a href="#profile" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Profile</a>
                    <a href="#account" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Account Settings</a>
                  </div>
                )}
              </div>

              {/* Pages */}
              <div>
                <button
                  onClick={() => handleItemClick(setPagesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group cursor-pointer"
                  title={!isOpen ? "Pages" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <FileCode className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                    {isOpen && <span>Pages</span>}
                  </div>
                  {isOpen && (
                    <ChevronRight 
                      className={`w-3.5 h-3.5 text-[#888ea8] group-hover:text-primary transition-transform ${
                        pagesOpen ? 'rotate-90' : ''
                      }`} 
                    />
                  )}
                </button>
                {isOpen && pagesOpen && (
                  <div className="mt-1 ml-4 pl-4 border-l border-[#e0e6ed] space-y-1 text-[13px] font-normal text-[#506690]">
                    <a href="#knowledge-base" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- Knowledge Base</a>
                    <a href="#faq" className="block py-1 px-2 rounded hover:text-primary hover:bg-[#f6f8fa]">- FAQ</a>
                  </div>
                )}
              </div>

              {/* Authentication with Sign In / Sign Up dropdown */}
              <div>
                <button
                  onClick={() => handleItemClick(setAuthOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group cursor-pointer"
                  title={!isOpen ? "Authentication" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Lock className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
                    {isOpen && <span>Authentication</span>}
                  </div>
                  {isOpen && (
                    <ChevronRight 
                      className={`w-3.5 h-3.5 text-[#888ea8] group-hover:text-primary transition-transform ${
                        authOpen ? 'rotate-90' : ''
                      }`} 
                    />
                  )}
                </button>

                {isOpen && authOpen && (
                  <div className="mt-1 ml-4 pl-4 border-l border-[#e0e6ed] space-y-1 text-[13px] font-normal text-[#506690]">
                    <Link
                      to="/signin"
                      onClick={() => {
                        if (window.innerWidth < 768) setIsOpen(false);
                      }}
                      className="block py-1.5 px-2 rounded hover:text-primary hover:bg-[#f6f8fa] transition-colors"
                    >
                      - Sign In
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => {
                        if (window.innerWidth < 768) setIsOpen(false);
                      }}
                      className="block py-1.5 px-2 rounded hover:text-primary hover:bg-[#f6f8fa] transition-colors"
                    >
                      - Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SUPPORTS */}
          <div className="pb-6">
            {isOpen && (
              <p className="px-3 mb-2 text-[11px] font-extrabold uppercase tracking-wider text-[#888ea8]">
                Supports
              </p>
            )}
            <a
              href="#doc"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#EEF1FE] hover:text-primary transition-colors group"
              title={!isOpen ? "Documentation" : undefined}
            >
              <BookOpen className="w-4 h-4 text-[#888ea8] group-hover:text-primary flex-shrink-0" />
              {isOpen && <span>Documentation</span>}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
