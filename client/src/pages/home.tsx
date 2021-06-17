import { ComposeTweet } from "../features/ComposeTweet";
import { Container } from "../features/Container";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Head } from "../features/Head";
import { LoadingScreen } from "../screens/LoadingScreen";
import { Panel } from "../features/Panel";

import { usePrivateRoute } from "../libs/usePrivateRoute";

const Home = () => {
  const { user, isLoading } = usePrivateRoute();

  if (isLoading || !user) {
    return <LoadingScreen />;
  }

  return (
    <DashboardLayout>
      <Head title="Home" />
      <Container>
        <ComposeTweet
          profileImageSrc="https://picsum.photos/200/200"
          profileImageAlt="Image"
          className="my-12"
        />
        <Panel className="divide-y-2 divide-primary-lightest">sdf</Panel>
      </Container>
    </DashboardLayout>
  );
};

export default Home;
