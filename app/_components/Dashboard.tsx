import { DashboardContent } from './DashboardContent';

export const Dashboard = () => {
  // server component, so we can fetch data here and pass it down to the client component
  return (
    <div className="w-full">
      <DashboardContent />
    </div>
  );
};
