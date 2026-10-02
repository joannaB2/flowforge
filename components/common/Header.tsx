import NextImage from 'next/image';
import { SidebarTrigger } from '../ui/sidebar';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <header className="border-border bg-background flex items-center justify-between border-b p-4">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <NextImage
          src="/logo.svg"
          alt="FlowForge Logo"
          width={50}
          height={50}
        />
        <span className="hidden font-bold md:inline">FlowForge</span>
      </div>
      <Button variant="outline">JB</Button>
    </header>
  );
};
