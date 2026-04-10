import './Trading.css';

const Trading = () => {
  return (
    <div className="trading-page">
      <div className="trading-hero">
        <div className="container text-center">
          <h1>Trading, Import & Export</h1>
          <p>Global logistics and sourcing network. Connecting manufacturers to markets worldwide.</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="trading-grid">
          <div className="trade-card">
            <div className="trade-icon">⚓</div>
            <h3>Global Import Sourcing</h3>
            <p>We source raw materials and industrial goods directly from primary markets across Asia, Europe, and the Americas.</p>
          </div>
          
          <div className="trade-card">
            <div className="trade-icon">✈️</div>
            <h3>Export Distribution</h3>
            <p>Our robust logistics chain ensures local manufacturers can distribute their goods globally with zero friction.</p>
          </div>
          
          <div className="trade-card">
            <div className="trade-icon">📦</div>
            <h3>Customs & Compliance</h3>
            <p>End-to-end clearing and freight forwarding services. We handle the paperwork so you can focus on trading.</p>
          </div>
        </div>

        <div className="trade-network">
          <div className="trade-image">
            <img src="https://images.unsplash.com/photo-1541887085-3beea217b165?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Shipping port" />
          </div>
          <div className="trade-content">
            <h2>Our Global Network</h2>
            <p>Operating across 4 continents with active trade routes navigating millions of tons of cargo annually.</p>
            <ul>
              <li><strong>Major Hubs:</strong> Dubai, Singapore, Rotterdam, Mumbai</li>
              <li><strong>Fleet:</strong> Sea-route freighters & intercontinental airways</li>
            </ul>
            <button className="btn-trade">Partner With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
