import { ComposeTweet } from "../features/ComposeTweet";
import { Container } from "../features/Container";
import { Head } from "../features/Head";
import { Loading } from "../features/Loading";
import { DashboardLayout } from "../layouts/DashboardLayout";

import { useUser } from "../libs/useUser";

const Home = () => {
  const { isLoading } = useUser();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <DashboardLayout>
      <Head title="Home" />
      <Container>
        <div className="mt-12">
          <ComposeTweet
            profileImageSrc="https://picsum.photos/200/200"
            profileImageAlt="Image"
          />
        </div>
      </Container>
    </DashboardLayout>
  );
};

export default Home;
