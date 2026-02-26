import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.svg",
  },
  title: {
    default: "Winanda Hartadi | Fullstack Developer",
    template: "%s | Winanda Hartadi",
  },
  description:
    "A Computer Science student at BINUS University passionate about creating innovative, user-friendly applications that bridge the gap between technology and everyday life.",
  openGraph: {
    title: "Winanda Hartadi | Fullstack Developer",
    description:
      "A Computer Science student at BINUS University passionate about creating innovative, user-friendly applications.",
    url: "https://winandahartadi.cloud",
    siteName: "Winanda Hartadi Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Winanda Hartadi | Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winanda Hartadi | Fullstack Developer",
    description:
      "A Computer Science student at BINUS University passionate about creating innovative, user-friendly applications.",
    images: ["/images/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
