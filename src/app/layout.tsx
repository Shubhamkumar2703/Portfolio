import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ThemeProvider from "@/components/common/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Shubham Kumar",
    template: "%s | Shubham Kumar",
  },

  description:
    "Full Stack Developer specializing in scalable web applications, modern frontend experiences, and backend engineering.",

  keywords: [
    "Shubham Kumar",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Spring Boot Developer",
    "MERN Stack",
  ],

  authors: [
    {
      name: "Shubham Kumar",
    },
  ],

  creator: "Shubham Kumar",

  openGraph: {
    title: "Shubham Kumar",
    description:
      "Full Stack Developer Portfolio",

    url: "https://yourdomain.com",

    siteName: "Shubham Kumar",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shubham Kumar",
    description:
      "Full Stack Developer Portfolio",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}