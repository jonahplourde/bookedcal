import React from 'react';
import FunnelCard from "@/components/ui/FunnelCard";
import { Mic, Video, Clock, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "AI-Driven Creative",
      description: "We generate high-converting video ads using advanced AI, ensuring low CPL without expensive shoots."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Advanced Voice AI",
      description: "Our human-like voice engine engages leads within seconds, eliminating decay and building trust."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Qualification",
      description: "Never miss a hot lead. Our system qualifies and books appointments directly to your calendar, around the clock."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white border-y border-gray-100/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The <span className="font-logo">bookedcal</span> Ecosystem
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We handle the time-consuming 80% of the sales process. From creative generation to instant follow-up, 
              our infrastructure allows your team to focus exclusively on closing deals.
            </p>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="mt-1 w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-900 group-hover:border-highlight/30 group-hover:shadow-md transition-all">
                    {React.cloneElement(service.icon, { className: "w-6 h-6 text-highlight" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visualization Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-100 rounded-[3rem] rotate-3 opacity-60"></div>
            <FunnelCard className="relative z-10 rotate-0 hover:-rotate-1 transition-transform duration-500 border-t-4 border-t-highlight shadow-funnel bg-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="font-bold text-gray-900">Live System Activity</div>
                  <div className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Online
                  </div>
                </div>
                
                <div className="space-y-4">
                   {/* Mock Conversation Items */}
                   <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">AI</div>
                         <div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none text-sm text-gray-600 max-w-[80%]">
                           Hi John, I saw you submitted a service request. Are you currently without heat or air conditioning?
                         </div>
                   </div>
                   <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-highlight">J</div>
                         <div className="bg-indigo-50 p-3 rounded-2xl rounded-tr-none text-sm text-gray-800 max-w-[80%]">
                           Yes, my AC stopped working and I need a same-day repair if possible.
                         </div>
                   </div>
                   <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">AI</div>
                         <div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none text-sm text-gray-600 max-w-[80%]">
                           Great. I found an available technician and scheduled a same-day visit for this afternoon between 2–4 PM.
                         </div>
                   </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-4 flex items-center gap-3 border border-green-100 mt-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Appointment Confirmed</div>
                    <div className="text-xs text-gray-500">Synced to technician schedule</div>
                  </div>
                </div>
              </div>
            </FunnelCard>
          </div>

        </div>
      </div>
    </section>
  );
}