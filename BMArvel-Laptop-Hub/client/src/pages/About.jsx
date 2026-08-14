import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-hero-content">
          <span>ABOUT BMARVEL</span>

          <h1>
            Technology You Can
            <br />
            Trust.
          </h1>

          <p>
            BMArvel Laptop Hub provides quality laptops,
            reliable computer services, and practical
            technology solutions for students, professionals,
            businesses, and everyday users.
          </p>
        </div>
      </section>

      <section className="about-story">

        <div className="about-story-text">
          <span>OUR STORY</span>

          <h2>More Than Just a Laptop Store</h2>

          <p>
            BMArvel Laptop Hub was created to make quality
            technology more accessible and affordable.
          </p>

          <p>
            From laptop sales and system troubleshooting
            to Windows installation, repairs, and upgrades,
            our goal is to provide dependable solutions that
            help our customers work, learn, and stay connected.
          </p>

          <p>
            We believe technology should be simple,
            reliable, and accessible to everyone.
          </p>
        </div>

        <div className="about-stats">

          <div className="stat-card">
            <strong>Quality</strong>
            <span>Products & Services</span>
          </div>

          <div className="stat-card">
            <strong>Reliable</strong>
            <span>Customer Support</span>
          </div>

          <div className="stat-card">
            <strong>Affordable</strong>
            <span>Technology Solutions</span>
          </div>

        </div>

      </section>

      <section className="about-values">

        <div className="about-heading">
          <span>WHAT WE STAND FOR</span>

          <h2>Why Choose BMArvel?</h2>
        </div>

        <div className="values-grid">

          <div className="value-card">
            <div className="value-icon">💻</div>
            <h3>Quality Technology</h3>
            <p>
              We focus on providing dependable laptops
              and technology products.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🛠️</div>
            <h3>Expert Support</h3>
            <p>
              We help customers solve computer problems
              and keep their systems running properly.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">💰</div>
            <h3>Fair Pricing</h3>
            <p>
              We aim to offer practical technology
              solutions at affordable prices.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Customer First</h3>
            <p>
              Your satisfaction and trust are central
              to everything we do.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;