"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, Check, ChevronDown, Compass, Gauge, Globe2, MessageCircle, Play, ShieldCheck, Sparkles, UserRound } from "lucide-react";

const copy = {
  en: {
    flag: "EN", language: "English", proposal: "UNOFFICIAL REDESIGN CONCEPT", nav: ["Forums", "Resources", "Members", "Wiki"], login: "Log in", join: "Join community",
    eyebrow: "THE HOME OF MINECRAFT SERVERS", title1: "Build better.", title2: "Play together.", intro: "Everything you need to run, customize, and grow your Minecraft server — powered by a community of creators.", explore: "Explore resources", forums: "Visit the forums", stats: ["members", "resources", "of community"], status: "SERVER STATUS", online: "ONLINE", players: "PLAYERS", ping: "PING",
    discover: "DISCOVER", tools: "Tools creators love.", browse: "Browse all resources", placeholder: "Search 72,000+ resources...", filters: ["Trending", "New releases", "Top rated"], free: "FREE", compatible: "Compatible with", by: "by", empty: "No resources found. Try another search.",
    community: "COMMUNITY", meet: "Where builders meet.", communityText: "Questions, discoveries, and ideas from the people shaping Minecraft servers.", all: "View all discussions", idea: "Your next big idea starts here.", ideaText: "Join millions of server owners, developers, and creators sharing what they know.", account: "Create free account", noCard: "No credit card. Just Minecraft.", ecosystem: ["OPEN SERVER ECOSYSTEM","One community.","Endless possibilities.","Spigot API","Build on a stable foundation","Resources","Extend every server","Community","Learn and share together"], disclaimer: "An independent redesign proposal. Not affiliated with or endorsed by SpigotMC.", footer: ["About", "Privacy", "Contact"]
  },
  it: {
    flag: "IT", language: "Italiano", proposal: "CONCEPT DI REDESIGN NON UFFICIALE", nav: ["Forum", "Risorse", "Membri", "Wiki"], login: "Accedi", join: "Unisciti alla community",
    eyebrow: "LA CASA DEI SERVER MINECRAFT", title1: "Crea meglio.", title2: "Gioca insieme.", intro: "Tutto ciò che ti serve per gestire, personalizzare e far crescere il tuo server Minecraft — con la forza di una community di creator.", explore: "Esplora le risorse", forums: "Visita il forum", stats: ["membri", "risorse", "di community"], status: "STATO DEL SERVER", online: "ONLINE", players: "GIOCATORI", ping: "PING",
    discover: "SCOPRI", tools: "Gli strumenti più amati.", browse: "Tutte le risorse", placeholder: "Cerca tra oltre 72.000 risorse...", filters: ["Di tendenza", "Nuove uscite", "Più votate"], free: "GRATIS", compatible: "Compatibile con", by: "di", empty: "Nessuna risorsa trovata. Prova un'altra ricerca.",
    community: "COMMUNITY", meet: "Dove i creator si incontrano.", communityText: "Domande, scoperte e idee dalle persone che stanno plasmando i server Minecraft.", all: "Vedi tutte le discussioni", idea: "La tua prossima grande idea inizia qui.", ideaText: "Unisciti a milioni di proprietari, sviluppatori e creator che condividono ciò che sanno.", account: "Crea un account gratis", noCard: "Nessuna carta. Solo Minecraft.", ecosystem: ["ECOSISTEMA SERVER APERTO","Una community.","Possibilità infinite.","Spigot API","Costruisci su basi solide","Risorse","Espandi ogni server","Community","Impara e condividi"], disclaimer: "Una proposta di redesign indipendente. Non affiliata né approvata da SpigotMC.", footer: ["Chi siamo", "Privacy", "Contatti"]
  }
} as const;

const resources = [
  { Icon: Gauge, title: "Spark", text: "A performance profiler for Minecraft clients, servers, and proxies.", author: "Luck", version: "1.21", downloads: "4.2M", color: "lime" },
  { Icon: Compass, title: "BlueMap", text: "A fully-featured, 3D web map for your Minecraft worlds.", author: "Blue", version: "1.21.8", downloads: "1.8M", color: "blue" },
  { Icon: ShieldCheck, title: "GriefPrevention", text: "Stop grief before it starts. Simple, powerful land protection.", author: "RoboMWM", version: "1.21", downloads: "6.7M", color: "violet" },
];

