import { Loading } from "../components/Loading";

import { useUser } from "../libs/useUser";

const Home = () => {
  const { user } = useUser();

  if (!user.data?.authorise.user) {
    return <Loading />;
  }

  return <>Home</>;
};

export default Home;
