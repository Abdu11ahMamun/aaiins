<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>AAIINS Lab — Applied AI & Intelligent Systems</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet"/>
<style>
:root{
  --bg:#08111f;
  --bg-2:#0d1728;
  --bg-3:#122038;
  --panel:#0f1b2d;
  --panel-2:#13233b;
  --card:rgba(255,255,255,0.06);
  --card-strong:rgba(255,255,255,0.09);
  --line:rgba(255,255,255,0.10);
  --text:#e8eef8;
  --muted:#9fb0c7;
  --muted-2:#7f90a8;
  --white:#ffffff;
  --teal:#36e1c6;
  --teal-2:#18bba3;
  --blue:#68a8ff;
  --indigo:#8b8cff;
  --glow:rgba(54,225,198,0.32);
  --shadow:0 12px 40px rgba(0,0,0,0.24);
  --shadow-lg:0 28px 80px rgba(0,0,0,0.40);
  --radius:18px;
  --radius-lg:26px;
  --nav-h:72px;
  --tr:280ms cubic-bezier(.2,.8,.2,1);
  --max:1240px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:Inter,Segoe UI,system-ui,-apple-system,sans-serif;
  background:
    radial-gradient(circle at 15% 20%, rgba(54,225,198,0.09), transparent 24%),
    radial-gradient(circle at 82% 12%, rgba(104,168,255,0.10), transparent 22%),
    linear-gradient(180deg,var(--bg),var(--bg-2) 45%,#0a1220 100%);
  color:var(--text);
  line-height:1.65;
  overflow-x:hidden;
}
a{text-decoration:none;color:inherit}
button{font:inherit}

/* background stage */
.bg-grid,
.bg-noise,
.bg-orbs,
#particle-canvas{position:fixed;inset:0;pointer-events:none}
.bg-grid{z-index:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);background-size:44px 44px;mask-image:linear-gradient(to bottom, rgba(255,255,255,.9), rgba(255,255,255,.2));opacity:.18}
.bg-noise{z-index:0;opacity:.06;background-image:radial-gradient(rgba(255,255,255,.8) .55px, transparent .7px);background-size:12px 12px}
.bg-orbs{z-index:0;overflow:hidden}
.orb{position:absolute;border-radius:50%;filter:blur(18px);opacity:.35;animation:floatOrb 16s ease-in-out infinite}
.orb.a{width:420px;height:420px;left:-120px;top:140px;background:radial-gradient(circle, rgba(54,225,198,.38), transparent 62%)}
.orb.b{width:500px;height:500px;right:-160px;top:60px;background:radial-gradient(circle, rgba(104,168,255,.28), transparent 62%);animation-delay:-4s}
.orb.c{width:360px;height:360px;right:24%;bottom:-120px;background:radial-gradient(circle, rgba(139,140,255,.22), transparent 62%);animation-delay:-8s}
@keyframes floatOrb{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,-18px,0)}}
#particle-canvas{z-index:0;opacity:.55}

/* shared */
.page{display:none;position:relative;z-index:1;padding-top:var(--nav-h);min-height:100vh}
.page.active{display:block}
.container{max-width:var(--max);margin:0 auto;padding:0 24px}
section{padding:88px 0}
.section-head{margin-bottom:34px}
.section-label{font-size:.75rem;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);font-weight:800;margin-bottom:10px}
.section-title{font-size:clamp(1.8rem,3vw,2.7rem);font-weight:800;letter-spacing:-.04em;margin-bottom:12px}
.section-sub{max-width:720px;color:var(--muted);font-size:1rem}
.text-center{text-align:center}.text-center .section-sub{margin:0 auto}
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}

.glass{
  background:linear-gradient(180deg, rgba(255,255,255,.09), rgba(255,255,255,.05));
  border:1px solid var(--line);
  box-shadow:var(--shadow);
  backdrop-filter:blur(16px);
}
.card{
  position:relative;
  border-radius:var(--radius);
  background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.05));
  border:1px solid var(--line);
  box-shadow:var(--shadow);
  overflow:hidden;
  transition:transform var(--tr), box-shadow var(--tr), border-color var(--tr), background var(--tr);
  transform-style:preserve-3d;
}
.card::before{
  content:"";position:absolute;inset:0;
  background:linear-gradient(135deg, rgba(255,255,255,.10), transparent 32%, transparent 68%, rgba(54,225,198,.10));
  opacity:.75;pointer-events:none;
}
.card::after{
  content:"";position:absolute;inset:-1px;
  background:radial-gradient(240px circle at var(--mx,50%) var(--my,50%), rgba(54,225,198,.14), transparent 40%);
  opacity:0;transition:opacity var(--tr);pointer-events:none;
}
.card:hover{border-color:rgba(54,225,198,.28);box-shadow:0 18px 60px rgba(0,0,0,.33),0 0 0 1px rgba(54,225,198,.06) inset}
.card:hover::after{opacity:1}
.card-body{position:relative;z-index:1;padding:26px}
.elevate{transform-style:preserve-3d}
.depth-1{transform:translateZ(16px)}
.depth-2{transform:translateZ(30px)}
.depth-3{transform:translateZ(44px)}

.badge{
  display:inline-flex;align-items:center;gap:8px;
  padding:7px 14px;border-radius:999px;
  border:1px solid rgba(54,225,198,.24);
  background:rgba(54,225,198,.08);
  color:var(--teal);font-size:.76rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:13px 18px;border-radius:12px;border:1px solid transparent;font-size:.92rem;font-weight:700;transition:all var(--tr);cursor:pointer}
