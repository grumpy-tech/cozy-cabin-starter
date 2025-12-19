const Index = () => {
  const handleBooking = () => {
    window.location.href = '/booking';
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1e293b'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center', color: 'white' }}>
          <p style={{ color: '#fbbf24', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Founded by Cycle Logic
          </p>
          
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Colombia's Ultimate
            <br />
            <span style={{ color: '#fbbf24' }}>Cycling Experience</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Legendary Andes climbs • Authentic culture • Exceptional food
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={handleBooking}
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#fbbf24',
                color: '#1e293b',
                fontSize: '1.125rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              View Tour Dates
            </button>
            <button 
              onClick={handleContact}
              style={{
                padding: '1rem 2rem',
                backgroundColor: 'white',
                color: '#1e293b',
                fontSize: '1.125rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Get In Touch
            </button>
          </div>

          <div style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
            11 Days • $5,600 CAD • Max 12 Riders
          </div>
        </div>
      </section>

      {/* Mountain Retreat */}
      <section style={{ padding: '5rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', color: '#1e293b' }}>
            Your Mountain Retreat
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div style={{ height: '400px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>Property Photo</p>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem', color: '#1e293b' }}>
                Surrounded by Nature
              </h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#4b5563', marginBottom: '1.5rem' }}>
                Nestled in the mountains outside Medellín, surrounded by coffee plantations and pine forests.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem', color: '#4b5563' }}>✓ Stunning mountain views</li>
                <li style={{ marginBottom: '0.75rem', color: '#4b5563' }}>✓ Fresh mountain air</li>
                <li style={{ color: '#4b5563' }}>✓ Perfect base for exploring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Days Look Like */}
      <section style={{ padding: '5rem 1rem', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', color: '#1e293b' }}>
            What Your Days Look Like
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ backgroundColor: 'white', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1e293b' }}>
                The Riding
              </h3>
              <p style={{ color: '#4b5563' }}>
                60-100km daily with 1,000-2,000m of climbing. Roads where pro teams train.
              </p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1e293b' }}>
                The Culture
              </h3>
              <p style={{ color: '#4b5563' }}>
                Coffee farm visits, market explorations, traditional meals in home kitchens.
              </p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1e293b' }}>
                The Food
              </h3>
              <p style={{ color: '#4b5563' }}>
                Bandeja paisa, fresh trout, Colombian coffee that redefines what you know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1rem', backgroundColor: '#1e293b', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Ready to Experience Colombia?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Three departures in January-February 2025. $5,600 CAD includes everything.
          </p>
          <button 
            onClick={handleBooking}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#fbbf24',
              color: '#1e293b',
              fontSize: '1.125rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            View Dates & Book Your Spot
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;