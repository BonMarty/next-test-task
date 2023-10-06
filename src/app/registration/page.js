import Image from "next/image";
import Background from "../assets/background.svg";
import { RegistrationForm } from "../components";

export default function RegistrationPage() {
  return (
    <>
      <main className="flex-1 py-12 px-6 relative">
        <RegistrationForm />
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
