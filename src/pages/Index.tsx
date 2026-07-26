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

type StaffTier = "co-founder" | "manager" | "board" | "staff";

type StaffMember = {
  name: string;
  role: string;
  biography: string;
  image: string;
};

const staffTierClasses: Record<
  StaffTier,
  { card: string; role: string; kicker: string }
> = {
  "co-founder": {
    card: "staff-card-co-founder",
    role: "staff-role-co-founder",
    kicker: "staff-tier-co-founder",
  },
  manager: {
    card: "staff-card-manager",
    role: "staff-role-manager",
    kicker: "staff-tier-manager",
  },
  board: {
    card: "staff-card-board",
    role: "staff-role-board",
    kicker: "staff-tier-board",
  },
  staff: {
    card: "staff-card-staff",
    role: "staff-role-staff",
    kicker: "staff-tier-staff",
  },
};

const staffTiers: {
  tier: StaffTier;
  label: string;
  eyebrow: string;
  members: StaffMember[];
}[] = [
  {
    tier: "co-founder",
    label: "Co-Founders",
    eyebrow: "The spark",
    members: [
      {
        name: "Co-Founder Name",
        role: "Co-Founder & Executive Director",
        biography:
          "Add a short biography about this co-founder's vision, experience, and the work they lead at Prometheus.",
        image: logo,
      },
      {
        name: "Co-Founder Name",
        role: "Co-Founder & Program Director",
        biography:
          "Add a short biography about this co-founder's impact, background, and commitment to student learning.",
        image: logo,
      },
    ],
  },
  {
    tier: "manager",
    label: "Managers",
    eyebrow: "The flame",
    members: [
      {
        name: "Manager Name",
        role: "Program Manager",
        biography:
          "Add a short biography describing the programs, people, or initiatives this manager supports.",
        image: logo,
      },
      {
        name: "Manager Name",
        role: "Operations Manager",
        biography:
          "Add a short biography describing this manager's experience and role in keeping the team moving.",
        image: logo,
      },
    ],
  },
  {
    tier: "board",
    label: "Board Members",
    eyebrow: "Guiding the mission",
    members: [
      {
        name: "Board Member Name",
        role: "Board Member",
        biography:
          "Add a short biography about this board member's expertise and the perspective they bring to Prometheus.",
        image: logo,
      },
      {
        name: "Board Member Name",
        role: "Board Member",
        biography:
          "Add a short biography about this board member's leadership, community work, or professional background.",
        image: logo,
      },
    ],
  },
  {
    tier: "staff",
    label: "Staff Members",
    eyebrow: "Powering every program",
    members: [
      {
        name: "Staff Member Name",
        role: "Lead Instructor",
        biography:
          "Add a short biography about this staff member's teaching experience and the subjects they love to share.",
        image: logo,
      },
      {
        name: "Staff Member Name",
        role: "Curriculum Developer",
        biography:
          "Add a short biography about this staff member's skills, projects, and contribution to the curriculum.",
        image: logo,
      },
      {
        name: "Staff Member Name",
        role: "Community Coordinator",
        biography:
          "Add a short biography about this staff member's work with students, families, and the wider community.",
        image: logo,
      },
    ],
  },
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
            <a href="#team" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Team
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
              Join hundreds of youth innovators shaping the next wave of technology. Participate in  impactful hackathons to showcase talent and join our classes to learn Python and AI with live guidance from industry professionals. Our project-first curriculum empowers students to build real-world skills and confidence in coding.
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
            <p className="text-4xl font-black text-foreground">1800+</p>
            <p className="mt-3 text-sm text-muted-foreground">Students enrolled</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-black text-foreground">$1700</p>
            <p className="mt-3 text-sm text-muted-foreground">In hackathon prizes</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-black text-foreground">50+</p>
            <p className="mt-3 text-sm text-muted-foreground">Recruited Staff & Trainees</p>
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

        <section id="team" className="mt-24 scroll-mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Our Team</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Meet the people behind Prometheus</h2>
            <p className="mt-4 text-muted-foreground">
              Educators, leaders, and community builders working together to make technology education more accessible.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {staffTiers.map((group) => (
              <div key={group.tier}>
                <div className="mb-7 flex items-end justify-between gap-4 border-b border-gray-200 pb-4">
                  <div>
                    <p className={`staff-tier-kicker ${staffTierClasses[group.tier].kicker}`}>
                      {group.eyebrow}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold">{group.label}</h3>
                  </div>
                  <p className="hidden text-sm text-muted-foreground sm:block">
                    {group.members.length} {group.members.length === 1 ? "member" : "members"}
                  </p>
                </div>

                <div
                  className={`grid gap-7 sm:grid-cols-2 ${
                    group.members.length > 2
                      ? "lg:grid-cols-3"
                      : "mx-auto lg:max-w-4xl lg:grid-cols-2"
                  }`}
                >
                  {group.members.map((member, index) => (
                    <article
                      key={`${group.tier}-${index}`}
                      className={`staff-card ${staffTierClasses[group.tier].card}`}
                    >
                      <div className="staff-card-inner">
                        <div className="staff-photo">
                          <img
                            src={member.image}
                            alt={`${member.name} profile`}
                            className="h-full w-full object-contain p-12"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-foreground">{member.name}</h4>
                          <p className={`staff-role ${staffTierClasses[group.tier].role}`}>
                            {member.role}
                          </p>
                          <p className="mt-4 text-sm leading-6 text-muted-foreground">
                            {member.biography}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
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
