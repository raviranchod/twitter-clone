import { AppProps } from "next/app";
import { createClient, Provider as UrqlProvider } from "urql";
import dayjs from "dayjs";
import { Provider as ReduxProvider } from "react-redux";
import RelativeTime from "dayjs/plugin/relativeTime";
import { store } from "../redux/store";

import "../styles/globals.css";

const urqlClient = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
    mode: "cors",
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  dayjs.extend(RelativeTime);

  return (
    <ReduxProvider store={store}>
      <UrqlProvider value={urqlClient}>
        <Component {...pageProps} />
      </UrqlProvider>
    </ReduxProvider>
  );
};

export default App;
