import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StoryForge — Branded Instagram Story Templates',
  description: 'Generate cohesive Instagram story templates based on your brand colors, fonts, and style. Export to PNG, PDF, or Figma.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ac0d55a4-507c-47b0-a79b-9a31babf8f85"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
