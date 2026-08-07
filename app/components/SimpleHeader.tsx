"use client";
import { Menu, UserRound, X } from "lucide-react";
import { useState } from "react";

export function SimpleHeader({active}:{active:"forums"|"resources"|"members"|"wiki"}) {
  const [open,setOpen]=useState(false);
  return <header className="sub-header glass">
    <button className="sub-menu-button" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X size={20}/>:<Menu size={20}/>}</button>
    <a className="brand real-brand" href="/"><img src="/spigotmc-logo.png" alt=""/><span>SPIGOT<span>MC</span></span></a>
    <nav className={open?"sub-nav open":"sub-nav"}><a href="/">Home</a><a className={active==="forums"?"active":""} href="/forums">Forum</a><a className={active==="resources"?"active":""} href="/resources">Risorse</a><a className={active==="members"?"active":""} href="/members">Membri</a><a className={active==="wiki"?"active":""} href="/wiki">Wiki</a></nav>
    <button className="guest-button" aria-label="Accedi"><UserRound size={18}/><span className="guest-status"/></button>
  </header>
}
