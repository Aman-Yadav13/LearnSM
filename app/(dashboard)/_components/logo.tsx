import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex w-full flex-row items-center gap-2">
      <Image height={30} width={30} alt="logo" src="/logo.svg" />
      <p className="text-xl text-emerald-600">
        Learn<span className="font-semibold">SM</span>
      </p>
    </div>
  );
};
