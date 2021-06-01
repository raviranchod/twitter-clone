import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuthoriseQuery } from "../generated/graphql";

const useUser = () => {
  const router = useRouter();
  const [user] = useAuthoriseQuery();

  useEffect(() => {
    if (!user) return;

    if (
      !user?.data?.authorise.user &&
      (user.error || user.data?.authorise.error)
    ) {
      router.push("/login");
    }
  }, [user]);

  return { user };
};

export { useUser };
