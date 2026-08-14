import type {Metadata} from "next";
import "./globals.css";
import {CartProvider} from "@/components/cart/CartProvider";

export const metadata:Metadata={title:"BRUT BUNS — Zinger, perfected",description:"Crispy Zinger burgers, fried fresh and stacked with intent."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning><CartProvider>{children}</CartProvider></body></html>}
