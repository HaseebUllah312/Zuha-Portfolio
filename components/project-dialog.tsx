"use client"

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Project } from "./data/projects"

interface ProjectDialogProps {
  isOpen: boolean
  onClose: () => void
  project: Project
}

export function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">
          Details about the {project.title} project.
        </DialogDescription>
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-auto">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-muted-foreground text-sm md:text-base">{project.longDescription}</p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 md:py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center p-2 md:p-3 bg-muted rounded-lg">
                    <div className="text-sm md:text-lg font-bold">{value}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full">
                <Button size="sm" className="flex-1 h-8 md:h-10 text-xs md:text-sm bg-[#ea4335] hover:bg-[#d93025] text-white" asChild>
                  <Link 
                    href={`mailto:zuha25673@gmail.com?subject=Request Code/Demo: ${encodeURIComponent(project.title)}&body=Hi Zuha,%0D%0A%0D%0AI am interested in your project "${encodeURIComponent(project.title)}". Could you please share the source code or a live demo?%0D%0A%0D%0AThank you!`}
                  >
                    <Mail className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                    Request Code/Demo (Gmail)
                  </Link>
                </Button>
                <Button size="sm" className="flex-1 h-8 md:h-10 text-xs md:text-sm bg-[#25d366] hover:bg-[#128c7e] text-white border-none" asChild>
                  <Link 
                    href={`https://wa.me/923290541962?text=Hi%20Zuha,%20I%20am%20interested%20in%20your%20project%20"${encodeURIComponent(project.title)}".%20Could%20you%20please%20share%20the%20source%20code%20or%20a%20live%20demo?`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Request Code/Demo (WhatsApp)
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
