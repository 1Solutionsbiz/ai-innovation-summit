
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates about the AI Innovation Summit.",
      });
      setEmail("");
    }
  };

  return (
    <section id="register" className="py-20 gradient-bg particles-bg relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">

            Register Now for AI Innovation Summit
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get news, updates, and speaker announcements directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white/10 text-white border-white/20 placeholder:text-white/60"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="btn-gradient">
                Subscribe
              </Button>
            </div>
          </form>

          <p className="text-sm mt-4 opacity-70">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};
