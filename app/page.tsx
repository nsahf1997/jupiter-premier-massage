import reviews from "../content/reviews.json";

const BOOKING_URL = "#booking";
const SITE_URL = "https://jupiter-premier-massage.ambermwomack.chatgpt.site";

const serviceAreas = [
  "Jupiter",
  "Tequesta",
  "Palm Beach Gardens",
  "Juno Beach",
  "Hobe Sound",
];

function structuredData() {
  return [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Jupiter Premier Massage & Bodywork",
    alternateName: "Jupiter Premier Massage",
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: "Jupiter Premier Massage & Bodywork",
    url: SITE_URL,
    image: `${SITE_URL}/og.png`,
    logo: `${SITE_URL}/images/jupiter-premier-logo-dark.png`,
    description: "Personalized therapeutic massage in Jupiter, Florida for relaxation, pain relief, mobility, and athletic recovery.",
    priceRange: "$100-$175",
    areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
    knowsAbout: [
      "Relaxation massage",
      "Pain relief massage",
      "Sports massage",
      "Neuromuscular therapy",
      "Deep tissue massage",
      "Craniosacral therapy",
      "Athletic recovery",
    ],
    employee: [
      { "@type": "Person", name: "Nick Sahf", jobTitle: "Licensed Massage Therapist" },
      { "@type": "Person", name: "Amber Womack", jobTitle: "Licensed Massage Therapist" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Massage therapy services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: "Jupiter, Florida",
          provider: { "@id": `${SITE_URL}/#business` },
        },
      })),
    },
  },
  ];
}

const concerns = [
  "Neck and shoulder tension",
  "Low-back discomfort",
  "Headaches related to muscular tension",
  "Hip tightness",
  "Restricted movement",
  "Desk-related tension",
  "Athletic recovery",
  "General stress and muscular fatigue",
];

