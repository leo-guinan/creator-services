import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-start">
      <Head>
        <title>Profile App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}