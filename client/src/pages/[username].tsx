import { useRouter } from "next/router";
import dayjs from "dayjs";

import { Container } from "../features/Container";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Head } from "../features/Head";
import { HeaderImage } from "../features/HeaderImage";
import { LoadingScreen } from "../screens/LoadingScreen";
import { Logo } from "../features/Logo";
import { Panel } from "../features/Panel";
import { ProfileImage } from "../features/ProfileImage";
import SpinnerSvg from "../assets/spinner.svg";
import { Text } from "../features/Text";

import { Tweet } from "../features/Tweet";

import { useGetUserByUsernameQuery } from "../generated/graphql";
import { usePrivateRoute } from "../libs/usePrivateRoute";

const Profile = () => {
  const { user: authorisedUser, isLoading } = usePrivateRoute();

  const router = useRouter();
  const username = router.query.username as string;

  const [userByUsername] = useGetUserByUsernameQuery({
    variables: { username },
  });

  const { data, fetching } = userByUsername;

  if (isLoading || !authorisedUser || fetching || !data) {
    return <LoadingScreen />;
  }

  const user = data?.userByUsername.user;
  const tweets = user?.tweets;

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
        <Panel
          className="divide-y-2 divide-primary-lightest"
          padding={tweets?.tweets?.length ? "none" : "normal"}
        >
          {fetching ? (
            <SpinnerSvg className="w-8 mx-auto text-current text-primary" />
          ) : tweets?.tweets?.length ? (
            tweets.tweets.map((tweet) => (
              <Tweet
                createdAt={dayjs().to(dayjs(tweet.created_at))}
                name={tweet.user.user?.name!}
                username={tweet.user.user?.username!}
                tweet={tweet.tweet}
                profileImageSrc="https://picsum.photos/200/200"
                profileImageAlt={`${tweet.user.user?.username!} profile image`}
              />
            ))
          ) : (
            <div className="text-center">
              <Logo className="mx-auto mb-4" />
              <Text>@{username} hasn't tweeted yet</Text>
            </div>
          )}
        </Panel>
      </Container>
    </DashboardLayout>
  );
};

export default Profile;