.btn-primary{background:linear-gradient(135deg,var(--teal),#69f0da);color:#07231f;box-shadow:0 10px 32px rgba(54,225,198,.26)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(54,225,198,.30)}
.btn-secondary{background:rgba(255,255,255,.04);color:var(--white);border-color:rgba(255,255,255,.16)}
.btn-secondary:hover{background:rgba(255,255,255,.08);transform:translateY(-2px)}
.btn-ghost{background:transparent;color:var(--teal);border-color:rgba(54,225,198,.28)}
.btn-ghost:hover{background:rgba(54,225,198,.08);transform:translateY(-2px)}

/* nav */
nav{
  position:fixed;top:0;left:0;right:0;height:var(--nav-h);z-index:50;
  border-bottom:1px solid rgba(255,255,255,.08);
  background:rgba(7,13,25,.60);backdrop-filter:blur(18px);
}
.nav-inner{max-width:var(--max);height:100%;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:16px}
.logo{display:flex;align-items:center;gap:12px;cursor:pointer}
.logo-mark{width:42px;height:42px;border-radius:14px;background:linear-gradient(135deg, rgba(54,225,198,.95), rgba(104,168,255,.95));display:grid;place-items:center;box-shadow:0 10px 26px rgba(54,225,198,.25)}
.logo-mark i{color:#fff;font-size:1.1rem}
.logo-text{font-size:1.1rem;font-weight:900;letter-spacing:-.02em}
.logo-text span{color:var(--teal)}
.nav-links{display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.nav-links a{padding:10px 14px;color:var(--muted);border-radius:10px;font-size:.9rem;font-weight:600;transition:all var(--tr)}
.nav-links a:hover{color:var(--white);background:rgba(255,255,255,.06)}
.nav-links a.active{color:var(--white);background:rgba(255,255,255,.07);box-shadow:inset 0 -2px 0 var(--teal)}
.nav-cta{background:linear-gradient(135deg,var(--teal),#78f1de)!important;color:#08211e!important;box-shadow:0 8px 24px rgba(54,225,198,.22)}
.nav-cta.active{box-shadow:none!important}

/* hero */
.hero{min-height:calc(100vh - var(--nav-h));display:flex;align-items:center;padding:72px 0 40px}
.hero-grid{display:grid;grid-template-columns:minmax(0,1fr) 450px;gap:42px;align-items:center}
.hero h1{font-size:clamp(2.6rem,5vw,4.6rem);line-height:1.02;letter-spacing:-.055em;margin:16px 0 18px;font-weight:900}
.hero .lead{font-size:1.06rem;color:var(--muted);max-width:650px;line-height:1.9;margin-bottom:28px}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px}
#tw{color:var(--teal);border-right:3px solid var(--teal);padding-right:2px;animation:blink .8s step-end infinite}
@keyframes blink{50%{border-color:transparent}}
.hero-visual{perspective:1400px}
.hero-panel{padding:24px;border-radius:var(--radius-lg);position:relative;transform-style:preserve-3d}
.hero-panel::before{content:"";position:absolute;inset:-1px;border-radius:inherit;background:linear-gradient(135deg, rgba(255,255,255,.15), transparent 30%, transparent 70%, rgba(54,225,198,.2));pointer-events:none}
.hero-stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:18px}
.stat-box{padding:18px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);text-align:center;transform:translateZ(18px)}
.stat-box .num{font-size:1.9rem;font-weight:800;color:var(--white)}
.stat-box .lbl{font-size:.74rem;color:var(--muted-2);text-transform:uppercase;letter-spacing:.1em;margin-top:4px}
.domain-tags{display:flex;flex-wrap:wrap;gap:8px}
.tag{display:inline-flex;align-items:center;padding:7px 11px;border-radius:999px;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.05);font-size:.76rem;color:var(--text)}
.tag.teal{border-color:rgba(54,225,198,.22);background:rgba(54,225,198,.08);color:var(--teal)}
.tag.blue{border-color:rgba(104,168,255,.24);background:rgba(104,168,255,.10);color:#a6cbff}
.tag.indigo{border-color:rgba(139,140,255,.24);background:rgba(139,140,255,.10);color:#bbb8ff}
.hero-rings{position:absolute;inset:auto -20px -18px auto;width:180px;height:180px;border-radius:50%;border:1px solid rgba(255,255,255,.08);transform:translateZ(50px)}
.hero-rings::before,.hero-rings::after{content:"";position:absolute;inset:16px;border-radius:50%;border:1px solid rgba(54,225,198,.16)}
.hero-rings::after{inset:34px;border-color:rgba(104,168,255,.16)}

.stats-strip{padding:24px 0 0}
.stats-wrap{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.metric{padding:22px;border-radius:18px;text-align:center}
.metric .s-num{font-size:2.2rem;font-weight:850;color:var(--white)}
.metric .s-lbl{font-size:.78rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em;margin-top:5px}

/* page hero */
.page-hero{padding:54px 0 24px;position:relative}
.page-hero-panel{padding:34px;border-radius:24px;text-align:center}
.page-hero h1{font-size:clamp(2rem,4vw,3rem);font-weight:850;letter-spacing:-.04em;margin-bottom:10px}
.page-hero p{max-width:760px;margin:0 auto;color:var(--muted)}

/* research */
.r-icon{width:58px;height:58px;border-radius:16px;display:grid;place-items:center;font-size:1.28rem;border:1px solid rgba(255,255,255,.10);box-shadow:inset 0 1px 0 rgba(255,255,255,.06)}
.r-icon.teal{background:linear-gradient(135deg, rgba(54,225,198,.18), rgba(54,225,198,.06));color:var(--teal)}
.r-icon.blue{background:linear-gradient(135deg, rgba(104,168,255,.18), rgba(104,168,255,.06));color:#9cc2ff}
.r-icon.amber{background:linear-gradient(135deg, rgba(250,204,21,.18), rgba(250,204,21,.06));color:#ffd86f}
.r-icon.rose{background:linear-gradient(135deg, rgba(244,63,94,.18), rgba(244,63,94,.06));color:#ff9bb0}
.r-icon.emerald{background:linear-gradient(135deg, rgba(16,185,129,.18), rgba(16,185,129,.06));color:#68f0bb}
.research-card h3,.card h3{font-size:1.03rem;font-weight:760;margin-bottom:10px}
.card p{color:var(--muted);font-size:.92rem}

/* people */
.people-section{margin-bottom:38px}
.people-section-title{display:flex;align-items:center;gap:10px;font-size:1rem;font-weight:800;color:var(--white);margin-bottom:18px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.10)}
.people-section-title i{color:var(--teal)}
.person-card{border-radius:18px;overflow:hidden;background:linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.05));border:1px solid var(--line);box-shadow:var(--shadow);transition:transform var(--tr), box-shadow var(--tr), border-color var(--tr);transform-style:preserve-3d}
.person-card:hover{border-color:rgba(54,225,198,.26);box-shadow:0 20px 60px rgba(0,0,0,.34)}
.person-avatar{aspect-ratio:1;display:grid;place-items:center;font-size:1.8rem;font-weight:800;background:
  radial-gradient(circle at 30% 30%, rgba(54,225,198,.18), transparent 30%),
  linear-gradient(135deg,#142238,#1a2a44 55%,#122038);color:var(--white);position:relative;overflow:hidden}
.person-avatar::after{content:"";position:absolute;inset:auto -20% -35% auto;width:80%;height:80%;background:radial-gradient(circle, rgba(54,225,198,.16), transparent 60%);transform:translateZ(20px)}
.person-info{padding:18px 18px 22px}
.person-info h4{font-size:.95rem;font-weight:780;margin-bottom:4px}
.person-role{font-size:.7rem;color:var(--teal);text-transform:uppercase;letter-spacing:.08em;font-weight:800;margin-bottom:6px}
.person-join{font-size:.75rem;color:var(--muted-2);margin-bottom:8px}
.person-bio{font-size:.82rem;color:var(--muted);line-height:1.7}
.director-card{display:grid;grid-template-columns:220px 1fr;border-radius:24px;overflow:hidden}
.director-card .person-avatar{aspect-ratio:auto;min-height:220px;font-size:3rem}
.director-card .person-info{padding:28px 30px}

/* pubs */
.pub-group{margin-bottom:34px}
.pub-group-title{display:flex;align-items:center;gap:10px;flex-wrap:wrap;font-size:1.08rem;font-weight:800;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.10)}
.pub-badge{padding:6px 10px;border-radius:999px;font-size:.72rem;font-weight:800;letter-spacing:.04em}
.pub-badge.published{background:rgba(34,197,94,.14);color:#7bf2ac;border:1px solid rgba(34,197,94,.22)}
.pub-badge.review{background:rgba(250,204,21,.14);color:#ffe27e;border:1px solid rgba(250,204,21,.24)}
.pub-item{padding:22px 24px;border-radius:18px;background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.05));border:1px solid var(--line);box-shadow:var(--shadow);margin-bottom:12px;position:relative;overflow:hidden}
.pub-item::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,var(--blue),var(--teal))}
.pub-title{font-size:1rem;font-weight:760;line-height:1.55;margin-bottom:6px}
.pub-authors{font-size:.86rem;color:var(--muted);margin-bottom:4px}
.pub-journal{font-size:.86rem;color:#9cc2ff;font-weight:700;margin-bottom:14px}
.pub-actions{display:flex;gap:10px;flex-wrap:wrap}
.pub-btn{display:inline-flex;align-items:center;gap:7px;padding:9px 12px;border-radius:10px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:var(--text);font-size:.82rem;font-weight:700;transition:all var(--tr)}
.pub-btn:hover{transform:translateY(-2px);border-color:rgba(104,168,255,.28);background:rgba(104,168,255,.10)}

/* mentors */
.mentor-card{display:grid;grid-template-columns:76px 1fr;gap:18px;align-items:start}
.mentor-avatar{width:76px;height:76px;border-radius:50%;display:grid;place-items:center;font-size:1.2rem;font-weight:850;color:var(--white);background:linear-gradient(135deg,#17304b,#1f2942);border:1px solid rgba(54,225,198,.24);box-shadow:0 0 0 8px rgba(54,225,198,.05)}
.mentor-info h4{font-size:1rem;font-weight:800;margin-bottom:4px}.mentor-info .role{font-size:.82rem;color:var(--teal);font-weight:700;margin-bottom:2px}.mentor-info .inst{font-size:.82rem;color:var(--muted)}

/* forms */
.form-shell{padding:30px;border-radius:22px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.form-group{display:flex;flex-direction:column;gap:7px;margin-bottom:14px}
.form-group label{font-size:.8rem;font-weight:700;color:#c3d0e3}
.form-group input,.form-group select,.form-group textarea{
  width:100%;padding:13px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.04);color:var(--white);outline:none;transition:all var(--tr)
}
.form-group textarea{min-height:108px;resize:vertical}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:rgba(54,225,198,.42);box-shadow:0 0 0 4px rgba(54,225,198,.10)}
option{background:#0f1b2d;color:#fff}

.cta-strip{padding:80px 0}
.cta-panel{padding:42px;border-radius:26px;text-align:center;position:relative;overflow:hidden}
.cta-panel::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 0%, rgba(54,225,198,.16), transparent 45%);pointer-events:none}
.cta-panel h2{font-size:clamp(1.7rem,3vw,2.4rem);font-weight:850;margin-bottom:10px}
.cta-panel p{color:var(--muted);max-width:760px;margin:0 auto 22px}

/* footer */
footer{padding:24px 0 34px}
.footer-shell{padding:26px;border-radius:22px}
.footer-inner{display:grid;grid-template-columns:2fr 1fr 1fr;gap:24px;margin-bottom:18px}
.footer-brand p,.footer-col a{font-size:.86rem;color:var(--muted)}
.footer-brand p{line-height:1.8;margin-top:10px}
.footer-col h5{font-size:.74rem;text-transform:uppercase;letter-spacing:.16em;color:#cad4e4;margin-bottom:12px}
.footer-col a{display:block;margin-bottom:8px;transition:color var(--tr)}
.footer-col a:hover{color:var(--teal)}
.footer-bottom{border-top:1px solid rgba(255,255,255,.08);padding-top:16px;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap}
.footer-bottom p{font-size:.8rem;color:var(--muted-2)}

/* animation */
.fade-up{opacity:0;transform:translateY(24px);transition:opacity .7s ease, transform .7s ease}
.fade-up.visible{opacity:1;transform:none}

/* responsive */
@media (max-width:1024px){
  .hero-grid,.grid-4{grid-template-columns:1fr 1fr}
  .stats-wrap{grid-template-columns:1fr 1fr}
  .footer-inner{grid-template-columns:1fr 1fr}
}
@media (max-width:900px){
  .hero-grid{grid-template-columns:1fr}
  .hero-visual{order:-1}
  .director-card{grid-template-columns:1fr}
  .grid-3,.grid-2,.grid-4{grid-template-columns:1fr}
}
@media (max-width:640px){
  .nav-links a:not(.nav-cta){display:none}
  .form-row,.footer-inner,.stats-wrap{grid-template-columns:1fr}
  section{padding:72px 0}
  .container,.nav-inner{padding-left:18px;padding-right:18px}
}
</style>
</head>
<body>
<div class="bg-grid"></div>
<div class="bg-noise"></div>
<div class="bg-orbs"><div class="orb a"></div><div class="orb b"></div><div class="orb c"></div></div>
<canvas id="particle-canvas"></canvas>

<nav>
  <div class="nav-inner">
    <div class="logo" onclick="go('home')">
      <div class="logo-mark"><i class="fa-solid fa-brain"></i></div>
      <div class="logo-text"><span>AA</span>IINS Lab</div>
    </div>
    <div class="nav-links">
      <a onclick="go('home')" id="n-home" class="active">Home</a>
      <a onclick="go('research')" id="n-research">Research</a>
      <a onclick="go('publications')" id="n-publications">Publications</a>
      <a onclick="go('people')" id="n-people">People</a>
      <a onclick="go('mentors')" id="n-mentors">Mentors</a>
      <a onclick="go('join')" id="n-join" class="nav-cta">Join Us</a>
    </div>
  </div>
</nav>

<!-- HOME -->
<div class="page active" id="page-home">
  <section class="hero">
    <div class="container hero-grid">
      <div class="fade-up">
        <div class="badge"><i class="fa-solid fa-sparkles"></i> Global AI Research Lab</div>
        <h1>Applied Artificial Intelligence<br/>and <span id="tw"></span></h1>
        <p class="lead">AAIINS Lab brings together ambitious researchers to build intelligent systems with scientific depth and real-world impact — across computer vision, health AI, generative models, machine learning, and environmental intelligence.</p>
        <div class="hero-actions">
          <button class="btn btn-primary" onclick="go('research')"><i class="fa-solid fa-flask"></i> Explore Research</button>
          <button class="btn btn-secondary" onclick="go('publications')"><i class="fa-solid fa-book-open"></i> View Publications</button>
        </div>
      </div>
      <div class="hero-visual fade-up">
        <div class="hero-panel glass tilt-card">
          <div class="hero-stat-grid elevate">
            <div class="stat-box"><div class="num">30+</div><div class="lbl">Researchers</div></div>
            <div class="stat-box"><div class="num">12+</div><div class="lbl">Published</div></div>
            <div class="stat-box"><div class="num">20+</div><div class="lbl">Under Review</div></div>
            <div class="stat-box"><div class="num">5</div><div class="lbl">Research Areas</div></div>
          </div>
          <p style="font-size:.72rem;color:var(--muted-2);text-transform:uppercase;letter-spacing:.16em;margin-bottom:10px">Research Domains</p>
          <div class="domain-tags elevate">
            <span class="tag teal">Computer Vision</span>
            <span class="tag indigo">Generative AI</span>
            <span class="tag blue">Health Informatics</span>
            <span class="tag teal">Machine Learning</span>
            <span class="tag indigo">LLMs</span>
            <span class="tag blue">Env. Modelling</span>
          </div>
          <div class="hero-rings"></div>
        </div>
      </div>
    </div>
  </section>

  <div class="stats-strip">
    <div class="container">
      <div class="stats-wrap">
        <div class="metric glass fade-up"><div class="s-num">Q1</div><div class="s-lbl">Journal Publications</div></div>
        <div class="metric glass fade-up"><div class="s-num">3+</div><div class="s-lbl">International Collaborations</div></div>
        <div class="metric glass fade-up"><div class="s-num">30+</div><div class="s-lbl">Active Researchers</div></div>
        <div class="metric glass fade-up"><div class="s-num">2</div><div class="s-lbl">Partner Universities</div></div>
      </div>
    </div>
  </div>

  <section>
    <div class="container">
      <div class="section-head fade-up">
        <div class="section-label">What We Do</div>
        <h2 class="section-title">Research Areas with Real-World Reach</h2>
        <p class="section-sub">Our work sits at the intersection of scientific rigor, deployable intelligence, and meaningful societal impact.</p>
      </div>
      <div class="grid-3">
        <div class="card tilt-card fade-up"><div class="card-body"><div class="r-icon teal depth-2"><i class="fa fa-eye"></i></div><h3 class="depth-1">Computer Vision</h3><p class="depth-1">Advanced deep learning for image and video understanding, medical imaging, detection, recognition, and explainable perception systems.</p></div></div>
        <div class="card tilt-card fade-up"><div class="card-body"><div class="r-icon blue depth-2"><i class="fa fa-brain"></i></div><h3 class="depth-1">Machine Learning</h3><p class="depth-1">Research spanning supervised, unsupervised, and reinforcement learning for predictive, adaptive, and scalable intelligent systems.</p></div></div>
        <div class="card tilt-card fade-up"><div class="card-body"><div class="r-icon amber depth-2"><i class="fa fa-wand-magic-sparkles"></i></div><h3 class="depth-1">Generative AI</h3><p class="depth-1">Generation of text, images, audio, and multimodal content to advance interaction design, simulation, and creative intelligence.</p></div></div>
        <div class="card tilt-card fade-up"><div class="card-body"><div class="r-icon rose depth-2"><i class="fa fa-heart-pulse"></i></div><h3 class="depth-1">Health Informatics</h3><p class="depth-1">AI for clinical support, diagnosis, longitudinal modelling, and multi-modal medical decision systems with emphasis on interpretability.</p></div></div>
        <div class="card tilt-card fade-up"><div class="card-body"><div class="r-icon emerald depth-2"><i class="fa fa-leaf"></i></div><h3 class="depth-1">Environmental Modelling</h3><p class="depth-1">Satellite, sensor, and simulation-driven learning for climate, biodiversity, ecological forecasting, and sustainability analytics.</p></div></div>
        <div class="card tilt-card fade-up"><div class="card-body"><div class="r-icon teal depth-2"><i class="fa fa-robot"></i></div><h3 class="depth-1">Artificial Intelligence</h3><p class="depth-1">Foundational research in reasoning, planning, language understanding, and intelligent decision-making for complex environments.</p></div></div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="cta-panel glass fade-up">
        <h2>Science That Inspires</h2>
        <p>We create a collaborative platform for promising researchers worldwide to explore, publish, and build impactful intelligent systems that matter.</p>
        <div class="hero-actions" style="justify-content:center">
          <button class="btn btn-primary" onclick="go('people')"><i class="fa fa-users"></i> Meet the Team</button>
          <button class="btn btn-secondary" onclick="go('join')"><i class="fa fa-plus"></i> Join AAIINS</button>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-shell glass">
        <div class="footer-inner">
          <div class="footer-brand">
            <div class="logo-text"><span>AA</span>IINS Lab</div>
            <p>Applied Artificial Intelligence and Intelligent Systems Lab. Advancing research that is rigorous, collaborative, and globally relevant.</p>
            <p>📧 aaiins.research@gmail.com</p>
          </div>
          <div class="footer-col">
            <h5>Navigate</h5>
            <a onclick="go('home')">Home</a><a onclick="go('research')">Research</a><a onclick="go('publications')">Publications</a><a onclick="go('people')">People</a><a onclick="go('mentors')">Mentors</a>
          </div>
          <div class="footer-col">
            <h5>Research</h5>
            <a>Computer Vision</a><a>Health Informatics</a><a>Generative AI</a><a>Machine Learning</a><a>Environmental Modelling</a>
          </div>
        </div>
        <div class="footer-bottom"><p>© 2025 AAIINS Lab. All rights reserved.</p><p>aaiins.research@gmail.com</p></div>
      </div>
    </div>
  </footer>
</div>

<!-- RESEARCH -->
<div class="page" id="page-research">
  <div class="page-hero">
    <div class="container">
      <div class="page-hero-panel glass fade-up">
        <h1>AAIINS Research</h1>
        <p>Advancing artificial intelligence through interdisciplinary, technically rigorous, and impact-driven research.</p>
      </div>
    </div>
  </div>
  <section>
    <div class="container">
      <div class="section-head fade-up"><div class="section-label">Focus Areas</div><h2 class="section-title">What We Research</h2></div>
      <div style="display:flex;flex-direction:column;gap:18px">
        <div class="card tilt-card fade-up research-card"><div class="card-body" style="display:grid;grid-template-columns:64px 1fr;gap:18px;align-items:start"><div class="r-icon teal depth-2"><i class="fa fa-robot"></i></div><div class="depth-1"><h3>Artificial Intelligence</h3><p>We study broad AI foundations including reasoning, planning, language understanding, and autonomous decision-making to solve complex real-world problems.</p></div></div></div>
        <div class="card tilt-card fade-up research-card"><div class="card-body" style="display:grid;grid-template-columns:64px 1fr;gap:18px;align-items:start"><div class="r-icon blue depth-2"><i class="fa fa-brain"></i></div><div class="depth-1"><h3>Machine Learning</h3><p>Our ML research explores data-driven methods that learn robust representations, generalize effectively, and improve continuously across application domains.</p></div></div></div>
        <div class="card tilt-card fade-up research-card"><div class="card-body" style="display:grid;grid-template-columns:64px 1fr;gap:18px;align-items:start"><div class="r-icon teal depth-2"><i class="fa fa-eye"></i></div><div class="depth-1"><h3>Computer Vision</h3><p>We develop advanced models for visual perception, scene understanding, image analysis, medical imaging, and explainable diagnostic systems.</p></div></div></div>
        <div class="card tilt-card fade-up research-card"><div class="card-body" style="display:grid;grid-template-columns:64px 1fr;gap:18px;align-items:start"><div class="r-icon amber depth-2"><i class="fa fa-wand-magic-sparkles"></i></div><div class="depth-1"><h3>Generative AI</h3><p>We design systems that generate realistic and useful content across modalities, enabling synthesis, augmentation, simulation, and human-centered interaction.</p></div></div></div>
        <div class="card tilt-card fade-up research-card"><div class="card-body" style="display:grid;grid-template-columns:64px 1fr;gap:18px;align-items:start"><div class="r-icon rose depth-2"><i class="fa fa-heart-pulse"></i></div><div class="depth-1"><h3>Health Informatics</h3><p>Our research combines medical images, physiological signals, and records to support diagnosis, prognosis, and clinically interpretable AI decision tools.</p></div></div></div>
        <div class="card tilt-card fade-up research-card"><div class="card-body" style="display:grid;grid-template-columns:64px 1fr;gap:18px;align-items:start"><div class="r-icon emerald depth-2"><i class="fa fa-leaf"></i></div><div class="depth-1"><h3>Environmental Modelling</h3><p>We integrate sensing, remote observation, and learning-based forecasting to model environmental systems and anticipate ecological change.</p></div></div></div>
      </div>
    </div>
  </section>
</div>

<!-- PUBLICATIONS -->
<div class="page" id="page-publications">
  <div class="page-hero"><div class="container"><div class="page-hero-panel glass fade-up"><h1>Publications</h1><p>Selected contributions to journals and conferences in AI, machine learning, computer vision, and health informatics.</p></div></div></div>
  <section>
    <div class="container">
      <div class="pub-group fade-up">
        <div class="pub-group-title"><i class="fa fa-circle-check" style="color:#7bf2ac"></i> Published Papers <span class="pub-badge published">12 Papers</span></div>
        <div class="pub-item"><div class="pub-title">Atrous spatial pyramid pooling with Swin Transformer model for classification of gastrointestinal tract diseases from videos with enhanced explainability</div><div class="pub-authors">Abian, A. I., Raiaan, M. A. K., Jonkman, M., Islam, S. M. S., &amp; Azam, S. (2025)</div><div class="pub-journal">Engineering Applications of Artificial Intelligence</div><div class="pub-actions"><a class="pub-btn"><i class="fa fa-file-pdf"></i> PDF</a><a class="pub-btn"><i class="fa-brands fa-github"></i> Code</a><a class="pub-btn"><i class="fa fa-quote-right"></i> Cite</a></div></div>
        <div class="pub-item"><div class="pub-title">Advancing skin cancer detection integrating a novel unsupervised classification and enhanced imaging techniques</div><div class="pub-authors">Rahman, M. A., Fahad, N. M., Raiaan, M. A. K., Jonkman, M., De Boer, F., &amp; Azam, S. (2025)</div><div class="pub-journal">CAAI Transactions on Intelligence Technology, 10(2), 474–493</div><div class="pub-actions"><a class="pub-btn"><i class="fa fa-file-pdf"></i> PDF</a><a class="pub-btn"><i class="fa-brands fa-github"></i> Code</a><a class="pub-btn"><i class="fa fa-quote-right"></i> Cite</a></div></div>
        <div class="pub-item"><div class="pub-title">Comprehensive review of the material life cycle and sustainability of solar photovoltaic panels</div><div class="pub-authors">Abian, A. I., Azam, S., Ompong, D., &amp; Mathur, D. (2025)</div><div class="pub-journal">Solar Energy</div><div class="pub-actions"><a class="pub-btn"><i class="fa fa-file-pdf"></i> PDF</a><a class="pub-btn"><i class="fa-brands fa-github"></i> Code</a><a class="pub-btn"><i class="fa fa-quote-right"></i> Cite</a></div></div>
        <div class="pub-item"><div class="pub-title">A lightweight robust deep learning model gained high accuracy in classifying a wide range of diabetic retinopathy images</div><div class="pub-authors">Raiaan, M. A. K., Fatema, K., Khan, I. U., Azam, S., Rashid, M. R. U., Mukta, M. S. H., ... &amp; De Boer, F. (2023)</div><div class="pub-journal">IEEE Access, 11, 42361–42388</div><div class="pub-actions"><a class="pub-btn"><i class="fa fa-file-pdf"></i> PDF</a><a class="pub-btn"><i class="fa-brands fa-github"></i> Code</a><a class="pub-btn"><i class="fa fa-quote-right"></i> Cite</a></div></div>
      </div>
      <div class="pub-group fade-up">
        <div class="pub-group-title"><i class="fa fa-hourglass-half" style="color:#ffe27e"></i> Under Review <span class="pub-badge review">19 Papers</span></div>
        <div class="pub-item"><div class="pub-title">BioAutoML-NAS: An End-to-End AutoML Framework for Multimodal Insect Classification via Neural Architecture Search on Large-Scale Biodiversity Data</div><div class="pub-authors">Abian, A. I., Sutradhar, D., Rashid, M. R. U. et al. (2025)</div><div class="pub-journal">IEEE Transactions on Big Data</div><div class="pub-actions"><a class="pub-btn"><i class="fa fa-file-pdf"></i> PDF</a><a class="pub-btn"><i class="fa fa-quote-right"></i> Cite</a></div></div>
        <div class="pub-item"><div class="pub-title">Hallucination to Truth: A Review of Fact-Checking and Factuality Evaluation in Large Language Models</div><div class="pub-authors">Rahman, S. S., Islam, M. A., Alam, M. M., et al. (2025)</div><div class="pub-journal">Artificial Intelligence Review</div><div class="pub-actions"><a class="pub-btn"><i class="fa fa-file-pdf"></i> PDF</a><a class="pub-btn"><i class="fa fa-quote-right"></i> Cite</a></div></div>
        <div class="pub-item"><div class="pub-title">From language to action: A review of large language models as autonomous agents and tool users</div><div class="pub-authors">Chowa, S. S., Alvi, R., Rahman, S. S., et al. (2025)</div><div class="pub-journal">Artificial Intelligence Review</div><div class="pub-actions"><a class="pub-btn"><i class="fa fa-file-pdf"></i> PDF</a><a class="pub-btn"><i class="fa fa-quote-right"></i> Cite</a></div></div>
      </div>
    </div>
  </section>
</div>

<!-- PEOPLE -->
<div class="page" id="page-people">
  <div class="page-hero"><div class="container"><div class="page-hero-panel glass fade-up"><h1>Our People</h1><p>A growing community of researchers and scientists united by a commitment to applied intelligence.</p></div></div></div>
  <section>
    <div class="container">
      <div class="people-section director-wrap fade-up">
        <div class="people-section-title"><i class="fa fa-star"></i> Director</div>
        <div class="card director-card tilt-card">
          <div class="person-avatar">NF</div>
          <div class="person-info">
            <div class="person-role">Director</div>
            <h4>Nur Mohammad Fahad</h4>
            <div class="person-join"><i class="fa fa-calendar" style="font-size:.65rem;margin-right:5px"></i> Founding Director</div>
            <p class="person-bio">Lecturer at the University of Scholars with more than 3.5 years of active research experience. His work spans computer vision, optimization, UAV systems, and intelligent AI architectures designed for sustainable real-world impact.</p>
          </div>
        </div>
      </div>

      <div class="people-section fade-up">
        <div class="people-section-title"><i class="fa fa-shield-halved"></i> Core Team</div>
        <div class="grid-3">
          <div class="person-card tilt-card"><div class="person-avatar">AI</div><div class="person-info"><div class="person-role">Associate Director · Research Operations</div><h4>Arefin Ittesafun Abian</h4><div class="person-join">Joined August 2023</div><p class="person-bio">Research Assistant focused on computer vision, explainable AI, medical image analysis, and environmental modelling.</p></div></div>
          <div class="person-card tilt-card"><div class="person-avatar">AR</div><div class="person-info"><div class="person-role">Research Integrity &amp; Ethics</div><h4>Abdur Rahman</h4><div class="person-join">Joined August 2023</div><p class="person-bio">Specialises in machine learning, pattern recognition, signal processing, and multimodal imaging under limited-data conditions.</p></div></div>
          <div class="person-card tilt-card"><div class="person-avatar">DS</div><div class="person-info"><div class="person-role">Research Strategy &amp; Impact</div><h4>Debopom Sutradhar</h4><div class="person-join">Joined August 2023</div><p class="person-bio">Works across fracture detection, domain adaptation, CT denoising, and cross-modality segmentation.</p></div></div>
        </div>
      </div>

      <div class="people-section fade-up">
        <div class="people-section-title"><i class="fa fa-graduation-cap"></i> Graduate Researchers</div>
        <div class="grid-4">
          <div class="person-card tilt-card"><div class="person-avatar">RD</div><div class="person-info"><div class="person-role">Graduate Researcher</div><h4>Ripon Kumar Debnath</h4><div class="person-join">Sep 2023</div><p class="person-bio">Interests in CV, NLP, graph theory, health informatics, and XAI.</p></div></div>
          <div class="person-card tilt-card"><div class="person-avatar">MZ</div><div class="person-info"><div class="person-role">Graduate Researcher</div><h4>Musarrat Zeba</h4><div class="person-join">Jan 2025</div><p class="person-bio">Focused on ethically aware and trustworthy LLMs, reliability, transparency, and alignment.</p></div></div>
          <div class="person-card tilt-card"><div class="person-avatar">AM</div><div class="person-info"><div class="person-role">Graduate Researcher</div><h4>Abdullah Al Mamun</h4><div class="person-join">Jan 2025</div><p class="person-bio">Fintech specialist with experience in LLM-powered Shariah auditing systems, Java Spring Boot, and applied language AI.</p></div></div>
          <div class="person-card tilt-card"><div class="person-avatar">WK</div><div class="person-info"><div class="person-role">Graduate Researcher</div><h4>Wasimul Karim</h4><div class="person-join">Dec 2023</div><p class="person-bio">Research in 3D medical imaging, generative AI, energy and environmental modelling, and multimodal learning.</p></div></div>
        </div>
      </div>
    </div>
  </section>
</div>

<!-- MENTORS -->
<div class="page" id="page-mentors">
  <div class="page-hero"><div class="container"><div class="page-hero-panel glass fade-up"><h1>Mentors</h1><p>Academic leaders and researchers who help shape the lab's direction and research culture.</p></div></div></div>
  <section>
    <div class="container">
      <div class="section-head fade-up"><div class="section-label">Academic Guidance</div><h2 class="section-title">The Minds Behind Our Mission</h2><p class="section-sub">Our mentors offer research guidance, strategic direction, and scholarly support across disciplines.</p></div>
      <div class="grid-2 fade-up">
        <div class="card mentor-card tilt-card"><div class="card-body" style="display:grid;grid-template-columns:76px 1fr;gap:18px;align-items:start"><div class="mentor-avatar">SA</div><div class="mentor-info"><h4>Professor Sami Azam</h4><div class="role">Discipline Chair, Information Technology</div><div class="inst">Faculty of Science and Technology</div><div class="inst" style="font-weight:700;color:var(--text);margin-top:2px">Charles Darwin University, Australia</div><p style="font-size:.78rem;color:var(--muted-2);margin-top:10px;font-style:italic">Full bio coming soon.</p></div></div></div>
        <div class="card mentor-card tilt-card"><div class="card-body" style="display:grid;grid-template-columns:76px 1fr;gap:18px;align-items:start"><div class="mentor-avatar">MR</div><div class="mentor-info"><h4>Mohaimenul Azam Khan Raiaan</h4><div class="role">PhD Researcher</div><div class="inst">Department of Data Science and AI</div><div class="inst" style="font-weight:700;color:var(--text);margin-top:2px">Monash University, Australia</div><p style="font-size:.78rem;color:var(--muted-2);margin-top:10px;font-style:italic">Full bio coming soon.</p></div></div></div>
        <div class="card mentor-card tilt-card"><div class="card-body" style="display:grid;grid-template-columns:76px 1fr;gap:18px;align-items:start"><div class="mentor-avatar">SC</div><div class="mentor-info"><h4>Sadia Sultana Chowa</h4><div class="role">PhD Researcher</div><div class="inst">Department of Software Systems &amp; Cybersecurity</div><div class="inst" style="font-weight:700;color:var(--text);margin-top:2px">Monash University, Australia</div><p style="font-size:.78rem;color:var(--muted-2);margin-top:10px;font-style:italic">Full bio coming soon.</p></div></div></div>
        <div class="card tilt-card"><div class="card-body" style="text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100%"><i class="fa fa-envelope" style="font-size:2rem;color:var(--teal);margin-bottom:16px"></i><h3 style="margin-bottom:8px">Interested in Mentoring?</h3><p style="margin-bottom:18px">We welcome collaborations with established researchers and industry professionals.</p><a href="mailto:aaiins.research@gmail.com" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Get in Touch</a></div></div>
      </div>
    </div>
  </section>
</div>

<!-- JOIN -->
<div class="page" id="page-join">
  <div class="page-hero"><div class="container"><div class="page-hero-panel glass fade-up"><h1>Join AAIINS Lab</h1><p>We welcome curious, committed researchers — from undergraduates to postdocs and industry collaborators.</p></div></div></div>
  <section>
    <div class="container">
      <div class="section-head text-center fade-up"><div class="section-label">Why AAIINS?</div><h2 class="section-title">What You'll Gain</h2></div>
      <div class="grid-3">
        <div class="card tilt-card fade-up"><div class="card-body"><div class="r-icon teal depth-2"><i class="fa fa-flask"></i></div><h3>Cutting-edge Research</h3><p>Work on state-of-the-art AI problems in health, vision, language, modelling, and intelligent systems.</p></div></div>
        <div class="card tilt-card fade-up"><div class="card-body"><div class="r-icon blue depth-2"><i class="fa fa-users"></i></div><h3>Collaborative Environment</h3><p>Join a diverse team of researchers and collaborators in a supportive, ambitious, and publication-driven ecosystem.</p></div></div>
        <div class="card tilt-card fade-up"><div class="card-body"><div class="r-icon emerald depth-2"><i class="fa fa-globe"></i></div><h3>Global Impact</h3><p>Contribute to research that addresses real challenges and reaches international audiences and partner institutions.</p></div></div>
      </div>
    </div>
  </section>
  <section>
    <div class="container" style="display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:start">
      <div class="fade-up">
        <div class="section-label">Apply Now</div>
        <h2 class="section-title">Ready to Join?</h2>
        <p class="section-sub" style="margin-bottom:18px">Tell us about your background, interests, and the kind of research problems you want to help solve.</p>
        <div class="card"><div class="card-body">
          <div style="display:flex;flex-direction:column;gap:10px">
            <div><i class="fa fa-check" style="color:var(--teal);margin-right:8px"></i> Undergraduate and graduate students</div>
            <div><i class="fa fa-check" style="color:var(--teal);margin-right:8px"></i> Postdoctoral researchers</div>
            <div><i class="fa fa-check" style="color:var(--teal);margin-right:8px"></i> Industry collaborators</div>
            <div><i class="fa fa-check" style="color:var(--teal);margin-right:8px"></i> International applicants welcome</div>
          </div>
        </div></div>
        <div class="card" style="margin-top:16px"><div class="card-body"><div class="section-label" style="margin-bottom:4px">Direct Contact</div><div style="font-size:1rem;font-weight:700">📧 aaiins.research@gmail.com</div></div></div>
      </div>
      <div class="form-shell glass fade-up">
        <h3 style="font-size:1.2rem;margin-bottom:6px">Application Form</h3>
        <p style="color:var(--muted);font-size:.9rem;margin-bottom:18px">We welcome applicants from academia and industry.</p>
        <div class="form-row">
          <div class="form-group"><label>First Name</label><input type="text" placeholder="First name" /></div>
          <div class="form-group"><label>Last Name</label><input type="text" placeholder="Last name" /></div>
        </div>
        <div class="form-group"><label>Email Address</label><input type="email" placeholder="you@example.com" /></div>
        <div class="form-group"><label>Current Institution</label><input type="text" placeholder="Your institution or organization" /></div>
        <div class="form-group"><label>Academic Level</label><select><option>Undergraduate Student</option><option>Graduate Student (MSc)</option><option>PhD Student</option><option>Postdoctoral Researcher</option><option>Faculty / Industry Professional</option></select></div>
        <div class="form-group"><label>Primary Research Interest</label><select><option>Computer Vision</option><option>Machine Learning</option><option>Generative AI / LLMs</option><option>Health Informatics</option><option>Environmental Modelling</option><option>Other / Multiple Areas</option></select></div>
        <div class="form-group"><label>Statement of Purpose</label><textarea placeholder="Tell us about your background, research interests, and why you'd like to join AAIINS Lab..."></textarea></div>
        <button class="btn btn-primary" style="width:100%" onclick="alert('Thank you for your interest. We will review your application and get back to you at aaiins.research@gmail.com.')"><i class="fa fa-paper-plane"></i> Submit Application</button>
      </div>
    </div>
  </section>
</div>

<script>
function go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  const n=document.getElementById('n-'+id); if(n) n.classList.add('active');
  window.scrollTo({top:0,behavior:'instant'});
  observeFades();
}

/* particles */
const canvas=document.getElementById('particle-canvas');
const ctx=canvas.getContext('2d');
let W,H,nodes=[];
function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
function initParticles(){
  nodes=[];
  const count=Math.floor((W*H)/26000);
  for(let i=0;i<count;i++) nodes.push({
    x:Math.random()*W,y:Math.random()*H,
    vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.6+.5
  });
}
function drawParticles(){
  ctx.clearRect(0,0,W,H);
  const D=120;
  for(let i=0;i<nodes.length;i++){
    const n=nodes[i];
    n.x+=n.vx; n.y+=n.vy;
    if(n.x<0||n.x>W) n.vx*=-1;
    if(n.y<0||n.y>H) n.vy*=-1;
    ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
    ctx.fillStyle='rgba(84, 224, 205, 0.55)'; ctx.fill();
    for(let j=i+1;j<nodes.length;j++){
      const m=nodes[j], dx=n.x-m.x, dy=n.y-m.y, d=Math.hypot(dx,dy);
      if(d<D){
        ctx.beginPath(); ctx.moveTo(n.x,n.y); ctx.lineTo(m.x,m.y);
        ctx.strokeStyle=`rgba(84, 224, 205, ${(1-d/D)*0.13})`;
        ctx.lineWidth=.7; ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
resize(); initParticles(); drawParticles();
window.addEventListener('resize',()=>{resize(); initParticles();});

/* typewriter */
const phrases=['Intelligent Systems','Scientific Impact','Research Excellence','Applied AI'];
let pi=0, ci=0, del=false;
const tw=document.getElementById('tw');
function type(){
  const word=phrases[pi];
  if(!del){ tw.textContent=word.slice(0, ++ci); if(ci===word.length){ del=true; setTimeout(type,1500); return; } }
  else { tw.textContent=word.slice(0, --ci); if(ci===0){ del=false; pi=(pi+1)%phrases.length; } }
  setTimeout(type, del?40:75);
}
setTimeout(type,500);

/* fade-up on view */
function observeFades(){
  const els=document.querySelectorAll('.page.active .fade-up');
  const ob=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
  },{threshold:.08});
  els.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight*0.92) el.classList.add('visible');
    else ob.observe(el);
  });
}
observeFades();

/* 3D tilt */
function bindTilt(){
  const cards=document.querySelectorAll('.tilt-card');
  cards.forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=e.clientX-r.left, y=e.clientY-r.top;
      const rx=((y/r.height)-0.5)*-10;
      const ry=((x/r.width)-0.5)*12;
      card.style.transform=`perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
    });
    card.addEventListener('mouseleave',()=>{
      card.style.transform='perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}
bindTilt();
</script>
</body>
</html>
