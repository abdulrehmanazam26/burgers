import {ArrowUpRight} from "lucide-react";
export function ArrowButton({children,light=false}:{children:React.ReactNode,light?:boolean}){return <a href="#menu" className={`arrow-btn ${light?"light":""}`}>{children}<ArrowUpRight size={18}/></a>}
