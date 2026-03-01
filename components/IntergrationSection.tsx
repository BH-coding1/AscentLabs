"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export default function IntegrationsSection() {
  return (
    <section className="relative py-28 bg-background">
      <div className="container mx-auto px-6 text-center">

       
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Works With The Tools You Already Use
        </h2>

        
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          We don’t replace your systems. We connect them into a single system that works together.
        </p>

        
        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 items-center">

          
          <div className="flex flex-col items-center">
            <img
              src="/slack.svg"
              alt="Slack"
              className="h-12 object-contain"
            />
            <span className="mt-3 text-sm text-muted-foreground">Slack</span>
          </div>

          
          <div className="flex flex-col items-center">
            <img
              src="/google-forms.svg"
              alt="Lead Capture"
              className="h-12 object-contain"
            />
            <span className="mt-3 text-sm text-muted-foreground">
              Lead Forms
            </span>
          </div>

          
          <div className="flex flex-col items-center">
            <img
              src="/gmail.svg"
              alt="Gmail"
              className="h-17 object-contain"
            />
            <span className="mt-3 text-sm text-muted-foreground">Gmail</span>
          </div>

          
          <div className="flex flex-col items-center">
            <img
              src="/google-sheets.svg"
              alt="Google Sheets"
              className="h-12 object-contain"
            />
            <span className="mt-3 text-sm text-muted-foreground">
              Sheets
            </span>
          </div>

          
          <div className="flex flex-col items-center">
            <img
              src="/n8n-icon.svg"
              alt="Automation"
              className="h-12 object-contain"
            />
            <span className="mt-3 text-sm text-muted-foreground">
              Automation
            </span>
          </div>

        </div>

        
        
      </div>
    </section>
  )
}
