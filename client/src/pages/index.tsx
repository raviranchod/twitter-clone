import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Head } from "../components/Head";
import { LoadingScreen } from "../screens/LoadingScreen";
import { PanelLayout } from "../layouts/PanelLayout";
import { Text } from "../components/Text";

import { usePublicRoute } from "../libs/usePublicRoute";

const Landing = () => {
  const { user, isLoading } = usePublicRoute();

  if (isLoading || user) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Head title="Twitter. It's what's happening" />
      <PanelLayout>
        <Heading className="text-2xl font-bold mb-2">Happening now</Heading>
        <Text className="font-bold mb-8">Join Twitter today</Text>
        <Button variant="solid" isFullWidth className="mb-4" href="/signup">
          Sign up
        </Button>
        <Button variant="outline" isFullWidth href="/login">
          Log in
        </Button>
      </PanelLayout>
    </>
  );
};

export default Landing;
