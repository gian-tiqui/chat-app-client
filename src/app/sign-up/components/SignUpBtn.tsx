"use client";
import React from "react";
import { useNumberStore } from "../../../../zustand-store/store";
import Link from "next/link";

const SignUpBtn = () => {
  const { num, setNum } = useNumberStore();

  const increment = () => {
    setNum(1);
    console.log(num);
  };

  return (
    <>
      <button onClick={increment}>click me</button>
      <Link href={"/"}>goback</Link>
    </>
  );
};

export default SignUpBtn;
