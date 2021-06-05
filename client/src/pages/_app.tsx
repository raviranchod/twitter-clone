import { AppProps } from "next/app";
import "../styles/globals.css";
import { createClient, Provider as UrqlProvider } from "urql";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";

const urqlClient = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
    mode: "cors",
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider store={store}>
      <UrqlProvider value={urqlClient}>
        <Component {...pageProps} />
      </UrqlProvider>
    </ReduxProvider>
  );
};

export default App;
