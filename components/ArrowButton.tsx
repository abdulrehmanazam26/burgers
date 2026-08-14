import {ArrowUpRight} from "lucide-react";
export function ArrowButton({children,light=false,href="#menu"}:{children:React.ReactNode;light?:boolean;href?:string}){return <a href={href} className={`arrow-btn ${light?"light":""}`}>{children}<ArrowUpRight size={18} aria-hidden="true"/></a>}
