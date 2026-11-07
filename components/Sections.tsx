"use client";

import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { Counter, Kicker, Magnetic, Reveal, SplitHeading, Spot, useT } from "./ui";
import { art, Frame } from "./Mockups";
import { person, type Flagship, type Product } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

/* ============ HERO ============ */
export function Hero() {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const rotY = useTransform(mx, [-1, 1], [-10, 10]);
  const rotX = useTransform(my, [-1, 1], [8, -8]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-6 pb-16 pt-28"
      onMouseMove={(e) => {
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob left-[-10%] top-[-10%] h-[50vw] w-[50vw] bg-coral/60" />
        <div className="blob right-[-10%] top-[20%] h-[40vw] w-[40vw] bg-lilac/50 [animation-delay:-5s]" />
        <div className="blob bottom-[-20%] left-[30%] h-[40vw] w-[40vw] bg-amber/40 [animation-delay:-9s]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <motion.div style={{ y: yText, opacity: fade }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8, ease }}
            className="glass mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs sm:text-sm"
          >
            <span className="pulse-dot relative h-2 w-2 rounded-full bg-mint" />
            {t.hero.badge}
          </motion.div>

          <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-muted">{t.hero.eyebrow}</p>

          <h1 className="font-display text-[clamp(2.3rem,5vw,4.4rem)] font-light leading-[1.05] tracking-tight">
            {t.hero.lines.flatMap((line, li) => line.split(" ").map((w) => ({ w, g: li === 1 }))).map((o, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className={`inline-block ${o.g ? "italic text-gradient" : ""}`}
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 2.2 + i * 0.06, duration: 1, ease }}
                >
                  {o.w}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.9, ease }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.85, duration: 0.9, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Magnetic>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-paper px-7 py-4 text-sm font-semibold text-ink transition hover:bg-amber">
                {t.cta.seeWork} <span aria-hidden>↓</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href={person.cv} download className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 text-sm font-semibold transition hover:border-coral">
                {t.cta.cv} <span aria-hidden>↗</span>
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* floating profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 1.2, ease }}
          className="relative hidden lg:block"
          style={{ perspective: 1000 }}
        >
          <motion.div style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }} className="float">
            <div className="glass rounded-2xl p-6 font-mono text-[13px] leading-7 shadow-2xl shadow-coral/10">
              <div className="mb-4 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-muted">profile.ts</span>
              </div>
              <p><span className="text-lilac">const</span> <span className="text-amber">meryem</span> = {"{"}</p>
              <p className="pl-5">role: <span className="text-mint">&quot;{t.hero.card.role}&quot;</span>,</p>
              <p className="pl-5">backend: [<span className="text-mint">&quot;Symfony&quot;</span>, <span className="text-mint">&quot;PHP&quot;</span>],</p>
              <p className="pl-5">frontend: [<span className="text-mint">&quot;React.js&quot;</span>],</p>
              <p className="pl-5">data: [<span className="text-mint">&quot;PostgreSQL&quot;</span>, <span className="text-mint">&quot;MySQL&quot;</span>],</p>
              <p className="pl-5">agile: <span className="text-mint">&quot;Scrum Master (SMC)&quot;</span>,</p>
              <p className="pl-5">experience: <span className="text-coral">3</span>+ years,</p>
              <p className="pl-5">seeking: <span className="text-mint">&quot;{t.hero.card.seeking}&quot;</span>,</p>
              <p>{"}"}</p>
            </div>
            <motion.div style={{ translateZ: 60 }} className="glass absolute -bottom-8 -left-10 rounded-xl px-4 py-3 text-xs">
              <span className="text-coral">●</span> Symfony · React.js
            </motion.div>
            <motion.div style={{ translateZ: 80 }} className="glass absolute -right-6 -top-6 rounded-xl px-4 py-3 text-xs">
              <span className="text-mint">●</span> Slack API · Google API
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted sm:flex">
        {t.hero.scroll}
        <span className="h-10 w-px origin-top animate-pulse bg-gradient-to-b from-coral to-transparent" />
      </div>
    </section>
  );
}