const services = [
  {
    number: "01",
    title: "Relaxation Massage",
    eyebrow: "Restore your baseline",
    description:
      "A calming, full-body session designed to ease muscular tension, settle the nervous system, and create space to recharge—ideal when you want to slow down, reset, and leave feeling restored.",
    focus: ["Stress reduction", "Full-body relaxation", "Muscular fatigue"],
    pricing: [{ duration: "60 minutes", price: "$100" }, { duration: "90 minutes", price: "$145" }],
  },
  {
    number: "02",
    title: "Hybrid Massage",
    eyebrow: "The best of both worlds",
    description:
      "A balanced session blending full-body relaxation with focused therapeutic work for areas that need extra attention—ideal for unwinding while addressing specific tension or soreness.",
    focus: ["Relaxation", "Focused attention", "Everyday recovery"],
    pricing: [{ duration: "60 minutes", price: "$115" }, { duration: "90 minutes", price: "$160" }],
  },
  {
    number: "03",
    title: "Pain Relief Massage",
    eyebrow: "Move with more ease",
    description:
      "A therapeutic session using deeper pressure and targeted techniques to address stubborn muscular tension, limited mobility, overuse, and the demands of an active lifestyle.",
    focus: ["Targeted tension", "Mobility support", "Athletic recovery"],
    pricing: [{ duration: "60 minutes", price: "$130" }, { duration: "90 minutes", price: "$175" }],
  },
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()).replace(/</g, "\\u003c") }}
      />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jupiter Premier home">
          <img
            src="/images/jupiter-premier-logo-dark.png"
            alt="Jupiter Premier Massage and Bodywork"
            width="1254"
            height="1254"
          />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a className="button button-small" href={BOOKING_URL}>Book Now</a>
        </nav>
        <div className="mobile-actions">
          <a className="mobile-book" href={BOOKING_URL}>Book Now</a>
          <details className="mobile-nav">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Therapeutic massage in Jupiter, Florida</p>
          <h1>Relax. Recover.<br /><em>Recharge.</em></h1>
          <p className="hero-lede">
            Premium massage and bodywork tailored to your goals, whether you’re
            seeking stress relief, pain relief, or ongoing wellness.
          </p>
          <div className="hero-actions">
            <a className="button" href={BOOKING_URL}>Book Your Session</a>
            <a className="text-link" href="#services">Explore services <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <img
            src="/images/jupiter-premier-logo-dark.png"
            alt=""
            width="1254"
            height="1254"
          />
        </div>
      </section>

      <section className="purpose section-light">
        <div className="section-kicker"><span>01</span> Why Jupiter Premier</div>
        <div className="purpose-grid">
          <h2>Massage with<br /><em>a purpose.</em></h2>
          <div>
            <p className="large-copy">
              Your session should do more than follow a routine. It should meet
              you where you are and support where you want to go.
            </p>
            <p className="large-copy">
              At Jupiter Premier, thoughtful assessment and skilled therapeutic
              work come together in a calm, professional setting. Every session
              is shaped around your preferences, comfort, and goals.
            </p>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div className="section-kicker light"><span>02</span> Services</div>
          <h2>Focused care.<br /><em>Meaningful results.</em></h2>
          <p>Choose relaxation, focused pain relief, or a balanced blend of both.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-topline">
                <span>{service.number}</span>
                <span>60 or 90 minutes</span>
              </div>
              <p className="card-eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.focus.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="service-pricing" aria-label={`${service.title} pricing`}>
                {service.pricing.map((option) => (
                  <div key={option.duration}><span>{option.duration}</span><strong>{option.price}</strong></div>
                ))}
              </div>
              <a href={BOOKING_URL}>Book this service <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section-light">
        <div className="section-kicker"><span>03</span> Our approach</div>
        <div className="approach-grid">
          <div className="approach-sticky">
            <p className="eyebrow dark">Therapeutic care, thoughtfully delivered</p>
            <h2>Built around<br /><em>your body.</em></h2>
          </div>
          <div className="approach-list">
            <article><span>01</span><div><h3>Listen first</h3><p>We begin with your goals, preferences, and how you’re feeling that day—without collecting sensitive medical information online.</p></div></article>
            <article><span>02</span><div><h3>Customize the work</h3><p>Pressure, pace, techniques, and areas of focus are adapted throughout your session rather than dictated by a rigid routine.</p></div></article>
            <article><span>03</span><div><h3>Support what matters</h3><p>Sessions may focus on pain relief, improved mobility, stress reduction, athletic recovery, or simply helping you feel more at ease.</p></div></article>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="team-heading">
          <div className="section-kicker light"><span>04</span> Our team</div>
          <h2>Experience meets<br /><em>intention.</em></h2>
          <p>Meet the people behind the personalized care at Jupiter Premier.</p>
        </div>
        <div className="team-grid">
          <article className="team-card team-card-featured">
            <div className="team-photo">
              <img
                src="/images/owner-headshot.png"
                alt="Nick Sahf, Licensed Massage Therapist"
                width="500"
                height="375"
                loading="lazy"
              />
            </div>
            <div className="team-copy">
              <p className="card-eyebrow">Licensed Massage Therapist</p>
              <h3>Nick Sahf</h3>
              <p>Nick has over six years of experience helping clients reduce pain, improve mobility, and feel their best through personalized therapeutic bodywork.</p>
              <p>He specializes in neuromuscular therapy, sports massage, craniosacral therapy, and Esalen®-inspired massage. As a former gymnast and active grappling practitioner, he brings a deep understanding of movement, recovery, and athletic performance to every session.</p>
              <a className="text-link gold" href={BOOKING_URL}>Work with Nick <span aria-hidden="true">→</span></a>
            </div>
          </article>
          <article className="team-card team-card-coming-soon">
            <div className="team-photo team-photo-secondary">
              <img
                src="/images/amber-womack.jpg"
                alt="Amber Womack, Licensed Massage Therapist"
                width="2316"
                height="3088"
                loading="lazy"
              />
            </div>
            <div className="team-copy">
              <p className="card-eyebrow">Licensed Massage Therapist</p>
              <h3>Amber Womack</h3>
              <p>Amber is passionate about helping clients feel their best through thoughtful, individualized care. With a background in psychology and over six years of experience as a massage therapist, she takes a holistic approach that recognizes the connection between physical and emotional well-being.</p>
              <p>Amber is dedicated to creating a welcoming, relaxing environment where clients can find relief from pain, reduce stress, and support their overall health and recovery.</p>
              <a className="text-link gold" href={BOOKING_URL}>Work with Amber <span aria-hidden="true">→</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="concerns section-light">
        <div className="section-heading compact">
          <div className="section-kicker"><span>05</span> Common reasons clients visit</div>
          <h2>What can we<br /><em>work on?</em></h2>
        </div>
        <div className="concern-list">
          {concerns.map((concern, index) => (
            <div key={concern}><span>{String(index + 1).padStart(2, "0")}</span><p>{concern}</p><b aria-hidden="true">↗</b></div>
          ))}
        </div>
        <p className="disclaimer">Massage therapy is not a substitute for medical care, diagnosis, or treatment. Individual experiences vary.</p>
      </section>

      <section className="reviews" aria-labelledby="reviews-heading">
        <div className="section-kicker light"><span>06</span> Client reviews</div>
        <div className="review-heading">
          <h2 id="reviews-heading">Trusted by clients.<br /><em>Felt in every session.</em></h2>
          <p>Real words from people who value thoughtful, professional bodywork.</p>
        </div>
        <div className="review-track">
          {reviews.map((review, index) => (
            <figure className="review-card" key={`${review.author}-${index}`}>
              <div className="stars" aria-label="Five star review">★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>— {review.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="booking" id="booking">
        <div className="booking-mark" aria-hidden="true">✦</div>
        <p className="eyebrow">Your next session starts here</p>
        <h2>Move better. Feel better.<br /><em>Live better.</em></h2>
        <p>Choose a 60- or 90-minute session and make time for the care your body has been asking for.</p>
        <a className="button" href={BOOKING_URL} aria-label="Booking link coming soon">Book Your Session</a>
        <small>Online booking link coming soon.</small>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/images/jupiter-premier-logo-dark.png" alt="Jupiter Premier Massage and Bodywork" width="1254" height="1254" loading="lazy" />
          <p>Relax. Recover. Recharge.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#home">Home</a><a href="#services">Services</a><a href="#about">About Us</a><a href={BOOKING_URL}>Book Now</a>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <a href="#services">Relaxation Massage</a><a href="#services">Hybrid Massage</a><a href="#services">Pain Relief Massage</a>
        </div>
        <div className="footer-column">
          <h3>Visit</h3>
          <p>Serving Jupiter, Florida<br />and surrounding communities</p>
          <p>Phone and email coming soon</p>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Jupiter Premier Massage &amp; Bodywork</span><span>Professional therapeutic massage in Jupiter, FL</span></div>
      </footer>
    </main>
  );
}
