import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const divisions = [
    {
      title: "Agro & Makhana",
      link: "/agro",
      bgImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Premium bulk agricultural supply, specializing in Makhana and export-grade crops."
    },
    {
      title: "Real Estate",
      link: "/real-estate",
      bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Commercial spaces, premium residences, and high-yield property ventures."
    },
    {
      title: "Import & Export",
      link: "/trading",
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Global logistics connecting local manufacturing to worldwide demands."
    },
    {
      title: "Financial Loans",
      link: "/loan",
      bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Empowering businesses and farmers with accessible structural credit lines."
    }
  ];

  return (
    <div className="home-page corporate-portal">
      <section className="hero-corporate">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>NSP Group</h1>
          <p>Global Leaders in Agro-Trade, Real Estate, Logistics & Finance.</p>
        </div>
      </section>

      <section className="divisions-sec container">
        <div className="section-header center">
          <h2>Our Dedicated Verticals</h2>
          <p className="subtitle">Discover our portfolio of specialized business divisions.</p>
        </div>
        
        <div className="divisions-grid">
          {divisions.map((div, i) => (
            <Link to={div.link} key={i} className="division-card">
              <div className="div-bg" style={{backgroundImage: `url(${div.bgImage})`}}></div>
              <div className="div-content">
                <h3>{div.title}</h3>
                <p>{div.desc}</p>
                <span className="div-btn">Explore Division &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
