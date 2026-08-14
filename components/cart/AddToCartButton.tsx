"use client";
import {useCart,type CartProduct} from "./CartProvider";
export function AddToCartButton({item,compact=false}:{item:CartProduct;compact?:boolean}){const {add}=useCart();return <button className={`add-cart ${compact?"compact":""}`} onClick={()=>add(item)}>ADD TO CART <span>+</span></button>}
