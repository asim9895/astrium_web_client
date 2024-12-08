import { SparklingGrid } from "@/components/backgrounds/sparkling/Sparkling";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks";
import { logout_user } from "@/redux/slices/userSlice";

const DashboardPage = () => {
  const dispatch = useAppDispatch();

  const handle_logout = () => {
    dispatch(logout_user()); // Set authenticated to false
  };

  return (
    <div className="relative h-full w-full">
      <SparklingGrid />
      Dashboard Page
      <Button variant={"destructive"} onClick={handle_logout}>
        Logout
      </Button>
    </div>
  );
};

export default DashboardPage;
