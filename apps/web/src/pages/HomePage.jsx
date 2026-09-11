import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ArrowRight, ShieldCheck, KeyRound, CreditCard, LayoutDashboard, Brain, Zap, Search, Server, UtensilsCrossed, Stethoscope, Dumbbell, Scissors, Car, PartyPopper, MessageCircle, Bot, MailCheck, TrendingUp, Check, Menu, X, MessageSquare } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const PHONE = '+918080470439';
const PHONE_WA = '918080470439';
const EMAIL = 'himanshuvpandey@gmail.com';
const HERO_IMG = 'https://images.hostinger.com/ac523791-82ad-4392-92ee-d5e7adbe389b.png';
const TEAM_IMG = 'https://images.hostinger.com/5c1b9afe-d8ee-44e0-9a86-84b41b62a9f5.png';
const markets = [{
  icon: UtensilsCrossed,
  title: 'Restaurants & Hotels',
  copy: 'Live menus, table & room bookings, delivery-ready ordering, and review capture that fills quiet hours.'
}, {
  icon: Stethoscope,
  title: 'Doctors, Lawyers, CAs & Consultants',
  copy: 'Appointment scheduling, document intake, credential-forward pages, and confidential client portals.'
}, {
  icon: Dumbbell,
  title: 'Fitness & Gyms',
  copy: 'Membership plans, trial-class funnels, trainer profiles, and renewal reminders that stop churn.'
}, {
  icon: Scissors,
  title: 'Beauty Salons',
  copy: 'Stylist-wise slot booking, service galleries, package upsells, and WhatsApp confirmations.'
}, {
  icon: Car,
  title: 'Car Decoration & Auto Shops',
  copy: 'Before/after showcases, quote builders for wraps and accessories, and job-status tracking.'
}, {
  icon: PartyPopper,
  title: 'Event Halls',
  copy: 'Date-availability calendars, capacity and package comparison, and instant enquiry routing.'
}];
const features = [{
  icon: KeyRound,
  title: 'Role-Based Access Control',
  copy: 'Owner, manager and staff permissions scoped down to a single action.'
}, {
  icon: ShieldCheck,
  title: 'Secure Google Auth Sign-in',
  copy: 'One-tap OAuth logins with session hardening and SSL end to end.'
}, {
  icon: CreditCard,
  title: 'Payments & Order Placement',
  copy: 'UPI, cards and wallets with clean order flows and receipt automation.'
}, {
  icon: LayoutDashboard,
  title: 'Custom Admin Panels',
  copy: 'Your team edits content, pricing and stock without ever calling us.'
}, {
  icon: Brain,
  title: 'AI Model Integration',
  copy: 'Recommendations, summarisation and smart replies wired into your data.'
}, {
  icon: Zap,
  title: 'High-Speed Caching',
  copy: 'Edge caching and image optimisation for sub-second loads on 4G.'
}, {
  icon: Search,
  title: 'Smart Search & Filters',
  copy: 'Typo-tolerant search across menus, catalogues, services and records.'
}, {
  icon: Server,
  title: 'Pay-as-you-go Hosting',
  copy: 'Scalable infrastructure you pay for by usage, not by fixed retainer.'
}];
const plugins = [{
  icon: TrendingUp,
  title: 'Top of Google',
  copy: 'Localised SEO with schema, Google Business optimisation and tightly targeted ad packages for your city and pin codes.'
}, {
  icon: MessageCircle,
  title: 'WhatsApp CRM',
  copy: 'Every enquiry lands in one inbox with follow-up sequences, tags and reminders so no lead goes cold.'
}, {
  icon: Bot,
  title: 'AI Receptionist Chatbot',
  copy: 'Answers pricing, timings and availability in your tone, books slots and hands off to a human when it matters.'
}, {
  icon: MailCheck,
  title: 'Automated Email Campaigns',
  copy: 'Festive offers, renewal nudges and win-back journeys triggered from real customer behaviour.'
}];
const testimonials = [{
  name: 'Rohit Deshmukh',
  role: 'Owner, Saffron House, Pune',
  img: 'https://images.hostinger.com/509adc37-bd0d-492a-8b49-21feb589ed21.png',
  quote: 'Online table bookings went from a phone-only mess to 140+ reservations a month. The admin panel is simple enough that my floor manager runs it.'
}, {
  name: 'Dr. Ananya Iyer',
  role: 'Founder, Smile Studio Dental, Bangalore',
  img: 'https://images.hostinger.com/710ce55e-251b-4995-ae25-e8584453f3a9.png',
  quote: 'Patients book slots themselves and the AI receptionist handles the repetitive questions. My front desk finally has time for people in the clinic.'
}, {
  name: 'Karan Malhotra',
  role: 'Director, Ironline Fitness, Mumbai',
  img: 'https://images.hostinger.com/daea7e30-b19a-4520-a160-d1a244b91946.png',
  quote: 'Trial sign-ups tripled in the first quarter and the WhatsApp follow-ups convert them. Renewals stopped slipping through the cracks.'
}];
const faqs = [{
  q: 'How long does a Pixel-Brain website take to launch?',
  a: 'A focused business site goes live in 2 to 3 weeks. Systems with payments, dashboards or AI features typically run 4 to 6 weeks, delivered in reviewable stages so you always see progress.'
}, {
  q: 'What does "1-Year Service Support + Free Enhancements" include?',
  a: 'Twelve months of hosting supervision, security patching, uptime monitoring, content updates and a steady stream of small feature enhancements at no extra development cost.'
}, {
  q: 'Do you customise the design for my industry?',
  a: 'Yes. We study your customer base and business data, then tune the layout, journey and tone of voice — a salon and a chartered accountant get genuinely different experiences, not the same template recoloured.'
}, {
  q: 'Will my site actually rank in local searches?',
  a: 'Our SEO package covers local business schema, city and locality landing pages, Google Business Profile work and technical performance — the factors that decide local map and search placement.'
}, {
  q: 'What does hosting cost after launch?',
  a: 'Hosting is pay-as-you-go, so a neighbourhood salon pays a fraction of what a multi-branch restaurant chain does. You scale spend only when traffic scales.'
}];
const ticker = ['AI-Driven Growth', 'Conversion-Focused Design', 'Local SEO', 'Secure Payments', 'Custom Admin Panels', 'WhatsApp CRM', 'Pay-as-you-go Hosting'];
function StickyContact() {
  const [open, setOpen] = useState(false);
  return <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && <motion.div initial={{
        opacity: 0,
        y: 12,
        scale: 0.95
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 12,
        scale: 0.95
      }} transition={{
        duration: 0.2,
        ease: 'easeOut'
      }} className="flex w-56 flex-col gap-2 rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] p-3 shadow-2xl shadow-black/50">
            <a href={`tel:${PHONE}`} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4F46E5]/20">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F46E5]/20 text-[#818cf8]">
                <Phone className="h-4 w-4" strokeWidth={2} />
              </span>
              Call us
            </a>
            <a href={`https://wa.me/${PHONE_WA}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-500/20">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <MessageSquare className="h-4 w-4" strokeWidth={2} />
              </span>
              WhatsApp
            </a>
          </motion.div>}
      </AnimatePresence>
      <button type="button" aria-label={open ? 'Close contact options' : 'Open contact options'} onClick={() => setOpen(v => !v)} className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] to-teal-400 text-white shadow-lg shadow-[#4F46E5]/40 transition-transform hover:scale-105 active:scale-95">
        {open ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </button>
    </div>;
}
function HomePage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [navOpen, setNavOpen] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free consultation request from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const nav = [['Who We Serve', '#markets'], ['Capabilities', '#features'], ['Growth', '#growth'], ['Results', '#testimonials'], ['FAQ', '#faq']];
  return <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Pixel-Brain | AI-Driven Web Development Agency for Local Businesses</title>
        <meta name="description" content="Pixel-Brain builds conversion-focused websites, admin panels and AI systems for restaurants, clinics, gyms, salons, auto shops and event halls. Book a free consultation." />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Pixel-Brain',
          description: 'Premium web development and digital solutions agency building AI-driven business systems for local businesses.',
          telephone: PHONE,
          email: EMAIL,
          areaServed: 'India',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN'
          },
          slogan: "We don't build websites, we build businesses."
        })}</script>
      </Helmet>
      <Seo title="Pixel-Brain | We don't build websites, we build businesses" description="AI-driven web development, admin panels, payments and local SEO for restaurants, clinics, gyms, salons and event halls." image={HERO_IMG} siteName="Pixel-Brain" />

      <div className="border-b border-white/5 bg-[hsl(var(--ink))] text-sm text-white/70">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-2 px-5 py-2.5">
          <span className="font-display tracking-wide">Free consultation. No obligation.</span>
          <div className="flex items-center gap-5">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 transition-colors hover:text-[#818cf8]"><Phone className="h-4 w-4" strokeWidth={1.75} />{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="hidden items-center gap-2 transition-colors hover:text-[#818cf8] sm:flex"><Mail className="h-4 w-4" strokeWidth={1.75} />{EMAIL}</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[hsl(var(--ink))]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-xl font-extrabold tracking-tight text-white"><span style={{
            fontFamily: "Sora, sans-serif"
          }}>Pixel<font color="#4f46e5"> </font>Brain</span></a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-white/60 transition-colors hover:text-white">{label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-indigo hidden rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-block">Book a Free Consultation</a>
            <button type="button" aria-label="Toggle menu" onClick={() => setNavOpen(!navOpen)} className="text-white lg:hidden">
              {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {navOpen && <nav className="flex flex-col gap-1 border-t border-white/5 px-5 pb-4 lg:hidden">
            {nav.concat([['Contact', '#contact']]).map(([label, href]) => <a key={href} href={href} onClick={() => setNavOpen(false)} className="py-2.5 text-white/80">{label}</a>)}
          </nav>}
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[hsl(var(--ink))]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#4F46E5]/20 blur-[100px]" />
          <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
        </div>
        <img src={HERO_IMG} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--ink))] via-[hsl(var(--ink))]/90 to-transparent" />
        <div className="relative mx-auto grid w-full max-w-[90rem] items-center gap-14 px-5 py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.span initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            ease: 'easeOut'
          }} className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/40 bg-[#4F46E5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a5b4fc]">
              AI-Driven Digital Agency
            </motion.span>
            <motion.h1 initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.55,
            delay: 0.08,
            ease: 'easeOut'
          }} className="font-display mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              We don&apos;t build websites,{' '}
              <span className="gradient-text">we build businesses.</span>
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.55,
            delay: 0.16,
            ease: 'easeOut'
          }} className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              Conversion-focused sites, admin panels and AI systems for restaurants, clinics, gyms, salons, auto shops and event halls — engineered to win local customers.
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.55,
            delay: 0.24,
            ease: 'easeOut'
          }} className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-indigo inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:border-[#4F46E5]/50 hover:bg-white/5">
                See capabilities
              </a>
            </motion.div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4">
              {[{
              v: 120,
              s: '+',
              l: 'Projects shipped'
            }, {
              v: 98,
              s: '%',
              l: 'Client retention'
            }, {
              v: 4,
              s: 'wk',
              l: 'Avg. launch'
            }].map(s => <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur">
                  <div className="font-display text-2xl font-bold text-white">
                    <CountUp value={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-white/45">{s.l}</div>
                </div>)}
            </div>
          </div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.96
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2,
          ease: 'easeOut'
        }} className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#4F46E5]/30 to-teal-400/20 blur-2xl" />
            <img src={TEAM_IMG} alt="Pixel-Brain team collaborating on a digital product" className="relative aspect-[4/5] w-full rounded-[1.75rem] border border-white/10 object-cover shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-white/5 bg-[hsl(222_40%_8%)] py-4">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => <span key={`${t}-${i}`} className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
              <span className="mr-10 text-[#4F46E5]">◆</span>{t}
            </span>)}
        </div>
      </div>

      {/* Markets */}
      <section id="markets" className="bg-background px-5 py-24">
        <div className="mx-auto max-w-[90rem]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#818cf8]">Who we serve</p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for the businesses that run your city
            </h2>
            <p className="mt-4 max-w-2xl text-white/60">
              Every industry gets a tailored journey — not a generic template with a new logo.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((m, i) => <Reveal key={m.title} delay={i * 0.05}>
                <article className="group h-full rounded-2xl border border-white/8 bg-[hsl(222_40%_10%)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/40 hover:shadow-lg hover:shadow-[#4F46E5]/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F46E5]/25 to-teal-500/15 text-[#a5b4fc] transition-colors group-hover:from-[#4F46E5]/40">
                    <m.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold text-white">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{m.copy}</p>
                </article>
              </Reveal>)}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative overflow-hidden bg-[hsl(222_47%_5%)] px-5 py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#4F46E5]/10 blur-[100px]" />
        <div className="mx-auto max-w-[90rem]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#818cf8]">Elite technical features</p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Infrastructure that scales with your ambition
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => <Reveal key={f.title} delay={i * 0.04}>
                <article className="group h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#4F46E5]/35 hover:bg-[#4F46E5]/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[hsl(222_40%_12%)] text-[#818cf8] transition-colors group-hover:border-[#4F46E5]/40 group-hover:text-[#a5b4fc]">
                    <f.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display mt-4 text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{f.copy}</p>
                </article>
              </Reveal>)}
          </div>
        </div>
      </section>

      {/* Growth plugins */}
      <section id="growth" className="bg-background px-5 py-24">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#818cf8]">Growth & marketing plugins</p>
              <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Plug-and-play tools that fill your calendar
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-300">
                <Check className="h-4 w-4" /> 1-Year Service Support + Free Enhancements
              </div>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {plugins.map((p, i) => <Reveal key={p.title} delay={i * 0.06}>
                <article className="flex h-full gap-5 rounded-2xl border border-white/8 bg-[hsl(222_40%_10%)] p-7 transition-all duration-300 hover:border-[#4F46E5]/35">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4F46E5] to-teal-500 text-white shadow-lg shadow-[#4F46E5]/25">
                    <p.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{p.copy}</p>
                  </div>
                </article>
              </Reveal>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-[hsl(222_47%_5%)] px-5 py-24">
        <div className="mx-auto max-w-[90rem]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#818cf8]">Results</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Operators who trust Pixel-Brain
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => <Reveal key={t.name} delay={i * 0.08}>
                <blockquote className="flex h-full flex-col rounded-2xl border border-white/8 bg-[hsl(222_40%_10%)] p-7">
                  <p className="flex-1 text-[15px] leading-relaxed text-white/70">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                    <img src={t.img} alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-[#4F46E5]/40" />
                    <div>
                      <div className="font-display text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-white/45">{t.role}</div>
                    </div>
                  </footer>
                </blockquote>
              </Reveal>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-background px-5 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#818cf8]">FAQ</p>
            <h2 className="font-display mt-3 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Questions, answered
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-12 space-y-3">
              {faqs.map((f, i) => <AccordionItem key={f.q} value={`faq-${i}`} className="rounded-2xl border border-white/8 bg-[hsl(222_40%_10%)] px-5 data-[state=open]:border-[#4F46E5]/40">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-white hover:no-underline hover:text-[#a5b4fc]">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-white/55">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-[hsl(222_47%_5%)] px-5 py-24">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#4F46E5]/15 blur-[100px]" />
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#818cf8]">Contact</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Book your free consultation
            </h2>
            <p className="mt-4 max-w-md text-white/60">
              Tell us about your business. We&apos;ll reply with a clear plan — no pressure, no jargon.
            </p>
            <div className="mt-8 space-y-4">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-white/80 transition-colors hover:text-[#a5b4fc]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F46E5]/15 text-[#818cf8]"><Phone className="h-4 w-4" /></span>
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/80 transition-colors hover:text-[#a5b4fc]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F46E5]/15 text-[#818cf8]"><Mail className="h-4 w-4" /></span>
                {EMAIL}
              </a>
              <a href={`https://wa.me/${PHONE_WA}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 transition-colors hover:text-emerald-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400"><MessageSquare className="h-4 w-4" /></span>
                WhatsApp {PHONE}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] p-7 sm:p-9">
              {sent ? <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4F46E5]/20 text-[#a5b4fc]">
                    <Check className="h-7 w-7" />
                  </div>
                  <p className="font-display mt-4 text-xl font-semibold text-white">Message ready</p>
                  <p className="mt-2 text-sm text-white/55">Your email client should open — send it and we&apos;ll be in touch shortly.</p>
                </div> : <div className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                    <input id="name" required value={form.name} onChange={e => setForm({
                  ...form,
                  name: e.target.value
                })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-[#4F46E5] placeholder:text-white/30 focus:border-[#4F46E5]/50 focus:ring-1" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                    <input id="email" type="email" required value={form.email} onChange={e => setForm({
                  ...form,
                  email: e.target.value
                })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-[#4F46E5] placeholder:text-white/30 focus:border-[#4F46E5]/50 focus:ring-1" placeholder="you@business.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                    <textarea id="message" required rows={4} value={form.message} onChange={e => setForm({
                  ...form,
                  message: e.target.value
                })} className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-[#4F46E5] placeholder:text-white/30 focus:border-[#4F46E5]/50 focus:ring-1" placeholder="Tell us about your business and goals" />
                  </div>
                  <button type="submit" className="btn-indigo w-full rounded-full py-3.5 text-sm font-semibold">
                    Send message
                  </button>
                </div>}
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[hsl(var(--ink))] px-5 py-12">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-display text-lg font-extrabold text-white">Pixel<span className="text-[#4F46E5]">-</span>Brain</div>
            <p className="mt-2 max-w-xs text-sm text-white/45">We don&apos;t build websites, we build businesses.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55">
            {nav.map(([label, href]) => <a key={href} href={href} className="transition-colors hover:text-white">{label}</a>)}
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>
          <div className="text-sm text-white/40">
            <a href={`tel:${PHONE}`} className="block hover:text-[#818cf8]">{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="mt-1 block hover:text-[#818cf8]">{EMAIL}</a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[90rem] border-t border-white/5 pt-6 text-xs text-white/30">
          © {new Date().getFullYear()} Pixel-Brain. All rights reserved.
        </div>
      </footer>

      <StickyContact />
    </div>;
}
export default HomePage;