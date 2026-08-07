"use client";

import { useState } from "react";

const resources = [
  { icon: "⚡", title: "Spark", text: "A performance profiler for Minecraft clients, servers, and proxies.", author: "Luck", version: "1.21", downloads: "4.2M", color: "lime" },
  { icon: "🧭", title: "BlueMap", text: "A fully-featured, 3D web map for your Minecraft worlds.", author: "Blue", version: "1.21.8", downloads: "1.8M", color: "blue" },
  { icon: "🛡", title: "GriefPrevention", text: "Stop grief before it starts. Simple, powerful land protection.", author: "RoboMWM", version: "1.21", downloads: "6.7M", color: "violet" },
];

const discussions = [
  { tag: "HELP", title: "Server performance drops when exploring new chunks", meta: "Server Administration", replies: 18, time: "4 min", avatar: "N" },
  { tag: "DEV", title: "Best practice for async database operations?", meta: "Spigot Plugin Development", replies: 7, time: "12 min", avatar: "A" },
  { tag: "BUILD", title: "Showcase: My new survival spawn", meta: "Minecraft Builds", replies: 24, time: "28 min", avatar: "M" },
  { tag: "NEWS", title: "Minecraft 1.21.8 compatibility thread", meta: "Spigot Discussion", replies: 53, time: "1 hr", avatar: "S" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = resources.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <div className="proposal">UNOFFICIAL REDESIGN CONCEPT</div>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="SpigotMC home">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>SPIGOT<span>MC</span></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a className="active" href="#forums">Forums</a>
          <a href="#resources">Resources</a>
          <a href="#community">Members</a>
          <a href="#wiki">Wiki</a>
        </nav>
        <div className="header-actions">
          <button className="search-icon" aria-label="Search">⌕</button>
          <button className="login">Log in</button>
          <button className="signup">Join community</button>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "×" : "☰"}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> THE HOME OF MINECRAFT SERVERS</div>
          <h1>Build better.<br /><em>Play together.</em></h1>
          <p>Everything you need to run, customize, and grow your Minecraft server — powered by a community of creators.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#resources">Explore resources <span>→</span></a>
            <a className="text-button" href="#forums"><span className="play">▶</span> Visit the forums</a>
          </div>
          <div className="trust-row">
            <div><strong>4.7M+</strong><span>members</span></div>
            <div><strong>72K+</strong><span>resources</span></div>
            <div><strong>12 years</strong><span>of community</span></div>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract Minecraft server illustration">
          <div className="grid-lines" />
          <div className="cube cube-one"><span>01</span></div>
          <div className="cube cube-two"><span>MC</span></div>
          <div className="cube cube-three"><span>+</span></div>
          <div className="server-card">
            <div className="server-top"><span>SERVER STATUS</span><b><i /> ONLINE</b></div>
            <h3>play.spigotmc.org</h3>
            <div className="server-stats"><span><b>18,429</b> PLAYERS</span><span><b>42 ms</b> PING</span></div>
            <div className="signal"><i /><i /><i /><i /><i /></div>
          </div>
          <div className="orange-orbit" />
        </div>
      </section>

      <section className="resource-section" id="resources">
        <div className="section-heading">
          <div><span className="section-kicker">DISCOVER</span><h2>Tools creators love.</h2></div>
          <a href="#all">Browse all resources <span>↗</span></a>
        </div>
        <div className="resource-toolbar">
          <label><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search 72,000+ resources..." /></label>
          <div><button className="selected">Trending</button><button>New releases</button><button>Top rated</button></div>
        </div>
        <div className="resource-grid">
          {filtered.map((item) => (
            <article className="resource-card" key={item.title}>
              <div className={`resource-icon ${item.color}`}>{item.icon}</div>
              <div className="card-title"><h3>{item.title}</h3><span>FREE</span></div>
              <p>{item.text}</p>
              <div className="compat"><span>✓</span> Compatible with {item.version}</div>
              <footer><span>by <b>{item.author}</b></span><span>↓ {item.downloads}</span></footer>
            </article>
          ))}
          {filtered.length === 0 && <p className="empty">No resources found. Try another search.</p>}
        </div>
      </section>

      <section className="community" id="forums">
        <div className="section-heading dark-heading">
          <div><span className="section-kicker">COMMUNITY</span><h2>Where builders meet.</h2></div>
          <p>Questions, discoveries, and ideas from the people shaping Minecraft servers.</p>
        </div>
        <div className="community-layout">
          <div className="discussion-list">
            {discussions.map((topic) => (
              <article className="discussion" key={topic.title}>
                <span className={`topic-tag ${topic.tag.toLowerCase()}`}>{topic.tag}</span>
                <div className="topic-copy"><h3>{topic.title}</h3><p>{topic.meta}</p></div>
                <span className="replies">◌ {topic.replies}</span>
                <div className="topic-user"><span>{topic.avatar}</span><small>{topic.time}</small></div>
              </article>
            ))}
            <a className="all-discussions" href="#all-discussions">View all discussions →</a>
          </div>
          <aside className="join-card" id="community">
            <span className="join-spark">✦</span>
            <h3>Your next big idea<br />starts here.</h3>
            <p>Join millions of server owners, developers, and creators sharing what they know.</p>
            <button>Create free account <span>→</span></button>
            <small>No credit card. Just Minecraft.</small>
          </aside>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><i /><i /><i /></span><span>SPIGOT<span>MC</span></span></a>
        <p>An independent redesign proposal. Not affiliated with or endorsed by SpigotMC.</p>
        <div><a href="#about">About</a><a href="#privacy">Privacy</a><a href="#contact">Contact</a></div>
      </footer>
    </main>
  );
}
