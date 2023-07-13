import BannerPage from "@/Pages/BannerPage";
import MenuBar from "@/components/MenuBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="p-50">
        <MenuBar />
        <BannerPage />
      </div>
    </main>
  );
}
