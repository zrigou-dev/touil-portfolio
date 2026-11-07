"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Kicker, Magnetic, Reveal, SplitHeading, Spot, useT } from "./ui";
import { person } from "@/lib/content";

/* ============ EXPERIENCE ============ */
export function Experience() {
  const { t } = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="exp" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Kicker>{t.exp.kicker}</Kicker>
        <SplitHeading text={t.exp.title} className="max-w-4xl font-display text-4xl font-light leading-[1.08] sm:text-6xl" />
        <div ref={ref} className="relative mt-16 pl-8 sm:pl-12">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-line sm:left-[11px]" />
          <motion.div style={{ scaleY: h }} className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-coral to-amber sm:left-[11px]" />
          {t.exp.jobs.map((j, i) => (
            <Reveal key={j.org} delay={i * 0.1} className="relative pb-14 last:pb-0">
              <span
                className={`absolute -left-8 top-2 h-4 w-4 rounded-full border-2 border-coral sm:-left-12 sm:h-6 sm:w-6 ${j.current ? "bg-coral" : "bg-ink"}`}
              />
              <Spot className="glass rounded-3xl p-6 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="font-display text-3xl font-light sm:text-4xl">{j.role}</h3>
                    <p className="mt-1 text-lg text-coral">{j.org}</p>
                  </div>
                  <span className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-muted">{j.date}</span>
                </div>
                <ul className="mt-6 space-y-3 text-paper/80">
                  {j.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Spot>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SKILLS + EDUCATION ============ */
export function Skills() {
  const { t } = useT();
  const s = t.skills;
  return (
    <section id="skills" className="bg-ink2/50 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Kicker>{s.kicker}</Kicker>
        <SplitHeading text={s.title} className="max-w-4xl font-display text-4xl font-light leading-[1.08] sm:text-6xl" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.groups.map((g, i) => (
            <Reveal key={g.t} delay={(i % 3) * 0.08}>
              <Spot className="glass h-full rounded-2xl p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-coral">{g.t}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <motion.span
                      key={it}
                      whileHover={{ y: -4, scale: 1.06 }}
                      className="rounded-full border border-line bg-tint px-4 py-2 text-sm transition-colors hover:border-coral hover:bg-coral/10"
                    >
                      {it}
                    </motion.span>
                  ))}
                </div>
              </Spot>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-coral to-amber p-7 text-onaccent">
              <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">{s.cert.t}</p>
              <p className="mt-4 font-display text-3xl leading-tight">{s.cert.name}</p>
              <p className="mt-2 text-sm opacity-80">{s.cert.org}</p>
              <span className="absolute -bottom-6 -right-2 font-display text-[9rem] italic leading-none opacity-15">SM</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Spot className="glass h-full rounded-2xl p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-coral">{s.langsTitle}</h3>
              <ul className="mt-5 space-y-3">
                {s.langs.map((l) => (
                  <li key={l.l} className="flex items-baseline justify-between border-b border-line pb-3 last:border-0">
                    <span className="font-display text-2xl">{l.l}</span>
                    <span className="text-sm text-muted">{l.v}</span>
                  </li>
                ))}
              </ul>
            </Spot>
          </Reveal>
          <Reveal delay={0.2}>
            <Spot className="glass h-full rounded-2xl p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-coral">{s.eduTitle}</h3>
              <ul className="mt-5 space-y-4">
                {s.edu.map((e) => (
                  <li key={e.t}>
                    <p className="font-mono text-[11px] text-muted">{e.d}</p>
                    <p className="text-sm font-medium leading-snug">{e.t}</p>
                    <p className="text-xs text-muted">{e.s}</p>
                  </li>
                ))}
              </ul>
            </Spot>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ CONTACT ============ */
export function Contact() {
  const { t } = useT();
  const links = [
    { k: "Email", v: person.email, h: `mailto:${person.email}` },
    { k: "LinkedIn", v: "meryem-touil", h: person.linkedin },
    { k: "Tel", v: person.phone, h: `tel:${person.phoneHref}` },
  ];
  return (
    <section id="contact" className="relative isolate overflow-hidden px-6 py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob left-[10%] top-[10%] h-[40vw] w-[40vw] bg-coral/50" />
        <div className="blob bottom-[-10%] right-[5%] h-[35vw] w-[35vw] bg-lilac/40 [animation-delay:-7s]" />
      </div>
      <div className="mx-auto max-w-6xl">
        <Kicker>{t.contact.kicker}</Kicker>
        <SplitHeading text={t.contact.title} className="max-w-5xl font-display text-5xl font-light leading-[1.02] sm:text-7xl lg:text-8xl" />
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-paper/80">{t.contact.sub}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Magnetic>
              <a href={`mailto:${person.email}`} className="inline-flex rounded-full bg-paper px-8 py-5 text-base font-semibold text-ink transition hover:bg-amber">
                {t.cta.talk} ↗
              </a>
            </Magnetic>
            <Magnetic>
              <a href={person.cv} download className="inline-flex rounded-full border border-line px-8 py-5 text-base font-semibold transition hover:border-coral">
                {t.cta.cv}
              </a>
            </Magnetic>
          </div>
        </Reveal>
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {links.map((l, i) => (
            <Reveal key={l.k} delay={i * 0.08} y={20} className="bg-ink">
              <a
                href={l.h}
                target={l.k === "LinkedIn" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group block p-7 transition hover:bg-ink3"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{l.k}</p>
                <p className="mt-3 flex items-center justify-between gap-3 break-all text-lg">
                  {l.v}
                  <span className="text-coral transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden>↗</span>
                </p>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">{t.contact.based}</p>
      </div>
      <div className="marquee mt-24 overflow-hidden" aria-hidden>
        <div className="marquee-track slow">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="outline-text whitespace-nowrap px-8 font-display text-6xl italic sm:text-8xl">
              {t.contact.marquee} <span className="text-coral">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
