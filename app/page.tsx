export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          Content Creation Tool
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-6">
          Generate Branded{' '}
          <span className="text-[#58a6ff]">Instagram Story</span>{' '}
          Templates in Seconds
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mb-10">
          Upload your brand assets, pick a style, and instantly get cohesive story templates ready to export as PNG, PDF, or Figma-compatible files.
        </p>
        <a
          href={checkoutUrl}
          className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-xl text-lg transition-colors duration-200 shadow-lg shadow-[#58a6ff]/20"
        >
          Start Creating — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No design skills needed.</p>

        {/* Mock preview */}
        <div className="mt-16 grid grid-cols-3 gap-3 max-w-sm">
          {['bg-gradient-to-br from-pink-500 to-purple-600', 'bg-gradient-to-br from-[#58a6ff] to-cyan-400', 'bg-gradient-to-br from-orange-400 to-pink-500'].map((grad, i) => (
            <div key={i} className={`${grad} rounded-2xl aspect-[9/16] flex items-end p-3 shadow-xl`}>
              <div className="w-full">
                <div className="h-2 bg-white/60 rounded mb-1 w-3/4"></div>
                <div className="h-1.5 bg-white/40 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-20 bg-[#161b22]">
        <h2 className="text-3xl font-bold text-white mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12">Everything you need to stay on-brand, every day.</p>
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm w-full bg-[#0d1117] shadow-xl shadow-[#58a6ff]/10">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl font-extrabold text-white">$12</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-[#8b949e] mb-6">Full access to all features</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited story templates',
              'Brand kit (colors, fonts, logos)',
              'Export PNG, PDF & Figma',
              'Canvas editor with Fabric.js',
              'New templates every week',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Do I need design experience?',
              a: 'Not at all. StoryForge is built for non-designers. Upload your logo and brand colors and we handle the rest.',
            },
            {
              q: 'What export formats are supported?',
              a: 'You can export your templates as PNG, PDF, or Figma-compatible JSON files for further editing in your design tool.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] py-8 border-t border-[#30363d]">
        © {new Date().getFullYear()} StoryForge. All rights reserved.
      </footer>
    </main>
  )
}
