# Grok Bot 说明书

seawind 制作 · [000666.BEST](https://000666.best)

海风修订的 Grok Bot 现场说明书。公开材料重编与勘误：底稿来自《Grok Bot 橙皮书》Kin 著 v260823（[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)）、awesome-grok-bot 社区清单，以及 SpaceXAI / Cursor 官方文档。价格、平台、安全边界以官方最新口径为准。

本地预览：

```bash
npm install
npm run dev
```

## 用 Vercel 部署

1. 把本仓库导入 [Vercel](https://vercel.com/new)（GitHub → Import）。
2. Framework Preset 保持 Vite / Other 即可。Nitro 会在 `npm run build` 时写出 Vercel 产物。
3. **Build Command：** `npm run build`
4. **Install Command：** `npm install`
5. 环境变量（Production + Preview）：

   | Key | Value |
   | --- | --- |
   | `VITE_AUTH_ENABLED` | `false` |

6. 不要填写 Output Directory。不要接数据库。Deploy。
7. 分享卡片（`og.jpg`）需要**自定义域名**。`*.vercel.app` 不会作为卡片图地址。把 `000666.best` 的子域绑到该项目即可。

自定义域名可指到 `000666.best` 的子域，或直接用 Vercel 分配的 `*.vercel.app`。

## 版权

- 本站编排、勘误、页面设计：© 2026 seawind / 000666.BEST
- 橙皮书原文：Kin，《Grok Bot 橙皮书》v260823，CC BY-NC-SA 4.0
- Grok / Grok Bot 为 xAI 产品名，本站是独立修订说明书，不是官方文档
