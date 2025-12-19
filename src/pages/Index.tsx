import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simple Hero */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#3D5467' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-yellow-400 text-sm font-semibold uppercase mb-3">
              Founded by Cycle Logic
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Colombia's Ultimate
              <br />
              <span className="text-yellow-400">Cycling Experience</span>
            </h1>
            
            <p className="text-xl mb-8">
              Legendary Andes climbs • Authentic culture • Exceptional food
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/booking')}
                className="px-8 py-4 text-lg font-semibold"
                style={{ backgroundColor: '#F2C94C', color: '#3D5467' }}
              >
                View Tour Dates
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-white text-lg font-semibold"
                style={{ color: '#3D5467' }}
              >
                Get In Touch
              </button>
            </div>

            <div className="mt-8 text-sm">
              11 Days • $5,600 CAD • Max 12 Riders
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Retreat */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#3D5467' }}>
              Your Mountain Retreat
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-96 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Property Photo Here</p>
              </div>
              
              <div>
                <h3 className="text-3xl font-semibold mb-4" style={{ color: '#3D5467' }}>
                  Surrounded by Nature
                </h3>
                <p className="text-lg mb-6" style={{ color: '#4B5563' }}>
                  Nestled in the mountains outside Medellín, surrounded by coffee plantations and pine forests.
                </p>
                <ul className="space-y-3">
                  <li style={{ color: '#4B5563' }}>✓ Stunning mountain views</li>
                  <li style={{ color: '#4B5563' }}>✓ Fresh mountain air</li>
                  <li style={{ color: '#4B5563' }}>✓ Perfect base for exploring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Days Look Like */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#3D5467' }}>
            What Your Days Look Like
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {/* The Riding */}
            <div className="bg-white p-8 shadow-lg" style={{ borderLeft: '4px solid #8B6F47' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#3D5467' }}>
                The Riding
              </h3>
              <p style={{ color: '#4B5563' }}>
                60-100km daily with 1,000-2,000m of climbing through the Andes and coffee country. 
                Roads where pro teams train—challenging, stunning, fully supported.
              </p>
            </div>

            {/* The Culture */}
            <div className="bg-white p-8 shadow-lg" style={{ borderLeft: '4px solid #8B6F47' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#3D5467' }}>
                The Culture
              </h3>
              <p style={{ color: '#4B5563' }}>
                Coffee farm visits with families who've been growing for generations. Traditional meals in home kitchens.
              </p>
            </div>

            {/* The Food */}
            <div className="bg-white p-8 shadow-lg" style={{ borderLeft: '4px solid #8B6F47' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#3D5467' }}>
                The Food
              </h3>
              <p style={{ color: '#4B5563' }}>
                Bandeja paisa after hard rides. Fresh trout from mountain streams. Colombian coffee that redefines what you know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white" style={{ backgroundColor: '#3D5467' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Colombia?
            </h2>
            <p className="text-xl mb-10">
              Three departures in January-February 2025. Limited to 12 riders per tour. 
              $5,600 CAD includes accommodation, all meals, and guided tours.
            </p>
            <button 
              onClick={() => navigate('/booking')}
              className="px-10 py-4 text-lg font-semibold"
              style={{ backgroundColor: '#F2C94C', color: '#3D5467' }}
            >
              View Dates & Book Your Spot
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;