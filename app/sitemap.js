export default function sitemap(){
 const base="https://wientransport.at";
 const paths=["/", "/en", "/tr", "/ru", "/ar", "/umzug-wien","/transport-wien", "/moebeltransport-wien", "/kleintransport-wien", "/moebelmontage-wien", "/firmenumzug-wien", "/entruempelung-wien", "/kurierdienst-wien", "/pakettransport-europa","/ueber-uns","/impressum","/datenschutz"];
 return paths.map((p)=>({url:`${base}${p}`,lastModified:new Date(),changeFrequency:"weekly",priority:p==="/" ? 1 : .85}));
}
