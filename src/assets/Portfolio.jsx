"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Contact, Contact2Icon, Download, Mail, Send } from "lucide-react"

export default function Component() {
  const [activeSection, setActiveSection] = useState("home")

  const skills = [
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 85 },
    { name: "JavaScript", progress: 80 },
    { name: "React", progress: 85 },
  ]
  const projectImages = [
    "/img/esa.5.png",
    "/img/esa3.png",
    "/img/esa4.png",
  ];

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-3xl font-bold">Ann</span>
          
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Ann Mwangi</h1>
            <p className="text-lg text-gray-600 mb-6">Passionate Statistician in Training</p>
            <p className="text-gray-600 mb-8">
              First-year Bachelor of Science in Statistics student at JKUAT, exploring the power of data
              analytics and statistical methods.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 flex items-center">
              <a href="tel:0719533707" className="flex items-center"><Contact2Icon className="mr-2 h-4 w-4" /> Contact Me</a>
            </button>
          </div>
          <div className="relative">
            <div className="absolute mx-auto inset-1 bg-purple-600 rounded-full transform translate-x-5 translate-y-1 h-[400px] w-[400px]" />
            <img
              src="/img/esa6.jpg"
              alt="Profile"
              className="relative rounded-full object-cover mx-auto h-[400px] w-[400px]  "
            />
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/img/esa7.jpg?" alt="About" className="rounded-lg object-cover mx-auto shadow-lg h-[400px] w-[400px]" />
            <div>
              <p className="text-gray-600 mb-8">
                As a first-year Statistics student at JKUAT, I&apos;m passionate about using
                statistical methods to bring clarity to complex issues. My journey involves mastering
                tools like R, SPSS, and Python to transform data into meaningful insights.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ label: "1+", desc: "Years Experience" }, { label: "5+", desc: "Projects" }, { label: "3+", desc: "Tools Mastered" }].map((item, index) => (
                  <div key={index} className="p-4 text-center border rounded-lg shadow">
                    <div className="text-2xl font-bold text-purple-600">{item.label}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-2">
                <a href="https://youtu.be/waaxeXXkmFE?t=5902" className="flex items-center"><Download className="h-4 w-4" /> Download CV</a>
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto px-4 py-12 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${skill.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Statistical Tools</h3>
              <div className="grid gap-4">
                {["R", "SPSS", "Python", "Tableau", "Power BI"].map((tool) => (
                  <div key={tool} className="p-4 border rounded-lg shadow text-center">
                    <div className="font-medium">{tool}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
          <div className="sm:flex grid overflow-x-auto space-x-4">
            
          {[1, 2, 3].map((project, index) => (
            <div key={project} className="p-6 border rounded-lg shadow min-w-[300px]">
                <img
                src={projectImages[index]}
                alt={`Project ${project}`}
                className="rounded-lg mb-4 object-cover"
                style={{ width: '500px', height: '300px' }}
                />
                <h3 className="text-xl font-semibold mb-2">Statistical Analysis Project {project}</h3>
                <p className="text-gray-600">
                A comprehensive data analysis project using R and Python to uncover insights.
                </p>
            </div>
        ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-md mx-auto border rounded-lg shadow">
            <form className="space-y-4 p-6">
              <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
              <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
              <textarea placeholder="Your Message" className="w-full border p-2 rounded min-h-[150px]" />
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 justify-center">
                <a href="sms:+0719533707" className="flex items-center "><Send className="mr-2 h-4 w-4" /> Send Message</a>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-purple-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Ann Mwangi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
