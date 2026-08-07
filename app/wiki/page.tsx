import { ArrowRight, BookOpen, Boxes, Code2, Download, Network, Search, ServerCog, Wrench } from "lucide-react";
import { SimpleHeader } from "../components/SimpleHeader";

const guides=[
 {Icon:Download,title:"Installare Spigot",text:"BuildTools, requisiti Java e prima configurazione.",tag:"INIZIA QUI"},
 {Icon:Code2,title:"Creare un plugin",text:"Workspace, plugin.yml, eventi e comandi.",tag:"SVILUPPO"},
 {Icon:ServerCog,title:"Amministrare il server",text:"Configurazione, permessi, backup e sicurezza.",tag:"SERVER"},
 {Icon:Network,title:"BungeeCord",text:"Collega più server in un’unica rete.",tag:"PROXY"},
 {Icon:Boxes,title:"Spigot API",text:"Classi, eventi e funzionalità disponibili.",tag:"REFERENCE"},
 {Icon:Wrench,title:"Ottimizzazione",text:"TPS, profiler e buone pratiche prestazionali.",tag:"PERFORMANCE"}
];

export default function Wiki(){return <main className="sub-page"><SimpleHeader active="wiki"/><section className="wiki-hero"><BookOpen size={34}/><span className="section-kicker">DOCUMENTAZIONE</span><h1>Tutto quello che serve<br/>per costruire con <em>Spigot.</em></h1><label><Search size={20}/><input placeholder="Cerca nella documentazione…"/><kbd>⌘ K</kbd></label></section><section className="wiki-shell"><aside><span>CONTENUTI</span><a className="active" href="#start">Per iniziare</a><a href="#server">Server</a><a href="#plugins">Sviluppo plugin</a><a href="#api">Spigot API</a><a href="#proxy">BungeeCord</a><a href="#community">Community</a></aside><div><header><h2>Esplora la Wiki</h2><p>Guide ufficiali, reference tecniche e risposte curate dalla community.</p></header><div className="guide-grid">{guides.map(({Icon,...g})=><article key={g.title}><div><Icon size={23}/><span>{g.tag}</span></div><h3>{g.title}</h3><p>{g.text}</p><a href="#read">Leggi la guida <ArrowRight size={14}/></a></article>)}</div></div></section></main>}
