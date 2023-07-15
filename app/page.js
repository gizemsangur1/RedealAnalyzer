import BannerPage from "@/Pages/BannerPage";
import Features from "@/Pages/Features";
import Footer from "@/Pages/Footer";
import Logo from "@/Pages/Logo";
import Property from "@/Pages/Property";
import Steps from "@/Pages/Steps";
import Testimonal from "@/Pages/Testimonal";
import MenuBar from "@/components/MenuBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
      <div className="flex min-h-screen flex-col items-center justify-between pl-24 pr-24  bg-white">
        <MenuBar />
        <BannerPage />
        <Property />
        <Steps />
        <Features />
        <Logo />
        <Testimonal />
      </div>
      <Footer />
    </main>
  );
}
