import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { brand } from "@/config/brand";
import { AppProviders } from "@/providers/app-providers";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: { default: brand.name, template: `%s | ${brand.name}` },
  description: brand.description,
  openGraph: {
    title: brand.name,
    description: brand.description,
    type: "website",
    images: ["/og-placeholder.svg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${geist.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
