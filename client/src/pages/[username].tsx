import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { Container } from "../features/Container";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Head } from "../features/Head";
import { HeaderImage } from "../features/HeaderImage";
import { Loading } from "../features/Loading";
import { Panel } from "../features/Panel";
import { ProfileImage } from "../features/ProfileImage";
import { Text } from "../features/Text";

import { useGetUserByUsernameQuery } from "../generated/graphql";
import { useUser } from "../libs/useUser";

import { Tweet } from "../features/Tweet";
import { RootState } from "../redux/store";

const Profile = () => {
  const { isLoading } = useUser();

  const router = useRouter();
  const username = router.query.username as string;

  const [userByUsername] = useGetUserByUsernameQuery({
    variables: { username },
  });

  if (isLoading && !username && !userByUsername) {
    return <Loading />;
  }

  const user = useSelector((state: RootState) => state.user);

  return (
    <DashboardLayout>
      <Head title={`ravi(@${username})`} />
      <HeaderImage />
      <Container>
        <div className="px-4 lg:px-8 mb-12">
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
            profileImageSrc="https://picsum.photos/200/200"
            profileImageAlt="rav"
          />
        </Panel>
      </Container>
    </DashboardLayout>
  );
};

export default Profile;
