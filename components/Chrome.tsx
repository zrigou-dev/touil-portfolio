"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Magnetic, ThemeToggle, useT } from "./ui";
import { person } from "@/lib/content";

const ids = ["about", "work", "products", "exp", "skills", "contact"] as const;
const ease = [0.76, 0, 0.24, 1] as const;

function Burger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Menu"
      aria-expanded={open}
      className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line transition active:scale-95 lg:hidden"
    >
      <motion.span
        className="absolute h-[1.5px] w-5 rounded bg-paper"
        animate={{ y: open ? 0 : -4, rotate: open ? 45 : 0 }}
        transition={{ duration: 0.4, ease }}
      />
      <motion.span
        className="absolute h-[1.5px] w-5 rounded bg-paper"
        animate={{ y: open ? 0 : 4, rotate: open ? -45 : 0 }}
        transition={{ duration: 0.4, ease }}
      />
    </button>
  );
}

function MobileMenu({ open, active, close }: { open: boolean; active: string; close: () => void }) {
  const { t } = useT();
  const origin = "calc(100% - 2.75rem) 2.9rem";

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => e.key === "Escape" && close();
    const resize = () => window.innerWidth >= 1024 && close();
    window.addEventListener("keydown", key);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", key);
      window.removeEventListener("resize", resize);
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="menu"
          role="dialog"
          aria-modal="true"
          initial={{ clipPath: `circle(0px at ${origin})` }}
          animate={{ clipPath: `circle(160% at ${origin})` }}
          exit={{ clipPath: `circle(0px at ${origin})`, transition: { duration: 0.6, ease } }}
          transition={{ duration: 0.85, ease }}
          className="fixed inset-0 z-40 flex h-[100dvh] flex-col overflow-y-auto bg-ink lg:hidden"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="blob -right-24 -top-24 h-72 w-72 bg-coral/60" />
            <div className="blob -bottom-24 -left-24 h-72 w-72 bg-lilac/50 [animation-delay:-6s]" />
          </div>

          <nav className="relative flex flex-1 flex-col justify-center px-6 pb-4 pt-28" aria-label="Menu">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.35 } }}
              className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted"
            >
              Menu
            </motion.p>
            <ul>
              {ids.map((id, i) => {
                const on = active === id;
                return (
                  <li key={id} className="overflow-hidden border-b border-line">
                    <motion.a
                      href={`#${id}`}
                      onClick={close}
                      initial={{ y: "105%" }}
                      animate={{ y: 0, transition: { delay: 0.3 + i * 0.07, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
                      exit={{ y: "105%", transition: { duration: 0.3, delay: (ids.length - i) * 0.02 } }}
                      className="group flex items-baseline gap-4 py-3.5 active:text-coral"
                    >
                      <span className={`w-7 font-mono text-xs ${on ? "text-coral" : "text-muted"}`}>0{i + 1}</span>
                      <span
                        className={`font-display text-[clamp(2.3rem,11vw,3.6rem)] font-light leading-none transition-colors ${
                          on ? "italic text-gradient" : ""
                        }`}
                      >
                        {t.nav[id]}
                      </span>
                      <span className="ml-auto self-center text-xl text-muted transition group-active:translate-x-1" aria-hidden>
                        {on ? "●" : "→"}
                      </span>
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.75, duration: 0.7 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="relative px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4"
          >
            <a
              href={person.cv}
              download
              onClick={close}
              className="flex w-full items-center justify-between rounded-2xl bg-coral px-5 py-4 text-sm font-semibold text-onaccent active:scale-[0.98]"
            >
              {t.cta.cv} <span aria-hidden>↓</span>
            </a>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <a href={`mailto:${person.email}`} className="glass rounded-2xl px-4 py-3 active:scale-[0.98]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Email</span>
                <span className="mt-0.5 block truncate">{person.email}</span>
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl px-4 py-3 active:scale-[0.98]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">LinkedIn</span>
                <span className="mt-0.5 block">meryem-touil ↗</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Nav() {
  const { t, lang, setLang } = useT();
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-full py-2 pl-5 pr-2 transition-all duration-500 lg:pr-5 ${
            solid && !open ? "glass shadow-xl shadow-black/30" : "border border-transparent"
          }`}
        >
          <a href="#top" onClick={close} className="font-display text-xl italic" aria-label="Meryem Touil">
            M<span className="text-coral">.</span>T
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {ids.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    active === id ? "text-ink" : "text-muted hover:text-paper"
                  }`}
                >
                  {active === id && (
                    <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-full bg-paper" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  )}
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="rounded-full border border-line px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:border-coral hover:text-paper"
              aria-label="Switch language"
            >
              <span className={lang === "fr" ? "text-paper" : ""}>FR</span> / <span className={lang === "en" ? "text-paper" : ""}>EN</span>
            </button>
            <a href={person.cv} download className="hidden rounded-full bg-coral px-4 py-2 text-sm font-medium text-onaccent transition hover:bg-amber lg:block">
              CV
            </a>
            <Burger open={open} onClick={() => setOpen(!open)} />
          </div>
        </nav>
      </motion.header>
      <MobileMenu open={open} active={active} close={close} />
    </>
  );
}

export function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>{t.footer}</p>
        <Magnetic strength={0.2}>
          <a href="#top" className="rounded-full border border-line px-4 py-2 transition hover:border-coral hover:text-paper">
            ↑ Top
          </a>
        </Magnetic>
      </div>
    </footer>
  );
}
