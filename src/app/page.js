import Link from "next/link";
import { Header, BottomTabs } from "./components";
import { Button, Heading } from "./ui";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-1 py-12 px-6">
        <Heading>Выберите действие</Heading>
        <div className="space-y-6 mt-24">
          <Link href={"/login"} className="block">
            <Button className="bg-gradient-to-r from-[#FF8412] to-[#FFC543] text-white">
              Login
            </Button>
          </Link>
          <Link href={"/registration"} className="block">
            <Button className="bg-gradient-to-r from-[#4834D4] to-[#686DE0] text-white">
              Registration
            </Button>
          </Link>
        </div>
      </main>

      <BottomTabs />
    </div>
  );
}
