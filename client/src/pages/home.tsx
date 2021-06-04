import { Head } from "../components/Head";
import { Loading } from "../components/Loading";
import { DashboardLayout } from "../layouts/DashboardLayout";

import { useUser } from "../libs/useUser";

const Home = () => {
  const { user } = useUser();

  if (!user.data?.authorise.user) {
    return <Loading />;
  }

  return (
    <DashboardLayout>
      <Head title="Home" />
    </DashboardLayout>
  );
};

export default Home;
