// Living Bodygraph - Q&A Section Widget
// Auto-injects a Q&A section at the bottom of any page
// Requires qa-data.js to be loaded first

(function() {
  'use strict';

  // Detect which page we're on for context-aware sorting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Sort questions: current-page-relevant first, then everything else
  function getSortedQuestions(filterText) {
    let questions = QA_DATA;

    if (filterText && filterText.trim().length > 0) {
      const terms = filterText.toLowerCase().split(/\s+/).filter(Boolean);
      questions = QA_DATA.filter(q => {
        const searchable = (q.q + ' ' + q.a + ' ' + q.tags.join(' ')).toLowerCase();
        return terms.every(term => searchable.includes(term));
      });
    }

    return questions.slice().sort((a, b) => {
      const aRelevant = a.page.includes(currentPage) ? 0 : 1;
      const bRelevant = b.page.includes(currentPage) ? 0 : 1;
      return aRelevant - bRelevant;
    });
  }

  // Category groupings for the browse list
  const CATEGORIES = [
    { label: '⚡ Energy & Motivation',      tags: ['energy', 'motivation', 'willpower', 'burnout', 'sacral', 'crash', 'cycle'] },
    { label: '🔗 Commitment & Follow-Through', tags: ['commitment', 'finish', 'abandon', 'quit', 'follow through', 'consistency'] },
    { label: '💬 Communication',             tags: ['communication', 'misunderstood', 'explain', 'throat', 'timing', 'channel 43-23'] },
    { label: '🌊 Emotions & Overwhelm',      tags: ['emotional', 'reactive', 'sensitive', 'solar plexus', 'feelings', 'drained'] },
    { label: '🪞 Self-Doubt & Comparison',   tags: ['comparison', 'self-doubt', 'imposter', 'confidence', 'potential', 'fraud'] },
    { label: '🎯 Work & Career',             tags: ['career', 'purpose', 'job', 'direction', 'bored', 'solo', 'teams'] },
    { label: '🤝 Relationships',             tags: ['relationships', 'social', 'connection', 'intimacy', 'people'] },
    { label: '🎨 Creative & Ideas',          tags: ['creative', 'inspiration', 'ideas', 'gate 43', 'flow', 'blocks', 'downloads'] },
    { label: '🧠 Mind & ADHD',              tags: ['ADHD', 'overthink', 'research', 'rabbit hole', 'hyperfocus', 'decision'] },
    { label: '✨ Purpose & Meaning',         tags: ['purpose', 'meaning', 'authentic', 'life purpose', 'identity', 'split'] },
  ];

  function categoryForQuestion(q) {
    for (const cat of CATEGORIES) {
      if (cat.tags.some(t => q.tags.includes(t))) return cat.label;
    }
    return '✦ Other';
  }

  // Build the HTML for a single Q&A card
  function buildCard(q) {
    const linksHTML = q.links.map(l =>
      `<a href="${l.href}" class="qa-link">${l.label} →</a>`
    ).join('');

    const answerHTML = q.a
      .split('\n\n')
      .map(para => para.startsWith('—') || para.includes('\n—')
        ? `<p>${para.replace(/\n/g, '<br>')}</p>`
        : `<p>${para}</p>`)
      .join('');

    return `
      <div class="qa-card" data-id="${q.id}">
        <button class="qa-question" aria-expanded="false">
          <span class="qa-q-text">${q.q}</span>
          <span class="qa-arrow">▾</span>
        </button>
        <div class="qa-answer" hidden>
          <div class="qa-answer-body">${answerHTML}</div>
          ${q.links.length ? `<div class="qa-links">${linksHTML}</div>` : ''}
        </div>
      </div>`;
  }

  // Build grouped browse list
  function buildBrowseList(questions) {
    if (questions.length === 0) {
      return `<div class="qa-empty">No questions match that search. Try different keywords — or browse the categories below by clearing the search.</div>`;
    }

    // If search is active, show flat list
    const searchInput = document.getElementById('qa-search');
    if (searchInput && searchInput.value.trim().length > 0) {
      const pageFirst = questions.filter(q => q.page.includes(currentPage));
      const rest = questions.filter(q => !q.page.includes(currentPage));
      let html = '';
      if (pageFirst.length > 0) {
        html += `<div class="qa-category-label">★ Most Relevant to This Page</div>`;
        html += pageFirst.map(buildCard).join('');
      }
      if (rest.length > 0) {
        if (pageFirst.length > 0) html += `<div class="qa-category-label">Other Matches</div>`;
        html += rest.map(buildCard).join('');
      }
      return html;
    }

    // Grouped by category
    const grouped = {};
    for (const q of questions) {
      const cat = categoryForQuestion(q);
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(q);
    }

    // Page-relevant questions always on top
    const pageRelevant = questions.filter(q => q.page.includes(currentPage));
    let html = '';
    if (pageRelevant.length > 0) {
      html += `<div class="qa-category-label">★ Questions for This Page</div>`;
      html += pageRelevant.map(buildCard).join('');
      html += `<div class="qa-category-label qa-all-label">All Questions</div>`;
    }

    for (const cat of CATEGORIES) {
      const qs = grouped[cat.label];
      if (!qs || qs.length === 0) continue;
      html += `
        <details class="qa-group">
          <summary class="qa-group-label">${cat.label} <span class="qa-count">${qs.length}</span></summary>
          <div class="qa-group-body">${qs.map(buildCard).join('')}</div>
        </details>`;
    }
    return html;
  }

  // Main render function
  function renderQASection() {
    const container = document.getElementById('qa-section-inner');
    if (!container) return;
    const searchInput = document.getElementById('qa-search');
    const filterText = searchInput ? searchInput.value : '';
    const questions = getSortedQuestions(filterText);
    container.innerHTML = buildBrowseList(questions);
    attachCardListeners();
  }

  function attachCardListeners() {
    document.querySelectorAll('.qa-question').forEach(btn => {
      btn.addEventListener('click', function() {
        const card = this.closest('.qa-card');
        const answer = card.querySelector('.qa-answer');
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        this.querySelector('.qa-arrow').textContent = expanded ? '▾' : '▴';
        if (expanded) {
          answer.hidden = true;
        } else {
          answer.hidden = false;
        }
      });
    });
  }

  // Inject the full section HTML + styles
  function injectQASection() {
    // Styles
    const style = document.createElement('style');
    style.textContent = `
      /* ── Q&A Section ── */
      #qa-section {
        position: relative;
        z-index: 10;
        max-width: 900px;
        margin: 0 auto 4rem;
        padding: 0 1.5rem;
      }

      .qa-header {
        text-align: center;
        margin-bottom: 2rem;
      }

      .qa-title {
        font-family: 'Cinzel', serif;
        font-size: clamp(1.4rem, 3vw, 2rem);
        font-weight: 400;
        letter-spacing: 0.15em;
        background: linear-gradient(135deg, #ffd54f, #a8e6cf);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.5rem;
      }

      .qa-subtitle {
        color: rgba(168, 230, 207, 0.6);
        font-style: italic;
        font-size: 0.95rem;
      }

      .qa-search-wrap {
        position: relative;
        margin-bottom: 2rem;
      }

      #qa-search {
        width: 100%;
        background: rgba(13, 31, 22, 0.8);
        border: 2px solid rgba(124, 179, 66, 0.4);
        border-radius: 3rem;
        padding: 0.9rem 1.5rem 0.9rem 3rem;
        color: #d4f1e3;
        font-family: 'Crimson Text', serif;
        font-size: 1.05rem;
        outline: none;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }

      #qa-search::placeholder { color: rgba(168, 230, 207, 0.4); }

      #qa-search:focus {
        border-color: rgba(124, 179, 66, 0.8);
        box-shadow: 0 0 20px rgba(124, 179, 66, 0.2);
      }

      .qa-search-icon {
        position: absolute;
        left: 1.1rem;
        top: 50%;
        transform: translateY(-50%);
        color: rgba(124, 179, 66, 0.6);
        font-size: 1rem;
        pointer-events: none;
      }

      #qa-clear {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: rgba(168, 230, 207, 0.5);
        font-size: 1.1rem;
        cursor: pointer;
        padding: 0.25rem;
        display: none;
        transition: color 0.2s;
      }

      #qa-clear:hover { color: #d4f1e3; }

      .qa-category-label {
        font-family: 'Cinzel', serif;
        font-size: 0.8rem;
        letter-spacing: 0.2em;
        color: rgba(255, 213, 79, 0.7);
        text-transform: uppercase;
        padding: 1.5rem 0 0.75rem;
        border-bottom: 1px solid rgba(124, 179, 66, 0.15);
        margin-bottom: 0.75rem;
      }

      .qa-all-label {
        margin-top: 1.5rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(124, 179, 66, 0.2);
      }

      /* Group (category accordion) */
      .qa-group {
        margin-bottom: 0.5rem;
        border-radius: 0.75rem;
        overflow: hidden;
      }

      .qa-group-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.85rem 1.25rem;
        background: rgba(26, 58, 46, 0.5);
        border: 1px solid rgba(124, 179, 66, 0.2);
        border-radius: 0.75rem;
        cursor: pointer;
        list-style: none;
        font-size: 1rem;
        color: #a8e6cf;
        transition: background 0.2s, border-color 0.2s;
        user-select: none;
      }

      .qa-group-label:hover {
        background: rgba(26, 58, 46, 0.8);
        border-color: rgba(124, 179, 66, 0.4);
      }

      .qa-group[open] .qa-group-label {
        border-radius: 0.75rem 0.75rem 0 0;
        border-color: rgba(124, 179, 66, 0.4);
        color: #ffd54f;
      }

      .qa-count {
        font-size: 0.8rem;
        background: rgba(124, 179, 66, 0.2);
        border-radius: 1rem;
        padding: 0.1rem 0.6rem;
        color: rgba(168, 230, 207, 0.7);
        flex-shrink: 0;
        margin-left: 0.75rem;
      }

      .qa-group-body {
        border: 1px solid rgba(124, 179, 66, 0.2);
        border-top: none;
        border-radius: 0 0 0.75rem 0.75rem;
        padding: 0.5rem;
        background: rgba(13, 31, 22, 0.3);
      }

      /* Individual Q&A card */
      .qa-card {
        margin-bottom: 0.4rem;
        border-radius: 0.6rem;
        overflow: hidden;
        border: 1px solid rgba(124, 179, 66, 0.15);
        transition: border-color 0.2s;
      }

      .qa-card:hover { border-color: rgba(124, 179, 66, 0.35); }

      .qa-question {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        background: rgba(26, 58, 46, 0.4);
        border: none;
        color: #d4f1e3;
        font-family: 'Crimson Text', serif;
        font-size: 1.05rem;
        text-align: left;
        padding: 0.9rem 1.1rem;
        cursor: pointer;
        transition: background 0.2s;
      }

      .qa-question:hover { background: rgba(26, 58, 46, 0.7); }

      .qa-question[aria-expanded="true"] {
        background: rgba(26, 58, 46, 0.8);
        color: #ffd54f;
      }

      .qa-q-text { flex: 1; }

      .qa-arrow {
        color: rgba(124, 179, 66, 0.7);
        font-size: 1rem;
        flex-shrink: 0;
        transition: transform 0.2s;
      }

      .qa-answer {
        background: rgba(13, 31, 22, 0.5);
        border-top: 1px solid rgba(124, 179, 66, 0.15);
        padding: 1.25rem 1.25rem 1rem;
      }

      .qa-answer-body {
        color: #d4f1e3;
        font-size: 1rem;
        line-height: 1.85;
      }

      .qa-answer-body p {
        margin-bottom: 0.9rem;
      }

      .qa-answer-body p:last-child { margin-bottom: 0; }

      .qa-links {
        margin-top: 1rem;
        padding-top: 0.75rem;
        border-top: 1px solid rgba(124, 179, 66, 0.15);
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .qa-link {
        display: inline-block;
        background: rgba(124, 179, 66, 0.15);
        border: 1px solid rgba(124, 179, 66, 0.35);
        color: #a8e6cf;
        padding: 0.4rem 0.9rem;
        border-radius: 2rem;
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.2s;
      }

      .qa-link:hover {
        background: rgba(124, 179, 66, 0.3);
        border-color: rgba(124, 179, 66, 0.6);
        color: #d4f1e3;
      }

      .qa-empty {
        color: rgba(168, 230, 207, 0.6);
        font-style: italic;
        text-align: center;
        padding: 2rem 1rem;
      }

      .qa-divider {
        border: none;
        border-top: 1px solid rgba(124, 179, 66, 0.2);
        margin: 3rem 0 2.5rem;
      }

      /* Responsive */
      @media (max-width: 600px) {
        .qa-question { font-size: 0.97rem; padding: 0.8rem 0.9rem; }
        .qa-answer { padding: 1rem; }
      }
    `;
    document.head.appendChild(style);

    // Section HTML
    const section = document.createElement('section');
    section.id = 'qa-section';
    section.innerHTML = `
      <hr class="qa-divider">
      <div class="qa-header">
        <div class="qa-title">Questions About Your Design</div>
        <div class="qa-subtitle">Search by keyword or browse by category</div>
      </div>
      <div class="qa-search-wrap">
        <span class="qa-search-icon">🔍</span>
        <input
          type="text"
          id="qa-search"
          placeholder="Try: motivation, ADHD, relationships, purpose, communication…"
          autocomplete="off"
          spellcheck="false"
        >
        <button id="qa-clear" aria-label="Clear search">✕</button>
      </div>
      <div id="qa-section-inner"></div>
    `;

    // Insert before footer, or append to body
    const footer = document.querySelector('footer');
    if (footer) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }

    // Search interaction
    const searchInput = document.getElementById('qa-search');
    const clearBtn = document.getElementById('qa-clear');

    let debounceTimer;
    searchInput.addEventListener('input', function() {
      clearBtn.style.display = this.value.length > 0 ? 'block' : 'none';
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(renderQASection, 200);
    });

    clearBtn.addEventListener('click', function() {
      searchInput.value = '';
      this.style.display = 'none';
      renderQASection();
      searchInput.focus();
    });

    // Initial render
    renderQASection();
  }

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectQASection);
  } else {
    injectQASection();
  }

})();
