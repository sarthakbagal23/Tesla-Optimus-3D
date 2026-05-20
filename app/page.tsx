"use client"

import { useState, useEffect } from "react"
import { SplineScene } from "@/components/ui/spline-scene"

export default function OptimusPage() {
  const [mounted, setMounted] = useState(false)
  const [statusValues, setStatusValues] = useState({
    power: 87,
    temp: 42,
    motor: 63,
  })

  useEffect(() => {
    setMounted(true)
    // Simulate live data updates
    const interval = setInterval(() => {
      setStatusValues({
        power: Math.floor(Math.random() * 15) + 80,
        temp: Math.floor(Math.random() * 10) + 38,
        motor: Math.floor(Math.random() * 20) + 55,
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen w-screen bg-background overflow-hidden relative">
      {/* Deep Vignette */}
      <div className="fixed inset-0 pointer-events-none z-40" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.9) 100%)'
        }}
      />

      {/* Spotlight from top */}
      <div className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(180,80,40,0.15) 0%, transparent 70%)'
        }}
      />

      {/* Subtle dust particles effect */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-30"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.3), transparent),
                           radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.2), transparent),
                           radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.25), transparent),
                           radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.15), transparent)`,
          backgroundSize: '200px 100px'
        }}
      />

      {/* 3D Robot - Full Screen */}
      <div className="absolute inset-0 z-20">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Corner Bracket Framing */}
      <CornerBrackets />

      {/* HUD Overlay */}
      <div className={`relative z-50 h-full w-full pointer-events-none transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Top Left - Model Designation */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-2 uppercase">
            Model Designation
          </div>
          <h1 className="font-mono text-2xl md:text-4xl font-bold tracking-tight text-foreground">
            OPTIMUS <span className="text-primary">GEN-3</span>
          </h1>
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-[pulse-glow_2s_ease-in-out_infinite]" />
              <span className="font-mono text-[10px] tracking-wider text-primary uppercase">Online</span>
            </div>
            <div className="w-px h-3 bg-border" />
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground">TESLA ROBOTICS</span>
          </div>
        </div>

        {/* Top Right - Technical Specs */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12">
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4 uppercase text-right">
            Technical Specs
          </div>
          <div className="space-y-3">
            {[
              { label: "Height", value: "5'8\" / 172cm" },
              { label: "Weight", value: "160 lbs / 73kg" },
              { label: "DOF", value: "28 Degrees" },
              { label: "Battery", value: "2.3 kWh" },
              { label: "Runtime", value: "~8 Hours" },
            ].map((spec, i) => (
              <div 
                key={spec.label} 
                className="flex items-center justify-end gap-4"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s both` }}
              >
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  {spec.label}
                </span>
                <span className="font-mono text-xs text-foreground min-w-[100px] text-right">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Left - Status Bars */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4 uppercase">
            System Status
          </div>
          <div className="space-y-3 w-48">
            <StatusBar label="Power" value={statusValues.power} color="primary" />
            <StatusBar label="Temp" value={statusValues.temp} max={100} suffix="°C" color="accent" />
            <StatusBar label="Motor Load" value={statusValues.motor} color="muted" />
          </div>
          
          {/* LED Indicators */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse-glow_1s_ease-in-out_infinite]" />
              <span className="font-mono text-[9px] tracking-wider text-muted-foreground">SYS</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-[pulse-glow_1.5s_ease-in-out_infinite]" />
              <span className="font-mono text-[9px] tracking-wider text-muted-foreground">NET</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-[pulse-glow_2s_ease-in-out_infinite]" />
              <span className="font-mono text-[9px] tracking-wider text-muted-foreground">AI</span>
            </div>
          </div>
        </div>

        {/* Bottom Right - Controls hint & Tags */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-right">
          <div className="flex items-center gap-2 justify-end mb-4">
            {["HUMANOID", "AUTONOMOUS", "AI-POWERED"].map((tag) => (
              <span 
                key={tag}
                className="font-mono px-2 py-1 text-[9px] tracking-wider uppercase bg-card/60 backdrop-blur-sm border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="font-mono text-[10px] tracking-wider text-muted-foreground mb-2">
            DRAG TO ROTATE • SCROLL TO ZOOM
          </div>
          <div className="font-mono text-[9px] tracking-wider text-muted-foreground/50">
            © 2024 TESLA, INC. ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Center Bottom - Scan Line Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
          <div 
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            style={{ animation: 'scan-line 4s linear infinite' }}
          />
        </div>
      </div>

      {/* Subtle ground shadow gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-48 pointer-events-none z-15"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)'
        }}
      />
    </div>
  )
}

function CornerBrackets() {
  const bracketStyle = "absolute w-12 h-12 md:w-16 md:h-16 pointer-events-none z-50"
  const lineColor = "border-border/60"
  
  return (
    <>
      {/* Top Left */}
      <div className={`${bracketStyle} top-4 left-4 md:top-6 md:left-6 border-l-2 border-t-2 ${lineColor}`} />
      {/* Top Right */}
      <div className={`${bracketStyle} top-4 right-4 md:top-6 md:right-6 border-r-2 border-t-2 ${lineColor}`} />
      {/* Bottom Left */}
      <div className={`${bracketStyle} bottom-4 left-4 md:bottom-6 md:left-6 border-l-2 border-b-2 ${lineColor}`} />
      {/* Bottom Right */}
      <div className={`${bracketStyle} bottom-4 right-4 md:bottom-6 md:right-6 border-r-2 border-b-2 ${lineColor}`} />
    </>
  )
}

function StatusBar({ 
  label, 
  value, 
  max = 100, 
  suffix = "%",
  color = "primary" 
}: { 
  label: string
  value: number
  max?: number
  suffix?: string
  color?: "primary" | "accent" | "muted"
}) {
  const percentage = (value / max) * 100
  const colorClass = {
    primary: "bg-primary",
    accent: "bg-accent",
    muted: "bg-muted-foreground"
  }[color]

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono text-[9px] tracking-wider text-muted-foreground uppercase">{label}</span>
        <span className="font-mono text-[10px] text-foreground">{value}{suffix}</span>
      </div>
      <div className="h-1 bg-secondary rounded-full overflow-hidden">
        <div 
          className={`h-full ${colorClass} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
