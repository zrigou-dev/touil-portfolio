/* Original, abstract UI illustrations (not screenshots, no third-party assets). */
import type { ReactNode } from "react";

type R = { x: number; y: number; w: number; h: number; f?: string; r?: number; o?: number };
const B = ({ x, y, w, h, f = "#e7e5ee", r = 6, o = 1 }: R) => <rect x={x} y={y} width={w} height={h} rx={r} fill={f} opacity={o} />;
export function Frame({ host, children, dark = false }: { host: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-ink3 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-white/10 bg-ink2 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 truncate rounded-md bg-tint px-3 py-1 font-mono text-[10px] text-muted">{host}</span>
      </div>
      <svg viewBox="0 0 640 400" className={`block w-full ${dark ? "bg-[#14131c]" : "bg-white"}`} role="img" aria-label={`Illustration ${host}`}>
        {children}
      </svg>
    </div>
  );
}

const Defs = () => (
  <defs>
    <linearGradient id="gPink" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff4f8b" /><stop offset="1" stopColor="#ff8a5c" /></linearGradient>
    <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8cc3f0" /><stop offset="1" stopColor="#dff0e4" /></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f6c9a0" /><stop offset="1" stopColor="#e58f6e" /></linearGradient>
    <linearGradient id="gGov" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5a3a2a" /><stop offset="1" stopColor="#a9732f" /></linearGradient>
    <linearGradient id="gViolet" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7c5cff" /><stop offset="1" stopColor="#b9a7ff" /></linearGradient>
  </defs>
);

export function OuigoArt() {
  return (
    <Frame host="ouigo.com">
      <Defs />
      <B x={0} y={0} w={640} h={44} f="#fff" r={0} />
      <B x={24} y={14} w={70} h={16} f="url(#gPink)" r={8} />
      {[300, 360, 420, 480].map((x) => <B key={x} x={x} y={19} w={40} h={6} f="#d6d3de" r={3} />)}
      <B x={560} y={12} w={60} h={20} f="#19c3b1" r={10} />
      <B x={0} y={44} w={640} h={190} f="url(#gPink)" r={0} />
      <circle cx="540" cy="90" r="90" fill="#fff" opacity="0.12" />
      <circle cx="600" cy="200" r="60" fill="#fff" opacity="0.1" />
      <B x={40} y={70} w={260} h={14} f="#fff" r={7} />
      <B x={40} y={94} w={180} h={14} f="#fff" r={7} o={0.7} />
      <B x={40} y={150} w={560} h={62} f="#fff" r={14} />
      {[56, 220, 384].map((x, i) => (
        <g key={x}>
          <B x={x} y={164} w={60} h={5} f="#bdb9c9" r={3} />
          <B x={x} y={178} w={110} h={10} f={i === 2 ? "#e9e7ef" : "#2b2740"} r={5} />
        </g>
      ))}
      <B x={502} y={160} w={86} h={42} f="#19c3b1" r={21} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <B x={40 + i * 188} y={256} w={172} h={120} f="#f4f2f8" r={14} />
          <B x={52 + i * 188} y={268} w={148} h={52} f={["#ffd0e0", "#bff0ea", "#ffe2c4"][i]} r={10} />
          <B x={52 + i * 188} y={334} w={80} h={6} f="#9b97ab" r={3} />
          <B x={52 + i * 188} y={348} w={50} h={14} f="url(#gPink)" r={7} />
        </g>
      ))}
    </Frame>
  );
}

