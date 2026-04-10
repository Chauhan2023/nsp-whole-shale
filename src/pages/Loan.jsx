import './Loan.css';

const Loan = () => {
  return (
    <div className="loan-page">
      <div className="loan-hero">
        <div className="container">
          <div className="loan-hero-content">
            <h1>Financial Solutions for Growth</h1>
            <p>Flexible business loans, agricultural credit, and structural funding to accelerate your enterprise.</p>
            <button className="btn-loan-primary">Apply Now</button>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="loan-features">
          <div className="loan-feat-card">
            <div className="lf-icon">🏢</div>
            <h3>Business Expansion</h3>
            <p>Scale your operations with unsecured lines of credit up to ₹50 Cr at competitive interest rates.</p>
          </div>
          <div className="loan-feat-card">
            <div className="lf-icon">🚜</div>
            <h3>Agro Equipment</h3>
            <p>Specialized lending programs for acquiring heavy agricultural machinery and post-harvest infrastructure.</p>
          </div>
          <div className="loan-feat-card">
            <div className="lf-icon">🏗️</div>
            <h3>Real Estate Financing</h3>
            <p>Construction and structural loans to kickstart commercial and premium residential property development.</p>
          </div>
        </div>

        <div className="process-section">
          <h2>Application Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-num">1</div>
              <h4>Submit Details</h4>
              <p>Fill out our quick online application form with basic business metrics.</p>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-num">2</div>
              <h4>Fast Approval</h4>
              <p>Our financial analysts review and approve viable profiles within 48 hours.</p>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-num">3</div>
              <h4>Instant Disbursal</h4>
              <p>Funds are successfully credited to your business account to begin operations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
