import { ArrowDownToLine, ChevronDown, Clock3, Search, Star } from "lucide-react";
import { SimpleHeader } from "../components/SimpleHeader";

const categories = [["Spigot", "76,481"], ["Bungee - Spigot", "8,744"], ["Bungee - Proxy", "3,401"], ["Web", "601"], ["Universal", "538"], ["Standalone", "126"], ["Data Pack", "55"]];
const plugins = [
  ["SimpleCrossChat", "0.1.2", "Chat", "Global chat across Minecraft servers through MQTT.", "Ciran", "224", "0.0", "7 min ago"],
  ["AutoFishing", "2.1.0", "Fun", "Lets players fish automatically.", "WMGameLive", "31,667", "4.7", "11 min ago"],
  ["PulseNode", "5.0.21", "Tools", "Analyzes plugin lag, TPS, and CPU usage.", "olexstream", "84", "5.0", "28 min ago"],
  ["zHomes", "3.0.5", "Utilities", "Modern and powerful home management for Spigot and Paper.", "yLeoft_", "1,650", "0.0", "today"],
  ["CyberLevels", "1.3.0", "Tools", "A level system with rewards and MySQL support.", "BitAspire", "25,539", "4.8", "today"],
  ["TheGoldEconomy", "1.13.0", "Economy", "A simple economy based on gold.", "confusedalex", "6,337", "4.2", "today"]
];

export default function Resources() { return <main className="sub-page"><SimpleHeader active="resources"/><section className="resource-hero"><div><span className="section-kicker">RESOURCE MANAGER</span><h1>Find the right<br/><em>plugin.</em></h1><p>Explore resources published by the SpigotMC community.</p></div><label><Search size={20}/><input placeholder="Search by name, author, or category…"/></label></section><div className="resource-shell"><aside className="category-panel glass-card"><h2>Categories</h2>{categories.map(c => <button key={c[0]}><span>{c[0]}</span><b>{c[1]}</b></button>)}</aside><section className="catalog"><header><div><h2>Latest updates</h2><span>{plugins.length} sample results</span></div><button>Last updated <ChevronDown size={15}/></button></header><div className="plugin-list">{plugins.map((p, i) => <article key={p[0]}><div className={`plugin-mark tone-${i % 3}`}>{p[0].slice(0, 2).toUpperCase()}</div><div className="plugin-copy"><div><h3>{p[0]}</h3><span>{p[1]}</span></div><p>{p[3]}</p><small>by <b>{p[4]}</b> · {p[2]}</small></div><div className="plugin-metrics"><span><Star size={14}/><b>{p[6]}</b></span><span><ArrowDownToLine size={14}/><b>{p[5]}</b></span><span><Clock3 size={14}/>{p[7]}</span></div></article>)}</div></section></div></main> }
