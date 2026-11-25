const main = document.querySelector("main");
const image = "assets/family-beach.png";
const button = (label, href, outline = false) =>
  `<a class="button${outline ? " outline" : ""}" href="${href}">${label}</a>`;
const video = () =>
  `<div class="video-placeholder" role="img" aria-label="Placeholder for LnL Global's upcoming film about why we do this work"><div class="video-inner"><span class="play-symbol" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m4 2 13 8L4 18Z" fill="currentColor"/></svg></span><p>The reason behind it all.</p><span class="small">Our ‘why’ film · Coming soon</span></div></div>`;
const cta = () =>
  `<section class="cta-section"><div><p class="eyebrow rose">A shared purpose</p><h2>There is a part for you to play.</h2><p>Give, start a cause or bring a community need to our attention.</p></div><div class="actions">${button("Make a donation", "#/donate")}${button("Start a cause", "#/contact?topic=cause", true)}${button("Get in touch", "#/contact", true)}${button("Our Valued Partners", "#/partners", true)}</div></section>`;
const heading = (eyebrow, title, lead) =>
  `<section class="page-heading"><p class="eyebrow rose">${eyebrow}</p><h1>${title}</h1><p class="lead">${lead}</p></section>`;
const projectCards = () => `<div class="project-grid">
<article class="project-card featured"><div class="project-photo"><img src="${image}" alt="A family dressed in white laughing together on a sunny beach" loading="lazy"><span class="image-caption">Illustrative image</span></div><p class="project-status">Our founding focus</p><h3>Keeping families at home.</h3><p>Supporting a path for people to remain in their family homes during financial crisis, with a focus on stability now and opportunity for the generations that follow.</p><button class="text-link" data-project="homes">Explore the initiative</button></article>
<article class="project-card"><p class="project-status">An ongoing commitment</p><h3>A safe place to call home.</h3><p>Our vision for housing estates for women, children and men experiencing homelessness: warm beds, safe spaces and the chance to build community and friendship.</p><button class="text-link" data-project="community">Our housing vision</button></article>
<article class="project-card"><p class="project-status">An invitation to collaborate</p><h3>Purpose, multiplied.</h3><p>Connecting generosity, ideas and shared commitment with philanthropic endeavours that can make a meaningful difference.</p><button class="text-link" data-project="partners">Explore partnerships</button></article></div>`;

