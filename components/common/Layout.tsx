import { SidebarProvider } from '../ui/sidebar';
import { Footer } from './Footer';
import { Header } from './Header';
import { LayoutSidebar } from './Sidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col">
        <div className="md:flex md:flex-row">
          <SidebarProvider>
            <LayoutSidebar />
            <div className="flex flex-1 flex-col">
              <Header />
              <main className="flex-1 flex-col md:flex md:flex-row">
                {children}
              </main>
              <Footer />
            </div>
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};
