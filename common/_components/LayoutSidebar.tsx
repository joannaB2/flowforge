'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/common/ui/sidebar';
import { Home, Form, Activity, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const LayoutSidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-3">
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={isActive('/')}
                render={<a href={'/'} />}
              >
                <Home size={16} />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={isActive('/submissions')}
                render={<a href={'/submissions'} />}
              >
                <Activity size={16} />
                Submissions
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={isActive('/forms')}
                render={<a href={'/forms'} />}
              >
                <Form size={16} />
                Forms
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="gap-3">
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => console.log('logout')}>
              <LogOut size={16} />
              Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
