// CMS API proxy — 把真实后端地址藏在 Worker 里，fun.json 只写 Worker 地址。
// fun.json 里把每个站的 api 改成 https://<你的Worker>.workers.dev/<code>
// playUrl 同理改成 https://<你的Worker>.workers.dev/<pcode>
// 部署：点 Deploy 按钮，或 npx wrangler deploy。
const ROUTES = {
 "c01": "https://www.jingpinx.com/api.php/provide/vod/",
 "c02": "https://api.souavzy.vip/api.php/provide/vod/?ac=list",
 "c03": "https://api.souavzy.vip/api.php/provide/vod/at/json",
 "c04": "https://apidanaizi.com/api.php/provide/vod",
 "c05": "https://caiji.semaozy.net/inc/apijson_vod.php",
 "c06": "https://shayuapi.com/api.php/provide/vod/",
 "c07": "https://91md.me/api.php/provide/vod/",
 "c08": "https://aosikazy.com/api.php/provide/vod/",
 "c09": "http://fhapi9.com/api.php/provide/vod/",
 "c10": "https://shayuapi.com/api.php/provide/vod/",
 "c11": "https://apilj.com/api.php/provide/vod/",
 "c12": "https://naixxzy.com/api.php/provide/vod/",
 "c13": "https://155api.com/api.php/provide/vod/",
 "c14": "https://jkunzyapi.com/api.php/provide/vod/",
 "c15": "https://lbapi9.com/api.php/provide/vod/",
 "c16": "https://api.ddapi.cc/api.php/provide/vod/",
 "c17": "https://apiyutu.com/api.php/provide/vod/",
 "c18": "https://slapibf.com/api.php/provide/vod/",
 "c19": "https://mgzyz1.com/api.php/provide/vod/",
 "c20": "https://api.huosuapi.cc/api.php/provide/vod/",
 "c21": "https://api.heiapi.cc/api.php/provide/vod/",
 "p01": "https://jiexi.souavzyw.top/m3u8/?url=",
 "p02": "https://yutujx.com/?url="
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,POST,OPTIONS", "Access-Control-Allow-Headers": "*" } });
    }
    const parts = url.pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
    if (parts.length === 0) {
      return new Response("cms-proxy ok. Usage: /<code>?ac=... (see ROUTES)", { status: 200, headers: { "content-type": "text/plain; charset=utf-8" } });
    }
    const code = parts[0];
    const target = ROUTES[code];
    if (!target) return new Response("Not found: " + code, { status: 404 });
    const t = new URL(target);
    const suffix = parts.slice(1).join("/");
    if (suffix) {
      const base = t.pathname.replace(/\/+$/, "");
      t.pathname = base + "/" + suffix;
    }
    for (const [k, v] of url.searchParams) t.searchParams.set(k, v);
    const headers = new Headers(request.headers);
    headers.delete("host");
    headers.delete("cf-connecting-ip");
    headers.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
    const init = { method: request.method, headers, redirect: "follow" };
    if (request.method !== "GET" && request.method !== "HEAD") { init.body = request.body; init.duplex = "half"; }
    const res = await fetch(t.toString(), init);
    const out = new Headers(res.headers);
    out.set("Access-Control-Allow-Origin", "*");
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: out });
  }
};