const pages = {
  home: () => `<section class="hero"><div class="hero-copy"><p class="eyebrow rose">Philanthropy with purpose. Australia at heart.</p><h1>A home today.<span>A legacy<br>tomorrow.</span></h1><p class="intro">Helping people hold on to what matters. Supporting Australian communities through moments of crisis, with a vision for lasting change.</p><div class="actions"><a class="button help-button" href="#/contact?topic=homes">DO YOU NEED HELP?</a></div><div class="hero-bottom"><span class="tiny-label">Where Privilege<br>Becomes Purpose.</span><span class="line" aria-hidden="true"></span></div></div><div class="hero-media founder-portrait"><img src="assets/olivia-long.jpg" alt="Olivia Long in a red suit, sharing the purpose behind L&L Global" width="960" height="1440" fetchpriority="high"><div class="founder-caption"><span class="founder-name">Olivia Long</span><span class="founder-role">Founder</span><span class="founder-purpose">Taking real action today to shape the outcomes of the future.</span></div></div></section>
<div class="purpose-strip"><span>Philanthropy</span><span>Humanity</span><span>Legacy</span><span>For Australian communities</span></div>
<section class="section two-col heart-section"><div><p class="eyebrow rose">The heart of LnL Global</p><h2>Real action.<br>Generational impact.</h2></div><div class="section-copy"><p>L&L Global is driven by a passion to help the community around us by taking real action: building housing, helping people move off the streets and creating a better quality of life.</p><p>We create community. We help people learn to care for one another and experience the belonging and support that many have never had.</p><p>Our projects have a direct impact on Australians, with a purpose that reaches across generations. The actions we take today shape the outcomes in the future.</p><a class="text-link" href="#/why">The purpose behind our work</a></div><div class="housing-context"><div><p class="eyebrow rose">Why housing matters</p><h3>The cost of living<br>is only part of the story.</h3></div><div class="section-copy"><p>The price of groceries, transport and everyday life tells us what things cost. Affordability asks a different question: can people actually carry that cost?</p><p>Housing is where that balance can break down. Since 2015, rents have grown faster than household incomes across most Australian capital cities, making it harder for households to keep a secure roof over their heads. <a class="context-source" href="https://www.aihw.gov.au/reports/housing-assistance/housing-assistance-in-australia-2026/contents/housing-assistance" target="_blank" rel="noopener noreferrer">Source: AIHW, Housing assistance in Australia 2026</a></p><p>That gap is where families can get caught. A job, an income and a good record do not make a household immune to illness, a rate rise or a lost shift. When a budget is already stretched, a sudden change can put the family home at risk.</p><p>For too many Australians, housing is where the line between managing and struggling is crossed. That is why we focus on real action: helping people find stability, safety and a community that cares.</p><a class="text-link" href="#/contact?topic=homes">Do you need help?</a></div></div></section>
<section class="story-section">${video()}<div class="story-copy"><p class="eyebrow rose">Our why</p><h2>Behind every purpose,<br>there is a story.</h2><p class="section-copy">Why this work matters. What moves us to act. And the future we hope to help create, together.</p><a class="text-link" href="#/why">Meet our purpose</a></div></section>
<section class="section"><div class="project-heading"><div><p class="eyebrow rose">Our projects &amp; priorities</p><h2>Where purpose takes shape.</h2></div><a href="#/projects" class="text-link">Explore our work</a></div>${projectCards()}</section>
<section class="quote-section"><p class="eyebrow">Our belief</p><p>“Every Australian deserves a place they call home.”</p><span class="tiny-label" style="color:#c4beb6">Olivia Long</span></section>${cta()}`,
  why: () => `${heading("Our why", "Where Privilege<br>Becomes Purpose.", "We believe the difference we make in the lives of others is one of the most meaningful measures of success.")}
<section class="section two-col"><div><p class="eyebrow rose">A simple conviction</p><h2>What we have<br>can help change<br>what comes next.</h2></div><div class="section-copy"><p>L&L means “golden”. For us, that is a reminder of what is precious: a safe place to live, the dignity of being supported and the possibility of a more secure future.</p><p>L&L Global is driven by a passion to help the community around us by taking real action: building housing, helping people move off the streets and creating a better quality of life.</p><p>We create community. We help people learn to care for one another and experience the belonging and support that many have never had.</p><p>Our projects have a direct impact on Australians, with a purpose that reaches across generations. The actions we take today shape the outcomes in the future.</p><p>We are a team of passionate individuals united by a mission to help others through smart strategies. Our focus is both immediate and long term: helping people stay in their family homes during financial crisis, and using profits to create safe, supportive places for others to live.</p></div></section>
<section class="story-section">${video()}<div class="story-copy"><p class="eyebrow rose">A personal introduction</p><h2>Our story.<br>In our own words.</h2><p class="section-copy">A space for the story behind L&L Global: the experiences that shaped our purpose and our commitment to Australian communities.</p><p class="small">Our founder’s video will appear here soon.</p></div></section>
<section class="quote-section"><p class="eyebrow">A purpose that grew</p><p>“I used to think my purpose was helping people with their retirement savings. I've since discovered it is far far more impactful than that.”</p><span class="tiny-label" style="color:#c4beb6">Olivia Long</span></section><section class="section two-col"><div><p class="eyebrow rose">Our team</p><h2>Passionate people.<br>A shared mission.</h2></div><div class="section-copy"><p>Our team brings a determination to help others and a belief that thoughtful, smart strategies can turn resources into meaningful change.</p><p>We build more than housing. We create opportunities for friendship and help people learn to care for one another, including those who have never experienced a reliable circle of support. This is the purpose that brings us together.</p><a class="text-link" href="#/approach">How our purpose becomes action</a></div></section><section class="section"><p class="eyebrow rose">What guides us</p><h2>Humanity at the centre.</h2><div class="values"><div><h3>Generosity with purpose.</h3><p>Using what we can offer - time, resources, experience or connection - to respond to real needs.</p></div><div><h3>Dignity in every interaction.</h3><p>Seeing the person behind the circumstance and approaching every story with compassion and respect.</p></div><div><h3>A lasting perspective.</h3><p>Thinking beyond immediate relief to the opportunities we can help create for generations to come.</p></div></div></section>${cta()}`,
  projects: () =>
    `${heading("Our projects", "Practical care.<br>Lasting possibility.", "Our work starts with the community around us, the needs we hear and the opportunities we see to make a meaningful difference.")}<section class="section">${projectCards()}<div class="notice"><strong>Purpose, put into practice.</strong> Our work connects the family-home strategy with a wider ambition: using profits to develop safe, supportive housing communities. Individual project locations, stages and opportunities to get involved will be added here as they are confirmed.</div><div class="notice"><strong>Tax Deductible Giving.</strong> Via our partnership with Australian Philanthropic Services you are able to make a contribution and claim a tax deduction for your investment.</div></section><section class="quote-section"><p class="eyebrow">Our lens on impact</p><p>Respond to the need in front of us.<br>Consider the generations ahead.</p></section>${cta()}`,
  donate: () =>
    `${heading("Make a donation", "Turn generosity<br>into possibility.", "Support a vision for stronger Australian communities, greater stability and a future shaped by care.")}<section class="section donation-layout"><div><p class="eyebrow rose">A contribution with purpose</p><h2>Help make room<br>for a brighter future.</h2><p class="section-copy">Your willingness to give can help move our purpose forward. Our priorities are helping families remain in their homes, responding to community needs and supporting philanthropic endeavours in Australia.</p><ul class="donation-reasons"><li><strong>Stability today.</strong><span>A focus on the family home during financial crisis.</span></li><li><strong>Safe places to call home.</strong><span>A vision for housing estates that support women, children and men experiencing homelessness.</span></li><li><strong>Possibility for generations.</strong><span>A long-term view of the difference we hope to make.</span></li></ul></div><div class="donation-panel"><h2>Choose your contribution.</h2><p class="small">Explore an amount you would like to give.</p><div class="segmented" role="group" aria-label="Donation frequency"><button type="button" data-frequency="One-off" aria-pressed="true">One-off</button><button type="button" data-frequency="Monthly" aria-pressed="false">Monthly</button></div><div class="amounts" role="group" aria-label="Suggested donation amount"><button type="button" data-amount="50" aria-pressed="false">$50</button><button type="button" data-amount="100" aria-pressed="true">$100</button><button type="button" data-amount="250" aria-pressed="false">$250</button></div><label class="field"><span>Donation amount (AUD)</span><input id="donation-amount" type="number" min="1" max="10000000" step="0.01" value="100" inputmode="decimal" required></label><div class="notice"><strong>Online donations are opening soon.</strong><br>We are finalising our donation arrangements. No payment is collected on this website.</div><button id="donation-enquiry" class="button full-width" type="button">Enquire about giving $100</button><p class="note">This prepares an enquiry, not a payment or recurring commitment. Donation eligibility and any tax-deductible status will be confirmed before you give.</p></div></section>${cta()}`,
  contact: () =>
    `${heading("Contact us", "Good things begin<br>with a conversation.", "Have a question, a community need to share, or an idea for how we could work together? We would love to hear it.")}<section class="section contact-layout"><div><p class="eyebrow rose">Let’s connect</p><h2>Bring your purpose.<br>Share your possibility.</h2><p class="section-copy">We welcome conversations with individuals, businesses and organisations who share our passion for helping Australian communities.</p><div class="contact-details"><p class="eyebrow">Find Olivia online</p><div class="social-links" aria-label="Olivia Long’s social pages"><a href="mailto:LL.global@proton.me" target="_blank" rel="noopener noreferrer">LL.global@proton.me<span class="visually-hidden"> (opens in a new tab)</span></a><a href="https://www.youtube.com/@Livlongtalkinsuper" target="_blank" rel="noopener noreferrer">YouTube<span class="visually-hidden"> (opens in a new tab)</span></a><a href="https://www.instagram.com/livlongtalkinsuper/" target="_blank" rel="noopener noreferrer">Instagram<span class="visually-hidden"> (opens in a new tab)</span></a><a href="https://www.linkedin.com/in/olivia-long-91353a3/" target="_blank" rel="noopener noreferrer">LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a><span class="social-pending">Facebook · Coming soon</span></div><p class="eyebrow" style="margin-top:26px">Our focus</p><p>Australian communities<br>Philanthropy · Humanity · Legacy</p></div><p class="note">If your enquiry concerns financial hardship, please keep your initial message general. Do not include account numbers, identification documents or sensitive financial information.</p></div><form class="contact-form" id="contact-form"><div class="notice" style="margin-top:0"><strong>Prepare your enquiry.</strong> While our contact channel is being finalised, you can draft and download your message here. It will not be sent.</div><div class="form-grid"><label class="field"><span>Your name</span><input name="name" autocomplete="name" required maxlength="120"></label><label class="field"><span>Email address</span><input name="email" type="email" autocomplete="email" required maxlength="254"></label></div><label class="field"><span>What would you like to discuss?</span><select name="topic"><option>General enquiry</option><option>Keeping families at home</option><option>Donation enquiry</option><option>Partnership or collaboration</option><option>A community need</option><option>Start a cause</option></select></label><label class="field"><span>Your message</span><textarea name="message" rows="6" required maxlength="5000" placeholder="Tell us a little about what brings you here…"></textarea></label><label class="check-row"><input type="checkbox" name="acknowledgement" required><span>I understand this message is a draft and will not be sent. I have read the <a class="text-link" style="margin:0;padding:0" href="#/privacy">Privacy Policy</a>.</span></label><button class="button" type="submit">Prepare my enquiry</button><div id="form-result" class="form-result" hidden><h3>Your enquiry is ready.</h3><p class="small">Your message has not been sent. Save a copy until our contact details are available.</p><pre id="enquiry-preview"></pre><div class="actions"><button id="download-enquiry" type="button" class="button">Download enquiry</button><button id="copy-enquiry" type="button" class="button outline">Copy message</button></div></div></form></section>`,
  approach:
    () => `${heading("Our approach", "Smart strategies.<br>Human purpose.", "We connect a strategy for helping families remain at home with a broader mission: turning profits into safe housing and stronger communities.")}
<section class="section two-col"><div><p class="eyebrow rose">Keeping families at home</p><h2>A different way<br>to respond<br>to crisis.</h2></div><div class="section-copy"><p>Our approach is to purchase a family’s property and allow them to continue to live there, with the aim of helping them remain in their home through financial crisis.</p><p>This creates stability and provides income during extreme duress.</p><p>Our intent - to ensure they get the right financial advice to enable them to buy the property back 5 years down the track or when they are able.</p><p>Each arrangement needs to be assessed on its own circumstances. The property, finance, rent and occupancy terms — including costs, risks and any exit arrangements - must be clearly understood before anyone takes part.</p><div class="notice"><strong>Returns and outcomes are not guaranteed.</strong> Private capital investments can involve a higher risk of loss and restrictions on accessing funds. Independent legal and financial advice is essential before entering any arrangement.</div></div></section>
<section class="quote-section"><p class="eyebrow">The reason we do it</p><p>“Every Australian deserves a place they call home.”</p><span class="tiny-label" style="color:#c4beb6">Olivia Long</span></section>
<section class="section two-col"><div><p class="eyebrow rose">Profits with a purpose</p><h2>From financial strategy<br>to a warm bed<br>at night.</h2></div><div class="section-copy"><p>We use our profits to create direct impact in the community. Our housing vision includes developing estates for women and children, and for men experiencing homelessness - places designed to help people feel safe and supported.</p><p>A home is more than shelter. It is the opportunity to find friendship, rebuild confidence and belong to a community.</p><p>We believe money can be put to work with greater purpose: creating a better environment around us and giving more Australians a chance at stability.</p><a class="text-link" href="#/projects">Explore our projects and priorities</a></div></section>${cta()}`,
  partners:
    () => `${heading("Together, with purpose", "Our Valued Partners", "Meaningful impact starts with people and organisations who share a commitment to helping others.")}
<section class="section two-col"><div><p class="eyebrow rose">A shared commitment</p><h2>Different strengths.<br>One purpose.</h2></div><div class="section-copy"><p>Creating safe homes and stronger communities takes people willing to bring their experience, ideas, resources and care to a common goal.</p><p>We welcome conversations with individuals, businesses and organisations who want to help turn that shared purpose into real action for Australian communities.</p><a class="text-link" href="#/contact?topic=partners">Explore a partnership</a></div></section><section class="section partner-profiles"><p class="eyebrow rose">Partner profiles</p><h2>Meet the people<br>who share our purpose.</h2><div class="notice"><strong>Partner profiles coming soon.</strong><br>Names, logos and stories will appear here as partner details are confirmed.</div></section>${cta()}`,
  privacy:
    () => `${heading("Your information, treated with care", "Privacy Policy", "How L&L Global handles information when you visit this website and use its current features.")}<section class="section narrow privacy"><p class="policy-date">Last updated: 20 November 2026</p>
<h2>About this policy</h2><p>L&L Global (“we”, “us” or “our”) respects your privacy. This policy explains the information involved in visiting our website, preparing an enquiry and following our external links. It describes the website as it operates today; it does not describe a future payment, application or client-service system.</p>
<h2>Information you enter</h2><p>The enquiry tool asks for your name, email address, topic and message. These entries are used in your browser to prepare a draft. The current website does not send that draft to L&L Global, save it to a server or retain it in browser storage. Navigating away from the form or closing the page can clear your entries.</p><p>You may choose to copy your draft to your clipboard or download a text file. That copy is stored wherever your device or browser places it and is under your control. Delete it when you no longer need it, particularly on a shared device.</p><p>Please do not enter identity documents, bank details, account numbers, medical information or detailed financial circumstances. You can browse the site without completing the enquiry tool.</p>
<h2>Technical information and website hosting</h2><p>When you visit a website, its hosting and delivery providers may process technical information such as your IP address, browser and device details, the time of access and the pages or resources requested. This can be needed to deliver the website, protect the service and investigate technical issues.</p><p>This website is hosted through ChatGPT Sites. Privately shared versions may require sign-in, and the hosting provider manages access and related service information under its own policies. See the <a class="text-link" href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">OpenAI Privacy Policy</a>.</p>
<h2>Cookies, fonts and analytics</h2><p>We have not added advertising trackers, analytics tools or marketing cookies to this website. The hosting platform may use cookies or similar technologies for sign-in, security or service delivery.</p><p>The website loads fonts from Google Fonts. Your browser may connect to Google and provide technical connection information, such as your IP address and browser details, when loading those fonts. See <a class="text-link" href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener noreferrer">Google Fonts privacy information</a>. System fonts are used if the web fonts do not load.</p>
<h2>Donation information</h2><p>Online payment processing is not enabled. Selecting a donation amount or frequency only helps prepare an enquiry. We do not collect card details, debit an account, create a recurring donation or issue a donation receipt through this website. Before a payment service is introduced, we will update this policy to explain the provider and relevant handling of personal information.</p>
<h2>Social media and external websites</h2><p>Links to Olivia Long’s YouTube, Instagram and LinkedIn pages open external services. We use ordinary links rather than embedded social feeds or tracking widgets. If you follow a link, the destination service may collect information under its own privacy policy. A message you send through a social service is not covered by the browser-only draft feature described above.</p>
<h2>Use, sharing and overseas processing</h2><p>The draft enquiry tool does not transmit your entries to us or share them with third parties. Technical service information may be processed by the hosting and font providers described above for their service operations. Their infrastructure may operate outside Australia. We have not confirmed a country-by-country list of processing locations; consult their policies for current details.</p><p>We do not use the current website to build a marketing list or sell enquiry information. If direct enquiries, donations or applications are enabled later, we will explain what information is collected, why it is needed, who receives it and how long it is retained before those features are introduced.</p>
<h2>Security and retention</h2><p>Keep downloaded enquiries and copied text secure on your own device. Online services cannot be guaranteed to be completely secure. Because the draft tool does not submit information to us, we do not hold a server-side enquiry record from that tool. Hosting providers manage any technical records they hold according to their own retention and security practices.</p>
<h2>Access, correction and privacy concerns</h2><p>If L&L Global holds personal information about you through a separate interaction, you can ask about that information, request a correction or raise a privacy concern. Please identify the interaction, explain your request and provide a way to respond without including unnecessary sensitive information.</p><p>Our dedicated privacy contact details are still to be added. The Contact Us page currently prepares a draft only and does not send a request. Contact details will be published before direct enquiries or payments are enabled.</p><p>For guidance on Australian privacy rights and complaints, visit the <a class="text-link" href="https://www.oaic.gov.au/privacy" target="_blank" rel="noopener noreferrer">Office of the Australian Information Commissioner</a>. Where applicable, a privacy complaint should first be raised with the organisation involved before approaching the OAIC.</p>
<h2>Changes to this policy</h2><p>We will update this page as the website and its services develop. The date above shows when this version was last revised.</p><a class="text-link" href="#/contact">Contact Us</a></section>`,
};

