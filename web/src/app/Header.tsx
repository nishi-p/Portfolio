"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", id: "home", label: "HOME" },
  { href: "/#work", id: "work", label: "WORK" },
  { href: "/#projects", id: "projects", label: "PROJECTS" },
  { href: "/#scrapbook", id: "scrapbook", label: "SCRAPBOOK" },
  { href: "/#about", id: "about", label: "ABOUT" },
]

export default function Header() {
  const pathname = usePathname()
  const [active, setActive] = useState(pathname === "/" ? "home" : "")

  useEffect(() => {
    if (pathname !== "/") {
      setActive("")
      return
    }

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActive(visible.target.id)
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    )

    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [pathname])

  return (
    <header>
      <a href="/">NISHI P.</a>
      <nav>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={active === link.id ? "is-active" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
