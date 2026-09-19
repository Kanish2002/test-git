<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import FlowMap from '$lib/components/FlowMap.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import ExperienceItem from '$lib/components/ExperienceItem.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { achievements, approach, expertise, experiences, profile, projects, snapshots } from '$lib/data';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Java Backend Engineer',
    email: `mailto:${profile.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Sona College of Technology' },
    sameAs: [profile.links.github, profile.links.linkedin, profile.links.leetcode],
    knowsAbout: ['Java', 'Spring Boot', 'Apache Kafka', 'Distributed Systems', 'Trading Systems', 'Banking and Payments']
  };
</script>

<svelte:head>
  <title>Kanish S | Java Backend Engineer</title>
  <meta name="description" content="Java Backend Engineer with 3+ years of experience building low-latency trading, banking, payment, and distributed systems using Java, Kotlin, Spring Boot, Kafka, Redis, PostgreSQL, Docker, Kubernetes, and AWS." />
  <link rel="canonical" href="https://kanish-s.vercel.app/" />
  <meta property="og:type" content="profile" />
  <meta property="og:title" content="Kanish S | Java Backend Engineer" />
  <meta property="og:description" content="Building low-latency, reliable backend systems for trading, banking, and financial transactions." />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Kanish S | Java Backend Engineer" />
  <meta name="twitter:description" content="Java, Spring Boot, Kafka, and distributed financial systems." />
  <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
</svelte:head>

<Header />

<main id="top">
  <section class="hero section-shell">
    <div class="hero-copy">
      <div class="availability"><span></span> Open to Java Backend and Distributed Systems opportunities</div>
      <p class="hero-kicker">KANISH S · JAVA BACKEND ENGINEER</p>
      <h1>Building fast, reliable systems for <em>trading</em>, <em>banking</em>, and financial transactions.</h1>
      <p class="hero-summary">{profile.summary}</p>
      <div class="hero-actions">
        <a class="button primary" href="#work">View engineering work <span>↘</span></a>
        <a class="button secondary" href={profile.links.resume} download>Download resume <span>↓</span></a>
      </div>
      <div class="social-line" aria-label="Profile links">
        <a href={`mailto:${profile.email}`}>Email ↗</a>
        <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={profile.links.leetcode} target="_blank" rel="noreferrer">LeetCode ↗</a>
      </div>
    </div>
    <div class="hero-visual">
      <FlowMap />
      <div class="visual-footnote"><span>ABSTRACT SYSTEM MAP</span><span>NOT EMPLOYER ARCHITECTURE</span></div>
    </div>
  </section>

  <section class="snapshot section-shell" aria-label="Engineering snapshot">
    {#each snapshots as snapshot, index}
      <div class="snapshot-item reveal">
        <span class="snapshot-index">0{index + 1}</span>
        <strong>{snapshot.value}</strong>
        <span>{snapshot.label}</span>
      </div>
    {/each}
  </section>

  <section id="about" class="section-shell content-section about-section">
    <SectionHeader eyebrow="01 / About" title="A backend engineer shaped by real-time systems." />
    <div class="about-grid reveal">
      <p class="about-lead">I specialize in distributed, event-driven financial systems—where correctness, latency, and reliability all matter at once.</p>
      <div class="about-copy">
        <p>My path began with real-time computer vision and backend internships, then moved into production trading platforms, order-management systems, and market-data pipelines.</p>
        <p>At Zentropy, I progressed from intern to Senior Member Technical, taking on system design, performance optimization, code reviews, and mentoring. I later worked at Barq on payment, wallet, accounting, and settlement services for a digital-wallet platform.</p>
      </div>
    </div>
  </section>

  <section id="experience" class="section-shell content-section">
    <SectionHeader eyebrow="02 / Experience" title="From research prototypes to production finance." copy="A chronological view of the systems, responsibilities, and engineering scope I have taken on." />
    <div class="experience-list">
      {#each experiences as item, index}<ExperienceItem {item} {index} />{/each}
    </div>
  </section>

  <section id="work" class="section-shell content-section work-section">
    <SectionHeader eyebrow="03 / Engineering Work" title="Systems built for motion, failure, and scale." copy="Professional case studies are summarized to protect proprietary implementation details." />
    <div class="project-grid">
      {#each projects as project, index}<ProjectCard {project} {index} />{/each}
    </div>
    <a class="github-banner reveal" href={profile.links.github} target="_blank" rel="noreferrer">
      <div><span>PUBLIC PROFILE</span><h3>GitHub / Kanish2002</h3></div>
      <p>Explore my public code and the Augmented Reality Sandbox repository. No activity metrics are shown without reliable verification.</p>
      <strong>Open GitHub ↗</strong>
    </a>
  </section>

  <section id="expertise" class="section-shell content-section expertise-section">
    <SectionHeader eyebrow="04 / Expertise" title="Tools organized by engineering responsibility." />
    <div class="expertise-grid">
      {#each expertise as area, index}
        <article class="expertise-card reveal">
          <div><span>0{index + 1}</span><h3>{area.group}</h3></div>
          <ul>{#each area.skills as skill}<li>{skill}</li>{/each}</ul>
        </article>
      {/each}
    </div>
  </section>

  <section class="section-shell content-section approach-section">
    <SectionHeader eyebrow="05 / Engineering approach" title="How I approach backend systems." copy="The same decision flow guides my work across order execution, market data, payments, and wallet transactions." />
    <ol class="approach-flow">
      {#each approach as step, index}
        <li class="reveal"><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>
      {/each}
    </ol>
  </section>

  <section id="achievements" class="section-shell content-section achievements-section">
    <SectionHeader eyebrow="06 / Achievements" title="Leadership, learning, and recognition." />
    <div class="achievement-layout">
      <div class="achievement-list">
        {#each achievements as achievement, index}
          <div class="achievement reveal"><span>{String(index + 1).padStart(2, '0')}</span><p>{achievement}</p></div>
        {/each}
      </div>
      <aside class="publication-card reveal">
        <span>PUBLICATION</span>
        <h3>Augmented Reality Sandbox With Play Based Learning For Preschool Children</h3>
        <div class="divider"></div>
        <span>CERTIFICATION</span>
        <h3>Robotic Process Automation</h3>
      </aside>
    </div>
  </section>

  <section id="education" class="section-shell content-section education-section">
    <SectionHeader eyebrow="07 / Education" title="A strong technical foundation." />
    <article class="education-card reveal">
      <div class="education-mark">9.48<small>/10</small></div>
      <div>
        <span>JUL 2019 — MAY 2023 · SALEM, INDIA</span>
        <h3>Bachelor of Technology<br />Information Technology</h3>
        <p>Sona College of Technology</p>
      </div>
      <div class="education-signal"><i></i><i></i><i></i><i></i><i></i></div>
    </article>
    <div class="beyond reveal">
      <span>BEYOND ENGINEERING</span>
      <p>I enjoy solving Rubik’s cubes from 3×3 through 7×7—a practice in pattern recognition, patience, and structured problem-solving.</p>
    </div>
  </section>

  <section id="contact" class="contact-section section-shell">
    <div class="contact-grid">
      <div>
        <span class="eyebrow">08 / Contact</span>
        <h2>Let’s build reliable<br />systems at <em>scale.</em></h2>
      </div>
      <div class="contact-copy">
        <p>I’m open to opportunities involving Java backend development, distributed systems, trading platforms, banking, payments, and high-performance financial applications.</p>
        <a class="email-link" href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a>
        <div class="contact-links">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer">LeetCode ↗</a>
          <a href={profile.links.resume} download>Resume ↓</a>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="section-shell">
  <div><a class="monogram" href="#top" aria-label="Back to top"><span>K</span><span>S</span></a><p>Kanish S · Java Backend Engineer<br />Bengaluru, India</p></div>
  <p>Designed around systems, reliability, and measurable engineering impact.</p>
  <a href="#top">Back to top ↑</a>
</footer>
