import MenuB from "@/components/MenuB";
import MenuBar from "@/components/MenuBar";
import { Button } from "@mui/material";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {/* <MenuB/> */}
      <MenuBar />
    </main>
  );
}
