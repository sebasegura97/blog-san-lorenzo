import { AuthContextProvider } from "../../components/AuthContext";
import DashboardMainPage from "../../components/dashboard/views/Main";

const Dashboard = () => {
  return (
    <AuthContextProvider>
      <DashboardMainPage />
    </AuthContextProvider>
  );
};

export default Dashboard;
