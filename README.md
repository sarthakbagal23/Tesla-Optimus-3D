# Tesla Optimus 3D

An interactive 3D dashboard built around Tesla's Optimus humanoid robot. I wanted to see what a real-time telemetry interface for a robot might actually look like, so I built one.

The whole thing runs in the browser — you get a live 3D Spline model of Optimus front and center, with animated status panels around it showing power levels, motor load, and temperature ticking up and down in real time. It's got that dark, cinematic control-room energy with a vignette and a warm spotlight bleeding in from the top.

---

## What's inside

- **Interactive 3D model** via Spline — loads right in the browser, no install needed
- **Live-updating telemetry** — power, motor load, and temperature values that simulate real sensor data refreshing every 3 seconds
- **Cinematic UI** — deep vignette, radial spotlight, dark background that keeps the robot as the star
- **Next.js + TypeScript** for the foundation
- **shadcn/ui + Radix UI** for the component layer
- **Tailwind CSS** for styling

---

## Getting started

```bash
# install dependencies
pnpm install

# run locally
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) and watch Optimus come to life.

---

## Stack

| Thing | What it does |
|---|---|
| Next.js 14 | App framework |
| TypeScript | Type safety throughout |
| Spline | 3D model rendering in the browser |
| Radix UI | Accessible UI primitives |
| shadcn/ui | Pre-built component system |
| Tailwind CSS | Utility-first styling |
| pnpm | Package manager |

---

Built this as a passion project — part UI experiment, part homage to where robotics is heading.
