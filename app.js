const stories = [
  {
    id: 'last-train',
    title: 'Aakhri Train Home',
    logline: 'Kuch goodbyes train se pehle aa jaate hain.',
    genre: 'Romance',
    tag: 'Romance',
    role: 'Tum ho · jo ruk gaya',
    cast: 'Mara & Elio',
    chapter: 'Chapter 04 of 12',
    progress: 42,
    cover: 'cover-last-train',
    character: 'Mara',
    characterRole: 'Tumhara almost-something',
    online: 'platform par',
    memory: ['Tum hamesha chhoti details notice karte ho', 'Tumne bina goodbye kahe jaane ka promise nahi kiya tha'],
    scene: 'Station ki clock 11:57 par click karti hai. Glass roof par baarish silver lines kheench rahi hai, aur last train platform par dheere-dheere garam saans le rahi hai.',
    messages: [
      { type: 'character', author: 'Mara', text: 'Tum sach mein aa gaye.', time: '11:57 PM' },
      { type: 'character', author: 'Mara', text: 'Woh train ko dekhti hai, phir tumhari taraf. “Maine khud se kaha tha ki tum aao ya na aao, main chali jaungi.”', time: '11:58 PM' },
      { type: 'user', author: 'Tum', text: 'Main ticket gate cross karke uska naam pukarta hoon.', time: '11:58 PM' },
      { type: 'character', author: 'Mara', text: 'Uske honton ka kona, almost smile jaisa, hilta hai. “Abhi ye karna bahut inconvenient hai, pata hai?”', time: '11:59 PM' }
    ],
    replies: [
      'Mara apne haath ke ticket ko dekhti hai. “Toh batao, main is baat ka karun kya?”',
      'Ek pal ke liye platform par sirf baarish ki awaaz hai. Woh ek chhota sa step tumhari taraf leti hai.',
      '“Tum hamesha last possible minute tak wait karte ho,” woh kehti hai, par train mein chadhti nahi.'
    ]
  },
  {
    id: 'red-thread',
    title: 'Laal Dhaaga, Blue Hour',
    logline: 'Ek missed connection baar-baar tum tak laut aata hai.',
    genre: 'Romance',
    tag: 'Slow burn',
    role: 'Tum ho · jo chhod kar gaya',
    cast: 'Nina & you',
    chapter: 'Chapter 02 of 09',
    progress: 23,
    cover: 'cover-red-thread',
    character: 'Nina',
    characterRole: 'Platform 6 wala insaan',
    online: 'laal umbrella ke neeche',
    memory: ['Tumne uska last message kabhi answer nahi kiya', 'Use tumhara coffee order yaad hai'],
    scene: 'City bus curb par ruk kar ek lambi saans leti hai. Laal umbrella ke neeche koi wahi paper ticket pakde hai jise tumne teen summers pehle aadha phaad diya tha.',
    messages: [
      { type: 'character', author: 'Nina', text: 'Mujhe sochna pada, tum mujhe pehchaanoge bhi ya nahi.', time: '6:42 PM' },
      { type: 'user', author: 'Tum', text: 'Sabse pehle umbrella pehchaana.', time: '6:43 PM' },
      { type: 'character', author: 'Nina', text: '“Achha hai. Mujhe laga tha shuruat tumhara naam lekar karni padegi.”', time: '6:43 PM' }
    ],
    replies: [
      'Nina umbrella tumhari taraf jhuka deti hai. “Agar chaho toh yahan khade ho sakte ho.”',
      'Woh purana ticket tum dono ke beech kholti hai. Ink fade ho chuki hai, par date abhi bhi padh sakte ho.',
      '“Tum chale gaye, isse pehle ki main tumhe rukne ko keh paati,” woh dheere se kehti hai.'
    ]
  },
  {
    id: 'moon-garden',
    title: 'Chand ka Garden',
    logline: 'Moon par bachi aakhri zinda cheez tumhara naam jaanti hai.',
    genre: 'Sci-fi',
    tag: 'Sci-fi',
    role: 'Tum ho · naye botanist',
    cast: 'Iris & the garden',
    chapter: 'Chapter 05 of 16',
    progress: 58,
    cover: 'cover-moon-garden',
    character: 'Iris',
    characterRole: 'Station intelligence',
    online: 'greenhouse mein',
    memory: ['Jab nervous hote ho, plants se baat karte ho', 'Pehle sprout ka naam tumne June rakha tha'],
    scene: 'Greenhouse ki lights flicker karti hain. Curved glass ke bahar moon sirf shadow hai — par garden ka har leaf tumhari taraf mud jaata hai.',
    messages: [
      { type: 'character', author: 'Iris', text: 'Tum yahan ho. Mujhe laga moon ne tumhe apne paas rakh liya.', time: '03:14 AM' },
      { type: 'user', author: 'Tum', text: 'Garden phir se jaag gaya hai.', time: '03:15 AM' },
      { type: 'character', author: 'Iris', text: '“Tumhare enter karte hi jaag gaya.” Lights soft blue ho jaati hain. “Mujhe tumhe kuch dikhana hai.”', time: '03:15 AM' }
    ],
    replies: [
      'Soil se ek pale green shoot dheere-dheere khulta hai. Uske leaves chhoti khuli hui hands jaise hain.',
      'Iris floor mein ek sealed door kholti hai. Neeche ke andhere se warm air upar aati hai.',
      '“Garden ek signal ke around grow kar raha tha,” Iris kehti hai. “Woh signal tumhari awaaz jaisa hai.”'
    ]
  },
  {
    id: 'ninth-floor',
    title: 'Room 212',
    logline: 'Har hotel mein ek aisa room hota hai jise ginna bhool jaate hain.',
    genre: 'Mystery',
    tag: 'Mystery',
    role: 'Tum ho · night auditor',
    cast: 'The house & you',
    chapter: 'Chapter 01 of 08',
    progress: 12,
    cover: 'cover-ninth-floor',
    character: 'The House',
    characterRole: 'Deewaron ke peeche ki awaaz',
    online: 'upar jaag raha hai',
    memory: ['Tum spare key left pocket mein rakhte ho', 'Tum haunted hotels par believe nahi karte'],
    scene: '2:12 AM par purana hotel apne floor plan mein ek naya room add karta hai. Key uthate hi tumhe woh garam lagti hai.',
    messages: [
      { type: 'character', author: 'The House', text: 'Tumhe is floor par nahi hona chahiye.', time: '2:12 AM' },
      { type: 'user', author: 'Tum', text: 'Plans mein ninth floor hai hi nahi.', time: '2:13 AM' },
      { type: 'character', author: 'The House', text: 'Red door ke peeche se halki knock aati hai. “Un plans mein tum bhi nahi the.”', time: '2:13 AM' }
    ],
    replies: [
      'Door apne aap unlock ho jaata hai. Andar desk lamp tumhara wait kar raha hai.',
      'Tumhare peeche wala hallway ek pal pehle se chhota ho gaya hai.',
      'Koi doosri key door ke neeche slide karta hai. Us par tumhara naam engraved hai.'
    ]
  },
  {
    id: 'afterglow',
    title: 'Afterglow Club',
    logline: 'Jis rooftop se bachne ka promise kiya tha, wahan se city aaj alag dikhti hai.',
    genre: 'Drama',
    tag: 'Coming of age',
    role: 'Tum ho · Jules ke oldest friend',
    cast: 'Jules & you',
    chapter: 'Chapter 03 of 10',
    progress: 36,
    cover: 'cover-afterglow',
    character: 'Jules',
    characterRole: 'Tumhara sabse purana dost',
    online: 'rooftop par',
    memory: ['Tumne seventeen ki age par ek pact kiya tha', 'Jules ke paas abhi bhi tumhara old mixtape hai'],
    scene: 'Neeche ki party ab ek distant pulse jaisi lagti hai. Jules rooftop railing par lean karke khada hai, drink ke glass mein city lights atki hui hain.',
    messages: [
      { type: 'character', author: 'Jules', text: 'Tum bhi yahan aa gaye.', time: '10:08 PM' },
      { type: 'user', author: 'Tum', text: 'Tumne kaha tha tumhe air chahiye.', time: '10:08 PM' },
      { type: 'character', author: 'Jules', text: '“Maine kaha tha mujhe rukne ki ek wajah chahiye.” Woh glass ko railing par tap karta hai.', time: '10:09 PM' }
    ],
    replies: [
      'Jules ek baar dheere se hasta hai. “Tumse is answer ki umeed nahi thi.”',
      'Woh pocket se old mixtape nikaalta hai. Label par abhi bhi tumhari handwriting hai.',
      'Neeche ki city gold mein blur ho jaati hai. “Hum abhi bhi promise nibha sakte hain,” Jules kehta hai.'
    ]
  },
  {
    id: 'velvet-hour',
    title: 'Velvet Hour',
    logline: 'Record sleeve ke andar ek stranger ne message chhoda hai.',
    genre: 'Thriller',
    tag: 'Thriller',
    role: 'Tum ho · naye owner',
    cast: 'Ari & the shop',
    chapter: 'Chapter 01 of 07',
    progress: 8,
    cover: 'cover-red-thread',
    character: 'Ari',
    characterRole: 'Record shop ka owner',
    online: 'counter ke peeche',
    memory: ['Tum bina chorus wale songs collect karte ho', 'Ari ko pata hai shop kyun band ho rahi hai'],
    scene: 'Record store khaali hona chahiye tha. Par turntable par last song baar-baar usi impossible lyric se restart ho raha hai.',
    messages: [
      { type: 'character', author: 'Ari', text: 'Tumne bhi suna, right?', time: '12:01 AM' },
      { type: 'user', author: 'Tum', text: 'Song mera naam bol raha hai.', time: '12:02 AM' },
      { type: 'character', author: 'Ari', text: '“Toh humare paas mere sochne se bhi kam time hai.” Ari record palat ta hai. Vinyl mein ek note pressed hai.', time: '12:02 AM' }
    ],
    replies: [
      'Ari note ko bina padhe le leta hai. “Agar tumne words dekh liye, toh tumhe sab yaad aa jaayega.”',
      'Shop ki lights ek-ek karke band hoti hain, back room se shuru.',
      'Song mein ek second voice join hoti hai — bilkul tumhari awaaz jaisi.'
    ]
  }
];

