"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Brain, Laptop, Award } from 'lucide-react'

const stats = [
  {
    title: "Security Projects",
    value: "10+",
    icon: Shield,
    description: "SOC, EDR & Forensics Labs"
  },
  {
    title: "Certifications",
    value: "10+",
    icon: Award,
    description: "(ISC)², Cisco & TCM Security"
  },
  {
    title: "Hands-on Labs",
    value: "100+",
    icon: Laptop,
    description: "Threat hunting & analysis"
  },
  {
    title: "Academic Path",
    value: "BS IT",
    icon: Brain,
    description: "Punjab University (2028)"
  }
]

export function Statistics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
              >
                <stat.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="font-semibold">{stat.title}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

