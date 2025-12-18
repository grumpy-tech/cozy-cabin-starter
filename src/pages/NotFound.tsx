import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, MapPin } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-muted to-background p-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <MapPin className="h-24 w-24 text-primary mx-auto mb-4 opacity-50" />
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            This Road Doesn't Exist
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            (Unlike Our Colombian Routes)
          </p>
          <p className="text-muted-foreground">
            Looks like you've taken a wrong turn—which is fine on a bike, less fun on a website. 
            Let's get you back on track.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="gap-2">
              <Home className="h-5 w-5" />
              Return to Homepage
            </Button>
          </Link>
          <Link to="/booking">
            <Button variant="outline" size="lg">
              View Tour Dates
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>Lost? We're here to help:</p>
          <p className="mt-2">
            <a href="mailto:pedaltheworld@gmail.com" className="text-primary hover:underline">
              pedaltheworld@gmail.com
            </a>
            {" • "}
            <a href="tel:+12503744515" className="text-primary hover:underline">
              250-374-4515
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
