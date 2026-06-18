import logo from "@/assets/prometheus-logo.png";
import gallery1 from "@/assets/gallery (1).jpeg";
import gallery2 from "@/assets/gallery (2).jpeg";
import gallery3 from "@/assets/gallery (3).jpeg";
import gallery4 from "@/assets/gallery (4).jpeg";
import LevelCard from "@/components/LevelCard";
import levels from "@/data/levels";

const features = [
  {
    title: "Live guidance",
    description: "Weekly sessions and coaching help students learn by building.",
  },
  {
    title: "Professional IT workers teach classes",
    description: "Learn from experienced professionals in the field.",
  },
  {
    title: "Project-first, student-friendly path",
    description: "Each level focuses on hands-on coding with real-world outcomes. Clear steps and simple explanations keep learners moving forward.",
  },
];

const testimonials = [
  {
    quote: "My son liked the activities and learning about AI, ML, and DL. He liked the AI python project very much. Hasith is very confident with using Python to train AI and understands how you train AI models in Python. The instructors were professional, knowledgeable, and very patient. Having teachers with real experience in IT and AI made the lessons practical and engaging. They explained complex concepts in a way that was easy for students to understand.",
    author: "Krishnaveni - Parent of Hasith (Python L3)",
  },
  {
    quote: "I learned how to code some python with zero previous experience.",
    author: "Ishan Mani (Python L1)",
  },
];

const galleryImages = [
  { src: gallery1, alt: "Prometheus classroom session" },
  { src: gallery2, alt: "Prometheus students learning together" },
  { src: gallery3, alt: "Prometheus live coding class" },
  { src: gallery4, alt: "Prometheus student project work" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="glass-panel sticky top-0 z-50">
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
              <p className="text-xs text-muted-foreground">Official Website</p>
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
            className="btn-secondary"
          >
            Explore
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-purple-200 px-4 py-2">
              <p className="text-sm font-semibold tracking-widest text-purple-700">IMPACT • SPEED • COMMUNITY</p>
            </div>
            <div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                Build the future at{" "}
                <span className="text-primary">Prometheus.</span>
              </h1>
            </div>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join hundreds of youth innovators shaping the next wave of technology. Participate in high-impact sprints and showcase your talent.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-4">
              <a
                href="#levels"
                className="btn-primary"
              >
                View learning path
              </a>
              <a
                href="https://prometheus-join-portal-two.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Register now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card aspect-[4/3] w-full p-5">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="inline-flex rounded-3xl bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Live coding
                  </div>
                  <div className="grid gap-3">
                    <div className="h-4 w-3/4 rounded-full bg-gray-200" />
                    <div className="h-4 w-1/2 rounded-full bg-gray-200" />
                  </div>
                  <div className="rounded-[2rem] border border-gray-100 bg-gray-50 p-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="h-3 rounded-full bg-gray-300" />
                      <div className="h-3 w-5/6 rounded-full bg-gray-300" />
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                        <div className="h-3 w-full rounded-full bg-gray-300" />
                      </div>
                      <div className="h-3 w-4/6 rounded-full bg-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-black text-foreground">900+</p>
            <p className="mt-3 text-sm text-muted-foreground">Students enrolled</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-black text-foreground">$100</p>
            <p className="mt-3 text-sm text-muted-foreground">In hackathon prizes</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-black text-foreground">35+</p>
            <p className="mt-3 text-sm text-muted-foreground">Staff & Trained volunteers</p>
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
              <div key={feature.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="mt-20">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Gallery</p>
            <h2 className="text-3xl font-bold">Classroom energy in action</h2>
          </div>
          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-4">
            {galleryImages.map((image) => (
              <div key={image.src} className="glass-card aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="levels" className="mt-20">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Learning Path</p>
            <h2 className="text-3xl font-bold">Join our classes</h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <div key={item.author} className="glass-card p-6">
                <p className="text-sm leading-relaxed text-foreground">{item.quote}</p>
                <p className="mt-6 text-sm font-semibold text-primary">{item.author}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-white/50 py-12 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-6xl space-y-4 px-6">
          <p>
            Contact us at <a href="business@prometheuscs.org" className="text-foreground underline">business@prometheuscs.org</a>
          </p>
          <p>© {new Date().getFullYear()} Prometheus. Empowering students through code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