export function MciArt() {
  return (
    <Frame host="mcinet.gov.ma">
      <Defs />
      <B x={0} y={0} w={640} h={26} f="#dba235" r={0} />
      {[24, 40, 56].map((x) => <circle key={x} cx={x} cy={13} r={4} fill="#fff" opacity=".8" />)}
      <B x={500} y={9} w={110} h={8} f="#fff" r={4} o={0.8} />
      <B x={0} y={26} w={640} h={64} f="#fff" r={0} />
      <circle cx="320" cy="58" r="22" fill="#c1272d" opacity=".9" />
      <circle cx="320" cy="58" r="10" fill="#0e6b3a" />
      <B x={200} y={52} w={80} h={6} f="#cfcdd6" r={3} />
      <B x={360} y={52} w={80} h={6} f="#cfcdd6" r={3} />
      <B x={0} y={90} w={640} h={34} f="#1f2a3c" r={0} />
      {[40, 100, 170, 260, 340, 420, 500].map((x) => <B key={x} x={x} y={104} w={48} h={6} f="#fff" r={3} o={0.85} />)}
      <B x={0} y={124} w={640} h={170} f="url(#gGov)" r={0} />
      <circle cx="160" cy="200" r="46" fill="#fff" opacity=".12" />
      <circle cx="330" cy="190" r="50" fill="#fff" opacity=".16" />
      <circle cx="500" cy="205" r="42" fill="#fff" opacity=".12" />
      <B x={150} y={250} w={340} h={12} f="#fff" r={6} />
      <B x={210} y={270} w={220} h={8} f="#fff" r={4} o={0.7} />
      <B x={0} y={294} w={640} h={34} f="#fff" r={0} />
      <B x={0} y={294} w={26} h={34} f="#dba235" r={0} />
      <B x={260} y={308} w={120} h={6} f="#9b97ab" r={3} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <B x={32 + i * 148} y={338} w={134} h={50} f="#f4f2f8" r={10} />
          <circle cx={52 + i * 148} cy={363} r={10} fill={["#dba235", "#1f2a3c", "#0e6b3a", "#c1272d"][i]} />
          <B x={70 + i * 148} y={354} w={56} h={5} f="#9b97ab" r={3} />
          <B x={70 + i * 148} y={366} w={40} h={5} f="#cfcdd6" r={3} />
        </g>
      ))}
    </Frame>
  );
}

export function JuniorArt() {
  return (
    <Frame host="juniorcie.sncf-connect.com">
      <Defs />
      <B x={0} y={0} w={640} h={30} f="#3e4656" r={0} />
      {[200, 300, 400, 500].map((x) => <B key={x} x={x} y={12} w={56} h={6} f="#fff" r={3} o={0.7} />)}
      <B x={0} y={30} w={640} h={40} f="#fff" r={0} />
      <circle cx="40" cy="50" r="11" fill="#e8527a" />
      <B x={58} y={44} w={70} h={12} f="#5b9bd5" r={6} />
      <B x={140} y={30} w={500} h={40} f="#5b9bd5" r={0} />
      {[160, 220, 280, 360, 440].map((x) => <B key={x} x={x} y={47} w={40} h={6} f="#fff" r={3} o={0.9} />)}
      <B x={0} y={70} w={640} h={330} f="url(#gWarm)" r={0} />
      <circle cx="520" cy="200" r="140" fill="#fff" opacity=".18" />
      <circle cx="470" cy="190" r="48" fill="#8b5a3c" opacity=".7" />
      <B x={420} y={236} w={100} h={130} f="#e6683c" r={40} o={0.85} />
      <B x={40} y={110} w={300} h={14} f="#fff" r={7} />
      <B x={40} y={134} w={210} h={10} f="#fff" r={5} o={0.8} />
      <B x={40} y={190} w={330} h={110} f="#fff" r={16} />
      <B x={58} y={208} w={140} h={26} f="#eef1f7" r={8} />
      <B x={212} y={208} w={140} h={26} f="#eef1f7" r={8} />
      <B x={58} y={246} w={94} h={26} f="#eef1f7" r={8} />
      <B x={166} y={246} w={94} h={26} f="#eef1f7" r={8} />
      <B x={58} y={284} w={0} h={0} />
      <B x={248} y={250} w={104} h={36} f="#e8527a" r={18} />
      <B x={40} y={330} w={160} h={10} f="#fff" r={5} o={0.7} />
    </Frame>
  );
}

