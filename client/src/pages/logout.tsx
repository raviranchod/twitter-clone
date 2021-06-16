import { useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingScreen } from "../screens/LoadingScreen";

import { useLogoutMutation } from "../generated/graphql";
import { usePrivateRoute } from "../libs/usePrivateRoute";

const Logout = () => {
  const router = useRouter();
  const { user, isLoading } = usePrivateRoute();
  const [result, logout] = useLogoutMutation();

  useEffect(() => {
    async function handleLogout() {
      const response = await logout();

      console.log("logout", response);

      if (response.data?.logout.success) {
        return router.push("/login");
      }
    }

    handleLogout();
  }, [logout]);

  if (isLoading || user) {
    return <LoadingScreen />;
  }

  return <LoadingScreen />;
};

export default Logout;
