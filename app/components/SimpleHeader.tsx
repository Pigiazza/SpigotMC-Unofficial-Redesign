"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  ["home", "Home", "/"],
  ["forums", "Forums", "/forums"],
  ["resources", "Resources", "/resources"],
  ["members", "Members", "/members"],
  ["wiki", "Wiki", "/wiki"],
] as const;

export function SimpleHeader({active}:{active:"forums"|"resources"|"members"|"wiki"}) {
  const [open,setOpen]=useState(false);
  return <>
    <div className="mockup-notice"><b>UNOFFICIAL DESIGN MOCKUP</b><span>This is not an official SpigotMC website. It is an independent visual restyle created for discussion and feedback.</span></div>
    <header className="sub-header community-header">
      <a className="community-logo" href="/"><img src="/spigotmc-logo.png" alt=""/><span>SPIGOT<b>MC</b><small>High performance Minecraft</small></span></a>
      <button className="sub-menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X size={20}/>:<Menu size={20}/>}</button>
      <nav className={open?"sub-nav open":"sub-nav"}>{nav.map(([id,label,href])=><a key={id} className={active===id?"active":""} href={href}>{label}</a>)}</nav>
      <div className="header-actions sub-header-actions"><button className="login-button">Log in</button><button className="register-button">Register</button></div>
    </header>
  </>
}
