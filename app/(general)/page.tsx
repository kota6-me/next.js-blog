"use client";
import Header from "../_components/header";

export default function Home() {
  return (
    <div className="absolute w-full h-fit top-0 left-0 selection:bg-orange-200">
      <Header />
      <div className="w-full lg:w-[64rem] lg:mx-auto p-5">TestBlog</div>
    </div>
  );
}
