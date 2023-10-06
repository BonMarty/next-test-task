"use client";

import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import User from "../../assets/user.svg";
import Image from "next/image";
import { useAvatar } from "../../context";

const Header = () => {
  const { state } = useAvatar();

  return (
    <header className="p-6 flex justify-between items-center">
      <div className="flex items-center gap-4 cursor-pointer">
        <Image src={Logo} alt="Logo" width={30} height={47} />
        <p className="font-bold text-[#4D6AE4] h-0">CoinsFill</p>
      </div>
      <div className="flex items-center gap-6">
        <Image
          src={Search}
          alt="Search"
          width={17}
          height={17}
          className="cursor-pointer"
        />
        {state.avatar ? (
          <Image
            src={state.avatar}
            alt="Avatar"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer rounded-full object-cover"
          />
        ) : (
          <Image
            src={User}
            alt="User"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