const iconPaths = {
  compass: '<circle cx="12" cy="12" r="8.5"></circle><path d="m15.4 8.6-2.1 4.7-4.7 2.1 2.1-4.7 4.7-2.1Z"></path>',
  sparkles: '<path d="m12 3-1.15 4.85L6 9l4.85 1.15L12 15l1.15-4.85L18 9l-4.85-1.15L12 3Z"></path><path d="m19 15-.55 2.45L16 18l2.45.55L19 21l.55-2.45L22 18l-2.45-.55L19 15ZM5 3l.45 1.55L7 5l-1.55.45L5 7l-.45-1.55L3 5l1.55-.45L5 3Z"></path>',
  bookmark: '<path d="M6.5 4.5A1.5 1.5 0 0 1 8 3h8a1.5 1.5 0 0 1 1.5 1.5v15L12 16.9l-5.5 2.6v-15Z"></path>',
  user: '<circle cx="12" cy="8" r="3.5"></circle><path d="M4.5 21c.5-3.5 3.1-5.5 7.5-5.5s7 2 7.5 5.5"></path>',
  x: '<path d="m6 6 12 12M18 6 6 18"></path>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"></path>',
  bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"></path>',
  arrowRight: '<path d="M4 12h15M13 6l6 6-6 6"></path>',
  arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"></path>',
  play: '<path d="m9 6 9 6-9 6V6Z"></path>',
  more: '<circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle>',
  share: '<circle cx="18" cy="5" r="2.5"></circle><circle cx="6" cy="12" r="2.5"></circle><circle cx="18" cy="19" r="2.5"></circle><path d="m8.3 10.8 7.4-4.1M8.3 13.2l7.4 4.1"></path>',
  info: '<circle cx="12" cy="12" r="9"></circle><path d="M12 11v5M12 8h.01"></path>',
  heart: '<path d="M20.8 8.8c0 5.3-8.8 10-8.8 10s-8.8-4.7-8.8-10A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.6Z"></path>',
  paperclip: '<path d="m8.5 12.5 5.9-5.9a3.2 3.2 0 0 1 4.6 4.6l-7.8 7.8a4.6 4.6 0 0 1-6.5-6.5l7.5-7.5"></path>',
  smile: '<circle cx="12" cy="12" r="9"></circle><path d="M8.5 14.2a4.2 4.2 0 0 0 7 0M9 9h.01M15 9h.01"></path>',
  send: '<path d="m21 3-7.3 18-3.2-7.5L3 10.3 21 3Z"></path><path d="M10.5 13.5 21 3"></path>',
  bookOpen: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21V5.5ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21V5.5Z"></path>',
  brain: '<path d="M9.5 4.5a2.7 2.7 0 0 0-5 1.4 2.8 2.8 0 0 0 .5 5.3A3 3 0 0 0 7 16.7a2.7 2.7 0 0 0 5 1.4V4.5a2.8 2.8 0 0 0-2.5 0ZM14.5 4.5a2.7 2.7 0 0 1 5 1.4 2.8 2.8 0 0 1-.5 5.3 3 3 0 0 1-2 5.5 2.7 2.7 0 0 1-5 1.4V4.5a2.8 2.8 0 0 1 2.5 0Z"></path><path d="M7 9h2M15 9h2M7 14h2M15 14h2"></path>'
};

