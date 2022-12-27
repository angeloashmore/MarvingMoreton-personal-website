import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroHome from "../components/ui/Homepage/HeroHome";
import PartnersBox from "../components/ui/Homepage/PartnersBox";
import FeaturedAbout from "../components/ui/Homepage/FeaturedAbout";
import MyServices from "../components/ui/Homepage/MyServices";
import CTAHorizontal from "../components/ui/Shared/CTAHorizontal";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroHome />
        <PartnersBox />
        <FeaturedAbout />
        <MyServices />
        <CTAHorizontal />
      </main>
    </div>
  );
}
