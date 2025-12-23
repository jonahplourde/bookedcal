import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FunnelCard from "@/components/ui/FunnelCard";

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 mb-8 animate-badge">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-600">Accepting Applications for Pilot Program</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
          We fill your calendar with <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="relative z-10 text-gray-900">qualified leads.</span>
            <span className="absolute bottom-1 left-0 w-full h-[14px] bg-indigo-200 -z-10 -rotate-1 rounded-[2px]"></span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Stop losing leads to slow follow-up. <span className="font-logo text-highlight">bookedcal</span> guarantees instant engagement, qualifying prospects 24/7 so you can focus on closing.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link to={createPageUrl('Booking')}>
            <Button className="shadow-funnel">
              Get Your Free Strategy Audit
            </Button>
          </Link>
        </div>



        {/* Stats / Interactive Graphic */}
        <div className="max-w-5xl mx-auto">
           <FunnelCard className="mx-auto bg-white shadow-funnel p-0 overflow-visible border-none shadow-none">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  
                  {/* Stat 1 */}
                <div className="group relative text-center cursor-default">
                      <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl md:rounded-l-3xl"></div>
                      <div className="relative z-10 py-6 md:py-8 px-6">
                          <div className="text-4xl md:text-5xl font-bold text-highlight mb-2">391%</div>
                          <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">CONVERSION BOOST</div>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-gray-900 text-white text-xs text-left rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl z-30 pointer-events-none">
                          <p className="leading-relaxed">
                              <strong className="text-white block mb-1">Instant responses to a lead can increase your conversion potential by nearly 400%.</strong> 
                              <span className="text-gray-300">Our AI caller guarantees this critical speed, ensuring your leads are engaged at their moment of highest interest.</span>
                          </p>
                          {/* Arrow */}
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45"></div>
                      </div>
                  </div>

                  {/* Stat 2 */}
                <div className="group relative text-center cursor-default">
                      <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10 py-6 md:py-8 px-6">
                          <div className="text-4xl md:text-5xl font-bold text-highlight mb-2">33%</div>
                          <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">CPL REDUCTION</div>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-gray-900 text-white text-xs text-left rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl z-30 pointer-events-none">
                          <p className="leading-relaxed">
                              <strong className="text-white block mb-1">Marketing automation tools are proven to reduce the cost per lead by an average of 33%.</strong> 
                              <span className="text-gray-300">By instantly qualifying leads, our AI system ensures your ad spend is only used on high-intent prospects, cutting waste.</span>
                          </p>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45"></div>
                      </div>
                  </div>

                  {/* Stat 3 */}
                <div className="group relative text-center cursor-default">
                      <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-3xl md:rounded-r-3xl"></div>
                      <div className="relative z-10 py-6 md:py-8 px-6">
                          <div className="text-4xl md:text-5xl font-bold text-highlight mb-2">90%</div>
                          <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">JOB IMPROVEMENT</div>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-gray-900 text-white text-xs text-left rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl z-30 pointer-events-none">
                          <p className="leading-relaxed">
                              <strong className="text-white block mb-1">The vast majority of sales professionals report that automation dramatically improves their job satisfaction.</strong> 
                              <span className="text-gray-300">Our AI handles the tedious, repetitive follow-up, allowing your agents to focus their energy exclusively on closing deals.</span>
                          </p>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45"></div>
                      </div>
                  </div>

              </div>
           </FunnelCard>
        </div>
      </div>
    </section>
  );
}