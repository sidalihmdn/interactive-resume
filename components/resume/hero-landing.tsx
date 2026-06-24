"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import profileImg from "@/public/profile.png"
import { useEffect, useState } from "react"

const socialLinks = [
  { icon: Github, href: "https://github.com/sidalihmdn", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sidali-hamdane", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hamdane.sidali@hotmail.com", label: "Email" },
]

export function HeroLanding() {
  const { scrollY } = useScroll()
  const [vh, setVh] = useState(800)

  useEffect(() => {
    setVh(window.innerHeight)
  }, [])

  // Background layer: parallax + Ken Burns scale
  const bgY = useTransform(scrollY, [0, vh], [0, 180])
  const bgScale = useTransform(scrollY, [0, vh], [1, 1.18])

  // Floating orbs drift at different speeds
  const orb1Y = useTransform(scrollY, [0, vh], [0, 100])
  const orb2Y = useTransform(scrollY, [0, vh], [0, 60])
  const orb3Y = useTransform(scrollY, [0, vh], [0, 140])

  // Foreground content: rises and fades out
  const contentY = useTransform(scrollY, [0, vh * 0.55], [0, -130])
  const contentOpacity = useTransform(scrollY, [0, vh * 0.45], [1, 0])

  // Scroll indicator fades quickly
  const arrowOpacity = useTransform(scrollY, [0, vh * 0.18], [1, 0])

  // Divider line grows on mount
  return (
    <section className="relative h-screen">
      {/* ── Background clip wrapper (keeps scaled/parallax bg from bleeding out) ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-[-100%] origin-center"
        >
          {/* Base gradient with animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-br from-background via-[oklch(0.22_0.025_240)] to-[oklch(0.19_0.03_200)]"
          />

          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </motion.div>

        {/* ── Animated glow orbs ── */}
        <motion.div
          style={{ y: orb1Y }}
          className="absolute left-[15%] top-[20%] h-[420px] w-[420px] rounded-full bg-primary/6 blur-[100px] pointer-events-none"
        />
        <motion.div
          style={{ y: orb2Y }}
          className="absolute right-[10%] top-[40%] h-[280px] w-[280px] rounded-full bg-primary/5 blur-[80px] pointer-events-none"
        />
        <motion.div
          style={{ y: orb3Y }}
          className="absolute left-[55%] top-[10%] h-[200px] w-[200px] rounded-full bg-[oklch(0.7_0.14_200)]/4 blur-[70px] pointer-events-none"
        />
      </div>

      {/* ── Foreground content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative"
        >
          {/* Glowing ring behind the photo */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110 pointer-events-none" />
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-primary/30 ring-2 ring-primary/10 ring-offset-2 ring-offset-background">
            <Image
              src={profileImg}
              alt="Sid-Ali Hamdane"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.45em] text-primary"
        >
          Interactive Resume
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem] leading-[0.95]"
        >
          Sid-Ali
          <br />
          <span className="text-primary">HAMDANE</span>
        </motion.h1>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 h-px w-28 origin-left bg-gradient-to-r from-primary to-transparent"
        />

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-7 text-lg font-medium uppercase tracking-widest text-muted-foreground"
        >
          Software Test Engineer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-4 max-w-xs text-sm text-muted-foreground/70 leading-relaxed"
        >
          Release Manager · Rakuten France
        </motion.p>

        {/* Social links */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
          className="mt-8 flex items-center gap-6"
          aria-label="Social media"
        >
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex items-center justify-center h-10 w-10 rounded-full border border-border/50 bg-secondary/40 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{ opacity: arrowOpacity }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-primary/70" />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade into content ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
