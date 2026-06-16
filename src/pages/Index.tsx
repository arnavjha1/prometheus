import logo from "@/assets/prometheus-logo.png";
import LevelCard from "@/components/LevelCard";
import levels from "@/data/levels";

const features = [
  {
    title: "Live guidance",
    description: "Weekly sessions and coaching help students learn by building.",
  },
  {
    title: "Project-first path",
    description: "Each level focuses on hands-on coding with real-world outcomes.",
  },
  {
    title: "Student-friendly pace",
    description: "Clear steps and simple explanations keep learners moving forward.",
  },
];

const testimonials = [
  {
    quote: "The classes helped me understand Python in a way that was easy and fun.",
    author: "Beginner Python Student",
  },
  {
    quote: "I enjoyed the projects and now I feel confident writing code.",
    author: "Intermediate JavaScript Student",
  },
  {
    quote: "The live sessions made learning feel more engaging and supportive.",
    author: "Prometheus learner",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Prometheus"
              className="h-12 w-12 rounded-2xl border border-border bg-card p-2"
            />
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground">
                Prometheus
              </p>
              <p className="text-xs text-muted-foreground">Student Portal</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Why Prometheus
            </a>
            <a href="#gallery" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Gallery
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Testimonials
            </a>
            <a href="#levels" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Levels
            </a>
          </nav>

          <a
            href="#levels"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/70"
          >
            Explore
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Free Python education</p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Learn Python, build projects, and join live student sessions.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Prometheus helps students go from fundamentals to real work through curated levels, live lessons, and supportive classroom energy.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#levels"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition hover:brightness-105"
              >
                View learning path
              </a>
              <a
                href="https://forms.gle/Cc2eyXE55KyKgbbx9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/70"
              >
                Register now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-[2rem] border border-border bg-card p-5 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.45)]">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="inline-flex rounded-3xl bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Live coding
                  </div>
                  <div className="grid gap-3">
                    <div className="h-4 w-3/4 rounded-full bg-border/50" />
                    <div className="h-4 w-1/2 rounded-full bg-border/40" />
                  </div>
                  <div className="rounded-[2rem] border border-border bg-background/80 p-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="h-3 rounded-full bg-slate-950/70" />
                      <div className="h-3 w-5/6 rounded-full bg-slate-950/70" />
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                        <div className="h-3 w-full rounded-full bg-slate-950/70" />
                      </div>
                      <div className="h-3 w-4/6 rounded-full bg-slate-950/70" />
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-border bg-gradient-to-br from-primary/5 to-background/70 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Code activity</p>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Running
                    </span>
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-sm text-muted-foreground">python app.py</span>
                    </div>
                    <div className="rounded-3xl bg-slate-950/90 p-4 text-sm text-foreground">
                      <div className="mb-2 rounded-full bg-slate-800/90 h-2 w-3/4" />
                      <div className="space-y-2">
                        <div className="h-2 w-full rounded-full bg-slate-800/90" />
                        <div className="h-2 w-5/6 rounded-full bg-slate-800/90" />
                        <div className="h-2 w-4/6 rounded-full bg-slate-800/90" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">A dynamic coding animation that shows a live development flow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6 text-center">
            <p className="text-4xl font-black">600+</p>
            <p className="mt-3 text-sm text-muted-foreground">Students enrolled</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 text-center">
            <p className="text-4xl font-black">$60K+</p>
            <p className="mt-3 text-sm text-muted-foreground">Overall contribution from classes</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 text-center">
            <p className="text-4xl font-black">12+</p>
            <p className="mt-3 text-sm text-muted-foreground">Trained volunteers</p>
          </div>
        </section>

        <section id="features" className="mt-20 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Why Prometheus</p>
            <h2 className="text-3xl font-bold">A student-first coding experience with structure and support.</h2>
            <p className="max-w-xl text-muted-foreground">
              Our curriculum is designed for young learners who want to move from beginner concepts to real Python projects with confidence.
            </p>
          </div>
          <div className="grid gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Gallery</p>
              <h2 className="text-3xl font-bold">Classroom energy in action</h2>
            </div>
            <a href="#testimonials" className="text-sm font-medium text-primary hover:underline">
              Read testimonials
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="h-40 rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-secondary/10" />
            ))}
          </div>
        </section>

        <section id="levels" className="mt-20">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Learning Path</p>
              <h2 className="text-3xl font-bold">The current Prometheus learning track</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Explore each level, join live classes, and continue growing with structured Python lessons.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((level) => (
              <LevelCard key={level.level} {...level} />
            ))}
          </div>
        </section>

        <section id="testimonials" className="mt-20">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Testimonials</p>
            <h2 className="text-3xl font-bold">What learners say</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-3xl border border-border bg-card p-6">
                <p className="text-sm leading-relaxed text-foreground">{item.quote}</p>
                <p className="mt-6 text-sm font-semibold text-primary">{item.author}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background/90 py-12 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-6xl space-y-4 px-6">
          <p>
            Contact us at <a href="mailto:contact@prometheus.org" className="text-foreground underline">contact@prometheus.org</a>
          </p>
          <p>© {new Date().getFullYear()} Prometheus. Empowering students through code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
