import { Button } from "../features/Button";
import { Heading } from "../features/Heading";
import { Head } from "../features/Head";
import { PanelLayout } from "../layouts/PanelLayout";
import { Text } from "../features/Text";

const Landing = () => {
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
