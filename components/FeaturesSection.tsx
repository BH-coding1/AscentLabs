"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
    BatteryCharging,
    GitPullRequest,
    Layers,
    RadioTower,
    SquareKanban,
    WandSparkles,
  } from "lucide-react";
import {useRouter} from 'next/navigation'

export default function FeaturesSection() {
  const router = useRouter()
  const handleClick = ()=>{
    
    router.push(`/qualification`)
  }
  
  return (
    <section className="relative py-28 bg-muted/5">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Every Lead Handled, Every Time
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          Our system ensures your leads are responded to, qualified, and routed instantly — so you never lose deals to slow follow-ups or manual chaos.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid gap-10 mx-5 py-15">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          
            <div  className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                <GitPullRequest/>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Instant Response</h3>
              <p className="text-muted-foreground">Every inbound lead receives an immediate reply. No waiting, no lost opportunities.</p>
            </div>

            <div  className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                <Layers/>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Smart Qualification & Scoring</h3>
              <p className="text-muted-foreground">Leads are filtered by budget, urgency, and need so you focus only on high-value prospects.</p>
            </div>

            <div  className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                <RadioTower/>
              </div>
              <h3 className="mb-2 text-xl font-semibold">CRM Intergration</h3>
              <p className="text-muted-foreground">Qualified leads are instantly routed to the CRM, reducing manual work and wasted time.</p>
            </div>



        </div>
        


          

        </div>

        {/* Dream Outcome */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">The Outcome You’ll See</h3>
          <p className="text-muted-foreground text-lg">
            You can focus on closing deals while the system ensures consitent quality leads. Less busywork, more growth, and complete control over your pipeline.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Button onClick={handleClick} size="lg" className="px-10 py-4" >
            Get Your System Implemented
          </Button>
        </div>

      </div>
    </section>
  )
}
