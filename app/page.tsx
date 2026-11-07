import fs from "node:fs";
import path from "node:path";
import { LangProvider, Preloader, ProgressBar } from "@/components/ui";
import { Nav, Footer } from "@/components/Chrome";
import { Hero, Marquee, Stats, About, Work, Products } from "@/components/Sections";
import { Experience, Skills, Contact } from "@/components/Sections2";

/* Real captures dropped in public/projects/<id>.jpg are picked up automatically. */
function findShots() {
  const dir = path.join(process.cwd(), "public", "projects");
  const out: Record<string, string> = {};
  for (const id of ["ouigo", "mci", "junior", "barnes"]) {
    for (const ext of ["jpg", "jpeg", "png", "webp"]) {
      if (fs.existsSync(path.join(dir, `${id}.${ext}`))) {
        out[id] = `/projects/${id}.${ext}`;
        break;
      }
    }
  }
  return out;
}

export default function Home() {
  const shots = findShots();
  return (
    <LangProvider>
      <Preloader />
      <ProgressBar />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Work shots={shots} />
        <Products />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
