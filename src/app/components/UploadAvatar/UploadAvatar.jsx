"use client";

import { useRef, useState } from "react";
import { Heading, Button } from "../../ui";
import Image from "next/image";
import Upload from "../../assets/upload.svg";
import { useAvatar, useToken } from "../../context";

const UploadAvatar = () => {
  const { state } = useToken();
  const { dispatch } = useAvatar();

  const [isUpload, setIsUpload] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  function onFileChangeCapture(e) {
    if (e.target.files) {
      const isLessThan5MB = e.target.files[0].size / 1024 / 1024 <= 5;
      if (isLessThan5MB) {
        setImageFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("File size should be less than 5 MB");
      }
    }
  }

  function handleUploadAvatar() {
    const reader = new FileReader();

    reader.readAsDataURL(imageFile);

    reader.onload = async () => {
      await fetch("https://test-task.test211.workers.dev/account/image", {
        method: "PUT",
        headers: {
          "token-tt": state.token,
        },
        body: JSON.stringify({
          image: reader.result,
        }),
      });
      setIsUpload(false);
      const response = await fetch(
        "https://test-task.test211.workers.dev/account/image",
        {
          method: "GET",
          headers: {
            "token-tt": state.token,
          },
        }
      );
      const imageResponse = await response.json();
      await dispatch({ type: "SET_AVATAR", payload: imageResponse.image });
    };
  }

  if (isUpload) {
    return (
      <>
        <Heading>Фото для аватарки</Heading>
        <div
          className="my-12 bg-[#F3F5F5] rounded-xl p-6 flex justify-center items-center  cursor-pointer"
          onClick={() => inputRef.current.click()}
        >
          {image ? (
            <Image
              src={image}
              alt="Avatar"
              width={164}
              height={164}
              className="rounded-full w-40 h-40 object-cover"
            />
          ) : (
            <p className="font-medium">Choose file</p>
          )}
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChangeCapture={(e) => onFileChangeCapture(e)}
            className="appearance-none hidden"
          />
        </div>
        <div className="space-y-6">
          <Button
            className="bg-gradient-to-r from-[#4834D4] to-[#686DE0] text-white"
            onClick={handleUploadAvatar}
            disabled={imageFile ? false : true}
          >
            Сохранить
          </Button>
          <Button
            className="bg-gradient-to-r from-[#F0F0FC] to-[#EDEBFB] text-black"
            onClick={() => setIsUpload(false)}
          >
            Отменить
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <Heading>Загрузка аватара</Heading>
      <p className="my-12 font-medium">
        Загрузите файл размером до 5Мб
        <br /> По формату: JPG, PNG, GIF
      </p>
      <Button
        className="bg-gradient-to-r from-[#4834D4] to-[#686DE0] text-white"
        onClick={() => setIsUpload(true)}
      >
        <div className="flex items-center gap-3 justify-center">
          <Image src={Upload} alt="Upload" width={15} height={18} />
          <p>Выбрать файл</p>
        </div>
      </Button>
    </>
  );
};

export default UploadAvatar;
