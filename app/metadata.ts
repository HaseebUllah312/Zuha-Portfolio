import { Metadata } from 'next'

export const siteConfig = {
  name: 'Zuha Riaz Portfolio',
  description: 'Personal portfolio and blog of Zuha Riaz, a Cyber Security Analyst, Forensics Enthusiast & IT Student',
  url: 'https://zuhariaz.me',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/zuha-riaz',
    linkedin: 'https://linkedin.com/in/zuha-riaz',
  },
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: 'Zuha Riaz' }],
  creator: 'Zuha Riaz',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@zuha_riaz',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
  manifest: '/site.webmanifest',
}
