"use client";

import { useState } from "react";
import { Button, Heading, Input } from "../../ui";
import Image from "next/image";
import Email from "../../assets/email.svg";
import Password from "../../assets/password.svg";
import Eye from "../../assets/eye.svg";
import Close from "../../assets/close.svg";
import { useToken } from "../../context";

const RegistrationForm = () => {
  const [isAgree, setIsAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const { dispatch } = useToken();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.length >= 5 && password === confirmedPassword && email) {
      const user = {
        email,
        password,
      };
      const response = await fetch(
        "https://test-task.test211.workers.dev/user",
        {
          method: "POST",
          body: JSON.stringify(user),
        }
      );
      const userResponse = await response.json();
      await dispatch({ type: "SET_TOKEN", payload: userResponse.token });
    } else if (password.length >= 5 && password !== confirmedPassword) {
      alert("Passwords should be the same");
    } else {
      alert("Password should be at least 5 symbols");
    }
  }

  return (
    <form
      className="text-white bg-gradient-to-b from-[#4936D4]/70 to-[#6835D4]/40 rounded-2xl p-6 relative z-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Heading isCenter>Регистрация</Heading>
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
        <Input
          label={"Подтвердите пароль"}
          type={"password"}
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
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
        Зарегистрироваться
      </Button>
      <div className="p-3 rounded-full bg-yellow-500 w-9 h-9 absolute -top-2 -right-2 cursor-pointer">
        <Image src={Close} alt="Close" width={15} height={15} />
      </div>
    </form>
  );
};

export default RegistrationForm;
