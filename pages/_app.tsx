import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Lato, Poppins } from "@next/font/google";
import Layout from "../components/layout/Layout";
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: "italic",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={lato.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
