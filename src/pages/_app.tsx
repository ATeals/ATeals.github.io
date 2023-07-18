import Layout from "@/pageComponents/Layout";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Layout children={<Component {...pageProps} />} />;
}