const discussions = [
  { tag: "HELP", en: "Server performance drops when exploring new chunks", it: "Calo di prestazioni esplorando nuovi chunk", meta: "Server Administration", replies: 18, time: "4 min", avatar: "N" },
  { tag: "DEV", en: "Best practice for async database operations?", it: "Best practice per operazioni database asincrone?", meta: "Spigot Plugin Development", replies: 7, time: "12 min", avatar: "A" },
  { tag: "BUILD", en: "Showcase: My new survival spawn", it: "Showcase: il mio nuovo spawn survival", meta: "Minecraft Builds", replies: 24, time: "28 min", avatar: "M" },
  { tag: "NEWS", en: "Minecraft 1.21.8 compatibility thread", it: "Discussione compatibilità Minecraft 1.21.8", meta: "Spigot Discussion", replies: 53, time: "1 h", avatar: "S" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "it">("en");
  const languageRef = useRef<HTMLDivElement>(null);
  const t = copy[lang];

  useEffect(() => {
    const close = (event: MouseEvent) => { if (!languageRef.current?.contains(event.target as Node)) setLanguageOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <main>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="proposal">{t.proposal}</div>
      <header className="topbar glass">
        <div className="menu-wrap">
          <button className={menuOpen ? "hamburger-button active" : "hamburger-button"} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><span/><span/><span/></button>
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
            <a href="/forums" onClick={() => setMenuOpen(false)}><span>01</span>{t.nav[0]}</a><a href="/resources" onClick={() => setMenuOpen(false)}><span>02</span>{t.nav[1]}</a><a href="/members" onClick={() => setMenuOpen(false)}><span>03</span>{t.nav[2]}</a><a href="/wiki" onClick={() => setMenuOpen(false)}><span>04</span>{t.nav[3]}</a>
          </nav>
        </div>
        <a className="brand real-brand" href="#top" aria-label="SpigotMC home"><img src="/spigotmc-logo.png" alt="" /><span>SPIGOT<span>MC</span></span></a>
        <div className="header-actions">
          <div className="language" ref={languageRef}>
            <button className="language-trigger" onClick={() => setLanguageOpen(!languageOpen)} aria-expanded={languageOpen}><Globe2 size={16}/><span>{t.flag}</span><ChevronDown size={14} className={languageOpen ? "rotate" : ""}/></button>
            {languageOpen && <div className="language-menu glass-popover" role="menu">
              {(["it", "en"] as const).map((code) => <button key={code} className={lang === code ? "chosen" : ""} onClick={() => {setLang(code);setLanguageOpen(false)}}><span className="lang-code">{copy[code].flag}</span><span>{copy[code].language}</span>{lang === code && <Check size={15}/>}</button>)}
            </div>}
          </div>
          <button className="guest-button" aria-label={t.login} title={t.login}><UserRound size={18}/><span className="guest-status" /></button>
        </div>
      </header>
      <button className={menuOpen ? "menu-backdrop show" : "menu-backdrop"} onClick={() => setMenuOpen(false)} aria-label="Close menu" tabIndex={menuOpen ? 0 : -1} />

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> {t.eyebrow}</div><h1>{t.title1}<br /><em>{t.title2}</em></h1><p>{t.intro}</p>
          <div className="hero-actions"><a className="primary-button liquid-button" href="/resources">{t.explore}<ArrowRight size={16}/></a><a className="text-button glass-button" href="/forums"><span className="play"><Play size={10} fill="currentColor"/></span>{t.forums}</a></div>
          <div className="trust-row glass-strip"><div><strong>4.7M+</strong><span>{t.stats[0]}</span></div><div><strong>72K+</strong><span>{t.stats[1]}</span></div><div><strong>12 years</strong><span>{t.stats[2]}</span></div></div>
        </div>
        <div className="hero-art" aria-label="Abstract Minecraft server illustration">
          <div className="grid-lines" /><div className="ecosystem-orbit" />
          <div className="ecosystem-panel glass-panel"><span className="ecosystem-label">{t.ecosystem[0]}</span><h3>{t.ecosystem[1]}<br/>{t.ecosystem[2]}</h3><div className="ecosystem-flow"><div><Gauge size={22}/><span><b>{t.ecosystem[3]}</b><small>{t.ecosystem[4]}</small></span></div><i/><div><ShieldCheck size={22}/><span><b>{t.ecosystem[5]}</b><small>{t.ecosystem[6]}</small></span></div><i/><div><Compass size={22}/><span><b>{t.ecosystem[7]}</b><small>{t.ecosystem[8]}</small></span></div></div></div>
        </div>
      </section>

      <section className="resource-section" id="resources">
        <div className="section-heading"><div><span className="section-kicker">{t.discover}</span><h2>{t.tools}</h2></div><a href="#all">{t.browse}<ArrowUpRight size={15}/></a></div>
        <div className="resource-filters glass-control">{t.filters.map((filter, i) => <button className={i === 0 ? "selected" : ""} key={filter}>{filter}</button>)}</div>
        <div className="resource-grid">{resources.map(({Icon,...item}) => <article className="resource-card glass-card" key={item.title}><div className={`resource-icon ${item.color}`}><Icon size={24}/></div><div className="card-title"><h3>{item.title}</h3><span>{t.free}</span></div><p>{item.text}</p><div className="compat"><Check size={13}/>{t.compatible} {item.version}</div><footer><span>{t.by} <b>{item.author}</b></span><span><ArrowDownToLine size={12}/>{item.downloads}</span></footer></article>)}</div>
      </section>

      <section className="community" id="forums">
        <div className="section-heading dark-heading"><div><span className="section-kicker">{t.community}</span><h2>{t.meet}</h2></div><p>{t.communityText}</p></div>
        <div className="community-layout"><div className="discussion-list glass-dark">{discussions.map((topic) => <article className="discussion" key={topic.en}><span className={`topic-tag ${topic.tag.toLowerCase()}`}>{topic.tag}</span><div className="topic-copy"><h3>{topic[lang]}</h3><p>{topic.meta}</p></div><span className="replies"><MessageCircle size={13}/>{topic.replies}</span><div className="topic-user"><span>{topic.avatar}</span><small>{topic.time}</small></div></article>)}<a className="all-discussions" href="#all-discussions">{t.all}<ArrowRight size={14}/></a></div>
          <aside className="join-card glass-orange" id="community"><Sparkles className="join-spark" size={29}/><h3>{t.idea}</h3><p>{t.ideaText}</p><button>{t.account}<ArrowRight size={16}/></button><small>{t.noCard}</small></aside></div>
      </section>
      <footer className="footer"><a className="brand real-brand footer-brand" href="#top"><img src="/spigotmc-logo.png" alt="" /><span>SPIGOT<span>MC</span></span></a><p>{t.disclaimer}</p><div>{t.footer.map((item)=><a key={item} href="#about">{item}</a>)}</div></footer>
    </main>
  );
}
