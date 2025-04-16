
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Clock, Download } from "lucide-react";

export const Schedule = () => {
  const [day, setDay] = useState("day1");

  const scheduleData = {
    day1: [
      { time: "09:00 AM", title: "Registration & Welcome Coffee", speaker: "" },
      { time: "10:00 AM", title: "Opening Keynote: The Future of AI", speaker: "Dr. Sarah Johnson, Google" },
      { time: "11:30 AM", title: "Panel: AI Ethics in Practice", speaker: "Emma Wilson, Michael Chen, Aisha Khan" },
      { time: "01:00 PM", title: "Lunch Break & Networking", speaker: "" },
      { time: "02:30 PM", title: "Workshop: Building Neural Networks", speaker: "David Rodriguez, Microsoft" },
      { time: "04:00 PM", title: "AI in Healthcare", speaker: "Dr. Aisha Khan, Stanford" },
      { time: "05:30 PM", title: "Networking Reception", speaker: "" }
    ],
    day2: [
      { time: "09:00 AM", title: "AI for Business Transformation", speaker: "James Wilson, AI Ventures" },
      { time: "10:30 AM", title: "Next-Gen AI Research", speaker: "Michael Chen, OpenAI" },
      { time: "12:00 PM", title: "Lunch Break & Networking", speaker: "" },
      { time: "01:30 PM", title: "Workshop: Ethical AI Design", speaker: "Emma Wilson, MIT" },
      { time: "03:00 PM", title: "Startup Showcase", speaker: "Various Presenters" },
      { time: "05:00 PM", title: "Evening Networking Event", speaker: "" }
    ],
    day3: [
      { time: "09:00 AM", title: "AI & Cloud Computing", speaker: "David Rodriguez, Microsoft" },
      { time: "10:30 AM", title: "Interactive AI Demos", speaker: "Various Presenters" },
      { time: "12:00 PM", title: "Lunch Break & Networking", speaker: "" },
      { time: "01:30 PM", title: "The Road Ahead for AI", speaker: "Dr. Sarah Johnson, Google" },
      { time: "03:00 PM", title: "Closing Keynote", speaker: "Michael Chen, OpenAI" },
      { time: "04:30 PM", title: "Closing Remarks & Farewell", speaker: "" }
    ]
  };

  return (
    <section id="schedule" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">Event Schedule</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three days of innovation, learning, and networking.
          </p>
        </div>

        <Tabs defaultValue="day1" className="w-full max-w-3xl mx-auto" onValueChange={setDay}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="day1" className="font-orbitron">Day 1 - Aug 21</TabsTrigger>
            <TabsTrigger value="day2" className="font-orbitron">Day 2 - Aug 22</TabsTrigger>
            <TabsTrigger value="day3" className="font-orbitron">Day 3 - Aug 23</TabsTrigger>
          </TabsList>
          
          {Object.entries(scheduleData).map(([key, sessions]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              {sessions.map((session, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 text-muted-foreground min-w-[120px]">
                    <Clock className="h-4 w-4" />
                    <span>{session.time}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{session.title}</h3>
                    {session.speaker && (
                      <p className="text-muted-foreground">{session.speaker}</p>
                    )}
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button className="inline-flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Full Agenda
          </Button>
        </div>
      </div>
    </section>
  );
};
