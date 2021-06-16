import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { useAuthoriseQuery } from "../generated/graphql";
import { authenticated } from "../slices/userSlice";

const usePrivateRoute = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [user] = useAuthoriseQuery({
    requestPolicy: "network-only",
  });

  const authorisedUser = user.data?.authorise.user;
  const error = user.error || user.data?.authorise.error;
  const isLoading = !authorisedUser && !error;

  console.log("private", user);

  useEffect(() => {
    if (!user) return;

    // If an authorised user is found, dispatch it's values to redux
    if (authorisedUser) {
      dispatch(
        authenticated({
          id: authorisedUser.id,
          name: authorisedUser.name,
          username: authorisedUser.username,
        })
      );
      return;
    }

    // If there is an error and no user has been found, redirect the user to
    // the login page
    if (!authorisedUser && error) {
      router.push("/login");
      return;
    }

    return;
  }, [authorisedUser, error]);

  return { user: authorisedUser, isLoading };
};

export { usePrivateRoute };