const projectContent = {
  homes: `<p class="eyebrow rose">Our founding focus</p><h2 id="dialog-title">Keeping families at home.</h2><p>A financial crisis can place more than a property at risk. It can unsettle a family’s routines, sense of belonging and plans for the future.</p><p>Our approach combines a short-term property purchase under a vendor-finance arrangement with private capital investment, with the aim of helping a family remain in their home.</p><p>Returns and outcomes are not guaranteed. Every arrangement requires individual assessment and independent advice.</p><a class="text-link" href="#/approach">Read about our approach</a><p></p>${button("Ask about this initiative", "#/contact?topic=homes")}`,
  community: `<p class="eyebrow rose">Our housing vision</p><h2 id="dialog-title">A safe place to call home.</h2><p>We use profits from our work to create direct community impact. Our vision is to develop housing estates for women and children, and for men experiencing homelessness.</p><p>These communities are about more than a roof and a warm bed. They are about safety, support, friendship and the chance to feel that you belong.</p><p>Specific locations, development stages and ways to get involved will be shared as they are confirmed.</p>${button("Share a community need", "#/contact?topic=community")}`,
  partners: `<p class="eyebrow rose">An invitation to collaborate</p><h2 id="dialog-title">Purpose, multiplied.</h2><p>Meaningful change can begin when people bring their different strengths to a shared purpose.</p><p>We welcome conversations with individuals, businesses and philanthropic organisations interested in contributing resources, experience, ideas or connections to support Australian communities.</p>${button("Discuss a partnership", "#/contact?topic=partners")}`,
};
let frequency = "One-off";
let enquiryText = "";
const formatAUD = (amount) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 2,
  })
    .format(amount)
    .replace(/\.00$/, "");