/* ============ MARQUEE ============ */
export function Marquee() {
  const { t } = useT();
  const row = [...t.marquee, ...t.marquee];
  return (
    <div className="marquee overflow-hidden border-y border-line bg-ink2/60 py-5">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {row.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center font-display text-3xl italic text-paper/80 sm:text-4xl">
                <span className="px-8">{w}</span>
                <span className="text-coral">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ STATS ============ */
export function Stats() {
  const { t } = useT();
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
        {t.stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.08} y={20} className="bg-ink p-6 sm:p-10">
            <p className="font-display text-6xl font-light text-gradient sm:text-7xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-4 text-sm leading-snug text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============ ABOUT ============ */
export function About() {
  const { t } = useT();
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Kicker>{t.about.kicker}</Kicker>
        <SplitHeading text={t.about.title} className="max-w-4xl font-display text-4xl font-light leading-[1.08] sm:text-6xl" />
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-paper/80">
            {t.about.paras.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="space-y-4">
            {t.about.pillars.map((p, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <Spot className="glass rounded-2xl p-6">
                  <p className="font-mono text-xs text-coral">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-2xl">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.d}</p>
                </Spot>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ FLAGSHIP PLATFORMS ============ */
function ScrollShot({ p, src }: { p: Flagship; src: string }) {
  const { t } = useT();
  return (
    <Frame host={p.host}>
      <foreignObject x="0" y="0" width="640" height="400">
        <div
          role="img"
          aria-label={`${p.name} — ${t.work.shotAlt}`}
          className="shot h-full w-full"
          style={{ backgroundImage: `url(${src})` }}
        />
      </foreignObject>
    </Frame>
  );
}

/* Shown only until a real capture exists in public/projects/<id>.jpg — deliberately no invented imagery. */
function SitePlaceholder({ p }: { p: Flagship }) {
  return (
    <Frame host={p.host} dark>
      <rect width="640" height="400" fill="#14121a" />
      <circle cx="520" cy="60" r="160" fill="#ff5c39" opacity="0.18" />
      <circle cx="90" cy="360" r="140" fill="#b9a7ff" opacity="0.14" />
      <text x="320" y="200" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="56" fill="#f4efe6">{p.name}</text>
      <text x="320" y="246" textAnchor="middle" fontFamily="monospace" fontSize="18" letterSpacing="3" fill="#a49fb0">{p.host} ↗</text>
    </Frame>
  );
}

function FlagshipCard({ p, i, shot }: { p: Flagship; i: number; shot?: string }) {
  const { t } = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rot = useTransform(scrollYProgress, [0, 0.5, 1], [i % 2 ? -4 : 4, 0, i % 2 ? 4 : -4]);
  const flip = i % 2 === 1;

  return (
    <article ref={ref} className="relative grid items-center gap-10 border-t border-line py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <div className={flip ? "lg:order-2" : ""}>
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-display text-7xl font-light text-coral/90 outline-text sm:text-8xl">0{i + 1}</span>
            <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">{p.kind}</span>
          </div>
          <h3 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">{p.name}</h3>
          <p className="mt-5 leading-relaxed text-paper/75">{p.context}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-3 mt-8 font-mono text-xs uppercase tracking-widest text-muted">{t.work.scaleLabel}</p>
          <ul className="flex flex-wrap gap-2">
            {p.scale.map((s) => (
              <li key={s} className="rounded-full border border-line bg-tint px-4 py-2 text-sm">{s}</li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-tint p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-coral">{t.work.roleLabel}</p>
              <p className="mt-2 text-sm leading-relaxed">{p.role}</p>
            </div>
            <div className="rounded-2xl border border-line bg-tint p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-coral">{t.work.valueLabel}</p>
              <p className="mt-2 text-sm leading-relaxed">{p.value}</p>
            </div>
          </div>
          <Magnetic strength={0.2}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:bg-amber"
            >
              {t.cta.visit} · {p.host}
              <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden>↗</span>
            </a>
          </Magnetic>
        </Reveal>
      </div>

      <motion.div style={{ y, rotate: rot }} className={`relative ${flip ? "lg:order-1" : ""}`}>
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-coral/25 via-transparent to-lilac/25 blur-2xl" />
        <a href={p.url} target="_blank" rel="noopener noreferrer" data-cursor aria-label={`${t.cta.visit} ${p.host}`} className="shot-wrap block transition duration-500 hover:scale-[1.02]">
          {shot ? <ScrollShot p={p} src={shot} /> : <SitePlaceholder p={p} />}
        </a>
        {shot && <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-widest text-muted">{t.work.hover}</p>}
      </motion.div>
    </article>
  );
}

export function Work({ shots }: { shots: Record<string, string> }) {
  const { t } = useT();
  return (
    <section id="work" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Kicker>{t.work.kicker}</Kicker>
        <SplitHeading text={t.work.title} className="max-w-4xl font-display text-4xl font-light leading-[1.08] sm:text-6xl" />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-paper/75">{t.work.intro}</p>
        </Reveal>
        <div className="mt-16">
          {t.flagships.map((p, i) => (
            <FlagshipCard key={p.id} p={p} i={i} shot={shots[p.id]} />
          ))}
        </div>
        <p className="border-t border-line pt-6 text-center text-sm text-muted">{t.work.note}</p>
      </div>
    </section>
  );
}

/* ============ PRODUCTS ============ */
function ProductCard({ p, i }: { p: Product; i: number }) {
  const { t } = useT();
  const Art = art[p.id];
  return (
    <Reveal delay={(i % 2) * 0.12}>
      <Spot className="glass group h-full rounded-3xl p-5 sm:p-6">
        <div className="transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]">
          <Art />
        </div>
        <div className="mt-6 flex items-center justify-between gap-3">
          <h3 className="font-display text-3xl font-light">{p.name}</h3>
          <span className="rounded-full bg-coral/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-coral">{p.tag}</span>
        </div>
        <p className="mt-3 text-paper/80">{p.desc}</p>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-3">
              <span className="text-coral">→</span>
              {pt}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4">
          <span className="mr-1 font-mono text-[11px] uppercase tracking-widest text-muted">{t.products.stack}</span>
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border border-line px-3 py-1 text-xs">{s}</span>
          ))}
        </div>
      </Spot>
    </Reveal>
  );
}

export function Products() {
  const { t } = useT();
  return (
    <section id="products" className="bg-ink2/50 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Kicker>{t.products.kicker}</Kicker>
        <SplitHeading text={t.products.title} className="max-w-4xl font-display text-4xl font-light leading-[1.08] sm:text-6xl" />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/75">{t.products.intro}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.productList.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