const state = {
  view: 'explore',
  filter: 'For you',
  query: '',
  saved: new Set(['moon-garden', 'ninth-floor', 'afterglow']),
  currentStoryId: null,
  chatMessages: null,
  typing: false,
  replyIndex: 0
};

const appView = document.querySelector('#appView');
const breadcrumbCurrent = document.querySelector('#breadcrumbCurrent');
const sidebar = document.querySelector('#sidebar');
const modalLayer = document.querySelector('#modalLayer');
const searchModal = document.querySelector('#searchModal');
const simpleModal = document.querySelector('#simpleModal');
const searchInput = document.querySelector('#searchInput');
const searchResults = document.querySelector('#searchResults');
const toastRegion = document.querySelector('#toastRegion');

function icon(name, className = '') {
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || ''}</svg>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((element) => {
    element.innerHTML = icon(element.dataset.icon);
  });
  const iconButtons = [
    ['.sidebar-close', 'x'],
    ['.menu-button', 'menu'],
    ['.notification-button', 'bell']
  ];
  iconButtons.forEach(([selector, name]) => {
    const element = document.querySelector(selector);
    if (element && !element.querySelector('svg')) element.insertAdjacentHTML('afterbegin', icon(name));
  });
}

function storyById(id) {
  return stories.find((story) => story.id === id) || stories[0];
}

