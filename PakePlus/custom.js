window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="sw">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Doppler Life v20</title>
<style>
:root,body[data-theme="dark"]{--bg:#0a0e1a;--bg2:#050709;--pnl:#0f1420;--card:#141b2e;--brd:#1f2842;--txt:#e8ecf5;--txt2:#c4c8d4;--txt3:#6a7794;--acc:#4a6fa5;--acc2:#6a8fd5;--grb:linear-gradient(135deg,#4a6fa5,#a855f7);--hdr:linear-gradient(180deg,#141b2e,#0f1420);--tab:#141b2e;--tabf:#6a8fd5;--ttl:#fff}
body[data-theme="ivory"]{--bg:#f3eee2;--bg2:#e9e3d4;--pnl:#fdfaf3;--card:#f8f3e6;--brd:#d5ccb6;--txt:#2b2415;--txt2:#514830;--txt3:#7a6f52;--acc:#c9a961;--acc2:#b8945a;--grb:linear-gradient(135deg,#b8945a,#d4b478);--hdr:linear-gradient(180deg,#f8f3e6,#efe9d8);--tab:#efe9d8;--tabf:#8b6f3f;--ttl:#1a1610}
body[data-theme="gold"]{--bg:#120e05;--bg2:#080603;--pnl:#1a1408;--card:#241a0a;--brd:#3a2d10;--txt:#fdf4d8;--txt2:#e8d9a8;--txt3:#a08850;--acc:#d97706;--acc2:#fbbf24;--grb:linear-gradient(135deg,#b45309,#fbbf24);--hdr:linear-gradient(180deg,#241a0a,#1a1408);--tab:#241a0a;--tabf:#fbbf24;--ttl:#fff8e0}
body[data-theme="ocean"]{--bg:#04121e;--bg2:#020a12;--pnl:#071b2c;--card:#0a2538;--brd:#0f3a56;--txt:#dff3ff;--txt2:#a8d4ec;--txt3:#5a8ca8;--acc:#0ea5e9;--acc2:#38bdf8;--grb:linear-gradient(135deg,#0369a1,#22d3ee);--hdr:linear-gradient(180deg,#0a2538,#071b2c);--tab:#0a2538;--tabf:#38bdf8;--ttl:#eafaff}
body[data-theme="emerald"]{--bg:#04140d;--bg2:#020a06;--pnl:#071f14;--card:#0a2b1c;--brd:#0f4a30;--txt:#dfffe9;--txt2:#a8e8bc;--txt3:#5aa878;--acc:#10b981;--acc2:#34d399;--grb:linear-gradient(135deg,#047857,#22c55e);--hdr:linear-gradient(180deg,#0a2b1c,#071f14);--tab:#0a2b1c;--tabf:#34d399;--ttl:#eafff2}
body[data-theme="crimson"]{--bg:#1a0608;--bg2:#0d0203;--pnl:#260a0d;--card:#330d12;--brd:#5c1a24;--txt:#ffe4e4;--txt2:#f0b0b0;--txt3:#b87070;--acc:#dc2626;--acc2:#f87171;--grb:linear-gradient(135deg,#991b1b,#ef4444);--hdr:linear-gradient(180deg,#330d12,#260a0d);--tab:#330d12;--tabf:#f87171;--ttl:#fff0f0}
body[data-theme="royal"]{--bg:#0e0618;--bg2:#07020e;--pnl:#160b28;--card:#1e1035;--brd:#3a1f5f;--txt:#f0e4ff;--txt2:#c4a8e8;--txt3:#8860b0;--acc:#a855f7;--acc2:#c084fc;--grb:linear-gradient(135deg,#6d28d9,#a855f7);--hdr:linear-gradient(180deg,#1e1035,#160b28);--tab:#1e1035;--tabf:#c084fc;--ttl:#f8f0ff}
body[data-theme="sunset"]{--bg:#1a0e08;--bg2:#0d0703;--pnl:#28160c;--card:#381f10;--brd:#5f3620;--txt:#ffe8d8;--txt2:#f0c0a0;--txt3:#b08060;--acc:#f97316;--acc2:#fb923c;--grb:linear-gradient(135deg,#c2410c,#f97316);--hdr:linear-gradient(180deg,#381f10,#28160c);--tab:#381f10;--tabf:#fb923c;--ttl:#fff2e8}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;margin:0;padding:0}
html,body{height:100%;overflow:hidden}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:var(--bg2);color:var(--txt);display:flex;justify-content:center;align-items:center;user-select:none;-webkit-user-select:none;font-size:13px}
.app{width:100%;max-width:480px;height:100vh;max-height:900px;background:var(--bg);display:flex;flex-direction:column;position:relative;overflow:hidden}
.app.desktop{max-width:900px;max-height:100vh}
.hide{display:none!important}
::-webkit-scrollbar{width:5px;height:5px}
::-webkit-scrollbar-thumb{background:var(--brd);border-radius:3px}
.create{position:absolute;inset:0;z-index:100;background:var(--bg);padding:20px 16px;overflow:auto;display:flex;flex-direction:column}
.create h1{font-size:28px;font-weight:900;text-align:center;background:var(--grb);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:3px}
.sub{text-align:center;font-size:11px;color:var(--txt3);margin-bottom:16px}
.sec{display:flex;flex-direction:column;gap:6px;margin-bottom:12px}
.fg{margin-bottom:10px}
.fg label{display:block;font-size:9.5px;color:var(--txt3);text-transform:uppercase;font-weight:700;letter-spacing:.7px;margin-bottom:5px}
.fg input,.fg select{width:100%;padding:9px 12px;border-radius:10px;border:1.5px solid var(--brd);background:var(--pnl);color:var(--txt);font-size:12.5px;font-family:inherit;outline:none}
.row-flex{display:flex;gap:6px}
.row-flex input{flex:1}
.row-flex button{padding:9px 13px;border-radius:10px;border:1.5px solid var(--acc2);background:var(--pnl);color:var(--acc2);cursor:pointer;font-size:16px}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.grid2{display:grid;grid-template-columns:repeat(2,1fr);gap:6px}
.pick{padding:8px 4px;border-radius:9px;border:1.5px solid var(--brd);background:var(--pnl);color:var(--txt3);font-size:10.5px;font-family:inherit;font-weight:600;cursor:pointer}
.pick.active{background:var(--grb);border-color:transparent;color:#fff}
.btn{padding:10px 13px;border-radius:11px;border:1.5px solid var(--brd);background:var(--card);color:var(--txt);font-size:12px;font-weight:700;cursor:pointer;width:100%;font-family:inherit;display:flex;align-items:center;gap:8px;text-align:left}
.btn.primary{background:var(--grb);border-color:transparent;justify-content:center;font-size:13px;color:#fff}
.start{padding:14px;border-radius:13px;border:none;background:var(--grb);color:#fff;font-size:14px;font-weight:800;cursor:pointer;width:100%;margin-top:12px;font-family:inherit}
.theme-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:6px}
.theme-swatch{padding:11px 3px;border-radius:10px;border:2px solid var(--brd);cursor:pointer;font-size:9px;font-weight:800;color:#fff;font-family:inherit}
.theme-swatch.active{border-color:var(--acc2)}
.theme-swatch[data-t="dark"]{background:linear-gradient(135deg,#0a0e1a,#4a6fa5)}
.theme-swatch[data-t="ivory"]{background:linear-gradient(135deg,#f3eee2,#c9a961);color:#2b2415}
.theme-swatch[data-t="gold"]{background:linear-gradient(135deg,#1a1408,#fbbf24)}
.theme-swatch[data-t="ocean"]{background:linear-gradient(135deg,#04121e,#38bdf8)}
.theme-swatch[data-t="emerald"]{background:linear-gradient(135deg,#04140d,#34d399)}
.theme-swatch[data-t="crimson"]{background:linear-gradient(135deg,#1a0608,#f87171)}
.theme-swatch[data-t="royal"]{background:linear-gradient(135deg,#0e0618,#c084fc)}
.theme-swatch[data-t="sunset"]{background:linear-gradient(135deg,#1a0e08,#fb923c)}
.hd{padding:8px 10px;background:var(--hdr);border-bottom:1px solid var(--brd);flex-shrink:0}
.hd-top{display:flex;align-items:center;gap:6px;margin-bottom:5px}
.menu-btn,.icon-btn{width:32px;height:32px;border-radius:9px;border:1.5px solid var(--brd);background:var(--card);color:var(--txt);font-size:15px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-family:inherit;position:relative}
.avatar{width:36px;height:36px;border-radius:50%;background:var(--grb);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.name-block{flex:1;min-width:0}
.name-block .name{font-size:13px;font-weight:800;color:var(--ttl);display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.age-pill{font-size:9.5px;background:var(--acc);color:#fff;padding:2px 6px;border-radius:8px;font-weight:700}
.name-block .status{font-size:10.5px;color:var(--txt3);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.money{background:linear-gradient(135deg,#15803d,#22c55e);padding:5px 9px;border-radius:11px;font-weight:800;font-size:10.5px;color:#fff;flex-shrink:0}
.badge{position:absolute;top:-4px;right:-4px;background:#dc2626;color:#fff;font-size:9px;font-weight:900;min-width:16px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 3px;border:2px solid var(--bg)}
.time-bar{background:var(--bg2);border-radius:10px;padding:6px 10px;margin-bottom:5px;border:1.5px solid var(--brd);position:relative}
.date-row{display:flex;align-items:center;gap:6px;font-size:11px;font-weight:700}
.live-dot{width:7px;height:7px;border-radius:50%}
.live-dot.on{background:#22c55e}
.live-dot.off{background:#52525b}
.clock{font-size:9.5px;color:#22c55e;font-weight:700;margin-top:2px}
.speed-pill{position:absolute;top:6px;right:8px;font-size:8.5px;font-weight:800;padding:3px 6px;border-radius:6px;background:rgba(34,197,94,.15);color:#22c55e}
.speed-pill.paused{background:rgba(220,53,69,.15);color:#f87171}
.income-line{font-size:9.5px;color:#fbbf24;font-weight:700;margin-top:2px}
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
.stat{background:var(--pnl);border-radius:8px;padding:5px 7px;border:1px solid var(--brd)}
.stat .lbl{font-size:8.5px;color:var(--txt3);font-weight:700;display:flex;justify-content:space-between;align-items:center}
.stat .lbl span:last-child{color:var(--txt);font-size:10.5px}
.stat .bar{height:3px;background:var(--brd);border-radius:2px;margin-top:3px;overflow:hidden}
.stat .fill{height:100%;border-radius:2px}
.fill.g{background:linear-gradient(90deg,#16a34a,#22c55e)}
.fill.p{background:linear-gradient(90deg,#db2777,#ec4899)}
.fill.b{background:linear-gradient(90deg,#2563eb,#3b82f6)}
.fill.y{background:linear-gradient(90deg,#d97706,#fbbf24)}
.tabs{display:flex;background:var(--bg2);padding:3px;gap:2px;overflow-x:auto;flex-shrink:0}
.tabs-top{border-bottom:1px solid var(--brd)}
.tabs-bottom{border-top:1px solid var(--brd)}
.tab{flex:1;min-width:40px;padding:5px 2px;background:transparent;border:none;color:var(--txt3);font-size:8px;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:1px;font-family:inherit;border-radius:8px}
.tab .ic{font-size:14px}
.tab.active{background:var(--tab);color:var(--tabf)}
.log-wrap{flex:1;overflow:auto;padding:6px 9px;background:var(--bg2)}
.log{background:var(--pnl);border-left:3px solid var(--acc);padding:6px 9px;border-radius:8px;margin-bottom:4px;font-size:11px;color:var(--txt2);line-height:1.4}
.log.good{border-left-color:#22c55e}
.log.bad{border-left-color:#dc3545}
.log.gold{border-left-color:#fbbf24}
.log.legend{border-left-color:#ec4899}
.log .meta{font-size:8.5px;color:var(--txt3);font-weight:700;text-transform:uppercase;display:block;margin-bottom:2px}
.panel{padding:5px;display:none;grid-template-columns:repeat(3,1fr);gap:4px;background:var(--bg);border-top:1px solid var(--brd);max-height:36vh;overflow:auto;flex-shrink:0}
.panel.active{display:grid}
.act{padding:5px 3px;border-radius:8px;border:1px solid var(--brd);background:var(--card);color:var(--txt);font-size:8.5px;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;min-height:44px;justify-content:center;font-family:inherit;text-align:center}
.act .ic{font-size:14px}
.act.primary{grid-column:span 3;flex-direction:row;min-height:34px;font-size:11px;gap:8px;background:var(--grb);border-color:transparent;color:#fff}
.act.green{background:#0f2415;border-color:rgba(34,197,94,.4);color:#a8e8bc}
.act.gold{background:#2d1f0a;border-color:rgba(251,191,36,.4);color:#fcd34d}
.act.red{background:#2d0f11;border-color:rgba(220,53,69,.4);color:#f8a8a8}
.act.purple{background:#1f1035;border-color:rgba(168,85,247,.4);color:#d8b4fe}
.act.pink{background:#2d0f1e;border-color:rgba(236,72,153,.4);color:#f9a8d4}
.act.blue{background:#0a1e2d;border-color:rgba(56,189,248,.4);color:#bae6fd}
.speed-grid{grid-column:span 3;display:grid;grid-template-columns:repeat(6,1fr);gap:3px}
.speed-btn{padding:4px 2px;border-radius:7px;border:1px solid var(--brd);background:var(--card);color:var(--txt3);font-size:7.5px;font-weight:700;cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;gap:1px;line-height:1.1}
.speed-btn.on{border-color:#22c55e;color:#22c55e;background:rgba(34,197,94,.1)}
.time-row-2{grid-column:span 3;display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px}
.time-row-2 .act{min-height:34px;font-size:9px;padding:5px 3px}
.tab-actions{display:flex;justify-content:space-between;align-items:center;padding:5px 8px;background:var(--hdr);border-bottom:1px solid var(--brd);flex-shrink:0;gap:6px}
.tab-actions .tleft,.tab-actions .tright{display:flex;gap:4px;flex-wrap:wrap}
.tab-actions button{padding:5px 9px;border-radius:7px;border:1px solid var(--brd);background:var(--card);color:var(--txt);font-size:9.5px;font-weight:700;cursor:pointer;font-family:inherit}
.tab-actions .save{background:linear-gradient(135deg,#16a34a,#22c55e);color:#fff;border-color:transparent}
.modal{position:fixed;inset:0;background:rgba(0,0,0,.6);display:none;align-items:flex-end;justify-content:center;z-index:9999}
.modal.show{display:flex}
.modal-box{background:var(--bg);border:1.5px solid var(--brd);border-radius:18px 18px 0 0;max-width:480px;width:100%;max-height:92vh;display:flex;flex-direction:column}
.modal-hd{padding:8px 14px 6px;background:var(--hdr);border-bottom:1px solid var(--brd);position:sticky;top:0;z-index:5;flex-shrink:0}
.modal-drag{width:36px;height:4px;background:var(--brd);border-radius:2px;margin:0 auto 5px}
.modal-hd h2{font-size:14px;font-weight:800;color:var(--ttl);padding-right:120px;line-height:1.25;margin:0}
.modal-bar{display:flex;flex-wrap:wrap;gap:3px;margin-top:5px}
.modal-bar .mb{background:rgba(106,143,213,.15);border:1px solid rgba(106,143,213,.4);border-radius:5px;padding:2px 6px;font-size:9px;font-weight:700;color:var(--txt)}
.modal-bar .mb.cash{background:rgba(34,197,94,.15);border-color:rgba(34,197,94,.5);color:#22c55e}
.modal-bar .mb.inc{background:rgba(251,191,36,.15);border-color:rgba(251,191,36,.5);color:#fbbf24}
.modal .close{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:6px;border:none;background:rgba(220,53,69,.25);color:#f87171;font-size:12px;font-weight:800;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center}
.modal .back{position:absolute;top:8px;right:36px;width:24px;height:24px;border-radius:6px;border:none;background:rgba(106,143,213,.3);color:#a8c4e8;font-size:11px;font-weight:800;cursor:pointer;font-family:inherit;display:none;align-items:center;justify-content:center}
.modal .save-mb{position:absolute;top:8px;right:64px;width:24px;height:24px;border-radius:6px;border:none;background:rgba(34,197,94,.25);color:#22c55e;font-size:11px;font-weight:800;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center}
.modal .back.show{display:flex}
.modal-body{padding:8px 14px 16px;overflow-y:auto;flex:1;min-height:0}
.modal-body .subtitle{font-size:11px;color:var(--txt3);margin-bottom:8px;line-height:1.5}
.mbtn{width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--brd);background:var(--card);color:var(--txt);font-size:11px;font-weight:700;cursor:pointer;margin-top:4px;text-align:left;font-family:inherit;display:flex;justify-content:space-between;align-items:center;gap:6px;line-height:1.3}
.mbtn.primary{background:var(--grb);border-color:transparent;justify-content:center;text-align:center;color:#fff}
.mbtn.green{background:linear-gradient(135deg,#16a34a,#22c55e);border-color:transparent;justify-content:center;text-align:center;color:#fff}
.mbtn.gold{background:linear-gradient(135deg,#d97706,#fbbf24);border-color:transparent;justify-content:center;text-align:center;color:#1a1408}
.mbtn.red{background:linear-gradient(135deg,#b91c1c,#dc3545);border-color:transparent;justify-content:center;text-align:center;color:#fff}
.mbtn.purple{background:linear-gradient(135deg,#7c3aed,#a855f7);border-color:transparent;justify-content:center;text-align:center;color:#fff}
.mbtn.blue{background:linear-gradient(135deg,#0369a1,#38bdf8);border-color:transparent;justify-content:center;text-align:center;color:#fff}
.mbtn .price{font-size:10px;color:#fbbf24;font-weight:800;flex-shrink:0}
.mbtn .sub{font-size:9px;color:var(--txt3);font-weight:600;display:block;margin-top:1px}
.toast{position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--card);border:1.5px solid var(--acc2);padding:9px 16px;border-radius:11px;font-size:11.5px;font-weight:700;opacity:0;transition:opacity .25s;pointer-events:none;z-index:10000;max-width:90%;text-align:center}
.toast.show{opacity:1}
.rel{display:flex;gap:7px;padding:7px;border-radius:9px;background:var(--card);margin-bottom:4px;align-items:center;border:1px solid var(--brd);cursor:pointer}
.rel.unread{border-left:3px solid #dc2626}
.rel .ic-sm{width:30px;height:30px;border-radius:50%;background:var(--grb);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.rel .info{flex:1;min-width:0}
.rel .name{font-size:11.5px;font-weight:700;color:var(--ttl)}
.rel .meta{font-size:9.5px;color:var(--txt3);margin-top:1px}
.biz-card{background:var(--card);border:1px solid var(--brd);border-radius:10px;padding:9px;margin-bottom:5px}
.biz-card .head{display:flex;align-items:center;gap:7px;margin-bottom:5px}
.biz-card .ic-lg{font-size:20px}
.biz-card .title{font-size:11.5px;font-weight:800;color:var(--ttl);flex:1}
.biz-card .amount{font-size:11.5px;color:#22c55e;font-weight:800}
.biz-card .meta{font-size:9.5px;color:var(--txt3);margin-top:2px}
.biz-card .btns{display:flex;gap:3px;margin-top:6px;flex-wrap:wrap}
.biz-card .bbtn{padding:4px 7px;border-radius:6px;border:none;background:var(--grb);color:#fff;font-size:9px;font-weight:700;cursor:pointer;font-family:inherit;flex:1;min-width:50px}
.biz-card .bbtn.green{background:linear-gradient(135deg,#16a34a,#22c55e)}
.biz-card .bbtn.red{background:linear-gradient(135deg,#b91c1c,#dc3545)}
.biz-card .bbtn.gold{background:linear-gradient(135deg,#d97706,#fbbf24);color:#1a1408}
.biz-card .bbtn.purple{background:linear-gradient(135deg,#7c3aed,#a855f7)}
.sort-bar{display:flex;gap:3px;margin-bottom:6px;flex-wrap:wrap}
.sort-bar button{flex:1;min-width:60px;padding:6px 4px;border-radius:7px;border:1px solid var(--brd);background:var(--card);color:var(--txt3);font-size:9px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap}
.sort-bar button.active{background:var(--grb);color:#fff;border-color:transparent}
.income-total{background:linear-gradient(135deg,#15803d,#22c55e);padding:9px;border-radius:10px;text-align:center;margin-bottom:5px}
.income-total .lbl{font-size:9.5px;color:#fff;text-transform:uppercase;font-weight:800}
.income-total .amount{font-size:18px;color:#fff;font-weight:900;margin-top:2px}
.income-total .period{font-size:9.5px;color:#fff;opacity:.9;margin-top:2px}
.income-row{background:var(--card);border-left:3px solid #22c55e;padding:7px 9px;border-radius:8px;margin-bottom:4px;display:flex;justify-content:space-between;align-items:center;border:1px solid var(--brd)}
.income-row .name{font-size:10.5px;font-weight:700}
.income-row .val{font-size:11.5px;color:#22c55e;font-weight:800}
.pgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:5px;margin-bottom:6px}
.pstat{background:var(--card);border-radius:9px;padding:8px;text-align:center;border:1px solid var(--brd)}
.pstat .v{font-size:13px;font-weight:900;color:var(--ttl)}
.pstat .l{font-size:8.5px;color:var(--txt3);text-transform:uppercase;margin-top:2px;font-weight:700}
.pstat.green .v{color:#22c55e}
.pstat.gold .v{color:#fbbf24}
.pstat.pink .v{color:#ec4899}
.pstat.purple .v{color:#a855f7}
.pstat.red .v{color:#dc3545}
.pstat.blue .v{color:#38bdf8}
.league{background:var(--card);border-radius:10px;padding:8px;border:1px solid var(--brd);overflow:auto}
.league .row-head,.league .row-item{display:grid;grid-template-columns:22px 1fr 28px 28px 28px 28px 34px;gap:4px;font-size:9px;padding:4px 0;align-items:center;border-bottom:1px solid var(--brd);min-width:240px}
.league .row-head{font-weight:800;color:var(--acc2);border-bottom:1.5px solid var(--acc2)}
.info-box{background:var(--card);padding:9px;border-radius:9px;font-size:10px;line-height:1.55;color:var(--txt2);border:1px solid var(--brd);margin-bottom:5px}
.tier-row{display:flex;justify-content:space-between;align-items:center;padding:6px 8px;background:var(--card);border-radius:8px;margin-bottom:3px;border:1px solid var(--brd);font-size:10.5px;cursor:pointer}
.tier-row .cname{font-weight:700;color:var(--ttl)}
.tier-row .cecon{font-size:9px;color:var(--txt3);margin-top:1px}
.tier-row .cval{font-weight:800;color:#22c55e;font-size:10.5px;text-align:right}
.tier-row.mine{border-color:var(--acc2)}
.tier-head{font-size:10px;font-weight:800;text-transform:uppercase;color:var(--acc2);margin:8px 0 4px}
.rich-row{display:flex;justify-content:space-between;align-items:center;padding:7px 9px;background:var(--card);border-radius:8px;margin-bottom:4px;border:1px solid var(--brd);font-size:10.5px;cursor:pointer}
.rich-row.mine{border-color:var(--acc2)}
.rich-row .rname{font-weight:700;color:var(--ttl)}
.rich-row .rsub{font-size:9px;color:var(--txt3);margin-top:1px}
.rich-row .rval{font-weight:800;color:#fbbf24;font-size:10.5px}
.event-popup{position:fixed;top:76px;left:50%;transform:translateX(-50%);max-width:260px;width:82%;background:var(--card);border:1.5px solid var(--acc2);border-radius:9px;padding:7px;z-index:9998}
.event-popup .ep-title{font-size:10.5px;font-weight:800;color:var(--ttl);margin-bottom:2px}
.event-popup .ep-text{font-size:9.5px;color:var(--txt2);margin-bottom:4px;line-height:1.35}
.event-popup .ep-btns{display:flex;gap:3px;flex-wrap:wrap}
.event-popup .ep-btn{padding:4px 7px;border-radius:5px;border:none;background:var(--grb);color:#fff;font-size:9px;font-weight:700;cursor:pointer;font-family:inherit;flex:1;min-width:50px}
.event-popup .ep-btn.green{background:linear-gradient(135deg,#16a34a,#22c55e)}
.event-popup .ep-btn.red{background:linear-gradient(135deg,#b91c1c,#dc3545)}
.ok{background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.5);padding:7px;border-radius:8px;font-size:10px;color:#15803d;line-height:1.45;margin-bottom:5px}
.warn{background:rgba(220,53,69,.15);border:1px solid rgba(220,53,69,.5);padding:7px;border-radius:8px;font-size:10px;color:#f8a8a8;line-height:1.45;margin-bottom:5px}
</style>
</head>
<body data-theme="ivory">
<div class="app" id="appRoot">

<div class="create" id="createScreen">
<h1>Doppler Life</h1>
<div class="sub">v20 — Complete Edition</div>
<div class="sec">
<button class="btn primary" onclick="showTab('createTab')">🆕 Anza Maisha Mapya</button>
<button class="btn" onclick="showTab('loadTab')">📂 Pakia Mchezo</button>
<button class="btn" onclick="showTab('themeTab')">🎨 Rangi</button>
</div>
<div id="createTab" class="hide">
<div class="fg"><label>Jina</label><div class="row-flex"><input id="cName" placeholder="Juma Mkenye" maxlength="30"><button onclick="randName()">🎲</button></div></div>
<div class="fg"><label>Jinsia</label><div class="grid3" id="cGender">
<button class="pick active" data-val="male" onclick="pickBtn(this,'cGender')">👨 Mwanaume</button>
<button class="pick" data-val="female" onclick="pickBtn(this,'cGender')">👩 Mwanamke</button>
<button class="pick" data-val="other" onclick="pickBtn(this,'cGender')">🧑 Nyingine</button>
</div></div>
<div class="fg"><label>Dini</label><div class="grid3" id="cReligion"></div></div>
<div class="fg"><label>Nchi</label><select id="cCountry"></select></div>
<div class="fg"><label>Mwaka</label><select id="cYear"></select></div>
<button class="start" onclick="startNewLife()">🚀 ANZA SAFARI</button>
</div>
<div id="loadTab" class="hide">
<button class="btn" id="slot1" onclick="selectSlot(1)">💾 Slot 1 <span id="slot1Info" style="margin-left:auto;font-size:10px;color:var(--txt3)">Tupu</span></button>
<button class="btn" id="slot2" onclick="selectSlot(2)">💾 Slot 2 <span id="slot2Info" style="margin-left:auto;font-size:10px;color:var(--txt3)">Tupu</span></button>
<button class="btn" id="slot3" onclick="selectSlot(3)">💾 Slot 3 <span id="slot3Info" style="margin-left:auto;font-size:10px;color:var(--txt3)">Tupu</span></button>
<button class="btn" id="slotAuto" onclick="selectSlot('auto')">💾 Auto <span id="slotAutoInfo" style="margin-left:auto;font-size:10px;color:var(--txt3)">Tupu</span></button>
<button class="btn primary" onclick="loadSlot()">📂 Pakia</button>
<button class="btn" style="background:linear-gradient(135deg,#b91c1c,#dc3545);border-color:transparent;justify-content:center;color:#fff" onclick="clearAllSaves()">🗑️ Futa Saves</button>
</div>
<div id="themeTab" class="hide">
<div class="info-box"><b>🎨 Chagua Rangi</b></div>
<div class="theme-grid" id="themeGrid"></div>
</div>
</div>

<div id="gameScreen" class="hide" style="display:flex;flex-direction:column;height:100%">
<div class="hd">
<div class="hd-top">
<button class="menu-btn" onclick="openMenu()">☰</button>
<div class="avatar" id="avatar">👶</div>
<div class="name-block">
<div class="name"><span id="charName">Juma Mkenye</span><span class="age-pill" id="ageBadge">0</span></div>
<div class="status" id="charStatus">Mtoto</div>
</div>
<button class="icon-btn" onclick="cycleTheme()">🎨</button>
<button class="icon-btn" onclick="openNotifications()">🔔<span class="badge hide" id="notifBadge">0</span></button>
<button class="icon-btn" onclick="openCEO()">👔</button>
<div class="money" id="moneyBadge">💰0</div>
</div>
<div class="time-bar" id="timeBar">
<div class="date-row"><span class="live-dot off" id="liveDot"></span><span id="dateText">Jumatatu, 1 Januari 2020</span></div>
<div class="clock" id="clockText">00:00:00 • 0y 0m 0d</div>
<div class="speed-pill paused" id="speedText">PAUSE</div>
<div class="income-line">💰 <span id="incomeTick">Mapato: $0/y</span></div>
</div>
</div>
<div class="tab-actions">
<div class="tleft">
<button onclick="switchTab('pn-time')">⏱️ Muda</button>
<button onclick="switchTab('pn-life')">🏠 Maisha</button>
<button onclick="switchTab('pn-family')">👥 Familia</button>
<button onclick="switchTab('pn-career')">💼 Kazi</button>
</div>
<div class="tright"><button class="save" onclick="saveGame()">💾 Save</button></div>
</div>
<div class="tabs tabs-top">
<button class="tab active" data-panel="pn-time" onclick="tabClick(this)"><span class="ic">⏱️</span>Muda</button>
<button class="tab" data-panel="pn-life" onclick="tabClick(this)"><span class="ic">🏠</span>Maisha</button>
<button class="tab" data-panel="pn-family" onclick="tabClick(this)"><span class="ic">👥</span>Familia</button>
<button class="tab" data-panel="pn-career" onclick="tabClick(this)"><span class="ic">💼</span>Kazi</button>
<button class="tab" data-panel="pn-politics" onclick="tabClick(this)"><span class="ic">🗳️</span>Siasa</button>
<button class="tab" data-panel="pn-crime" onclick="tabClick(this)"><span class="ic">😈</span>Uhalifu</button>
</div>
<div class="hd" style="padding:5px 10px">
<div class="stats-row">
<div class="stat"><div class="lbl"><span>❤️</span><span id="hVal">100</span></div><div class="bar"><div class="fill g" id="hBar" style="width:100%"></div></div></div>
<div class="stat"><div class="lbl"><span>😊</span><span id="fVal">100</span></div><div class="bar"><div class="fill p" id="fBar" style="width:100%"></div></div></div>
<div class="stat"><div class="lbl"><span>🧠</span><span id="sVal">50</span></div><div class="bar"><div class="fill b" id="sBar" style="width:50%"></div></div></div>
<div class="stat"><div class="lbl"><span>⭐</span><span id="famVal">0</span></div><div class="bar"><div class="fill y" id="famBar" style="width:0%"></div></div></div>
</div>
</div>
<div class="log-wrap" id="logWrap"></div>
<div class="panel active" id="pn-time">
<button class="act primary" id="playBtn" onclick="togglePlay()"><span class="ic">▶️</span><span id="playText">ANZA KUCHEZA</span></button>
<div class="speed-grid">
<button class="speed-btn" id="sp-slow" onclick="setSpeed('slow')"><span class="ic">🐢</span>SLOW</button>
<button class="speed-btn" id="sp-normal" onclick="setSpeed('normal')"><span class="ic">🚶</span>NORM</button>
<button class="speed-btn" id="sp-fast" onclick="setSpeed('fast')"><span class="ic">🏃</span>FAST</button>
<button class="speed-btn" id="sp-veryfast" onclick="setSpeed('veryfast')"><span class="ic">🚀</span>V.FST</button>
<button class="speed-btn" id="sp-superfast" onclick="setSpeed('superfast')"><span class="ic">⚡</span>S.FST</button>
<button class="speed-btn" id="sp-ultra" onclick="setSpeed('ultra')"><span class="ic">🌌</span>ULTRA</button>
</div>
<div class="time-row-2">
<button class="act gold" onclick="openManualAge()"><span class="ic">📅</span> Muda</button>
<button class="act purple" onclick="openRewind()"><span class="ic">⏪</span> Rewind</button>
<button class="act green" onclick="saveGame()"><span class="ic">💾</span> Save</button>
</div>
</div>
<div class="panel" id="pn-life">
<button class="act" onclick="doStudy()"><span class="ic">📚</span> Soma</button>
<button class="act" onclick="doExercise()"><span class="ic">🏃</span> Mazoezi</button>
<button class="act" onclick="doMeditate()"><span class="ic">🧘</span> Tafakari</button>
<button class="act" onclick="doHobby()"><span class="ic">🎨</span> Hobi</button>
<button class="act" onclick="doSocialize()"><span class="ic">🎉</span> Marafiki</button>
<button class="act purple" onclick="doParty()"><span class="ic">🎉</span> Sherehe</button>
<button class="act gold" onclick="doVacation()"><span class="ic">✈️</span> Safari</button>
<button class="act pink" onclick="doDating()"><span class="ic">💘</span> Kuchumbiana</button>
<button class="act" onclick="doCharity()"><span class="ic">🤲</span> Msaada</button>
<button class="act green" onclick="doGym()"><span class="ic">🏋️</span> Gym</button>
<button class="act" onclick="doReadBook()"><span class="ic">📖</span> Kitabu</button>
<button class="act red" onclick="doSmoke()"><span class="ic">🚬</span> Sigara</button>
<button class="act purple" onclick="doDrink()"><span class="ic">🍺</span> Pombe</button>
<button class="act gold" onclick="doLottery()"><span class="ic">🎟️</span> Bahati</button>
<button class="act green" onclick="doTherapy()"><span class="ic">🛋️</span> Ushauri</button>
<button class="act" onclick="doPet()"><span class="ic">🐕</span> Mnyama</button>
<button class="act pink" onclick="doMusic()"><span class="ic">🎵</span> Muziki</button>
</div>
<div class="panel" id="pn-family">
<button class="act primary" onclick="openFamily()"><span class="ic">👥</span> Familia Yangu</button>
<button class="act primary" onclick="openRelationships()"><span class="ic">👫</span> Marafiki</button>
<button class="act pink" onclick="findLove()"><span class="ic">💕</span> Mapenzi</button>
<button class="act" onclick="makeFriend()"><span class="ic">🤝</span> Rafiki Mpya</button>
<button class="act green" onclick="openChildren()"><span class="ic">👶</span> Watoto</button>
<button class="act gold" onclick="propose()"><span class="ic">💍</span> Ndoa</button>
<button class="act purple" onclick="openFamilyTree()"><span class="ic">🌳</span> Ukoo</button>
</div>
<div class="panel" id="pn-career">
<button class="act primary" onclick="openCareer()"><span class="ic">💼</span> Kazi</button>
<button class="act gold" onclick="openCareerPaths()"><span class="ic">🌟</span> Njia Maalum</button>
<button class="act" onclick="doWork()"><span class="ic">⚒️</span> Fanya Kazi</button>
<button class="act" onclick="askRaise()"><span class="ic">📈</span> Nyongeza</button>
<button class="act red" onclick="quitJob()"><span class="ic">🚪</span> Acha</button>
<button class="act purple" onclick="openSideJobs()"><span class="ic">💼</span> Kazi za Ziada</button>
</div>
<div class="panel" id="pn-business">
<button class="act primary" onclick="openBusiness()"><span class="ic">🏢</span> Anzisha Biashara</button>
<button class="act green" onclick="openMyBusinesses()"><span class="ic">📊</span> Biashara Zangu</button>
<button class="act purple" onclick="openIntlBusiness()"><span class="ic">🌍</span> Kimataifa</button>
<button class="act gold" onclick="openBizCEO()"><span class="ic">👔</span> CEO Biashara</button>
<button class="act purple" onclick="openCEOList()"><span class="ic">🌐</span> MaCEO Duniani</button>
</div>
<div class="panel" id="pn-assets">
<button class="act" onclick="openShop()"><span class="ic">🛒</span> Duka</button>
<button class="act gold" onclick="openInvestments()"><span class="ic">📈</span> Hisa</button>
<button class="act green" onclick="openRealEstate()"><span class="ic">🏘️</span> Majengo</button>
<button class="act purple" onclick="openFootball()"><span class="ic">⚽</span> Timu</button>
<button class="act" onclick="openOil()"><span class="ic">🛢️</span> Mafuta & Gesi</button>
<button class="act green" onclick="openMining()"><span class="ic">⛏️</span> Madini</button>
<button class="act gold" onclick="openMyBank()"><span class="ic">🏦</span> Benki</button>
<button class="act red" onclick="openNuclear()"><span class="ic">☢️</span> Nyuklia</button>
<button class="act gold" onclick="openBillionaires()"><span class="ic">💎</span> Kopesha Matajiri</button>
<button class="act blue" onclick="openCountryProjects()"><span class="ic">🏗️</span> Miradi ya Nchi</button>
<button class="act purple" onclick="openAllLoans()"><span class="ic">📋</span> Mikopo Yote</button>
<button class="act purple" onclick="openCountryRanking()"><span class="ic">🌐</span> Nchi</button>
<button class="act gold" onclick="openRichList()"><span class="ic">👑</span> Matajiri</button>
<button class="act purple" onclick="openStockCEO()"><span class="ic">💹</span> CEO Hisa</button>
</div>
<div class="panel" id="pn-football">
<button class="act primary" onclick="openFootball()"><span class="ic">⚽</span> Nunua Hisa</button>
<button class="act gold" onclick="openMyClubs()"><span class="ic">🏆</span> Klabu Zangu</button>
<button class="act green" onclick="openLeague()"><span class="ic">📊</span> Matokeo</button>
<button class="act purple" onclick="openMyFootballInv()"><span class="ic">💼</span> Uwekezaji</button>
<button class="act" onclick="openLeagueHistory()"><span class="ic">📜</span> Historia</button>
<button class="act gold" onclick="openLeagueSponsor()"><span class="ic">💰</span> Dhamana</button>
</div>
<div class="panel" id="pn-casino">
<button class="act primary" onclick="playSlots()"><span class="ic">🎰</span> Slots</button>
<button class="act purple" onclick="playRoulette()"><span class="ic">🎡</span> Roulette</button>
<button class="act green" onclick="playBlackjack()"><span class="ic">🃏</span> Blackjack</button>
<button class="act gold" onclick="playBahati()"><span class="ic">🎲</span> Bahati</button>
<button class="act blue" onclick="playDice()"><span class="ic">🎲</span> Dice</button>
<button class="act" onclick="openSportsBet()"><span class="ic">🏈</span> Sport</button>
<button class="act red" onclick="openCasinoHistory()"><span class="ic">📜</span> Historia</button>
</div>
<div class="panel" id="pn-politics">
<button class="act primary" onclick="openPolitics()"><span class="ic">🗳️</span> Siasa</button>
<button class="act purple" onclick="openAllParties()"><span class="ic">🎗️</span> Vyama Vyote</button>
<button class="act gold" onclick="openCreateParty()"><span class="ic">🏛️</span> Anzisha Chama</button>
<button class="act green" onclick="openMyParty()"><span class="ic">📋</span> Chama Changu</button>
<button class="act blue" onclick="openJoinParty()"><span class="ic">🤝</span> Jiunge Chama</button>
<button class="act gold" onclick="openDonateParty()"><span class="ic">💰</span> Weka Fedha</button>
<button class="act pink" onclick="openLeadershipHistory()"><span class="ic">📜</span> Historia Yangu</button>
<button class="act red" onclick="runOffice()"><span class="ic">📢</span> Gombena Urais</button>
<button class="act purple" onclick="openPresidentialDashboard()"><span class="ic">👑</span> Urais</button>
</div>
<div class="panel" id="pn-crime">
<button class="act primary" onclick="openCrime()"><span class="ic">😈</span> Uhalifu</button>
<button class="act red" onclick="openHeist()"><span class="ic">💰</span> Benki</button>
<button class="act purple" onclick="openMafia()"><span class="ic">🕴️</span> Mafia</button>
<button class="act" onclick="openGang()"><span class="ic">🔫</span> Gang</button>
<button class="act green" onclick="openWeapons()"><span class="ic">🔫</span> Silaha</button>
<button class="act purple" onclick="openIllegalBiz()"><span class="ic">💊</span> Haramu</button>
<button class="act pink" onclick="openCourt()"><span class="ic">⚖️</span> Kesi</button>
</div>
<div class="panel" id="pn-income">
<button class="act primary green" onclick="openIncomeDash()"><span class="ic">💰</span> Mapato</button>
<div class="income-total"><div class="lbl">Jumla</div><div class="amount" id="incTotalVal">$0</div><div class="period">kwa mwaka</div></div>
<button class="act gold" onclick="collectIncome()"><span class="ic">💵</span> Kusanya</button>
<button class="act purple" onclick="openCEO()"><span class="ic">👔</span> CEO Mkuu</button>
</div>
<div class="panel" id="pn-more">
<button class="act primary" onclick="openStats()"><span class="ic">📊</span> Takwimu</button>
<button class="act gold" onclick="openAchievements()"><span class="ic">🏆</span> Mafanikio</button>
<button class="act green" onclick="openLegacy()"><span class="ic">👨‍👩‍👧</span> Legacy</button>
<button class="act purple" onclick="openRewind()"><span class="ic">⏪</span> Rewind</button>
<button class="act blue" onclick="openCEOHistory()"><span class="ic">📜</span> Historia MaCEO</button>
<button class="act" onclick="saveGame()"><span class="ic">💾</span> Hifadhi</button>
<button class="act red" onclick="openMenu()"><span class="ic">☰</span> Menyu</button>
</div>
<div class="tabs tabs-bottom">
<button class="tab" data-panel="pn-business" onclick="tabClick(this)"><span class="ic">🏢</span>Biashara</button>
<button class="tab" data-panel="pn-assets" onclick="tabClick(this)"><span class="ic">💰</span>Mali</button>
<button class="tab" data-panel="pn-football" onclick="tabClick(this)"><span class="ic">⚽</span>Mpira</button>
<button class="tab" data-panel="pn-casino" onclick="tabClick(this)"><span class="ic">🎰</span>Casino</button>
<button class="tab" data-panel="pn-income" onclick="tabClick(this)"><span class="ic">💵</span>Mapato</button>
<button class="tab" data-panel="pn-more" onclick="tabClick(this)"><span class="ic">⚙️</span>Zaidi</button>
</div>
</div>

<div class="modal" id="modal"><div class="modal-box"><div class="modal-hd"><div class="modal-drag"></div><h2 id="modalTitle"></h2><div class="modal-bar" id="modalBar"></div><button class="save-mb" onclick="saveGame()">💾</button><button class="back" id="modalBack" onclick="modalBack()">◀</button><button class="close" onclick="closeAllModals()">✕</button></div><div class="modal-body" id="modalBody"><div class="subtitle" id="modalText"></div><div id="modalButtons"></div></div></div></div>
<div class="toast" id="toast"></div>
<div id="eventContainer"></div>

<script>
"use strict";

var state = {};
var currentSlot = 1;
var currentSpeed = "pause";
var lastLogLen = -1;
var lastFastRender = 0;
var lastSlowRender = 0;
var lastSaveTime = 0;
var lastBankGen = 0;
var lastFootball = 0;
var lastLoanChance = 0;
var lastCEOCheck = 0;
var lastStockCEO = 0;
var lastBizCEO = 0;
var lastFootballSeason = "";
var lastBillionaireEvent = 0;
var cachedIncome = 0;
var cachedIncomeTime = 0;
var modalStack = [];
var modalScrollTops = {};
var currentTheme = localStorage.getItem("dopplerTheme") || "ivory";
var countryTickIdx = 0;

var SPEEDS = {pause:0, slow:24, normal:168, fast:720, veryfast:4380, superfast:8760, ultra:43800};
var SPEED_LABEL = {pause:"PAUSE", slow:"SLOW", normal:"NORM", fast:"FAST", veryfast:"V.FST", superfast:"S.FST", ultra:"ULTRA"};
var THEMES = ["dark","ivory","gold","ocean","emerald","crimson","royal","sunset"];

function $(id){ return document.getElementById(id); }
function clamp(v,a,b){ a=a||0; b=b||100; return Math.max(a,Math.min(b,v)); }
function rnd(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function chance(p){ return Math.random()<p; }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function fmt(n){
  if(!n || isNaN(n)) n = 0;
  n = Math.floor(n);
  if(n >= 1e18) return "$" + (n/1e18).toFixed(2) + "Qi";
  if(n >= 1e15) return "$" + (n/1e15).toFixed(2) + "Q";
  if(n >= 1e12) return "$" + (n/1e12).toFixed(2) + "T";
  if(n >= 1e9) return "$" + (n/1e9).toFixed(2) + "B";
  if(n >= 1e6) return "$" + (n/1e6).toFixed(2) + "M";
  if(n >= 1e3) return "$" + (n/1e3).toFixed(1) + "K";
  return "$" + n;
}
function closeBtn(l){ return {label:l||"✕ Funga", cls:"red", close:true}; }
function setTxt(id,val){ var el=$(id); if(el && el._t !== val){ el.textContent = val; el._t = val; } }
function setW(id,val){ var el=$(id); if(el && el._w !== val){ el.style.width = val; el._w = val; } }
function setCls(id,val){ var el=$(id); if(el && el._c !== val){ el.className = val; el._c = val; } }

var MALE = ["Amani","Baraka","Juma","Kito","Musa","Rashid","Salim","Tumaini","Zawadi","Emmanuel","Joseph","Samuel","David","Ibrahim","Hassan","Ali","Frank","Brian","Kevin","Michael","John","Peter","Daniel","Omar","Yusuf","Karim","Tariq","Rajabu","Neema"];
var FEMALE = ["Amina","Asha","Bahati","Furaha","Halima","Imani","Jamila","Mariam","Nia","Rehema","Zainabu","Grace","Mary","Sarah","Hawa","Fatuma","Elizabeth","Joyce","Linda","Rose","Sophia","Aisha","Layla","Zara","Maya"];
var MIDDLE = ["Juma","Mkenye","Moses","Peter","Mohamed","Said","John","Bakari","Emmanuel","Daniel","Rashid","Hamisi","Rajabu","Athumani"];
var LAST = ["Mkenye","Juma","Mwakasege","Kimani","Ochieng","Mwangi","Njoroge","Hassan","Mwinyi","Kikwete","Magufuli","Otieno","Wanjiku","Adeyemi","Okonkwo","Mohamed","Ahmed","Abdi","Nyerere","Mkapa"];
var CEO_FIRST = ["Anna","Grace","Robert","David","Sarah","Michael","Elizabeth","James","Victoria","Charles","Fatuma","Aisha","Christine","Paul","Peter"];
var CEO_LAST = ["Mwangi","Kimani","Ochieng","Mushi","Ndungu","Mkapa","Nyerere","Msuya","Hassan","Mbeki"];

function rnGender(g){ if(g === "male") return pick(MALE) + " " + pick(MIDDLE) + " " + pick(LAST); if(g === "female") return pick(FEMALE) + " " + pick(MIDDLE) + " " + pick(LAST); return pick(MALE.concat(FEMALE)) + " " + pick(MIDDLE) + " " + pick(LAST); }
function rn(g){ return g === "female" ? pick(FEMALE) + " " + pick(LAST) : pick(MALE) + " " + pick(LAST); }
function rnCEO(){ return pick(CEO_FIRST) + " " + pick(CEO_LAST); }
var RELIGIONS = ["Ukristo","Uislamu","Uhindu","Ubuddha","Uyuda","Sikh","Bila dini"];

var COUNTRIES = [
["US","🇺🇸 Marekani",5,25000,330,22,3.2],["CN","🇨🇳 Uchina",5,18000,1400,42,2.1],["JP","🇯🇵 Japani",5,4200,125,18,0.5],["DE","🇩🇪 Ujerumani",5,4100,83,20,2.8],["IN","🇮🇳 India",4,3500,1400,40,5.6],["GB","🇬🇧 Uingereza",5,3200,67,22,4.0],["FR","🇫🇷 Ufaransa",5,3000,67,24,3.5],["IT","🇮🇹 Italia",4,2200,59,26,4.2],["CA","🇨🇦 Canada",5,2100,38,18,3.0],["BR","🇧🇷 Brazil",3,2000,215,38,5.8],["RU","🇷🇺 Urusi",3,1800,145,45,7.5],["KR","🇰🇷 Korea",5,1700,52,20,2.0],["AU","🇦🇺 Australia",5,1700,26,17,3.5],["ES","🇪🇸 Hispania",4,1600,47,24,3.4],["MX","🇲🇽 Mexico",3,1400,128,45,4.8],["ID","🇮🇩 Indonesia",3,1300,275,48,3.5],["NL","🇳🇱 Uholanzi",5,1000,17,18,3.0],["SA","🇸🇦 Saudi",4,1100,35,32,2.3],["TR","🇹🇷 Turkey",3,900,85,42,15.0],["CH","🇨🇭 Uswisi",5,900,8.6,15,1.5],["SE","🇸🇪 Uswidi",5,600,10,15,2.1],["BE","🇧🇪 Ubelgiji",5,600,11,20,3.2],["AR","🇦🇷 Argentina",3,600,45,42,80.0],["NO","🇳🇴 Norway",5,550,5.4,12,2.8],["AE","🇦🇪 UAE",4,500,10,25,2.5],["IL","🇮🇱 Israel",5,500,9,22,3.5],["NG","🇳🇬 Nigeria",2,450,220,62,22.0],["EG","🇪🇬 Misri",2,400,100,60,12.5],["ZA","🇿🇦 Afrika Kusini",3,400,60,48,6.8],["SG","🇸🇬 Singapore",5,400,5.7,12,2.0],["TH","🇹🇭 Thailand",3,500,70,42,2.5],["MY","🇲🇾 Malaysia",4,400,32,42,3.0],["PH","🇵🇭 Philippines",2,400,110,55,4.5],["VN","🇻🇳 Vietnam",3,400,98,42,3.2],["PK","🇵🇰 Pakistan",2,350,230,62,10.5],["IR","🇮🇷 Iran",2,400,85,58,40.0],["CO","🇨🇴 Colombia",3,350,52,48,8.5],["CL","🇨🇱 Chile",4,300,19,22,4.5],["FI","🇫🇮 Finland",5,300,5.5,12,2.1],["DK","🇩🇰 Denmark",5,400,5.9,10,2.5],["AT","🇦🇹 Austria",5,500,9,18,3.2],["PT","🇵🇹 Ureno",4,250,10,22,3.5],["GR","🇬🇷 Ugiriki",4,220,10.5,32,4.0],["UA","🇺🇦 Ukraine",2,200,40,55,12.0],["KE","🇰🇪 Kenya",2,110,54,58,6.1],["ET","🇪🇹 Ethiopia",1,150,120,62,20.5],["TZ","🇹🇿 Tanzania",1,80,60,38,4.5],["UG","🇺🇬 Uganda",1,50,45,55,5.5],["GH","🇬🇭 Ghana",2,75,33,42,22.0],["CI","🇨🇮 Ivory Coast",2,70,27,52,4.5],["CM","🇨🇲 Cameroon",2,45,27,58,3.0],["SN","🇸🇳 Senegal",2,30,17,45,3.5],["ZM","🇿🇲 Zambia",1,30,19,55,12.5],["ZW","🇿🇼 Zimbabwe",1,25,15,62,25.0],["MZ","🇲🇿 Msumbiji",1,20,32,60,8.5],["AO","🇦🇴 Angola",2,90,34,60,22.0],["MA","🇲🇦 Morocco",3,140,37,45,3.5],["DZ","🇩🇿 Algeria",3,220,45,48,6.5],["TN","🇹🇳 Tunisia",2,50,12,52,8.5],["RW","🇷🇼 Rwanda",2,13,14,48,8.5],["BI","🇧🇮 Burundi",1,3,12,78,15.5],["MW","🇲🇼 Malawi",1,13,20,62,22.0],["BW","🇧🇼 Botswana",3,20,2.4,32,8.5],["NA","🇳🇦 Namibia",3,13,2.6,48,6.5],["PE","🇵🇪 Peru",3,250,34,55,4.5],["EC","🇪🇨 Ecuador",3,120,18,48,3.5],["BO","🇧🇴 Bolivia",2,45,12,62,4.0],["UY","🇺🇾 Uruguay",4,80,3.5,18,8.5],["NZ","🇳🇿 New Zealand",5,250,5.2,12,4.5],["KH","🇰🇭 Cambodia",2,30,17,62,3.5],["MM","🇲🇲 Myanmar",2,60,55,68,20.0],["LK","🇱🇰 Sri Lanka",2,80,22,55,25.0],["NP","🇳🇵 Nepal",1,40,30,62,6.5],["IQ","🇮🇶 Iraq",3,250,42,58,5.5],["QA","🇶🇦 Qatar",5,240,3,15,2.5],["KW","🇰🇼 Kuwait",4,180,4.5,32,2.8],["KZ","🇰🇿 Kazakhstan",3,220,19,55,8.5],["UZ","🇺🇿 Uzbekistan",2,90,35,62,12.5]
];
var AFRICAN_CODES = ["TZ","KE","UG","RW","BI","ET","EG","NG","GH","ZA","CI","CM","SN","ZM","ZW","MZ","AO","MA","DZ","TN","LY","SD","CD","CG","GA","MW","BW","NA"];
var countryMap = {};
COUNTRIES.forEach(function(c){ countryMap[c[0]] = c; });

function countryLabel(c){ var x = countryMap[c]; return x ? x[1] : c; }
function countryFlag(c){ var x = countryMap[c]; return x ? x[1].split(" ")[0] : "🏳️"; }
function countryEcon(c){ var x = countryMap[c]; return x ? x[2] : 1; }

function initLive(code){
  var c = countryMap[code]; if(!c) return null;
  if(!state.countryLive) state.countryLive = {};
  if(!state.countryLive[code]){
    state.countryLive[code] = {gdp: c[3], pop: c[4], corr: c[5], infl: c[6], econ: c[2], gdpDelta: 0, basePopGrowth: 0.02, approval: 50, policies: {tax:20, invest:20, antiCorr:20}, lastElection: 0};
  }
  return state.countryLive[code];
}
function liveOf(code){ return initLive(code) || {gdp:10, pop:1, corr:50, infl:5, econ:1, gdpDelta:0, approval:50, policies:{tax:20,invest:20,antiCorr:20}, lastElection:0}; }

var MONTHS = ["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"];
var DAYS = ["Jumapili","Jumatatu","Jumanne","Jumatano","Alhamisi","Ijumaa","Jumamosi"];

// Business
var BIZ = [
{name:"Duka la Vyakula",icon:"🛒",cost:5e4,income:15e3},{name:"Duka la Nguo",icon:"👕",cost:1e5,income:28e3},{name:"Mgahawa",icon:"🍽️",cost:2e5,income:6e4},{name:"Saloni",icon:"💇",cost:8e4,income:22e3},{name:"Gereji",icon:"🔧",cost:15e4,income:4e4},{name:"Duka la Dawa",icon:"💊",cost:3e5,income:8e4},{name:"Hoteli",icon:"🏨",cost:3e6,income:9e5},{name:"Kampuni Tech",icon:"💻",cost:2e6,income:8e5},{name:"Kituo cha TV",icon:"📺",cost:1e7,income:3e6},{name:"Hospitali",icon:"🏥",cost:3e7,income:8e6},{name:"Shule",icon:"🏫",cost:2e7,income:5e6},{name:"Shirika la Ndege",icon:"✈️",cost:1e8,income:3e7},{name:"Kampuni ya Simu",icon:"📱",cost:2e8,income:6e7},{name:"Kampuni ya Mafuta",icon:"🛢️",cost:5e8,income:15e7},{name:"Benki",icon:"🏦",cost:1e9,income:3e8}
];
// Expanded International
var INTL = [
{name:"Import/Export",icon:"📦",cost:1e7,income:3e6},{name:"Kampuni ya Meli",icon:"🚢",cost:1e8,income:3e7},{name:"Kiwanda cha Magari",icon:"🏭",cost:1e9,income:3e8},{name:"Shirika la Ndege",icon:"✈️",cost:5e9,income:15e8},{name:"Tech Valley",icon:"🖥️",cost:2e10,income:8e9},{name:"Mafuta Kimataifa",icon:"⛽",cost:1e11,income:3e10},{name:"Space Tech",icon:"🛰️",cost:5e11,income:15e10},{name:"Gold Mining Intl",icon:"⛏️",cost:2e10,income:5e9},{name:"Pharmaceuticals",icon:"💊",cost:3e9,income:9e8},{name:"Kiwanda cha Chakula",icon:"🍔",cost:5e8,income:12e7},{name:"Hotel Chain",icon:"🏨",cost:2e9,income:6e8},{name:"Telecom Intl",icon:"📡",cost:5e10,income:15e9},{name:"Banking Intl",icon:"🏦",cost:1e11,income:3e10},{name:"Insurance Intl",icon:"🛡️",cost:3e10,income:9e9},{name:"Media Intl",icon:"📺",cost:8e9,income:25e8},{name:"Automotive Intl",icon:"🚗",cost:1e11,income:3e10},{name:"Airline Intl",icon:"🛫",cost:2e11,income:6e10},{name:"Shipping Intl",icon:"⚓",cost:5e10,income:15e9}
];
// Oil + Gas
var OIL = [
{name:"Kisima cha Mafuta",icon:"🛢️",cost:5e7,income:15e6},{name:"Kisima cha Gesi",icon:"🔥",cost:8e7,income:22e6},{name:"Kisima cha Mafuta Bahari",icon:"🌊",cost:5e8,income:15e7},{name:"Kisima cha Gesi Bahari",icon:"⚡",cost:8e8,income:22e7},{name:"Kisima cha Saudi",icon:"🛢️",cost:5e9,income:8e8},{name:"Gesi ya Qatar",icon:"💨",cost:8e9,income:15e8}
];
var GAS = [
{name:"Kisima cha Gesi",icon:"🔥",cost:8e7,income:22e6},{name:"Kisima cha Gesi Asili",icon:"💨",cost:3e8,income:8e7},{name:"LNG Terminal",icon:"🚢",cost:2e9,income:5e8},{name:"Gesi ya Shale",icon:"⚡",cost:5e9,income:15e8}
];
var MINING = [
{name:"Mgodi wa Dhahabu",icon:"🥇",cost:1e8,income:3e7},{name:"Mgodi wa Almasi",icon:"💎",cost:5e8,income:15e7},{name:"Mgodi wa Uranium",icon:"☢️",cost:1e9,income:3e8},{name:"Mgodi wa Tanzanite",icon:"💜",cost:6e7,income:2e7},{name:"Mgodi wa Copper",icon:"🟠",cost:2e8,income:5e7},{name:"Mgodi wa Lithium",icon:"🔋",cost:1e9,income:25e7}
];
var REALTY = [
{name:"Fleti Ndogo",icon:"🏢",price:5e4,rent:8e3},{name:"Nyumba",icon:"🏠",price:5e5,rent:6e4},{name:"Villa",icon:"🏰",price:2e7,rent:15e5},{name:"Jengo la Ofisi",icon:"🏢",price:2e8,rent:2e7},{name:"Skyscraper",icon:"🌆",price:2e9,rent:2e8},{name:"Kisiwa",icon:"🏝️",price:1e10,rent:1e8}
];
var SHOP = [
{name:"Simu",icon:"📱",cost:5e3},{name:"Laptop",icon:"💻",cost:2e4},{name:"TV",icon:"📺",cost:3e4},{name:"Gari",icon:"🚗",cost:5e5},{name:"Gari la Mbio",icon:"🏎️",cost:5e6},{name:"Nyumba",icon:"🏠",cost:5e6},{name:"Ndege",icon:"✈️",cost:5e7},{name:"Yacht",icon:"🛥️",cost:3e7},{name:"Rolex",icon:"⌚",cost:1e7},{name:"Almasi",icon:"💎",cost:1e7},{name:"Kisiwa",icon:"🏝️",cost:5e8},{name:"Mbwa",icon:"🐕",cost:5e4},{name:"Mwanasheria",icon:"👨‍⚖️",cost:5e6},{name:"Daktari",icon:"👨‍⚕️",cost:1e7},{name:"Mlinzi",icon:"🛡️",cost:8e6},{name:"Mshauri",icon:"📈",cost:1e7}
];
var NUCLEAR = [
{name:"Nuclear Ndogo",icon:"☢️",cost:1e10,income:3e9,power:500},{name:"Nuclear Kati",icon:"☢️",cost:5e10,income:15e9,power:1000},{name:"Nuclear Kubwa",icon:"☢️",cost:2e11,income:6e10,power:2000},{name:"Fusion Reactor",icon:"⚛️",cost:1e12,income:3e11,power:5000}
];
var COUNTRY_PROJECTS = [
{name:"Barabara Kuu", icon:"🛣️", cost:1e10, gdpBoost:15, income:1e9, years:15},{name:"Hospitali Kubwa", icon:"🏥", cost:2e10, gdpBoost:25, income:2e9, years:20},{name:"Chuo Kikuu", icon:"🎓", cost:3e10, gdpBoost:40, income:3e9, years:25},{name:"Bandari Kubwa", icon:"🚢", cost:1e11, gdpBoost:120, income:1e10, years:30},{name:"Reli ya Umeme", icon:"🚄", cost:2e11, gdpBoost:250, income:2e10, years:30},{name:"Kiwanda cha Nguvu", icon:"⚡", cost:5e10, gdpBoost:60, income:5e9, years:25},{name:"Kituo cha Mawasiliano", icon:"📡", cost:2e10, gdpBoost:30, income:2e9, years:15},{name:"Uwanja wa Ndege", icon:"✈️", cost:8e10, gdpBoost:90, income:8e9, years:25}
];

var STOCKS = [
{name:"Apple",icon:"🍎",price:200,growth:.15,dividend:.02,totalShares:1.5e10},{name:"Tesla",icon:"🚗",price:250,growth:.20,dividend:0,totalShares:3e9},{name:"Google",icon:"🔍",price:150,growth:.12,dividend:.01,totalShares:1.2e10},{name:"Amazon",icon:"📦",price:180,growth:.13,dividend:0,totalShares:1e10},{name:"Microsoft",icon:"💻",price:400,growth:.10,dividend:.02,totalShares:7e9},{name:"Nvidia",icon:"🎮",price:800,growth:.25,dividend:.01,totalShares:2.5e9},{name:"Meta",icon:"📘",price:350,growth:.11,dividend:.01,totalShares:2.6e9},{name:"Netflix",icon:"🎬",price:500,growth:.14,dividend:0,totalShares:4e8},{name:"Vodacom",icon:"📱",price:80,growth:.08,dividend:.03,totalShares:2e9},{name:"Safaricom",icon:"📡",price:60,growth:.07,dividend:.04,totalShares:4e10},{name:"Samsung",icon:"📱",price:120,growth:.10,dividend:.02,totalShares:6e9},{name:"Intel",icon:"🔧",price:50,growth:.09,dividend:.03,totalShares:4e9},{name:"AMD",icon:"🔴",price:150,growth:.18,dividend:0,totalShares:1.6e9},{name:"SpaceX",icon:"🚀",price:500,growth:.30,dividend:0,totalShares:1.5e9},{name:"OpenAI",icon:"🤖",price:400,growth:.28,dividend:0,totalShares:8e8},{name:"TikTok",icon:"🎵",price:180,growth:.22,dividend:0,totalShares:2e9},{name:"Uber",icon:"🚕",price:70,growth:.15,dividend:0,totalShares:2e9},{name:"Airbnb",icon:"🏠",price:160,growth:.14,dividend:0,totalShares:6e8},{name:"Starlink",icon:"🛰️",price:250,growth:.35,dividend:0,totalShares:5e8},{name:"Alibaba",icon:"🛍️",price:85,growth:.13,dividend:0,totalShares:2.5e9},{name:"Coca-Cola",icon:"🥤",price:60,growth:.05,dividend:.03,totalShares:4.3e9},{name:"McDonald's",icon:"🍔",price:280,growth:.08,dividend:.02,totalShares:7e8},{name:"Visa",icon:"💳",price:260,growth:.11,dividend:.01,totalShares:2e9},{name:"JPMorgan",icon:"🏦",price:180,growth:.09,dividend:.03,totalShares:2.9e9},{name:"Walmart",icon:"🛒",price:70,growth:.06,dividend:.02,totalShares:8e9}
];

var TEAMS = [
{name:"Real Madrid",logo:"👑",price:1e10,income:9e8,country:"🇪🇸",league:"La Liga",founded:1902,stadium:"Bernabéu",cap:81044,hist:"15 UCL, 35 La Liga"},{name:"Barcelona",logo:"🔵🔴",price:8e9,income:75e7,country:"🇪🇸",league:"La Liga",founded:1899,stadium:"Camp Nou",cap:99354,hist:"5 UCL, 27 La Liga"},{name:"Atletico Madrid",logo:"⚪🔴",price:3e9,income:35e7,country:"🇪🇸",league:"La Liga",founded:1903,stadium:"Metropolitano",cap:68456,hist:"11 La Liga"},{name:"Sevilla",logo:"⚪🔴",price:15e8,income:18e7,country:"🇪🇸",league:"La Liga",founded:1890,stadium:"Pizjuán",cap:43883,hist:"7 Europa League"},{name:"Man United",logo:"😈",price:7e9,income:7e8,country:"🇬🇧",league:"EPL",founded:1878,stadium:"Old Trafford",cap:74310,hist:"3 UCL, 20 EPL"},{name:"Man City",logo:"🩵",price:7e9,income:75e7,country:"🇬🇧",league:"EPL",founded:1880,stadium:"Etihad",cap:53400,hist:"1 UCL, 8 EPL"},{name:"Liverpool",logo:"🔴🐦",price:65e8,income:68e7,country:"🇬🇧",league:"EPL",founded:1892,stadium:"Anfield",cap:53394,hist:"6 UCL, 19 EPL"},{name:"Chelsea",logo:"🦁",price:5e9,income:55e7,country:"🇬🇧",league:"EPL",founded:1905,stadium:"Stamford",cap:40343,hist:"2 UCL, 6 EPL"},{name:"Arsenal",logo:"🔴⚪",price:45e8,income:5e8,country:"🇬🇧",league:"EPL",founded:1886,stadium:"Emirates",cap:60704,hist:"13 EPL"},{name:"Tottenham",logo:"🐓",price:35e8,income:4e8,country:"🇬🇧",league:"EPL",founded:1882,stadium:"Tottenham",cap:62850,hist:"2 EPL"},{name:"Newcastle",logo:"⚫⚪",price:25e8,income:28e7,country:"🇬🇧",league:"EPL",founded:1892,stadium:"St James",cap:52305,hist:"4 EPL"},{name:"Aston Villa",logo:"🦁",price:18e8,income:20e7,country:"🇬🇧",league:"EPL",founded:1874,stadium:"Villa Park",cap:42657,hist:"7 EPL, 1 UCL"},{name:"Bayern Munich",logo:"🔴⚪",price:6e9,income:65e7,country:"🇩🇪",league:"Bundesliga",founded:1900,stadium:"Allianz Arena",cap:75024,hist:"6 UCL, 33 BL"},{name:"Dortmund",logo:"🟡⚫",price:25e8,income:28e7,country:"🇩🇪",league:"Bundesliga",founded:1909,stadium:"Signal Iduna",cap:81365,hist:"1 UCL, 8 BL"},{name:"RB Leipzig",logo:"🐂",price:15e8,income:18e7,country:"🇩🇪",league:"Bundesliga",founded:2009,stadium:"Red Bull",cap:47069,hist:"0 UCL"},{name:"Juventus",logo:"⚫⚪",price:35e8,income:38e7,country:"🇮🇹",league:"Serie A",founded:1897,stadium:"Allianz",cap:41507,hist:"2 UCL, 36 SA"},{name:"AC Milan",logo:"🔴⚫",price:3e9,income:33e7,country:"🇮🇹",league:"Serie A",founded:1899,stadium:"San Siro",cap:75923,hist:"7 UCL, 19 SA"},{name:"Inter Milan",logo:"🔵⚫",price:32e8,income:35e7,country:"🇮🇹",league:"Serie A",founded:1908,stadium:"San Siro",cap:75923,hist:"3 UCL, 19 SA"},{name:"Napoli",logo:"🔵⚪",price:2e9,income:22e7,country:"🇮🇹",league:"Serie A",founded:1926,stadium:"Maradona",cap:54726,hist:"3 SA"},{name:"Roma",logo:"🐺",price:15e8,income:18e7,country:"🇮🇹",league:"Serie A",founded:1927,stadium:"Olimpico",cap:70634,hist:"3 SA"},{name:"PSG",logo:"🗼",price:55e8,income:6e8,country:"🇫🇷",league:"Ligue 1",founded:1970,stadium:"Parc",cap:47929,hist:"11 L1"},{name:"Marseille",logo:"⚪🔵",price:12e8,income:14e7,country:"🇫🇷",league:"Ligue 1",founded:1899,stadium:"Vélodrome",cap:67394,hist:"1 UCL, 9 L1"},{name:"Lyon",logo:"🦁",price:1e9,income:12e7,country:"🇫🇷",league:"Ligue 1",founded:1950,stadium:"Groupama",cap:59186,hist:"7 L1"},{name:"Monaco",logo:"⚪🔴",price:9e8,income:11e7,country:"🇫🇷",league:"Ligue 1",founded:1924,stadium:"Louis II",cap:18523,hist:"8 L1"},{name:"Ajax",logo:"⚪🔴",price:15e8,income:17e7,country:"🇳🇱",league:"Eredivisie",founded:1900,stadium:"Johan Cruyff",cap:55500,hist:"4 UCL, 36 ED"},{name:"PSV",logo:"⚪🔴",price:8e8,income:1e8,country:"🇳🇱",league:"Eredivisie",founded:1913,stadium:"Philips",cap:35000,hist:"1 UCL, 24 ED"},{name:"Feyenoord",logo:"🔴⚪",price:6e8,income:8e7,country:"🇳🇱",league:"Eredivisie",founded:1908,stadium:"De Kuip",cap:51117,hist:"1 UCL, 16 ED"},{name:"Simba SC",logo:"🦁",price:8e7,income:15e6,country:"🇹🇿",league:"Ligi Kuu TZ",founded:1936,stadium:"Benjamin Mkapa",cap:60000,hist:"22 Ligi Kuu"},{name:"Young Africans",logo:"🟡🟢",price:7e7,income:13e6,country:"🇹🇿",league:"Ligi Kuu TZ",founded:1935,stadium:"Benjamin Mkapa",cap:60000,hist:"27 Ligi Kuu"},{name:"Azam FC",logo:"🔵⚪",price:5e7,income:8e6,country:"🇹🇿",league:"Ligi Kuu TZ",founded:2004,stadium:"Azam Complex",cap:10000,hist:"1 Ligi Kuu"},{name:"Namungo FC",logo:"🟢⚪",price:2e7,income:3e6,country:"🇹🇿",league:"Ligi Kuu TZ",founded:2015,stadium:"Majaliwa",cap:5000,hist:"-"},{name:"Coastal Union",logo:"🟠⚫",price:15e6,income:2e6,country:"🇹🇿",league:"Ligi Kuu TZ",founded:1968,stadium:"Mkwakwani",cap:8000,hist:"1 Ligi Kuu"},{name:"Al Ahly",logo:"🦅",price:5e8,income:6e7,country:"🇪🇬",league:"Afrika",founded:1907,stadium:"Cairo",cap:75000,hist:"11 CAF CL"},{name:"Zamalek",logo:"⚪🔴",price:4e8,income:5e7,country:"🇪🇬",league:"Afrika",founded:1911,stadium:"Cairo",cap:75000,hist:"5 CAF CL"},{name:"Mamelodi Sundowns",logo:"🟡",price:3e8,income:4e7,country:"🇿🇦",league:"Afrika",founded:1970,stadium:"Loftus",cap:51762,hist:"1 CAF CL"},{name:"Kaizer Chiefs",logo:"🟡⚫",price:2e8,income:25e6,country:"🇿🇦",league:"Afrika",founded:1970,stadium:"FNB",cap:94736,hist:"4 CAF CL"},{name:"Orlando Pirates",logo:"🏴‍☠️",price:15e8,income:2e7,country:"🇿🇦",league:"Afrika",founded:1937,stadium:"Orlando",cap:40000,hist:"1 CAF CL"},{name:"Gor Mahia",logo:"🟢⚪",price:3e7,income:5e6,country:"🇰🇪",league:"Afrika",founded:1968,stadium:"Kasarani",cap:60000,hist:"-"},{name:"Enyimba",logo:"🔴⚫",price:4e7,income:7e6,country:"🇳🇬",league:"Afrika",founded:1976,stadium:"Enyimba",cap:5000,hist:"2 CAF CL"},{name:"Flamengo",logo:"🦅",price:15e8,income:18e7,country:"🇧🇷",league:"Brazil",founded:1895,stadium:"Maracanã",cap:78838,hist:"3 Libertadores"},{name:"Palmeiras",logo:"🟢⚪",price:14e8,income:16e7,country:"🇧🇷",league:"Brazil",founded:1914,stadium:"Allianz Parque",cap:43713,hist:"3 Libertadores"},{name:"Corinthians",logo:"⚫⚪",price:8e8,income:1e8,country:"🇧🇷",league:"Brazil",founded:1910,stadium:"Neo Química",cap:49205,hist:"1 Libertadores"},{name:"São Paulo",logo:"🔴⚫",price:7e8,income:85e6,country:"🇧🇷",league:"Brazil",founded:1930,stadium:"Morumbi",cap:66795,hist:"3 Libertadores"},{name:"Boca Juniors",logo:"🔵🟡",price:8e8,income:9e7,country:"🇦🇷",league:"Argentina",founded:1905,stadium:"Bombonera",cap:54000,hist:"6 Libertadores"},{name:"River Plate",logo:"⚪🔴",price:9e8,income:1e8,country:"🇦🇷",league:"Argentina",founded:1901,stadium:"Monumental",cap:70074,hist:"4 Libertadores"},{name:"Inter Miami",logo:"🩷⚫",price:8e8,income:1e8,country:"🇺🇸",league:"MLS",founded:2018,stadium:"DRV PNK",cap:21550,hist:"0 MLS Cup"},{name:"LA Galaxy",logo:"⚪🔵",price:6e8,income:7e7,country:"🇺🇸",league:"MLS",founded:1994,stadium:"Dignity",cap:27000,hist:"5 MLS Cup"},{name:"Al Hilal",logo:"🔵⚪",price:1e9,income:15e7,country:"🇸🇦",league:"Saudi",founded:1957,stadium:"Kingdom",cap:25000,hist:"18 Saudi PL"},{name:"Al Nassr",logo:"🟡🔵",price:9e8,income:13e7,country:"🇸🇦",league:"Saudi",founded:1955,stadium:"Al-Awwal",cap:25000,hist:"9 Saudi PL"},{name:"Al Ittihad",logo:"🟡⚫",price:8e8,income:11e7,country:"🇸🇦",league:"Saudi",founded:1927,stadium:"King Abdullah",cap:62345,hist:"9 Saudi PL"}
];
var LEAGUES = ["EPL","La Liga","Bundesliga","Serie A","Ligue 1","Eredivisie","Ligi Kuu TZ","Afrika","Brazil","Argentina","MLS","Saudi"];

var CRIMES = [
{name:"Wiba dukani",icon:"🛒",minAge:12,reward:5e5,jail:.4,jailYrs:[1,3]},{name:"Wiba gari",icon:"🚗",minAge:15,reward:2e6,jail:.5,jailYrs:[1,5]},{name:"Wiba benki",icon:"🏦",minAge:18,reward:5e7,jail:.7,jailYrs:[3,10]},{name:"Wiba tajiri",icon:"💰",minAge:16,reward:5e8,jail:.85,jailYrs:[5,15]},{name:"Benki Kuu",icon:"🏛️",minAge:21,reward:5e9,jail:.65,jailYrs:[10,25]}
];
var WEAPONS = [
{name:"Pistol",icon:"🔫",cost:5e3,power:10},{name:"SMG",icon:"🔫",cost:2e4,power:25},{name:"Assault",icon:"🔫",cost:1e5,power:50},{name:"Sniper",icon:"🎯",cost:5e5,power:70},{name:"RPG",icon:"🚀",cost:2e6,power:85},{name:"Tank",icon:"🚜",cost:5e7,power:90},{name:"Jet",icon:"✈️",cost:2e9,power:95}
];
var ILLEGAL_BIZ = [
{name:"Dawa za Kulevya",icon:"💊",cost:5e6,income:5e7,risk:.4},{name:"Silaha",icon:"🔫",cost:2e7,income:2e8,risk:.35},{name:"Dark Web",icon:"🌐",cost:1e7,income:15e8,risk:.25},{name:"Pesa Haramu",icon:"💵",cost:2e7,income:3e8,risk:.40}
];

// 110+ BILLIONAIRES
var RICH_NPC = [
{name:"Elon Musk",country:"US",wealth:250e9,sector:"Tech",age:53},
{name:"Jeff Bezos",country:"US",wealth:200e9,sector:"Retail",age:60},
{name:"Bernard Arnault",country:"FR",wealth:180e9,sector:"Luxury",age:75},
{name:"Bill Gates",country:"US",wealth:130e9,sector:"Tech",age:69},
{name:"Warren Buffett",country:"US",wealth:120e9,sector:"Investments",age:94},
{name:"Mark Zuckerberg",country:"US",wealth:110e9,sector:"Tech",age:40},
{name:"Larry Ellison",country:"US",wealth:100e9,sector:"Tech",age:80},
{name:"Mukesh Ambani",country:"IN",wealth:90e9,sector:"Energy",age:67},
{name:"Gautam Adani",country:"IN",wealth:80e9,sector:"Infrastructure",age:62},
{name:"Carlos Slim",country:"MX",wealth:70e9,sector:"Telecom",age:84},
{name:"Françoise Bettencourt",country:"FR",wealth:65e9,sector:"Luxury",age:71},
{name:"Michael Bloomberg",country:"US",wealth:60e9,sector:"Media",age:82},
{name:"Larry Page",country:"US",wealth:55e9,sector:"Tech",age:51},
{name:"Sergey Brin",country:"US",wealth:52e9,sector:"Tech",age:51},
{name:"Steve Ballmer",country:"US",wealth:50e9,sector:"Tech",age:68},
{name:"Jim Walton",country:"US",wealth:45e9,sector:"Retail",age:76},
{name:"Rob Walton",country:"US",wealth:44e9,sector:"Retail",age:79},
{name:"Alice Walton",country:"US",wealth:43e9,sector:"Retail",age:74},
{name:"Jensen Huang",country:"US",wealth:42e9,sector:"Tech",age:61},
{name:"Michael Dell",country:"US",wealth:40e9,sector:"Tech",age:59},
{name:"Amancio Ortega",country:"ES",wealth:38e9,sector:"Retail",age:88},
{name:"Changpeng Zhao",country:"CN",wealth:35e9,sector:"Crypto",age:47},
{name:"Ken Griffin",country:"US",wealth:35e9,sector:"Investments",age:55},
{name:"Julia Koch",country:"US",wealth:33e9,sector:"Diversified",age:61},
{name:"David Koch",country:"US",wealth:32e9,sector:"Diversified",age:64},
{name:"Prajogo Pangestu",country:"ID",wealth:30e9,sector:"Energy",age:79},
{name:"Stephen Schwarzman",country:"US",wealth:30e9,sector:"Investments",age:77},
{name:"Phil Knight",country:"US",wealth:28e9,sector:"Sportswear",age:86},
{name:"Dieter Schwarz",country:"DE",wealth:27e9,sector:"Retail",age:84},
{name:"Thomas Peterffy",country:"US",wealth:25e9,sector:"Finance",age:79},
{name:"Zhong Shanshan",country:"CN",wealth:24e9,sector:"Beverages",age:69},
{name:"Jack Ma",country:"CN",wealth:23e9,sector:"Tech",age:60},
{name:"Colin Huang",country:"CN",wealth:22e9,sector:"Tech",age:44},
{name:"Reinhold Wuerth",country:"DE",wealth:21e9,sector:"Industrial",age:88},
{name:"Aliko Dangote",country:"NG",wealth:20e9,sector:"Cement",age:67},
{name:"William Ding",country:"CN",wealth:19e9,sector:"Tech",age:52},
{name:"Zhang Yiming",country:"CN",wealth:18e9,sector:"Tech",age:41},
{name:"Wang Wei",country:"CN",wealth:17e9,sector:"Logistics",age:53},
{name:"Tadashi Yanai",country:"JP",wealth:16e9,sector:"Retail",age:75},
{name:"Vladimir Potanin",country:"RU",wealth:15e9,sector:"Metals",age:63},
{name:"Ray Dalio",country:"US",wealth:15e9,sector:"Investments",age:75},
{name:"David Tepper",country:"US",wealth:20e9,sector:"Investments",age:66},
{name:"Steve Cohen",country:"US",wealth:20e9,sector:"Investments",age:68},
{name:"Vladimir Lisin",country:"RU",wealth:14e9,sector:"Steel",age:67},
{name:"Alexey Mordashov",country:"RU",wealth:13e9,sector:"Steel",age:58},
{name:"Leon Black",country:"US",wealth:12e9,sector:"Investments",age:72},
{name:"Lakshmi Mittal",country:"IN",wealth:12e9,sector:"Steel",age:73},
{name:"Gina Rinehart",country:"AU",wealth:11e9,sector:"Mining",age:70},
{name:"Andrew Forrest",country:"AU",wealth:10e9,sector:"Mining",age:62},
{name:"Iris Fontbona",country:"CL",wealth:9.5e9,sector:"Mining",age:81},
{name:"Nicky Oppenheimer",country:"ZA",wealth:8e9,sector:"Mining",age:79},
{name:"Nassef Sawiris",country:"EG",wealth:8e9,sector:"Construction",age:63},
{name:"Johann Rupert",country:"ZA",wealth:7e9,sector:"Luxury",age:74},
{name:"George Soros",country:"US",wealth:6e9,sector:"Investments",age:93},
{name:"Carl Icahn",country:"US",wealth:5e9,sector:"Investments",age:88},
{name:"George Lucas",country:"US",wealth:5e9,sector:"Media",age:80},
{name:"Steven Spielberg",country:"US",wealth:4.5e9,sector:"Media",age:77},
{name:"Bill Ackman",country:"US",wealth:4e9,sector:"Investments",age:57},
{name:"Patrice Motsepe",country:"ZA",wealth:3e9,sector:"Mining",age:62},
{name:"Michael Jordan",country:"US",wealth:3e9,sector:"Sports",age:61},
{name:"Oprah Winfrey",country:"US",wealth:3e9,sector:"Media",age:70},
{name:"Strive Masiyiwa",country:"ZW",wealth:2e9,sector:"Telecom",age:63},
{name:"Jay-Z",country:"US",wealth:2.5e9,sector:"Music",age:54},
{name:"Jamie Dimon",country:"US",wealth:2e9,sector:"Finance",age:68},
{name:"Kim Kardashian",country:"US",wealth:1.7e9,sector:"Media",age:43},
{name:"Mohammed Dewji",country:"TZ",wealth:1.5e9,sector:"Manufacturing",age:49},
{name:"Rihanna",country:"BB",wealth:1.4e9,sector:"Music",age:36},
{name:"LeBron James",country:"US",wealth:1.2e9,sector:"Sports",age:39},
{name:"Taylor Swift",country:"US",wealth:1.1e9,sector:"Music",age:34},
{name:"Tiger Woods",country:"US",wealth:1.1e9,sector:"Sports",age:48},
{name:"Rostam Aziz",country:"TZ",wealth:1e9,sector:"Media",age:57},
{name:"MrBeast",country:"US",wealth:1e9,sector:"Media",age:26},
{name:"Tyler Perry",country:"US",wealth:1e9,sector:"Media",age:54},
{name:"Paul McCartney",country:"GB",wealth:1.2e9,sector:"Music",age:82},
{name:"Diddy",country:"US",wealth:1e9,sector:"Music",age:54},
{name:"Lloyd Blankfein",country:"US",wealth:1e9,sector:"Finance",age:69},
{name:"Madonna",country:"US",wealth:850e6,sector:"Music",age:65},
{name:"Celine Dion",country:"CA",wealth:800e6,sector:"Music",age:56},
{name:"Dwayne Johnson",country:"US",wealth:800e6,sector:"Media",age:52},
{name:"Said Salim Bakhresa",country:"TZ",wealth:600e6,sector:"Food",age:75},
{name:"Cristiano Ronaldo",country:"PT",wealth:600e6,sector:"Sports",age:39},
{name:"Lionel Messi",country:"AR",wealth:600e6,sector:"Sports",age:37},
{name:"Roger Federer",country:"CH",wealth:550e6,sector:"Sports",age:43},
{name:"David Beckham",country:"GB",wealth:500e6,sector:"Sports",age:49},
{name:"Mick Jagger",country:"GB",wealth:500e6,sector:"Music",age:80},
{name:"Elton John",country:"GB",wealth:500e6,sector:"Music",age:77},
{name:"Bob Iger",country:"US",wealth:500e6,sector:"Media",age:73},
{name:"Shania Twain",country:"CA",wealth:500e6,sector:"Music",age:58},
{name:"Bruce Springsteen",country:"US",wealth:500e6,sector:"Music",age:74},
{name:"Jennifer Lopez",country:"US",wealth:400e6,sector:"Music",age:55},
{name:"Ringo Starr",country:"GB",wealth:350e6,sector:"Music",age:84},
{name:"Serena Williams",country:"US",wealth:300e6,sector:"Sports",age:43},
{name:"Rod Stewart",country:"GB",wealth:300e6,sector:"Music",age:79},
{name:"Drake",country:"CA",wealth:250e6,sector:"Music",age:37},
{name:"Ariana Grande",country:"US",wealth:240e6,sector:"Music",age:31},
{name:"Neymar",country:"BR",wealth:200e6,sector:"Sports",age:32},
{name:"Kylian Mbappe",country:"FR",wealth:180e6,sector:"Sports",age:25},
{name:"Kanye West",country:"US",wealth:400e6,sector:"Music",age:47},
{name:"PewDiePie",country:"SE",wealth:60e6,sector:"Media",age:34},
{name:"Jake Paul",country:"US",wealth:60e6,sector:"Media",age:27},
{name:"Lionel Richie",country:"US",wealth:200e6,sector:"Music",age:75},
{name:"Akon",country:"SN",wealth:80e6,sector:"Music",age:51},
{name:"Diamond Platnumz",country:"TZ",wealth:20e6,sector:"Music",age:37},
{name:"Ali Kiba",country:"TZ",wealth:15e6,sector:"Music",age:38},
{name:"Harmonize",country:"TZ",wealth:10e6,sector:"Music",age:30}
];
var FAMOUS_PEOPLE = [
{name:"Elon Musk",country:"US",wealth:250e9},{name:"Bill Gates",country:"US",wealth:130e9},{name:"Warren Buffett",country:"US",wealth:120e9},{name:"Aliko Dangote",country:"NG",wealth:20e9},{name:"Mohammed Dewji",country:"TZ",wealth:1.5e9},{name:"Patrice Motsepe",country:"ZA",wealth:3e9},{name:"Rostam Aziz",country:"TZ",wealth:1e9},{name:"Jeff Bezos",country:"US",wealth:200e9},{name:"Bernard Arnault",country:"FR",wealth:180e9},{name:"Carlos Slim",country:"MX",wealth:70e9},{name:"Mukesh Ambani",country:"IN",wealth:90e9},{name:"Nicky Oppenheimer",country:"ZA",wealth:8e9},{name:"Strive Masiyiwa",country:"ZW",wealth:2e9},{name:"Nassef Sawiris",country:"EG",wealth:8e9},{name:"Mark Zuckerberg",country:"US",wealth:110e9},{name:"Larry Ellison",country:"US",wealth:100e9},{name:"Michael Bloomberg",country:"US",wealth:60e9},{name:"Gautam Adani",country:"IN",wealth:80e9}
];

var CEO_LIST = [
{name:"Christine Mushi",spec:"Biashara",salary:5e5,rating:85,age:45,bio:"Mtaalam wa uanzishaji wa biashara"},{name:"Robert Mkapa",spec:"Biashara",salary:8e5,rating:88,age:52,bio:"Aliongoza makampuni 5"},{name:"Sarah Kikwete",spec:"Biashara",salary:1.2e6,rating:92,age:48,bio:"Mwanzilishi wa Tech Hub"},{name:"David Ndungu",spec:"Biashara",salary:2e6,rating:95,age:55,bio:"Legend wa uwekezaji Afrika"},{name:"Elizabeth Mwinyi",spec:"Hisa",salary:4e5,rating:87,age:38,bio:"Mchambuzi wa soko"},{name:"Michael Ochieng",spec:"Hisa",salary:6e5,rating:90,age:44,bio:"Alifanya faida 400%"},{name:"Grace Msuya",spec:"Hisa",salary:1e6,rating:93,age:41,bio:"Strategist wa Wall Street"},{name:"James Hassan",spec:"Hisa",salary:1.5e6,rating:96,age:50,bio:"Hedge Fund Master"},{name:"Victoria Kimani",spec:"Mkuu",salary:1e6,rating:89,age:47,bio:"Mkurugenzi Mtendaji"},{name:"Charles Nyerere",spec:"Mkuu",salary:2e6,rating:94,age:58,bio:"Visionary wa biashara"},{name:"Aisha Mohammed",spec:"Biashara",salary:7e5,rating:86,age:36,bio:"Startup Queen"},{name:"Peter Mwangi",spec:"Hisa",salary:8e5,rating:91,age:42,bio:"Algorithm trader"},{name:"Fatuma Salim",spec:"Biashara",salary:9e5,rating:88,age:40,bio:"Real estate mogul"},{name:"John Okello",spec:"Mkuu",salary:1.8e6,rating:93,age:56,bio:"Turnaround specialist"}
];

var CAREERS = [
{id:"football",name:"Mpira",icon:"⚽",ranks:["Vijana","Akiba","Kikosi","Nyota","Taifa","Duniani"],pays:[1e5,1e6,5e6,2e7,8e7,5e8]},{id:"music",name:"Muziki",icon:"🎤",ranks:["Chipukizi","Kanda","Bongo","Afrika","Kimataifa","Legend"],pays:[3e4,2e5,2e6,2e7,2e8,15e8]},{id:"tech",name:"Tech",icon:"💻",ranks:["Msanidi","Mhandisi","Mwanzilishi","Startup","CEO","Legend"],pays:[2e5,15e5,5e6,5e7,5e8,5e9]}
];

// PARTIES
var PARTIES = [
{name:"Chama cha Mapinduzi", short:"CCM", icon:"🟡", color:"#fbbf24", founded:1977, members:8000000, mps:250, councillors:12000, wealth:5e10, influence:95, leader:"John Magufuli", candidate:"Samia Suluhu", candWealth:5e8, candInfluence:90, permanent:5000000, projects:["Barabara","Hospitali","Shule"]},
{name:"Chadema", short:"CHADEMA", icon:"🔵", color:"#38bdf8", founded:1992, members:3500000, mps:80, councillors:1500, wealth:8e9, influence:65, leader:"Freeman Mbowe", candidate:"Tundu Lissu", candWealth:2e8, candInfluence:60, permanent:800000, projects:["Elimu","Afya"]},
{name:"CUF", short:"CUF", icon:"🟢", color:"#22c55e", founded:1992, members:1500000, mps:40, councillors:800, wealth:3e9, influence:40, leader:"Prof. Ibrahim Lipumba", candidate:"Hamad Rashid", candWealth:1.5e8, candInfluence:45, permanent:400000, projects:["Biashara"]},
{name:"ACT Wazalendo", short:"ACT", icon:"🔴", color:"#ef4444", founded:2014, members:800000, mps:20, councillors:400, wealth:1.5e9, influence:30, leader:"Zitto Kabwe", candidate:"Zitto Kabwe", candWealth:8e7, candInfluence:35, permanent:200000, projects:["Katiba"]},
{name:"NCCR Mageuzi", short:"NCCR", icon:"🟣", color:"#a855f7", founded:1993, members:500000, mps:10, councillors:200, wealth:8e8, influence:20, leader:"James Mbatia", candidate:"James Mbatia", candWealth:5e7, candInfluence:25, permanent:100000, projects:["Haki"]},
{name:"Chama cha Wananchi", short:"CCW", icon:"🟠", color:"#fb923c", founded:2005, members:300000, mps:5, councillors:100, wealth:4e8, influence:15, leader:"Moses Kikwete", candidate:"Moses Kikwete", candWealth:3e7, candInfluence:18, permanent:60000, projects:["Kijana"]},
{name:"Democratic Party", short:"DP", icon:"⚫", color:"#6b7280", founded:2002, members:200000, mps:3, councillors:60, wealth:2e8, influence:10, leader:"Christopher Mtikila", candidate:"Christopher Mtikila", candWealth:2e7, candInfluence:12, permanent:40000, projects:["Demokrasia"]},
{name:"TADEA", short:"TADEA", icon:"⚪", color:"#e5e7eb", founded:2018, members:150000, mps:2, councillors:30, wealth:1e8, influence:8, leader:"Hamisi Kigwangalla", candidate:"Hamisi Kigwangalla", candWealth:1.5e7, candInfluence:10, permanent:30000, projects:["Maendeleo"]}
];

function birthDate(){ var p = (state.birthDate || "2020-01-01").split("-"); return new Date(parseInt(p[0]), parseInt(p[1])-1, parseInt(p[2])); }
function currentDate(){ var b = birthDate(); var d = new Date(b.getTime()); d.setDate(d.getDate() + Math.floor((state.totalHours||0)/24)); return d; }
function getAge(){ var b = birthDate(), c = currentDate(); var a = c.getFullYear() - b.getFullYear(); if(c.getMonth() < b.getMonth() || (c.getMonth() === b.getMonth() && c.getDate() < b.getDate())) a--; return Math.max(0, a); }
function ageDetail(){ var b = birthDate(), c = currentDate(); var y = c.getFullYear() - b.getFullYear(); var m = c.getMonth() - b.getMonth(); var d = c.getDate() - b.getDate(); if(d < 0){ m--; d += 28; } if(m < 0){ y--; m += 12; } return {y: Math.max(0,y), m: Math.max(0,m), d: Math.max(0,d)}; }
function fmtDate(d){ return DAYS[d.getDay()] + ", " + d.getDate() + " " + MONTHS[d.getMonth()] + " " + d.getFullYear(); }
function fmtShortDate(d){ return d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear(); }
function fmtClock(){ var t = state.totalHours || 0; var h = Math.floor(t) % 24; var m = Math.floor((t*60) % 60); var s = Math.floor((t*3600) % 60); return (h<10?"0":"") + h + ":" + (m<10?"0":"") + m + ":" + (s<10?"0":"") + s; }

function calcIncome(){
  var t = 0, i;
  for(i=0; i<state.businesses.length; i++){ var b = state.businesses[i]; t += b.income * (1 + (b.staff||0)*.05) * (1 + (b.upgrades||0)*.15); }
  for(i=0; i<state.oilWells.length; i++) t += state.oilWells[i].income;
  for(i=0; i<state.gasWells.length; i++) t += state.gasWells[i].income;
  for(i=0; i<state.miningOps.length; i++) t += state.miningOps[i].income;
  for(i=0; i<state.intlBusinesses.length; i++) t += state.intlBusinesses[i].income;
  for(i=0; i<state.realEstate.length; i++) t += state.realEstate[i].rent;
  for(i=0; i<state.govLoans.length; i++) t += Math.floor(state.govLoans[i].amount * state.govLoans[i].rate);
  for(i=0; i<state.nuclearPlants.length; i++) t += state.nuclearPlants[i].income;
  for(i=0; i<state.illegalBiz.length; i++) t += Math.floor(state.illegalBiz[i].income * .85);
  if(state.bankCapital > 0) t += Math.floor(state.bankCapital * .10);
  for(i=0; i<state.countryProjects.length; i++){ if(!state.countryProjects[i].forgiven) t += state.countryProjects[i].income; }
  for(i=0; i<state.billionaireLoans.length; i++){ var bl = state.billionaireLoans[i]; if(!bl.forgiven && !bl.seized) t += Math.floor(bl.loan * bl.rate); }
  for(var sn in state.stocks){ if(state.stocks.hasOwnProperty(sn)){ for(i=0; i<STOCKS.length; i++){ if(STOCKS[i].name === sn){ var h = state.stocks[sn]; if(h && h.shares){ var v = h.shares * stockPrice(STOCKS[i]); t += Math.floor(v * STOCKS[i].dividend); } break; } } } }
  for(var n in state.teamShares){ if(state.teamShares.hasOwnProperty(n)){ for(i=0; i<TEAMS.length; i++){ if(TEAMS[i].name === n){ t += Math.floor(TEAMS[i].income * state.teamShares[n] / 100); break; } } } }
  for(i=0; i<state.leagueSponsors.length; i++) t += state.leagueSponsors[i].income;
  if(state.ceo) t -= state.ceo.salary;
  if(state.bizCeo) t -= state.bizCeo.salary;
  if(state.stockCeo) t -= state.stockCeo.salary;
  return Math.max(0, t);
}
function totalIncome(){ var now = Date.now(); if(now - cachedIncomeTime < 500) return cachedIncome; cachedIncome = calcIncome(); cachedIncomeTime = now; return cachedIncome; }
function stockPrice(s){ if(s.currentPrice === undefined) s.currentPrice = s.price; return Math.floor(s.currentPrice); }
function playerWealth(){
  var w = state.money || 0;
  state.businesses.forEach(function(b){ w += b.cost * 1.3; });
  state.oilWells.forEach(function(o){ w += (o.cost||o.income*15); });
  state.gasWells.forEach(function(o){ w += (o.cost||o.income*15); });
  state.miningOps.forEach(function(m){ w += (m.cost||m.income*15); });
  state.realEstate.forEach(function(r){ w += r.price; });
  state.intlBusinesses.forEach(function(b){ w += b.cost * 1.3; });
  if(state.bankCapital) w += state.bankCapital;
  state.govLoansOut.forEach(function(l){ w += l.amount; });
  state.countryProjects.forEach(function(p){ if(!p.forgiven) w += p.cost * 0.8; });
  state.billionaireLoans.forEach(function(b){ if(!b.forgiven) w += b.loan; });
  Object.keys(state.teamShares).forEach(function(n){ for(var i=0; i<TEAMS.length; i++){ if(TEAMS[i].name === n){ w += TEAMS[i].price * state.teamShares[n] / 100; break; } } });
  for(var sn in state.stocks){ if(state.stocks[sn] && state.stocks[sn].shares){ for(var i=0; i<STOCKS.length; i++){ if(STOCKS[i].name === sn){ w += state.stocks[sn].shares * stockPrice(STOCKS[i]); break; } } } }
  state.nuclearPlants.forEach(function(n){ w += n.cost || 1e10; });
  return w;
}

function populate(){
  var h = ""; COUNTRIES.forEach(function(c){ h += '<option value="' + c[0] + '">' + c[1] + '</option>'; }); $("cCountry").innerHTML = h;
  h = ""; for(var y = 2026; y >= 2000; y--){ h += '<option value="' + y + '"' + (y===2020?" selected":"") + '>' + y + '</option>'; } $("cYear").innerHTML = h;
  h = ""; RELIGIONS.forEach(function(r){ h += '<button class="pick' + (r==="Ukristo"?" active":"") + '" data-val="' + r + '" onclick="pickBtn(this,\'cReligion\')">' + r + '</button>'; }); $("cReligion").innerHTML = h;
  h = ""; THEMES.forEach(function(t){ h += '<button class="theme-swatch' + (t===currentTheme?" active":"") + '" data-t="' + t + '" onclick="setTheme(\'' + t + '\')">' + t.toUpperCase() + '</button>'; }); $("themeGrid").innerHTML = h;
  $("cCountry").value = "TZ"; $("cName").value = "Juma Mkenye";
}
function setTheme(t){ currentTheme = t; document.body.setAttribute("data-theme", t); localStorage.setItem("dopplerTheme", t); var sw = document.querySelectorAll(".theme-swatch"); for(var i=0; i<sw.length; i++) sw[i].classList.toggle("active", sw[i].getAttribute("data-t") === t); }
function cycleTheme(){ var i = THEMES.indexOf(currentTheme); currentTheme = THEMES[(i+1) % THEMES.length]; setTheme(currentTheme); toast("🎨 " + currentTheme.toUpperCase()); }
function pickBtn(el, gid){ var els = document.querySelectorAll("#" + gid + " .pick"); for(var i=0; i<els.length; i++) els[i].classList.remove("active"); el.classList.add("active"); }
function randName(){ var a = document.querySelector("#cGender .pick.active"); var g = a ? a.getAttribute("data-val") : "male"; $("cName").value = rnGender(g); }
function showTab(id){ var tabs = ["createTab","loadTab","themeTab"]; for(var i=0; i<tabs.length; i++){ var el = $(tabs[i]); if(el) el.classList.toggle("hide", tabs[i] !== id); } }
function refreshSlots(){ for(var i=1; i<=3; i++){ var s = localStorage.getItem("dopplerSlot" + i); var info = $("slot" + i + "Info"); if(!info) continue; if(s){ try{ var d = JSON.parse(s); info.textContent = d.name + " (umri " + d.age + ")"; info.style.color = "#22c55e"; }catch(e){ info.textContent = "Tupu"; info.style.color = "var(--txt3)"; } } else { info.textContent = "Tupu"; info.style.color = "var(--txt3)"; } } var a = localStorage.getItem("dopplerSlotAuto"); var ai = $("slotAutoInfo"); if(ai){ if(a){ try{ var d2 = JSON.parse(a); ai.textContent = d2.name + " (umri " + d2.age + ")"; ai.style.color = "#22c55e"; }catch(e){ ai.textContent = "Tupu"; } } else ai.textContent = "Tupu"; } }
function selectSlot(n){ currentSlot = n; for(var i=1; i<=3; i++){ var el = $("slot" + i); if(el) el.style.borderColor = ""; } var y = $("slot" + n); if(y) y.style.borderColor = "var(--acc2)"; var ya = $("slotAuto"); if(ya) ya.style.borderColor = ""; }
function loadSlot(){ var key = currentSlot === "auto" ? "dopplerSlotAuto" : "dopplerSlot" + currentSlot; var s = localStorage.getItem(key); if(!s){ toast("Haina save"); return; } try{ state = JSON.parse(s); ensureState(); $("createScreen").classList.add("hide"); $("gameScreen").classList.remove("hide"); lastLogLen = -1; cachedIncomeTime = 0; lastSaveTime = Date.now(); setSpeed("pause"); renderAll(); updateBell(); toast("📂 Umepakiwa"); }catch(e){ toast("Save imeharibika"); } }
function clearAllSaves(){ if(!confirm("Futa saves zote?")) return; for(var i=1; i<=3; i++) localStorage.removeItem("dopplerSlot" + i); localStorage.removeItem("dopplerSlotAuto"); refreshSlots(); toast("Zimefutwa"); }

function ensureState(){
  var defaults = {backups:[], exes:[], affairs:[], clubs:[], govLoansOut:[], pendingLoans:[], bankClients:[], casinoLossStreak:0, bankInterestRate:.20, bankClientCount:0, bankTotalLent:0, nuclearPlants:[], nuclearWeapons:[], weapons:[], illegalBiz:[], leagueHistory:{}, myParty:null, influence:{party:0,citizens:0,mps:0,business:0,media:0}, courtCases:[], miningOps:[], oilWells:[], gasWells:[], notifications:[], stats:{}, countryDev:{}, countryLive:{}, npcWealth:{}, stockCeoBuys:[], ceoBusinesses:[], ceoAutoInvest:0, bizCeoBusinesses:[], bizCeoAutoInvest:0, ceoHistory:[], bizCeoHistory:[], stockCeoHistory:[], leagueSponsors:[], inventory:[], teamShares:{}, stocks:{}, exportDeals:[], presidentialDebt:[], countryProjects:[], billionaireLoans:[], approvalRating:50, policies:{tax:20,invest:20,antiCorr:20}, membership:null, foundedParty:false, leadershipHistory:[]};
  for(var k in defaults){ if(defaults.hasOwnProperty(k) && state[k] === undefined) state[k] = defaults[k]; }
  if(!state.surname) state.surname = (state.name||"").split(" ").pop() || "Mkenye";
  STOCKS.forEach(function(s){ if(s.currentPrice === undefined) s.currentPrice = s.price; });
  COUNTRIES.forEach(function(c){ initLive(c[0]); });
  if(Object.keys(state.npcWealth).length === 0){ RICH_NPC.forEach(function(b){ state.npcWealth[b.name] = b.wealth; }); }
}

function startNewLife(){
  try{
    var nm = $("cName").value.trim() || "Juma Mkenye";
    var gEl = document.querySelector("#cGender .pick.active");
    var rEl = document.querySelector("#cReligion .pick.active");
    var gender = gEl ? gEl.getAttribute("data-val") : "male";
    var religion = rEl ? rEl.getAttribute("data-val") : "Ukristo";
    var country = $("cCountry").value;
    var year = parseInt($("cYear").value);
    var surname = nm.split(" ").pop();
    state = {name:nm, surname:surname, religion:religion, gender:gender, country:country, language:"Kiswahili", birthDate: year + "-01-01", totalHours:0, age:0, health:100, happiness:100, smarts:rnd(30,60), looks:50, fitness:50, fame:0, money:1000, job:null, salary:0, education:"Msingi", partner:null, relationships:[], children:[], exes:[], affairs:[], inventory:[], businesses:[], teamShares:{}, clubs:[], oilWells:[], gasWells:[], miningOps:[], bankCapital:0, bankClients:[], bankInterestRate:.20, bankClientCount:0, bankTotalLent:0, govLoans:[], govLoansOut:[], pendingLoans:[], realEstate:[], intlBusinesses:[], projectLoansOut:[], nuclearPlants:[], nuclearWeapons:[], weapons:[], illegalBiz:[], wantedLevel:0, courtCases:[], politicalParty:null, isPresident:false, myParty:null, membership:null, foundedParty:false, leadershipHistory:[], influence:{party:0,citizens:0,mps:0,business:0,media:0}, presidentTermStart:0, alive:true, inJail:false, jailYears:0, careerPath:null, careerRank:-1, careerYears:0, stocks:{}, backups:[], log:[], casinoLossStreak:0, exportDeals:[], presidentialDebt:[], leagueHistory:{}, notifications:[], ceo:null, stockCeo:null, bizCeo:null, bizCeoAutoInvest:0, bizCeoBusinesses:[], ceoBusinesses:[], ceoAutoInvest:0, ceoHistory:[], bizCeoHistory:[], stockCeoHistory:[], leagueSponsors:[], countryDev:{}, countryLive:{}, npcWealth:{}, stockCeoBuys:[], countryProjects:[], billionaireLoans:[], approvalRating:50, policies:{tax:20,invest:20,antiCorr:20}, stats:{jobsHeld:0,crimes:0,books:0,marriages:0,children:0,bizStarted:0,casinoWins:0,casinoLosses:0,totalYears:0}};
    state.relationships.push({name:rn("female"), role:"Mama", relation:80, age:rnd(22,40), alive:true, icon:"👩", gender:"female"});
    state.relationships.push({name:rn("male"), role:"Baba", relation:75, age:rnd(24,45), alive:true, icon:"👨", gender:"male"});
    // Add grandparents & siblings
    state.relationships.push({name:rn("female"), role:"Bibi", relation:70, age:rnd(60,80), alive:true, icon:"👵", gender:"female"});
    state.relationships.push({name:rn("male"), role:"Babu", relation:70, age:rnd(60,85), alive:true, icon:"👴", gender:"male"});
    var sibCount = rnd(1, 3);
    for(var si=0; si<sibCount; si++){
      var sg = chance(.5) ? "male" : "female";
      state.relationships.push({name:rn(sg), role: sg === "male" ? "Kaka" : "Dada", relation:70, age:rnd(0, 15), alive:true, icon: sg === "male" ? "👦" : "👧", gender:sg});
    }
    RICH_NPC.forEach(function(b){ state.npcWealth[b.name] = b.wealth * (0.8 + Math.random()*0.4); });
    STOCKS.forEach(function(s){ s.currentPrice = s.price * (0.9 + Math.random()*0.2); });
    COUNTRIES.forEach(function(c){ initLive(c[0]); });
    addLog("Karibu duniani, " + state.name + "! 🎉", "good");
    $("createScreen").classList.add("hide");
    $("gameScreen").classList.remove("hide");
    var tabs = document.querySelectorAll(".tab"); for(var i=0; i<tabs.length; i++) tabs[i].classList.remove("active"); tabs[0].classList.add("active");
    var panels = document.querySelectorAll(".panel"); for(i=0; i<panels.length; i++) panels[i].classList.remove("active"); $("pn-time").classList.add("active");
    lastLogLen = -1; cachedIncomeTime = 0; lastSaveTime = Date.now(); setSpeed("slow"); updateBell(); renderAll();
  }catch(err){ alert("Hitilafu: " + err.message); console.error(err); }
}
function addLog(msg, type){ var d = currentDate(); state.log.unshift({age:state.age, date:fmtShortDate(d), msg:msg, type:type||""}); if(state.log.length > 15) state.log.pop(); lastLogLen = -1; }
function updateBell(){ var b = $("notifBadge"); if(!b) return; var unread = 0; for(var i=0; i<(state.notifications||[]).length; i++){ if(!state.notifications[i].read) unread++; } if(unread > 0){ b.textContent = unread > 99 ? "99+" : unread; b.classList.remove("hide"); } else b.classList.add("hide"); }

function openModal(title, text, buttons){
  if(modalStack.length){ var cur = modalStack[modalStack.length-1]; var sc = $("modalBody"); if(sc) modalScrollTops[cur.id || cur.title || "_"] = sc.scrollTop; }
  modalStack.push({title:title, text:text, buttons:buttons||[], id:title});
  renderModal();
}
function closeModal(){ if(modalStack.length) modalStack.pop(); renderModal(); }
function modalBack(){ if(modalStack.length > 1) closeModal(); }
function closeAllModals(){ modalStack = []; modalScrollTops = {}; $("modal").classList.remove("show"); }
function renderModal(){
  if(!modalStack.length){ $("modal").classList.remove("show"); return; }
  var cur = modalStack[modalStack.length-1];
  $("modalTitle").innerHTML = cur.title; $("modalText").innerHTML = cur.text || "";
  var inc = totalIncome(); var bar = $("modalBar");
  bar.innerHTML = '<span class="mb cash">💰 ' + fmt(state.money) + '</span><span class="mb inc">📈 ' + fmt(inc) + '/y</span><span class="mb">🏢 ' + state.businesses.length + '</span>';
  var backBtn = $("modalBack"); if(modalStack.length > 1) backBtn.classList.add("show"); else backBtn.classList.remove("show");
  var bd = $("modalButtons"); bd.innerHTML = "";
  var btns = cur.buttons || [];
  for(var i=0; i<btns.length; i++){
    (function(b){
      var btn = document.createElement("button");
      btn.className = "mbtn " + (b.cls || "");
      btn.innerHTML = b.label;
      btn.onclick = function(ev){ ev.stopPropagation(); if(b.close === true) closeModal(); if(b.action){ try{ b.action(); }catch(e){ console.log(e); } } };
      bd.appendChild(btn);
    })(btns[i]);
  }
  $("modal").classList.add("show");
  var sc2 = $("modalBody"); if(sc2){ var saved = modalScrollTops[cur.id || cur.title || "_"]; if(saved !== undefined) sc2.scrollTop = saved; else sc2.scrollTop = 0; }
}
function confirmModal(t, x, fn){ openModal(t, x, [{label:"✅ Ndiyo", cls:"primary", action:fn, close:true},{label:"❌ Hapana", close:true}]); }
function refreshModal(){ if(modalStack.length) renderModal(); }

function getAvatar(){ if(!state.alive) return "💀"; if(state.inJail) return "🔒"; if(state.isPresident) return "👑"; if(state.age < 3) return "👶"; if(state.age < 13) return state.gender === "female" ? "👧" : "👦"; if(state.age < 20) return state.gender === "female" ? "👩‍🎓" : "👨‍🎓"; if(state.age < 60) return state.gender === "female" ? "👩‍💼" : "👨‍💼"; return state.gender === "female" ? "👩" : "👨"; }
function getStatus(){ if(!state.alive) return "Amefariki 💀"; if(state.inJail) return "Jela 🔒"; if(state.isPresident) return "RAIS 👑"; if(state.bankCapital > 0) return "Mmiliki Benki 🏦"; if(state.clubs.length > 0) return "Mmiliki Klabu ⚽"; if(state.businesses.length > 0) return "Mmiliki (" + state.businesses.length + ") 🏢"; if(state.job) return state.job + " 💼"; if(state.age < 3) return "Mtoto 🍼"; if(state.age < 13) return "Mwanafunzi 🎒"; if(state.age < 20) return "Kijana 🎓"; if(state.age < 60) return "Mtu Mzima"; return "Mzee 🧓"; }
function toast(msg){ var t = $("toast"); t.textContent = msg; t.classList.add("show"); if(t._t) clearTimeout(t._t); t._t = setTimeout(function(){ t.classList.remove("show"); }, 2000); }
function setSpeed(s){ currentSpeed = s; renderFast(); renderSlow(); }
function togglePlay(){ if(currentSpeed === "pause"){ setSpeed("slow"); toast("▶️ Umeanza!"); } else { setSpeed("pause"); toast("⏸️ Umesimama"); } }

function renderFast(){
  if(!state || !state.name) return;
  setTxt("ageBadge", state.age || 0);
  setTxt("charName", state.name);
  setTxt("moneyBadge", "💰" + fmt(state.money));
  var isOn = currentSpeed !== "pause";
  setCls("liveDot", "live-dot " + (isOn ? "on" : "off"));
  setTxt("speedText", SPEED_LABEL[currentSpeed] || "PAUSE");
  setCls("speedText", "speed-pill" + (currentSpeed === "pause" ? " paused" : ""));
  setTxt("playText", currentSpeed === "pause" ? "ANZA KUCHEZA" : "SITISHA");
  var speeds = ["slow","normal","fast","veryfast","superfast","ultra"];
  for(var i=0; i<speeds.length; i++){ var btn = $("sp-" + speeds[i]); if(btn){ var on = currentSpeed === speeds[i]; if(btn._on !== on){ btn.classList.toggle("on", on); btn._on = on; } } }
  var d = currentDate(); setTxt("dateText", fmtDate(d));
  var ad = ageDetail(); setTxt("clockText", fmtClock() + " • " + ad.y + "y " + ad.m + "m " + ad.d + "d");
  setTxt("avatar", getAvatar());
}
function renderSlow(){
  if(!state || !state.name) return;
  setTxt("charStatus", getStatus());
  setTxt("hVal", "100"); setTxt("fVal", state.happiness); setTxt("sVal", state.smarts); setTxt("famVal", state.fame);
  setW("hBar", "100%"); setW("fBar", state.happiness + "%"); setW("sBar", state.smarts + "%"); setW("famBar", Math.min(100, state.fame) + "%");
  var inc = totalIncome(); setTxt("incomeTick", fmt(inc) + "/y"); setTxt("incTotalVal", fmt(inc));
  if(state.log.length !== lastLogLen){
    lastLogLen = state.log.length;
    var w = $("logWrap"); var h = "";
    for(var i=0; i<state.log.length; i++){ var l = state.log[i]; h += '<div class="log ' + l.type + '"><span class="meta">Umri ' + l.age + ' • ' + l.date + '</span>' + l.msg + '</div>'; }
    w.innerHTML = h;
  }
  updateBell();
}
function renderAll(){ renderFast(); renderSlow(); }

function gameLoop(ts){
  requestAnimationFrame(gameLoop);
  if(!state.alive || currentSpeed === "pause") return;
  if(state.totalHours === undefined) return;
  if(!gameLoop._last) gameLoop._last = ts;
  var delta = ts - gameLoop._last; gameLoop._last = ts;
  if(delta > 500) delta = 500; if(delta <= 0) return;
  var hrs = SPEEDS[currentSpeed]; if(hrs <= 0) return;
  var add = (delta/1000) * hrs; if(add > 8760) add = 8760;
  var oldAge = state.age;
  state.totalHours += add;
  var inc = totalIncome(); var years = add / 8760;
  if(inc > 0) state.money += inc * years;
  var newAge = getAge(); state.age = newAge;
  if(newAge > oldAge){ state.stats.totalYears += (newAge - oldAge); yearEvent(newAge - oldAge); checkLandmarks(oldAge, newAge); }
  if(!gameLoop._t2) gameLoop._t2 = ts;
  if(ts - gameLoop._t2 > 1000){ gameLoop._t2 = ts; tickSecond(); }
  if(ts - lastBankGen > 5000 && state.bankCapital > 0){ lastBankGen = ts; genBank(); }
  if(ts - lastFootball > 60000){ lastFootball = ts; simFootball(); }
  if(ts - lastSaveTime > 180000){ lastSaveTime = ts; autoSave(); }
  if(ts - lastCEOCheck > 3000 && state.ceo && state.ceo.active !== false){ lastCEOCheck = ts; ceoProcessLoans(); }
  if(ts - lastStockCEO > 5000 && state.stockCeo && state.stockCeo.active !== false){ lastStockCEO = ts; stockCeoProcess(); }
  if(ts - lastBizCEO > 5000 && state.bizCeo && state.bizCeo.active !== false){ lastBizCEO = ts; bizCeoProcess(); }
  if(ts - lastBillionaireEvent > 8000){ lastBillionaireEvent = ts; processBillionaireWealth(); }
  if(ts - lastLoanChance > 15000 && (currentSpeed === "slow" || currentSpeed === "normal")){ lastLoanChance = ts; if(chance(.4)) genLoanRequest(); }
}
requestAnimationFrame(gameLoop);
setInterval(function(){ if(state && state.alive && !$("gameScreen").classList.contains("hide")) renderAll(); }, 500);

function tickSecond(){
  for(var i=0; i<STOCKS.length; i++){ var s = STOCKS[i]; var ch = (Math.random()-0.48) * 0.004 * s.currentPrice; s.currentPrice = Math.max(1, s.currentPrice + ch); }
  if(state.npcWealth){ for(var j=0; j<RICH_NPC.length; j++){ var b = RICH_NPC[j]; state.npcWealth[b.name] = Math.max(1e9, (state.npcWealth[b.name] || b.wealth) * (1 + (Math.random()-0.5)*0.01)); } }
  var n = COUNTRIES.length; var count = Math.max(3, Math.floor(n * 0.3));
  for(var k=0; k<count; k++){
    var c = COUNTRIES[countryTickIdx % n]; countryTickIdx++;
    var lv = state.countryLive && state.countryLive[c[0]]; if(!lv) continue;
    var policyBoost = 1;
    if(lv.policies){ policyBoost += (lv.policies.invest - 20) * 0.01; policyBoost -= (lv.policies.tax - 20) * 0.005; policyBoost += (lv.policies.antiCorr - 20) * 0.008; }
    var gdpG = lv.gdp * (0.00001 + Math.random()*0.00003) * (1 + lv.econ*0.2) * policyBoost;
    lv.gdp = Math.max(1, lv.gdp + gdpG); lv.gdpDelta = gdpG;
    lv.pop = Math.max(0.1, lv.pop + lv.pop * (lv.basePopGrowth/365/24/3600) * 1000);
    if(lv.policies){ var corrDelta = (Math.random()-0.5)*0.08 - (lv.policies.antiCorr - 20) * 0.005; lv.corr = Math.max(0, Math.min(100, lv.corr + corrDelta)); var inflDelta = (Math.random()-0.5)*0.15 + (lv.policies.tax - 20) * 0.002; lv.infl = Math.max(0, lv.infl + inflDelta); }
    else { lv.corr = Math.max(0, Math.min(100, lv.corr + (Math.random()-0.5)*0.08)); lv.infl = Math.max(0, lv.infl + (Math.random()-0.5)*0.15); }
  }
  if(state.isPresident){ var myLive = liveOf(state.country); if(myLive && myLive.policies){ var approvalChange = (myLive.gdpDelta * 100) - (myLive.corr * 0.01) - (myLive.infl * 0.05); state.approvalRating = clamp(state.approvalRating + approvalChange, 0, 100); myLive.approval = state.approvalRating; } }
}

function checkLandmarks(fromAge, toAge){
  if(fromAge < 6 && toAge >= 6){ state.education = "Msingi"; addLog("Shule 🎒","good"); }
  if(fromAge < 10 && toAge >= 10){ state.money += 5e9; addLog("🎁 10! $5B!","legend"); }
  if(fromAge < 14 && toAge >= 14){ state.education = "Sekondari"; addLog("Sekondari 📚","good"); }
  if(fromAge < 60 && toAge >= 60) addLog("Umestaafu 🧓");
  if(fromAge < 100 && toAge >= 100) addLog("Miaka 100! 🧙","legend");
}
function processBillionaireWealth(){ if(!state.billionaireLoans) return; state.billionaireLoans.forEach(function(bl){ if(bl.forgiven) return; var baseGrowth = (Math.random() - 0.4) * 0.02; var loanBoost = (bl.loan / bl.wealth) * 0.05; var newWealth = (bl.wealth || 1e9) * (1 + baseGrowth + loanBoost); bl.wealth = Math.max(1e9, newWealth); if(state.npcWealth) state.npcWealth[bl.name] = bl.wealth; }); }

function yearEvent(mult){
  mult = mult || 1; var i;
  if(state.inJail){ state.jailYears -= mult; if(state.jailYears <= 0){ state.inJail = false; addLog("Umetoka jela!","good"); } }
  if(state.careerPath){ var cp = null; for(i=0; i<CAREERS.length; i++) if(CAREERS[i].id === state.careerPath) cp = CAREERS[i]; if(cp && state.careerRank >= 0){ state.careerYears += mult; state.money += cp.pays[state.careerRank] * mult; state.fame += mult; if(state.careerYears >= 3 && state.careerRank < cp.ranks.length-1 && chance(.5)) state.careerRank++; } }
  if(state.ceo) state.money -= state.ceo.salary * mult;
  if(state.bizCeo) state.money -= state.bizCeo.salary * mult;
  if(state.stockCeo) state.money -= state.stockCeo.salary * mult;
  if(state.ceo && state.ceoAutoInvest > 0 && state.money > state.ceoAutoInvest) ceoBuyAsset(pick(["realty","oil","mining"]));
  if(state.bizCeo && state.bizCeoAutoInvest > 0 && state.money > state.bizCeoAutoInvest) bizCeoInvest();
  if(state.leagueSponsors){ var rem = []; state.leagueSponsors.forEach(function(s){ s.yearsLeft -= mult; if(s.yearsLeft > 0) rem.push(s); }); state.leagueSponsors = rem; }
  var mat = [], rmv = [];
  for(i=0; i<state.govLoans.length; i++){ state.govLoans[i].yearsLeft -= mult; if(state.govLoans[i].yearsLeft <= 0) mat.push(state.govLoans[i]); else rmv.push(state.govLoans[i]); }
  for(i=0; i<mat.length; i++) state.money += mat[i].amount + Math.floor(mat[i].amount * mat[i].rate);
  state.govLoans = rmv;
  var matO = [], remO = [];
  for(i=0; i<state.govLoansOut.length; i++){ state.govLoansOut[i].yearsLeft -= mult; if(state.govLoansOut[i].yearsLeft <= 0) matO.push(state.govLoansOut[i]); else remO.push(state.govLoansOut[i]); }
  for(i=0; i<matO.length; i++) state.money += matO[i].amount + Math.floor(matO[i].amount * matO[i].rate);
  state.govLoansOut = remO;
  var matP = [], remP = [];
  for(i=0; i<state.countryProjects.length; i++){ var p = state.countryProjects[i]; if(p.forgiven || p.nationalized){ remP.push(p); continue; } p.yearsLeft -= mult; if(p.yearsLeft <= 0) matP.push(p); else remP.push(p); }
  for(i=0; i<matP.length; i++){ state.money += matP[i].cost + Math.floor(matP[i].cost * 0.5); addLog("🏗️ Mradi " + matP[i].name + " umekamilika " + matP[i].country, "gold"); }
  state.countryProjects = remP;
  var matB = [], remB = [];
  for(i=0; i<state.billionaireLoans.length; i++){ var bl = state.billionaireLoans[i]; if(bl.forgiven || bl.seized){ remB.push(bl); continue; } bl.yearsLeft -= mult; if(bl.yearsLeft <= 0) matB.push(bl); else remB.push(bl); }
  for(i=0; i<matB.length; i++){ var b = matB[i]; state.money += b.loan + Math.floor(b.loan * b.rate); addLog("💰 " + b.name + " amelipa mkopo", "gold"); }
  state.billionaireLoans = remB;
  if(state.isPresident){ var curYr = currentDate().getFullYear(); if(curYr - state.presidentTermStart >= 5){ if(state.approvalRating > 40){ state.presidentTermStart = curYr; addLog("🗳️ Umeshinda uchaguzi! Ridhaa: " + Math.round(state.approvalRating) + "%", "legend"); } else { state.isPresident = false; if(!state.leadershipHistory) state.leadershipHistory = []; state.leadershipHistory.push({role:"Rais", start:state.presidentTermStart, end:curYr, party:state.politicalParty || "Independent"}); addLog("🗳️ Umepoteza uchaguzi. Ridhaa: " + Math.round(state.approvalRating) + "%", "bad"); } } }
  for(i=0; i<state.relationships.length; i++){ var r = state.relationships[i]; if(r.alive && (r.role === "Mama" || r.role === "Baba" || r.role === "Bibi" || r.role === "Babu")){ r.age += mult; if(r.age > 80 && chance(.08)){ r.alive = false; r._pendingInheritance = rnd(5e4, 5e5); addLog(r.role + " yako amefariki.","bad"); } } }
  for(i=0; i<state.children.length; i++) state.children[i].age += mult;
}
function autoSave(){ setTimeout(function(){ try{ var tmp = JSON.parse(JSON.stringify(state)); tmp.backups = []; localStorage.setItem("dopplerSlotAuto", JSON.stringify(tmp)); }catch(e){} }, 100); }
function saveGame(){ setTimeout(function(){ try{ var tmp = JSON.parse(JSON.stringify(state)); tmp.backups = []; var key = (currentSlot === "auto") ? "dopplerSlot1" : "dopplerSlot" + currentSlot; localStorage.setItem(key, JSON.stringify(tmp)); refreshSlots(); toast("💾 Imehifadhiwa"); }catch(e){ toast("Hitilafu"); } }, 100); }
function genBank(){ if(!state.bankCapital || state.bankCapital <= 0) return; var totalLent = state.bankTotalLent || 0; var maxLent = state.bankCapital * 2; if(totalLent >= maxLent) return; var cap = Math.floor(Math.sqrt(state.bankCapital/1e6) * 100); if((state.bankClientCount || 0) >= cap) return; var add = Math.max(20, Math.floor(cap * 0.1)); state.bankClientCount = (state.bankClientCount || 0) + add; state.bankTotalLent = totalLent + add * 5e7; }

function simFootball(){
  var seasonYear = currentDate().getFullYear(); var label = seasonYear + "/" + (seasonYear+1);
  if(lastFootballSeason === label) return;
  lastFootballSeason = label;
  for(var li=0; li<LEAGUES.length; li++){
    var lg = LEAGUES[li]; var teams = [];
    for(var ti=0; ti<TEAMS.length; ti++) if(TEAMS[ti].league === lg) teams.push(TEAMS[ti]);
    if(!teams.length) continue;
    if(!state.leagueHistory[lg]) state.leagueHistory[lg] = [];
    var sorted = teams.slice();
    for(var a=0; a<sorted.length; a++) for(var b=a+1; b<sorted.length; b++) if(chance(.5)){ var tmp = sorted[a]; sorted[a] = sorted[b]; sorted[b] = tmp; }
    var top = sorted.slice(0, Math.min(8, sorted.length)); var table = [];
    for(var idx=0; idx<top.length; idx++){ var t = top[idx]; var p = teams.length * 2; var w = Math.max(2, Math.floor(p * (0.75 - idx*0.08)) + rnd(-2,2)); if(w > p) w = p; var d = Math.max(0, Math.floor(p * 0.15) + rnd(0,2)); if(w + d > p) d = p - w; var l = p - w - d; table.push({name:t.name, p:p, w:w, d:d, l:l, pts:w*3+d}); }
    table.sort(function(x,y){ return y.pts - x.pts; });
    state.leagueHistory[lg].push({season:label, standings:table, champion:table[0].name});
    if(state.leagueHistory[lg].length > 8) state.leagueHistory[lg].shift();
  }
}
function genLoanRequest(){
  if(state.pendingLoans.length >= 5) return; if(state.money < 1e8) return;
  var code, label;
  if(chance(.7)){ code = pick(AFRICAN_CODES); label = countryLabel(code); }
  else { var c = pick(COUNTRIES); code = c[0]; label = c[1]; }
  var econ = countryEcon(code); var amount = Math.floor(state.money * (0.01 + Math.random()*0.07));
  if(amount < 1e8) amount = 1e8;
  var rate = econ <= 1 ? 0.20 + rnd(0,10)/100 : 0.15 + rnd(0,12)/100;
  var years = rnd(5, 20); var project = pick(COUNTRY_PROJECTS);
  state.pendingLoans.push({country:label, code:code, amount:amount, rate:rate, years:years, isPoor:econ <= 1, requested:fmtDate(currentDate()), projectName:project.name, projectIcon:project.icon, gdpBoost:project.gdpBoost});
  addLog("🏛️ " + label + " inaomba mkopo wa " + project.name, "gold");
  triggerEvent({icon:"🏛️", title:"Ombi la Mkopo wa Mradi", text:"<b>" + label + "</b> inaomba <b>" + fmt(amount) + "</b> kwa <b>" + project.icon + " " + project.name + "</b> @ " + (rate*100).toFixed(0) + "%.", choices:[
    {text:"✅", cls:"green", eff:function(){ var idx = -1; for(var i=0; i<state.pendingLoans.length; i++){ if(state.pendingLoans[i].country === label && state.pendingLoans[i].amount === amount){ idx = i; break; } } if(idx < 0) return; var last = state.pendingLoans[idx]; if(state.money < last.amount) return toast("Huna"); state.money -= last.amount; state.countryProjects.push({country:last.country, code:last.code, name:last.projectName, icon:last.projectIcon, cost:last.amount, income:Math.floor(last.amount * last.rate * 0.3), gdpBoost:last.gdpBoost || 10, yearsLeft:last.years, rate:last.rate, forgiven:false, nationalized:false}); var lv = liveOf(last.code); if(lv) lv.gdp = Math.max(1, lv.gdp + (last.gdpBoost || 10) * 0.5); state.pendingLoans.splice(idx, 1); cachedIncomeTime = 0; toast("✅ " + last.country + " — " + last.projectName); }},
    {text:"❌", cls:"red", eff:function(){ for(var i=0; i<state.pendingLoans.length; i++){ if(state.pendingLoans[i].country === label && state.pendingLoans[i].amount === amount){ state.pendingLoans.splice(i, 1); break; } } toast("❌"); }}
  ]});
}

/* ==================== CEO MKUU ==================== */
function openCEO(){
  if(!state.ceo){ return openModal("👔 Ajiri CEO Mkuu", "CEO Mkuu:<br>• 📋 Kusoma taarifa<br>• ✅ Kukubali mikopo<br>• 🏢 Kufungua biashara<br>• 💰 Bajeti hadi $10T<br><br>Gharama: <b>$5M</b> • Mshahara: <b>$1M/y</b>", [{label:"👔 Ajiri ($5M)", cls:"gold", action:function(){ if(state.money < 5e6) return toast("Huna $5M"); state.money -= 5e6; state.ceo = {name:rnCEO(), salary:1e6, autoApproveAfrican:true, autoApproveForeign:false, minRate:0.18, hired:currentDate().getFullYear(), approved:0, active:true}; addLog("👔 CEO Mkuu: " + state.ceo.name, "legend"); toast("👔!"); renderAll(); closeModal(); }}, closeBtn()]); }
  var c = state.ceo;
  var h = '<div class="pgrid"><div class="pstat purple"><div class="v" style="font-size:11px">' + c.name + '</div><div class="l">CEO Mkuu</div></div><div class="pstat gold"><div class="v">' + fmt(c.salary) + '</div><div class="l">Mshahara/y</div></div><div class="pstat green"><div class="v">' + c.approved + '</div><div class="l">Mikopo</div></div><div class="pstat blue"><div class="v">' + fmt(state.ceoAutoInvest||0) + '</div><div class="l">Bajeti/y</div></div></div><div class="info-box">Inasubiri: <b>' + state.pendingLoans.length + '</b> • Hali: ' + (c.active ? '✅ Active' : '⏸️ Imesimamishwa') + '</div>';
  openModal("👔 CEO Mkuu", h, [
    {label:"🌍 Africa " + (c.autoApproveAfrican?"✅":"❌"), cls:c.autoApproveAfrican?"green":"red", action:function(){ c.autoApproveAfrican = !c.autoApproveAfrican; refreshModal(); }},
    {label:"🌐 Nje " + (c.autoApproveForeign?"✅":"❌"), cls:c.autoApproveForeign?"blue":"red", action:function(){ c.autoApproveForeign = !c.autoApproveForeign; refreshModal(); }},
    {label:"📊 Riba ≥ " + (c.minRate*100).toFixed(0) + "%", cls:"gold", action:function(){ openModal("Riba","",[{label:"15%", action:function(){ c.minRate = .15; closeModal(); }},{label:"18%", action:function(){ c.minRate = .18; closeModal(); }},{label:"20%", action:function(){ c.minRate = .20; closeModal(); }},{label:"25%", cls:"gold", action:function(){ c.minRate = .25; closeModal(); }},closeBtn()]); }},
    {label:"🏢 CEO AWEKEZE", cls:"primary", action:function(){ openCEOBusinessMenu(); }},
    {label:"📋 Historia", cls:"purple", action:function(){ var list = state.ceoBusinesses || []; if(!list.length) return openModal("📋","Hakuna.",[closeBtn()]); var hh = ""; list.slice(-20).reverse().forEach(function(x){ hh += '<div class="rel"><div class="ic-sm">' + x.icon + '</div><div class="info"><div class="name">' + x.name + '</div><div class="meta">' + x.year + '</div></div></div>'; }); openModal("📋 Historia", hh, [closeBtn()]); }},
    {label:c.active?"⏸️ Simamisha":"▶️ Washa", cls:c.active?"gold":"green", action:function(){ c.active = !c.active; refreshModal(); }},
    {label:"🌐 Ajiri mwingine", cls:"purple", action:function(){ openCEOList(); }},
    {label:"🚪 Mfukuze", cls:"red", action:function(){ state.ceoHistory.push({name:c.name, year:currentDate().getFullYear()}); state.ceo = null; toast("Amefukuzwa"); closeModal(); }}
  ]);
}
function openCEOBusinessMenu(){
  openModal("🏢 CEO Awekeze", '<div class="info-box">Bajeti: <b>' + fmt(state.ceoAutoInvest||0) + '/y</b></div>', [
    {label:"💵 Weka Bajeti", cls:"gold", action:function(){ openModal("Bajeti","",[{label:"$10M/y", action:function(){ state.ceoAutoInvest = 1e7; closeModal(); }},{label:"$1B/y", action:function(){ state.ceoAutoInvest = 1e9; closeModal(); }},{label:"$1T/y", cls:"gold", action:function(){ state.ceoAutoInvest = 1e12; closeModal(); }},{label:"$10T/y", cls:"gold", action:function(){ state.ceoAutoInvest = 1e13; closeModal(); }},{label:"Zima", cls:"red", action:function(){ state.ceoAutoInvest = 0; closeModal(); }},closeBtn()]); }},
    {label:"🏘️ Majengo", cls:"green", action:function(){ ceoBuyAsset("realty"); refreshModal(); }},
    {label:"🛢️ Visima", cls:"green", action:function(){ ceoBuyAsset("oil"); refreshModal(); }},
    {label:"⛏️ Migodi", cls:"green", action:function(){ ceoBuyAsset("mining"); refreshModal(); }},
    closeBtn()
  ]);
}
function ceoBuyAsset(type){
  if(!state.ceo) return;
  var budget = Math.min(state.money * 0.3, state.ceoAutoInvest || state.money * 0.3);
  if(budget < 1e7) return;
  var bought = 0;
  if(type === "realty" && state.realEstate.length < 150){ for(var i=REALTY.length-1; i>=0; i--){ if(REALTY[i].price <= budget){ var r = REALTY[i]; state.money -= r.price; state.realEstate.push({name:r.name, icon:r.icon, price:r.price, rent:r.rent}); state.ceoBusinesses.push({icon:r.icon, name:r.name, price:fmt(r.price), year:currentDate().getFullYear()}); bought = 1; break; } } }
  else if(type === "oil" && state.oilWells.length < 100){ for(var j=OIL.length-1; j>=0; j--){ if(OIL[j].cost <= budget){ var o = OIL[j]; state.money -= o.cost; state.oilWells.push({name:o.name, icon:o.icon, income:o.income}); state.ceoBusinesses.push({icon:o.icon, name:o.name, price:fmt(o.cost), year:currentDate().getFullYear()}); bought = 1; break; } } }
  else if(type === "mining" && state.miningOps.length < 100){ for(var k=MINING.length-1; k>=0; k--){ if(MINING[k].cost <= budget){ var m = MINING[k]; state.money -= m.cost; state.miningOps.push({name:m.name, icon:m.icon, income:m.income}); state.ceoBusinesses.push({icon:m.icon, name:m.name, price:fmt(m.cost), year:currentDate().getFullYear()}); bought = 1; break; } } }
  if(state.ceoBusinesses.length > 200) state.ceoBusinesses = state.ceoBusinesses.slice(-200);
  if(bought){ addLog("👔 CEO amenunua " + type, "good"); cachedIncomeTime = 0; }
}
function ceoProcessLoans(){
  if(!state.ceo || state.ceo.active === false) return; if(!state.pendingLoans.length) return;
  var c = state.ceo;
  for(var i=state.pendingLoans.length-1; i>=0; i--){
    var l = state.pendingLoans[i]; var isAfr = l.code && AFRICAN_CODES.indexOf(l.code) >= 0;
    var shouldApprove = (isAfr && c.autoApproveAfrican) || (!isAfr && c.autoApproveForeign); if(!shouldApprove) continue;
    if(l.rate >= c.minRate && state.money >= l.amount){
      state.money -= l.amount;
      state.countryProjects.push({country:l.country, code:l.code, name:l.projectName || "Mradi", icon:l.projectIcon || "🏗️", cost:l.amount, income:Math.floor(l.amount * l.rate * 0.3), gdpBoost:l.gdpBoost || 10, yearsLeft:l.years, rate:l.rate, forgiven:false, nationalized:false, byCEO:true});
      var lv = liveOf(l.code); if(lv) lv.gdp = Math.max(1, lv.gdp + (l.gdpBoost || 10) * 0.5);
      state.pendingLoans.splice(i, 1); c.approved++; cachedIncomeTime = 0; addLog("👔 CEO: Amekubali mradi wa " + l.country, "good");
    }
  }
  if(state.countryProjects.length > 200) state.countryProjects = state.countryProjects.slice(-200);
}

function openBizCEO(){
  if(!state.bizCeo){ return openModal("👔 Ajiri CEO wa Biashara", "CEO Biashara:<br>• 🏢 Kuanzisha na kusimamia biashara<br>• 📈 Kuboresha biashara<br>• 🌍 Kuwekeza nje<br>• 💰 Bajeti hadi $10T<br><br>Gharama: <b>$5M</b> • Mshahara: <b>$1M/y</b>", [{label:"👔 Ajiri ($5M)", cls:"gold", action:function(){ if(state.money < 5e6) return toast("Huna $5M"); state.money -= 5e6; state.bizCeo = {name:rnCEO(), salary:1e6, hired:currentDate().getFullYear(), started:0, upgraded:0, invested:0, active:true}; addLog("👔 CEO Biashara: " + state.bizCeo.name, "legend"); toast("👔!"); renderAll(); closeModal(); }}, closeBtn()]); }
  var c = state.bizCeo;
  var h = '<div class="pgrid"><div class="pstat purple"><div class="v" style="font-size:11px">' + c.name + '</div><div class="l">CEO Biashara</div></div><div class="pstat gold"><div class="v">' + fmt(c.salary) + '</div><div class="l">Mshahara/y</div></div><div class="pstat green"><div class="v">' + c.started + '</div><div class="l">Mpya</div></div><div class="pstat pink"><div class="v">' + c.upgraded + '</div><div class="l">Upgrades</div></div></div><div class="info-box">Bajeti: <b>' + fmt(state.bizCeoAutoInvest||0) + '/y</b> • Hali: ' + (c.active ? '✅ Active' : '⏸️ Imesimamishwa') + '</div>';
  openModal("👔 CEO wa Biashara", h, [
    {label:"💵 Weka Bajeti", cls:"gold", action:function(){ openModal("Bajeti","",[{label:"$10M/y", action:function(){ state.bizCeoAutoInvest = 1e7; closeModal(); }},{label:"$1B/y", action:function(){ state.bizCeoAutoInvest = 1e9; closeModal(); }},{label:"$1T/y", cls:"gold", action:function(){ state.bizCeoAutoInvest = 1e12; closeModal(); }},{label:"$10T/y", cls:"gold", action:function(){ state.bizCeoAutoInvest = 1e13; closeModal(); }},{label:"Zima", cls:"red", action:function(){ state.bizCeoAutoInvest = 0; closeModal(); }},closeBtn()]); }},
    {label:"🏢 Anzisha Sasa", cls:"green", action:function(){ bizCeoInvest(); refreshModal(); }},
    {label:"📋 Historia", cls:"purple", action:function(){ var list = state.bizCeoBusinesses || []; if(!list.length) return openModal("📋","Hakuna.",[closeBtn()]); var hh = ""; list.slice(-20).reverse().forEach(function(x){ hh += '<div class="rel"><div class="ic-sm">' + x.icon + '</div><div class="info"><div class="name">' + x.name + '</div><div class="meta">' + x.year + ' • ' + (x.type||"Biashara") + '</div></div></div>'; }); openModal("📋 Historia", hh, [closeBtn()]); }},
    {label:c.active?"⏸️ Simamisha":"▶️ Washa", cls:c.active?"gold":"green", action:function(){ c.active = !c.active; refreshModal(); }},
    {label:"🌐 Ajiri mwingine", cls:"purple", action:function(){ openCEOList(); }},
    {label:"🚪 Mfukuze", cls:"red", action:function(){ state.bizCeoHistory.push({name:c.name, year:currentDate().getFullYear()}); state.bizCeo = null; closeModal(); }}
  ]);
}
function bizCeoInvest(){
  if(!state.bizCeo || state.bizCeo.active === false) return; if(state.money < 1e6) return;
  var budget = Math.min(state.money * 0.1, state.bizCeoAutoInvest || 1e7);
  if(state.businesses.length < 300 && chance(0.5)){
    var upg = state.businesses.filter(function(b){ return (b.upgrades||0) < 10 || (b.staff||0) < 10; });
    if(upg.length){ var b = pick(upg); if(budget >= 2e5){ if((b.staff||0) < 10){ b.staff = (b.staff||0) + 1; state.money -= 5e4; } else if((b.upgrades||0) < 10){ b.upgrades = (b.upgrades||0) + 1; state.money -= 2e5; } state.bizCeo.upgraded++; cachedIncomeTime = 0; return; } }
  }
  var cat = pick(["biz","oil","gas","mining","realty","intl"]);
  if(cat === "biz" && state.businesses.length < 300){ var bi = pick(BIZ); if(bi.cost <= budget){ state.money -= bi.cost; state.businesses.push({name:bi.name, icon:bi.icon, cost:bi.cost, income:bi.income, staff:0, upgrades:0, byCeo:true}); state.bizCeo.started++; state.bizCeoBusinesses.push({icon:bi.icon, name:bi.name, year:currentDate().getFullYear(), type:"Biashara"}); cachedIncomeTime = 0; } }
  else if(cat === "oil" && state.oilWells.length < 100){ var o = pick(OIL); if(o.cost <= budget){ state.money -= o.cost; state.oilWells.push({name:o.name, icon:o.icon, income:o.income}); state.bizCeoBusinesses.push({icon:o.icon, name:o.name, year:currentDate().getFullYear(), type:"Mafuta"}); cachedIncomeTime = 0; } }
  else if(cat === "gas" && state.gasWells.length < 100){ var g = pick(GAS); if(g.cost <= budget){ state.money -= g.cost; state.gasWells.push({name:g.name, icon:g.icon, income:g.income}); state.bizCeoBusinesses.push({icon:g.icon, name:g.name, year:currentDate().getFullYear(), type:"Gesi"}); cachedIncomeTime = 0; } }
  else if(cat === "mining" && state.miningOps.length < 100){ var m = pick(MINING); if(m.cost <= budget){ state.money -= m.cost; state.miningOps.push({name:m.name, icon:m.icon, income:m.income}); state.bizCeoBusinesses.push({icon:m.icon, name:m.name, year:currentDate().getFullYear(), type:"Madini"}); cachedIncomeTime = 0; } }
  else if(cat === "realty" && state.realEstate.length < 150){ var r = pick(REALTY); if(r.price <= budget){ state.money -= r.price; state.realEstate.push({name:r.name, icon:r.icon, price:r.price, rent:r.rent}); state.bizCeoBusinesses.push({icon:r.icon, name:r.name, year:currentDate().getFullYear(), type:"Jengo"}); cachedIncomeTime = 0; } }
  else if(cat === "intl" && state.intlBusinesses.length < 150){ var ib = pick(INTL); if(ib.cost <= budget){ state.money -= ib.cost; state.intlBusinesses.push({name:ib.name, icon:ib.icon, cost:ib.cost, income:ib.income}); state.bizCeoBusinesses.push({icon:ib.icon, name:ib.name, year:currentDate().getFullYear(), type:"Kimataifa"}); cachedIncomeTime = 0; } }
  if(state.bizCeoBusinesses.length > 200) state.bizCeoBusinesses = state.bizCeoBusinesses.slice(-200);
}

function openStockCEO(){
  if(!state.stockCeo){ return openModal("💹 Ajiri CEO wa Hisa", "CEO Hisa:<br>• 📈 Anunue hadi 100% ya kila kampuni<br>• 💰 Anakuchambulia soko<br>• 📊 Anakuletea faida<br><br>Gharama: <b>$2M</b> • Mshahara: <b>$500K/y</b>", [{label:"💹 Ajiri ($2M)", cls:"gold", action:function(){ if(state.money < 2e6) return toast("Huna $2M"); state.money -= 2e6; state.stockCeo = {name:rnCEO(), salary:5e5, hired:currentDate().getFullYear(), invested:0, active:true}; addLog("💹 CEO Hisa: " + state.stockCeo.name, "legend"); toast("💹!"); renderAll(); closeModal(); }}, closeBtn()]); }
  var c = state.stockCeo;
  var invested = 0, totalVal = 0;
  for(var sn in state.stocks){ if(state.stocks[sn] && state.stocks[sn].shares){ for(var i=0; i<STOCKS.length; i++){ if(STOCKS[i].name === sn){ invested += state.stocks[sn].totalInvested || 0; totalVal += state.stocks[sn].shares * stockPrice(STOCKS[i]); break; } } } }
  var h = '<div class="pgrid"><div class="pstat purple"><div class="v" style="font-size:11px">' + c.name + '</div><div class="l">CEO Hisa</div></div><div class="pstat gold"><div class="v">' + fmt(c.salary) + '</div><div class="l">Mshahara/y</div></div><div class="pstat green"><div class="v">' + fmt(invested) + '</div><div class="l">Uwekezaji</div></div><div class="pstat pink"><div class="v">' + fmt(totalVal) + '</div><div class="l">Thamani</div></div></div><div class="info-box">CEO ananunua hadi 100% ya kila kampuni.</div>';
  openModal("💹 CEO Hisa", h, [
    {label:"📋 Historia", cls:"purple", action:function(){ var list = state.stockCeoBuys || []; if(!list.length) return openModal("📋","Hakuna.",[closeBtn()]); var hh = ""; list.slice(-30).reverse().forEach(function(x){ hh += '<div class="rel"><div class="ic-sm">📈</div><div class="info"><div class="name">' + x.name + ' — ' + x.qty.toLocaleString() + '</div><div class="meta">@ $' + x.price + ' • ' + fmt(x.total) + ' • ' + x.year + '</div></div></div>'; }); openModal("📋", hh, [closeBtn()]); }},
    {label:c.active?"⏸️ Simamisha":"▶️ Washa", cls:c.active?"gold":"green", action:function(){ c.active = !c.active; refreshModal(); }},
    {label:"🌐 Ajiri mwingine", cls:"purple", action:function(){ openCEOList(); }},
    {label:"🚪 Mfukuze", cls:"red", action:function(){ state.stockCeoHistory.push({name:c.name, year:currentDate().getFullYear()}); state.stockCeo = null; closeModal(); }}
  ]);
}
function stockCeoProcess(){
  if(!state.stockCeo || state.stockCeo.active === false) return; if(state.money < 1e6) return;
  var budget = Math.min(state.money * 0.05, 1e11);
  var candidates = [];
  for(var i=0; i<STOCKS.length; i++){
    var s = STOCKS[i]; var holding = state.stocks[s.name]; var owned = holding ? holding.shares : 0;
    var pct = owned / (s.totalShares || 1e9);
    if(pct < 1.0) candidates.push({s:s, pct:pct, potential:s.growth - s.dividend*0.5});
  }
  if(!candidates.length) return;
  candidates.sort(function(a,b){ return a.pct - b.pct; });
  var chosen = pick(candidates.slice(0, 8)).s;
  var price = stockPrice(chosen);
  var qty = Math.floor(budget / price);
  if(qty < 1) return;
  var total = price * qty;
  state.money -= total;
  if(!state.stocks[chosen.name]) state.stocks[chosen.name] = {shares:0, totalInvested:0};
  state.stocks[chosen.name].shares += qty;
  state.stocks[chosen.name].totalInvested += total;
  state.stockCeo.invested = (state.stockCeo.invested||0) + total;
  state.stockCeoBuys.push({name:chosen.name, qty:qty, price:price, total:total, year:currentDate().getFullYear()});
  if(state.stockCeoBuys.length > 200) state.stockCeoBuys = state.stockCeoBuys.slice(-200);
  var newPct = state.stocks[chosen.name].shares / (chosen.totalShares || 1e9) * 100;
  addLog("💹 CEO amenunua hisa za " + chosen.name + " (" + newPct.toFixed(1) + "%)", "gold");
}

function openCEOList(){
  var buttons = CEO_LIST.map(function(ceo){
    var isBiz = state.bizCeo && state.bizCeo.name === ceo.name, isStock = state.stockCeo && state.stockCeo.name === ceo.name, isMain = state.ceo && state.ceo.name === ceo.name;
    var status = isBiz?"✅B":(isStock?"✅H":(isMain?"✅M":""));
    return {label: "👤 " + ceo.name + "<br><span class='sub'>" + ceo.spec + " • R" + ceo.rating + " • " + ceo.age + "y • " + fmt(ceo.salary) + "/y " + (status||"") + "</span>", cls: status ? "green" : "", action: function(){ openCEOHire(ceo); }};
  });
  buttons.push(closeBtn());
  openModal("🌐 MaCEO Duniani", '<div class="info-box">Waajiri kwenye nafasi yoyote.</div>', buttons);
}
function openCEOHire(ceo){
  openModal("👤 " + ceo.name + "<br><span style='font-size:10px;color:var(--txt3)'>" + ceo.spec + " • R" + ceo.rating + " • " + ceo.age + "y<br>" + (ceo.bio||"") + "</span>", "", [
    {label:"👔 CEO Biashara — " + fmt(ceo.salary) + "/y", cls:"gold", action:function(){ if(state.bizCeo) state.bizCeoHistory.push({name:state.bizCeo.name, year:currentDate().getFullYear()}); state.bizCeo = {name:ceo.name, salary:ceo.salary, hired:currentDate().getFullYear(), started:0, upgraded:0, invested:0, active:true}; toast("👔"); renderAll(); closeModal(); }},
    {label:"💹 CEO Hisa — " + fmt(ceo.salary) + "/y", cls:"purple", action:function(){ if(state.stockCeo) state.stockCeoHistory.push({name:state.stockCeo.name, year:currentDate().getFullYear()}); state.stockCeo = {name:ceo.name, salary:ceo.salary, hired:currentDate().getFullYear(), invested:0, active:true}; toast("💹"); renderAll(); closeModal(); }},
    {label:"👑 CEO Mkuu — " + fmt(ceo.salary) + "/y", cls:"primary", action:function(){ if(state.ceo) state.ceoHistory.push({name:state.ceo.name, year:currentDate().getFullYear()}); state.ceo = {name:ceo.name, salary:ceo.salary, autoApproveAfrican:true, autoApproveForeign:false, minRate:0.18, hired:currentDate().getFullYear(), approved:0, active:true}; toast("👑"); renderAll(); closeModal(); }},
    closeBtn()
  ]);
}
function openCEOHistory(){
  var h = "";
  if(state.ceoHistory.length){ h += '<div class="tier-head">CEO Mkuu</div>'; state.ceoHistory.slice(-15).reverse().forEach(function(c){ h += '<div class="rel"><div class="ic-sm">👑</div><div class="info"><div class="name">' + c.name + '</div><div class="meta">' + c.year + '</div></div></div>'; }); }
  if(state.bizCeoHistory.length){ h += '<div class="tier-head">CEO Biashara</div>'; state.bizCeoHistory.slice(-15).reverse().forEach(function(c){ h += '<div class="rel"><div class="ic-sm">👔</div><div class="info"><div class="name">' + c.name + '</div><div class="meta">' + c.year + '</div></div></div>'; }); }
  if(state.stockCeoHistory.length){ h += '<div class="tier-head">CEO Hisa</div>'; state.stockCeoHistory.slice(-15).reverse().forEach(function(c){ h += '<div class="rel"><div class="ic-sm">💹</div><div class="info"><div class="name">' + c.name + '</div><div class="meta">' + c.year + '</div></div></div>'; }); }
  if(!h) h = '<div style="text-align:center;color:var(--txt3);padding:20px">Hakuna.</div>';
  openModal("📋 Historia ya MaCEO", h, [closeBtn()]);
}

function openAllLoans(){
  var h = '<div class="tier-head">📥 Inasubiri (' + state.pendingLoans.length + ')</div>';
  if(!state.pendingLoans.length) h += '<div style="text-align:center;color:var(--txt3);padding:10px">Hakuna.</div>';
  else state.pendingLoans.forEach(function(l){ h += '<div class="tier-row"><div><div class="cname">' + countryFlag(l.code) + ' ' + l.country + '</div><div class="cecon">' + (l.projectIcon||"🏗️") + ' ' + (l.projectName||"Mkopo") + ' • Riba ' + (l.rate*100).toFixed(1) + '% • Miaka ' + l.years + '</div></div><div class="cval" style="color:#fbbf24">' + fmt(l.amount) + '</div></div>'; });
  h += '<div class="tier-head">📤 Miradi ya Nchi (' + state.countryProjects.length + ')</div>';
  if(!state.countryProjects.length) h += '<div style="text-align:center;color:var(--txt3);padding:10px">Hakuna.</div>';
  else state.countryProjects.slice(-30).forEach(function(l){ var status = l.forgiven ? "🕊️" : (l.nationalized ? "🏴" : "🏗️"); h += '<div class="tier-row"><div><div class="cname">' + status + ' ' + l.icon + ' ' + l.name + ' — ' + countryFlag(l.code) + ' ' + l.country + '</div><div class="cecon">+' + fmt(l.income) + '/y • Miaka ' + l.yearsLeft + '</div></div><div class="cval" style="color:#22c55e">' + fmt(l.cost) + '</div></div>'; });
  h += '<div class="tier-head">💎 Mikopo kwa Matajiri (' + state.billionaireLoans.length + ')</div>';
  if(!state.billionaireLoans.length) h += '<div style="text-align:center;color:var(--txt3);padding:10px">Hakuna.</div>';
  else state.billionaireLoans.slice(-20).forEach(function(b){ var status = b.forgiven ? "🕊️" : (b.seized ? "⚔️" : "📋"); h += '<div class="tier-row"><div><div class="cname">' + status + ' ' + countryFlag(b.country) + ' ' + b.name + '</div><div class="cecon">Riba ' + (b.rate*100).toFixed(0) + '% • Miaka ' + b.yearsLeft + '</div></div><div class="cval" style="color:#22c55e">' + fmt(b.loan) + '</div></div>'; });
  openModal("📋 Mikopo Yote", h, [closeBtn()]);
}

function openBusiness(){ var buttons = BIZ.map(function(t){ var ok = t.cost <= state.money; return { label: (ok?"✅ ":"❌ ") + t.icon + " " + t.name + "<br><span class='sub'>+" + fmt(t.income) + "/y</span><span class='price'>" + fmt(t.cost) + "</span>", action: function(){ if(state.money < t.cost) return toast("Huna"); if(state.businesses.length >= 300) return toast("Kikomo"); state.money -= t.cost; state.businesses.push({name:t.name, icon:t.icon, cost:t.cost, income:t.income, staff:0, upgrades:0}); cachedIncomeTime = 0; toast("🏢 " + t.name); renderAll(); refreshModal(); } }; }); buttons.push(closeBtn()); openModal("🏢 Anzisha Biashara", "Bonyeza kuongeza — dirisha linabaki wazi", buttons); }
function openMyBusinesses(){
  var total = 0; state.businesses.forEach(function(b){ total += b.income * (1 + (b.staff||0)*.05) * (1 + (b.upgrades||0)*.15); });
  var h = '<div class="income-total"><div class="lbl">Jumla</div><div class="amount">' + fmt(total) + '</div><div class="period">kwa mwaka</div></div>';
  state.businesses.slice(-40).forEach(function(b, i){ var net = b.income * (1 + (b.staff||0)*.05) * (1 + (b.upgrades||0)*.15); var realIdx = state.businesses.length - Math.min(40, state.businesses.length) + i; h += '<div class="biz-card"><div class="head"><div class="ic-lg">' + b.icon + '</div><div class="title">' + b.name + (b.byCeo?' <span style="font-size:8.5px;color:var(--acc2)">CEO</span>':'') + '<br><span class="amount">+' + fmt(net) + '/y</span></div></div><div class="meta">👥 ' + (b.staff||0) + '/10 • 🚀 ' + (b.upgrades||0) + '/10</div><div class="btns"><button class="bbtn green" onclick="hireStaff(' + realIdx + ')">👥</button><button class="bbtn gold" onclick="upgradeBiz(' + realIdx + ')">🚀</button><button class="bbtn red" onclick="sellBiz(' + realIdx + ')">🔒</button></div></div>'; });
  if(!state.businesses.length) h += '<div style="text-align:center;color:var(--txt3);padding:20px">Huna biashara.</div>';
  openModal("📊 Biashara Zangu (" + state.businesses.length + ")", h, [closeBtn()]);
}
function hireStaff(i){ var b = state.businesses[i]; if(!b) return; if(state.money < 5e4) return toast("Huna"); if((b.staff||0) >= 10) return toast("Wamejaa"); state.money -= 5e4; b.staff = (b.staff||0) + 1; cachedIncomeTime = 0; toast("👥"); openMyBusinesses(); }
function upgradeBiz(i){ var b = state.businesses[i]; if(!b) return; if(state.money < 2e5) return toast("Huna"); if((b.upgrades||0) >= 10) return toast("Kikomo"); state.money -= 2e5; b.upgrades = (b.upgrades||0) + 1; cachedIncomeTime = 0; toast("🚀"); openMyBusinesses(); }
function sellBiz(i){ var b = state.businesses[i]; if(!b) return; var price = Math.floor(b.cost * 1.3); state.money += price; state.businesses.splice(i, 1); cachedIncomeTime = 0; toast("🔒"); openMyBusinesses(); }
function collectIncome(){ var t = totalIncome(); if(!t) return toast("Hakuna"); state.money += t; toast("💵 +" + fmt(t)); renderAll(); }
function openIntlBusiness(){ var buttons = INTL.map(function(b){ var ok = b.cost <= state.money; return { label: (ok?"✅ ":"❌ ") + b.icon + " " + b.name + "<br><span class='sub'>+" + fmt(b.income) + "/y</span><span class='price'>" + fmt(b.cost) + "</span>", action: function(){ if(state.money < b.cost) return toast("Huna"); if(state.intlBusinesses.length >= 150) return toast("Kikomo"); state.money -= b.cost; state.intlBusinesses.push({name:b.name, icon:b.icon, cost:b.cost, income:b.income}); cachedIncomeTime = 0; toast("🌍"); renderAll(); refreshModal(); } }; }); buttons.push(closeBtn()); openModal("🌍 Kimataifa (" + INTL.length + ")", "", buttons); }

function doStudy(){ state.smarts = clamp(state.smarts + rnd(3,7)); addLog("+Akili","good"); renderAll(); toast("📚"); }
function doExercise(){ state.fitness = clamp(state.fitness + rnd(3,7)); renderAll(); toast("💪"); }
function doMeditate(){ state.happiness = clamp(state.happiness + rnd(3,8)); renderAll(); toast("🧘"); }
function doHobby(){ state.happiness = clamp(state.happiness + rnd(5,12)); renderAll(); toast("🎨"); }
function doSocialize(){ state.happiness = clamp(state.happiness + rnd(5,10)); renderAll(); toast("🎉"); }
function familyTime(){ state.happiness = clamp(state.happiness + 5); renderAll(); toast("🏠"); }
function doParty(){ if(state.money < 5e4) return toast("Huna"); state.money -= 5e4; state.happiness = clamp(state.happiness + 15); renderAll(); toast("🎉"); }
function doVacation(){ if(state.money < 5e5) return toast("Huna"); state.money -= 5e5; state.happiness = clamp(state.happiness + 20); renderAll(); toast("✈️"); }
function doDating(){ if(state.age < 16) return toast("Bado"); if(state.money < 2e4) return toast("Huna"); state.money -= 2e4; state.happiness = clamp(state.happiness + 8); if(chance(.3)) findLove(); else toast("💘"); renderAll(); }
function doCharity(){ if(state.money < 1e5) return toast("Huna"); state.money -= 1e5; state.happiness = clamp(state.happiness + 10); state.fame += 5; renderAll(); toast("🤲"); }
function doGym(){ if(state.money < 1e4) return toast("Huna"); state.money -= 1e4; state.fitness = clamp(state.fitness + 8); renderAll(); toast("🏋️"); }
function doReadBook(){ state.smarts = clamp(state.smarts + rnd(2,5)); renderAll(); toast("📖"); }
function doSmoke(){ state.happiness = clamp(state.happiness + 3); state.smarts = clamp(state.smarts - 1); renderAll(); toast("🚬"); }
function doDrink(){ state.happiness = clamp(state.happiness + 7); state.smarts = clamp(state.smarts - 2); renderAll(); toast("🍺"); }
function doLottery(){ if(state.money < 1e3) return toast("Huna"); state.money -= 1e3; if(chance(.01)){ state.money += 1e7; toast("🎟️ +$10M!"); } else toast("😢"); renderAll(); }
function doTherapy(){ if(state.money < 5e4) return toast("Huna"); state.money -= 5e4; state.happiness = clamp(state.happiness + 15); renderAll(); toast("🛋️"); }
function doPet(){ if(state.money < 5e4) return toast("Huna"); state.money -= 5e4; state.happiness = clamp(state.happiness + 8); renderAll(); toast("🐕"); }
function doMusic(){ state.happiness = clamp(state.happiness + 6); renderAll(); toast("🎵"); }

function openSideJobs(){
  var jobs = [{n:"Uuzaji wa Barabarani", i:"🏪", m:2e4, inf:1},{n:"Kufundisha", i:"👨‍🏫", m:8e4, inf:3},{n:"Content", i:"📱", m:3e5, inf:5},{n:"Ushauri wa Biashara", i:"💼", m:2e6, inf:8},{n:"Uwekezaji wa Hisa", i:"📈", m:5e6, inf:5},{n:"Vitabu", i:"📚", m:4e5, inf:6},{n:"Muziki", i:"🎵", m:8e5, inf:7},{n:"Kufundisha Michezo", i:"⚽", m:6e5, inf:5},{n:"Kushauri Siasa", i:"🗳️", m:5e6, inf:12}];
  var buttons = jobs.map(function(j){ return { label: j.i + " " + j.n + "<br><span class='sub'>+" + fmt(j.m) + " • Ushawishi +" + j.inf + "</span>", action: function(){ state.money += j.m; state.influence.citizens = clamp(state.influence.citizens + j.inf * 0.5); state.influence.business = clamp(state.influence.business + j.inf * 0.3); state.fame += j.inf; toast("💼 +" + fmt(j.m)); renderAll(); closeModal(); } }; });
  buttons.push(closeBtn());
  openModal("💼 Kazi za Ziada", "Pesa: " + fmt(state.money), buttons);
}

function findLove(){
  if(state.age < 16) return toast("Bado"); if(state.partner) return toast("Una mpenzi");
  var g = state.gender === "male" ? "female" : "male";
  if(chance(.5)){ state.partner = {name:rn(g), gender:g, age:state.age + rnd(-3,3), relation:60, alive:true, married:false, icon:g === "male" ? "🧑" : "👩"}; toast("💕"); }
  renderAll();
}
function makeFriend(){
  var g = chance(.5) ? "male" : "female";
  state.relationships.push({name:rn(g), gender:g, role:"Rafiki", relation:60, age:state.age + rnd(-3,3), alive:true, icon:g === "male" ? "🧑" : "👩"});
  toast("🤝"); renderAll();
}
function openChildren(){
  openModal("👶 Watoto", "", [
    {label:"✅ Zaa 1", cls:"green", action:function(){ var g = chance(.5) ? "male" : "female"; state.children.push({name:rn(g), gender:g, age:0, relation:90, alive:true, icon:g === "female" ? "👧" : "👦"}); toast("👶"); renderAll(); closeModal(); }},
    closeBtn()
  ]);
}
function propose(){ if(!state.partner) return toast("Huna mpenzi"); if(chance(.75)){ state.partner.married = true; toast("💍"); } renderAll(); }

/* ==================== FAMILY (BitLife style) ==================== */
function openFamily(){
  var all = [];
  state.relationships.forEach(function(r, idx){
    all.push({name:r.name, role:r.role, age:r.age, relation:r.relation||50, alive:r.alive, icon:r.icon||"👤", idx:idx, type:"rel", gender:r.gender});
  });
  if(state.partner){
    all.push({name:state.partner.name, role:"Mpenzi" + (state.partner.married ? " (Mke/Mume)" : ""), age:state.partner.age, relation:state.partner.relation||70, alive:state.partner.alive, icon:"💕", type:"partner", gender:state.partner.gender});
  }
  state.children.forEach(function(c, idx){
    all.push({name:c.name, role:"Mtoto", age:c.age, relation:c.relation||80, alive:c.alive, icon:c.gender === "female" ? "👧" : "👦", idx:idx, type:"child", gender:c.gender});
  });
  var h = '<div class="info-box"><b>👥 Familia Yangu (' + all.length + ')</b><br>Bonyeza mtu kuona vitendo.</div>';
  if(!all.length) h += '<div style="text-align:center;color:var(--txt3);padding:20px">Hakuna mtu.</div>';
  all.forEach(function(p){
    var status = p.alive ? '' : ' <span style="color:#dc3545">💀 Amefariki</span>';
    var relColor = p.relation >= 70 ? "#22c55e" : (p.relation >= 40 ? "#fbbf24" : "#dc3545");
    h += '<div class="rel" onclick="openFamilyMember(\'' + p.type + '\',' + p.idx + ')"><div class="ic-sm">' + p.icon + '</div><div class="info"><div class="name">' + p.name + status + '</div><div class="meta">' + p.role + ' • Umri ' + p.age + ' • <span style="color:' + relColor + '">Mahusiano: ' + p.relation + '%</span></div></div></div>';
  });
  openModal("👥 Familia", h, [closeBtn()]);
}

function openFamilyMember(type, idx){
  var p = null;
  if(type === "rel"){ p = state.relationships[idx]; }
  else if(type === "partner"){ p = state.partner; }
  else if(type === "child"){ p = state.children[idx]; }
  if(!p) return;
  var h = '<div class="pgrid">' +
    '<div class="pstat purple"><div class="v" style="font-size:11px">' + (p.icon || "👤") + ' ' + p.name + '</div><div class="l">' + p.role + '</div></div>' +
    '<div class="pstat gold"><div class="v">' + p.age + '</div><div class="l">Umri</div></div>' +
    '<div class="pstat green"><div class="v">' + (p.relation||70) + '%</div><div class="l">Mahusiano</div></div>' +
    '<div class="pstat pink"><div class="v">' + (p.alive ? "Hai" : "Amefariki") + '</div><div class="l">Hali</div></div>' +
    '</div>';
  if(!p.alive) return openModal(p.name, h + '<div class="warn">Amefariki. Hauwezi kufanya naye.</div>', [closeBtn()]);
  var buttons = [
    {label:"🕐 Spend Time (Pamoja)", cls:"green", action:function(){
      var gain = rnd(3, 8);
      p.relation = clamp((p.relation||70) + gain);
      state.happiness = clamp(state.happiness + 5);
      addLog("🕐 Nilitoa muda kwa " + p.name + " (+" + gain + ")", "good");
      toast("+" + gain + "% kwa " + p.name);
      renderAll(); refreshModal();
    }},
    {label:"💬 Talk (Kuzungumza)", cls:"primary", action:function(){
      var gain = rnd(1, 5);
      p.relation = clamp((p.relation||70) + gain);
      addLog("💬 Nimezungumza na " + p.name, "good");
      toast("+" + gain + "%");
      renderAll(); refreshModal();
    }},
    {label:"🎁 Give Gift (Toa Zawadi)", cls:"gold", action:function(){
      var cost = Math.floor(Math.max(1000, state.money * 0.001));
      if(state.money < cost) return toast("Huna pesa za kutosha");
      state.money -= cost;
      var gain = rnd(5, 15);
      p.relation = clamp((p.relation||70) + gain);
      addLog("🎁 Nimetoa zawadi kwa " + p.name + " ($" + cost + ")", "good");
      toast("🎁 +" + gain + "% ( $" + cost + ")");
      renderAll(); refreshModal();
    }},
    {label:"💰 Ask for Money (Omba Pesa)", cls:"blue", action:function(){
      if(chance(.5)){ var amount = rnd(1000, 50000); if(state.money < amount) amount = state.money; state.money += amount; p.relation = clamp((p.relation||70) - 5); addLog("💰 Nimeomba pesa kwa " + p.name + " (+" + fmt(amount) + ")", "gold"); toast("+" + fmt(amount)); }
      else { p.relation = clamp((p.relation||70) - 10); toast("😢 Amekataa"); }
      renderAll(); refreshModal();
    }},
    {label:"🎭 Compliment (Sifa)", cls:"green", action:function(){
      var gain = rnd(2, 6); p.relation = clamp((p.relation||70) + gain);
      toast("🌟 +" + gain + "%");
      renderAll(); refreshModal();
    }},
    {label:"😠 Insult (Tusi)", cls:"red", action:function(){
      var loss = rnd(5, 15); p.relation = clamp((p.relation||70) - loss);
      addLog("😠 Nimetusi " + p.name, "bad");
      toast("-" + loss + "%");
      renderAll(); refreshModal();
    }},
    {label:"🎉 Party (Sherehe)", cls:"purple", action:function(){
      if(state.money < 5e4) return toast("Huna $50K");
      state.money -= 5e4;
      var gain = rnd(8, 18); p.relation = clamp((p.relation||70) + gain);
      state.happiness = clamp(state.happiness + 10);
      addLog("🎉 Sherehe na " + p.name, "good");
      toast("🎉 +" + gain + "%");
      renderAll(); refreshModal();
    }}
  ];
  if(type === "partner" && !state.partner.married){
    buttons.push({label:"💍 Propose (Pendekeza Ndoa)", cls:"pink", action:function(){ propose(); refreshModal(); }});
  }
  buttons.push(closeBtn());
  openModal((p.icon||"👤") + " " + p.name, h, buttons);
}

function openRelationships(){
  var friends = state.relationships.filter(function(r){ return r.role === "Rafiki"; });
  var h = '<div class="info-box"><b>👫 Marafiki (' + friends.length + ')</b></div>';
  if(!friends.length) h += '<div style="text-align:center;color:var(--txt3);padding:20px">Hakuna marafiki. Chagua "Rafiki Mpya".</div>';
  friends.forEach(function(r, i){
    var realIdx = state.relationships.indexOf(r);
    h += '<div class="rel" onclick="openFamilyMember(\'rel\',' + realIdx + ')"><div class="ic-sm">' + (r.icon || "🧑") + '</div><div class="info"><div class="name">' + r.name + '</div><div class="meta">Umri ' + r.age + ' • Mahusiano: ' + (r.relation||70) + '%</div></div></div>';
  });
  openModal("👫 Marafiki", h, [closeBtn()]);
}
function openFamilyTree(){
  var h = '<div class="info-box"><b>🌳 Ukoo Wangu</b></div>';
  h += '<div class="tier-head">Bibi na Babu</div>';
  state.relationships.filter(function(r){ return r.role === "Bibi" || r.role === "Babu"; }).forEach(function(r){ h += '<div class="rel"><div class="ic-sm">' + (r.icon||"👴") + '</div><div class="info"><div class="name">' + r.name + '</div><div class="meta">' + r.role + ' • Umri ' + r.age + '</div></div></div>'; });
  h += '<div class="tier-head">Wazazi</div>';
  state.relationships.filter(function(r){ return r.role === "Mama" || r.role === "Baba"; }).forEach(function(r){ h += '<div class="rel"><div class="ic-sm">' + (r.icon||"👤") + '</div><div class="info"><div class="name">' + r.name + '</div><div class="meta">' + r.role + ' • Umri ' + r.age + '</div></div></div>'; });
  h += '<div class="tier-head">Ndugu</div>';
  state.relationships.filter(function(r){ return r.role === "Kaka" || r.role === "Dada"; }).forEach(function(r){ h += '<div class="rel"><div class="ic-sm">' + (r.icon||"🧑") + '</div><div class="info"><div class="name">' + r.name + '</div><div class="meta">' + r.role + ' • Umri ' + r.age + '</div></div></div>'; });
  h += '<div class="tier-head">Mke/Mume</div>';
  if(state.partner) h += '<div class="rel"><div class="ic-sm">💕</div><div class="info"><div class="name">' + state.partner.name + '</div><div class="meta">Umri ' + state.partner.age + '</div></div></div>';
  h += '<div class="tier-head">Watoto</div>';
  state.children.forEach(function(c){ h += '<div class="rel"><div class="ic-sm">' + c.icon + '</div><div class="info"><div class="name">' + c.name + '</div><div class="meta">Umri ' + c.age + '</div></div></div>'; });
  openModal("🌳 Ukoo", h, [closeBtn()]);
}

function openCareer(){ openModal("💼 Kazi", "", [{label:"🔎 Tafuta Kazi", action:function(){ var j = [{name:"Mlinzi", sal:8e4}, {name:"Dereva", sal:15e4}, {name:"Mwalimu", sal:8e5}, {name:"Programu", sal:5e6}, {name:"Daktari", sal:25e6}]; var jj = pick(j); state.job = jj.name; state.salary = jj.sal; toast("💼"); renderAll(); closeModal(); }}, closeBtn()]); }
function openCareerPaths(){ var buttons = CAREERS.map(function(cp){ return { label: cp.icon + " " + cp.name + "<br><span class='sub'>Rank 0: " + cp.ranks[0] + " • " + fmt(cp.pays[0]) + "/y</span>", action: function(){ state.careerPath = cp.id; state.careerRank = 0; state.careerYears = 0; addLog("🌟 " + cp.name, "legend"); toast("🌟 " + cp.name); renderAll(); closeModal(); } }; }); buttons.push(closeBtn()); openModal("🌟 Njia Maalum", "Chagua njia ya kari:", buttons); }
function doWork(){ if(!state.job) return toast("Huna"); state.money += state.salary; toast("+"); renderAll(); }
function askRaise(){ if(!state.job) return toast("Huna"); if(chance(.5)){ state.salary += Math.floor(state.salary * .25); toast("📈"); } renderAll(); refreshModal(); }
function quitJob(){ state.job = null; state.salary = 0; toast("🚪"); renderAll(); refreshModal(); }

function openShop(){ var buttons = SHOP.map(function(item){ var ok = item.cost <= state.money; return { label: (ok?"✅ ":"❌ ") + item.icon + " " + item.name + "<span class='price'>" + fmt(item.cost) + "</span>", action: function(){ if(state.money < item.cost) return toast("Huna"); state.money -= item.cost; if(state.inventory.length < 200) state.inventory.push(item.name); state.happiness = clamp(state.happiness + 5); toast(item.icon + " " + item.name); renderAll(); refreshModal(); } }; }); buttons.push(closeBtn()); openModal("🛒 Duka", "Dirisha linabaki wazi", buttons); }
function openRealEstate(){ var buttons = REALTY.map(function(r){ var ok = r.price <= state.money; return { label: (ok?"✅ ":"❌ ") + r.icon + " " + r.name + "<br><span class='sub'>Kodi: " + fmt(r.rent) + "/y</span><span class='price'>" + fmt(r.price) + "</span>", action: function(){ if(state.money < r.price) return toast("Huna"); if(state.realEstate.length >= 150) return toast("Kikomo"); state.money -= r.price; state.realEstate.push({name:r.name, icon:r.icon, price:r.price, rent:r.rent}); cachedIncomeTime = 0; toast("🏘️"); renderAll(); refreshModal(); } }; }); buttons.push(closeBtn()); openModal("🏘️ Majengo", "", buttons); }

function openOil(){
  var h = '<div class="info-box"><b>🛢️ Mafuta & Gesi</b><br>Wekeza kwenye visima vya mafuta na gesi.</div>';
  var buttons = OIL.map(function(w){ var ok = w.cost <= state.money; return { label: (ok?"✅ ":"❌ ") + w.icon + " " + w.name + "<br><span class='sub'>+" + fmt(w.income) + "/y</span><span class='price'>" + fmt(w.cost) + "</span>", action: function(){ if(state.money < w.cost) return toast("Huna"); if(state.oilWells.length >= 100) return toast("Kikomo"); state.money -= w.cost; state.oilWells.push({name:w.name, icon:w.icon, income:w.income, cost:w.cost}); cachedIncomeTime = 0; toast("🛢️"); renderAll(); refreshModal(); } }; });
  buttons.push({label:"🔥 Visima vya Gesi", cls:"blue", action:function(){ openGasWells(); }});
  buttons.push(closeBtn());
  openModal("🛢️ Mafuta & Gesi", h, buttons);
}
function openGasWells(){
  var buttons = GAS.map(function(w){ var ok = w.cost <= state.money; return { label: (ok?"✅ ":"❌ ") + w.icon + " " + w.name + "<br><span class='sub'>+" + fmt(w.income) + "/y</span><span class='price'>" + fmt(w.cost) + "</span>", action: function(){ if(state.money < w.cost) return toast("Huna"); if(state.gasWells.length >= 100) return toast("Kikomo"); state.money -= w.cost; state.gasWells.push({name:w.name, icon:w.icon, income:w.income, cost:w.cost}); cachedIncomeTime = 0; toast("🔥"); renderAll(); refreshModal(); } }; });
  buttons.push(closeBtn());
  openModal("🔥 Visima vya Gesi", "", buttons);
}
function openMining(){ var buttons = MINING.map(function(m){ var ok = m.cost <= state.money; return { label: (ok?"✅ ":"❌ ") + m.icon + " " + m.name + "<br><span class='sub'>+" + fmt(m.income) + "/y</span><span class='price'>" + fmt(m.cost) + "</span>", action: function(){ if(state.money < m.cost) return toast("Huna"); if(state.miningOps.length >= 100) return toast("Kikomo"); state.money -= m.cost; state.miningOps.push({name:m.name, icon:m.icon, income:m.income}); cachedIncomeTime = 0; toast("⛏️"); renderAll(); refreshModal(); } }; }); buttons.push(closeBtn()); openModal("⛏️ Madini", "", buttons); }

function openNuclear(){
  var h = '<div class="info-box"><b>☢️ Nishati ya Nyuklia</b><br>Tengeneza nishati, silaha, na uza kwa nchi.</div>';
  var myPlants = state.nuclearPlants || [];
  var myWeapons = state.nuclearWeapons || [];
  h += '<div class="pgrid"><div class="pstat purple"><div class="v">' + myPlants.length + '</div><div class="l">Vituo</div></div><div class="pstat red"><div class="v">' + myWeapons.length + '</div><div class="l">Silaha</div></div></div>';
  var buttons = [];
  NUCLEAR.forEach(function(np){ var ok = np.cost <= state.money; buttons.push({ label: (ok?"✅ ":"❌ ") + np.icon + " " + np.name + "<br><span class='sub'>+" + fmt(np.income) + "/y • " + np.power + "MW</span><span class='price'>" + fmt(np.cost) + "</span>", action: function(){ if(state.money < np.cost) return toast("Huna"); if(state.nuclearPlants.length >= 50) return toast("Kikomo"); state.money -= np.cost; state.nuclearPlants.push({name:np.name, icon:np.icon, income:np.income, power:np.power, cost:np.cost}); cachedIncomeTime = 0; toast("☢️"); renderAll(); refreshModal(); } }); });
  buttons.push({label:"📋 Vituo Vyangu (" + myPlants.length + ")", cls:"green", action:function(){ var list = state.nuclearPlants || []; if(!list.length) return openModal("☢️","Hakuna.",[closeBtn()]); var hh = ""; list.forEach(function(x){ hh += '<div class="rel"><div class="ic-sm">' + x.icon + '</div><div class="info"><div class="name">' + x.name + '</div><div class="meta">+' + fmt(x.income) + '/y • ' + x.power + 'MW</div></div></div>'; }); openModal("☢️ Vituo Vyangu", hh, [closeBtn()]); }});
  buttons.push({label:"💣 Silaha Zangu (" + myWeapons.length + ")", cls:"red", action:function(){
    var list = state.nuclearWeapons || [];
    if(!list.length) return openModal("💣 Silaha Zangu", "Hauna silaha. Tengeneza kwa $500B.", [closeBtn()]);
    var hh = '<div class="info-box">Silaha zako: <b>' + list.length + '</b></div>';
    list.forEach(function(x, i){ hh += '<div class="rel"><div class="ic-sm">☢️</div><div class="info"><div class="name">' + x.name + ' #' + (i+1) + '</div><div class="meta">Nguvu: ' + x.power + ' • Thamani: $1T</div></div></div>'; });
    openModal("💣 Silaha Zangu", hh, [closeBtn()]);
  }});
  if(myPlants.length > 0){
    buttons.push({label:"⚛️ Tengeneza Silaha ($500B)", cls:"red", action:function(){ if(state.money < 5e11) return toast("Huna $500B"); state.money -= 5e11; if(!state.nuclearWeapons) state.nuclearWeapons = []; state.nuclearWeapons.push({name:"Nuclear Bomb", power:100}); toast("⚛️ +1"); renderAll(); refreshModal(); }});
    if(myWeapons.length > 0){ buttons.push({label:"🌍 Uza Silaha ($1T)", cls:"gold", action:function(){ var cn = pick(COUNTRIES); var price = 1e12; state.nuclearWeapons.pop(); state.money += price; addLog("☢️ Umeuza silaha kwa " + cn[1] + "!", "legend"); toast("+ " + fmt(price)); renderAll(); refreshModal(); }}); }
  }
  buttons.push(closeBtn());
  openModal("☢️ Nyuklia", h, buttons);
}

function openMyBank(){
  if(state.bankCapital === 0){ return openModal("🏦 Fungua Benki", "Mtaji: $1B", [{label:"🏦 Fungua ($1B)", cls:"gold", action:function(){ if(state.money < 1e9) return toast("Huna"); state.money -= 1e9; state.bankCapital = 1e9; state.bankClientCount = 0; state.bankTotalLent = 0; toast("🏦"); renderAll(); closeModal(); }}, closeBtn()]); }
  var cap = Math.floor(state.bankCapital * .10);
  var h = '<div class="pgrid"><div class="pstat"><div class="v">' + fmt(state.bankCapital) + '</div><div class="l">Mtaji</div></div><div class="pstat green"><div class="v">' + fmt(cap) + '</div><div class="l">Faida/y</div></div><div class="pstat gold"><div class="v">' + (state.bankClientCount||0).toLocaleString() + '</div><div class="l">Wateja</div></div><div class="pstat red"><div class="v">' + fmt(state.bankTotalLent||0) + '</div><div class="l">Wamekopa</div></div></div>';
  openModal("🏦 Benki", h, [
    {label:"💰 Riba", cls:"gold", action:function(){ openModal("Riba","",[{label:"5%", action:function(){ state.bankInterestRate = .05; closeModal(); }},{label:"10%", action:function(){ state.bankInterestRate = .10; closeModal(); }},{label:"15%", action:function(){ state.bankInterestRate = .15; closeModal(); }},{label:"20%", action:function(){ state.bankInterestRate = .20; closeModal(); }},closeBtn()]); }},
    {label:"💵 Ongeza Mtaji", cls:"primary", action:function(){ openModal("Ongeza Mtaji","",[{label:"$1B", action:function(){ if(state.money < 1e9) return toast("Huna"); state.money -= 1e9; state.bankCapital += 1e9; closeModal(); }},{label:"$100B", action:function(){ if(state.money < 1e11) return toast("Huna"); state.money -= 1e11; state.bankCapital += 1e11; closeModal(); }},{label:"$1T", action:function(){ if(state.money < 1e12) return toast("Huna"); state.money -= 1e12; state.bankCapital += 1e12; closeModal(); }},{label:"$10T", action:function(){ if(state.money < 1e13) return toast("Huna"); state.money -= 1e13; state.bankCapital += 1e13; closeModal(); }},{label:"$50T", cls:"gold", action:function(){ if(state.money < 5e13) return toast("Huna"); state.money -= 5e13; state.bankCapital += 5e13; closeModal(); }},{label:"$100T", cls:"gold", action:function(){ if(state.money < 1e14) return toast("Huna"); state.money -= 1e14; state.bankCapital += 1e14; closeModal(); }},closeBtn()]); }},
    {label:"💸 Toa Faida", cls:"green", action:function(){ if(!cap) return toast("Hakuna"); state.money += cap; toast("+" + fmt(cap)); renderAll(); closeModal(); }},
    closeBtn()
  ]);
}

function openInvestments(){
  var sorted = STOCKS.slice().sort(function(a,b){ return a.name.localeCompare(b.name); });
  var h = '<div class="info-box">Bei inabadilika kila sekunde • Umiliki wa juu: 100%</div>';
  var buttons = sorted.map(function(s){ var holding = state.stocks[s.name]; var shares = holding ? holding.shares : 0; var price = stockPrice(s); var pct = ((price - s.price) / s.price * 100).toFixed(1); var color = pct >= 0 ? "#22c55e" : "#dc3545"; var totalS = s.totalShares || 1e9; var own = (shares / totalS * 100).toFixed(3); return { label: s.icon + " " + s.name + "<br><span class='sub'>$" + price + " <span style='color:" + color + "'>(" + (pct>=0?"+":"") + pct + "%)</span> • Div " + (s.dividend*100).toFixed(1) + "%</span><span class='price'>" + shares.toLocaleString() + " (" + own + "%)</span>", action: function(){ buyStock(s); } }; });
  buttons.push(closeBtn());
  openModal("📈 Soko la Hisa", h, buttons);
}
function buyStock(s){
  var price = stockPrice(s); var holding = state.stocks[s.name]; var owned = holding ? holding.shares : 0;
  var totalS = s.totalShares || 1e9;
  var maxBuy = totalS - owned;
  var opts = [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000].filter(function(n){ return n <= maxBuy && price*n <= state.money; });
  if(!opts.length) return toast("Huna pesa au kikomo");
  var buttons = opts.map(function(qty){ var total = price * qty; return { label: "Nunua " + qty.toLocaleString() + "<br><span class='price'>$" + total.toLocaleString() + "</span>", action: function(){ if(state.money < total) return toast("Huna"); state.money -= total; if(!state.stocks[s.name]) state.stocks[s.name] = {shares:0, totalInvested:0}; state.stocks[s.name].shares += qty; state.stocks[s.name].totalInvested += total; var newOwn = (state.stocks[s.name].shares / totalS * 100); toast("📈 +" + qty.toLocaleString() + " (" + newOwn.toFixed(2) + "%)"); renderAll(); refreshModal(); } }; });
  buttons.push(closeBtn());
  openModal(s.icon + " " + s.name, "Bei: $" + price + "<br>Umiliki: " + owned.toLocaleString() + " (" + (owned/totalS*100).toFixed(3) + "%)<br>Growth: " + (s.growth*100).toFixed(0) + "%", buttons);
}

function openFootball(){ var buttons = TEAMS.map(function(t){ var shares = state.teamShares[t.name] || 0; var pricePer = Math.floor(t.price / 100); var ok = pricePer <= state.money; return { label: (ok?"✅ ":"❌ ") + t.logo + " " + t.name + " " + t.country + "<br><span class='sub'>" + shares + "% • " + t.league + " • " + t.founded + "</span><span class='price'>1% = " + fmt(pricePer) + "</span>", action: function(){ buyTeam(t); } }; }); buttons.push(closeBtn()); openModal("⚽ Timu za Mpira (" + TEAMS.length + ")", "Bonyeza timu kuona taarifa", buttons); }
function buyTeam(t){
  var current = state.teamShares[t.name] || 0; if(current >= 100) return toast("100%!");
  var pricePer = Math.floor(t.price / 100);
  var opts = [1, 5, 10, 25, 50, 75-current, 100-current].filter(function(n){ return n > 0 && n <= 100 - current && pricePer*n <= state.money; });
  if(!opts.length) return toast("Huna pesa");
  var buttons = opts.map(function(n){ var cost = pricePer * n; return { label: "Nunua " + n + "%<span class='price'>" + fmt(cost) + "</span>", action: function(){ if(state.money < cost) return toast("Huna"); state.money -= cost; state.teamShares[t.name] = current + n; if(state.teamShares[t.name] >= 75 && !state.clubs.some(function(c){ return c.name === t.name; })){ state.clubs.push({name:t.name, icon:t.logo, income:t.income, league:t.league, trophies:0, seasons:0}); toast("🏆 Umemiliki!"); } else toast("+"); cachedIncomeTime = 0; renderAll(); closeModal(); } }; });
  buttons.push(closeBtn());
  openModal(t.logo + " " + t.name, "Umiliki: " + current + "%<br>Ligi: " + t.league + "<br>Ilianzishwa: " + t.founded + "<br>Stadium: " + t.stadium + " (" + t.cap.toLocaleString() + ")<br>Historia: " + t.hist + "<br>Mapato: " + fmt(t.income) + "/y", buttons);
}
function openMyClubs(){ if(!state.clubs.length) return openModal("🏆 Klabu Zangu", "Nunua 75%+ ili kumiliki!", [closeBtn()]); var h = ""; state.clubs.forEach(function(c){ h += '<div class="biz-card"><div class="head"><div class="ic-lg">' + c.icon + '</div><div class="title">' + c.name + '<br><span class="amount">+' + fmt(c.income) + '/y</span></div></div><div class="meta">🏆 ' + (c.trophies||0) + ' • Msimu ' + (c.seasons||0) + ' • ' + c.league + '</div></div>'; }); openModal("🏆 Klabu Zangu", h, [closeBtn()]); }
function openLeague(){ var buttons = LEAGUES.map(function(lg){ return {label:"🏆 " + lg, action:function(){ showLeague(lg); }}; }); buttons.push(closeBtn()); openModal("📊 Ligi", "Chagua ligi kuona matokeo", buttons); }
function showLeague(lg){ var hist = state.leagueHistory[lg] || []; if(!hist.length) return openModal("🏆 " + lg, "Hakuna bado. Wasubiri msimu ujao.", [closeBtn()]); var last = hist[hist.length-1]; var h = '<div class="info-box">🏆 Bingwa: <b>' + last.champion + '</b> • Msimu: ' + last.season + '</div>'; h += '<div class="league"><div class="row-head"><div>#</div><div>Timu</div><div>P</div><div>W</div><div>D</div><div>L</div><div>Pts</div></div>'; last.standings.forEach(function(t, i){ var color = i < 3 ? "#22c55e" : (i >= last.standings.length-2 ? "#dc3545" : "var(--txt2)"); h += '<div class="row-item" style="color:' + color + '"><div>' + (i+1) + '</div><div>' + t.name + '</div><div>' + t.p + '</div><div>' + t.w + '</div><div>' + t.d + '</div><div>' + t.l + '</div><div style="font-weight:900">' + t.pts + '</div></div>'; }); h += '</div>'; openModal("🏆 " + lg, h, [closeBtn()]); }
function openLeagueHistory(){ var buttons = LEAGUES.map(function(lg){ return {label:"🏆 " + lg, action:function(){ showLeagueHistory(lg); }}; }); buttons.push(closeBtn()); openModal("📜 Historia ya Ligi", "Chagua ligi kuona washindi wa misimu yote", buttons); }
function showLeagueHistory(lg){ var hist = state.leagueHistory[lg] || []; if(!hist.length) return openModal("📜 " + lg, "Hakuna bado.", [closeBtn()]); var h = '<div class="tier-head">Washindi wa ' + lg + '</div>'; hist.slice().reverse().forEach(function(rec){ h += '<div class="rel" onclick="showSeasonDetails(\'' + lg.replace(/'/g, "") + '\',\'' + rec.season + '\')" style="cursor:pointer"><div class="ic-sm">🏆</div><div class="info"><div class="name">' + rec.champion + '</div><div class="meta">Msimu ' + rec.season + ' (bonyeza kuona jedwali)</div></div></div>'; }); openModal("📜 " + lg, h, [closeBtn()]); }
function showSeasonDetails(lg, season){ var hist = state.leagueHistory[lg] || []; var rec = null; for(var i=0; i<hist.length; i++) if(hist[i].season === season) rec = hist[i]; if(!rec) return; var h = '<div class="info-box">🏆 Bingwa: <b>' + rec.champion + '</b> • ' + season + '</div>'; h += '<div class="league"><div class="row-head"><div>#</div><div>Timu</div><div>P</div><div>W</div><div>D</div><div>L</div><div>Pts</div></div>'; rec.standings.forEach(function(t, i){ h += '<div class="row-item"><div>' + (i+1) + '</div><div>' + t.name + '</div><div>' + t.p + '</div><div>' + t.w + '</div><div>' + t.d + '</div><div>' + t.l + '</div><div style="font-weight:900">' + t.pts + '</div></div>'; }); h += '</div>'; openModal("🏆 " + lg + " " + season, h, [closeBtn()]); }
function openLeagueSponsor(){
  var my = state.leagueSponsors || [];
  var h = '<div class="info-box">Dhamiana ligi ili kupata mapato. Mkataba ni miaka 3.</div>';
  if(my.length) h += '<div class="ok">Unadhamini: ' + my.map(function(s){ return s.name + ' (' + s.yearsLeft + 'y)'; }).join(", ") + '</div>';
  var sponsors = [{name:"Ligi Kuu TZ", cost:1e8, income:2e7},{name:"La Liga", cost:1e10, income:2e9},{name:"EPL", cost:2e10, income:4e9},{name:"Champions League", cost:5e10, income:1e10}];
  var buttons = sponsors.map(function(s){ var owned = my.some(function(x){ return x.name === s.name; }); if(owned) return { label:"🚫 Sitisha " + s.name, cls:"red", action: function(){ confirmModal("Sitisha", "Kusitisha mkataba wa " + s.name + "?", function(){ var idx = -1; for(var i=0; i<my.length; i++) if(my[i].name === s.name){ idx = i; break; } if(idx >= 0) my.splice(idx, 1); toast("Ime sitishwa"); cachedIncomeTime = 0; renderAll(); closeModal(); }); } }; var ok = s.cost <= state.money; return { label: (ok?"💰 ":"❌ ") + s.name + "<br><span class='sub'>+" + fmt(s.income) + "/y • Mkataba 3y</span><span class='price'>" + fmt(s.cost) + "</span>", action: function(){ if(state.money < s.cost) return toast("Huna"); state.money -= s.cost; state.leagueSponsors.push({name:s.name, cost:s.cost, income:s.income, yearsLeft:3}); cachedIncomeTime = 0; toast("💰"); renderAll(); refreshModal(); } }; });
  buttons.push(closeBtn());
  openModal("💰 Dhamana ya Ligi", h, buttons);
}
function openMyFootballInv(){ var keys = Object.keys(state.teamShares); if(!keys.length) return openModal("💼 Uwekezaji", "Huna hisa za timu.", [closeBtn()]); var h = ""; keys.forEach(function(name){ var shares = state.teamShares[name]; var t = null; for(var i=0; i<TEAMS.length; i++) if(TEAMS[i].name === name) t = TEAMS[i]; if(t){ var val = Math.floor(t.price * shares / 100); h += '<div class="biz-card"><div class="head"><div class="ic-lg">' + t.logo + '</div><div class="title">' + t.name + ' ' + shares + '%<br><span class="amount">' + fmt(val) + '</span></div></div></div>'; } }); openModal("💼 Uwekezaji", h, [closeBtn()]); }

function playSlots(){ openModal("🎰 Slots", "", [{label:"$1M → $5M", action:function(){ gamble(1e6, 5e6, .40); }},{label:"$100M → $1B", action:function(){ gamble(1e8, 1e9, .20); }},{label:"$1B → $50B", action:function(){ gamble(1e9, 5e10, .10); }},{label:"$100B → $1T", action:function(){ gamble(1e11, 1e12, .05); }},{label:"$1T → $10T", action:function(){ gamble(1e12, 1e13, .02); }},{label:"$10T → $100T", action:function(){ gamble(1e13, 1e14, .01); }},closeBtn()]); }
function playRoulette(){ openModal("🎡 Roulette", "", [{label:"🔴 Red ×2", action:function(){ gamble(1e7, 2e7, .49); }},{label:"⚫ Black ×2", action:function(){ gamble(1e7, 2e7, .49); }},{label:"🟢 Green ×36", action:function(){ gamble(1e8, 3.6e9, .027); }},{label:"💎 Silver ×10", action:function(){ gamble(1e10, 1e11, .10); }},{label:"💠 Platinum ×5", action:function(){ gamble(1e12, 5e12, .20); }},closeBtn()]); }
function playBlackjack(){ openModal("🃏 Blackjack", "", [{label:"$10M", action:function(){ gamble(1e7, 2e7, .48); }},{label:"$1B", action:function(){ gamble(1e9, 2e9, .48); }},{label:"$100B", action:function(){ gamble(1e11, 2e11, .48); }},{label:"$1T", action:function(){ gamble(1e12, 2e12, .48); }},{label:"$10T", action:function(){ gamble(1e13, 2e13, .48); }},closeBtn()]); }
function playBahati(){ openModal("🎲 Bahati", "", [{label:"$10K → $1M", action:function(){ gamble(1e4, 1e6, .30); }},{label:"$10M → $1B", action:function(){ gamble(1e7, 1e9, .20); }},{label:"$1B → $100B", action:function(){ gamble(1e9, 1e11, .10); }},{label:"$100B → $10T", action:function(){ gamble(1e11, 1e13, .03); }},{label:"$1T → $50T", action:function(){ gamble(1e12, 5e13, .02); }},closeBtn()]); }
function playDice(){ openModal("🎲 Dice", "", [{label:"🎲 Chini ya 7 (×2)", action:function(){ gamble(1e8, 2e8, .49); }},{label:"🎲 Juu ya 7 (×2)", action:function(){ gamble(1e8, 2e8, .49); }},{label:"🎲 Sawa 7 (×6)", action:function(){ gamble(1e9, 6e9, .166); }},{label:"🎲 Double 6 (×36)", action:function(){ gamble(1e9, 3.6e10, .027); }},closeBtn()]); }
function gamble(bet, win, odds){ if(state.money < bet) return toast("Huna"); state.money -= bet; if(!state.casinoLossStreak) state.casinoLossStreak = 0; if(state.casinoLossStreak >= 2 || chance(odds)){ state.money += win; state.stats.casinoWins = (state.stats.casinoWins||0) + 1; state.casinoLossStreak = 0; toast("🎉 +" + fmt(win)); } else { state.stats.casinoLosses = (state.stats.casinoLosses||0) + 1; state.casinoLossStreak++; toast("😢"); } renderAll(); refreshModal(); }
function openSportsBet(){ var matches = ["Simba vs Yanga", "Real Madrid vs Barcelona", "Man Utd vs Liverpool", "Bayern vs Dortmund"]; var m = pick(matches); var o = (1.5 + Math.random()*3).toFixed(2); openModal("🏈 Sport", "<b>" + m + "</b> Odds " + o, [{label:"$1M", action:function(){ gamble(1e6, Math.floor(1e6 * parseFloat(o)), .5/parseFloat(o)); }},{label:"$1B", action:function(){ gamble(1e9, Math.floor(1e9 * parseFloat(o)), .5/parseFloat(o)); }},{label:"$1T", action:function(){ gamble(1e12, Math.floor(1e12 * parseFloat(o)), .5/parseFloat(o)); }},closeBtn()]); }
function openCasinoHistory(){ var w = state.stats.casinoWins || 0; var l = state.stats.casinoLosses || 0; var h = '<div class="pgrid"><div class="pstat green"><div class="v">' + w + '</div><div class="l">Ushindi</div></div><div class="pstat red"><div class="v">' + l + '</div><div class="l">Hasara</div></div></div>'; openModal("📜 Casino", h, [closeBtn()]); }

function openNotifications(){ var list = state.notifications || []; if(!list.length) return openModal("🔔", "Hakuna.", [closeBtn()]); var h = ""; list.slice(-20).reverse().forEach(function(n){ h += '<div class="rel ' + (n.read ? '' : 'unread') + '"><div class="ic-sm">' + (n.icon||"📢") + '</div><div class="info"><div class="name">' + n.title + (n.read ? " ✅" : " 🔴") + '</div><div class="meta">' + n.text + '</div></div></div>'; }); openModal("🔔 (" + list.length + ")", h, [{label:"✅ Soma Zote", cls:"green", action:function(){ state.notifications.forEach(function(n){ n.read = true; }); updateBell(); refreshModal(); }},{label:"🗑️ Futa", cls:"red", action:function(){ state.notifications = []; updateBell(); closeModal(); }},closeBtn()]); }
function triggerEvent(ev){
  if(!state || !state.alive) return;
  var container = $("eventContainer"); var popup = document.createElement("div"); popup.className = "event-popup";
  var btnsHtml = ""; (ev.choices||[]).forEach(function(c, i){ btnsHtml += '<button class="ep-btn ' + (c.cls||"") + '" data-idx="' + i + '">' + c.text + '</button>'; });
  if(!ev.choices) btnsHtml = '<button class="ep-btn green" data-idx="-1">✅</button>';
  popup.innerHTML = '<div class="ep-title">' + ev.title + '</div><div class="ep-text">' + ev.text + '</div><div class="ep-btns">' + btnsHtml + '</div>';
  container.appendChild(popup);
  var resolved = false;
  var timer = setTimeout(function(){ if(resolved) return; resolved = true; popup.remove(); state.notifications.push({icon:ev.icon||"📢", title:ev.title, text:ev.text, time:fmtDate(currentDate()), read:false}); if(state.notifications.length > 30) state.notifications.shift(); updateBell(); }, 8000);
  popup.querySelectorAll(".ep-btn").forEach(function(btn){ btn.onclick = function(){ if(resolved) return; resolved = true; clearTimeout(timer); popup.remove(); var idx = parseInt(btn.getAttribute("data-idx")); if(idx >= 0 && ev.choices && ev.choices[idx] && ev.choices[idx].eff){ try{ ev.choices[idx].eff(); }catch(e){} renderAll(); } }; });
}

var _countrySort = "gdp"; var _countryDir = "desc";
function openCountryRanking(){
  var hh = '<div class="sort-bar"><button class="' + (_countrySort === "gdp" ? "active" : "") + '" onclick="_countrySort=\'gdp\';openCountryRanking()">💰 GDP</button><button class="' + (_countrySort === "pop" ? "active" : "") + '" onclick="_countrySort=\'pop\';openCountryRanking()">👥 Idadi</button><button class="' + (_countrySort === "corr" ? "active" : "") + '" onclick="_countrySort=\'corr\';openCountryRanking()">🚨 Rushwa</button><button onclick="_countryDir = _countryDir === \'asc\' ? \'desc\' : \'asc\';openCountryRanking()" style="background:var(--grb);color:#fff;border-color:transparent">⇅ ' + (_countryDir === "desc" ? "▼" : "▲") + '</button></div>';
  var sorted = COUNTRIES.slice(); var dir = _countryDir === "desc" ? -1 : 1;
  if(_countrySort === "gdp") sorted.sort(function(a,b){ return dir * (liveOf(b[0]).gdp - liveOf(a[0]).gdp); });
  else if(_countrySort === "pop") sorted.sort(function(a,b){ return dir * (liveOf(b[0]).pop - liveOf(a[0]).pop); });
  else sorted.sort(function(a,b){ return dir * (liveOf(b[0]).corr - liveOf(a[0]).corr); });
  var top = sorted.slice(0, 40); var h = hh;
  top.forEach(function(c, idx){ var mine = c[0] === state.country ? " mine" : ""; var lv = liveOf(c[0]); var label = _countrySort === "gdp" ? ("$" + lv.gdp.toFixed(1) + "B") : (_countrySort === "pop" ? (lv.pop.toFixed(1) + "M") : (lv.corr.toFixed(0))); h += '<div class="tier-row' + mine + '" onclick="showCountryDetails(\'' + c[0] + '\')"><div><div class="cname">' + countryFlag(c[0]) + ' #' + (idx+1) + ' ' + c[1] + '</div><div class="cecon">Uchumi: E' + lv.econ + ' • Mfumuko: ' + lv.infl.toFixed(1) + '%</div></div><div class="cval">' + label + '</div></div>'; });
  openModal("🌐 Nchi kwa Vigezo", h, [{label:"🏆 Nchi Yangu", cls:"green", action:function(){ showCountryDetails(state.country); }},closeBtn()]);
}
function showCountryDetails(code){ var c = countryMap[code]; if(!c) return; var lv = liveOf(code); var h = '<div class="pgrid"><div class="pstat purple"><div class="v" style="font-size:11px">' + countryFlag(code) + ' ' + c[1] + '</div><div class="l">Nchi</div></div><div class="pstat green"><div class="v">$' + lv.gdp.toFixed(1) + 'B</div><div class="l">GDP</div></div><div class="pstat pink"><div class="v">' + lv.pop.toFixed(1) + 'M</div><div class="l">Idadi</div></div><div class="pstat red"><div class="v">' + lv.corr.toFixed(0) + '</div><div class="l">Rushwa</div></div><div class="pstat"><div class="v">' + lv.infl.toFixed(1) + '%</div><div class="l">Mfumuko</div></div><div class="pstat blue"><div class="v">E' + lv.econ + '</div><div class="l">Uchumi</div></div></div>'; openModal("🌐 " + c[1], h, [{label:"🏗️ Wekeza kwenye Mradi", cls:"green", action:function(){ openInvestInCountry(code); }},{label:"🎁 Msaada", cls:"purple", action:function(){ openAidTo(code); }},closeBtn()]); }
function openInvestInCountry(code){
  var c = countryMap[code]; if(!c) return;
  var h = '<div class="info-box">Chagua mradi wa kuwekeza nchini ' + c[1] + '.</div>';
  var buttons = COUNTRY_PROJECTS.map(function(p){ var ok = p.cost <= state.money; return { label: (ok?"✅ ":"❌ ") + p.icon + " " + p.name + "<br><span class='sub'>GDP +" + p.gdpBoost + "B • +" + fmt(p.income) + "/y • " + p.years + "y</span><span class='price'>" + fmt(p.cost) + "</span>", cls: ok ? "primary" : "red", action: function(){ if(state.money < p.cost) return toast("Huna"); state.money -= p.cost; state.countryProjects.push({country:c[1], code:code, name:p.name, icon:p.icon, cost:p.cost, income:p.income, gdpBoost:p.gdpBoost, yearsLeft:p.years, rate:0.10, forgiven:false, nationalized:false}); var lv = liveOf(code); if(lv){ lv.gdp = Math.max(1, lv.gdp + p.gdpBoost); lv.corr = Math.max(0, lv.corr - 1); } cachedIncomeTime = 0; addLog("🏗️ Umewekeza " + p.name + " nchini " + c[1], "legend"); toast("🏗️ " + p.name); renderAll(); refreshModal(); } }; });
  buttons.push(closeBtn());
  openModal("🏗️ Wekeza Nchini " + c[1], h, buttons);
}
function openAidTo(code){ var c = countryMap[code]; if(!c) return; var amounts = [1e9, 5e9, 1e10, 5e10, 1e11]; var buttons = amounts.map(function(a){ var ok = a <= state.money; return { label: (ok?"🎁 ":"❌ ") + fmt(a), action: function(){ if(state.money < a) return toast("Huna"); state.money -= a; var lv = liveOf(code); lv.corr = Math.max(0, lv.corr - 3); lv.gdp += 2; toast("🎁"); renderAll(); closeModal(); } }; }); buttons.push(closeBtn()); openModal("🎁 Msaada " + c[1], "", buttons); }

var _richSort = "wealth"; var _richDir = "desc"; var _richFilter = "all";
function openRichList(){
  var hh = '<div class="sort-bar"><button class="' + (_richSort === "wealth" ? "active" : "") + '" onclick="_richSort=\'wealth\';openRichList()">💰 Utajiri</button><button class="' + (_richSort === "name" ? "active" : "") + '" onclick="_richSort=\'name\';openRichList()">🔤 Jina</button><button class="' + (_richSort === "country" ? "active" : "") + '" onclick="_richSort=\'country\';openRichList()">🌍 Nchi</button><button class="' + (_richSort === "sector" ? "active" : "") + '" onclick="_richSort=\'sector\';openRichList()">💼 Sekta</button><button class="' + (_richSort === "age" ? "active" : "") + '" onclick="_richSort=\'age\';openRichList()">🎂 Umri</button><button onclick="_richDir = _richDir === \'asc\' ? \'desc\' : \'asc\';openRichList()" style="background:var(--grb);color:#fff;border-color:transparent">⇅ ' + (_richDir === "desc" ? "▼" : "▲") + '</button></div>';
  var filterBar = '<div class="sort-bar"><button class="' + (_richFilter === "all" ? "active" : "") + '" onclick="_richFilter=\'all\';openRichList()">Wote</button><button class="' + (_richFilter === "africa" ? "active" : "") + '" onclick="_richFilter=\'africa\';openRichList()">🌍 Afrika</button><button class="' + (_richFilter === "top10" ? "active" : "") + '" onclick="_richFilter=\'top10\';openRichList()">Top 10</button><button class="' + (_richFilter === "young" ? "active" : "") + '" onclick="_richFilter=\'young\';openRichList()">🎂 &lt;50</button><button class="' + (_richFilter === "tech" ? "active" : "") + '" onclick="_richFilter=\'tech\';openRichList()">💻 Tech</button><button class="' + (_richFilter === "sports" ? "active" : "") + '" onclick="_richFilter=\'sports\';openRichList()">⚽ Sports</button><button class="' + (_richFilter === "music" ? "active" : "") + '" onclick="_richFilter=\'music\';openRichList()">🎵 Music</button></div>';
  var list = [];
  RICH_NPC.forEach(function(base){ var dyn = (state.npcWealth && state.npcWealth[base.name]) || base.wealth; list.push({name:base.name, country:base.country, wealth:dyn, sector:base.sector, age:base.age}); });
  list.push({name:state.name + " (WEWE)", country:state.country, wealth:playerWealth(), mine:true, sector:"Player", age:state.age});
  if(_richFilter === "africa") list = list.filter(function(p){ return AFRICAN_CODES.indexOf(p.country) >= 0 || p.mine; });
  else if(_richFilter === "young") list = list.filter(function(p){ return p.age < 50; });
  else if(_richFilter === "tech") list = list.filter(function(p){ return p.sector === "Tech" || p.sector === "Media"; });
  else if(_richFilter === "sports") list = list.filter(function(p){ return p.sector === "Sports"; });
  else if(_richFilter === "music") list = list.filter(function(p){ return p.sector === "Music"; });
  var dir = _richDir === "desc" ? -1 : 1;
  if(_richSort === "wealth") list.sort(function(a,b){ return dir * (a.wealth - b.wealth); });
  else if(_richSort === "name") list.sort(function(a,b){ return dir * a.name.localeCompare(b.name); });
  else if(_richSort === "country") list.sort(function(a,b){ return dir * a.country.localeCompare(b.country); });
  else if(_richSort === "sector") list.sort(function(a,b){ return dir * a.sector.localeCompare(b.sector); });
  else if(_richSort === "age") list.sort(function(a,b){ return dir * (a.age - b.age); });
  if(_richFilter === "top10") list = list.slice(0, 10);
  var h = hh + filterBar + '<div class="info-box">💰 Forbes — Jumla: <b>' + list.length + '</b> matajiri • Inabadilika kila sekunde.</div>';
  list.forEach(function(p, idx){ var flag = countryFlag(p.country); h += '<div class="rich-row' + (p.mine ? ' mine' : '') + '"><div><div class="rname">' + flag + ' #' + (idx+1) + ' ' + p.name + '</div><div class="rsub">' + countryLabel(p.country) + ' • ' + p.sector + ' • ' + p.age + 'y</div></div><div class="rval">' + fmt(p.wealth) + '</div></div>'; });
  openModal("👑 Matajiri Duniani (" + list.length + ")", h, [closeBtn()]);
}

function openIncomeDash(){ var b = calcBreakdown(); var total = 0; for(var k in b) if(b.hasOwnProperty(k)) total += b[k]; var h = '<div class="income-total"><div class="lbl">Pato Langu</div><div class="amount">' + fmt(total) + '</div><div class="period">kwa mwaka</div></div>'; var src = [{k:"biz", n:"🏢 Biashara"},{k:"oil", n:"🛢️ Mafuta"},{k:"gas", n:"🔥 Gesi"},{k:"mining", n:"⛏️ Madini"},{k:"intl", n:"🌍 Kimataifa"},{k:"re", n:"🏘️ Majengo"},{k:"nuclear", n:"☢️ Nyuklia"},{k:"bank", n:"🏦 Benki"},{k:"stocks", n:"📈 Hisa"},{k:"sponsors", n:"💰 Dhamana"},{k:"loans", n:"🏛️ Mikopo"},{k:"projects", n:"🏗️ Miradi"},{k:"billionaires", n:"💎 Matajiri"},{k:"illegal", n:"💊 Haramu"}]; src.forEach(function(s){ if(b[s.k] > 0) h += '<div class="income-row"><div><div class="name">' + s.n + '</div></div><div class="val">+' + fmt(b[s.k]) + '/y</div></div>'; }); openModal("💰 Mapato", h, [{label:"💵 Kusanya", cls:"green", action:function(){ if(!total) return toast("Hakuna"); state.money += total; toast("+" + fmt(total)); renderAll(); closeModal(); }},closeBtn()]); }
function calcBreakdown(){ var b = {biz:0, oil:0, gas:0, mining:0, intl:0, re:0, nuclear:0, bank:0, stocks:0, sponsors:0, loans:0, illegal:0, projects:0, billionaires:0}; var i; for(i=0; i<state.businesses.length; i++){ var biz = state.businesses[i]; b.biz += biz.income * (1 + (biz.staff||0)*.05) * (1 + (biz.upgrades||0)*.15); } for(i=0; i<state.oilWells.length; i++) b.oil += state.oilWells[i].income; for(i=0; i<state.gasWells.length; i++) b.gas += state.gasWells[i].income; for(i=0; i<state.miningOps.length; i++) b.mining += state.miningOps[i].income; for(i=0; i<state.intlBusinesses.length; i++) b.intl += state.intlBusinesses[i].income; for(i=0; i<state.realEstate.length; i++) b.re += state.realEstate[i].rent; for(i=0; i<state.nuclearPlants.length; i++) b.nuclear += state.nuclearPlants[i].income; for(i=0; i<state.leagueSponsors.length; i++) b.sponsors += state.leagueSponsors[i].income; for(i=0; i<state.govLoans.length; i++) b.loans += Math.floor(state.govLoans[i].amount * state.govLoans[i].rate); for(i=0; i<state.illegalBiz.length; i++) b.illegal += Math.floor(state.illegalBiz[i].income * .85); for(i=0; i<state.countryProjects.length; i++){ if(!state.countryProjects[i].forgiven) b.projects += state.countryProjects[i].income; } for(i=0; i<state.billionaireLoans.length; i++){ var bl = state.billionaireLoans[i]; if(!bl.forgiven && !bl.seized) b.billionaires += Math.floor(bl.loan * bl.rate); } if(state.bankCapital > 0) b.bank += Math.floor(state.bankCapital * .10); for(var sn in state.stocks){ if(state.stocks[sn] && state.stocks[sn].shares){ for(i=0; i<STOCKS.length; i++){ if(STOCKS[i].name === sn){ b.stocks += Math.floor(state.stocks[sn].shares * stockPrice(STOCKS[i]) * STOCKS[i].dividend); break; } } } } return b; }

/* ==================== POLITICS - COMPLETE REWORK ==================== */
function openPolitics(){
  var myLive = liveOf(state.country);
  var h = '<div class="info-box"><b>🗳️ Siasa</b><br>Anzisha chama (kimoja tu), jiunge chama chochote, weka fedha, na endesha nchi.</div>';
  h += '<div class="pgrid"><div class="pstat green"><div class="v">$' + (myLive.gdp||0).toFixed(1) + 'B</div><div class="l">GDP</div></div><div class="pstat ' + (myLive.corr > 50 ? 'red' : 'gold') + '"><div class="v">' + (myLive.corr||0).toFixed(0) + '</div><div class="l">Rushwa</div></div><div class="pstat ' + (myLive.infl > 15 ? 'red' : 'blue') + '"><div class="v">' + (myLive.infl||0).toFixed(1) + '%</div><div class="l">Mfumuko</div></div><div class="pstat purple"><div class="v">' + Math.round(state.approvalRating||50) + '%</div><div class="l">Ridhaa</div></div></div>';
  var buttons = [];
  if(state.myParty){ h += '<div class="ok">Una chama: <b>' + state.myParty.name + '</b></div>'; }
  if(state.membership){ h += '<div class="ok">Umejiunga: <b>' + state.membership + '</b></div>'; }
  if(!state.myParty && !state.foundedParty){ buttons.push({label:"🏛️ Anzisha Chama Changu ($10M)", cls:"gold", action:function(){ openCreateParty(); }}); }
  if(!state.membership && !state.myParty){ buttons.push({label:"🤝 Jiunge Chama Chochote", cls:"blue", action:function(){ openJoinParty(); }}); }
  if(state.myParty){ buttons.push({label:"📋 Chama Changu", cls:"purple", action:function(){ openMyParty(); }}); }
  if(state.myParty || state.membership){ buttons.push({label:"💰 Weka Fedha kwenye Chama", cls:"gold", action:function(){ openDonateParty(); }}); }
  buttons.push({label:"🎗️ Vyama Vyote", cls:"green", action:function(){ openAllParties(); }});
  if(!state.isPresident){ buttons.push({label:"👑 Gombena Urais ($1B)", cls:"gold", action:function(){ runOffice(); }}); }
  else { buttons.push({label:"🏛️ Sera za Urais", cls:"primary", action:function(){ openPresidentialDashboard(); }}); }
  buttons.push({label:"📜 Historia Yangu ya Uongozi", cls:"purple", action:function(){ openLeadershipHistory(); }});
  buttons.push(closeBtn());
  openModal("🗳️ Siasa", h, buttons);
}

function openCreateParty(){
  if(state.foundedParty || state.myParty) return toast("Una chama tayari! Kimoja tu.");
  openModal("🏛️ Anzisha Chama Changu", "Gharama: $10M<br>Unaweza kuanzisha chama kimoja tu katika maisha yako.", [
    {label:"🏛️ Chama cha Maendeleo ($10M)", cls:"gold", action:function(){ doFoundParty("Chama cha Maendeleo"); }},
    {label:"🏛️ Chama cha Vijana ($10M)", cls:"gold", action:function(){ doFoundParty("Chama cha Vijana"); }},
    {label:"🏛️ Chama cha Wananchi ($10M)", cls:"gold", action:function(){ doFoundParty("Chama cha Wananchi"); }},
    {label:"✏️ Jina Langu Mwenyewe", cls:"primary", action:function(){
      var nm = prompt("Jina la chama chako:");
      if(!nm || !nm.trim()) return toast("Jina si sahihi");
      doFoundParty(nm.trim());
    }},
    closeBtn()
  ]);
}
function doFoundParty(name){
  if(state.money < 1e7) return toast("Huna $10M");
  if(state.foundedParty) return toast("Umekwisha anzisha chama");
  state.money -= 1e7;
  state.myParty = {name:name, members:1e5, mps:1, councillors:3, wealth:1e7, influence:5, founded:currentDate().getFullYear(), leader:state.name, candidate:state.name, projects:["Mpya"]};
  state.politicalParty = name;
  state.foundedParty = true;
  if(!state.leadershipHistory) state.leadershipHistory = [];
  state.leadershipHistory.push({role:"Mwanzilishi wa Chama", party:name, year:currentDate().getFullYear()});
  addLog("🏛️ Umeanzisha chama: " + name, "legend");
  toast("🏛️ " + name);
  renderAll(); closeModal();
}

function openJoinParty(){
  var h = '<div class="info-box">Chagua chama cha kujiunga. Utakubaliwa kulingana na ushawishi wako.</div>';
  var buttons = PARTIES.map(function(p){
    return {label:p.icon + " " + p.name + " (" + p.short + ")<br><span class='sub'>Ushawishi: " + p.influence + "% • Wanachama: " + (p.members/1e6).toFixed(1) + "M</span>", action:function(){ tryJoinParty(p); }};
  });
  buttons.push(closeBtn());
  openModal("🤝 Jiunge Chama", h, buttons);
}
function tryJoinParty(p){
  var myInfluence = state.fame + (state.influence.citizens || 0) + (state.money / 1e9);
  var acceptChance = Math.min(0.95, myInfluence / 100);
  if(chance(acceptChance)){
    state.membership = p.name;
    state.politicalParty = p.name;
    if(!state.leadershipHistory) state.leadershipHistory = [];
    state.leadershipHistory.push({role:"Mwanachama", party:p.name, year:currentDate().getFullYear()});
    addLog("🤝 Umejiunga " + p.name, "legend");
    toast("✅ Umekubaliwa " + p.short);
    renderAll(); closeModal();
  } else {
    toast("❌ " + p.short + " haikukukubali");
    closeModal();
  }
}

function openDonateParty(){
  var partyName = state.myParty ? state.myParty.name : state.membership;
  var amounts = [1e6, 1e7, 1e8, 1e9, 1e10];
  var buttons = amounts.map(function(a){
    var ok = a <= state.money;
    return {label:(ok?"💰 ":"❌ ") + fmt(a), action:function(){
      if(state.money < a) return toast("Huna");
      state.money -= a;
      if(state.myParty){ state.myParty.wealth = (state.myParty.wealth||0) + a; state.myParty.influence = clamp((state.myParty.influence||0) + Math.floor(a/1e7), 0, 100); }
      // Boost party in PARTIES
      for(var i=0; i<PARTIES.length; i++){ if(PARTIES[i].name === partyName){ PARTIES[i].wealth += a; PARTIES[i].influence = clamp(PARTIES[i].influence + Math.floor(a/1e7), 0, 100); break; } }
      addLog("💰 Umetoa " + fmt(a) + " kwa " + partyName, "gold");
      toast("💰 +" + fmt(a) + " kwa chama");
      renderAll(); closeModal();
    }};
  });
  buttons.push(closeBtn());
  openModal("💰 Weka Fedha kwenye Chama", "Chama: <b>" + partyName + "</b><br>Pesa yako: " + fmt(state.money), buttons);
}

function openAllParties(){
  var h = '';
  PARTIES.forEach(function(p){
    var isMine = state.myParty && state.myParty.name === p.name;
    var isMember = state.membership === p.name;
    var badge = isMine ? ' <span style="color:#fbbf24">(CHANGU)</span>' : (isMember ? ' <span style="color:#38bdf8">(MWANACHAMA)</span>' : '');
    h += '<div class="biz-card" style="border-color:' + p.color + '"><div class="head"><div class="ic-lg">' + p.icon + '</div><div class="title">' + p.name + ' (' + p.short + ')' + badge + '</div></div>';
    h += '<div class="meta">📅 Ilianzishwa: ' + p.founded + '</div>';
    h += '<div class="meta">👤 Kiongozi: <b>' + p.leader + '</b></div>';
    h += '<div class="meta">👑 Mgombea Urais: <b>' + p.candidate + '</b> (Utajiri: ' + fmt(p.candWealth) + ')</div>';
    h += '<div class="meta">👥 Wanachama: <b>' + p.members.toLocaleString() + '</b></div>';
    h += '<div class="meta">🔒 Wanachama wa Kudumu: <b>' + p.permanent.toLocaleString() + '</b></div>';
    h += '<div class="meta">🏛️ Wabunge: <b>' + p.mps + '</b> • 🏘️ Madiwani: <b>' + p.councillors + '</b></div>';
    h += '<div class="meta">💰 Utajiri wa Chama: <b>' + fmt(p.wealth) + '</b></div>';
    h += '<div class="meta">📊 Ushawishi wa Chama: <b>' + p.influence + '%</b></div>';
    h += '<div class="meta">🎯 Ushawishi wa Mgombea: <b>' + p.candInfluence + '%</b></div>';
    h += '<div class="meta">🏗️ Miradi: ' + p.projects.join(", ") + '</div>';
    h += '</div>';
  });
  openModal("🎗️ Vyama Vyote (" + PARTIES.length + ")", h, [closeBtn()]);
}

function openMyParty(){
  if(!state.myParty) return toast("Huna chama");
  var p = state.myParty;
  var h = '<div class="pgrid"><div class="pstat purple"><div class="v" style="font-size:11px">' + p.name + '</div><div class="l">Chama</div></div><div class="pstat gold"><div class="v">' + (p.members||0).toLocaleString() + '</div><div class="l">Wanachama</div></div><div class="pstat green"><div class="v">' + (p.mps||0) + '</div><div class="l">Wabunge</div></div><div class="pstat blue"><div class="v">' + fmt(p.wealth||0) + '</div><div class="l">Utajiri</div></div></div>';
  h += '<div class="info-box">Ilianzishwa: <b>' + (p.founded||currentDate().getFullYear()) + '</b><br>Kiongozi: <b>' + (p.leader||state.name) + '</b><br>Ushawishi: <b>' + (p.influence||5) + '%</b><br>Wabunge: <b>' + (p.mps||0) + '</b> • Madiwani: <b>' + (p.councillors||0) + '</b><br>Miradi: ' + (p.projects||[]).join(", ") + '</div>';
  var buttons = [
    {label:"👥 Kukuza Chama ($5M)", cls:"green", action:function(){ if(state.money < 5e6) return toast("Huna"); state.money -= 5e6; p.members = (p.members||0) + rnd(5e4, 2e5); p.influence = clamp((p.influence||5) + 2, 0, 100); toast("👥 +"); renderAll(); refreshModal(); }},
    {label:"🗳️ Ongeza Wabunge ($500M)", cls:"primary", action:function(){ if(state.money < 5e8) return toast("Huna"); state.money -= 5e8; p.mps = (p.mps||0) + rnd(3, 8); toast("🗳️ +"); renderAll(); refreshModal(); }},
    {label:"💰 Weka Fedha", cls:"gold", action:function(){ openDonateParty(); }},
    closeBtn()
  ];
  openModal("🏛️ " + p.name, h, buttons);
}

function openLeadershipHistory(){
  var h = '';
  if(!state.leadershipHistory || !state.leadershipHistory.length){ h = '<div style="text-align:center;color:var(--txt3);padding:20px">Hauna historia bado.</div>'; }
  else {
    state.leadershipHistory.slice().reverse().forEach(function(rec){
      h += '<div class="rel"><div class="ic-sm">🏛️</div><div class="info"><div class="name">' + rec.role + '</div><div class="meta">' + (rec.party || "Independent") + ' • ' + rec.year + '</div></div></div>';
    });
  }
  openModal("📜 Historia Yangu ya Uongozi", h, [closeBtn()]);
}

function createParty(){ if(state.money < 1e7) return toast("$10M"); doFoundParty("Chama Changu"); }
function runOffice(){
  if(state.money < 1e9) return toast("$1B");
  if(!state.myParty && !state.membership) return toast("Jiunge au anzisha chama kwanza");
  state.money -= 1e9;
  if(chance(.5)){
    state.isPresident = true;
    state.presidentTermStart = currentDate().getFullYear();
    state.approvalRating = 60;
    if(!state.leadershipHistory) state.leadershipHistory = [];
    state.leadershipHistory.push({role:"Rais", party:state.politicalParty || "Independent", year:currentDate().getFullYear()});
    addLog("👑 RAIS!","legend");
    toast("👑 RAIS!");
  } else toast("😢");
  renderAll(); closeModal();
}
function openGovernment(){ openModal("🏛️ Serikali", "Rais wa sasa: " + (state.isPresident ? "WEWE 👑" : "Mtu mwingine") + "<br>Nchi: " + countryLabel(state.country), [closeBtn()]); }
function openPresidentialDashboard(){
  if(!state.isPresident) return openModal("👑 Urais", "Sio Rais kwa sasa. Gombena!", [closeBtn()]);
  var lv = liveOf(state.country);
  var pol = lv.policies || {tax:20, invest:20, antiCorr:20};
  var h = '<div class="pgrid"><div class="pstat green"><div class="v">$' + lv.gdp.toFixed(1) + 'B</div><div class="l">GDP</div></div><div class="pstat red"><div class="v">' + lv.corr.toFixed(0) + '</div><div class="l">Rushwa</div></div><div class="pstat blue"><div class="v">' + lv.infl.toFixed(1) + '%</div><div class="l">Mfumuko</div></div><div class="pstat purple"><div class="v">' + Math.round(state.approvalRating) + '%</div><div class="l">Ridhaa</div></div></div>';
  h += '<div class="info-box"><b>📊 Sera Zako:</b><br>💰 Kodi: <b>' + pol.tax + '%</b><br>🏗️ Uwekezaji: <b>' + pol.invest + '%</b><br>🛡️ Kupambana na Rushwa: <b>' + pol.antiCorr + '%</b><br><br><b>Muda uliobaki:</b> ' + Math.max(0, 5 - (currentDate().getFullYear() - state.presidentTermStart)) + ' miaka</div>';
  var buttons = [];
  buttons.push({label:"💰 Badilisha Kodi (" + pol.tax + "%)", cls:"gold", action:function(){ openModal("Kodi","",[{label:"5%", action:function(){ pol.tax = 5; lv.policies.tax = 5; closeModal(); }},{label:"15%", action:function(){ pol.tax = 15; lv.policies.tax = 15; closeModal(); }},{label:"25%", action:function(){ pol.tax = 25; lv.policies.tax = 25; closeModal(); }},{label:"40%", action:function(){ pol.tax = 40; lv.policies.tax = 40; closeModal(); }},{label:"60%", action:function(){ pol.tax = 60; lv.policies.tax = 60; closeModal(); }},closeBtn()]); }});
  buttons.push({label:"🏗️ Uwekezaji (" + pol.invest + "%)", cls:"green", action:function(){ openModal("Uwekezaji","",[{label:"5%", action:function(){ pol.invest = 5; lv.policies.invest = 5; closeModal(); }},{label:"20%", action:function(){ pol.invest = 20; lv.policies.invest = 20; closeModal(); }},{label:"40%", action:function(){ pol.invest = 40; lv.policies.invest = 40; closeModal(); }},{label:"60%", action:function(){ pol.invest = 60; lv.policies.invest = 60; closeModal(); }},closeBtn()]); }});
  buttons.push({label:"🛡️ Kupambana na Rushwa (" + pol.antiCorr + "%)", cls:"primary", action:function(){ openModal("Kupambana na Rushwa","",[{label:"0%", action:function(){ pol.antiCorr = 0; lv.policies.antiCorr = 0; closeModal(); }},{label:"20%", action:function(){ pol.antiCorr = 20; lv.policies.antiCorr = 20; closeModal(); }},{label:"50%", action:function(){ pol.antiCorr = 50; lv.policies.antiCorr = 50; closeModal(); }},{label:"80%", action:function(){ pol.antiCorr = 80; lv.policies.antiCorr = 80; closeModal(); }},closeBtn()]); }});
  buttons.push({label:"💰 Kusanya Kodi", cls:"green", action:function(){ var taxRevenue = Math.floor(lv.gdp * 1e9 * (pol.tax/100) * 0.1); state.money += taxRevenue; state.approvalRating = Math.max(0, state.approvalRating - 2); addLog("💰 Umesanya kodi: +" + fmt(taxRevenue), "gold"); toast("+" + fmt(taxRevenue)); renderAll(); refreshModal(); }});
  buttons.push({label:"📜 Historia Yangu", cls:"purple", action:function(){ openLeadershipHistory(); }});
  buttons.push({label:"🚪 Acha Urais", cls:"red", action:function(){ confirmModal("Acha Urais","Kujiuzulu?",function(){ if(!state.leadershipHistory) state.leadershipHistory = []; state.leadershipHistory.push({role:"Rais (Alijiuzulu)", party:state.politicalParty || "Independent", year:currentDate().getFullYear()}); state.isPresident = false; addLog("🚪 Umejiuzulu urais","bad"); closeModal(); }); }});
  buttons.push(closeBtn());
  openModal("👑 Urais", h, buttons);
}

function openCrime(){ var buttons = CRIMES.map(function(c){ return { label: c.icon + " " + c.name + " (+" + fmt(c.reward) + ")", action: function(){ if(state.age < c.minAge) return toast("Umri"); if(chance(1 - c.jail)){ state.money += c.reward; toast("+" + fmt(c.reward)); } else { state.courtCases.push({crime:c.name, jailYrs:rnd(c.jailYrs[0], c.jailYrs[1])}); toast("⚖️ Umekamatwa!"); } renderAll(); refreshModal(); } }; }); buttons.push(closeBtn()); openModal("😈 Uhalifu", "", buttons); }
function openHeist(){ openModal("💰 Benki", "", [{label:"Wiba $5B", action:function(){ if(chance(.35)){ state.money += 5e9; toast("+$5B"); } else state.courtCases.push({crime:"Benki", jailYrs:rnd(10,25)}); renderAll(); refreshModal(); }},closeBtn()]); }
function openMafia(){ state.mafiaRank = (state.mafiaRank||0) + 1; state.money += 1e7 * state.mafiaRank; toast("🕴️ Rank " + state.mafiaRank); renderAll(); refreshModal(); }
function openGang(){ if(!state.gang){ state.gang = {name:state.name + " Gang", members:5, power:20}; state.money -= 1e6; } else { state.gang.members += rnd(1,3); } toast("🔫"); renderAll(); refreshModal(); }
function openWeapons(){ var buttons = WEAPONS.map(function(w){ var ok = w.cost <= state.money; return { label: (ok?"✅ ":"❌ ") + w.icon + " " + w.name + "<span class='price'>" + fmt(w.cost) + "</span>", action: function(){ if(state.money < w.cost) return toast("Huna"); state.money -= w.cost; state.weapons.push({name:w.name, icon:w.icon, power:w.power}); toast("🔫"); renderAll(); refreshModal(); } }; }); buttons.push(closeBtn()); openModal("🔫 Silaha", "", buttons); }
function openIllegalBiz(){ var buttons = ILLEGAL_BIZ.map(function(b){ var ok = b.cost <= state.money; return { label: (ok?"✅ ":"❌ ") + b.icon + " " + b.name + "<br><span class='sub'>+" + fmt(b.income) + "/y • Risk " + (b.risk*100).toFixed(0) + "%</span><span class='price'>" + fmt(b.cost) + "</span>", action: function(){ if(state.money < b.cost) return toast("Huna"); state.money -= b.cost; state.illegalBiz.push({name:b.name, icon:b.icon, income:b.income, risk:b.risk}); cachedIncomeTime = 0; toast("💊"); renderAll(); refreshModal(); } }; }); buttons.push(closeBtn()); openModal("💊 Haramu", "", buttons); }
function openCourt(){ if(!state.courtCases.length) return openModal("⚖️", "Hakuna kesi.", [closeBtn()]); var c = state.courtCases[0]; openModal("⚖️ Kesi", "Kesi: " + c.crime + " • Jela: miaka " + c.jailYrs, [{label:"💰 Rushwa ($500M)", action:function(){ if(state.money < 5e8) return toast("Huna"); state.money -= 5e8; state.courtCases.shift(); toast("💰"); closeModal(); }},{label:"😔 Kubali", cls:"red", action:function(){ state.inJail = true; state.jailYears = c.jailYrs; state.courtCases.shift(); closeModal(); }},closeBtn()]); }

function openStats(){ var ad = ageDetail(); var h = '<div style="text-align:left;font-size:11px;line-height:1.9"><div><b>Jina:</b> ' + state.name + '</div><div><b>Dini:</b> ' + state.religion + '</div><div><b>Umri:</b> ' + ad.y + 'y ' + ad.m + 'm</div><div><b>Pesa:</b> ' + fmt(state.money) + '</div><div><b>Utajiri:</b> <span style="color:#fbbf24">' + fmt(playerWealth()) + '</span></div><div><b>Mapato:</b> ' + fmt(totalIncome()) + '/y</div><div><b>Watoto:</b> ' + state.children.length + '</div><div><b>CEO Mkuu:</b> ' + (state.ceo ? state.ceo.name : "Hakuna") + '</div><div><b>CEO Biashara:</b> ' + (state.bizCeo ? state.bizCeo.name : "Hakuna") + '</div><div><b>CEO Hisa:</b> ' + (state.stockCeo ? state.stockCeo.name : "Hakuna") + '</div><div><b>Miradi ya Nchi:</b> ' + state.countryProjects.length + '</div><div><b>Mikopo kwa Matajiri:</b> ' + state.billionaireLoans.length + '</div><div><b>Visima vya Mafuta:</b> ' + state.oilWells.length + '</div><div><b>Visima vya Gesi:</b> ' + state.gasWells.length + '</div><div><b>Vituo vya Nyuklia:</b> ' + state.nuclearPlants.length + '</div><div><b>Silaha za Nyuklia:</b> ' + (state.nuclearWeapons||[]).length + '</div><div><b>Chama:</b> ' + (state.myParty ? state.myParty.name : (state.membership || "Hakuna")) + '</div></div>'; openModal("📊 Takwimu", h, [closeBtn()]); }
function openAchievements(){ var list = [{name:"🎁 Bilioni 10", ok:state.age >= 10},{name:"💎 Trilionea", ok:state.money >= 1e12},{name:"💍 Ndoa", ok:state.partner && state.partner.married},{name:"👑 Rais", ok:state.isPresident},{name:"🏦 Benki", ok:state.bankCapital >= 1e9},{name:"👔 CEO Mkuu", ok:!!state.ceo},{name:"👔 CEO Biashara", ok:!!state.bizCeo},{name:"💹 CEO Hisa", ok:!!state.stockCeo},{name:"☢️ Nyuklia", ok:state.nuclearPlants.length > 0},{name:"⚽ Klabu", ok:state.clubs.length > 0},{name:"🏗️ Mradi wa Nchi", ok:state.countryProjects.length > 0},{name:"💎 Mkopeshaji wa Matajiri", ok:state.billionaireLoans.length > 0},{name:"🎗️ Mwanzilishi wa Chama", ok:state.foundedParty},{name:"🤝 Mwanachama wa Chama", ok:!!state.membership}]; var u = 0; var h = ""; list.forEach(function(a){ if(a.ok){ u++; h += '<div class="rel"><div class="ic-sm">🏆</div><div class="info"><div class="name">' + a.name + '</div></div></div>'; } else h += '<div class="rel" style="opacity:0.4"><div class="ic-sm">🔒</div><div class="info"><div class="name">' + a.name + '</div></div></div>'; }); h = '<div style="text-align:center;color:#fbbf24;font-weight:900;margin-bottom:10px">' + u + '/' + list.length + '</div>' + h; openModal("🏆 Mafanikio", h, [closeBtn()]); }
function openLegacy(){
  if(!state.children.length) return openModal("👨‍👩‍👧", "Huna watoto.", [closeBtn()]);
  var buttons = state.children.map(function(c){
    return {label: (c.gender === "female" ? "👧" : "👦") + " " + c.name, action: function(){
      var inherit = Math.floor(state.money * .5); var newAge = c.age; var newBirthYear = currentDate().getFullYear() - newAge; var oldName = state.name;
      var keep = {businesses:state.businesses, bankCapital:state.bankCapital, clubs:state.clubs, ceo:state.ceo, bizCeo:state.bizCeo, stockCeo:state.stockCeo, countryDev:state.countryDev, countryLive:state.countryLive, npcWealth:state.npcWealth, ceoBusinesses:state.ceoBusinesses, ceoAutoInvest:state.ceoAutoInvest, ceoHistory:state.ceoHistory, bizCeoHistory:state.bizCeoHistory, stockCeoHistory:state.stockCeoHistory, countryProjects:state.countryProjects, billionaireLoans:state.billionaireLoans, oilWells:state.oilWells, gasWells:state.gasWells, miningOps:state.miningOps, realEstate:state.realEstate, intlBusinesses:state.intlBusinesses, country:state.country, religion:state.religion, politicalParty:state.politicalParty, membership:state.membership};
      state = {name:c.name, surname:c.name.split(" ").pop(), religion:keep.religion, gender:c.gender, country:keep.country, language:"Kiswahili", birthDate: newBirthYear + "-01-01", totalHours:newAge*8760, age:newAge, health:100, happiness:100, smarts:50, looks:50, fitness:50, fame:0, money:inherit, job:null, salary:0, education:"Msingi", partner:null, relationships:[{name:oldName, role:"Mzazi", relation:80, age:newAge+30, alive:false, icon:"👤"}], children:[], exes:[], affairs:[], inventory:[], businesses:keep.businesses, teamShares:{}, clubs:keep.clubs, oilWells:keep.oilWells, gasWells:keep.gasWells, miningOps:keep.miningOps, bankCapital:keep.bankCapital, bankClients:[], bankInterestRate:.20, bankClientCount:0, bankTotalLent:0, govLoans:[], govLoansOut:[], pendingLoans:[], realEstate:keep.realEstate, intlBusinesses:keep.intlBusinesses, projectLoansOut:[], nuclearPlants:[], nuclearWeapons:[], weapons:[], illegalBiz:[], wantedLevel:0, courtCases:[], politicalParty:keep.politicalParty, isPresident:false, myParty:null, membership:keep.membership, foundedParty:false, leadershipHistory:[], influence:{party:0,citizens:0,mps:0,business:0,media:0}, presidentTermStart:0, alive:true, inJail:false, jailYears:0, careerPath:null, careerRank:-1, careerYears:0, stocks:{}, backups:[], log:[], casinoLossStreak:0, exportDeals:[], presidentialDebt:[], leagueHistory:{}, notifications:[], ceo:keep.ceo, stockCeo:keep.stockCeo, bizCeo:keep.bizCeo, bizCeoAutoInvest:0, bizCeoBusinesses:[], ceoBusinesses:keep.ceoBusinesses||[], ceoAutoInvest:keep.ceoAutoInvest||0, ceoHistory:keep.ceoHistory||[], bizCeoHistory:keep.bizCeoHistory||[], stockCeoHistory:keep.stockCeoHistory||[], leagueSponsors:[], countryDev:keep.countryDev||{}, countryLive:keep.countryLive||{}, npcWealth:keep.npcWealth||{}, stockCeoBuys:[], countryProjects:keep.countryProjects||[], billionaireLoans:keep.billionaireLoans||[], approvalRating:50, policies:{tax:20,invest:20,antiCorr:20}, stats:{jobsHeld:0,crimes:0,books:0,marriages:0,children:0,bizStarted:0,casinoWins:0,casinoLosses:0,totalYears:0}};
      addLog("👨‍👩‍👧 " + c.name, "legend"); renderAll(); setSpeed("slow"); closeModal();
    }};
  });
  buttons.push(closeBtn()); openModal("👨‍👩‍👧 Kurithi kwa Mtoto", "", buttons);
}
function openManualAge(){ openModal("📅 Muda", "", [{label:"Siku 1", action:function(){ addHours(24); closeModal(); }},{label:"Mwezi 1", action:function(){ addHours(720); closeModal(); }},{label:"Mwaka 1", action:function(){ addHours(8760); closeModal(); }},{label:"Miaka 5", action:function(){ addHours(43800); closeModal(); }},closeBtn()]); }
function addHours(h){ var oldAge = state.age; state.totalHours += h; var newAge = getAge(); if(newAge > oldAge){ var years = newAge - oldAge; state.money += totalIncome() * years; state.stats.totalYears += years; yearEvent(years); checkLandmarks(oldAge, newAge); state.age = newAge; } cachedIncomeTime = 0; renderAll(); }
function openRewind(){ openModal("⏪ Rewind", "Hakuna backup iliyohifadhiwa.", [closeBtn()]); }

function openBillionaires(){
  var h = '<div class="info-box"><b>💎 Kopesha Matajiri</b><br>Wakopeshwe, utajiri wao ukue kwa haraka. Unaweza kutaifisha mali zao au kusamehe madeni.</div>';
  var buttons = [];
  FAMOUS_PEOPLE.forEach(function(p){
    var existingLoan = null;
    for(var i=0; i<state.billionaireLoans.length; i++){ if(state.billionaireLoans[i].name === p.name && !state.billionaireLoans[i].forgiven && !state.billionaireLoans[i].seized){ existingLoan = state.billionaireLoans[i]; break; } }
    var dynWealth = (state.npcWealth && state.npcWealth[p.name]) || p.wealth;
    var status = existingLoan ? ' <span style="color:#22c55e">📋 Deni: ' + fmt(existingLoan.loan) + '</span>' : '';
    buttons.push({ label: countryFlag(p.country) + " " + p.name + status + "<br><span class='sub'>Utajiri: " + fmt(dynWealth) + "</span>", cls: existingLoan ? "green" : "", action: function(){ openBillionaireActions(p, dynWealth); } });
  });
  buttons.push(closeBtn());
  openModal("💎 Matajiri wa Dunia (" + FAMOUS_PEOPLE.length + ")", h, buttons);
}
function openBillionaireActions(p, dynWealth){
  var existingLoan = null;
  for(var i=0; i<state.billionaireLoans.length; i++){ if(state.billionaireLoans[i].name === p.name && !state.billionaireLoans[i].forgiven && !state.billionaireLoans[i].seized){ existingLoan = state.billionaireLoans[i]; break; } }
  var h = '<div class="pgrid"><div class="pstat purple"><div class="v" style="font-size:10px">' + p.name + '</div><div class="l">Mtu</div></div><div class="pstat gold"><div class="v">' + fmt(dynWealth) + '</div><div class="l">Utajiri</div></div></div>';
  var buttons = [];
  if(existingLoan){
    h += '<div class="ok">Anadaiwa: ' + fmt(existingLoan.loan) + ' @ ' + (existingLoan.rate*100).toFixed(0) + '% • Miaka iliyobaki: ' + existingLoan.yearsLeft + '</div>';
    buttons.push({label:"⚔️ Taifisha Mali zake", cls:"red", action:function(){ confirmModal("Taifisha Mali", "Kutaifisha mali za " + p.name + " kwa 1.5x ya deni?", function(){ var gain = Math.floor(existingLoan.loan * 1.5); state.money += gain; existingLoan.seized = true; addLog("⚔️ Umetaifisha mali za " + p.name + " — +" + fmt(gain), "legend"); cachedIncomeTime = 0; toast("+" + fmt(gain)); renderAll(); closeModal(); }); }});
    buttons.push({label:"🕊️ Samehe Deni", cls:"blue", action:function(){ confirmModal("Samehe", "Kusamehe deni la " + p.name + "?", function(){ existingLoan.forgiven = true; state.fame += 20; addLog("🕊️ Umesamehe deni la " + p.name, "gold"); cachedIncomeTime = 0; renderAll(); closeModal(); }); }});
  } else {
    h += '<div class="info-box">Hana deni kwako. Unaweza kumkopesha.</div>';
    var maxLoan = dynWealth * 0.5;
    var opts = [maxLoan * 0.1, maxLoan * 0.25, maxLoan * 0.5];
    opts.forEach(function(a){ a = Math.floor(a); if(a < 1e7) return; var ok = a <= state.money; buttons.push({ label: (ok?"💰 ":"❌ ") + "Kopesha " + fmt(a) + " @ 8%", cls: ok ? "primary" : "red", action: function(){ if(state.money < a) return toast("Huna " + fmt(a)); state.money -= a; state.billionaireLoans.push({name:p.name, country:p.country, loan:a, rate:0.08, yearsLeft:8, wealth:dynWealth, forgiven:false, seized:false}); cachedIncomeTime = 0; addLog("💰 Umekopesha " + p.name + " " + fmt(a), "legend"); toast("✅ +" + fmt(a)); renderAll(); closeModal(); } }); });
  }
  buttons.push(closeBtn());
  openModal(countryFlag(p.country) + " " + p.name, h, buttons);
}

function openCountryProjects(){
  var h = '<div class="info-box"><b>🏗️ Miradi ya Nchi</b><br>Wekeza kwenye miradi ya nchi — inaboresha GDP, unapata mapato, na unaweza kutaifisha au kusamehe.</div>';
  var active = state.countryProjects.filter(function(p){ return !p.forgiven && !p.nationalized; });
  if(active.length){ h += '<div class="tier-head">Miradi Yangu Inayoendelea (' + active.length + ')</div>'; active.slice(-15).forEach(function(p){ h += '<div class="tier-row" onclick="openProjectActions(\'' + p.name + '\',\'' + p.code + '\',\'' + p.country + '\')"><div><div class="cname">' + p.icon + ' ' + p.name + '</div><div class="cecon">' + countryFlag(p.code) + ' ' + p.country + ' • Miaka ' + p.yearsLeft + ' iliyobaki</div></div><div class="cval">+' + fmt(p.income) + '/y</div></div>'; }); }
  var buttons = [{label:"🌍 Chagua Nchi", cls:"green", action:function(){ openCountryRanking(); }},{label:"📋 Miradi Yangu", cls:"primary", action:function(){ openMyCountryProjects(); }},closeBtn()];
  openModal("🏗️ Miradi ya Nchi", h, buttons);
}
function openMyCountryProjects(){
  if(!state.countryProjects.length) return openModal("📋 Miradi Yangu", "Hakuna miradi.", [closeBtn()]);
  var h = "";
  state.countryProjects.forEach(function(p){ var status = p.forgiven ? '<span style="color:#fbbf24">🕊️ Umesamehe</span>' : (p.nationalized ? '<span style="color:#22c55e">🏴 Umetafisha</span>' : '<span style="color:#38bdf8">🏗️ Inaendelea</span>'); h += '<div class="biz-card" style="cursor:pointer" onclick="openProjectActions(\'' + p.name.replace(/'/g, "") + '\',\'' + p.code + '\',\'' + p.country.replace(/'/g, "") + '\')"><div class="head"><div class="ic-lg">' + p.icon + '</div><div class="title">' + p.name + '<br><span class="amount">' + countryFlag(p.code) + ' ' + p.country + '</span></div></div><div class="meta">Hali: ' + status + ' • Mapato: +' + fmt(p.income) + '/y • Miaka ' + p.yearsLeft + '</div></div>'; });
  openModal("📋 Miradi Yangu (" + state.countryProjects.length + ")", h, [closeBtn()]);
}
function openProjectActions(name, code, country){
  var proj = null;
  for(var i=0; i<state.countryProjects.length; i++){ if(state.countryProjects[i].name === name && state.countryProjects[i].code === code){ proj = state.countryProjects[i]; break; } }
  if(!proj) return;
  var h = '<div class="pgrid"><div class="pstat purple"><div class="v" style="font-size:11px">' + proj.icon + ' ' + proj.name + '</div><div class="l">Mradi</div></div><div class="pstat blue"><div class="v">' + countryFlag(code) + ' ' + country + '</div><div class="l">Nchi</div></div><div class="pstat green"><div class="v">+' + fmt(proj.income) + '</div><div class="l">Mapato/y</div></div><div class="pstat gold"><div class="v">' + proj.yearsLeft + 'y</div><div class="l">Iliyobaki</div></div></div>';
  h += '<div class="info-box">Gharama: ' + fmt(proj.cost) + ' • Riba: ' + (proj.rate*100).toFixed(0) + '% • GDP boost: +' + proj.gdpBoost + 'B</div>';
  var buttons = [];
  if(!proj.forgiven && !proj.nationalized){
    buttons.push({label:"🕊️ Samehe Deni la Nchi", cls:"blue", action:function(){ confirmModal("Samehe", "Kusamehe deni la mradi " + name + "?", function(){ proj.forgiven = true; var lv = liveOf(code); if(lv) lv.corr = Math.max(0, lv.corr - 5); state.fame += 15; cachedIncomeTime = 0; addLog("🕊️ Umesamehe " + name + " — " + country, "gold"); renderAll(); closeModal(); }); }});
    buttons.push({label:"⚔️ Taifisha Mradi", cls:"red", action:function(){ confirmModal("Taifisha", "Kutaifisha mradi? Utapata mapato ya kudumu lakini nchi itakasirika.", function(){ proj.nationalized = true; proj.income = Math.floor(proj.income * 1.5); var lv = liveOf(code); if(lv) lv.corr = Math.max(0, lv.corr + 3); cachedIncomeTime = 0; addLog("⚔️ Umetafisha " + name + " — " + country, "legend"); renderAll(); closeModal(); }); }});
    buttons.push({label:"💵 Ondoa Pesa Sasa", cls:"green", action:function(){ var val = Math.floor(proj.cost * 0.7); state.money += val; proj.yearsLeft = 0; cachedIncomeTime = 0; addLog("💵 Umelipwa " + fmt(val), "good"); toast("+" + fmt(val)); renderAll(); closeModal(); }});
  } else if(proj.forgiven){ h += '<div class="ok">🕊️ Umesamehe deni la mradi huu.</div>'; }
  else if(proj.nationalized){ h += '<div class="ok">🏴 Umelitaifisha mradi huu.</div>'; }
  buttons.push(closeBtn());
  openModal(proj.icon + " " + proj.name, h, buttons);
}

function openMenu(){ refreshSlots(); openModal("☰ Menyu", "", [{label: currentSpeed === "pause" ? "▶️ Endelea" : "⏸️ Simamisha", cls:"green", action:function(){ togglePlay(); closeModal(); }},{label:"🎨 Rangi", action:function(){ cycleTheme(); closeModal(); }},{label:"💾 Hifadhi", cls:"green", action:function(){ saveGame(); closeModal(); }},{label:"🔄 Anza Mpya", cls:"red", action:function(){ if(confirm("Anza upya?")){ setSpeed("pause"); localStorage.removeItem("dopplerSlot" + currentSlot); refreshSlots(); $("gameScreen").classList.add("hide"); $("createScreen").classList.remove("hide"); closeAllModals(); } }},closeBtn()]); }
function tabClick(el){ var tabs = document.querySelectorAll(".tab"); for(var i=0; i<tabs.length; i++) tabs[i].classList.remove("active"); el.classList.add("active"); var panels = document.querySelectorAll(".panel"); for(i=0; i<panels.length; i++) panels[i].classList.remove("active"); var target = $(el.getAttribute("data-panel")); if(target) target.classList.add("active"); }
function switchTab(id){ var tabs = document.querySelectorAll(".tab"); for(var i=0; i<tabs.length; i++){ tabs[i].classList.remove("active"); if(tabs[i].getAttribute("data-panel") === id) tabs[i].classList.add("active"); } var panels = document.querySelectorAll(".panel"); for(i=0; i<panels.length; i++) panels[i].classList.remove("active"); var el = $(id); if(el) el.classList.add("active"); }

function init(){
  try{
    document.body.setAttribute("data-theme", currentTheme);
    populate(); refreshSlots(); selectSlot(1);
    state = {name:"", alive:false, totalHours:0, birthDate:"2020-01-01", businesses:[], oilWells:[], gasWells:[], miningOps:[], intlBusinesses:[], realEstate:[], govLoans:[], govLoansOut:[], pendingLoans:[], nuclearPlants:[], nuclearWeapons:[], weapons:[], illegalBiz:[], leagueHistory:{}, notifications:[], influence:{party:0,citizens:0,mps:0,business:0,media:0}, stocks:{}, teamShares:{}, clubs:[], relationships:[], children:[], countryLive:{}, npcWealth:{}, countryDev:{}, countryProjects:[], billionaireLoans:[], approvalRating:50, policies:{tax:20,invest:20,antiCorr:20}, membership:null, foundedParty:false, leadershipHistory:[], log:[], stats:{}, ceo:null, bizCeo:null, stockCeo:null, ceoBusinesses:[], bizCeoBusinesses:[], stockCeoBuys:[], ceoHistory:[], bizCeoHistory:[], stockCeoHistory:[], leagueSponsors:[], inventory:[], casinoLossStreak:0};
    STOCKS.forEach(function(s){ s.currentPrice = s.price; });
    COUNTRIES.forEach(function(c){ initLive(c[0]); });
    console.log("Doppler Life v20 loaded OK • Billionaires:", RICH_NPC.length, "• Teams:", TEAMS.length, "• Stocks:", STOCKS.length, "• Parties:", PARTIES.length, "• Projects:", COUNTRY_PROJECTS.length);
  }catch(err){ console.error("Init error:", err); alert("Hitilafu: " + err.message); }
}
init();
</script>
</body>
</html>