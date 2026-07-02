"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { name: "Cybersecurity Analyst", level: 95 },
  { name: "Network Security", level: 92 },
  { name: "React Three Fiber", level: 85 },
  { name: "WordPress Development", level: 98 },
  { name: "CCTV & Surveillance", level: 95 },
  { name: "Networking Infrastructure", level: 90 },
]

export function SkillsProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Technical Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