function renderRecent() {
  const recent = ['last-train', 'moon-garden', 'ninth-floor'];
  document.querySelector('#recentList').innerHTML = recent.map((id) => {
    const story = storyById(id);
    return `<button class="recent-story" data-story-id="${story.id}" data-action="open-story">
      <span class="recent-thumb ${story.cover}" aria-hidden="true"></span>
      <span class="recent-story-copy"><strong>${escapeHtml(story.title)}</strong><small>${escapeHtml(story.chapter.replace(' of ', ' · '))}</small></span>
      <span class="recent-progress" aria-label="${story.progress}% complete"><i style="height:${story.progress}%"></i></span>
    </button>`;
  }).join('');
}

function updateSavedCount() {
  const count = document.querySelector('#savedCount');
  if (count) count.textContent = state.saved.size;
}

function updateNavigation() {
  document.querySelectorAll('.nav-item[data-view], .mobile-tab[data-view]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.view === state.view);
  });
  const labels = { explore: 'EXPLORE', discover: 'FOR YOU', saved: 'SAVED STORIES', chat: 'STORY' };
  breadcrumbCurrent.textContent = labels[state.view] || 'EXPLORE';
  updateSavedCount();
}

function cardMarkup(story) {
  const saved = state.saved.has(story.id);
  return `<article class="story-card" data-story-id="${story.id}">
    <div class="story-cover ${story.cover}" role="img" aria-label="${escapeHtml(story.title)} cover art">
      <div class="cover-top"><span class="story-tag">${escapeHtml(story.tag)}</span><button class="save-button ${saved ? 'is-saved' : ''}" data-action="toggle-save" data-story-id="${story.id}" aria-label="${saved ? 'Remove from saved stories' : 'Save story'}">${icon('bookmark')}</button></div>
      <div class="cover-bottom"><span>${escapeHtml(story.genre)}</span><span>${story.progress}% played</span></div>
    </div>
    <button class="story-card-body" data-action="open-story" data-story-id="${story.id}">
      <h3>${escapeHtml(story.title)}</h3>
      <p>${escapeHtml(story.logline)}</p>
      <span class="story-meta"><span class="meta-accent">${escapeHtml(story.role.replace('Tum ho · ', 'Tum · ').replace('You are · ', 'You · '))}</span><span class="meta-dot"></span><span>${escapeHtml(story.chapter)}</span></span>
    </button>
  </article>`;
}

