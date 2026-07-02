"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const tools = [
  {
    name: "Python",
    emoji: "🐍",
    category: "Security Scripting"
  },
  {
    name: "Linux",
    emoji: "🐧",
    category: "Operating System"
  },
  {
    name: "Advanced Networking",
    emoji: "🌐",
    category: "Network Defense"
  },
  {
    name: "Cyber Security",
    emoji: "🛡️",
    category: "Systems Defense"
  },
  {
    name: "Wireshark",
    emoji: "🦈",
    category: "Packet Analyzer"
  },
  {
    name: "Tcpdump",
    emoji: "📈",
    category: "Traffic Monitoring"
  },
  {
    name: "Splunk",
    emoji: "📊",
    category: "SIEM Dashboard"
  },
  {
    name: "Wazuh",
    emoji: "👁️",
    category: "EDR & XDR"
  },
  {
    name: "Snort",
    emoji: "🐗",
    category: "Intrusion Detection"
  },
  {
    name: "Metasploit",
    emoji: "💣",
    category: "Penetration Testing"
  },
  {
    name: "Nessus",
    emoji: "🔍",
    category: "Vulnerability Audit"
  },
  {
    name: "Autopsy",
    emoji: "🕵️",
    category: "Digital Forensics"
  },
  {
    name: "Volatility",
    emoji: "💾",
    category: "Memory Forensics"
  },
  {
    name: "Sysmon",
    emoji: "📝",
    category: "Windows Logging"
  },
  {
    name: "Zmap",
    emoji: "🗺️",
    category: "Network Scanner"
  },
  {
    name: "Sherlock",
    emoji: "🔍",
    category: "OSINT Footprinting"
  },
  {
    name: "VMware",
    emoji: "🖥️",
    category: "Virtualization Lab"
  },
  {
    name: "Git & GitHub",
    emoji: "🔧",
    category: "Version Control"
  }
]

export function ToolsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Card className="group overflow-hidden border-none bg-background/50 transition-colors hover:bg-accent">
            <CardContent className="flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl mb-2" role="img" aria-label={tool.name}>
                {tool.emoji}
              </span>
              <h3 className="text-sm font-medium">{tool.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{tool.category}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
