'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Home, Form, Activity, LogOut } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';
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
          <SidebarMenu>
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
        <div className="flex justify-between gap-2 p-4">
          <ModeToggle />
          <Button variant="outline">
            <LogOut />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
