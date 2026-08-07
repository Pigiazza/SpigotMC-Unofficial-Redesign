import { ExternalLink, MessageCircle, Search, Users } from "lucide-react";
import { SimpleHeader } from "../components/SimpleHeader";

const members = [
  { name:"md_5", role:"Administrator · Developer", description:"Founder and core developer of SpigotMC.", image:"/members/md5.png", href:"https://www.spigotmc.org/members/md_5.1/", stats:"12.8K messages" },
  { name:"Luck", role:"Plugin developer", description:"Creator of LuckPerms and spark.", image:"/members/luck.png", href:"https://www.spigotmc.org/resources/authors/luck.10108/", stats:"2 popular resources" },
  { name:"RoboMWM", role:"Resource creator", description:"Developer and maintainer of GriefPrevention.", image:"/members/robomwm.jpg", href:"https://www.spigotmc.org/members/robomwm.19518/", stats:"16 resources" },
  { name:"Andre_601", role:"Supporter · Developer", description:"Plugin creator, wiki contributor and community member.", image:"/members/andre.png", href:"https://www.spigotmc.org/members/56829/", stats:"3K messages" },
];

export default function Members(){return <main className="sub-page"><SimpleHeader active="members"/><section className="members-hero"><div><span className="section-kicker">COMMUNITY DIRECTORY</span><h1>Members</h1><p>Some of the real developers and contributors behind the Spigot ecosystem.</p></div><div className="member-stats"><div><Users/><b>4.7M+</b><span>members</span></div><div><MessageCircle/><b>3.1M+</b><span>posts</span></div></div></section><section className="members-shell"><header><div><h2>Community profiles</h2><p>Public profiles shown with their real profile images.</p></div><button><Search size={17}/> Search members</button></header><div className="real-member-list">{members.map(member=><a href={member.href} className="real-member" key={member.name}><img src={member.image} alt={`${member.name} profile`}/><div><span>{member.role}</span><h3>{member.name}</h3><p>{member.description}</p></div><small>{member.stats}</small><ExternalLink/></a>)}</div></section></main>}
