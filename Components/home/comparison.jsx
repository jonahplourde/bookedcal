import React from 'react';
import FunnelCard from "@/components/ui/FunnelCard";
import { X, Check, Zap } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Old Way vs. The <span className="font-logo text-highlight">bookedcal</span> Way</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Why traditional lead generation is broken, and how we fixed it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old Way */}
          <div className="p-8 rounded-3xl bg-white border border-gray-100">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                   <X className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Traditional Agencies</h3>
             </div>
             <ul className="space-y-4">
                {[
                   "Long retainer contracts",
                   "Unverified lead lists",
                   "Manual, slow outreach",
                   "Focus on 'vanity metrics'",
                   "Zero accountability"
                ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                      {item}
                   </li>
                ))}
             </ul>
          </div>

          {/* New Way */}
          <FunnelCard className="relative transform md:scale-105 border-highlight/20 shadow-xl">
             <div className="absolute top-0 right-0 bg-highlight text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                RECOMMENDED
             </div>
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-highlight">
                   <Zap className="w-5 h-5 fill-current" />
                </div>
                <h3 className="text-xl font-bold text-gray-900"><span className="font-logo text-highlight">bookedcal</span> System</h3>
             </div>
             <ul className="space-y-4">
                {[
                   "Guaranteed instant HVAC lead response",
                   "24/7 automated qualification",
                   "Focus on scheduling, not calling",
                   "High-converting AI creative tailored to HVAC offers",
                   "Complete transparency"
                ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                   </li>
                ))}
             </ul>
          </FunnelCard>
        </div>
      </div>
    </section>
  );
}