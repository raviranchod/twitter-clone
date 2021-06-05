import { useRouter } from "next/router";

import { Container } from "../features/Container";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Head } from "../features/Head";
import { HeaderImage } from "../features/HeaderImage";
import { Panel } from "../features/Panel";
import { ProfileImage } from "../features/ProfileImage";
import { Text } from "../features/Text";

import { useGetUserByUsernameQuery } from "../generated/graphql";
import { Tweet } from "../features/Tweet";

const Profile = () => {
  const router = useRouter();
  const username = router.query.username as string;

  const [userByUsername] = useGetUserByUsernameQuery({
    variables: { username },
  });

  const user = userByUsername.data?.userByUsername.user;

  return (
    <DashboardLayout>
      <Head title={`ravi(@${username})`} />
      <HeaderImage />
      <Container>
        <div className="px-8 mb-12">
          <div className="relative bg-primary-lightest right-2 -mt-14 p-2 inline-block rounded-lg">
            <ProfileImage
              src="https://picsum.photos/200/200"
              alt="Image"
              size="lg"
            />
          </div>
          <Text className="text-lg font-bold mt-4">{user?.name}</Text>
          <Text className="text-grey">@{user?.username}</Text>
        </div>
        <Panel>
          <Tweet
            createdAt="9m"
            name="Ravi Ranchod"
            username="rav"
            tweet="lang buddha"
            imageSrc="https://picsum.photos/200/200"
            imageAlt="rav"
          />
        </Panel>
      </Container>
    </DashboardLayout>
  );
};

export default Profile;