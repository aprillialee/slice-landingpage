import Head from "next/head";

import React, { useState, useEffect } from "react";

import SmallButtonWhite from "../components/SmallButtonWhite";
import SmallButtonBlack from "../components/SmallButtonBlack";

import dynamic from "next/dynamic";

const Background = dynamic(import("../R3FComponents/Background"), {
  ssr: false,
});

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  return (
    <>
      {hasMounted && <Background />}
      <SmallButtonWhite />
      <SmallButtonBlack />
    </>
  );
}