export function BarnesArt() {
  return (
    <Frame host="barnes-international.com">
      <Defs />
      <B x={0} y={0} w={640} h={58} f="#fff" r={0} />
      <B x={250} y={14} w={140} h={26} f="#16141a" r={2} />
      <B x={262} y={22} w={116} h={10} f="#fff" r={2} o={0.9} />
      {[110, 170, 230, 290, 350, 410, 470].map((x) => <B key={x} x={x} y={48} w={40} h={4} f="#c9c6d0" r={2} />)}
      <B x={0} y={58} w={640} h={232} f="url(#gSky)" r={0} />
      <path d="M0 290 L0 230 Q120 170 230 215 T470 200 T640 215 L640 290Z" fill="#4c7a52" opacity=".85" />
      <path d="M0 290 L0 255 Q160 220 300 250 T640 245 L640 290Z" fill="#355a3c" />
      <B x={190} y={160} w={260} h={34} f="#16141a" r={8} o={0.85} />
      {[206, 280, 360].map((x) => <B key={x} x={x} y={173} w={56} h={6} f="#fff" r={3} />)}
      <B x={190} y={194} w={260} h={48} f="#fff" r={0} />
      <B x={202} y={210} w={70} h={8} f="#bdb9c9" r={4} />
      <B x={290} y={210} w={70} h={8} f="#bdb9c9" r={4} />
      <B x={374} y={210} w={40} h={8} f="#bdb9c9" r={4} />
      <circle cx="430" cy="218" r="22" fill="#b3123b" />
      <B x={0} y={290} w={640} h={110} f="#fff" r={0} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <B x={32 + i * 150} y={306} w={134} h={64} f={["#d9c7a8", "#b9c9d9", "#d8b8b0", "#c4d5b8"][i]} r={4} />
          <B x={32 + i * 150} y={378} w={90} h={6} f="#16141a" r={3} o={0.7} />
        </g>
      ))}
    </Frame>
  );
}

export function AndragogyArt() {
  return (
    <Frame host="Andragogy — SaaS" dark>
      <Defs />
      <B x={0} y={0} w={120} h={400} f="#0f0e16" r={0} />
      <B x={18} y={20} w={84} h={18} f="url(#gViolet)" r={9} />
      {[0, 1, 2, 3, 4, 5].map((i) => <B key={i} x={18} y={68 + i * 34} w={84} h={22} f={i === 1 ? "#2a2540" : "transparent"} r={8} />)}
      {[0, 1, 2, 3, 4, 5].map((i) => <B key={i} x={30} y={76 + i * 34} w={60} h={6} f="#8b86a0" r={3} />)}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <B x={140 + i * 164} y={20} w={150} h={64} f="#1e1c2b" r={12} />
          <B x={154 + i * 164} y={34} w={50} h={6} f="#8b86a0" r={3} />
          <B x={154 + i * 164} y={50} w={70} h={20} f="#f4efe6" r={5} o={0.9} />
        </g>
      ))}
      <B x={140} y={102} w={300} h={278} f="#1e1c2b" r={12} />
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={i}>
          <circle cx={164} cy={142 + i * 38} r={11} fill={["#7c5cff", "#ff5c39", "#7ef0c6", "#ffb547", "#b9a7ff", "#ff4f8b"][i]} />
          <B x={186} y={134 + i * 38} w={110} h={6} f="#d8d4e6" r={3} />
          <B x={186} y={146 + i * 38} w={70} h={5} f="#6f6a85" r={3} />
          <B x={350} y={136 + i * 38} w={64} h={16} f="#2e2a45" r={8} />
        </g>
      ))}
      <B x={456} y={102} w={164} h={278} f="#1e1c2b" r={12} />
      {Array.from({ length: 35 }).map((_, i) => (
        <rect key={i} x={470 + (i % 7) * 20} y={150 + Math.floor(i / 7) * 24} width={16} height={16} rx={4} fill={[3, 10, 11, 17, 24, 25].includes(i) ? "#7c5cff" : "#2e2a45"} />
      ))}
      <B x={470} y={120} w={80} h={8} f="#d8d4e6" r={4} />
    </Frame>
  );
}

