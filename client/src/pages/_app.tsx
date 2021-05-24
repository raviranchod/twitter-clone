import { AppProps } from "next/app";
import "../styles/globals.css";
import { createClient, Provider } from "urql";

const urqlClient = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
    mode: "cors",
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider value={urqlClient}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
