import { Reveal } from "@/components/Reveal";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Reveal>
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          <div className="shrink-0">
            <div className="h-48 w-48 overflow-hidden rounded-2xl border border-white/[0.08] bg-surfaceSoft md:h-56 md:w-56">
              {/* Replace with: <Image src="/your-photo.jpg" alt="Your name" width={224} height={224} className="h-full w-full object-cover" /> */}
              <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
                [Your photo]
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h1 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              About
            </h1>
            <p className="text-slate-300 leading-relaxed">
              [Add your first paragraph here. Introduce yourself and what you do.]
            </p>
            <p className="text-slate-300 leading-relaxed">
              [Add your second paragraph here. Share background, interests, or what drives you.]
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
