import type {Metadata} from "next";
import "./globals.css";
import {CartProvider} from "@/components/cart/CartProvider";

export const metadata:Metadata={title:"My Burger Lahore — Double Beef Burgers",description:"An unofficial digital concept for My Burger Lahore, featuring double beef burgers, fries and direct ordering."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning><CartProvider>{children}</CartProvider></body></html>}
