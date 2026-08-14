import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "BRUT BUNS — Built to crave", description: "Smash burgers, stacked with intent." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>; }
