"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {useRouter} from 'next/navigation'
export default function WhoThisIsForSection() {
  const router = useRouter()
  const handleClick = ()=>{
    
    router.push(`/qualification`)
  }
  return (
    <section className="relative py-28 bg-muted/5">
      <div className="container mx-auto px-6 text-center">

        
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Who This Is For — And Who It’s Not
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          This system is built for businesses already generating leads —
          but struggling to handle them properly.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2 text-left">

          
          <div className="rounded-2xl border bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">
              This Is For You If:
            </h3>

            <ul className="space-y-4 text-lg">
              <li>• You’re a coach or consultant selling high-ticket services.</li>
              <li>• You already generate inbound leads consistently.</li>
              <li>• You manually respond, qualify, and follow up.</li>
              <li>• You feel busy but growth feels stuck.</li>
              <li>• You want scale without hiring a full sales team.</li>
            </ul>
          </div>

          
          <div className="rounded-2xl border bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">
              This Is Not For You If:
            </h3>

            <ul className="space-y-4 text-lg text-muted-foreground">
              <li>• You’re not generating any leads yet.</li>
              <li>• You’re selling low-ticket products.</li>
              <li>• You enjoy manually handling every message yourself.</li>
              <li>• You’re looking for cheap DIY solutions.</li>
              <li>• You don’t see slow follow-ups as a real problem.</li>
            </ul>
          </div>

        </div>

        
        <div className="mt-12">
          <Button onClick={handleClick} size="lg" className="px-10 py-4">
            Book Your Call
          </Button>
        </div>

      </div>
    </section>
  )
}
