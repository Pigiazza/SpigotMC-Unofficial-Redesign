import { Award, Code2, MessageCircle, Search, ShieldCheck, Users } from "lucide-react";
import { SimpleHeader } from "../components/SimpleHeader";

const members=[
 ["md_5","Founder","Core developer e fondatore di SpigotMC.","M","staff"],
 ["Luck","Developer","Autore di spark e LuckPerms.","L","dev"],
 ["inventivetalent","Creator","147 risorse pubblicate.","I","creator"],
 ["RoboMWM","Creator","Plugin developer e contributor.","R","creator"],
 ["Janmm14","Community","Supporto tecnico e discussioni API.","J","member"],
 ["Andre_601","Community","Wiki editor e resource reviewer.","A","member"]
];

export default function Members(){return <main className="sub-page"><SimpleHeader active="members"/><section className="members-hero"><div><span className="section-kicker">PEOPLE OF SPIGOT</span><h1>Dietro ogni server<br/>ci sono <em>persone.</em></h1><p>Scopri sviluppatori, creator e membri che fanno crescere l’ecosistema.</p></div><div className="member-stats"><div><Users/><b>4.7M+</b><span>membri</span></div><div><Code2/><b>72K+</b><span>risorse</span></div><div><MessageCircle/><b>1.8M+</b><span>discussioni</span></div></div></section><section className="members-shell"><header><div><h2>Membri in evidenza</h2><p>Persone attive nella community e nello sviluppo.</p></div><button><Search size={17}/> Cerca membri</button></header><div className="member-grid">{members.map(m=><article key={m[0]}><div className={`member-avatar ${m[4]}`}>{m[3]}</div><span className={`member-role ${m[4]}`}>{m[1]}</span><h3>{m[0]}</h3><p>{m[2]}</p><footer>{m[4]==="staff"?<ShieldCheck size={15}/>:<Award size={15}/>} Profilo community</footer></article>)}</div></section></main>}
