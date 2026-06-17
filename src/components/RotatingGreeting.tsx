import { useState, useEffect, useRef } from 'react'

const greetings = [
  'Hi',
  'Hello',
  'Hola',
  'Bonjour',
  'Ciao',
  'Olá',
  'Hallo',
  'Aloha',
  'Konnichiwa',
  'Namaste',
]

export default function RotatingGreeting() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [widths, setWidths] = useState<number[]>([])
  const sizerRef = useRef<HTMLSpanElement>(null)

  // Measure each word at the actual heading font size on mount
  useEffect(() => {
    if (sizerRef.current) {
      const spans = Array.from(sizerRef.current.querySelectorAll<HTMLElement>('span'))
      setWidths(spans.map(s => s.offsetWidth))
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (index + 1) % greetings.length
      setPrevIndex(index)
      setIndex(next)
      // Remove the outgoing word from DOM after its animation finishes
      setTimeout(() => setPrevIndex(null), 350)
    }, 2000)
    return () => clearInterval(timer)
  }, [index])

  const containerWidth = widths[index]

  return (
    <>
      {/*
       * Hidden sizer — rendered inside the h1 so it inherits the exact
       * heading font-size/weight. Absolutely removed from flow so it
       * doesn't affect layout.
       */}
      <span
        ref={sizerRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          top: 0,
          left: 0,
        }}
      >
        {greetings.map(g => (
          <span key={g} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {g}
          </span>
        ))}
      </span>

      {/*
       * Animated container.
       * - Width transitions to the current word's measured width →
       *   this is what makes ", I'm Courtney." slide left/right.
       * - overflow: hidden clips words as they enter/exit vertically.
       * - height: 1.15em matches one line of the heading.
       */}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-flex',
          position: 'relative',
          /* No overflow:hidden — lets tall letters (Bonjour, Konnichiwa) breathe */
          verticalAlign: 'baseline',
          whiteSpace: 'nowrap',
          width: containerWidth ? containerWidth : undefined,
          transition: containerWidth ? 'width 0.35s ease' : undefined,
        }}
      >
        {/* Outgoing word — slides up and fades out */}
        {prevIndex !== null && (
          <span
            key={`out-${prevIndex}`}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              whiteSpace: 'nowrap',
              animation: 'greeting-out 0.3s ease forwards',
            }}
          >
            {greetings[prevIndex]}
          </span>
        )}

        {/* Incoming word — slides up from below */}
        <span
          key={`in-${index}`}
          style={{
            whiteSpace: 'nowrap',
            animation: 'greeting-in 0.3s ease forwards',
          }}
        >
          {greetings[index]}
        </span>
      </span>
    </>
  )
}
