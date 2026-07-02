"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Award, Briefcase } from 'lucide-react'
import { SocialLinks } from "@/components/social-links"
import { SkillsProgress } from "@/components/skills-progress"
import { CertificatesGrid } from "@/components/certificates-grid"

const achievements = [
  {
    icon: Award,
    title: "Education & Training",
    items: [
      "• Bachelor of Information Technology, University of Punjab (Graduation: 2028 / Ongoing)",
      "• Palo Alto Networks Certified Network Security Analyst",
      "• Artificial Intelligence Essentials - University of Pennsylvania",
      "• Google Cybersecurity",
      "• Cisco Certified Support Technician Cybersecurity",
      "• Practical Help Desk - TCM Security",
      "• Linux 100: Fundamentals - TCM Security",
      "• Python Zero-to-Hero (Beginner & Intermediate) - Udemy",
      "• Programming Essentials in C++ - Cisco Networking Academy",
      "• Complete MS Office Course Masterclass - Udemy",
      "• Daan Utsav Volunteering Internship (Muskurahat Foundation)"
    ]
  },
  {
    icon: Briefcase,
    title: "Experience & Volunteering",
    items: [
      "• Daan Utsav Volunteering Intern — Muskurahat Foundation (Nov 2023)\nCollaborated on public welfare volunteering programs, coordinated tasks, and managed communications through Internshala.",
      "• Academic Security Projects — University of Punjab\nDesigning virtual SOC labs, configuring network security parameters, auditing CIS benchmarks, and conducting threat hunting.",
      "• Cyber Defense Labs & Research\nExtensive hands-on practice in penetration testing, log analysis, threat intelligence, and memory forensics."
    ]
  }
]
const skills = [
  "Cybersecurity",
  "Network Security",
  "Penetration Testing",
  "Ethical Hacking",
  "OSINT & Footprinting",
  "Threat Intelligence",
  "Incident Response",
  "Log Analysis",
  "SIEM (Splunk/QRadar)",
  "EDR & XDR (Wazuh)",
  "IDS/IPS (Snort)",
  "Forensics (Volatility/Autopsy)",
  "TCP/IP Protocols",
  "Linux Administration",
  "VMware Virtualization",
  "Python for Security"
]

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[280px_1fr]">
        {/* Left Column - Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-foreground/20 animate-pulse" />
            <Image
              src="/images/about-page.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="h-full w-full object-cover rounded-full border-4 border-background relative z-10"
              priority
            />
          </div>

          {/* Social Links */}
          <Card>
            <CardContent className="p-6">
              <SocialLinks />
            </CardContent>
          </Card>

          {/* Skills */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <SkillsProgress />
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
            <p className="text-xl text-muted-foreground text-justify leading-relaxed">
            Hello! I&apos;m Zuha Riaz, an Aspiring Cyber Security Analyst and Information Technology student at the University of Punjab. I specialize in network security, threat monitoring, incident response, and digital forensics.
            </p>
            <p className="text-muted-foreground text-justify leading-relaxed">
              My journey in technology is driven by a deep fascination with how digital networks are secured and defended against evolving threats. From conducting penetration testing and footprinting (OSINT) to analyzing memory logs and deploying endpoint defense systems (EDR/SIEM), I strive to establish robust digital protection systems.
            </p>
            <p className="text-muted-foreground text-justify leading-relaxed">
              With a strong academic foundation in IT and practical hands-on labs (including certifications from Palo Alto Networks, Google, Cisco, and TCM Security), I approach security challenges with a defensive mindset. I am always looking to learn, collaborate, and contribute to securing digital spaces.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement) => (
              <Card key={achievement.title}>
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-4">{achievement.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {achievement.items.map((item) => (
                      <li key={item} className="whitespace-pre-line">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificates Section */}
      <CertificatesGrid />

      <div className="container px-4 md:px-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Call to Action */}
          <Card className="bg-primary/10 border-none">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Interested in collaboration?</h3>
                  <p className="text-muted-foreground">Let&apos;s work together on your next security or infrastructure project.</p>
                </div>
                <Button asChild>
                  <Link href="mailto:zuha25673@gmail.com">Get in Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
