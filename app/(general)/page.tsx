"use client";
import ArticleCard from "../_components/articleCard";
import Header from "../_components/header";

export default function Home() {
  return (
    <div className="absolute w-full h-fit top-0 left-0 text-black selection:bg-orange-200">
      <Header />
      <div className="relative w-full lg:w-[64rem] lg:mx-auto p-5 pt-32">
        <ArticleCard />
      </div>
    </div>
  );
}
