/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Sparkle,
  Linkedin,
  Cpu,
  Bookmark,
  CheckCircle2
} from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, ACHIEVEMENTS, SKILL_CATEGORIES, PERSONAL_PROJECTS } from "../data";

export default function ProfileResume() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12" id="profile-resume-root">
      
      {/* Narrative Section Header */}
      <div className="flex flex-col space-y-3">
        <div className="inline-flex items-center space-x-1.5 text-teal-400 text-xs font-bold tracking-widest uppercase">
          <FileText className="h-4 w-4 text-teal-400" />
          <span>Professional Resume</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-100 tracking-tight sm:text-4xl">
          Career Summary & Technical Skills
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
          A results-driven marketing background of 6+ years across Indian and global regions. Fully certified and skilled in modern performance optimization, AI engineering pipelines, and programmatic platforms.
        </p>
      </div>

      {/* Visual Technical Skills Grid */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 sm:p-8 backdrop-blur-md space-y-6" id="skills-grid-wrapper">
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
          <Cpu className="h-5 w-5 text-teal-400" />
          <h3 className="text-lg font-bold text-slate-200">Modern Digital Marketing Technology Stack</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-3 rounded-xl bg-slate-950/40 p-4 border border-slate-850">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">{cat.category}</h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs text-slate-300 font-semibold flex items-center space-x-1 hover:border-teal-500/20 transition-all"
                  >
                    <span className="h-1 w-1 bg-teal-400 rounded-full" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Primary Experience & Academic split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Academics, Projects & Achievements */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Achievements block */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 space-y-5 backdrop-blur-md">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center space-x-2">
              <Award className="h-5 w-5 text-teal-400" />
              <span>Key Achievements</span>
            </h3>
            
            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="border-l-2 border-teal-500/40 pl-3 py-1 space-y-1">
                  <h4 className="text-xs font-black text-teal-450 text-teal-400 uppercase font-mono tracking-wider">{ach.title}</h4>
                  <p className="text-xs font-bold text-slate-300">{ach.subtitle}</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal projects list */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 space-y-4 backdrop-blur-md">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center space-x-2">
              <Bookmark className="h-5 w-5 text-emerald-400" />
              <span>Independent Case Audits</span>
            </h3>

            <div className="grid grid-cols-1 gap-2.5" id="personal-projects-scroller">
              {PERSONAL_PROJECTS.map((proj, idx) => (
                <div key={idx} className="bg-slate-950/55 p-3 rounded-xl border border-slate-850/65 flex flex-col justify-center">
                  <span className="text-[10px] text-slate-500 uppercase font-mono font-bold">{proj.client}</span>
                  <span className="text-xs font-bold text-slate-300 mt-0.5">{proj.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Timeline */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 space-y-5 backdrop-blur-md">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-teal-400" />
              <span>Academic Credentials</span>
            </h3>

            <div className="space-y-4">
              <div className="border-l-2 border-teal-500/35 pl-3 py-1 space-y-1">
                <span className="text-[10px] font-mono text-teal-400 font-bold block">2020</span>
                <h4 className="text-xs font-black text-slate-200">Certified Digital Marketer</h4>
                <p className="text-xs font-semibold text-slate-400">Indian Institute of Digital Education (IIDE)</p>
                <p className="text-[10px] text-slate-500">Focus: SMM, SEO/SEM, Web Analytics, ORM</p>
              </div>

              <div className="border-l-2 border-teal-500/35 pl-3 py-1 space-y-1">
                <span className="text-[10px] font-mono text-teal-400 font-bold block">2016 - 2019</span>
                <h4 className="text-xs font-black text-slate-200">Bachelors in Management Studies</h4>
                <p className="text-xs font-semibold text-slate-400">R.D. National College, Mumbai</p>
              </div>

              <div className="border-l-2 border-teal-500/35 pl-3 py-1 space-y-1">
                <h4 className="text-xs font-black text-slate-200">Online MBA & Analytics</h4>
                <p className="text-xs font-semibold text-slate-400">Independent ongoing training modules</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Work History Timeline */}
        <div className="lg:col-span-8 space-y-6" id="career-experience-timeline">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 sm:p-8 space-y-8 backdrop-blur-md">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center space-x-2 border-b border-slate-800 pb-3">
              <Briefcase className="h-5 w-5 text-teal-400" />
              <span>Professional Practice timeline</span>
            </h3>

            {/* Vertical timeline cards */}
            <div className="relative border-l border-slate-800 ml-4 space-y-8" id="timeline-list">
              {EXPERIENCES.map((job, idx) => (
                <div key={idx} className="relative pl-6">
                  {/* Glowing Node Dot in timeline */}
                  <span className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full border border-teal-400 bg-slate-950 shadow-[0_0_8px_rgba(45,212,191,0.5)] active:scale-110 transition-transform" />
                  
                  {/* Job Metadata details */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-black text-white">{job.role}</h4>
                      <p className="text-xs font-bold text-teal-400 mt-0.5">{job.company}</p>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-slate-400 bg-slate-950 border border-slate-850 px-2.5 py-1 rounded-full w-fit">
                      <Calendar className="h-3 w-3 text-slate-500" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mt-4">
                    {job.highlights.map((hlt, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-300 flex items-start space-x-2 leading-relaxed">
                        <span className="text-teal-400 font-bold">✓</span>
                        <span>{hlt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Quick Contact Form */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8 backdrop-blur-md" id="resume-contact-card">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Contact Copy details */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Need to build an elite marketing funnel?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have an upcoming product launch in real estate, SaaS or healthcare? Drop a message directly to Mayuresh's communication terminals to organize client acquisitions, media buy planning, and custom AI reporting strategies.
            </p>
            <div className="space-y-2.5 pt-2 text-xs font-mono">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center space-x-2 text-slate-300 hover:text-teal-400 transition-colors">
                <Mail className="h-4 w-4 text-teal-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center space-x-2 text-slate-300 hover:text-teal-400 transition-colors">
                <Phone className="h-4 w-4 text-teal-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span>{PERSONAL_INFO.location} & Willing to Relocate</span>
              </div>
            </div>
          </div>

          {/* Quick interactive Form submission simulator */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }} 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/40 p-5 rounded-xl border border-slate-850"
                  id="simulation-contact-form"
                >
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe" 
                      className="rounded-lg bg-slate-900 border border-slate-800 p-2 text-xs focus:border-teal-500 focus:outline-none text-slate-100 placeholder-slate-600"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@company.com" 
                      className="rounded-lg bg-slate-900 border border-slate-800 p-2 text-xs focus:border-teal-500 focus:outline-none text-slate-100 placeholder-slate-600"
                    />
                  </div>
                  <div className="flex flex-col space-y-1 sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Message / Pitch</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Hi Mayuresh, we have a premium project launching next quarter and want..." 
                      className="rounded-lg bg-slate-900 border border-slate-800 p-2 text-xs focus:border-teal-500 focus:outline-none text-slate-100 placeholder-slate-600 resize-none font-sans"
                    />
                  </div>
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 px-4 text-xs tracking-wider uppercase transition-all cursor-pointer shadow-md hover:shadow-teal-400/25"
                      id="submit-contact-form"
                    >
                      Send Correspondence
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="submit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-teal-950/30 border border-teal-500/35 rounded-xl p-6 flex flex-col items-center text-center space-y-3"
                  id="contact-success-panel"
                >
                  <CheckCircle2 className="h-10 w-10 text-teal-400 animate-bounce" />
                  <div>
                    <h4 className="text-base font-bold text-slate-100">Message Dispatched!</h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm leading-relaxed">
                      Thank you for reaching out. Mayuresh Sawant will receive this correspondence on <strong className="text-teal-400">sawantmayuresh3@gmail.com</strong> instantly and follow up with your team.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-teal-300 hover:text-teal-350 hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

    </section>
  );
}
