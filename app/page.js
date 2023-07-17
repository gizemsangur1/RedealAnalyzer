import BannerPage from "@/Pages/BannerPage";
import Features from "@/Pages/Features";
import FooterCall from "@/Pages/FooterCall";
import Logo from "@/Pages/Logo";
import Property from "@/Pages/Property";
import Steps from "@/Pages/Steps";
import Testimonal from "@/Pages/Testimonal";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-white "
      style={{ fontFamily: "QanelasSoftBlack" }}
    >
      <div className="flex min-h-screen flex-col items-center justify-center pl-24 pr-12  bg-white">
        {/* <MenuBar /> */}
        <BannerPage />
        <Property />
        <Steps />
        <Features />
        <Logo />
        <Testimonal />
        
      </div>
      <FooterCall />
      {/*  <Footer /> */}
    </main>
  );
}