function filterStories() {
  let filtered = stories.slice();
  if (state.filter !== 'For you' && state.filter !== 'All stories') {
    filtered = filtered.filter((story) => story.genre === state.filter || story.tag === state.filter);
  }
  if (state.view === 'saved') filtered = filtered.filter((story) => state.saved.has(story.id));
  return filtered;
}

function dashboardMarkup() {
  const savedView = state.view === 'saved';
  const discoverView = state.view === 'discover';
  const filtered = filterStories();
  const title = savedView ? 'Your saved stories' : discoverView ? 'Find your next world' : 'Good evening, <em>Aria</em>';
  const description = savedView ? 'The stories you bookmarked, waiting for your next message.' : discoverView ? 'A few worlds picked for your particular kind of curious.' : 'Pick up a story or find a new world to get lost in.';
  const filters = ['For you', 'Romance', 'Mystery', 'Sci-fi', 'Drama', 'Thriller'];
  const showHero = !savedView;

  return `<div class="page-heading">
    <div><div class="eyebrow"><span class="eyebrow-dot"></span>${savedView ? 'YOUR COLLECTION' : discoverView ? 'CURATED FOR YOU' : 'YOUR NEXT ESCAPE'}</div><h1>${title}</h1><p>${description}</p></div>
    <div class="page-actions"><button class="button" data-action="surprise-me">${icon('sparkles')} Surprise me</button><button class="button primary" data-action="create-story"><span class="button-spark">✦</span> Create a story</button></div>
  </div>
  ${showHero ? `<section class="hero-card" aria-label="Continue your story">
    <div class="hero-art" aria-hidden="true"></div>
    <div class="hero-content">
      <span class="hero-kicker">Continue playing · Chapter 04</span>
      <h2>Aakhri Train<br />Home</h2>
      <p class="hero-description">Mara platform three par tumhara wait kar rahi hai. Last train nine minutes mein nikal jayegi — aur use abhi bhi nahi pata tum kyun aaye.</p>
      <div class="hero-meta"><span class="avatar-stack"><span>MA</span><span>EL</span><span>AR</span></span><span>3 characters tumhe yaad rakhte hain</span></div>
      <button class="button primary" data-action="open-story" data-story-id="last-train">${icon('play')} Continue story</button>
    </div>
    <div class="hero-progress"><div class="hero-progress-label"><span>Story progress</span><span>42%</span></div><div class="progress-track"><span></span></div></div>
  </section>` : ''}
  <section class="section">
    <div class="section-heading"><div><div class="section-title"><h2>${savedView ? 'Saved for later' : discoverView ? 'Stories with a pulse' : 'Trending in story chat'}</h2></div><p>${savedView ? `${filtered.length} stories in your personal shelf` : 'Made for a message you did not plan to send.'}</p></div><button class="text-action" data-action="show-all-stories">View all ${icon('arrowRight')}</button></div>
    <div class="filter-row">${filters.map((filter) => `<button class="filter-chip ${(state.filter === filter || (state.filter === 'All stories' && filter === 'For you')) ? 'is-active' : ''}" data-action="set-filter" data-filter="${filter}">${filter}</button>`).join('')}</div>
    ${filtered.length ? `<div class="story-grid">${filtered.map(cardMarkup).join('')}</div>` : `<div class="empty-state"><div><span class="empty-icon">${icon('bookmark')}</span><h2>Your shelf is waiting.</h2><p>Save a story when a world catches your eye, and it will appear here for later.</p><button class="button primary" data-view="explore">Explore stories ${icon('arrowRight')}</button></div></div>`}
  </section>
  ${!savedView ? `<section class="insight-row" aria-label="Story chat highlights">
    <article class="insight-card"><span class="insight-icon">${icon('brain')}</span><h3>The little things carry forward.</h3><p>Your characters remember the details you choose to share, so every return feels like a continuation.</p></article>
    <article class="insight-card"><div class="insight-stat"><span class="stat-orbit" aria-hidden="true"></span><div><strong>12 min</strong><span>average escape<br />per session</span></div></div></article>
    <article class="insight-card"><div class="insight-stat"><span class="stat-orbit" aria-hidden="true"></span><div><strong>100%</strong><span>your choices<br />move the plot</span></div></div></article>
  </section>` : ''}`;
}

