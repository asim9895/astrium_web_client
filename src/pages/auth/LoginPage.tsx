import { SparklingGrid } from "@/components/backgrounds/sparkling/Sparkling";
import UnProtectedNavbar from "@/components/navbar/UnProtectedNavbar";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks";
import { authenticate_user } from "@/redux/slices/userSlice";
// import Particles from "@/components/backgrounds/particles/Particles";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handle_login = () => {
    dispatch(authenticate_user()); // Set authenticated to true
  };

  return (
    <div className="relative h-[100vh] w-full">
      <UnProtectedNavbar />
      <SparklingGrid />
      <Button variant={"default"} onClick={handle_login}>
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
