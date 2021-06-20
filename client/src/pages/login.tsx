import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button } from "../components/Button";
import { ErrorBubble } from "../components/ErrorBubble";
import { Head } from "../components/Head";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Link } from "../components/Link";
import { LoadingScreen } from "../screens/LoadingScreen";
import { PanelLayout } from "../layouts/PanelLayout";
import { Text } from "../components/Text";

import { useLoginMutation, LoginDto } from "../generated/graphql";
import { usePublicRoute } from "../libs/usePublicRoute";

const Login = () => {
  const { user, isLoading } = usePublicRoute();
  const [, login] = useLoginMutation();
  const [formError, setFormError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginDto>({ mode: "onSubmit", reValidateMode: "onSubmit" });

  if (isLoading || user) {
    return <LoadingScreen />;
  }

  const handleOnSubmit = handleSubmit(async (data) => {
    setFormError("");

    const response = await login(data);

    response.data?.login.errors?.forEach(({ field, message }) => {
      if (field === "username" || field === "password") {
        return setError(field, { message });
      }
      if (!field) {
        setFormError(message);
      }
    });

    if (response.data?.login.user) return router.push("/home");
  });

  return (
    <>
      <Head title="Login to Twitter" />
      <PanelLayout>
        <Heading className="text-2xl font-bold mb-8">
          Welcome back <br />
          Log in to Twitter
        </Heading>
        {formError && <ErrorBubble className="mb-4">{formError}</ErrorBubble>}
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <Input
              label="Username"
              id="login-username"
              {...register("username", {
                required: true,
                maxLength: 15,
              })}
              errors={errors.username?.message}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Password"
              id="login-password"
              type="password"
              {...register("password", {
                required: true,
              })}
              errors={errors.password?.message}
            />
          </div>
          <div className="mx-8">
            <Button
              onClick={() => false}
              isFullWidth
              type="submit"
              className="mb-2"
            >
              Log in
            </Button>
          </div>
        </form>
        <Text className="text-center">
          {`Don't have an account? `}
          <Link href="/signup" className="text-primary underline">
            Sign up
          </Link>
        </Text>
      </PanelLayout>
    </>
  );
};

export default Login;
