// Sends every URL in the live sitemap to IndexNow (Bing, Yandex and others).
const HOST = "www.eventsatartistry.com";
const KEY = "85d6972cca5bb1eb9f40db19f07bd0ed";

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => {
  if (!r.ok) throw new Error(`Sitemap fetch failed: ${r.status}`);
  return r.text();
});
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
if (!urlList.length) throw new Error("No URLs found in sitemap");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
