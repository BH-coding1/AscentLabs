"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {useRouter} from  "next/navigation"

export default function Hero() {
  const [email, setEmail] = useState("")
  const router = useRouter()
  const handleClick = ()=>{
    if (!email) return 
    const encodedEmail = encodeURIComponent(email)
    router.push(`/qualification?email=${encodedEmail}`)
  }
  return (
    <section className="relative overflow-hidden py-28">
      
     
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,oklch(0.98_0.01_260),oklch(0.95_0.02_255),oklch(0.93_0.04_250))]" />

      <div className="container mx-auto w-full px-6 text-center">
        
        
        <h1 className="mx-auto w-full text-4xl font-semibold tracking-tight md:text-6xl">
          Stop Losing High-Paying Leads{" "}
          <span className="text-primary">to Slow Follow-Ups.</span>
        </h1>

        
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          We implement a system that instantly qualifies, scores, and routes every inbound lead, so you never miss a client because of slow replies or manual processes.
        </p>

        {/* CTA */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row justify-center">
          <Input
            type="email"
            placeholder="Enter your email to book a call"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-15 flex-1 rounded-xl bg-background"
          />
          <Button size="lg" onClick={handleClick} className="h-15 rounded-xl px-8">
            Book a Call
          </Button>
        </div>

        {/* Trust / reassurance */}
        <p className="mt-4 text-sm text-muted-foreground">
           We handle everything. Results start immediately.
        </p>

        

      </div>
    </section>
  )
}
