import Preloader from "@/components/Preloader";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { Router } from "next/router";

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug();
      },
      debug: process.env.NODE_ENV === "development",
    });

    const handleRouteChange = () => posthog.capture("$pageview");
    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <Fragment>
        {loader && <Preloader />}
        <Component {...pageProps} />
      </Fragment>
    </PostHogProvider>
  );
}