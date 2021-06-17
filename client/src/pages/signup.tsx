import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button } from "../components/Button";
import { Head } from "../components/Head";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Link } from "../components/Link";
import { LoadingScreen } from "../screens/LoadingScreen";
import { Text } from "../components/Text";
import { PanelLayout } from "../layouts/PanelLayout";

import { useSignupMutation, SignupDto } from "../generated/graphql";
import { usePublicRoute } from "../libs/usePublicRoute";

const Signup = () => {
  const { user, isLoading } = usePublicRoute();
  const [, signup] = useSignupMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupDto>({ mode: "onSubmit", reValidateMode: "onSubmit" });

  if (isLoading || user) {
    return <LoadingScreen />;
  }

  const handleOnSubmit = handleSubmit(async (data) => {
    const response = await signup(data);

    response.data?.signup.errors?.forEach(({ field, message }) => {
      if (
        field === "name" ||
        field === "email" ||
        field === "username" ||
        field === "password"
      ) {
        return setError(field, { message });
      }
    });

    if (response.data?.signup.user) return router.push("/profile");

    // return message tell the user to try again later
  });

  return (
    <>
      <Head title="Sign up for Twitter" />
      <PanelLayout>
        <Heading className="text-2xl font-bold mb-16">
          Lets get started <br />
          Sign up to Twitter
        </Heading>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <Input
              label="Name"
              id="signup-name"
              {...register("name", {
                required: true,
                maxLength: 50,
              })}
              errors={errors.name?.message}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Email"
              id="signup-email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email.",
                },
              })}
              errors={errors.email?.message}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Username"
              id="signup-username"
              {...register("username", {
                required: true,
                pattern: {
                  value: /^@?(\w){1,15}$/,
                  message:
                    "A username can only contain alphanumeric characters (letters A-Z, numbers 0-9) with the exception of underscores, as noted above. Check to make sure your desired username doesn't contain any symbols, dashes, or spaces.",
                },
                maxLength: 15,
              })}
              errors={errors.username?.message}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Password"
              id="signup-password"
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
              Sign up
            </Button>
          </div>
        </form>
        <Text className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-primary underline">
            Log in
          </Link>
        </Text>
      </PanelLayout>
    </>
  );
};

export default Signup;
