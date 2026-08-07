"use client";

import { useState } from "react";
import { ArrowRight, BookOpen, Code2, Download, GitBranch, Menu, MessageCircle, Newspaper, Server, X } from "lucide-react";

const news = [
  { date: "19 JUL 2026", tag: "RELEASE", title: "Spigot & BungeeCord 1.21.8", text: "The latest builds are available. Read the migration notes before updating a production server." },
  { date: "08 JUL 2026", tag: "COMMUNITY", title: "Community guidelines update", text: "A clearer overview of resource rules, support expectations and marketplace moderation." },
  { date: "27 JUN 2026", tag: "DEVELOPERS", title: "API documentation improvements", text: "Revised examples and guides for developers building against the Spigot API." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main className="spigot-home simple-home">
    <div className="mockup-notice"><b>UNOFFICIAL DESIGN MOCKUP</b><span>This is not an official SpigotMC website. It is an independent visual restyle created for discussion and feedback.</span></div>
    <header className="community-header">
      <a className="community-logo" href="/"><img src="/spigotmc-logo.png" alt=""/><span>SPIGOT<b>MC</b><small>High performance Minecraft</small></span></a>
      <button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?"community-nav open":"community-nav"}><a className="active" href="/">Home</a><a href="/forums">Forums</a><a href="/resources">Resources</a><a href="/members">Members</a><a href="/wiki">Wiki</a></nav>
      <div className="community-actions"><button className="login-button">Log in</button><button className="register-button">Register</button></div>
    </header>

    <section className="simple-hero">
      <div className="simple-hero-copy"><span>THE HOME OF SPIGOT</span><h1>Minecraft servers,<br/><em>built together.</em></h1><p>Software, resources and a community for people who run and develop Minecraft servers.</p><div><a className="hero-primary" href="/forums">Enter the community <ArrowRight/></a><a href="/resources">Browse plugins</a></div></div>
      <div className="simple-hero-mark"><img src="/spigotmc-logo.png" alt="SpigotMC"/><div><b>4.7M</b><span>community members</span></div><div><b>72K+</b><span>published resources</span></div></div>
    </section>

    <section className="news-section">
      <header><div><span>LATEST FROM SPIGOTMC</span><h2>News & announcements</h2></div><a href="/forums">View all news <ArrowRight/></a></header>
      <div className="news-list">{news.map(item=><article key={item.title}><time>{item.date}</time><div><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><a href="/forums">Read announcement <ArrowRight/></a></div></article>)}</div>
    </section>

    <section className="official-section">
      <div className="download-callout"><div className="download-icon"><Download/></div><div><span>OFFICIAL SOFTWARE</span><h2>Build your Spigot server.</h2><p>Use BuildTools to compile the latest supported Spigot and CraftBukkit server builds.</p></div><a href="https://www.spigotmc.org/wiki/buildtools/">Open BuildTools guide <ArrowRight/></a></div>
      <div className="official-links"><header><span>OFFICIAL SPIGOTMC LINKS</span><h2>Find the community</h2></header><div>
        <a href="https://www.spigotmc.org/link-forums/discord.95/"><MessageCircle/><span><b>Discord</b>Chat with the community</span><ArrowRight/></a>
        <a href="https://github.com/spigotmc"><GitBranch/><span><b>GitHub</b>Official open-source projects</span><ArrowRight/></a>
        <a href="https://www.spigotmc.org/forums/"><Newspaper/><span><b>Forums</b>News, help and discussions</span><ArrowRight/></a>
        <a href="https://www.spigotmc.org/wiki/"><BookOpen/><span><b>Wiki</b>Guides and documentation</span><ArrowRight/></a>
        <a href="https://hub.spigotmc.org/stash/"><Code2/><span><b>Stash</b>Source code and development</span><ArrowRight/></a>
        <a href="https://hub.spigotmc.org/jenkins/"><Server/><span><b>Jenkins</b>Official build infrastructure</span><ArrowRight/></a>
      </div></div>
    </section>

    <footer className="community-footer"><div><a className="community-logo footer-logo" href="/"><img src="/spigotmc-logo.png" alt=""/><span>SPIGOT<b>MC</b></span></a><p>Independent redesign mockup. Not affiliated with or endorsed by SpigotMC.</p></div><nav><a href="/forums">Forums</a><a href="/resources">Resources</a><a href="/wiki">Wiki</a></nav></footer>
  </main>
}
