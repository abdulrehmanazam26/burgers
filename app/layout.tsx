import type {Metadata} from "next";
import "./globals.css";
import {CartProvider} from "@/components/cart/CartProvider";

export const metadata:Metadata={title:"MELT Lahore — Double Smash Burgers",description:"A premium concept experience for MELT Lahore featuring smashed beef burgers, loaded fries and shakes."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning><CartProvider>{children}</CartProvider></body></html>}
