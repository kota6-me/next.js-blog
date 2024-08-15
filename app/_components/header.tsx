import NavBtn from "./navButton";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-10 grid grid-cols-6 p-5 bg-white text-black">
      <div className="col-span-2 md:col-span-1 h-fit my-auto -translate-y-0.5">
        <h1 className="font-urb text-4xl font-medium h-[1em]">Kotaro</h1>
      </div>
      <div className="col-span-2 md:col-span-3 lg:col-span-4"></div>
      <div className="col-span-2 lg:col-span-1">
        <div className="relative justify-center grid grid-cols-2 gap-3">
          <NavBtn href={""} icon={"newsstand"} label={"blog"} />
          <NavBtn href={"https://kota6.me/"} icon={"home"} label={"homepage"} />
        </div>
      </div>
    </div>
  );
}
