import { AuthContextProvider } from "../../component/AuthContext";
import DashboardMainPage from "../../component/dashboard/views/Main";

const Dashboard = () => {
  return (
    <AuthContextProvider>
      <DashboardMainPage />
    </AuthContextProvider>
  );
};

export default Dashboard;
