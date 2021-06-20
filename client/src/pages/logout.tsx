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

      if (response.data?.logout.success) {
        return router.push("/login");
      }
    }

    handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout]);

  if (isLoading || user) {
    return <LoadingScreen />;
  }

  // TODO: Handle error
  return <LoadingScreen />;
};

export default Logout;
