// app/dashboard/layout.tsx  (or similar)
import { Navbar } from "@/components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-svh flex flex-col">
      {/* Fixed navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar />
      </header>

      {/* Main content starts below navbar height */}
      <main className="flex-1 pt-[--navbar-height] overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
