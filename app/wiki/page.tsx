import { ArrowRight, BookOpen, Boxes, Code2, Download, Network, Search, ServerCog, Wrench } from "lucide-react";
import { SimpleHeader } from "../components/SimpleHeader";

const guides = [
  { Icon: Download, title: "Install Spigot", text: "BuildTools, Java requirements, and initial setup.", tag: "START HERE" },
  { Icon: Code2, title: "Create a plugin", text: "Workspace, plugin.yml, events, and commands.", tag: "DEVELOPMENT" },
  { Icon: ServerCog, title: "Run your server", text: "Configuration, permissions, backups, and security.", tag: "SERVER" },
  { Icon: Network, title: "BungeeCord", text: "Connect multiple servers into a single network.", tag: "PROXY" },
  { Icon: Boxes, title: "Spigot API", text: "Available classes, events, and features.", tag: "REFERENCE" },
  { Icon: Wrench, title: "Optimization", text: "TPS, profilers, and performance best practices.", tag: "PERFORMANCE" }
];

export default function Wiki() { return <main className="sub-page"><SimpleHeader active="wiki"/><section className="wiki-hero"><BookOpen size={28}/><span className="section-kicker">DOCUMENTATION</span><h1>Spigot Wiki</h1><p>Guides and technical references for server owners and developers.</p><label><Search size={20}/><input placeholder="Search documentation…"/><kbd>⌘ K</kbd></label></section><section className="wiki-shell"><aside><span>CONTENTS</span><a className="active" href="#start">Getting started</a><a href="#server">Server</a><a href="#plugins">Plugin development</a><a href="#api">Spigot API</a><a href="#proxy">BungeeCord</a><a href="#community">Community</a></aside><div><header><h2>Explore the Wiki</h2><p>Official guides, technical references, and community-curated answers.</p></header><div className="guide-grid">{guides.map(({ Icon, ...g }) => <article key={g.title}><div><Icon size={23}/><span>{g.tag}</span></div><h3>{g.title}</h3><p>{g.text}</p><a href="#read">Read the guide <ArrowRight size={14}/></a></article>)}</div></div></section></main> }
