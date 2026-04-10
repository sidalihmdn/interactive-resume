"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, User } from "lucide-react"
import Image from "next/image"
import profileImg from "@/public/profile.png"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

// Set to true when you add your photo to /public/profile.jpg
const hasProfilePhoto = true;

export function Header() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-border bg-secondary">
          {hasProfilePhoto ? (
            <Image
              src={profileImg}
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <User className="h-16 w-16 text-muted-foreground" />
            </div>
          )}
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      >
        <a href="/" className="hover:text-primary transition-colors">
          Sid-Ali HAMDANE
        </a>
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 text-lg font-medium text-primary"
      >
        Software Test Engineer
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-xs text-muted-foreground leading-relaxed"
      >
        I ensure software quality through comprehensive testing strategies and automation.
      </motion.p>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex items-center gap-5"
        aria-label="Social media"
      >
        {socialLinks.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
