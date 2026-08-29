export default function sitemap(){
 const base="https://www.wientransport.at";
 const paths=["/", "/en", "/tr", "/ru", "/ar", "/umzug-wien","/transport-wien", "/moebeltransport-wien", "/kleintransport-wien", "/moebelmontage-wien", "/firmenumzug-wien", "/entruempelung-wien", "/kurierdienst-wien", "/pakettransport-europa","/ueber-uns","/impressum","/datenschutz","/agb"];
 return paths.map((p)=>({url:`${base}${p}`,lastModified:new Date(),changeFrequency:p==="/"?"weekly":"monthly",priority:p==="/" ? 1 : p.startsWith("/impressum")||p.startsWith("/datenschutz")||p.startsWith("/agb") ? .2 : .85}));
}
