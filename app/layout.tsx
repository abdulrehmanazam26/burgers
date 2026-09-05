import type {Metadata} from "next";
import "./globals.css";
import {CartProvider} from "@/components/cart/CartProvider";

export const metadata:Metadata={title:"KFC — Finger Lickin' Good",description:"KFC-style crispy chicken, Zinger burgers, meals and sides."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning><CartProvider>{children}</CartProvider></body></html>}
