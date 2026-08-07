import { Award, Code2, MessageCircle, Search, ShieldCheck, Users } from "lucide-react";
import { SimpleHeader } from "../components/SimpleHeader";

const members = [
  ["md_5", "Founder", "Core developer and founder of SpigotMC.", "M", "staff"],
  ["Luck", "Developer", "Creator of spark and LuckPerms.", "L", "dev"],
  ["inventivetalent", "Creator", "147 published resources.", "I", "creator"],
  ["RoboMWM", "Creator", "Plugin developer and contributor.", "R", "creator"],
  ["Janmm14", "Community", "Technical support and API discussions.", "J", "member"],
  ["Andre_601", "Community", "Wiki editor and resource reviewer.", "A", "member"]
];

export default function Members() { return <main className="sub-page"><SimpleHeader active="members"/><section className="members-hero"><div><span className="section-kicker">PEOPLE OF SPIGOT</span><h1>Behind every server<br/>there are <em>people.</em></h1><p>Meet the developers, creators, and members who help the ecosystem grow.</p></div><div className="member-stats"><div><Users/><b>4.7M+</b><span>members</span></div><div><Code2/><b>72K+</b><span>resources</span></div><div><MessageCircle/><b>1.8M+</b><span>discussions</span></div></div></section><section className="members-shell"><header><div><h2>Featured members</h2><p>People active in the community and development.</p></div><button><Search size={17}/> Search members</button></header><div className="member-grid">{members.map(m => <article key={m[0]}><div className={`member-avatar ${m[4]}`}>{m[3]}</div><span className={`member-role ${m[4]}`}>{m[1]}</span><h3>{m[0]}</h3><p>{m[2]}</p><footer>{m[4] === "staff" ? <ShieldCheck size={15}/> : <Award size={15}/>} Community profile</footer></article>)}</div></section></main> }
