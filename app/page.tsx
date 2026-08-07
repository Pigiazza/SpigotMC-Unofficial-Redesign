"use client";

import { useState } from "react";
import {
  ArrowRight, Bell, BookOpen, Box, Clock3, Code2,
  Download, ExternalLink, Flame, FolderOpen, Menu, MessageSquare,
  Newspaper, Search, Server, ShieldCheck, Users, Wrench, X,
} from "lucide-react";

const forumSections = [
  { icon: Newspaper, title: "Spigot Discussion", description: "News, announcements and general discussion about SpigotMC.", topics: "18.4K", posts: "211K", latest: "Minecraft 1.21.8 compatibility", author: "md_5", time: "12 minutes ago" },
  { icon: Server, title: "Server & Community Management", description: "Help with running, growing and protecting your Minecraft server.", topics: "94.2K", posts: "612K", latest: "Best proxy setup for a network?", author: "LiamDev", time: "4 minutes ago" },
  { icon: Code2, title: "Spigot Plugin Development", description: "API questions, Java development and code review from other creators.", topics: "77.8K", posts: "483K", latest: "Async database operations", author: "Aster", time: "8 minutes ago" },
  { icon: Wrench, title: "Spigot Help", description: "Installation, configuration, errors and troubleshooting.", topics: "128K", posts: "704K", latest: "Server performance drops", author: "Niko", time: "15 minutes ago" },
];

const resources = [
  { mark: "LP", title: "LuckPerms", category: "Administration", description: "A powerful permissions system for Minecraft servers.", downloads: "7.9M", updated: "Today" },
  { mark: "S", title: "spark", category: "Tools and Utilities", description: "Performance profiler for servers, proxies and clients.", downloads: "4.2M", updated: "Yesterday" },
  { mark: "VE", title: "ViaVersion", category: "Protocol Support", description: "Allow newer clients to join older Minecraft servers.", downloads: "6.1M", updated: "2 days ago" },
  { mark: "CM", title: "CoreProtect", category: "Anti-Griefing", description: "Fast block logging, lookup and rollback for servers.", downloads: "3.7M", updated: "3 days ago" },
];

