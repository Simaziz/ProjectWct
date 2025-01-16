"use client";

import { LayoutDashboard, UserCircle, Users, Briefcase, CreditCard, Calendar, MessageSquare, Contact, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarItem = ({ icon: Icon, label, href, active = false }) => (
  <Link href={href} className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${active ? 'bg-blue-600 text-white' : 'hover:bg-blue-50 text-gray-700'}`}>
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </Link>
);

export default function SideBarAdmin() {
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admindasboard' },
    { icon: UserCircle, label: 'Trainer', href: '/admindasboardTrainer' },
    { icon: Users, label: 'Trainee', href: '/admindasboardTrainee' },
    { icon: Briefcase, label: 'Staff', href: '/admindasboardStaff' },
    { icon: UserCircle, label: 'Membership', href: '/admindasboardMembership' },
    { icon: Users, label: 'Approve Trainer ', href: '/adminApproveRegister' }, // Added new item
    { icon: Users, label: 'Approve Comment ', href: '/AdminDissaproveCmt' }, // Added new item
    // { icon: LayoutDashboard, label: 'Classes', href: '/classes' }
  ];

  const pageItems = [
    { icon: CreditCard, label: 'Pricing', href: '/pricing' },
    { icon: Calendar, label: 'Calendar', href: '/calendar' },
    { icon: MessageSquare, label: 'Feedback', href: '/feedback' },
    { icon: Contact, label: 'Contact', href: '/contact' },
    { icon: CreditCard, label: 'Payment', href: '/payment' },
    { icon: Users, label: 'Team', href: '/team' }
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', href: '/settings' },
    { icon: LogOut, label: 'Logout', href: '/logout' }
  ];

  return (
    <header>
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold px-4">Dashboard</h1>
        </div>
        
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
            />
          ))}
          
          <div className="py-4">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase">Pages</p>
          </div>
          
          {pageItems.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
            />
          ))}
          
          <div className="pt-4 mt-4 border-t border-gray-200">
            {bottomItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                active={pathname === item.href}
              />
            ))}
          </div>
        </nav>
      </aside>
    </header>
  );
}
