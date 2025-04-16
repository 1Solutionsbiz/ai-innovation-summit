
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { CheckCircle } from "lucide-react";

const TICKET_TYPES = [
  {
    name: "Early Bird",
    price: "£399",
    description: "Limited availability. Book early for the best price.",
    features: [
      "Full conference access",
      "Workshop sessions",
      "Networking events",
      "Conference materials",
      "Lunch and refreshments"
    ]
  },
  {
    name: "Standard",
    price: "£599",
    description: "Regular conference ticket with all benefits.",
    features: [
      "Full conference access",
      "Workshop sessions",
      "Networking events",
      "Conference materials",
      "Lunch and refreshments",
      "Video recordings"
    ]
  },
  {
    name: "VIP",
    price: "£999",
    description: "Premium experience with exclusive benefits.",
    features: [
      "Full conference access",
      "Priority workshop seating",
      "Exclusive VIP events",
      "1-on-1 speaker sessions",
      "Premium meals",
      "Video recordings",
      "VIP lounge access"
    ]
  }
];

export const Tickets = () => {
  return (
    <section id="tickets" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Tickets</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Choose the ticket that best suits your needs and join us for an unforgettable conference experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TICKET_TYPES.map((ticket) => (
            <Card key={ticket.name} className="relative hover:shadow-xl transition-shadow">
              <CardHeader className="p-6 border-b">
                <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
                <p className="text-4xl font-bold text-primary mb-4">{ticket.price}</p>
                <p className="text-muted-foreground">{ticket.description}</p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {ticket.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" size="lg">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
