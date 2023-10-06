import Image from "next/image";
import Background from "../assets/background.svg";
import { LoginForm } from "../components";

export default function LoginPage() {
  return (
    <>
      <main className="flex-1 py-12 px-6 relative">
        <LoginForm />
        <Image
          src={Background}
          alt="Background"
          fill
          className="w-screen min-h-screen object-cover z-0"
        />
      </main>
    </>
  );
}
