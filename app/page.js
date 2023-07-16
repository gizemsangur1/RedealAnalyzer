import BannerPage from "@/Pages/BannerPage";
import Features from "@/Pages/Features";
import Footer from "@/Pages/Footer";
import Footer2 from "@/Pages/Footer2";
import Logo from "@/Pages/Logo";
import Property from "@/Pages/Property";
import Steps from "@/Pages/Steps";
import Testimonal from "@/Pages/Testimonal";
import MenuBar from "@/components/MenuBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex min-h-screen flex-col items-center justify-center pl-24 pr-12  bg-white">
        {/* <MenuBar /> */}
        <BannerPage />
        <Property />
        <Steps />
        <Features />
        <Logo />
        <Testimonal />
      </div>
      <Footer2 />
      {/*  <Footer /> */}
    </main>
  );
}
