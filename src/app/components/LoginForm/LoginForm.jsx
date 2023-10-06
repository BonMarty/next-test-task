"use client";

import { useState } from "react";
import { Button, Heading, Input } from "../../ui";
import Image from "next/image";
import Email from "../../assets/email.svg";
import Password from "../../assets/password.svg";
import Eye from "../../assets/eye.svg";
import Close from "../../assets/close.svg";
import { useToken } from "../../context";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isAgree, setIsAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useToken();

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.length >= 5 && email) {
      const user = {
        email,
        password,
      };
      const response = await fetch(
        "https://test-task.test211.workers.dev/login",
        {
          method: "POST",
          body: JSON.stringify(user),
        }
      );
      const loginResponse = await response.json();
      if (loginResponse.token) {
        await dispatch({ type: "SET_TOKEN", payload: loginResponse.token });
        router.push("/avatar");
      } else {
        alert("User does not exist");
      }
    } else {
      alert("Password should be at least 5 symbols");
    }
  }

  return (
    <form
      className="text-white bg-gradient-to-b from-[#4936D4]/70 to-[#6835D4]/40 rounded-2xl p-6 relative z-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Heading isCenter>Логин</Heading>
      <div className="mt-12 mb-8 space-y-6">
        <Input
          label={"Ваш email"}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          prefixIcon={
            <Image
              src={Email}
              alt="Email prefix"
              width={17}
              height={17}
              className="absolute top-3 left-4 w-fit h-fit"
            />
          }
        />
        <Input
          label={"Пароль"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isPassword
          prefixIcon={
            <Image
              src={Password}
              alt="Password prefix"
              width={16}
              height={21}
              className="absolute top-2 left-4 w-fit h-fit"
            />
          }
          suffixIcon={
            <Image
              src={Eye}
              alt="Eye suffix"
              width={16}
              height={12}
              className="absolute top-[14px] right-4 w-fit h-fit cursor-pointer"
            />
          }
        />
      </div>
      <p className="text-sky-500 underline cursor-pointer mb-8">
        Забыли пароль?
      </p>
      <div className="flex justify-between gap-6 mb-8">
        <Input
          type="checkbox"
          value={isAgree}
          onChange={() => setIsAgree(!isAgree)}
        />
        <p className="text-sm sm:text-base">
          Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь с{" "}
          <span className="underline cursor-pointer">Условиями Соглашения</span>
          ! Правилами и политикой конфиденциальности компании
        </p>
      </div>
      <Button
        className="bg-gradient-to-b from-[#FF8412] to-[#FFC543] text-white"
        disabled={isAgree ? false : true}
      >
        Войти
      </Button>
      <div className="p-3 rounded-full bg-yellow-400 w-9 h-9 absolute -top-2 -right-2 transition-colors duration-300 cursor-pointer hover:bg-yellow-500">
        <Image src={Close} alt="Close" width={15} height={15} />
      </div>
    </form>
  );
};

export default LoginForm;
