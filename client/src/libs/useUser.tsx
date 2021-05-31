import { useEffect } from "react";
import Router from "next/router";

import { useAuthoriseQuery } from "../generated/graphql";

const useUser = () => {
  const [user] = useAuthoriseQuery();

  useEffect(() => {
    if (!user) return;

    if (
      !user?.data?.authorise.user &&
      (user.error || user.data?.authorise.error)
    ) {
      Router.push("/login");
    }
  }, [user]);

  return { user };
};

export { useUser };
