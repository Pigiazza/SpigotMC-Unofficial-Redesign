"use client";
import { Check, ChevronDown, Globe2, Menu, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const labels = {
  en: { language: "English", nav: ["Home", "Forums", "Resources", "Members", "Wiki"], login: "Log in" },
  it: { language: "Italiano", nav: ["Home", "Forum", "Risorse", "Membri", "Wiki"], login: "Accedi" },
} as const;

export function SimpleHeader({active}:{active:"forums"|"resources"|"members"|"wiki"}) {
  const [open,setOpen]=useState(false), [languageOpen,setLanguageOpen]=useState(false), [lang,setLang]=useState<"en"|"it">("en");
  const languageRef=useRef<HTMLDivElement>(null), t=labels[lang];
  useEffect(()=>{const close=(event:MouseEvent)=>{if(!languageRef.current?.contains(event.target as Node))setLanguageOpen(false)};document.addEventListener("mousedown",close);return()=>document.removeEventListener("mousedown",close)},[]);
  return <header className="sub-header glass">
    <button className="sub-menu-button" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X size={20}/>:<Menu size={20}/>}</button>
    <a className="brand real-brand" href="/"><img src="/spigotmc-logo.png" alt=""/><span>SPIGOT<span>MC</span></span></a>
    <nav className={open?"sub-nav open":"sub-nav"}><a href="/">{t.nav[0]}</a><a className={active==="forums"?"active":""} href="/forums">{t.nav[1]}</a><a className={active==="resources"?"active":""} href="/resources">{t.nav[2]}</a><a className={active==="members"?"active":""} href="/members">{t.nav[3]}</a><a className={active==="wiki"?"active":""} href="/wiki">{t.nav[4]}</a></nav>
    <div className="header-actions sub-header-actions"><div className="language" ref={languageRef}><button className="language-trigger" onClick={()=>setLanguageOpen(!languageOpen)} aria-expanded={languageOpen}><Globe2 size={16}/><span>{lang.toUpperCase()}</span><ChevronDown size={14} className={languageOpen?"rotate":""}/></button>{languageOpen&&<div className="language-menu glass-popover" role="menu">{(["en","it"] as const).map(code=><button key={code} className={lang===code?"chosen":""} onClick={()=>{setLang(code);setLanguageOpen(false)}}><span className="lang-code">{code.toUpperCase()}</span><span>{labels[code].language}</span>{lang===code&&<Check size={15}/>}</button>)}</div>}</div><button className="guest-button" aria-label={t.login} title={t.login}><UserRound size={18}/><span className="guest-status"/></button></div>
  </header>
}
