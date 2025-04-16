
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Building, MapPin, Hotel, Plane } from "lucide-react";

export const Venue = () => {
  return (
    <section id="venue" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="overflow-hidden h-[400px]">
            <CardContent className="p-0 h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1079183640433!2d-122.41941372391064!3d37.78028011621793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085d386f037%3A0x79a99bf136cdab8b!2sMoscone%20Center!5e0!3m2!1sen!2sus!4v1704888345299!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Map"
              ></iframe>
            </CardContent>
          </Card>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">
              Join Us in San Francisco
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Building className="h-6 w-6 text-neon-purple mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Moscone Center</h3>
                  <p className="text-muted-foreground">747 Howard St, San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Hotel className="h-6 w-6 text-neon-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Accommodations</h3>
                  <p className="text-muted-foreground">Special rates available at partner hotels near the venue. Book early for the best availability.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Plane className="h-6 w-6 text-neon-pink mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Travel Information</h3>
                  <p className="text-muted-foreground">San Francisco International Airport (SFO) is the recommended airport, located 13 miles south of the venue.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-neon-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Around the Area</h3>
                  <p className="text-muted-foreground">The venue is centrally located with easy access to restaurants, shopping, and attractions.</p>
                </div>
              </div>
            </div>
            
            <Button className="btn-gradient text-white mt-8">Plan Your Trip</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
