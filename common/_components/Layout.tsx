import { SidebarProvider } from '../ui/sidebar';
import { Footer } from './Footer';
import { Header } from './Header';
import { LayoutSidebar } from './LayoutSidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col">
        <div className="md:flex md:flex-row">
          <SidebarProvider>
            <LayoutSidebar />
            <div className="flex flex-1 flex-col">
              <Header />
              <main className="flex-1 flex-col p-4 md:flex md:flex-row md:px-12">
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
