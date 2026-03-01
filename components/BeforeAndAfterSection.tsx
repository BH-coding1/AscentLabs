"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export default function BeforeAfterSection() {
  return (
    <section className="relative py-28 bg-background">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Same Leads. Completely Different Outcome.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          The difference isn’t traffic. It’s how your leads are handled.
        </p>

        {/* Grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 text-left">

          {/* BEFORE */}
          <div className="rounded-2xl border bg-muted/10 p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Before
            </h3>

            <ul className="space-y-4 text-lg">
              <li>• Leads sit in your inbox waiting for replies.</li>
              <li>• Follow-ups depend on memory.</li>
              <li>• You manually qualify every prospect.</li>
              <li>• Hot leads go cold while you’re busy.</li>
              <li>• You’re constantly reacting instead of selling.</li>
              <li>• Growth feels unpredictable.</li>
            </ul>
          </div>

          {/* AFTER */}
          <div className="rounded-2xl border bg-muted/5 p-8">
            <h3 className="text-2xl font-semibold mb-6">
              After
            </h3>

            <ul className="space-y-4 text-lg">
              <li>• Every lead gets an instant response.</li>
              <li>• Qualification happens automatically.</li>
              <li>• Only serious prospects reach your calendar.</li>
              <li>• Your pipeline updates without manual work.</li>
              <li>• You focus on closing, not chasing.</li>
              <li>• Revenue becomes more predictable.</li>
            </ul>
          </div>

        </div>

        {/* Closing Line */}
        <p className="mx-auto mt-12 max-w-2xl text-lg text-muted-foreground">
          You don’t need more leads.  
          You need a system that handles the ones you already have.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button size="lg" className="px-10 py-4">
            Book Your Call
          </Button>
        </div>

      </div>
    </section>
  )
}
