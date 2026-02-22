const Process = () => {
    return (
        <section className="company-insights">
            <div className="container">
                {/* HOW WE WORK */}
                <div className="process-area">
                    <header className="section-header">
                        <h2>How We Work</h2>
                        <p>A structured approach designed for quality, reliability, and scale.</p>
                    </header>

                    <div className="process-grid">
                        <div className="process-step">
                            <span className="step-number">01</span>
                            <h3>Product Sourcing</h3>
                            <p>Partnering with trusted manufacturers and global suppliers.</p>
                        </div>

                        <div className="process-step">
                            <span className="step-number">02</span>
                            <h3>Quality Inspection</h3>
                            <p>Every product is evaluated to meet professional standards.</p>
                        </div>

                        <div className="process-step">
                            <span className="step-number">03</span>
                            <h3>Secure Storage</h3>
                            <p>Inventory managed in controlled, organized environments.</p>
                        </div>

                        <div className="process-step">
                            <span className="step-number">04</span>
                            <h3>Delivery & Support</h3>
                            <p>Efficient logistics backed by responsive customer support.</p>
                        </div>
                    </div>
                </div>

                {/* INDUSTRIES WE SERVE */}
                <div className="industries-area">
                    <header className="section-header">
                        <h2>Industries We Serve</h2>
                        <p>Supporting professionals across multiple sectors.</p>
                    </header>

                    <div className="industries-grid">
                        <div className="industry-card">
                            <h3>Construction</h3>
                            <p>Heavy-duty tools built for demanding site conditions.</p>
                        </div>

                        <div className="industry-card">
                            <h3>Manufacturing</h3>
                            <p>Precision tools for production and assembly lines.</p>
                        </div>

                        <div className="industry-card">
                            <h3>Automotive</h3>
                            <p>Reliable equipment for maintenance and repair workshops.</p>
                        </div>

                        <div className="industry-card">
                            <h3>Industrial Maintenance</h3>
                            <p>Tools designed for continuous operational reliability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
