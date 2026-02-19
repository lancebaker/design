// Living Bodygraph - Q&A Data
// 40+ questions personalized for Lance Baker
// Each question has: tags (for search), page (for context), links (related pages)

const QA_DATA = [

  // ─── ENERGY & MOTIVATION ───────────────────────────────────────────────────
  {
    id: 1,
    q: "Why do I lose motivation so quickly?",
    a: `You're not losing motivation — you never had access to the kind most people mean when they say that word. Your undefined Heart means you don't have consistent willpower. You have a Sacral engine instead: a binary switch that's either fully ON or completely OFF.\n\nWhen you burn out, it's not because you "gave up." It's because you were running on willpower (which you don't have) instead of Sacral alignment (which you do). The projects that consumed you for 10 hours straight at 2am? That's your actual energy working correctly. That's what alignment feels like.\n\nStop trying to sustain willpower. Start only doing things your Sacral says YES to.`,
    tags: ["motivation", "energy", "willpower", "burnout", "discipline", "lazy", "heart"],
    page: ["center-heart.html", "center-sacral.html"],
    links: [
      { label: "Heart Center — Why You Don't Have Willpower", href: "center-heart.html" },
      { label: "Sacral Engine — Your Actual Power Source", href: "center-sacral.html" }
    ]
  },
  {
    id: 2,
    q: "Why do I crash after intense productive periods?",
    a: `Your Sacral is a binary switch, not a dimmer. When it's ON, you have superhuman stamina. When it's done, it's DONE — immediately, completely, without warning.\n\nThe crash isn't a failure of character. It's your body enforcing a boundary your mind won't. Your undefined Heart means you have no access to "push through" energy. The crash is your design forcing rest so you don't destroy yourself on misaligned projects.\n\nThe reframe: That crash is protective. It's your Sacral saying "that chapter is complete." Honor it instead of fighting it.`,
    tags: ["crash", "burnout", "energy", "sacral", "rest", "productivity", "cycle"],
    page: ["center-sacral.html", "center-root.html"],
    links: [
      { label: "Sacral Engine — The Binary Switch", href: "center-sacral.html" },
      { label: "Root Center — Pressure & Cycles", href: "center-root.html" }
    ]
  },
  {
    id: 3,
    q: "Why can't I 'just push through' like everyone else?",
    a: `Because you're not designed to. Defined Heart people (roughly 1 in 3) genuinely can push through on willpower. You have an undefined Heart, which means you experience other people's willpower amplified — you FEEL the possibility of "just doing it" — but it's not consistently yours to keep.\n\nThis isn't weakness. This is your blueprint. Pushing through anyway leads to burnout every time. The people who "just push through" have a different energetic architecture than you do. You'd might as well blame yourself for not having a different blood type.`,
    tags: ["push through", "discipline", "willpower", "comparison", "heart", "weak", "lazy"],
    page: ["center-heart.html"],
    links: [
      { label: "Heart Center — Undefined Willpower Explained", href: "center-heart.html" }
    ]
  },
  {
    id: 4,
    q: "I feel exhausted even when I haven't done much. Why?",
    a: `Two likely causes working together:\n\n1. You've been doing Sacral-NO things. Even low-effort misaligned work drains you disproportionately — you're burning fuel in the wrong engine.\n\n2. Root Center pressure. Your defined Root is always generating a low-level urgency to "get things done." If you're not in flow, that pressure has nowhere to go and becomes a constant background drain.\n\nThe fix isn't to do less. It's to audit what you're doing. If it's not a full-body YES, it's costing you more than it looks.`,
    tags: ["exhausted", "tired", "drained", "low energy", "rest", "root", "sacral"],
    page: ["center-root.html", "center-sacral.html"],
    links: [
      { label: "Root Center — Pressure Without Purpose", href: "center-root.html" },
      { label: "Sacral Engine — Aligned vs Misaligned Energy", href: "center-sacral.html" }
    ]
  },

  // ─── COMMITMENT & FOLLOW-THROUGH ──────────────────────────────────────────
  {
    id: 5,
    q: "Why do I commit to things and then abandon them?",
    a: `Gate 26 (your only Heart gate) moves in waves. When it's ON, you feel genuinely capable and driven — so you commit. When it's OFF, that energy vanishes, but the commitment remains. Then you either force yourself (burnout) or abandon it (shame spiral).\n\nThe real issue: you're committing when Gate 26 is flowing, but not checking your Sacral. Sacral-YES commitments sustain themselves even when Gate 26 goes offline. Willpower-based commitments collapse the moment that wave passes.\n\nBefore committing to anything, pause the Gate 26 "I can do this" feeling and ask your gut: uh-huh, or uh-uh?`,
    tags: ["commitment", "abandon", "quit", "follow through", "consistency", "gate 26", "heart"],
    page: ["center-heart.html", "center-sacral.html"],
    links: [
      { label: "Heart Center — Gate 26 & The Commitment Trap", href: "center-heart.html" },
      { label: "Sacral Engine — How to Make Sustainable Commitments", href: "center-sacral.html" }
    ]
  },
  {
    id: 6,
    q: "Why do I start things with huge energy but can't finish them?",
    a: `Your 3 line learns through starting, experimenting, and sometimes "failing" — that's not a character flaw, that's literally your profile doing its job. But combine that with an undefined Heart and Sacral-driven energy, and you get this pattern: massive start energy (Sacral YES + 3 line enthusiasm), then a collapse the moment the project asks for sustained willpower you don't have.\n\nThe fix is to distinguish between "I'm done with this" (Sacral moved on — valid) and "I got scared" (conditioning — not valid). Your 3 line is supposed to experiment. Some things are complete even if they look unfinished from the outside.`,
    tags: ["finish", "complete", "start", "abandon", "projects", "3 line", "sacral", "follow through"],
    page: ["center-sacral.html", "center-heart.html"],
    links: [
      { label: "Sacral Engine — When to Start and When to Stop", href: "center-sacral.html" },
      { label: "Heart Center — Why Finishing Feels Impossible", href: "center-heart.html" }
    ]
  },
  {
    id: 7,
    q: "Why do I say yes to things and immediately regret it?",
    a: `This is a classic Manifesting Generator trap. Your Sacral needs to RESPOND to something — it needs a concrete stimulus in the moment. But when someone asks "would you want to do X?" in the abstract, your Head and Heart answer instead of your gut, and they're both unreliable for this.\n\nYour Heart (Gate 26) says "yes" when the energy wave is up. Your Head says "yes" this sounds like a good idea. But your Sacral doesn't get consulted.\n\nPractice: when asked something, buy time. "Let me sit with that." Then notice if your body says uh-huh (genuine excitement) or uh-uh (dread, flatness, contraction).`,
    tags: ["regret", "yes", "overpromise", "commitment", "sacral", "response", "MG"],
    page: ["center-sacral.html", "center-heart.html"],
    links: [
      { label: "Sacral Engine — How to Use Your Response Strategy", href: "center-sacral.html" }
    ]
  },

  // ─── COMMUNICATION & BEING MISUNDERSTOOD ──────────────────────────────────
  {
    id: 8,
    q: "Why do people misunderstand me even when I explain clearly?",
    a: `You're not being misunderstood — you're being early. Channel 43-23 (Ajna to Throat) gives you the ability to download breakthrough insights that most people haven't caught up to yet. Your job isn't to explain better. It's to wait for the right moment.\n\nAs an MG your strategy is to RESPOND, not initiate. When you share an insight before someone asks, it almost always lands wrong. When you wait to be invited ("what do you think?", "can you explain that?"), the same insight lands with power.\n\nYou're a genius at communication when the timing is right. The timing is the whole game.`,
    tags: ["misunderstood", "communication", "explain", "clarity", "channel 43-23", "timing", "throat"],
    page: ["center-ajna.html", "center-throat.html", "channel-43-23.html"],
    links: [
      { label: "Channel 43-23 — Your Breakthrough Communication", href: "channel-43-23.html" },
      { label: "Throat Center — Speaking vs Being Heard", href: "center-throat.html" }
    ]
  },
  {
    id: 9,
    q: "Why do I talk too much and over-explain?",
    a: `Channel 43-23 downloads insights fast. When the insight arrives, your INFP Fi (deep inner knowing) says "this is TRUE" — so you assume others will get it if you just explain it clearly enough. But they're not ready yet.\n\nSo you add more context. More metaphors. More detail. The more you explain, the more confused they get, because you're pushing an insight before they have the foundation to receive it.\n\nThe hard truth: explaining more rarely helps. What helps is waiting for the right opening. An invitation creates the container for your insight to land.`,
    tags: ["over explain", "talk too much", "rambling", "communication", "channel 43-23", "throat", "INFP"],
    page: ["channel-43-23.html", "center-throat.html"],
    links: [
      { label: "Channel 43-23 — Why More Explanation Doesn't Help", href: "channel-43-23.html" }
    ]
  },
  {
    id: 10,
    q: "Why do I struggle to speak up in groups?",
    a: `Your defined Throat connects directly to your Ajna (43-23 channel) — you have a consistent voice for your insights. But your MG strategy (respond, don't initiate) means group settings are tricky. You're waiting to be asked, but groups often don't invite individual voices.\n\nAlso, your 5w4 makes you cautious about speaking without full knowledge. You wait until you're "sure." But by then the conversation has moved on.\n\nThe reframe: practice small, low-stakes responses in groups. You don't need to wait for a direct invitation — you can respond to what others say. That counts as response strategy.`,
    tags: ["groups", "speak up", "quiet", "introverted", "throat", "social", "5w4"],
    page: ["center-throat.html", "center-ajna.html"],
    links: [
      { label: "Throat Center — When & How You're Meant to Speak", href: "center-throat.html" }
    ]
  },

  // ─── EMOTIONS & OVERWHELM ─────────────────────────────────────────────────
  {
    id: 11,
    q: "Why am I so emotionally reactive in certain environments?",
    a: `Your Solar Plexus is undefined — which means you absorb and amplify other people's emotional energy. In emotionally charged environments, you're not just feeling your own feelings. You're feeling everyone else's, turned up.\n\nThis is called emotional conditioning. The people around you may not even notice the emotional charge — but you feel it like a broadcast you can't turn off.\n\nPractice: when you feel a strong emotion, ask "is this mine?" If it's hard to trace to a specific cause in your life, it's probably environmental. This doesn't mean the feeling isn't real — it means you can step out of the field to find your own emotional truth.`,
    tags: ["emotional", "reactive", "overwhelm", "sensitive", "solar plexus", "undefined", "feelings"],
    page: ["center-solar.html"],
    links: [
      { label: "Solar Plexus — Absorbing Others' Emotions", href: "center-solar.html" }
    ]
  },
  {
    id: 12,
    q: "Why do I make decisions I regret when I'm emotionally charged?",
    a: `Your undefined Solar Plexus amplifies whatever emotional energy is in your environment. When you're in an emotionally charged moment, you feel the emotion intensely — and your nervous system interprets it as urgent.\n\nBut that emotion isn't yours. It's amplified from the people around you. The urgency is borrowed, not genuine.\n\nYour best decisions come from emotional neutrality: after the charged moment has passed, when you can feel your own Sacral without the emotional noise. "Sleep on it" is genuine strategy for you, not procrastination.`,
    tags: ["decisions", "regret", "emotional", "impulsive", "solar plexus", "reactive"],
    page: ["center-solar.html"],
    links: [
      { label: "Solar Plexus — Why You Need Emotional Space to Decide", href: "center-solar.html" }
    ]
  },
  {
    id: 13,
    q: "Why do I feel things so deeply when others seem unaffected?",
    a: `You're picking up what others don't even register. Your undefined Solar Plexus is a sensitivity amplifier — you receive and intensify emotional frequencies that defined Solar Plexus people filter naturally.\n\nCombine that with INFP Fi (deep inner values processing) and 5w4 (intense inner world), and you're experiencing emotional reality on multiple levels simultaneously. The people who seem "unaffected" aren't necessarily more stable — they're just less permeable.\n\nYour depth of feeling isn't a weakness. It's data. The challenge is learning which feelings are yours and which are the room's.`,
    tags: ["sensitive", "deep feelings", "intense", "emotions", "solar plexus", "INFP", "empathy"],
    page: ["center-solar.html"],
    links: [
      { label: "Solar Plexus — Emotional Depth & Sensitivity", href: "center-solar.html" }
    ]
  },

  // ─── SELF-DOUBT & COMPARISON ──────────────────────────────────────────────
  {
    id: 14,
    q: "Why do I constantly compare myself to others?",
    a: `Your undefined Heart amplifies other people's sense of worth and self-esteem. When you're around confident, driven, "have it together" people, you don't just observe their confidence — you FEEL it, amplified, and then you compare it to yourself.\n\nThis creates a loop: you feel their confidence (amplified), measure yourself against it, find yourself lacking, feel shame, and try to perform confidence you don't feel.\n\nThe exit: that amplified confidence isn't yours to keep, and you don't need to compete with it. Your sense of worth doesn't come from willpower metrics. It comes from Sacral alignment — doing what your gut says yes to.`,
    tags: ["comparison", "self-doubt", "confidence", "worth", "shame", "heart", "undefined"],
    page: ["center-heart.html", "center-identity.html"],
    links: [
      { label: "Heart Center — The Comparison Trap", href: "center-heart.html" },
      { label: "G-Center — Your Authentic Identity", href: "center-identity.html" }
    ]
  },
  {
    id: 15,
    q: "Why do I feel like an imposter even when I clearly know something?",
    a: `Your 5 line means people project mastery onto you before you feel it yourself. They see you as "the expert" when you're still experimenting. This creates a gap between how you're perceived and how you feel internally.\n\nYour 5w4 Investigator amplifies this: you know how much you don't know. You can always see the depth of the subject beyond where you currently are. So you feel inadequate while people call you an expert.\n\nThe truth: Channel 43-23 gives you genuine breakthrough thinking. Your insights aren't imposter thoughts — they're ahead of the room. The "imposter" feeling is often just the gap between your Line 5 projection and your Line 3 experimental reality. Both are real. Both are you.`,
    tags: ["imposter", "fraud", "confidence", "5 line", "5w4", "expert", "knowledge", "self-doubt"],
    page: ["center-ajna.html", "channel-43-23.html"],
    links: [
      { label: "Channel 43-23 — Why You Feel Like an Imposter", href: "channel-43-23.html" },
      { label: "Ajna Center — Your Knowing & Its Limits", href: "center-ajna.html" }
    ]
  },
  {
    id: 16,
    q: "Why do I feel like I'm not living up to my potential?",
    a: `Two forces are creating this feeling:\n\n1. Your 5 line: people project potential onto you constantly. You feel the weight of unlived projections — theirs and yours.\n\n2. Your undefined Head is bombarding you with questions about whether you're doing the right thing, thinking the right thoughts, growing enough. This is mental pressure that's mostly not yours — it's absorbed from teachers, systems, and other people's definitions of "potential."\n\nYour potential isn't a destination you haven't reached yet. It's your Sacral alignment in this moment. When you're fully in flow on a YES project, you're at your potential. It's not somewhere ahead of you.`,
    tags: ["potential", "purpose", "meaning", "falling behind", "5 line", "head", "pressure"],
    page: ["center-head.html", "center-identity.html"],
    links: [
      { label: "Head Center — Mental Pressure That Isn't Yours", href: "center-head.html" },
      { label: "G-Center — Purpose & Direction", href: "center-identity.html" }
    ]
  },

  // ─── WORK & CAREER ────────────────────────────────────────────────────────
  {
    id: 17,
    q: "Why can't I figure out what I'm supposed to do with my life?",
    a: `Because you're asking the question from your mind, and your mind can't answer it. Your Head center is undefined — it's full of questions, but they're mostly borrowed from the outside world. "What should I do?" is a Head question.\n\nYour actual navigation system is your Sacral (uh-huh/uh-uh) combined with your G-Center (which gives you a felt sense of direction when you're moving). You're not meant to figure out a destination and then move toward it. You're meant to move toward what feels like YES, and the direction reveals itself.\n\nThe Sphinx Cross (13/7/1/2) also means you're meant to listen deeply to others (Gate 13) and lead through presence (Gate 7), not through a pre-planned career path.`,
    tags: ["purpose", "career", "direction", "life purpose", "confused", "what to do", "G center"],
    page: ["center-identity.html", "center-head.html", "center-sacral.html"],
    links: [
      { label: "G-Center — Your Direction & Life Purpose", href: "center-identity.html" },
      { label: "Sacral Engine — Following Gut Over Plan", href: "center-sacral.html" }
    ]
  },
  {
    id: 18,
    q: "Why do I get bored of jobs and projects so fast?",
    a: `You're a Manifesting Generator. MGs are designed to move through multiple phases, skills, and interests — you're a multi-passionate being with a Sacral engine that operates on genuine pull, not obligation.\n\nBoredom is your Sacral saying the YES has expired. It's not flakiness. The 3 line in your profile is designed to experiment until something doesn't work, then move on — that's called "trial and error" and it's your actual learning style.\n\nThe question isn't "how do I stop getting bored?" It's "what is my Sacral saying YES to RIGHT NOW?" That's your next move.`,
    tags: ["bored", "boredom", "job", "career", "quit", "MG", "multi-passionate", "3 line"],
    page: ["center-sacral.html"],
    links: [
      { label: "Sacral Engine — Why You Move On (And Why That's Right)", href: "center-sacral.html" }
    ]
  },
  {
    id: 19,
    q: "Why do I work great alone but struggle in teams?",
    a: `Your Ajna and Throat are defined and connected — you have your own consistent internal processing and your own voice. When you're alone, these work beautifully together. In groups, you're suddenly navigating other people's mental energy, emotional fields, and communication styles.\n\nYour undefined Solar Plexus absorbs team emotional dynamics. Your undefined Head absorbs group mental pressure ("we should be thinking about this"). Your strategy (respond, not initiate) is hard to execute in group settings that favor whoever speaks first.\n\nYou're not bad at teams. You need teams that invite your contribution rather than expecting you to compete for airtime.`,
    tags: ["teams", "collaboration", "alone", "work", "group", "introverted", "solo"],
    page: ["center-ajna.html", "center-solar.html"],
    links: [
      { label: "Ajna Center — Your Independent Processing", href: "center-ajna.html" }
    ]
  },

  // ─── RELATIONSHIPS ─────────────────────────────────────────────────────────
  {
    id: 20,
    q: "Why do I feel drained after social interactions?",
    a: `You're undefined in three energy-absorbing centers: Head (mental energy), Heart (willpower/social pressure), and Solar Plexus (emotional field). In any social interaction, you're receiving and amplifying the energy from all three of those channels simultaneously.\n\nYou don't just hang out with people — you run a full energetic processing cycle for them. By the time you leave, you've felt their mental pressure, their emotional weather, and the social expectations around worth and performance. You need alone time not because you're antisocial — but because you need to discharge all that absorbed energy and return to yourself.\n\nThis is a biological need, not a personality flaw.`,
    tags: ["drained", "social", "introvert", "people", "alone time", "recharge", "HSP"],
    page: ["center-solar.html", "center-head.html", "center-heart.html"],
    links: [
      { label: "Solar Plexus — Absorbing Social Energy", href: "center-solar.html" },
      { label: "Head Center — Mental Pressure in Social Settings", href: "center-head.html" }
    ]
  },
  {
    id: 21,
    q: "Why do I have trouble maintaining relationships long-term?",
    a: `A few design factors intersect here:\n\n1. You're a Split Definition — your energy field has two separate circuits that only connect under specific conditions (or with specific people). Close relationships often work as "bridges" between your split — and that can create a complex dynamic of deep connection followed by overwhelm.\n\n2. Your 3 line learns through trial and error in relationships too. Some connections are "correct experiments" — you extract the wisdom and move on. This isn't failure. It's your design.\n\n3. Channel 28-38 (Struggle for Purpose) means you need relationships with genuine stakes. Superficial commitment drains you; deep, purposeful connection energizes you.`,
    tags: ["relationships", "connection", "commitment", "long term", "split definition", "3 line", "intimacy"],
    page: ["center-sacral.html", "channel-28-38.html"],
    links: [
      { label: "Channel 28-38 — Relationships With Real Stakes", href: "channel-28-38.html" }
    ]
  },
  {
    id: 22,
    q: "Why do people see me as more confident/capable than I feel?",
    a: `Your Line 5 projection field. People literally project their ideal of "the one who has it figured out" onto 5-line people. You walk into a room and people perceive capability, authority, and answers — regardless of how you actually feel.\n\nThis is amplified by your defined Throat (you sound clear and sure when you speak) and your Ajna channel (you think in structured, downloadable insight). You look put-together from the outside even when you're mid-experiment on the inside.\n\nThis isn't imposter syndrome. It's the Line 5 experience. You lead from slightly ahead, not from having arrived.`,
    tags: ["confident", "perception", "capable", "5 line", "imposter", "projection", "seen"],
    page: ["center-throat.html"],
    links: [
      { label: "Throat Center — How You're Perceived vs How You Feel", href: "center-throat.html" }
    ]
  },

  // ─── CREATIVE BLOCKS ──────────────────────────────────────────────────────
  {
    id: 23,
    q: "Why do I get creative inspiration and then lose it?",
    a: `Gate 43 downloads insights — they ARRIVE, they don't wait. When the download comes, your ADHD hyperfocus can consume you for hours. When it leaves, it leaves completely.\n\nThe pattern: brilliant inspiration → you try to plan it properly before creating → the inspiration vanishes before you start → you blame yourself for "losing it."\n\nChannel 43-23 says: create IMMEDIATELY when the download arrives. Don't plan. Don't organize. Don't wait until you have time. Open a file, pick up an instrument, start talking into your phone. The insight will structure itself through the act of creation, not before it.`,
    tags: ["creative", "inspiration", "ideas", "blocks", "create", "music", "lost", "flow"],
    page: ["channel-43-23.html", "center-ajna.html"],
    links: [
      { label: "Channel 43-23 — Creating When Inspiration Hits", href: "channel-43-23.html" }
    ]
  },
  {
    id: 24,
    q: "Why do I overthink everything before starting?",
    a: `Your Head center is undefined and under constant mental pressure — questions arrive like a flood ("Is this the right project? Have I thought this through enough? What if it fails?"). You can't think your way to certainty because the pressure is borrowed from the outside, not generated by genuine internal questions.\n\nYour 5w4 Investigator wants full mastery before exposure. Your INFP needs it to feel authentic before sharing.\n\nThe exit: your Sacral doesn't overthink. It just says uh-huh or uh-uh. When your head is spinning, drop the question down into your body. Does it feel open (yes) or contracted (no)? That's your real answer.`,
    tags: ["overthink", "analysis paralysis", "starting", "procrastinate", "head", "planning", "ADHD", "5w4"],
    page: ["center-head.html", "center-ajna.html"],
    links: [
      { label: "Head Center — Overthinking & Mental Pressure", href: "center-head.html" },
      { label: "Ajna Center — Processing Without Paralysis", href: "center-ajna.html" }
    ]
  },
  {
    id: 25,
    q: "Why do I work best in sudden bursts rather than steady output?",
    a: `Because that's literally how your energy works. Your Sacral is a binary system: fully on or fully off. Gate 5 in your Sacral operates on fixed rhythms — natural cycles of intense engagement and genuine rest. Gate 14 gives you resource mastery, but only in bursts of real commitment.\n\nSteady output is a Willpower model. You're a Sacral being. Your "burst" mode IS your steady state — you're just operating in your natural rhythm instead of someone else's. The people who produce steady output often produce less total output. Your bursts may be more potent than anyone's slow-and-steady.`,
    tags: ["bursts", "inconsistent", "flow", "rhythm", "sacral", "ADHD", "hyperfocus", "creative"],
    page: ["center-sacral.html"],
    links: [
      { label: "Sacral Engine — Your Natural Rhythm", href: "center-sacral.html" }
    ]
  },

  // ─── MENTAL HEALTH & ADHD ─────────────────────────────────────────────────
  {
    id: 26,
    q: "How does my ADHD relate to my Human Design?",
    a: `Your ADHD hyperfocus maps almost perfectly onto Gate 43 (breakthrough insights that consume your attention completely) and your Sacral's binary nature (when the YES hits, it's ALL IN). What neurotypical systems call "difficulty with sustained attention" is your Sacral telling you it's not a YES.\n\nADHD executive dysfunction often shows up as inability to do Sacral-NO tasks regardless of importance or consequences. This isn't laziness or disorder — it's your Sacral refusing misalignment at the nervous system level.\n\nYour Sacral-YES tasks? Hyperfocus arrives automatically. No effort required. That's your actual baseline. The "dysfunction" is what happens when others try to route you through willpower you don't have.`,
    tags: ["ADHD", "focus", "hyperfocus", "executive function", "neurodivergent", "attention", "sacral", "gate 43"],
    page: ["center-sacral.html", "center-ajna.html"],
    links: [
      { label: "Sacral Engine — ADHD as Sacral Alignment Signal", href: "center-sacral.html" },
      { label: "Channel 43-23 — Hyperfocus & Insight Downloads", href: "channel-43-23.html" }
    ]
  },
  {
    id: 27,
    q: "Why do I spiral into research rabbit holes and lose hours?",
    a: `Gate 43 + 5w4 Investigator + ADHD hyperfocus = the most potent rabbit hole architecture in existence. Gate 43 sends a download ("this matters"). Your 5w4 says "I must understand this fully before I can do anything with it." ADHD hyperfocus engages. Hours gone.\n\nThe question is whether it's a Sacral YES rabbit hole (valid — you're processing a genuine insight) or a Sacral NO anxiety hole (your Head avoiding something it doesn't want to face).\n\nSacral YES rabbit holes leave you feeling energized and full of ideas afterward. Sacral NO holes leave you depleted and slightly ashamed. You can tell the difference if you check in honestly.`,
    tags: ["rabbit hole", "research", "distracted", "procrastinate", "5w4", "ADHD", "gate 43", "hyperfocus"],
    page: ["center-head.html", "center-ajna.html"],
    links: [
      { label: "Head Center — When Research Becomes Avoidance", href: "center-head.html" }
    ]
  },

  // ─── DECISION-MAKING ──────────────────────────────────────────────────────
  {
    id: 28,
    q: "How do I know if something is actually right for me?",
    a: `Your primary decision-making authority is your Sacral — but it works specifically for yes/no questions about concrete things, not abstract future planning.\n\nThe way it works: ask a yes/no question about something specific and immediate. Notice the response in your body before your mind engages. An "uh-huh" feels like an open, warm sensation — a pull toward. An "uh-uh" feels like a contraction, flatness, or slight dread.\n\nImportant: your Sacral responds to what's in front of you RIGHT NOW. It can't evaluate future scenarios ("will this career be right for me in 5 years?"). Ask about the immediate next step, not the destination.`,
    tags: ["decision", "right choice", "sacral", "authority", "intuition", "gut", "clarity"],
    page: ["center-sacral.html"],
    links: [
      { label: "Sacral Engine — Your Decision-Making Authority", href: "center-sacral.html" }
    ]
  },
  {
    id: 29,
    q: "Why do I second-guess myself constantly?",
    a: `Your undefined Head generates endless questions that feel urgent but mostly aren't yours. "But what if...? Have I thought this through? Am I sure? What if I'm wrong?" These questions have no answer because they're not real questions — they're the hum of borrowed mental pressure.\n\nYour defined Ajna (Channel 43-23) actually gives you a stable, reliable knowing. You DO know things. But the Head noise can drown it out.\n\nPractice: when you're second-guessing, identify whether it's a Sacral-level question (gut/body) or a Head-level question (mental spinning). If your gut said YES before the mental debate started, your gut is right.`,
    tags: ["second guess", "doubt", "uncertainty", "overthink", "head", "ajna", "trust"],
    page: ["center-head.html", "center-ajna.html"],
    links: [
      { label: "Head Center — The Pressure to Have Answers", href: "center-head.html" },
      { label: "Ajna Center — Your Stable Knowing", href: "center-ajna.html" }
    ]
  },

  // ─── PURPOSE & MEANING ────────────────────────────────────────────────────
  {
    id: 30,
    q: "What is my actual purpose in this life?",
    a: `Your Sphinx Cross (13/7/1/2) gives a clear signature:\n\n— Gate 13 (Listener): You're meant to hold space for others' stories and secrets. People tell you things they tell no one else. This is sacred work.\n— Gate 7 (Role of the Self): You're meant to lead through example and presence, not through authority or rank.\n— Gate 1 (Self-Expression): Creative self-expression is central to your purpose — not optional, not a side project.\n— Gate 2 (Receptive): You receive direction from something larger than your plans. When you're quiet, you know where to go.\n\nYour purpose isn't a job title. It's a way of being: listening deeply, expressing authentically, leading through presence.`,
    tags: ["purpose", "meaning", "life purpose", "sphinx cross", "gate 13", "gate 7", "direction"],
    page: ["center-identity.html"],
    links: [
      { label: "G-Center — Your Life Purpose & Direction", href: "center-identity.html" }
    ]
  },
  {
    id: 31,
    q: "Why does meaning feel so important to me but so hard to find?",
    a: `Channel 28-38 (Struggle for Purpose) is one of your defined channels. This channel is literally designed to search for and wrestle with meaning. The struggle isn't a sign something is wrong — it's how this energy generates its power.\n\nYour 5w4 doubles this: the Investigator needs to understand why before it can commit. The 4 wing needs the work to feel authentic and significant, not just useful.\n\nMeaning, for you, doesn't arrive as a revelation. It emerges through engagement with what matters and fighting for it. The struggle IS the meaning. You're not supposed to have this figured out. You're supposed to be in the search.`,
    tags: ["meaning", "purpose", "existential", "why", "channel 28-38", "5w4", "significance"],
    page: ["channel-28-38.html", "center-identity.html"],
    links: [
      { label: "Channel 28-38 — The Gift of Purposeful Struggle", href: "channel-28-38.html" },
      { label: "G-Center — Finding Your Direction", href: "center-identity.html" }
    ]
  },
  {
    id: 32,
    q: "Why do I feel like I'm playing a role rather than living my real life?",
    a: `The 5 line in your profile creates a projection field that's always "on." People see a version of you — the Heretic, the Practical Visionary — and respond to that projection. Over time, you may start performing the projection rather than being yourself.\n\nYour INFP Fi (deep inner authenticity drive) rebels against this hard. Fi knows when you're being real and when you're performing. When you're performing, everything feels hollow.\n\nThe integration: your 5 doesn't require you to be the projection. It requires you to lead from genuine commitment. When you're fully in your Sacral YES, the projection aligns with reality and the hollowness disappears.`,
    tags: ["authentic", "real", "role", "performing", "mask", "5 line", "INFP", "Fi", "hollow"],
    page: ["center-identity.html"],
    links: [
      { label: "G-Center — Authenticity vs Performance", href: "center-identity.html" }
    ]
  },

  // ─── SPECIFIC PATTERNS ────────────────────────────────────────────────────
  {
    id: 33,
    q: "Why do I need to understand how things work before I can do them?",
    a: `Gate 43 downloads frameworks and systems — it's not just insight, it's structural understanding. Your 5w4 Investigator needs to map the territory before moving. And your defined Ajna processes through building mental models.\n\nThis isn't avoidance (usually). It's your actual way of working. You genuinely think better and move faster once you have a framework.\n\nThe trap is using "I need to understand it first" as a way to never start. Channel 43-23 says the deepest understanding arrives through doing, not planning. The framework becomes clear as you create, not before.`,
    tags: ["understand", "research", "how things work", "learn first", "5w4", "gate 43", "systems"],
    page: ["center-ajna.html", "channel-43-23.html"],
    links: [
      { label: "Ajna Center — How Your Mind Actually Works", href: "center-ajna.html" }
    ]
  },
  {
    id: 34,
    q: "Why do I feel pressure to always be productive?",
    a: `Three sources are stacking:\n\n1. Your defined Root center generates physical urgency — a low-level pressure to be in motion. This is constant and built-in.\n\n2. Your undefined Head absorbs cultural and social pressure around productivity, achievement, and worth.\n\n3. Your undefined Heart picks up others' drive and ambition and feels it as pressure to perform.\n\nNone of this means you should be constantly productive. Your Sacral knows when work is right. The pressure itself is not guidance — it's static. Ask your gut, not your urgency.`,
    tags: ["productive", "pressure", "busy", "rest", "guilt", "root", "head", "heart", "hustle"],
    page: ["center-root.html", "center-head.html"],
    links: [
      { label: "Root Center — Pressure vs Real Drive", href: "center-root.html" },
      { label: "Head Center — Borrowed Mental Pressure", href: "center-head.html" }
    ]
  },
  {
    id: 35,
    q: "Why am I so good at seeing what others need but not asking for what I need?",
    a: `Gate 13 (Listener) makes you a natural keeper of others' stories. Combined with your INFP empathy and 5w4's observer stance, you process others' needs as naturally as breathing.\n\nYour own needs get filtered through two problems: 1) Your undefined Heart means you don't naturally feel "worthy" of needs — you override your needs with others'. 2) Your INFP Fi keeps your deepest needs private until they feel safe to express.\n\nThe pattern: you give until depleted, then withdraw. Others feel blindsided. You feel unseen.\n\nYour design asks you to listen — but you're also meant to have others listen to you. The Listener needs witnesses too.`,
    tags: ["needs", "ask for help", "give", "listen", "gate 13", "INFP", "boundaries", "unseen"],
    page: ["center-identity.html", "center-heart.html"],
    links: [
      { label: "G-Center — Gate 13, The Listener", href: "center-identity.html" }
    ]
  },
  {
    id: 36,
    q: "Why do I fight for things long after I should have let them go?",
    a: `Channel 28-38 is the channel of the Fighter — specifically, the one who struggles for what matters even when it's not easy. Gate 38 generates resistance and fighting spirit. Gate 28 asks "but does it matter enough to fight for?"\n\nWhen Gate 38 is engaged but Gate 28's purpose test isn't clear, you fight anyway. It's the channel doing its thing without the anchor of meaning.\n\nThe integration: before you fight, ask Gate 28's question — "Is this worth my life force?" If yes, your Channel 28-38 makes you unstoppable. If no, letting go is the correct move, not weakness.`,
    tags: ["letting go", "fight", "stubborn", "persist", "channel 28-38", "resistance", "struggle"],
    page: ["channel-28-38.html"],
    links: [
      { label: "Channel 28-38 — When to Fight, When to Release", href: "channel-28-38.html" }
    ]
  },
  {
    id: 37,
    q: "Why do I have so many interests and can't pick just one?",
    a: `Manifesting Generators are designed this way. You're not meant to be a specialist who picks one lane. Your Sacral draws you toward multiple streams because you have multiple channels of energy available.\n\nGates 34 (Power), 14 (Possession of Power), and 5 (Fixed Rhythms) give you the capacity to engage deeply across multiple domains — but sequentially or in parallel, not all at once forever.\n\nThe cultural expectation that you should "pick one thing" is built for Single Definition Generators and Projectors. As an MG, your multiple interests ARE your design. The pattern: engage deeply, extract wisdom, move when your Sacral says it's complete.`,
    tags: ["many interests", "multi-passionate", "distracted", "focus", "MG", "choose", "purpose"],
    page: ["center-sacral.html"],
    links: [
      { label: "Sacral Engine — Why MGs Have Multiple Passions", href: "center-sacral.html" }
    ]
  },
  {
    id: 38,
    q: "Why do I feel like I'm always supposed to have the answers?",
    a: `Your Line 5 projection field. The 5 line is the Heretic — the one people look to for practical solutions when they're in crisis. You get called on for answers even when you haven't offered to give them.\n\nCombined with your Channel 43-23 (genuine insight downloads) and defined Throat (clear, certain-sounding voice), people experience you as having answers. So you start performing "having answers" even when you're actually mid-process.\n\nYou're allowed to not know. Line 5 doesn't mean infallible. It means: when you DO have a Sacral-YES insight, share it. When you don't, "I'm still working through this" is a complete and honest answer.`,
    tags: ["answers", "know it all", "expert", "pressure", "5 line", "expectation", "performance"],
    page: ["center-throat.html"],
    links: [
      { label: "Throat Center — The Weight of the 5 Line Voice", href: "center-throat.html" }
    ]
  },
  {
    id: 39,
    q: "Why do I thrive in crisis but struggle with routine?",
    a: `Channel 28-38 activates fully in high-stakes situations. The Fighter needs something worth fighting for. Routine has no opponent, no stakes, no meaning to fight toward — so Channel 28-38's energy has nowhere to go.\n\nYour Root center generates urgency, which crisis provides naturally. Routine removes urgency, so your Root's energy becomes restlessness and irritability instead.\n\nAlso: your Sacral loves novelty. Gate 5 needs rhythms, but real rhythms — meaningful cycles, not arbitrary schedules. The fix isn't to add more routine. It's to make your existing commitments feel like they matter.`,
    tags: ["crisis", "routine", "bored", "thrive", "channel 28-38", "root", "stakes", "urgency"],
    page: ["center-root.html", "channel-28-38.html"],
    links: [
      { label: "Channel 28-38 — Needing Stakes to Function", href: "channel-28-38.html" },
      { label: "Root Center — Urgency & Pressure", href: "center-root.html" }
    ]
  },
  {
    id: 40,
    q: "Why do I feel split between who I am and who I think I should be?",
    a: `You have a Split Definition — two separate energy circuits in your chart that don't directly connect internally. This creates a lived sense of being two different people: the one who is, and the one who "should be."\n\nYour INFP Fi holds a fierce inner sense of "who I really am." Your 5w4 absorbs and responds to how others need you to be. Your undefined centers bring in others' definitions of correct behavior.\n\nThe gap between them is real — but it's not a failure. Your G-Center (defined) is your anchor. When you feel split, return to: what does my gut say YES to right now? That's always authentically you.`,
    tags: ["split", "should be", "authentic", "conflict", "inner conflict", "INFP", "identity", "split definition"],
    page: ["center-identity.html"],
    links: [
      { label: "G-Center — Your True Identity in Split Design", href: "center-identity.html" }
    ]
  },
  {
    id: 41,
    q: "Why do my survival instincts kick in at strange times?",
    a: `Your Spleen center is defined — it's the oldest intelligence in your chart, operating through instantaneous survival signals that bypass logic. It speaks once and then goes quiet. If you miss it, it doesn't repeat.\n\nCombined with Channel 28-38 (Struggle for Purpose), your Spleen signals sometimes manifest as a sudden "this doesn't feel safe" or "this isn't worth it" in situations that seem perfectly fine on the surface.\n\nThese signals are trustworthy — but they're easy to override with mental justification. The practice: when you feel that sudden Spleen signal, don't argue with it. It's your oldest, most reliable intelligence doing its job.`,
    tags: ["survival", "instinct", "fear", "spleen", "safety", "gut feeling", "anxiety"],
    page: ["center-spleen.html"],
    links: [
      { label: "Spleen Center — Your Survival Intelligence", href: "center-spleen.html" }
    ]
  },
  {
    id: 42,
    q: "Why do I get 'downloads' of ideas that feel urgent but I can't always act on them?",
    a: `Gate 43 downloads don't respect your schedule. They arrive when they arrive, often at 2am, mid-conversation, or during unrelated tasks.\n\nThe urgency is real — Gate 43 insights have a short half-life. If you don't capture them immediately, they often don't come back in the same form.\n\nBut your MG strategy (respond, not initiate) means acting on every download immediately isn't always right. The tool that bridges this: capture everything immediately (voice memo, notes app, anything), THEN check your Sacral about when and how to develop it. The insight is real; the timing of action is a separate question.`,
    tags: ["downloads", "ideas", "insight", "gate 43", "ADHD", "urgent", "inspiration", "timing"],
    page: ["channel-43-23.html", "center-ajna.html"],
    links: [
      { label: "Channel 43-23 — Working With Insight Downloads", href: "channel-43-23.html" }
    ]
  }

];
