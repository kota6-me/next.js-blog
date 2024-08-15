import Link from "next/link";
import { usePathname as pathname } from "next/navigation";
export default function NavBtn({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <div className="col-span-1 group border-transparent hover:border-orange-400 border-2 border-solid duration-300 rounded-lg">
      <Link href={pathname.toString() === href ? "" : href}>
        <div className="mx-auto h-fit w-fit">
          <span className="font-emj text-4xl text-black translate-y-0.5 duration-300 group-hover:-translate-y-0.5">
            {icon}
          </span>
        </div>
        <p className="w-fit mx-auto -mt-2 translate-y-0.5 duration-300 group-hover:-translate-y-0.5 text-transparent group-hover:text-black font-urb">
          {label.toUpperCase()}
        </p>
      </Link>
    </div>
  );
}