export function KateoArt() {
  const qr = [0, 1, 2, 3, 4, 5, 6, 7, 8].flatMap((r) => [0, 1, 2, 3, 4, 5, 6, 7, 8].map((c) => ({ r, c })));
  return (
    <Frame host="Kateo — SaaS" dark>
      <Defs />
      <B x={0} y={0} w={640} h={44} f="#0f0e16" r={0} />
      <B x={20} y={14} w={60} h={16} f="#7ef0c6" r={8} />
      {[260, 330, 400, 470].map((x) => <B key={x} x={x} y={19} w={46} h={6} f="#8b86a0" r={3} />)}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <B x={24} y={64 + i * 96} w={380} h={84} f="#1e1c2b" r={12} />
          <B x={36} y={76 + i * 96} w={60} h={60} f={["#2a4a45", "#3a3560", "#4a3a2a"][i]} r={8} />
          <B x={110} y={82 + i * 96} w={140} h={8} f="#e4e0f0" r={4} />
          <B x={110} y={98 + i * 96} w={100} h={6} f="#6f6a85" r={3} />
          <B x={110} y={114 + i * 96} w={50} h={14} f="#2e2a45" r={7} />
          <B x={168} y={114 + i * 96} w={50} h={14} f="#2e2a45" r={7} />
          <B x={330} y={84 + i * 96} w={60} h={16} f="#7ef0c6" r={8} o={0.9} />
        </g>
      ))}
      <B x={424} y={64} w={192} h={276} f="#f4efe6" r={14} />
      <B x={440} y={80} w={90} h={8} f="#16141a" r={4} />
      {qr.map(({ r, c }) => {
        const on = (r * 7 + c * 3 + r * c) % 3 !== 0 || (r < 3 && c < 3) || (r < 3 && c > 5);
        return on ? <rect key={`${r}${c}`} x={452 + c * 16} y={104 + r * 16} width={14} height={14} rx={2} fill="#16141a" /> : null;
      })}
      <B x={452} y={262} w={136} h={8} f="#16141a" r={4} o={0.8} />
      <B x={452} y={278} w={90} h={6} f="#16141a" r={3} o={0.4} />
      <B x={452} y={304} w={136} h={22} f="#7ef0c6" r={11} />
    </Frame>
  );
}

export function MeetArt() {
  return (
    <Frame host="Slack × Google Meet" dark>
      <Defs />
      <B x={0} y={0} w={70} h={400} f="#3f0e40" r={0} />
      {[0, 1, 2, 3].map((i) => <B key={i} x={16} y={24 + i * 50} w={38} h={38} f={["#7c5cff", "#ffb547", "#7ef0c6", "#ff5c39"][i]} r={10} o={0.9} />)}
      <B x={70} y={0} w={170} h={400} f="#4a154b" r={0} />
      <B x={86} y={22} w={100} h={10} f="#fff" r={5} />
      {[0, 1, 2, 3, 4].map((i) => <B key={i} x={86} y={66 + i * 26} w={[100, 80, 120, 70, 90][i]} h={7} f="#fff" r={3} o={0.55} />)}
      <B x={240} y={0} w={400} h={400} f="#fff" r={0} />
      <B x={240} y={0} w={400} h={46} f="#fafafa" r={0} />
      <B x={260} y={18} w={90} h={9} f="#2b2740" r={4} />
      {[0, 1].map((i) => (
        <g key={i}>
          <B x={260} y={70 + i * 70} w={34} h={34} f={i ? "#ffb547" : "#7c5cff"} r={8} />
          <B x={306} y={72 + i * 70} w={80} h={7} f="#2b2740" r={3} />
          <B x={306} y={88 + i * 70} w={220} h={6} f="#cfcdd6" r={3} />
        </g>
      ))}
      <B x={306} y={196} w={300} h={110} f="#fff" r={12} />
      <rect x={306} y={196} width={300} height={110} rx={12} fill="none" stroke="#dcd9e6" />
      <B x={306} y={196} w={5} h={110} f="#19a463" r={2} />
      <rect x={326} y={214} width={40} height={40} rx={10} fill="#19a463" />
      <path d="M338 226 h14 v14 h-14z" fill="#fff" />
      <B x={380} y={216} w={130} h={9} f="#2b2740" r={4} />
      <B x={380} y={234} w={90} h={6} f="#9b97ab" r={3} />
      <B x={326} y={268} w={110} h={26} f="#19a463" r={13} />
      <B x={448} y={268} w={80} h={26} f="#eef0f4" r={13} />
      <B x={260} y={340} w={360} h={40} f="#fff" r={10} />
      <rect x={260} y={340} width={360} height={40} rx={10} fill="none" stroke="#dcd9e6" />
      <B x={276} y={356} w={150} h={7} f="#cfcdd6" r={3} />
    </Frame>
  );
}

