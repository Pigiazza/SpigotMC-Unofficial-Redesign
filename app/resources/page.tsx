import { ArrowDownToLine, ChevronDown, Clock3, Search, Star } from "lucide-react";
import { SimpleHeader } from "../components/SimpleHeader";

const categories=[["Spigot","76,481"],["Bungee - Spigot","8,744"],["Bungee - Proxy","3,401"],["Web","601"],["Universal","538"],["Standalone","126"],["Data Pack","55"]];
const plugins=[
 ["SimpleCrossChat","0.1.2","Chat","Chat globale tra server Minecraft tramite MQTT.","Ciran","224","0.0","7 min fa"],
 ["AutoFishing","2.1.0","Fun","Permette ai giocatori di pescare automaticamente.","WMGameLive","31,667","4.7","11 min fa"],
 ["PulseNode","5.0.21","Tools","Analizza lag, TPS e consumo CPU dei plugin.","olexstream","84","5.0","28 min fa"],
 ["zHomes","3.0.5","Utilities","Gestione moderna e potente delle home per Spigot e Paper.","yLeoft_","1,650","0.0","oggi"],
 ["CyberLevels","1.3.0","Tools","Sistema livelli con ricompense e supporto MySQL.","BitAspire","25,539","4.8","oggi"],
 ["TheGoldEconomy","1.13.0","Economy","Una semplice economia basata sull’oro.","confusedalex","6,337","4.2","oggi"]
];

export default function Resources(){return <main className="sub-page"><SimpleHeader active="resources"/><section className="resource-hero"><div><span className="section-kicker">RESOURCE MANAGER</span><h1>Trova il plugin<br/><em>giusto.</em></h1><p>Esplora le risorse pubblicate dalla community SpigotMC.</p></div><label><Search size={20}/><input placeholder="Cerca per nome, autore o categoria…"/></label></section><div className="resource-shell"><aside className="category-panel glass-card"><h2>Categorie</h2>{categories.map(c=><button key={c[0]}><span>{c[0]}</span><b>{c[1]}</b></button>)}</aside><section className="catalog"><header><div><h2>Ultimi aggiornamenti</h2><span>{plugins.length} risultati di esempio</span></div><button>Ultimo aggiornamento <ChevronDown size={15}/></button></header><div className="plugin-list">{plugins.map((p,i)=><article key={p[0]}><div className={`plugin-mark tone-${i%3}`}>{p[0].slice(0,2).toUpperCase()}</div><div className="plugin-copy"><div><h3>{p[0]}</h3><span>{p[1]}</span></div><p>{p[3]}</p><small>di <b>{p[4]}</b> · {p[2]}</small></div><div className="plugin-metrics"><span><Star size={14}/><b>{p[6]}</b></span><span><ArrowDownToLine size={14}/><b>{p[5]}</b></span><span><Clock3 size={14}/>{p[7]}</span></div></article>)}</div></section></div></main>}
