"use client";

import { useEffect } from "react";
import { Header, BottomTabs, UploadAvatar } from "../components";
import { useToken } from "../context";
import { useRouter } from "next/navigation";

export default function AvatarPage() {
  const { state } = useToken();

  const router = useRouter();

  useEffect(() => {
    if (!state.token) {
      router.push("/");
    }
  }, [state, router]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-1 py-12 px-6">
        <p className="text-[#1E1E2E]/50 font-medium mb-6">
          Главная / Настройки аккаунта / Загрузка аватара
        </p>

        <UploadAvatar />
      </main>

      <BottomTabs />
    </div>
  );
}