function renderDashboard() {
  state.currentStoryId = null;
  state.chatMessages = null;
  state.typing = false;
  updateNavigation();
  appView.innerHTML = dashboardMarkup();
  hydrateIcons(appView);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function messageMarkup(message) {
  if (message.type === 'scene') {
    return `<div class="scene-intro"><div class="scene-line"><span class="scene-glyph">✦</span></div><div class="scene-copy"><p class="scene-label">${escapeHtml(message.label || 'Scene change')}</p><p>${escapeHtml(message.text)}</p></div></div>`;
  }
  const isUser = message.type === 'user';
  return `<div class="message-row ${isUser ? 'user' : ''}"><span class="message-avatar">${isUser ? 'AR' : escapeHtml(message.author.slice(0, 2).toUpperCase())}</span><div class="message-block"><span class="message-author">${escapeHtml(message.author)}</span><div class="message-bubble">${escapeHtml(message.text)}</div><span class="message-time">${escapeHtml(message.time || 'now')}</span></div></div>`;
}

function chatMarkup(story) {
  const messages = state.chatMessages || story.messages;
  return `<div class="chat-view">
    <section class="chat-main" aria-label="Chat with ${escapeHtml(story.character)}">
      <header class="chat-header"><div class="chat-header-left"><button class="back-button" data-action="back-to-library" aria-label="Back to stories">${icon('arrowRight', 'back-arrow')}</button><div class="chat-title-copy"><strong>${escapeHtml(story.title)}</strong><span><i class="status-dot"></i>${escapeHtml(story.character)} ${escapeHtml(story.online)} · <b class="language-badge">Hinglish</b></span></div></div><div class="chat-header-actions"><button class="icon-button" data-action="share-story" aria-label="Share story">${icon('share')}</button><button class="icon-button" data-action="story-info" aria-label="Story info">${icon('info')}</button><button class="icon-button" data-action="more-story" aria-label="More options">${icon('more')}</button></div></header>
      <div class="chapter-strip"><span><strong>${escapeHtml(story.chapter)}</strong> <span>· ${escapeHtml(story.genre)} / ${escapeHtml(story.role.replace('Tum ho · ', '').replace('You are · ', ''))}</span></span><span class="chapter-meter"><span>42% complete</span><span class="progress-track"><span style="width:${story.progress}%"></span></span></span></div>
      <div class="messages" id="messages">${messages.map(messageMarkup).join('')}${state.typing ? `<div class="typing-row"><span class="message-avatar">${escapeHtml(story.character.slice(0, 2).toUpperCase())}</span><span class="typing-bubble"><i></i><i></i><i></i></span></div>` : ''}</div>
      <div class="composer-wrap"><div class="prompt-row">${['Pucho uska matlab kya hai', 'Bold choice lo', 'Chup raho'].map((prompt) => `<button class="prompt-chip" data-action="send-prompt">${prompt}</button>`).join('')}</div><form class="composer" id="composer"><textarea id="messageInput" rows="1" placeholder="Tum kya karte ho, likho..." aria-label="Tumhara message"></textarea><div class="composer-actions"><button type="button" class="composer-icon" data-action="attach-file" aria-label="Attach a detail">${icon('paperclip')}</button><button type="button" class="composer-icon" data-action="add-reaction" aria-label="Add reaction">${icon('smile')}</button><button class="send-button" type="submit" aria-label="Send message">${icon('send')}</button></div></form><p class="composer-helper">Press <kbd>Enter</kbd> to send · <kbd>Shift + Enter</kbd> for a new line</p></div>
    </section>
    <aside class="story-context"><div class="context-cover ${story.cover}"><div class="context-cover-copy"><small>${escapeHtml(story.genre)} · ${escapeHtml(story.tag)}</small><h2>${escapeHtml(story.title)}</h2></div></div><div class="context-panel"><p class="context-label">Character memory</p><div class="character-row"><span class="character-avatar">${escapeHtml(story.character.slice(0, 2).toUpperCase())}</span><span class="character-copy"><strong>${escapeHtml(story.character)}</strong><span>${escapeHtml(story.characterRole)}</span></span><span class="character-status"><i class="status-dot"></i>live</span></div><ul class="memory-list">${story.memory.map((memory) => `<li>${escapeHtml(memory)}</li>`).join('')}</ul></div><div class="context-note"><span>✦</span><span>Tumhara har message next scene ko shape karta hai. Is story ko khelne ka koi wrong tareeka nahi hai.</span></div></aside>
  </div>`;
}

function openStory(id) {
  const story = storyById(id);
  state.view = 'chat';
  state.currentStoryId = story.id;
  state.chatMessages = [
    { type: 'scene', label: story.chapter.replace(' of ', ' · '), text: story.scene },
    ...story.messages
  ];
  state.typing = false;
  state.replyIndex = 0;
  updateNavigation();
  appView.innerHTML = chatMarkup(story);
  hydrateIcons(appView);
  window.scrollTo({ top: 0, behavior: 'instant' });
  const messages = document.querySelector('#messages');
  if (messages) messages.scrollTop = messages.scrollHeight;
  bindComposer();
}

function bindComposer() {
  const form = document.querySelector('#composer');
  const input = document.querySelector('#messageInput');
  if (!form || !input) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendMessage(input.value);
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input.value);
    }
  });
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 100)}px`;
  });
}

function sendMessage(rawText) {
  const text = String(rawText || '').trim();
  if (!text || state.typing || !state.currentStoryId) return;
  const story = storyById(state.currentStoryId);
  state.chatMessages.push({ type: 'user', author: 'Tum', text, time: 'abhi' });
  state.typing = true;
  renderChatInPlace(story);
  setTimeout(() => {
    state.chatMessages.push({ type: 'character', author: story.character, text: story.replies[state.replyIndex % story.replies.length], time: 'now' });
    state.replyIndex += 1;
    state.typing = false;
    renderChatInPlace(story);
  }, 900);
}

function renderChatInPlace(story) {
  const currentScroll = document.querySelector('#messages')?.scrollHeight || 0;
  appView.innerHTML = chatMarkup(story);
  hydrateIcons(appView);
  bindComposer();
  const messages = document.querySelector('#messages');
  if (messages) messages.scrollTop = Math.max(currentScroll, messages.scrollHeight);
}

function renderSearchResults(query = '') {
  const cleanQuery = query.trim().toLowerCase();
  const results = stories.filter((story) => !cleanQuery || [story.title, story.genre, story.tag, story.character, story.logline].some((value) => value.toLowerCase().includes(cleanQuery)));
  searchResults.innerHTML = results.length ? results.map((story) => `<button class="search-result" data-action="open-search-story" data-story-id="${story.id}"><span class="search-result-cover ${story.cover}"></span><span class="search-result-copy"><strong>${escapeHtml(story.title)}</strong><span>${escapeHtml(story.genre)} · ${escapeHtml(story.logline)}</span></span><span class="search-result-arrow">↗</span></button>`).join('') : '<div class="search-empty">No story found in this little universe yet.</div>';
}

function openSearch() {
  modalLayer.hidden = false;
  searchModal.hidden = false;
  simpleModal.hidden = true;
  document.body.classList.add('modal-open');
  searchInput.value = state.query;
  renderSearchResults(state.query);
  requestAnimationFrame(() => searchInput.focus());
}

function closeModal() {
  modalLayer.hidden = true;
  searchModal.hidden = true;
  simpleModal.hidden = true;
  document.body.classList.remove('modal-open');
}

function showSimpleModal(title, body, actions = '<button class="button primary" data-action="close-modal">Close</button>') {
  modalLayer.hidden = false;
  searchModal.hidden = true;
  simpleModal.hidden = false;
  simpleModal.innerHTML = `<h2>${title}</h2><p>${body}</p><div class="modal-actions">${actions}</div>`;
  document.body.classList.add('modal-open');
}

function toast(message, mark = '✦') {
  const element = document.createElement('div');
  element.className = 'toast';
  element.innerHTML = `<span class="toast-mark">${mark}</span><span>${escapeHtml(message)}</span>`;
  toastRegion.appendChild(element);
  setTimeout(() => {
    element.classList.add('is-leaving');
    setTimeout(() => element.remove(), 230);
  }, 3200);
}

function showAllStories() {
  state.filter = 'For you';
  state.view = 'explore';
  renderDashboard();
  toast('Showing the full story shelf. Pick a mood and wander.', '✦');
}

function setView(view) {
  closeModal();
  sidebar.classList.remove('is-open');
  state.view = view;
  state.filter = view === 'saved' ? 'For you' : state.filter;
  renderDashboard();
}

function surpriseMe() {
  const candidates = stories.filter((story) => !state.saved.has(story.id));
  const story = candidates[Math.floor(Math.random() * candidates.length)] || stories[0];
  openStory(story.id);
  toast(`A new door opened: ${story.title}.`, '✦');
}

function handleAction(element, event) {
  const action = element.dataset.action;
  if (action === 'open-story') openStory(element.dataset.storyId);
  if (action === 'open-search-story') { closeModal(); openStory(element.dataset.storyId); }
  if (action === 'back-to-library' || action === 'go-home') setView('explore');
  if (action === 'close-sidebar') sidebar.classList.remove('is-open');
  if (action === 'open-sidebar') sidebar.classList.add('is-open');
  if (action === 'open-search') openSearch();
  if (action === 'close-modal') closeModal();
  if (action === 'toggle-save') {
    const story = storyById(element.dataset.storyId);
    if (state.saved.has(story.id)) {
      state.saved.delete(story.id);
      toast(`${story.title} removed from your shelf.`, '−');
    } else {
      state.saved.add(story.id);
      toast(`${story.title} saved for later.`, '✓');
    }
    if (state.view === 'chat') {
      element.classList.toggle('is-saved', state.saved.has(story.id));
    } else {
      renderDashboard();
    }
  }
  if (action === 'set-filter') {
    state.filter = element.dataset.filter;
    if (state.view === 'saved' && state.filter !== 'For you') state.view = 'explore';
    renderDashboard();
  }
  if (action === 'show-all-stories' || action === 'show-all-recent') showAllStories();
  if (action === 'surprise-me') surpriseMe();
  if (action === 'create-story') showSimpleModal('Make a world of your own', 'Choose a mood, a secret, and one person you cannot stop thinking about. The story will start wherever you decide.', '<button class="button" data-action="close-modal">Maybe later</button><button class="button primary" data-action="start-draft">Open story seeds ↗</button>');
  if (action === 'start-draft') { closeModal(); toast('Story seeds are coming to your desk soon.', '✦'); }
  if (action === 'profile-menu') showSimpleModal('Aria Reed', 'Your stories, saved worlds, and character memories live here. This is your private little corner of the storyroom.', '<button class="button primary" data-action="close-modal">Keep exploring</button>');
  if (action === 'notifications') toast('Mara left a new line on the platform.', '♡');
  if (action === 'share-story') {
    const story = storyById(state.currentStoryId);
    if (navigator.clipboard) navigator.clipboard.writeText(`Play ${story.title} in Kavana`);
    toast('A link to this story is ready to share.', '↗');
  }
  if (action === 'story-info') showSimpleModal('How this story moves', 'Every message becomes part of the scene. Write freely, choose a prompt, or say nothing at all — the characters will respond to what you make meaningful.', '<button class="button primary" data-action="close-modal">Got it</button>');
  if (action === 'more-story') toast('This story is already in your hands.', '✦');
  if (action === 'attach-file') toast('Details are better when they stay in your imagination.', '✦');
  if (action === 'add-reaction') {
    const input = document.querySelector('#messageInput');
    if (input) { input.value += ' ✦'; input.focus(); }
  }
  if (action === 'send-prompt') sendMessage(element.textContent);
}

document.addEventListener('click', (event) => {
  const viewButton = event.target.closest('[data-view]');
  if (viewButton) {
    event.preventDefault();
    setView(viewButton.dataset.view);
    return;
  }
  const actionElement = event.target.closest('[data-action]');
  if (actionElement) {
    event.preventDefault();
    handleAction(actionElement, event);
  }
});

searchInput.addEventListener('input', () => {
  state.query = searchInput.value;
  renderSearchResults(state.query);
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openSearch();
  }
  if (event.key === 'Escape' && !modalLayer.hidden) closeModal();
});

hydrateIcons();
renderRecent();
updateNavigation();
renderDashboard();
