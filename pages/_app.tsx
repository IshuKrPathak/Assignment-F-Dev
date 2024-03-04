import Main from "components/Main";
import Music from "components/MusicPlay";
import SideBar from "components/SideBar";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="w-full h-full">
        <Head>
          <title>Spotify Assignnmet</title>
          <meta
            name="description"
            content=" Spotify Clone using react-toolkit and rtk-query"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full h-main flex">
          <SideBar />
          <Main>
            <Component {...pageProps} />
           
          </Main>
        </div>
        <Music />
      </div>
    </Provider>
  );
}
export default MyApp;
