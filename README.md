# cms-proxy

Cloudflare Worker：把 TVBox/Forward 的 CMS 采集接口藏在 Worker 后面，`fun.json` 里只写 Worker 地址，不出现真实后端域名。

## 一键部署

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Rxsume/cms-proxy)

点上面按钮 → 登录 Cloudflare → 点 Deploy。部署完会得到一个地址，例如 `https://cms-proxy.xxx.workers.dev`。

## fun.json 里这样改

把每个 CMS 站的 `api` 改成 Worker 地址 + 对应编号；`playUrl` 同理：

| 站 | 原 api | 改成 |
|---|---|---|
| 精品资源站 | `https://www.jingpinx.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c01` |
| souav | `https://api.souavzy.vip/api.php/provide/vod/?ac=list` | `https://<你的Worker>.workers.dev/c02` |
| AV资源 | `https://api.souavzy.vip/api.php/provide/vod/at/json` | `https://<你的Worker>.workers.dev/c03` |
| 大奶子 | `https://apidanaizi.com/api.php/provide/vod` | `https://<你的Worker>.workers.dev/c04` |
| 色猫 | `https://caiji.semaozy.net/inc/apijson_vod.php` | `https://<你的Worker>.workers.dev/c05` |
| 沙鱼 | `https://shayuapi.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c06` |
| 麻豆视频 | `https://91md.me/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c07` |
| 奥斯卡 | `https://aosikazy.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c08` |
| 番号 | `http://fhapi9.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c09` |
| 鲨鱼 | `https://shayuapi.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c10` |
| 辣椒 | `https://apilj.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c11` |
| 奶香香 | `https://naixxzy.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c12` |
| 155资源站 | `https://155api.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c13` |
| 鸡坤 | `https://jkunzyapi.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c14` |
| 乐播 | `https://lbapi9.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c15` |
| 滴滴 | `https://api.ddapi.cc/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c16` |
| 玉兔 | `https://apiyutu.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c17` |
| 森林专场 | `https://slapibf.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c18` |
| 芒果专场 | `https://mgzyz1.com/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c19` |
| 火速 | `https://api.huosuapi.cc/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c20` |
| 嘿嘿场 | `https://api.heiapi.cc/api.php/provide/vod/` | `https://<你的Worker>.workers.dev/c21` |
| souav playUrl | `https://jiexi.souavzyw.top/m3u8/?url=` | `https://<你的Worker>.workers.dev/p01` |
| 玉兔 playUrl | `https://yutujx.com/?url=` | `https://<你的Worker>.workers.dev/p02` |
