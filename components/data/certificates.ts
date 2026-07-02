export interface Certificate {
  title: string;
  pdf?: string; // path to PDF in public/certificates (optional)
  image?: string; // path to image in public/certificates (preferred)
  thumbnail?: string; // optional image preview
}

export const certificates: Certificate[] = [
  {
    title: "Palo Alto Networks Certified Network Security Analyst",
    image: "/certificates/palo_alto_certified_network_security_analyst.png"
  },
  {
    title: "Artificial Intelligence Essentials (University of Pennsylvania)",
    image: "/certificates/upenn_ai_essentials.jpg"
  },
  {
    title: "Google Cybersecurity",
    image: "/certificates/google_cybersecurity.png"
  },
  {
    title: "Cisco Certified Support Technician Cybersecurity",
    image: "/certificates/cisco_ccst_cybersecurity.png"
  },
  {
    title: "Practical Help Desk (TCM Security)",
    image: "/certificates/tcm_practical_help_desk.png"
  },
  {
    title: "Linux 100: Fundamentals (TCM Security)",
    image: "/certificates/tcm_linux_100_fundamentals.png"
  },
  {
    title: "Python course from Zero-to-Hero - Intermediate Level",
    image: "/certificates/python_zero_to_hero_intermediate.png"
  },
  {
    title: "Python from Zero-to-Hero (Beginner Level)",
    image: "/certificates/python_zero_to_hero_beginner.png"
  },
  {
    title: "Partner: CPA - Programming Essentials in C++ (Cisco Networking Academy)",
    image: "/certificates/cisco_programming_essentials_in_c.png"
  },
  {
    title: "Complete MS Office Course Masterclass: Beginner to Advanced",
    image: "/certificates/ms_office_masterclass.png"
  },
  {
    title: "Daan Utsav Volunteering Internship (Muskurahat Foundation)",
    image: "/certificates/internshala_daan_utsav_volunteering.png"
  }
];
