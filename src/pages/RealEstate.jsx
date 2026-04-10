import './RealEstate.css';

const RealEstate = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Commercial Hub",
      location: "Downtown Business District",
      price: "₹15 Cr",
      sqft: "12,000",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Premium Sea-view Villa",
      location: "Coastal Residences",
      price: "₹8.5 Cr",
      sqft: "4,500",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Industrial Warehousing",
      location: "Logistics Park, Sector 44",
      price: "₹22 Cr",
      sqft: "45,000",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="realestate-page">
      <div className="re-hero">
        <div className="container">
          <h1>Real Estate & Properties</h1>
          <p>Building the future with premium commercial and residential acquisitions.</p>
          <button className="btn-re-primary">Explore Portfolio</button>
        </div>
      </div>

      <div className="container py-5">
        <div className="re-section-title">
          <h2>Featured Properties</h2>
          <span className="re-line"></span>
        </div>

        <div className="properties-grid">
          {properties.map(prop => (
            <div key={prop.id} className="property-card">
              <div className="property-img">
                <img src={prop.image} alt={prop.title} />
                <span className="prop-price">{prop.price}</span>
              </div>
              <div className="property-details">
                <h3>{prop.title}</h3>
                <p className="prop-location">📍 {prop.location}</p>
                <p className="prop-sqft">📐 {prop.sqft} Sq.Ft.</p>
                <button className="btn-re-outline">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