export function OpenProjectArt() {
  const cols = ["#7c5cff", "#ffb547", "#7ef0c6"];
  return (
    <Frame host="OpenProject Dashboard" dark>
      <Defs />
      <B x={0} y={0} w={640} h={44} f="#0f0e16" r={0} />
      <B x={20} y={14} w={90} h={16} f="url(#gViolet)" r={8} />
      <B x={520} y={12} w={100} h={20} f="#2e2a45" r={10} />
      {cols.map((c, i) => (
        <g key={i}>
          <B x={24 + i * 140} y={64} w={128} h={190} f="#1e1c2b" r={12} />
          <B x={36 + i * 140} y={76} w={50} h={7} f={c} r={3} />
          {[0, 1, 2].slice(0, 3 - i).map((j) => (
            <g key={j}>
              <B x={36 + i * 140} y={96 + j * 52} w={104} h={44} f="#2a2740" r={8} />
              <B x={44 + i * 140} y={106 + j * 52} w={70} h={6} f="#d8d4e6" r={3} />
              <B x={44 + i * 140} y={120 + j * 52} w={40} h={5} f={c} r={3} o={0.8} />
            </g>
          ))}
        </g>
      ))}
      <B x={452} y={64} w={168} h={190} f="#1e1c2b" r={12} />
      <circle cx="536" cy="160" r="48" fill="none" stroke="#2e2a45" strokeWidth="16" />
      <circle cx="536" cy="160" r="48" fill="none" stroke="#7ef0c6" strokeWidth="16" strokeDasharray="190 302" transform="rotate(-90 536 160)" strokeLinecap="round" />
      <circle cx="536" cy="160" r="48" fill="none" stroke="#7c5cff" strokeWidth="16" strokeDasharray="60 302" strokeDashoffset="-200" transform="rotate(-90 536 160)" strokeLinecap="round" />
      <B x={24} y={274} w={596} h={106} f="#1e1c2b" r={12} />
      {[34, 60, 44, 78, 56, 92, 70, 84, 50, 98, 66, 88, 62, 74, 90].map((h, i) => (
        <rect key={i} x={44 + i * 38} y={366 - h} width={22} height={h} rx={5} fill={i % 3 === 0 ? "#7c5cff" : i % 3 === 1 ? "#b9a7ff" : "#7ef0c6"} opacity={0.9} />
      ))}
    </Frame>
  );
}

export const art = {
  ouigo: OuigoArt,
  mci: MciArt,
  junior: JuniorArt,
  barnes: BarnesArt,
  andragogy: AndragogyArt,
  kateo: KateoArt,
  meet: MeetArt,
  openproject: OpenProjectArt,
} as const;