const updates = [
  { title: "Spigot & BungeeCord 1.21.8", text: "The latest builds are now available. Read the migration notes before updating production servers.", date: "JUL 19", tag: "RELEASE" },
  { title: "Community guidelines update", text: "A clearer overview of resource rules, support expectations and marketplace moderation.", date: "JUL 08", tag: "COMMUNITY" },
  { title: "API documentation improvements", text: "New examples and revised guides are available for plugin developers.", date: "JUN 27", tag: "DEVELOPERS" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="spigot-home">
      <div className="legacy-strip"><span>SPIGOTMC</span><p>The home of the Spigot community since 2012</p><a href="/forums">Latest announcements <ArrowRight size={13}/></a></div>

      <header className="community-header">
        <a className="community-logo" href="/" aria-label="SpigotMC home">
          <img src="/spigotmc-logo.png" alt="" />
          <span>SPIGOT<b>MC</b><small>High performance Minecraft</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "community-nav open" : "community-nav"}>
          <a className="active" href="/">Home</a><a href="/forums">Forums</a><a href="/resources">Resources</a><a href="/members">Members</a><a href="/wiki">Wiki</a>
        </nav>
        <div className="community-actions"><button className="compact-search" aria-label="Search"><Search size={17}/></button><button className="login-button">Log in</button><button className="register-button">Register</button></div>
      </header>

      <section className="portal-intro">
        <div>
          <span className="portal-kicker"><Flame size={15}/> THE SPIGOT COMMUNITY</span>
          <h1>Build better<br/>Minecraft servers.</h1>
          <p>Forums, resources and documentation for server owners and plugin developers. Everything Spigot, in one place.</p>
          <div className="portal-buttons"><a className="forum-cta" href="/forums">Browse the forums <ArrowRight size={16}/></a><a href="/resources">Find plugins</a></div>
        </div>
        <aside className="quick-panel">
          <div className="quick-title"><span><Bell size={15}/> Community activity</span><b>LIVE</b></div>
          <div className="activity-item"><i>N</i><p><b>Server performance drops when exploring chunks</b><span>Spigot Help · 4 minutes ago</span></p><MessageSquare size={15}/></div>
          <div className="activity-item"><i>A</i><p><b>Best practice for async database operations?</b><span>Plugin Development · 8 minutes ago</span></p><MessageSquare size={15}/></div>
          <div className="activity-item"><i>M</i><p><b>Showcase: new survival spawn</b><span>Community Showcase · 21 minutes ago</span></p><MessageSquare size={15}/></div>
          <a href="/forums">See all recent activity <ArrowRight size={13}/></a>
        </aside>
      </section>

      <section className="portal-stats" aria-label="Community statistics">
        <div><Users/><span><b>4,728,391</b>Members</span></div><div><MessageSquare/><span><b>3,104,892</b>Forum posts</span></div><div><Box/><span><b>72,486</b>Resources</span></div><div><ShieldCheck/><span><b>13 years</b>Building together</span></div>
      </section>

      <div className="portal-layout">
        <div className="portal-main">
          <section className="portal-block">
            <header className="block-heading"><div><span>COMMUNITY</span><h2>Forums</h2><p>Ask questions, share knowledge and meet other server creators.</p></div><a href="/forums">View all forums <ArrowRight size={14}/></a></header>
            <div className="forum-board">
              <div className="board-head"><span>Forum</span><span>Topics / Posts</span><span>Latest post</span></div>
              {forumSections.map(({icon: Icon, ...forum}) => <article className="forum-row" key={forum.title}>
                <div className="forum-symbol"><Icon size={21}/></div><div className="forum-description"><a href="/forums">{forum.title}</a><p>{forum.description}</p></div>
                <div className="forum-numbers"><span><b>{forum.topics}</b>Topics</span><span><b>{forum.posts}</b>Posts</span></div>
                <div className="latest-post"><a href="/forums">{forum.latest}</a><span>by <b>{forum.author}</b> · {forum.time}</span></div>
              </article>)}
            </div>
          </section>

          <section className="portal-block">
            <header className="block-heading"><div><span>RESOURCE MANAGER</span><h2>Popular resources</h2><p>Trusted plugins from the SpigotMC creator community.</p></div><a href="/resources">Browse resources <ArrowRight size={14}/></a></header>
            <div className="dense-resources">{resources.map((item) => <article key={item.title}>
              <div className="resource-letter">{item.mark}</div><div><span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p></div><div className="resource-meta"><span><Download size={13}/>{item.downloads}</span><span><Clock3 size={13}/>{item.updated}</span></div>
            </article>)}</div>
          </section>
        </div>

        <aside className="portal-sidebar">
          <section className="sidebar-card welcome-card"><span>NEW TO SPIGOT?</span><h2>Join the community.</h2><p>Create an account to ask questions, publish resources and follow your favourite developers.</p><button>Create account <ArrowRight size={15}/></button><a href="#login">Already a member? Log in</a></section>
          <section className="sidebar-card"><header><Newspaper size={17}/><h3>Spigot updates</h3></header>{updates.map(update => <article className="update-item" key={update.title}><time>{update.date}</time><div><span>{update.tag}</span><a href="/forums">{update.title}</a><p>{update.text}</p></div></article>)}<a className="sidebar-link" href="/forums">All announcements <ArrowRight size={13}/></a></section>
          <section className="sidebar-card links-card"><header><FolderOpen size={17}/><h3>Quick links</h3></header><a href="/wiki"><BookOpen/>Spigot documentation<ExternalLink/></a><a href="/resources"><Box/>Resource manager<ExternalLink/></a><a href="/forums"><Code2/>Developer forums<ExternalLink/></a><a href="#downloads"><Download/>BuildTools downloads<ExternalLink/></a></section>
        </aside>
      </div>

      <footer className="community-footer"><div><a className="community-logo footer-logo" href="/"><img src="/spigotmc-logo.png" alt=""/><span>SPIGOT<b>MC</b></span></a><p>Independent redesign concept. Not affiliated with or endorsed by SpigotMC.</p></div><nav><a href="#about">About</a><a href="#rules">Rules</a><a href="#privacy">Privacy</a><a href="#contact">Contact</a></nav></footer>
    </main>
  );
}
