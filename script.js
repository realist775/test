'use strict';

/* ═══════════════════════════════════════════════
   PRODUCTS DATA
   ph:true  →  해당 카테고리 첫 행에만 사진 버튼 표시
   (카테고리당 딱 1번만, 중복 없음)
═══════════════════════════════════════════════ */
const PRODUCTS = [

    /* ── B급 ── */
  {c:"B급", n:"B급 방부데크 15×95×12",  s:"15×95×3600",   u:"개", p:3000,  st:"lim", ph:true},
  {c:"B급", n:"B급 방부데크 18×118×12", s:"18×118×3600",  u:"개", p:null,  st:"iq"},
  {c:"B급", n:"B급 방부데크 21×120×12", s:"21×120×3600",  u:"개", p:4300,  st:"lim"},
  {c:"B급", n:"B급 방부데크 25×140×12", s:"25×140×3600",  u:"개", p:5900,  st:"lim"},
  {c:"B급", n:"B급 방부 2×2×12",        s:"38×38×3600",   u:"개", p:2500,  st:"lim"},
  {c:"B급", n:"B급 방부 2×4×12",        s:"38×90×3600",   u:"개", p:6400,  st:"lim"},
  {c:"B급", n:"B급 방부 2×6×12",        s:"38×140×3600",  u:"개", p:null,  st:"iq"},
  {c:"B급", n:"B급 기동재 4×4×12",      s:"90×90×3600",   u:"개", p:19100, st:"lim"},
  {c:"B급", n:"B급 기동재 5×5×12",      s:"120×120×3600", u:"개", p:27300, st:"lim"},
  {c:"B급", n:"B급 기동재 6×6×12",      s:"140×140×3600", u:"개", p:36400, st:"lim"},
  /* ── 방부데크재 ── */
  {c:"방부데크재", n:"방부데크재 15×95×12",    s:"15×95×3600 [A급]",   u:"개", p:4400,  st:"ok",  ph:true},
  {c:"방부데크재", n:"방부데크재 21×95×12",    s:"20×95×3600 [A급]",   u:"개", p:5500,  st:"ok"},
  {c:"방부데크재", n:"방부데크재 18×118×10",   s:"18×118×3000 [A급]",  u:"개", p:3500,  st:"ok"},
  {c:"방부데크재", n:"방부데크재 18×118×12",   s:"18×118×3600 [A급]",  u:"개", p:4300,  st:"ok"},
  {c:"방부데크재", n:"방부데크재 21×120×6",    s:"21×120×1800 [A급]",  u:"개", p:2400,  st:"ok"},
  {c:"방부데크재", n:"방부데크재 21×120×12",   s:"21×120×3600 [A급]",  u:"개", p:5900,  st:"ok"},
  {c:"방부데크재", n:"방부데크재 25×140×6",    s:"25×140×1800 [A급]",  u:"개", p:null,  st:"iq"},
  {c:"방부데크재", n:"방부데크재 25×140×12",   s:"25×140×3600 [A급]",  u:"개", p:7300,  st:"ok"},
  /* ── 방부목 각재 ── */
  {c:"방부목 각재", n:"방부 2×2×12",  s:"38×38×3600 [A급]",  u:"개", p:3900,  st:"ok",  ph:true},
  {c:"방부목 각재", n:"방부 2×4×12",  s:"38×89×3600 [A급]",  u:"개", p:8000,  st:"ok"},
  {c:"방부목 각재", n:"방부 2×6×8",   s:"38×140×2336 [A급]", u:"개", p:null,  st:"iq"},
  {c:"방부목 각재", n:"방부 2×6×10",  s:"38×140×3048 [A급]", u:"개", p:null,  st:"iq"},
  {c:"방부목 각재", n:"방부 2×6×12",  s:"38×140×3600 [A급]", u:"개", p:11800, st:"ok"},
  {c:"방부목 각재", n:"방부 2×8×12",  s:"38×185×3600 [A급]", u:"개", p:20800, st:"ok"},
  {c:"방부목 각재", n:"방부 2×10×12", s:"38×235×3600 [A급]", u:"개", p:25500, st:"ok"},
  {c:"방부목 각재", n:"방부 2×12×12", s:"38×285×3600 [A급]", u:"개", p:38600, st:"ok"},
  /* ── 기동재 ── */
  {c:"기동재", n:"기동재 4×4×12", s:"90×90×3600 [A급]",   u:"개", p:20800, st:"ok",  ph:true},
  {c:"기동재", n:"기동재 4×6×12",     s:"90×140×3600 [A급]",  u:"개", p:31800, st:"ok"},
  {c:"기동재", n:"기동재 5×5×12",     s:"120×120×3600 [A급]", u:"개", p:40000, st:"ok"},
  {c:"기동재", n:"기동재 6×6×12",     s:"140×140×3600 [A급]", u:"개", p:51800, st:"ok"},
  /* ── 원주목 ── */
  {c:"원주목", n:"원주목 60파이",  s:"60파이×3600 [A급]",  u:"개", p:17300, st:"ok",  ph:true},
  {c:"원주목", n:"원주목 70파이",  s:"70파이×3600 [A급]",  u:"개", p:21800, st:"ok"},
  {c:"원주목", n:"원주목 80파이",  s:"80파이×3600 [A급]",  u:"개", p:26400, st:"ok"},
  {c:"원주목", n:"원주목 100파이", s:"100파이×3600 [A급]", u:"개", p:38100, st:"ok"},
  /* ── 천연데크 ── */
  {c:"천연데크", n:"방킬라이 1800", s:"19×90×1800", u:"개", p:null, st:"iq" , ph:true},
  {c:"천연데크", n:"방킬라이 2100", s:"19×90×2100", u:"개", p:null, st:"iq"},
  {c:"천연데크", n:"방킬라이 2400", s:"19×90×2400", u:"개", p:null, st:"iq"},
  {c:"천연데크", n:"방킬라이 2700", s:"19×90×2700", u:"개", p:null, st:"iq"},
  {c:"천연데크", n:"방킬라이 3000", s:"19×90×3000", u:"개", p:null, st:"iq"},
  {c:"천연데크", n:"방킬라이 3600", s:"19×90×3600", u:"개", p:null, st:"iq"},
  {c:"천연데크", n:"큐링 2400",     s:"19×90×2400", u:"개", p:null, st:"iq"},
  {c:"천연데크", n:"큐링 3600",     s:"19×90×3600", u:"개", p:null, st:"iq"},
  /* ── 인테리어 구조재 ── */
  {c:"구조재", n:"1×4×12",      s:"19×90×3600",  u:"개", p:6900,  st:"ok",  ph:true},
  {c:"구조재", n:"1×6×12",      s:"19×140×3600", u:"개", p:10000, st:"ok"},
  {c:"구조재", n:"1×8×12",      s:"19×185×3600", u:"개", p:14900, st:"ok"},
  {c:"구조재", n:"1×10×12",     s:"19×235×3600", u:"개", p:18600, st:"ok"},
  {c:"구조재", n:"1×12×12",     s:"19×285×3600", u:"개", p:24000, st:"ok"},
  {c:"구조재", n:"2×2×12",      s:"38×38×3600",  u:"개", p:4500,  st:"ok"},
  {c:"구조재", n:"2×4×12",      s:"38×89×3600",  u:"개", p:8500,  st:"ok"},
  {c:"구조재", n:"2×6×12",      s:"38×140×3600", u:"개", p:13200, st:"ok"},
  {c:"구조재", n:"2×8×12",      s:"38×185×3600", u:"개", p:20000, st:"ok"},
  {c:"구조재", n:"2×10×12",     s:"38×235×3600", u:"개", p:29000, st:"ok"},
  {c:"구조재", n:"2×12×12",     s:"38×285×3600", u:"개", p:39000, st:"ok"},
  {c:"구조재", n:"가구재 45×45", s:"45×45×3600",  u:"개", p:1275,  st:"ok"},
  {c:"구조재", n:"가구재 60×60", s:"60×60×3600",  u:"개", p:null,  st:"iq"},
  {c:"구조재", n:"가구재 90×90", s:"90×90×3600",  u:"개", p:null,  st:"iq"},
  /* ── 다루끼 ── */
  {c:"다루끼", n:"1×1×9' ACE (20묶) 회색",    s:"27×27×2700", u:"단", p:25500, st:"ok",  ph:true},
  {c:"다루끼", n:"1×1×10' 보급형 (20묶)",      s:"27×27×3000", u:"단", p:1433,  st:"ok"},
  {c:"다루끼", n:"1×1×8' ACE (20묶) 회색",    s:"27×27×2400", u:"단", p:null,  st:"iq"},
  {c:"다루끼", n:"1×1×12' ACE (12묶) 노란색", s:"27×27×3600", u:"단", p:null,  st:"iq"},
  {c:"다루끼", n:"1×1.5×9' ACE (9묶) 회색",  s:"27×43×2700", u:"단", p:null,  st:"iq"},
  {c:"다루끼", n:"1×1.5×12' ACE (9묶)",       s:"27×43×3600", u:"단", p:null,  st:"iq"},
  {c:"다루끼", n:"1×2×8' ACE (6묶)",          s:"27×60×2400", u:"단", p:null,  st:"iq"},
  {c:"다루끼", n:"1×2×9' ACE (6묶)",          s:"27×60×2700", u:"단", p:null,  st:"iq"},
  {c:"다루끼", n:"1×2×12' ACE (6묶)",         s:"27×60×3600", u:"단", p:null,  st:"iq"},
  /* ── 뉴송각재 ── */
  {c:"토목 각재", n:"폼다루끼", s:"39×51×3600", u:"개", p:null, st:"iq", ph:true},
  {c:"토목 각재", n:"투바이", s:"51×81×3600", u:"개", p:null, st:"iq"},
  {c:"토목 각재", n:"오비끼",   s:"81×81×3600", u:"개", p:null, st:"iq"},
  /* ── 라티스 ── */
  {c:"라티스", n:"라티스 판",    s:"14×1220×2440", u:"장", p:22000, st:"ok", ph:true},
  {c:"라티스", n:"라티스 테두리",s:"38×38×3600",   u:"개", p:5000,  st:"ok"},
  /* ── 오비스기 ── */
  {c:"오비스기", n:"16×88×3600 (유절)",  s:"16×88×3600",  u:"개", p:null,  st:"iq", ph:true},
  {c:"오비스기", n:"16×88×3600 (무절)",  s:"16×88×3600",  u:"개", p:10500, st:"ok"},
  {c:"오비스기", n:"19×89×3600 (유절)",  s:"19×89×3600",  u:"개", p:7300,  st:"ok"},
  {c:"오비스기", n:"19×89×3600 (무절)",  s:"19×89×3600",  u:"개", p:null,  st:"iq"},
  {c:"오비스기", n:"14×136×3600 (유절)", s:"14×136×3600", u:"개", p:null,  st:"iq"},
  {c:"오비스기", n:"14×136×3600 (무절)", s:"14×136×3600", u:"개", p:null,  st:"iq"},
  {c:"오비스기", n:"19×140×3600 (유절)", s:"19×140×3600", u:"개", p:9100,  st:"ok"},
  {c:"오비스기", n:"19×140×3600 (무절)", s:"19×140×3600", u:"개", p:null,  st:"iq"},
  /* ── 히노끼 ── */
  {c:"히노끼", n:"루바 10×100×800 (무절)",    s:"10×100×800",  u:"개", p:13300, st:"ok", ph:true},
  {c:"히노끼", n:"루바 10×100×1000 (무절)",   s:"10×100×1000", u:"개", p:16700, st:"ok"},
  {c:"히노끼", n:"루바 10×100×1200 (무절)",   s:"10×100×1200", u:"개", p:20000, st:"ok"},
  {c:"히노끼", n:"루바 10×100×1500 (무절)",   s:"10×100×1500", u:"개", p:null,  st:"iq"},
  {c:"히노끼", n:"루바 10×100×1800 (무절)",   s:"10×100×1800", u:"개", p:null,  st:"iq"},
  {c:"히노끼", n:"루바 10×100×2000 (무절)",   s:"10×100×2000", u:"개", p:null,  st:"iq"},
  {c:"히노끼", n:"루바 10×100×2400 (무절)",   s:"10×100×2400", u:"개", p:55000, st:"ok"},
  {c:"히노끼", n:"루바 10×100×3600 (무절)",   s:"10×100×3600", u:"개", p:null,  st:"iq"},
  {c:"히노끼", n:"루바 10×100×3900 (무절)",   s:"10×100×3900", u:"개", p:null,  st:"iq"},
  {c:"히노끼", n:"루바 10×100×2400 (반무절)",  s:"10×100×2400", u:"개", p:null,  st:"iq"},
  {c:"히노끼", n:"루바 10×100×2400 (A)",      s:"10×100×2400", u:"개", p:null,  st:"iq"},
  {c:"히노끼", n:"루바 10×100×3600 (A)",      s:"10×100×3600", u:"개", p:null,  st:"iq"},
  {c:"히노끼", n:"루바 10×100×2400 (B)",      s:"10×100×2400", u:"개", p:22000, st:"ok"},
  {c:"히노끼", n:"루바 10×100×2400 (수입)",   s:"10×100×2400", u:"개", p:null,  st:"iq"},
  {c:"히노끼", n:"루바 10×100×3600 (B)",      s:"10×100×3600", u:"개", p:36000, st:"ok"},
  {c:"히노끼", n:"루바 10×100×2400 (C)",      s:"10×100×2400", u:"개", p:null,  st:"iq"},
  {c:"히노끼", n:"판재 1×4×8", s:"19×89×2400",  u:"개", p:null, st:"iq"},
  {c:"히노끼", n:"판재 1×6×8", s:"19×140×2400", u:"개", p:null, st:"iq"},
  {c:"히노끼", n:"판재 2×4×8", s:"38×89×2400",  u:"개", p:null, st:"iq"},
  {c:"히노끼", n:"판재 2×6×8", s:"38×140×2400", u:"개", p:null, st:"iq"},
  {c:"히노끼", n:"편백 10×40×2400 (유절)", s:"10×40×2400", u:"개", p:2600, st:"ok"},
  {c:"히노끼", n:"편백 10×40×2400 (무절)", s:"10×40×2400", u:"개", p:4700, st:"ok"},
  {c:"히노끼", n:"편백 10×50×2400 (유절)", s:"10×50×2400", u:"개", p:2800, st:"ok"},
  {c:"히노끼", n:"편백 10×50×2400 (무절)", s:"10×50×2400", u:"개", p:null, st:"iq"},
  {c:"히노끼", n:"편백 10×60×2400 (유절)", s:"10×60×2400", u:"개", p:3000, st:"ok"},
  {c:"히노끼", n:"편백 10×60×2400 (무절)", s:"10×60×2400", u:"개", p:5500, st:"ok"},
  {c:"히노끼", n:"편백 10×80×2400 (유절)", s:"10×80×2400", u:"개", p:3700, st:"ok"},
  {c:"히노끼", n:"마감재 10×80×2400 (유절)", s:"15×60×2400", u:"개", p:3700, st:"ok"},
  /* ── 합판 ── */
  {c:"합판", n:"합판 2.7T (인도네시아)",    s:"2.7T×4×8",  u:"장", p:6500,  st:"ok", ph:true},
  {c:"합판", n:"합판 4.8T (인도네시아)",    s:"4.8T×4×8",  u:"장", p:8200,  st:"ok"},
  {c:"합판", n:"합판 8.5T (인도네시아)",    s:"8.5T×4×8",  u:"장", p:13600, st:"ok"},
  {c:"합판", n:"합판 11.5T (인도네시아)",   s:"11.5T×4×8", u:"장", p:18600, st:"ok"},
  {c:"합판", n:"합판 14.5T (인도네시아)",   s:"14.5T×4×8", u:"장", p:24900, st:"ok"},
  {c:"합판", n:"합판 17.5T (인도네시아)",   s:"17.5T×4×8", u:"장", p:29400, st:"ok"},
  {c:"합판", n:"일반 합판 9T×3×6",                  s:"9T×3×6",    u:"장", p:null,  st:"iq"},

  {c:"합판", n:"A급 까레야 14.5T (인도네시아)", s:"14.5T×4×8", u:"장", p:null,  st:"iq"},
  {c:"합판", n:"A급 까레야 17.5T (인도네시아)", s:"17.5T×4×8", u:"장", p:null,  st:"iq"},
  
  {c:"합판", n:"낙엽송합판 4.8T",           s:"4.8T×4×8",  u:"장", p:16800, st:"ok"},
  {c:"합판", n:"낙엽송합판 7.5T",           s:"7.5T×4×8",  u:"장", p:25500, st:"ok"},

  {c:"합판", n:"코아합판 18T",              s:"18T×4×8",          u:"장", p:null,  st:"iq"},

  {c:"합판", n:"OSB 8T (말레이시아)",    s:"8T×4×8", u:"장", p:18200, st:"ok"},
  {c:"합판", n:"OSB 11.1T (말레이시아)",    s:"11.1T×4×8", u:"장", p:18200, st:"ok"},
  {c:"합판", n:"OSB 18.3T (말레이시아)",    s:"18.3T×4×8", u:"장", p:34500, st:"ok"},

  {c:"합판", n:"요꼬(오징어) 4T [라왕]",           s:"4T×4'×8'",    u:"장", p:16800, st:"ok"},

  {c:"합판", n:"베트남합판 3×6",            s:"9T×3×6",    u:"장", p:null,  st:"iq"},
  {c:"합판", n:"베트남합판 4×8",            s:"12T×4×8",   u:"장", p:null,  st:"iq"},

  {c:"합판", n:"태고합판(양면) 11.5T×4×8",      s:"11.5T×4×8", u:"장", p:27500, st:"ok"},
  {c:"합판", n:"태고합판(양면) 11.5T×3×6",      s:"11.5T×3×6", u:"장", p:14500, st:"ok"},
  /* ── 자작합판 ── */
  {c:"자작합판", n:"자작합판 4.5T", s:"4.5T×4×8", u:"장", p:40900,  st:"ok", ph:true},
  {c:"자작합판", n:"자작합판 6T",   s:"6T×4×8",   u:"장", p:45000,  st:"ok"},
  {c:"자작합판", n:"자작합판 9T",   s:"9T×4×8",   u:"장", p:55000,  st:"ok"},
  {c:"자작합판", n:"자작합판 12T",  s:"12T×4×8",  u:"장", p:65000,  st:"ok"},
  {c:"자작합판", n:"자작합판 15T",  s:"15T×4×8",  u:"장", p:75000,  st:"ok"},
  {c:"자작합판", n:"자작합판 18T",  s:"18T×4×8",  u:"장", p:83000,  st:"ok"},
  {c:"자작합판", n:"자작합판 21T",  s:"21T×4×8",  u:"장", p:110000, st:"ok"},
  {c:"자작합판", n:"자작합판 24T",  s:"24T×4×8",  u:"장", p:140000, st:"ok"},
  {c:"자작합판", n:"자작합판 30T",  s:"30T×4×8",  u:"장", p:170000, st:"lim"},
  /* ── 미송 ── */
  {c:"미송", n:"미송합판 9T",  s:"9T×4×8",  u:"장", p:27300, st:"ok", ph:true},
  {c:"미송", n:"미송합판 12T", s:"12T×4×8", u:"장", p:30000, st:"ok"},
  /* ── 오쿠메 ── */
  {c:"오쿠메", n:"오쿠메 4.8T",  s:"4.8T×4×8",  u:"장", p:14800, st:"ok", ph:true},
  {c:"오쿠메", n:"오쿠메 8.5T",  s:"8.5T×4×8",  u:"장", p:23800, st:"ok"},
  {c:"오쿠메", n:"오쿠메 11.5T",  s:"8.5T×4×8",  u:"장", p:23800, st:"ok"},
  {c:"오쿠메", n:"오쿠메 14.5T", s:"14.5T×4×8", u:"장", p:39400, st:"ok"},
  {c:"오쿠메", n:"오쿠메 17.5T", s:"17.5T×4×8", u:"장", p:46000, st:"ok"},
  /* ── 라왕 ── */
  {c:"라왕", n:"라왕합판 9T",  s:"9T×4×8",  u:"장", p:null,  st:"iq", ph:true},
  {c:"라왕", n:"라왕합판 12T", s:"12T×4×8", u:"장", p:null,  st:"iq"},
  {c:"라왕", n:"라왕합판 18T", s:"18T×4×8", u:"장", p:72700, st:"ok"},
  /* ── 방수합판 ── */
  {c:"방수합판", n:"내수합판 9T", s:"12T×4×8", u:"장", p:null, st:"iq", ph:true},
  {c:"방수합판", n:"내수합판 12T", s:"12T×4×8", u:"장", p:null, st:"iq"},
  /* ── MDF ── */
  {c:"MDF", n:"MDF 4.5T", s:"4.5T×4×8", u:"장", p:null,  st:"iq", ph:true},
  {c:"MDF", n:"MDF 6T",   s:"6T×4×8",   u:"장", p:8500,  st:"ok"},
  {c:"MDF", n:"MDF 9T",   s:"9T×4×8",   u:"장", p:10900, st:"ok"},
  {c:"MDF", n:"MDF 12T",  s:"12T×4×8",  u:"장", p:14400, st:"ok"},
  {c:"MDF", n:"MDF 15T",  s:"15T×4×8",  u:"장", p:18500, st:"ok"},
  {c:"MDF", n:"MDF 18T",  s:"18T×4×8",  u:"장", p:null,  st:"iq"},
  /* ── 내장재 (집성) ── */
  {c:"내장재 (집성)", n:"멀바우 3×8",      s:"12T×910×2400",   u:"장", p:30000,  st:"iq", ph:true},
  {c:"내장재 (집성)", n:"멀바우 3×8",      s:"15T×910×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"멀바우 3×8",      s:"18T×910×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"멀바우 3×8",      s:"24T×910×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"멀바우 4×8",      s:"12T×1220×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"멀바우 4×8",      s:"15T×1220×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"멀바우 4×8",      s:"18T×1220×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"멀바우 4×8",      s:"24T×1220×2400",   u:"장", p:30000, st:"ok"},

  {c:"내장재 (집성)", n:"라디에타 3×8",      s:"12T×910×2400",   u:"장", p:30000,  st:"ok"},
  {c:"내장재 (집성)", n:"라디에타 3×8",      s:"15T×910×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"라디에타 3×8",      s:"18T×910×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"라디에타 3×8",      s:"24T×910×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"라디에타 4×8",      s:"12T×1220×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"라디에타 4×8",      s:"15T×1220×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"라디에타 4×8",      s:"18T×1220×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"라디에타 4×8",      s:"24T×1220×2400",   u:"장", p:30000, st:"ok"},

  {c:"내장재 (집성)", n:"아카시아 4×8",      s:"15T×1220×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"아카시아 4×8",      s:"18T×1220×2400",   u:"장", p:30000, st:"ok"},

  {c:"내장재 (집성)", n:"고무나무 4×8",      s:"15T×1220×2400",   u:"장", p:30000, st:"ok"},
  {c:"내장재 (집성)", n:"고무나무 4×8",      s:"18T×1220×2400",   u:"장", p:30000, st:"ok"},

  /* ── 계단판 ── */
  {c:"계단판", n:"미송",      s:"30T×300×3600",   u:"장", p:30000,  st:"iq", ph:true},
  {c:"계단판", n:"멀바우",      s:"30T×300×3600",   u:"장", p:30000,  st:"iq", ph:true},


  /* ── 루바 ── */
  {c:"루바", n:"삼목 8자",               s:"10×113×2400", u:"개", p:17000, st:"ok", ph:true},
  {c:"루바", n:"삼목 12자",              s:"10×113×3600", u:"개", p:27000, st:"ok"},
  {c:"루바", n:"레드파인 8자",           s:"12×120×2400", u:"개", p:25300, st:"ok"},
  {c:"루바", n:"레드파인 9자",           s:"12×120×2700", u:"개", p:null,  st:"iq"},
  {c:"루바", n:"레드파인 12자",          s:"12×120×3600", u:"개", p:38400, st:"ok"},
  {c:"루바", n:"브러쉬 8자",             s:"12×120×2400", u:"개", p:32700, st:"ok"},
  {c:"루바", n:"브러쉬 12자",            s:"12×120×3600", u:"개", p:32700, st:"ok"},
  {c:"루바", n:"스프러스 8자",           s:"12×120×2400", u:"개", p:null,  st:"iq"},
  {c:"루바", n:"스프러스 12자",          s:"12×120×3600", u:"개", p:null,  st:"iq"},
  {c:"루바", n:"향목루바 8자 (FUJIAN)",  s:"10×110×2400", u:"개", p:null,  st:"iq"},
  {c:"루바", n:"향목 코팅 12자 (FUJIAN)",s:"10×110×3600", u:"개", p:null,  st:"iq"},
  /* ── 사이딩 ── */
  {c:"사이딩", n:"채널사이딩",    s:"17×140×3600",  u:"개", p:7300, st:"ok", ph:true},
  {c:"사이딩", n:"시멘트사이딩",  s:"6.5T×205×3600",u:"개", p:3800, st:"ok"},
  {c:"사이딩", n:"로그사이딩",    s:"35×135×3600",  u:"개", p:null, st:"iq"},
  {c:"사이딩", n:"오비 사이딩",   s:"17×140×3600",  u:"개", p:8200, st:"ok"},

  /* ── 문살 ── */
  {c:"문살", n:"문살 R-3",   s:"600×1800",   u:"개", p:32400, st:"ok", ph:true},
  {c:"문살", n:"문살 R-4",   s:"600×1800",   u:"개", p:54000, st:"ok"},
  {c:"문살", n:"문살 R-11",  s:"600×1800",   u:"개", p:60000, st:"ok"},
  {c:"문살", n:"문살 테두리",s:"20×26×1990", u:"개", p:null,  st:"iq"},
  /* ── 석고 ── */
  {c:"석고", n:"일반석고 9.5T", s:"9.5T×900×1800", u:"장", p:3500, st:"ok", ph:true},
  {c:"석고", n:"방수석고 9.5T", s:"9.5T×900×1800", u:"장", p:5700, st:"ok"},
  {c:"석고", n:"방화석고 9.5T", s:"9.5T×900×1800", u:"장", p:6000, st:"ok"},
  /* ── 스테인 ── */
  {c:"스테인", n:"씨라데코 2.5L",       s:"2.5L", u:"통", p:41000,  st:"ok", ph:true},
  {c:"스테인", n:"씨라데코 5L",         s:"5L",   u:"통", p:63636,  st:"ok"},
  {c:"스테인", n:"씨라데코 25L",        s:"25L",  u:"통", p:222727, st:"ok"},
  {c:"스테인", n:"블루우드 3.5L",       s:"3.5L", u:"통", p:21000,  st:"ok"},
  {c:"스테인", n:"블루우드 16L",        s:"16L",  u:"통", p:81800,  st:"ok"},
  {c:"스테인", n:"본덱스 데킹오일 2.5L",s:"2.5L", u:"통", p:48200,  st:"ok"},
  {c:"스테인", n:"본덱스 데킹오일 20L", s:"20L",  u:"통", p:338182, st:"ok"},
  {c:"스테인", n:"본덱스 수성 2.5L",    s:"2.5L", u:"통", p:57300,  st:"ok"},
  {c:"스테인", n:"본덱스 수성 5L",      s:"5L",   u:"통", p:117273, st:"ok"},
  {c:"스테인", n:"본덱스 수성 25L",     s:"25L",  u:"통", p:381818, st:"ok"},
  /* ── 목재용 피스 ── */
  {c:"목재용 피스", n:"목재피스 25mm", s:"25mm (1000개)", u:"봉지", p:9000,  st:"ok", ph:true},
  {c:"목재용 피스", n:"목재피스 32mm", s:"32mm (1000개)", u:"봉지", p:9500,  st:"ok"},
  {c:"목재용 피스", n:"목재피스 38mm", s:"38mm (500개)",  u:"봉지", p:7000,  st:"ok"},
  {c:"목재용 피스", n:"목재피스 50mm", s:"50mm (500개)",  u:"봉지", p:9000,  st:"ok"},
  {c:"목재용 피스", n:"목재피스 65mm", s:"65mm (300개)",  u:"봉지", p:9500,  st:"ok"},
  {c:"목재용 피스", n:"목재피스 75mm", s:"75mm (300개)",  u:"봉지", p:null,  st:"iq"},
  {c:"목재용 피스", n:"목재피스 90mm", s:"90mm (200개)",  u:"봉지", p:10900, st:"ok"},
  /* ── 철판용 피스 ── */
  {c:"철판용 피스", n:"철판피스 25mm", s:"25mm (1000개)", u:"봉지", p:null,  st:"iq", ph:true},
  {c:"철판용 피스", n:"철판피스 32mm", s:"32mm (500개)",  u:"봉지", p:10500, st:"ok"},
  {c:"철판용 피스", n:"철판피스 38mm", s:"38mm (1000개)", u:"봉지", p:null,  st:"iq"},
  {c:"철판용 피스", n:"철판피스 45mm", s:"45mm (500개)",  u:"봉지", p:16000, st:"ok"},
  {c:"철판용 피스", n:"철판피스 55mm", s:"55mm (300개)",  u:"봉지", p:13000, st:"ok"},
  {c:"철판용 피스", n:"철판피스 65mm", s:"65mm (200개)",  u:"봉지", p:null,  st:"iq"},

  /* ── 타카핀 ── */
  {c:"타카핀", n:"F15 (1캅/5,000)",   s:"F15",  u:"캅", p:3000,  st:"ok", ph:true},
  {c:"타카핀", n:"F25 (1캅/5,000)",   s:"F25",  u:"캅", p:null,  st:"iq"},
  {c:"타카핀", n:"F30 (1캅/5,000)",   s:"F30",  u:"캅", p:null,  st:"iq"},
  {c:"타카핀", n:"ST18 (1캅/2,000)",  s:"ST18", u:"캅", p:null,  st:"iq"},
  {c:"타카핀", n:"ST64 (1캅/900)",    s:"ST64", u:"캅", p:4500,  st:"ok"},
  {c:"타카핀", n:"DT50 (1캅/3,000)",  s:"DT50", u:"캅", p:null,  st:"iq"},
  {c:"타카핀", n:"DT64 (1캅/3,000)",  s:"DT64", u:"캅", p:11500, st:"ok"},
  {c:"타카핀", n:"T50 (1캅/2,500)",   s:"T50",  u:"캅", p:3800,  st:"ok"},
  {c:"타카핀", n:"422J (1캅/5,000)",  s:"422J", u:"캅", p:4100,  st:"ok"},
  {c:"타카핀", n:"615 (1캅/10,000)",  s:"615",  u:"캅", p:null,  st:"iq"},
  {c:"타카핀", n:"625 (1캅/10,000)",  s:"625",  u:"캅", p:5600,  st:"ok"},
  {c:"타카핀", n:"630 (1캅/10,000)",  s:"630",  u:"캅", p:null,  st:"iq"},
  /* ── 철물 ── */
  {c:"철물", n:"A555",                s:"—", u:"개", p:1200,  st:"ok", ph:true},
  {c:"철물", n:"AP44",                s:"—", u:"개", p:3600,  st:"ok"},
  {c:"철물", n:"AP55",                s:"—", u:"개", p:6300,  st:"ok"},
  {c:"철물", n:"AP66",                s:"—", u:"개", p:9100,  st:"ok"},
  {c:"철물", n:"B44 / B55 / B88",    s:"—", u:"개", p:2300,  st:"ok"},
  {c:"철물", n:"BC44 / BC55 / BC66", s:"—", u:"개", p:1500,  st:"ok"},
  {c:"철물", n:"DJP46",              s:"—", u:"개", p:2500,  st:"ok"},
  {c:"철물", n:"JP13 / JP24 / JP26", s:"—", u:"개", p:600,   st:"ok"},
  {c:"철물", n:"LA3 / LA5 / LA9",   s:"—", u:"개", p:900,   st:"ok"},
  {c:"철물", n:"LA35",               s:"—", u:"개", p:700,   st:"ok"},
  {c:"철물", n:"JH2 시리즈",         s:"—", u:"개", p:900,   st:"ok"},
  {c:"철물", n:"ABU 시리즈",         s:"—", u:"개", p:13400, st:"ok"},
  {c:"철물", n:"FBP44",              s:"—", u:"개", p:9500,  st:"ok"},
  {c:"철물", n:"FBP55",              s:"—", u:"개", p:11800, st:"ok"},
  {c:"철물", n:"FBP66",              s:"—", u:"개", p:13800, st:"ok"},
  {c:"철물", n:"DFC44",              s:"—", u:"개", p:3000,  st:"ok"},
  {c:"철물", n:"DFC55",              s:"—", u:"개", p:5200,  st:"ok"},
  {c:"철물", n:"DFC66",              s:"—", u:"개", p:5800,  st:"ok"},
  {c:"철물", n:"FRB24",              s:"—", u:"개", p:800,   st:"ok"},
  {c:"철물", n:"테크연결클립",       s:"—", u:"개", p:500,   st:"ok"},
  {c:"철물", n:"테크홀클립",         s:"—", u:"개", p:4500,  st:"ok"},
  {c:"철물", n:"R1",                 s:"—", u:"개", p:1000,  st:"ok"},
  {c:"철물", n:"R2",                 s:"—", u:"개", p:600,   st:"ok"},
  {c:"철물", n:"R3",                 s:"—", u:"개", p:500,   st:"ok"},
  {c:"철물", n:"R4",                 s:"—", u:"개", p:1100,  st:"ok"},
  {c:"철물", n:"R5",                 s:"—", u:"개", p:1500,  st:"ok"},
  {c:"철물", n:"DPT24 / DPT42",     s:"—", u:"개", p:1700,  st:"ok"},
  {c:"철물", n:"DPT44",              s:"—", u:"개", p:1700,  st:"ok"},
  {c:"철물", n:"L66 / LB8",         s:"—", u:"개", p:2500,  st:"ok"},
  {c:"철물", n:"T66 / T88",         s:"—", u:"개", p:2500,  st:"ok"},
  {c:"철물", n:"PB40 / PB50 / PB60",s:"—", u:"개", p:3800,  st:"ok"},
  {c:"철물", n:"LA34",               s:"—", u:"개", p:500,   st:"ok"},
  {c:"철물", n:"HS",                 s:"—", u:"개", p:500,   st:"ok"},
  {c:"철물", n:"주춧돌 4×4",         s:"—", u:"개", p:7300,  st:"ok"},
  {c:"철물", n:"주춧돌 5×5",         s:"—", u:"개", p:8200,  st:"ok"},
  {c:"철물", n:"주춧돌 6×6",         s:"—", u:"개", p:8600,  st:"ok"},
  {c:"철물", n:"스마트 주춧돌",      s:"—", u:"개", p:7300,  st:"ok"},
  {c:"철물", n:"EPB CR100-A",        s:"—", u:"개", p:24100, st:"ok"},
  {c:"철물", n:"EPB CR100-B",        s:"—", u:"개", p:32700, st:"ok"},
  {c:"철물", n:"EPB CR100-C",        s:"—", u:"개", p:40000, st:"ok"},
  {c:"철물", n:"EASY FOOT 4",        s:"—", u:"개", p:5000,  st:"ok"},

  /* ── WPC 합성데크 ── */
  {c:"합성데크", n:"합성데크 (고밀도) [다크 / 라이트] 20T",  s:"20×140×2400",      u:"장",       p:10300, st:"ok", ph:true},
  {c:"합성데크", n:"합성데크 (고밀도) [다크 / 라이트] 20T",  s:"20×140×3000",      u:"장",       p:13200, st:"ok"},
  {c:"합성데크", n:"합성데크 (고밀도) [다크 / 라이트] 25T",  s:"25×150×2400",      u:"장",       p:13900, st:"ok"},
  {c:"합성데크", n:"합성데크 (고밀도) [다크 / 라이트] 25T",  s:"25×150×3000",      u:"장",       p:17400, st:"ok"},
  {c:"합성데크", n:"울타리재",  s:"10×95×2400",      u:"장",       p:7000, st:"ok"},
  {c:"합성데크", n:"미들클립 20T / 25T",     s:"1봉[100개]",       u:"봉지",     p:20000, st:"ok"},
  {c:"합성데크", n:"스타트클립 20T / 25T",   s:"1봉[100개]",       u:"봉지",     p:20000, st:"ok"},
  {c:"합성데크", n:"메지폼 20T / 25T [다크 / 라이트]",              s:"1봉[50개]",              u:"봉지",     p:10000, st:"ok"},
  {c:"합성데크", n:"스텐피스 4×16mm",             s:"16mm — 1봉[500개]",u:"봉지",    p:15000, st:"ok"},
  {c:"합성데크", n:"스텐피스 8×38mm",         s:"38mm — 1봉[500개]",u:"봉지",    p:20000, st:"ok"},
  /* ── 반재단 합판 ── */
  {c:"반재단 합판", n:"MDF 일반 9T",    s:"9T×610×2440",  u:"장", p:2900, st:"ok", ph:true},
  {c:"반재단 합판", n:"MDF 고밀도 9T",  s:"9T×610×2440",  u:"장", p:2900, st:"ok"},
  {c:"반재단 합판", n:"MDF 일반 12T",   s:"12T×610×2440", u:"장", p:2900, st:"ok"},
  {c:"반재단 합판", n:"자작 9T",        s:"9T×610×2440",  u:"장", p:2900, st:"ok"},
  {c:"반재단 합판", n:"자작 12T",       s:"12T×610×2440", u:"장", p:2900, st:"ok"},
  {c:"반재단 합판", n:"일반 4.8T",      s:"4.8T×610×2440",u:"장", p:2900, st:"ok"},
  {c:"반재단 합판", n:"일반 9T",        s:"9T×610×2440",  u:"장", p:2900, st:"ok"},
  {c:"반재단 합판", n:"일반 A급 9T",    s:"9T×610×2440",  u:"장", p:2900, st:"ok"},
  {c:"반재단 합판", n:"일반 A급 12T",   s:"12T×610×2440", u:"장", p:2900, st:"ok"},
  {c:"반재단 합판", n:"내수 9T",        s:"9T×610×2440",  u:"장", p:2900, st:"ok"},
  {c:"반재단 합판", n:"내수 12T",       s:"12T×610×2440", u:"장", p:2900, st:"ok"},
  /* ── 아이소핑크 ── */
  {c:"아이소핑크", n:"아이소핑크 10T", s:"10T×900×1800", u:"장", p:2900,  st:"ok", ph:true},
  {c:"아이소핑크", n:"아이소핑크 20T", s:"20T×900×1800", u:"장", p:5800,  st:"ok"},
  {c:"아이소핑크", n:"아이소핑크 30T", s:"30T×900×1800", u:"장", p:6200,  st:"ok"},
  {c:"아이소핑크", n:"아이소핑크 50T", s:"50T×900×1800", u:"장", p:10300, st:"ok"},
];

/* ═══════════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════════ */
const esc = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const fmt = n => n == null ? null : n.toLocaleString('ko-KR');
const todayStr = () => {
  const d = new Date();
  return d.getFullYear()+'.'+String(d.getMonth()+1).padStart(2,'0')+'.'+String(d.getDate()).padStart(2,'0');
};
function hi(text, q) {
  const safe = esc(text);
  if (!q) return safe;
  const re = new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
  return safe.replace(re,'<mark>$1</mark>');
}
function stockBadge(st) {
  if (st==='ok')  return '<span class="stock-badge stock-ok"><span class="stock-dot"></span>재고있음</span>';
  if (st==='lim') return '<span class="stock-badge stock-lim"><span class="stock-dot"></span>소량</span>';
  return '<span class="stock-badge stock-iq">문의</span>';
}

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let currentCat = '', currentQ = '', currentSort = '';
let filteredData = [];

/* ═══════════════════════════════════════════════
   FILTER + SORT
═══════════════════════════════════════════════ */
function getFiltered() {
  const qn = currentQ.toLowerCase();
  const qc = qn.replace(/\s+/g,'');
  let d = PRODUCTS.filter(r => {
    if (currentCat && r.c !== currentCat) return false;
    if (!qn) return true;
    return [r.c, r.n, r.s, r.u].some(f => {
      const fn = (f||'').toLowerCase();
      const fc = fn.replace(/\s+/g,'');
      return fn.includes(qn) || fc.includes(qc) || fn.includes(qc) || fc.includes(qn);
    });
  });
  if (currentSort === 'pa') d = d.slice().sort((a,b)=>(a.p??999999)-(b.p??999999));
  else if (currentSort === 'pd') d = d.slice().sort((a,b)=>(b.p??0)-(a.p??0));
  else if (currentSort === 'na') d = d.slice().sort((a,b)=>a.n.localeCompare(b.n,'ko'));
  return d;
}

// =====================================================
// 📸 PHOTO MAP - 이미지 설정
// 방법1: 카테고리명 → 그 카테고리 전체에 같은 사진
// 방법2: 제품명    → 그 제품만 따로 다른 사진
// 우선순위: 제품명 > 카테고리명
// images/ 폴더에 파일 저장 후 아래에 추가하세요.
// =====================================================
const PHOTO_MAP = {
  // 카테고리 전체에 같은 사진 적용 예시 (주석 해제 후 사용):
  // '합판':            'images/합판.jpg',

  'B급 방부데크 15×95×12': 'images/방부목/방부데크/15x95x3600 B.jpg',
  'B급 방부데크 18×118×12': 'images/방부목/방부데크/15x95x3600 B.jpg',
  'B급 방부데크 21×120×12': 'images/방부목/방부데크/21x120x3600 -B.jpg',
  'B급 방부데크 25×140×12': 'images/방부목/방부데크/15x95x3600 B.jpg',

   

  'B급 방부 2×2×12': 'images/방부목/방부 각재/방부 38 - b.jpg',
  'B급 방부 2×4×12': 'images/방부목/방부 각재/방부 90 - b.jpg',
  'B급 방부 2×6×12': 'images/방부목/방부 각재/방부 140 - b.jpg',

  '방부 2×2×12': 'images/방부목/방부 각재/방부 38.jpg',
  '방부 2×2×12': 'images/방부목/방부 각재/방부 90.jpg',
  '방부 2×2×12': 'images/방부목/방부 각재/방부 140.jpg',
  '방부 2×2×12': 'images/방부목/방부 각재/방부 185.jpg',
  '방부 2×2×12': 'images/방부목/방부 각재/방부 235.jpg ',
  '방부 2×2×12': 'images/방부목/방부 각재/방부 285.jpg',



  '방부데크재': 'images/방부목/방부데크/방부데크.jpg',
  '방부데크재 15×95×12': 'images/방부목/방부데크/15x95x3600.jpg',
  '방부데크재 21×95×12': 'images/방부목/방부데크/21x95x3600.jpg',
  '방부데크재 18×118×12': 'images/방부목/방부데크/18x118x3600.jpg',
  '방부데크재 21×120×12': 'images/방부목/방부데크/21x120x3600.jpg',
  '방부데크재 25×140×12': 'images/방부목/방부데크/25x140x3600.jpg',

  '방부목 각재': 'images/방부목/방부 각재/방부 각재.jpg',
  '방부 2×2×12': 'images/방부목/방부 각재/방부 38.jpg',
  '방부 2×4×12': 'images/방부목/방부 각재/방부 90.jpg',
  '방부 2×6×12': 'images/방부목/방부 각재/방부 140.jpg',
  '방부 2×8×12': 'images/방부목/방부 각재/방부 185.jpg',
  '방부 2×10×12': 'images/방부목/방부 각재/방부 235.jpg',
  '방부 2×12×12': 'images/방부목/방부 각재/방부 285.jpg',

  '원주목 60파이': 'images/방부목/방부 원주목/원주목 60.jpg',
  '원주목 70파이': 'images/방부목/방부 원주목/원주목 70.jpg',
  '원주목 80파이': 'images/방부목/방부 원주목/원주목 80.jpg',
  '원주목 100파이': 'images/방부목/방부 원주목/원주목 100.jpg',

  '천연데크': 'images/천연데크/천연데크.png',

  '구조재': 'images/구조재/구조재.png',

  '2×2×12': 'images/구조재/2인치구조재-38.jpg',
  '2×4×12': 'images/구조재/90.jpg',
  '2×6×12': 'images/구조재/2인치구조재 - 140.jpg',
  '2×8×12': 'images/구조재/2인치구조재 - 185.jpg',
  '2×10×12': 'images/구조재/2인치구조재 - 235.jpg',
  '2×12×12': 'images/구조재/2인치구조재 - 285.jpg',

  '기동재': 'images/방부목/방부 각재/기동재 PNG.png',

  '가구재 60×60': 'images/구조재/가구재.png',
  '가구재 60×60': 'images/구조재/가구재.png',
  '가구재 60×60': 'images/구조재/가구재.png',

  '합성데크': 'images/합성데크/WPCdeck.png',
  '울타리재': 'images/합성데크/2.png',
  '미들클립 20T / 25T': 'images/합성데크/미들.png',
  '스타트클립 20T / 25T': 'images/합성데크/스타트.png',
  '메지폼 20T / 25T [다크 / 라이트]': 'images/합성데크/메지폼.png',
  '스텐피스 4×16mm': 'images/합성데크/연결피스.png',
  '스텐피스 8×38mm': 'images/합성데크/직결피스.png',

  '아이소핑크': 'images/아이소핑크/아이소핑크.jpg',
  '석고': 'images/석고/ChatGPT Image Feb 24, 2026, 09_31_50 AM.png',
  '목재용 피스': 'images/피스/ChatGPT Image Feb 24, 2026, 01_21_40 PM.png',
  '철판용 피스': 'images/피스/ChatGPT Image Feb 24, 2026, 01_21_40 PM.png',
  '타카': 'images/타카/ChatGPT Image Feb 24, 2026, 01_31_14 PM.png',
  '철물': 'images/철물/ChatGPT Image Feb 24, 2026, 01_46_49 PM.png',
  '블루우드 3.5L': 'images/오일스테인/oilstain png.png',
  '블루우드 16L': 'images/오일스테인/oilstain png.png',

  '문살': 'images/문살/r2.png',

  '채널사이딩': 'images/사이딩/20260521_111842.png',


  '히노끼': 'images/히노끼/hinoki A급/hinoki 1.jpg',

  '루바 10×100×2400 (A)': 'images/히노끼/hinoki A급/KakaoTalk_20251204_145358834_05.jpg',
  '루바 10×100×3600 (A)': 'images/히노끼/hinoki A급/KakaoTalk_20251204_145358834_05.jpg',

  '루바 10×100×2400 (B)': 'images/히노끼/hinoki B급/KakaoTalk_20251205_104734352_04.jpg',
  '루바 10×100×2400 (수입)': 'images/히노끼/히노끼 12자 수입 (삼미)/히노끼 3.jpg',
  '루바 10×100×3600 (B)': 'images/히노끼/hinoki B급/KakaoTalk_20251205_104734352_04.jpg',

  '루바 10×100×2400 (C)': 'images/히노끼/hinoki C급/KakaoTalk_20251205_094457821_20.jpg',

  '루바 10×100×2400 (반무절)': 'images/히노끼/무절/KakaoTalk_20251205_125609256_06.jpg',

  '판재 1×4×8': 'images/히노끼/hinoki A급/hinoki 1.jpg',
  '판재 1×6×8': 'images/히노끼/hinoki A급/hinoki 1.jpg',
  '판재 2×4×8': 'images/히노끼/hinoki A급/hinoki 1.jpg',
  '판재 2×6×8': 'images/히노끼/hinoki A급/hinoki 1.jpg',

  '편백 10×40×2400 (유절)': 'images/히노끼/편_40/40_유절.jpg',
  '편백 10×40×2400 (무절)': 'images/히노끼/편_40/3000 2900.jpg',

  '편백 10×50×2400 (유절)': 'images/히노끼/편백 - 50mm 무절/10 50 유절.jpg',
  '편백 10×50×2400 (무절)': 'images/히노끼/편백 - 50mm 무절/10 50 무절.jpg',

  '편백 10×60×2400 (유절)': 'images/히노끼/편백 - 60mm 무절/10 60 유절.jpg',
  '편백 10×60×2400 (무절)': 'images/히노끼/편백 - 60mm 무절/3000 2900.jpg',

  '편백 10×80×2400 (유절)': 'images/히노끼/편백 - 80mm 유절/3000 2900.jpg',

  '마감재 10×80×2400 (유절)': 'images/히노끼/hinoki 마감재/마감재.jpg',

  '14×136×3600 (무절)': 'images/오비스기/오비스기 무절.jpg',
  '오비스기': 'images/오비스기/ChatGPT Image Feb 24, 2026, 01_14_02 PM.png',

  '폼다루끼': 'images/투바이/ChatGPT Image May 22, 2026, 09_20_48 AM.png',
  '투바이': 'images/투바이/20260522_092702.png',
  '오비끼': 'images/오비끼/20260522_092236.png',





  '반재단 합판': 'images/반재단합판.png',

  '합판': 'images/합판/일반 합판 당근.jpg',

  '낙엽송합판 4.8T': 'images/합판/낙엽송.png',
  '낙엽송합판 7.5T': 'images/합판/낙엽송.png',

  '방수합판': 'images/방수합판/ChatGPT Image May 21, 2026, 11_05_33 AM.png',

  '오쿠메': 'images/합판/오쿠메.png',
  '자작합판': 'images/자작/자작.png',
  'MDF': 'images/합판/mdf.png',
  '라왕': 'images/합판/라왕.png',

  '태고합판(양면) 11.5T×4×8': 'images/합판/태고 합판.png',
  '태고합판(양면) 11.5T×3×6': 'images/합판/태고 합판.png',

  'OSB 8T (말레이시아)': 'images/합판/osb.png',
  'OSB 11.1T (말레이시아)': 'images/합판/osb.png',
  'OSB 18.3T (말레이시아)': 'images/합판/osb.png',

  'OSB 18.3T (말레이시아)': 'images/합판/osb.png',


  '멀바우 3×8':'images/멀바우/멀바우.png',
  '멀바우 4×8':'images/멀바우/멀바우.png',
  '라디에타 3×8':'images/라디에타/라디에타.png',
  '라디에타 4×8':'images/라디에타/라디에타.png',
  '아카시아 4×8':'images/아카시아/아카시아.png',
  '고무나무 4×8':'',




  




  


















  


  

  // 특정 제품만 따로 다른 사진 (선택사항):
  // '자작합판 30T':      'images/자작합판_30T.jpg',
  // '멀바우 계단판 38T': 'images/멀바우계단판.jpg',
};

/* ═══════════════════════════════════════════════
   RENDER TABLE — har qatorda 사진 tugmasi
═══════════════════════════════════════════════ */

/* 이미지 URL 가져오기: 제품명 → 없으면 카테고리명 순서로 찾음 */
function getPhotoUrl(productName, categoryName) {
  if (PHOTO_MAP[productName]) return PHOTO_MAP[productName];
  if (PHOTO_MAP[categoryName]) return PHOTO_MAP[categoryName];
  return '';
}
function renderTable(data) {
  const tbody = document.getElementById('tableBody');
  const empty = document.getElementById('emptyState');
  if (!data.length) { tbody.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display = 'none';

  let html = '', lastC = '', gi = 0;

  data.forEach(r => {
    if (r.c !== lastC) {
      gi++;
      html += `<tr class="grp-row"><td class="grp-td">
        <div style="display:flex;align-items:center;gap:8px">
          <span class="grp-num">${gi}</span>
          <span class="grp-label">${esc(r.c)}</span>
        </div>
      </td></tr>`;
      lastC = r.c;
    }

    const pr = r.p != null
      ? `<span class="price-tag"><span class="cur">₩</span><span class="amt">${fmt(r.p)}</span></span>`
      : `<span class="price-empty">별도 문의</span>`;

    const safeName = r.n.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
    const safeCat  = r.c.replace(/\\/g,'\\\\').replace(/'/g,"\\'");

    html += `<tr class="data-row"><td class="card-td">
      <div class="card-name">
        <span class="card-name-text">${hi(r.n, currentQ)}</span>
        <button class="photo-pill-btn" onclick="openModal('${safeName}','${safeCat}')">
          <svg viewBox="0 0 16 16" fill="none" width="12" height="12" style="flex-shrink:0"><rect x="1" y="2.5" width="14" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="8" r="2.2" stroke="currentColor" stroke-width="1.5"/><path d="M5.5 2.5l1-2h3l1 2" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>사진
        </button>
      </div>
      <div class="card-spec">${hi(r.s, currentQ)}</div>
      <div class="card-bottom">
        <div class="card-price-wrap">${pr}<span class="card-unit">${esc(r.u||'—')}</span></div>
        ${stockBadge(r.st)}
      </div>
    </td></tr>`;
  });
  tbody.innerHTML = html;
}

/* ═══════════════════════════════════════════════
   PHOTO MODAL — 제품명(r.n) 기준으로 이미지 표시
═══════════════════════════════════════════════ */
function openModal(productName, categoryName) {
  const modal = document.getElementById('photoModal');
  const body  = document.getElementById('modalBody');
  if (!modal || !body) return;

  /* 타이틀 span 텍스트만 교체 */
  const titleSpan = modal.querySelector('#modalTitle span');
  if (titleSpan) titleSpan.textContent = productName;

  /* 제품명 → 없으면 카테고리명으로 이미지 찾기 */
  const imgUrl = getPhotoUrl(productName, categoryName || '');

  /* body 비우고 새로 만들기 */
  body.innerHTML = '';

  if (imgUrl) {
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = productName;
    img.style.cssText = 'max-width:100%;max-height:60vh;object-fit:contain;border-radius:12px;display:block;margin:0 auto';
    img.onerror = function() {
      body.innerHTML = '';
      const ph = document.createElement('div');
      ph.className = 'modal-ph';
      ph.innerHTML = '<svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="20" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M4 32l10-8 8 6 6-5 16 11" stroke="currentColor" stroke-width="1.5"/></svg><p><strong>' + esc(productName) + '</strong><br>이미지를 불러올 수 없습니다.<br>문의: <strong>1800-6404</strong></p>';
      body.appendChild(ph);
    };
    body.appendChild(img);
  } else {
    const ph = document.createElement('div');
    ph.className = 'modal-ph';
    ph.innerHTML = '<svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="20" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M4 32l10-8 8 6 6-5 16 11" stroke="currentColor" stroke-width="1.5"/></svg><p><strong>' + esc(productName) + '</strong><br>이미지를 준비 중입니다.<br>문의: <strong>1800-6404</strong></p>';
    body.appendChild(ph);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  const modal = document.getElementById('photoModal');
  if (modal) { modal.classList.remove('active'); document.body.style.overflow=''; }
}
document.addEventListener('keydown', e => { if (e.key==='Escape') closeModal(); });

/* ═══════════════════════════════════════════════
   MASTER RENDER
═══════════════════════════════════════════════ */
function render() {
  filteredData = getFiltered();
  const countEl = document.getElementById('resultCount');
  if (countEl) {
    countEl.textContent = (currentCat || currentQ)
      ? filteredData.length + ' / ' + PRODUCTS.length + '건'
      : '총 ' + PRODUCTS.length + '건';
  }
  renderTable(filteredData);
}

/* ═══════════════════════════════════════════════
   EVENTS
═══════════════════════════════════════════════ */
function initEvents() {
  /* Search */
  const si = document.getElementById('searchInput');
  const cb = document.getElementById('clearBtn');
  if (si) si.addEventListener('input', () => {
    currentQ = si.value.trim();
    if (cb) cb.classList.toggle('visible', currentQ.length > 0);
    render();
  });
  if (cb) cb.addEventListener('click', () => {
    if (si) si.value = '';
    currentQ = '';
    cb.classList.remove('visible');
    if (si) si.focus();
    render();
  });

  /* Category tabs */
  const catInner = document.getElementById('catInner');
  if (catInner) {
    catInner.addEventListener('click', e => {
      const btn = e.target.closest('.cat-btn');
      if (!btn) return;
      catInner.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.c;
      render();

      /* ✅ 카테고리 클릭 시 테이블 상단으로 부드럽게 스크롤 */
      const priceSection = document.getElementById('price');
      if (priceSection) {
        const offset = priceSection.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
    /* Mouse drag scroll */
    let dragging = false, sx = 0, sl = 0;
    catInner.addEventListener('mousedown', e => { dragging=true; sx=e.pageX; sl=catInner.scrollLeft; catInner.style.cursor='grabbing'; });
    window.addEventListener('mousemove', e => { if(!dragging) return; e.preventDefault(); catInner.scrollLeft = sl-(e.pageX-sx); });
    window.addEventListener('mouseup', () => { dragging=false; catInner.style.cursor=''; });
  }

  /* Sort */
  const ss = document.getElementById('sortSelect');
  if (ss) ss.addEventListener('change', () => { currentSort=ss.value; render(); });

  /* Reset */
  const rb = document.getElementById('resetBtn');
  if (rb) rb.addEventListener('click', () => {
    if (si) si.value=''; currentQ=''; currentCat=''; currentSort='';
    if (cb) cb.classList.remove('visible');
    if (catInner) { catInner.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active')); const all=catInner.querySelector('[data-c=""]'); if(all)all.classList.add('active'); }
    if (ss) ss.value='';
    render();
  });

  /* Navbar scroll */
  const navbar = document.getElementById('navbar');
  if (navbar) window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY>10); }, {passive:true});

  /* Form + SMS 알림 */
  const fsBtn = document.getElementById('formSubmit');
  if (fsBtn) fsBtn.addEventListener('click', () => {
    const name  = (document.getElementById('fName')||{}).value||'';
    const phone = (document.getElementById('fPhone')||{}).value||'';
    const email = (document.getElementById('fEmail')||{}).value||'';
    const msg   = (document.getElementById('fMsg')||{}).value||'';
    if (!name.trim())  { showStat('error','⚠ 성함 또는 회사명을 입력해주세요.'); return; }
    if (!phone.trim()) { showStat('error','⚠ 연락처를 입력해주세요.'); return; }
    if (!msg.trim())   { showStat('error','⚠ 문의 내용을 입력해주세요.'); return; }

    /* ── SMS 발송: 담당자 010-4584-0219 에게 내용 전송 ── */
    const smsBody = encodeURIComponent(
      `[포레 견적문의]\n성함: ${name}\n연락처: ${phone}${email ? '\n이메일: '+email : ''}\n\n내용:\n${msg}`
    );
    /* 모바일에서 SMS 앱 열기 (number?body=text 형식) */
    const smsTarget = '01045840219';
    const smsLink   = `sms:${smsTarget}${/iPhone|iPad|iPod/i.test(navigator.userAgent) ? '&' : '?'}body=${smsBody}`;

    /* 성공 메시지 먼저 표시 */
    showStat('success','✅ 문의가 접수되었습니다! 담당자가 빠른 시일 내 연락드리겠습니다.\n문자 앱이 열립니다 — 전송 버튼을 눌러 발송해 주세요.');

    /* 폼 초기화 */
    ['fName','fPhone','fEmail','fMsg'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});

    /* 잠시 후 SMS 앱 열기 */
    setTimeout(() => { window.location.href = smsLink; }, 700);
  });

  function showStat(type, msg) {
    const s = document.getElementById('formStatus');
    if (!s) return;
    s.className='form-status '+type;
    s.textContent=msg;
    s.style.display='';
    s.scrollIntoView({behavior:'smooth',block:'nearest'});
  }
}

/* ═══════════════════════════════════════════════
   LOADER ANIMATION
═══════════════════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  const bar    = document.getElementById('loaderBar');
  let prog = 0;
  const tick = () => {
    prog += Math.random()*20+6;
    if (prog >= 100) {
      prog = 100;
      if (bar) bar.style.width = '100%';
      setTimeout(() => { if(loader) loader.classList.add('done'); }, 350);
    } else {
      if (bar) bar.style.width = prog + '%';
      setTimeout(tick, 100+Math.random()*80);
    }
  };
  setTimeout(tick, 200);
}

/* ═══════════════════════════════════════════════
   SCROLL ANIMATIONS (data-anim)
═══════════════════════════════════════════════ */
function initScrollAnim() {
  const els = document.querySelectorAll('[data-anim]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.delay || 0;
        setTimeout(() => { e.target.classList.add('animated'); }, +delay);
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.1});
  els.forEach(el => obs.observe(el));
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
(function init() {
  /* FAILSAFE: 어떤 일이 있어도 5초 후 loader 강제 종료 */
  setTimeout(() => {
    const ldr = document.getElementById('loader');
    if (ldr && !ldr.classList.contains('done')) {
      ldr.classList.add('done');
    }
  }, 5000);

  try { initLoader(); } catch(e) { console.error('initLoader:', e); }
  try { initSecurity(); } catch(e) { console.error('initSecurity:', e); }

  const dateEl = document.getElementById('statDate');
  if (dateEl) dateEl.textContent = todayStr();

  try { initEvents(); } catch(e) { console.error('initEvents:', e); }
  try { initScrollAnim(); } catch(e) { console.error('initScrollAnim:', e); }
  try { render(); } catch(e) { console.error('render:', e); }
})();

/* ═══════════════════════════════════════════════════════════════
   🛡️ SECURITY MODULE
   - Rate limiting (클릭/검색 속도 제한)
   - Bot / headless browser detection
   - DevTools open detection + blur
   - Honeypot trap
   - Copy protection (가격 데이터 드래그 방지)
   - Console warnings
   - Request fingerprinting
═══════════════════════════════════════════════════════════════ */
function initSecurity() {

  /* ── 1. CONSOLE WARNINGS ──────────────────────────────── */
  const _warn = [
    '%c⛔ 경고 / SECURITY WARNING',
    'color:#e53e3e;font-size:22px;font-weight:900;font-family:monospace',
    '\n\n%c이 콘솔은 개발자 전용입니다.\n악의적인 코드를 붙여넣으면 계정 정보 도용 등\n보안 침해가 발생할 수 있습니다.\n\n이 사이트의 데이터를 무단 수집하는 행위는\n정보통신망법 위반입니다.\n\n© (주)포레 FORE TIMBER',
    'color:#333;font-size:13px;font-family:monospace;line-height:1.8',
  ];
  console.log(..._warn);

  /* ── 2. BOT / HEADLESS BROWSER DETECTION ─────────────── */
  (function detectBot() {
    const signals = {
      webdriver:   navigator.webdriver === true,
      noPlugins:   navigator.plugins.length === 0 && !navigator.userAgent.includes('Mobi'),
      noLang:      !navigator.language || navigator.language === '',
      phantom:     typeof window.callPhantom === 'function' || typeof window._phantom !== 'undefined',
      nightmare:   typeof window.__nightmare !== 'undefined',
      selenium:    typeof document.$cdc_asdjflasutopfhvcZLmcfl_ !== 'undefined',
      puppeteer:   typeof window._puppeteer !== 'undefined',
    };
    const botScore = Object.values(signals).filter(Boolean).length;
    /* 모바일 환경 보호: 매우 명확한 봇 신호만 차단 (>=4) */
    if (botScore >= 4) {
      setTimeout(() => {
        const tbody = document.getElementById('tableBody');
        if (tbody) tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:40px;color:#888;">데이터를 불러올 수 없습니다. 직접 문의해 주세요.<br>1800-6404</td></tr>';
      }, 2000 + Math.random()*3000);
    }
  })();

  /* ── 3. RATE LIMITER ─────────────────────────────────── */
  (function rateLimit() {
    const limits = {
      click:  { max:60,  window:10000, count:0, last:Date.now() },
      search: { max:30,  window:10000, count:0, last:Date.now() },
      key:    { max:200, window:10000, count:0, last:Date.now() },
    };
    function check(type) {
      const L = limits[type];
      const now = Date.now();
      if (now - L.last > L.window) { L.count=0; L.last=now; }
      L.count++;
      if (L.count > L.max) {
        showOverlay('⚠️ 비정상적인 사용이 감지되었습니다.<br>잠시 후 다시 이용해 주세요.');
        return false;
      }
      return true;
    }
    document.addEventListener('click',       () => check('click'),  {passive:true});
    document.addEventListener('keydown',     () => check('key'),    {passive:true});
    const si = document.getElementById('searchInput');
    if (si) si.addEventListener('input', () => check('search'), {passive:true});
  })();

  /* ── 4. DEVTOOLS DETECTION + BLUR ───────────────────── */
  (function devtools() {
    let devOpen = false;
    let blurEl  = null;

    function check() {
      /* devtools detection — debugger 제거 (브라우저 호환성) */
      const t = performance.now();
      const dt = performance.now() - t;
      const open = dt > 80;
      if (open !== devOpen) {
        devOpen = open;
        if (open) onDevOpen();
        else onDevClose();
      }
    }
    function onDevOpen() {
      /* 민감한 데이터 영역 흐리게 처리 */
      blurEl = document.getElementById('tableBody');
      if (blurEl) {
        blurEl.style.transition = 'filter 0.4s';
        blurEl.style.filter = 'blur(6px)';
        blurEl.style.userSelect = 'none';
      }
    }
    function onDevClose() {
      if (blurEl) {
        blurEl.style.filter = '';
        blurEl.style.userSelect = '';
      }
    }
    /* 크기 변화로도 감지 */
    const threshold = 160;
    window.addEventListener('resize', () => {
      const diff = window.outerWidth - window.innerWidth;
      if (diff > threshold || window.outerHeight - window.innerHeight > threshold) onDevOpen();
      else onDevClose();
    }, {passive:true});

    setInterval(check, 1500);
  })();

  /* ── 5. HONEYPOT TRAP ────────────────────────────────── */
  (function honeypot() {
    /* 숨겨진 링크 — 봇이 클릭하면 차단 */
    const trap = document.createElement('a');
    trap.href    = '/robot-trap';
    trap.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;opacity:0';
    trap.setAttribute('tabindex','-1');
    trap.setAttribute('aria-hidden','true');
    trap.textContent = 'admin-login';
    trap.addEventListener('click', e => {
      e.preventDefault();
      showOverlay('🤖 봇 접근이 차단되었습니다.<br>Bot access blocked.');
      /* 모든 이벤트 정지 */
      document.body.style.pointerEvents = 'none';
      setTimeout(() => { document.body.style.pointerEvents = ''; }, 15000);
    });
    document.body.appendChild(trap);

    /* 숨겨진 폼 필드 (자동 완성 봇 트랩) */
    const fakeField = document.createElement('input');
    fakeField.type  = 'text';
    fakeField.name  = 'username';
    fakeField.style.cssText = 'position:absolute;left:-9999px;top:-9999px;opacity:0;pointer-events:none';
    fakeField.setAttribute('autocomplete','username');
    fakeField.setAttribute('tabindex','-1');
    fakeField.setAttribute('aria-hidden','true');
    fakeField.addEventListener('input', () => {
      if (fakeField.value.length > 0) {
        showOverlay('🤖 비정상적인 입력이 감지되었습니다.');
        fakeField.value = '';
      }
    });
    document.body.appendChild(fakeField);
  })();

  /* ── 6. COPY PROTECTION (가격 데이터) ────────────────── */
  (function copyProtect() {
    /* Ctrl+A 전체 선택 방지 (테이블 내) */
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey||e.metaKey) && e.key==='a') {
        const active = document.activeElement;
        const inInput = active && (active.tagName==='INPUT'||active.tagName==='TEXTAREA');
        if (!inInput) e.preventDefault();
      }
      /* F12 개발자 도구 단축키 */
      if (e.key==='F12') {
        e.preventDefault();
        console.log('%c🔒 개발자 도구는 비활성화되어 있습니다.','color:red;font-size:14px;font-weight:bold');
      }
    });
    /* 우클릭 컨텍스트 메뉴 — 테이블에서만 방지 */
    const tableWrap = document.querySelector('.table-wrap');
    if (tableWrap) {
      tableWrap.addEventListener('contextmenu', e => e.preventDefault());
    }
    /* 드래그로 텍스트 선택 방지 (테이블 내 숫자) */
    const priceCells = document.querySelectorAll('.price-tag .amt');
    priceCells.forEach(el => { el.style.userSelect='none'; el.style.webkitUserSelect='none'; });
  })();

  /* ── 7. SECURITY OVERLAY ─────────────────────────────── */
  function showOverlay(msg) {
    const ov = document.createElement('div');
    ov.innerHTML = `
      <div style="position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;font-family:var(--font)">
        <div style="font-size:48px">🛡️</div>
        <div style="color:#fff;font-size:18px;font-weight:700;text-align:center;line-height:1.6">${msg}</div>
        <div style="color:rgba(255,255,255,0.5);font-size:13px">© (주)포레 FORE TIMBER</div>
        <button onclick="this.parentElement.parentElement.remove()" style="margin-top:10px;padding:10px 28px;background:#3b5448;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;">확인</button>
      </div>`;
    document.body.appendChild(ov);
  }

  /* ── 8. REQUEST FINGERPRINT SIMULATION ───────────────── */
  (function fingerprint() {
    /* 실제 서버 없이 클라이언트 측 세션 ID 생성 */
    if (!sessionStorage.getItem('_fp')) {
      const fp = (Date.now() * Math.random()).toString(36) + Math.random().toString(36);
      sessionStorage.setItem('_fp', fp);
    }
    /* 비정상적으로 빠른 페이지 로드 감지 (봇은 보통 <100ms) */
    const loadTime = performance.now();
    if (loadTime < 50) {
      console.warn('[Security] Suspiciously fast load detected:', loadTime.toFixed(2)+'ms');
    }
  })();

} /* END initSecurity */