function toast(message) {
  const el = document.querySelector(".toast");
  el.textContent = message;
  el.classList.add("visible");
  setTimeout(() => el.classList.remove("visible"), 3500);
}
function render() {
  const raw = location.hash.replace(/^#\/?/, "");
  const [path, query] = raw.split("?");
  const page = path || "home";
  const valid = Object.hasOwn(pages, page);
  main.innerHTML = valid
    ? pages[page]()
    : `${heading("Page not found", "Let’s find your way.", "The page you requested is not available.")}<section class="section">${button("Return home", "#/")}</section>`;
  document.title = `${{ home: "", why: "Our Why - ", projects: "Our Projects - ", partners: "Our Valued Partners - ", approach: "Our Approach - ", donate: "Make a Donation - ", contact: "Contact Us - ", privacy: "Privacy Policy - " }[page] || ""}L&L Global`;
  document.querySelectorAll("#navigation a").forEach((a) => {
    if (a.getAttribute("href") === `#/${path}`)
      a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  document.querySelector("#navigation").classList.remove("open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  document.querySelector("#project-dialog").close();
  if (page === "donate") bindDonation();
  if (page === "contact") bindContact(new URLSearchParams(query || ""));
  window.scrollTo({ top: 0, behavior: "instant" });
}
function bindDonation() {
  frequency = "One-off";
  const amount = document.querySelector("#donation-amount");
  const enquiry = document.querySelector("#donation-enquiry");
  function update() {
    let n = Number(amount.value);
    enquiry.textContent =
      n > 0
        ? `Enquire about giving ${formatAUD(n)}${frequency === "Monthly" ? " monthly" : ""}`
        : "Enquire about giving";
    document
      .querySelectorAll("[data-amount]")
      .forEach((b) =>
        b.setAttribute("aria-pressed", String(Number(b.dataset.amount) === n)),
      );
  }
  document.querySelectorAll("[data-frequency]").forEach((b) =>
    b.addEventListener("click", () => {
      frequency = b.dataset.frequency;
      document
        .querySelectorAll("[data-frequency]")
        .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      update();
    }),
  );
  document.querySelectorAll("[data-amount]").forEach((b) =>
    b.addEventListener("click", () => {
      amount.value = b.dataset.amount;
      update();
    }),
  );
  amount.addEventListener("input", update);
  enquiry.addEventListener("click", () => {
    if (!amount.reportValidity()) return;
    location.hash = `/contact?topic=donation&amount=${encodeURIComponent(amount.value)}&frequency=${encodeURIComponent(frequency)}`;
  });
}
function bindContact(params) {
  const form = document.querySelector("#contact-form");
  const topic = {
    homes: "Keeping families at home",
    community: "A community need",
    partners: "Partnership or collaboration",
    cause: "Start a cause",
    donation: "Donation enquiry",
  }[params.get("topic")];
  if (topic) form.elements.topic.value = topic;
  if (topic === "Start a cause")
    form.elements.message.placeholder =
      "Tell us about the cause you would like to start, the community it could help and the support you are looking for…";
  const amount = Number(params.get("amount"));
  if (
    topic === "Donation enquiry" &&
    Number.isFinite(amount) &&
    amount > 0 &&
    amount <= 10000000
  ) {
    form.elements.message.value = `I would like to enquire about making a ${params.get("frequency") === "Monthly" ? "monthly" : "one-off"} contribution of ${formatAUD(amount)} to L&L Global. Please share the available donation arrangements.`;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    enquiryText = `L&L Global enquiry\n\nName: ${form.elements.name.value.trim()}\nEmail: ${form.elements.email.value.trim()}\nTopic: ${form.elements.topic.value}\n\n${form.elements.message.value.trim()}`;
    document.querySelector("#enquiry-preview").textContent = enquiryText;
    document.querySelector("#form-result").hidden = false;
    document
      .querySelector("#form-result")
      .scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  document.querySelector("#download-enquiry").addEventListener("click", () => {
    const url = URL.createObjectURL(
      new Blob([enquiryText], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "L&L-Global-Enquiry.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("Enquiry downloaded. Your message has not been sent.");
  });
  document
    .querySelector("#copy-enquiry")
    .addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(enquiryText);
        toast("Message copied. Your enquiry has not been sent.");
      } catch {
        toast("Please select and copy the message, or download it.");
      }
    });
}
document.querySelector(".skip").addEventListener("click", (event) => {
  event.preventDefault();
  main.focus();
  main.scrollIntoView({ block: "start" });
});
document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const open = event.currentTarget.getAttribute("aria-expanded") !== "true";
  event.currentTarget.setAttribute("aria-expanded", String(open));
  document.querySelector("#navigation").classList.toggle("open", open);
});
document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-project]");
  if (trigger) {
    const dialog = document.querySelector("#project-dialog");
    document.querySelector("#dialog-body").innerHTML =
      projectContent[trigger.dataset.project];
    dialog.showModal();
  }
});
document
  .querySelector(".dialog-close")
  .addEventListener("click", () =>
    document.querySelector("#project-dialog").close(),
  );
document.querySelector("#project-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    const r = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      event.currentTarget.close();
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
window.addEventListener("hashchange", () => {
  render();
  main.focus({ preventScroll: true });
});
render();
