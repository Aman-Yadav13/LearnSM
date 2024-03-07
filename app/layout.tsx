import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnSM - Master Your Skills with LearnSM LMS",
  description:
    "LearnSM is a comprehensive learning management system (LMS) designed to help you master various skills efficiently. Explore our courses, quizzes, and resources to enhance your knowledge.",
  keywords: [
    "LearnSM",
    "LMS",
    "learning management system",
    "online courses",
    "education",
    "skills development",
  ],
  authors: [{ name: "Aman Yadav", url: "amanyadav.tech" }],
  // url: "https://www.learnsm.com",
  // image: "https://www.learnsm.com/cover-image.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
