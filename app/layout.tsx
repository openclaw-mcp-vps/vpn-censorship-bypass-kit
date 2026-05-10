import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BypassKit — Automatic VPN Block Circumvention",
  description: "Rotating proxy service that automatically switches protocols when VPNs are blocked. Stay connected in censored regions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8fe8ef7d-a973-44b0-9673-c6dd5420678c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
