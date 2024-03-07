import { isEducator } from "@/lib/educator";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const EducatorLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!isEducator(userId || "")) {
    return redirect("/");
  }

  return <>{children}</>;
};

export default EducatorLayout;
