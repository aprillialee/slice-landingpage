import Head from "next/head";

import React, { useState, useEffect } from "react";

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
      <h1>HELLO</h1>
    </>
  );
}
