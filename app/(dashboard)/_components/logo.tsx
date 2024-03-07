import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="w-fit">
      <Link href="/" className="flex flex-row items-center gap-x-2">
        <Image height={30} width={30} alt="logo" src="/logo.svg" />
        <p className="text-xl text-emerald-600">
          Learn<span className="font-semibold">SM</span>
        </p>
      </Link>
    </div>
  );
};
