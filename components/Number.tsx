"use client";
import React, { useEffect, useState } from "react";
import { useNumberStore } from "../zustand-store/store";

const Number = () => {
  const { num } = useNumberStore();

  return <div>{num}</div>;
};

export default Number;
