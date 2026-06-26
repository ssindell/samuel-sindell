// ─────────────────────────────────────────────────────────────────────────
// SITE COPY — Samuel Sindell
// Everything visible on the site is in this file. Edit text here; the layout
// updates automatically. Voice rules: short declarative sentences, contrast
// pairs ("not X — Y"), exact numbers, calm authority, no filler.
//
// PLACEHOLDERS to swap when ready are marked with  // TODO
// ─────────────────────────────────────────────────────────────────────────

module.exports = {
  // ── Brand / global ──────────────────────────────────────────────────────
  name: 'Samuel Sindell',
  role: 'Investment Adviser · Richmond Capital Advisory',
  metaDescription:
    'Samuel Sindell works with a small number of high-net-worth investors buying property in Dubai — helping them choose well, structure it properly, and hold it with confidence.',

  // Primary + secondary calls to action used across the page.
  cta: {
    bookLabel: 'Book a call',
    // Live email for now. LATER: swap to a Calendly/booking link (just change this one line).
    bookUrl: 'mailto:hello@richmondcapitaladvisory.com',
    linkedinLabel: 'Connect on LinkedIn',
    linkedinUrl: 'https://www.linkedin.com/in/samuel-sindell/', // confirmed
    companyLabel: 'Richmond Capital Advisory',
    companyUrl: 'https://www.richmondcapitaladvisory.com', // confirmed
  },

  // ── Navigation ──────────────────────────────────────────────────────────
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Work with me', href: '#work' },
    { label: 'Insights', href: '#insights' },
  ],

  // ── Hero ────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'Dubai real estate · High-net-worth advisory',
    // Warm, first-person, client-empathy. Leads with their reality, not a slogan.
    heading: 'Most of my clients are buying in Dubai for the first time. I make sure they get it right.',
    body:
      "I'm Samuel Sindell. I work with a small group of high-net-worth " +
      'investors — helping them choose the right property, structure it well, ' +
      'and hold it with confidence. One adviser, from the first conversation ' +
      'to long after the keys.',
    portrait: '/img/portrait.jpg', // drop your photo at public/img/portrait.jpg (falls back to placeholder until then)
    portraitAlt: 'Samuel Sindell',
  },

  // ── Intro band (who I'm for / what I stand against) ─────────────────────
  intro:
    'I started with a lot less than the people I now advise. That is not a ' +
    'hard-luck story — it is the reason I take other people’s money seriously. ' +
    'I treat every decision as if the capital were hard to replace, because I ' +
    'learned early that it is.',

  // ── Proof / stat strip ──────────────────────────────────────────────────
  stats: [
    { figure: 'AED 250M+', label: 'in property transacted' },
    { figure: 'FinTech · Renewables · Real Estate', label: 'cross-sector background' },
    { figure: 'Select clients only', label: 'one adviser, end to end' },
  ],

  // ── About / story (reserved professional arc) ───────────────────────────
  about: {
    heading: 'Why I do this',
    paragraphs: [
      'I grew up with a lot less than most of my clients have today. Money was ' +
        'never a given. When you start there, you learn early that capital is ' +
        'hard to earn and easy to lose — and you never quite forget it. That ' +
        'lesson is the reason I do this work the way I do.',
      'My career took me through technology and energy before property. As ' +
        'Head of Sales for a FinTech company, I saw how money and risk are ' +
        'really priced, and how serious people make serious decisions. In ' +
        'renewable energy, I learned to think in decades rather than quarters — ' +
        'to value what compounds quietly over what spikes loudly.',
      'Property advisory is where all of that came together. I founded Richmond ' +
        'Capital Advisory because I wanted to give people one adviser who ' +
        'actually reads the numbers, structures the deal properly, and stays ' +
        'with them through to completion — not a salesperson who disappears ' +
        'once the commission clears.',
      'I keep my client list small on purpose. I would rather do a handful of ' +
        'relationships properly than chase volume. If we work together, you get ' +
        'me — direct, honest, and genuinely invested in the decision going ' +
        'right for you.',
    ],
  },

  // ── Work with me (RCA offer) ────────────────────────────────────────────
  work: {
    heading: 'Work with me',
    lead:
      'Through Richmond Capital Advisory, I work with a small number of ' +
      'high-net-worth investors on their Dubai property — from finding the ' +
      'right asset to structuring it well and managing it over time.',
    offerings: [
      {
        title: 'Portfolio strategy',
        body:
          'Acquisition and management built around your goals and time ' +
          'horizon, and reviewed as the market and your plans change.',
      },
      {
        title: 'Acquisition',
        body:
          'Off-plan and ready units, blue-chip and selective secondary stock. ' +
          'The right asset, at the right entry, with the exit already in mind.',
      },
      {
        title: 'Tax mitigation & structuring',
        body:
          'Financial structuring and company formations that hold the asset ' +
          'efficiently, so more of the return stays with you.',
      },
      {
        title: 'One adviser, end to end',
        body:
          'First conversation to signed SPA and well beyond. No hand-offs, no ' +
          'pressure, and no losing the thread between people.',
      },
    ],
    fitHeading: 'Who this is for',
    fitFor:
      'People making a serious decision who want clarity, structure, and one ' +
      'relationship they can trust all the way through.',
    fitNot:
      'I keep my client list small on purpose, so this will not suit everyone. ' +
      'If you want the cheapest, fastest transaction, I am not your person. If ' +
      'you want it done properly and held well, I am.',
  },

  // ── Insights / writing ──────────────────────────────────────────────────
  // Launch with a few so the section signals authority. Swap dek/links as you
  // publish. Set `link` to '#' until a piece is live.
  insights: {
    heading: 'Insights',
    intro: 'Short, honest notes on the Dubai market — the same things I tell my clients.',
    posts: [
      {
        title: 'Dubai is structurally driven, not sentiment-driven.',
        dek:
          'Why geopolitical noise rarely moves the real agenda — and what ' +
          'actually drives appreciation in this market.',
        link: '#', // TODO
        tag: 'Market thesis',
      },
      {
        title: 'The exit window matters more than the entry price.',
        dek:
          'Most investors over-index on the purchase. The 2029–2030 ' +
          'window is where the decision is really made.',
        link: '#', // TODO
        tag: 'Strategy',
      },
      {
        title: 'An uncomfortable moment inside the right position.',
        dek:
          'How to tell the difference between a bad investment and a ' +
          'good one going through a quiet stretch.',
        link: '#', // TODO
        tag: 'Investor psychology',
      },
    ],
  },

  // ── Testimonials (placeholder — swap in real ones) ──────────────────────
  testimonials: {
    heading: 'In their words',
    // TODO: replace with real client testimonials when collected.
    items: [
      {
        quote:
          'Add a real client testimonial here — one or two sentences on the ' +
          'result and what working with you felt like.',
        author: 'Client name, location',
      },
      {
        quote:
          'A second testimonial. Specific beats glowing — a number, a ' +
          'timeframe, a concrete outcome lands harder than praise.',
        author: 'Client name, location',
      },
    ],
  },

  // ── Ask AI about me ─────────────────────────────────────────────────────
  // Buttons open ChatGPT / Claude / Perplexity in a new tab with this prompt
  // pre-filled. The prompt includes a factual brief so the AI summarises
  // accurately instead of guessing. Edit the brief here if your details change.
  askAI: {
    heading: 'Ask AI about me',
    sub: "Prefer to hear it from a chatbot? Pick one — it opens with a question about me, ready to send.",
    prompt:
      'Tell me about Samuel Sindell. Context: he is a licensed investment ' +
      'adviser and the Founder & Managing Director of Richmond Capital ' +
      'Advisory, based in Dubai. He works with a small number of ' +
      'high-net-worth investors buying property in Dubai — helping them choose ' +
      'the right property, structure it efficiently (including company ' +
      'formations and tax mitigation), and hold it over time, acting as one ' +
      'adviser from the first conversation through completion and beyond. ' +
      'Background: he grew up with little, was Head of Sales at a FinTech ' +
      'company, then worked in renewable energy, before moving into property ' +
      'advisory. He has transacted over AED 250 million in property. To get in ' +
      'touch: email hello@richmondcapitaladvisory.com, connect on LinkedIn ' +
      '(https://www.linkedin.com/in/samuel-sindell/), or visit ' +
      'https://www.richmondcapitaladvisory.com. Based on this, summarise who ' +
      'he is, what he does, and how to get in touch.',
    providers: [
      { name: 'ChatGPT', base: 'https://chatgpt.com/?q=' },
      { name: 'Claude', base: 'https://claude.ai/new?q=' },
      { name: 'Perplexity', base: 'https://www.perplexity.ai/search?q=' },
    ],
  },

  // ── Footer / final close ────────────────────────────────────────────────
  close: {
    heading: "Let's talk.",
    body:
      'If you are thinking about Dubai, start with a conversation. No pressure ' +
      'and no pitch — just an honest view of whether I can help, and whether ' +
      'we are a good fit.',
  },
};
