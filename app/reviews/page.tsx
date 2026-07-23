import type { Metadata } from "next";
import reviews from "../../content/reviews.json";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read client reviews for Jupiter Premier Massage & Bodywork, serving Jupiter, Tequesta, Palm Beach Gardens, Juno Beach, and Hobe Sound.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Jupiter Premier home">
          <img
            src="/images/jupiter-premier-logo-dark.png"
            alt="Jupiter Premier Massage and Bodywork"
            width="1254"
            height="1254"
          />
          <span className="brand-name" aria-hidden="true">
            <strong>Jupiter Premier</strong>
            <small>Massage &amp; Bodywork</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/#about">About Us</a>
          <a href="/reviews" aria-current="page">Reviews</a>
          <a className="button button-small" href="/#booking">Book Now</a>
        </nav>
        <div className="mobile-actions">
          <a className="mobile-book" href="/#booking">Book Now</a>
          <details className="mobile-nav">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="/">Home</a>
              <a href="/#services">Services</a>
              <a href="/#about">About Us</a>
              <a href="/reviews" aria-current="page">Reviews</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="reviews-page">
        <div className="reviews-page-intro">
          <div className="section-kicker light"><span>Client stories</span> Reviews</div>
          <h1>Care you can feel.<br /><em>Words you can trust.</em></h1>
          <p>
            Read what clients say about the thoughtful, professional care they
            received from Nick and Amber.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <figure className="review-card" key={`${review.author}-${index}`}>
              <div className="stars" aria-label="Five star review">★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>— {review.author}</figcaption>
            </figure>
          ))}
        </div>

        <div className="reviews-cta">
          <h2>Ready to feel the<br /><em>difference?</em></h2>
          <p>Choose a 60- or 90-minute session tailored to your needs.</p>
          <a className="button" href="/#booking">Book Your Session</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/images/jupiter-premier-logo-dark.png" alt="Jupiter Premier Massage and Bodywork" width="1254" height="1254" loading="lazy" />
          <p>Relax. Recover. Recharge.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="/">Home</a><a href="/#services">Services</a><a href="/#about">About Us</a><a href="/reviews">Reviews</a><a href="/#booking">Book Now</a>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <a href="/#services">Relaxation Massage</a><a href="/#services">Pain Relief Massage</a><a href="/#services">Hybrid Massage</a>
        </div>
        <div className="footer-column">
          <h3>Visit</h3>
          <p>Serving Jupiter, Tequesta,<br />Palm Beach Gardens, Juno Beach,<br />and Hobe Sound, Florida</p>
          <p>Phone and email coming soon</p>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Jupiter Premier Massage &amp; Bodywork</span><span>Professional therapeutic massage in Jupiter, FL</span></div>
      </footer>
    </main>
  );
}
