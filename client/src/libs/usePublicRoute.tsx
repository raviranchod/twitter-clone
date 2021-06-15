import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { useAuthoriseQuery } from "../generated/graphql";
import { notAuthenticated } from "../slices/userSlice";

const usePublicRoute = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user] = useAuthoriseQuery();

  const authorisedUser = user.data?.authorise.user;
  const error = user.error || user.data?.authorise.error;
  const isLoading = !authorisedUser && !error;

  useEffect(() => {
    if (!user) return;

    // If an authorised user is found, dispatch it's values to redux
    if (!authorisedUser) {
      dispatch(notAuthenticated());
    }

    // If there is an error and no user has been found, redirect the user to
    // the login page
    if (authorisedUser && !error) {
      router.push("/home");
    }
  }, [user]);

  return { user: authorisedUser, isLoading };
};

export { usePublicRoute };
