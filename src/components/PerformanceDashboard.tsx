/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  MousePointer, 
  Target, 
  Settings, 
  Award,
  Zap,
  Globe,
  Plus
} from "lucide-react";
import { CASE_STUDIES, PERFORMANCE_DASHBOARD_DATA } from "../data";

export default function PerformanceDashboard() {
  const [selectedCampaign, setSelectedCampaign] = useState(CASE_STUDIES[0].id);

  // Find the selected campaign data details
  const activeCampaign = CASE_STUDIES.find(cs => cs.id === selectedCampaign) || CASE_STUDIES[0];

  // Formatting utility for money outputs
  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} L`;
    return `₹${val.toLocaleString()}`;
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12" id="performance-dashboard-root">
      
      {/* Narrative Section Header */}
      <div className="flex flex-col space-y-3">
        <div className="inline-flex items-center space-x-1.5 text-teal-400 text-xs font-bold tracking-widest uppercase">
          <TrendingUp className="h-4 w-4 text-teal-400 animate-pulse" />
          <span>Interactive Campaign Dashboard</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-100 tracking-tight sm:text-4xl">
          Performance Marketing & Lead Harvesting Reports
        </h2>
        <p className="max-w-3xl text-slate-400 text-sm sm:text-base">
          Explore granular campaign performance matrices of ₹3+ Crore ad budgets managed for premier real estate conglomerates and premium healthcare providers. Click below to toggle brand-specific reporting.
        </p>
      </div>

      {/* Aggregate High Achieved Stats Banner */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" id="aggregate-performance-stats">
        {[
          { icon: DollarSign, label: "Cumulative Budget Managed", value: "₹3.0 Crore+", descr: "Max-engineered spends", color: "text-teal-400 bg-teal-950/40 border-teal-500/20" },
          { icon: Users, label: "Total Qualified Leads", value: "40,000+", descr: "High buying intent buyers", color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/20" },
          { icon: MousePointer, label: "Peak Click-Through Rate", value: "15.0%", descr: "Against 1.5% regional standard", color: "text-teal-300 bg-teal-950/30 border-teal-550/20" },
          { icon: Target, label: "Lead-to-Quality Conversion", value: "30.0%", descr: "Top performance level", color: "text-emerald-300 bg-emerald-950/30 border-emerald-550/20" },
        ].map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            key={idx}
            className={`rounded-2xl border p-5 flex items-start space-x-4 backdrop-blur-md ${item.color}`}
          >
            <div className="rounded-xl p-3 border border-current/10 bg-slate-900/60 mt-1">
              <item.icon className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
              <h4 className="text-2xl font-black text-slate-100 mt-1">{item.value}</h4>
              <p className="text-xs text-slate-450 text-slate-400 mt-1">{item.descr}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Primary Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Interactive panel: Campaign comparisons details */}
        <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200 tracking-tight flex items-center space-x-2">
              <Settings className="h-4 w-4 text-teal-400 animate-spin [animation-duration:12s]" />
              <span>Select Corporate Client</span>
            </h3>

            {/* Campaign Selection Tabs */}
            <div className="flex flex-col gap-2 max-h-[350px] overflow-y-auto pr-1 select-none" id="campaign-scroller">
              {CASE_STUDIES.map(study => (
                <button
                  key={study.id}
                  onClick={() => setSelectedCampaign(study.id)}
                  className={`w-full group text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    selectedCampaign === study.id
                      ? "border-teal-500 bg-teal-950/30 text-white shadow-lg"
                      : "border-slate-800/80 bg-slate-900/40 text-slate-400 hover:border-teal-500/40 hover:bg-slate-800/40"
                  }`}
                >
                  <div>
                    <h5 className="font-bold text-sm group-hover:text-slate-100 transition-colors">{study.client}</h5>
                    <p className="text-xs text-slate-500 group-hover:text-slate-400 truncate max-w-[200px]">{study.title}</p>
                  </div>
                  <div className={`p-1.5 rounded-lg text-xs font-mono font-bold ${
                    selectedCampaign === study.id ? "bg-teal-400 text-slate-950" : "bg-slate-800 text-slate-300"
                  }`}>
                    {study.category}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Quote or summary card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5 mt-auto">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center space-x-1.5">
              <Award className="h-4 w-4 text-teal-400" />
              <span>Performance Standard</span>
            </h4>
            <p className="text-xs text-slate-300 italic leading-relaxed">
              "We don't buy unqualified traffic. Every rupee spent is engineered towards specific buying segments back-linked into our sales CRMs."
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[10px] text-emerald-400 font-bold font-mono uppercase">Validated with live Client CRMs</p>
            </div>
          </div>
        </div>

        {/* Right Interactive panel: Campaign Active Metrics Sheet & Recharts */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            key={activeCampaign.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl"
            id="active-campaign-perf-card"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-teal-400 font-mono tracking-widest uppercase mb-1 block">ACTIVE WORK REPORT</span>
                <h4 className="text-xl font-bold text-white">{activeCampaign.client} - {activeCampaign.title}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeCampaign.channels.map((ch, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#132A26] text-teal-350 text-teal-300 border border-teal-500/25">
                    {ch}
                  </span>
                ))}
              </div>
            </div>

            {/* Micro-grid of campaign specific metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6" id="active-campaign-mini-stats">
              <div className="rounded-xl bg-slate-950/60 p-3.5 border border-slate-800/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Budget</span>
                <span className="text-base font-black text-slate-200 block mt-1">{activeCampaign.metrics.spends}</span>
              </div>
              <div className="rounded-xl bg-slate-950/60 p-3.5 border border-slate-800/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Leads Gathered</span>
                <span className="text-base font-black text-teal-400 block mt-1">{activeCampaign.metrics.leads || "N/A"}</span>
              </div>
              <div className="rounded-xl bg-slate-950/60 p-3.5 border border-slate-800/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Peak CTR</span>
                <span className="text-base font-black text-emerald-450 text-emerald-400 block mt-1">{activeCampaign.metrics.ctr}</span>
              </div>
              <div className="rounded-xl bg-slate-950/60 p-3.5 border border-slate-800/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Average CPL</span>
                <span className="text-base font-black text-teal-300 block mt-1">{activeCampaign.metrics.cpl}</span>
              </div>
            </div>

            {/* Campaign Summary Text */}
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeCampaign.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1">
                    <Zap className="h-3.5 w-3.5 text-teal-400" />
                    <span>Creative Tactical Execution</span>
                  </h5>
                  <ul className="space-y-1.5">
                    {activeCampaign.highlights.map((hlt, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start space-x-1.5">
                        <span className="text-teal-400 text-sm mt-[-2px]">•</span>
                        <span>{hlt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1">
                    <Globe className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Full-Funnel Funnel Tactics</span>
                  </h5>
                  <ul className="space-y-1.5">
                    {activeCampaign.details.map((dtl, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start space-x-1.5">
                        <span className="text-emerald-400 text-sm mt-[-2px]">•</span>
                        <span>{dtl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Cumulative Multi-Client Budget vs lead performance charts (Recharts) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-md" id="recharts-report-container">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-850 pb-5 mb-6">
          <div>
            <h4 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-emerald-400 animate-pulse" />
              <span>Multi-Client Competitive Matrix</span>
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">Comparing Spends, click volume CTR, and Lead Quality % across core campaigns</p>
          </div>
          <div className="flex text-xs space-x-4 text-slate-400">
            <span className="flex items-center space-x-1.5">
              <span className="h-2 w-2 rounded-full bg-teal-400 inline-block animate-pulse" />
              <span>Ad Budget Allocation</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>Average CTR (%)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="h-2 w-2 rounded-full bg-teal-300 inline-block animate-pulse" />
              <span>Lead Quality (%)</span>
            </span>
          </div>
        </div>

        {/* The Recharts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Bar Chart: Budget Spend vs Lead Volume generated */}
          <div className="lg:col-span-8 h-[320px]" id="chart-spends-leads">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={PERFORMANCE_DASHBOARD_DATA}
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} tickLine={false} />
                <YAxis yAxisId="left" stroke="#2dd4bf" fontSize={10} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" stroke="#34d399" fontSize={10} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #14b8a6", borderRadius: "12px", color: "#f8fafc" }}
                  formatter={(value: any, name: string) => {
                    if (name === "Budget Managed") return [formatCurrency(Number(value)), name];
                    return [Number(value).toLocaleString(), name];
                  }}
                />
                <Bar yAxisId="left" dataKey="spends" fill="url(#tealGlow)" name="Budget Managed" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="leads" fill="url(#emeraldGlow)" name="Qualified Leads" radius={[4, 4, 0, 0]} />
                
                {/* SVG Colors Gradients definitions */}
                <defs>
                  <linearGradient id="tealGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.85}/>
                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="emeraldGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.85}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Secondary Line Chart: Efficiency & ROI metrics (CTR and Lead Quality %) */}
          <div className="lg:col-span-4 h-[320px]" id="chart-efficiency">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={PERFORMANCE_DASHBOARD_DATA}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={9} />
                <YAxis stroke="#475569" fontSize={9} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #34d399", borderRadius: "12px", color: "#f8fafc" }}
                  formatter={(val) => [`${val}%`, ""]}
                />
                <Line type="monotone" dataKey="ctr" stroke="#34d399" strokeWidth={3} dot={{ r: 4 }} name="CTR (%)" />
                <Line type="monotone" dataKey="quality" stroke="#2dd4bf" strokeWidth={3} dot={{ r: 4 }} name="Qualified Lead (%)" />
                <Legend iconType="circle" wrapperStyle={{ fontSize: "10px", color: "#94a3b8" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>

    </section>
  );
}
