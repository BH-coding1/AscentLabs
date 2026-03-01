"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export default function FAQSection() {
  return (
    <section className="relative py-28 bg-muted/5">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>

          
        </div>

        {/* FAQ List */}
        <div className="mt-16 mx-auto max-w-3xl space-y-10">

          {/* Q1 */}
          <div>
            <h3 className="text-xl font-semibold">
              Can’t I just hire a VA?
            </h3>
            <p className="mt-3 text-muted-foreground text-lg">
              You can. But without a structured system, they’re just manually
              doing what you’re already doing. This installs the structure first.
            </p>
          </div>

          {/* Q2 */}
          <div>
            <h3 className="text-xl font-semibold">
              Is this complicated to implement?
            </h3>
            <p className="mt-3 text-muted-foreground text-lg">
              No. We build and install everything for you. You get a clean
              backend process, not a tech headache.
            </p>
          </div>

          {/* Q3 */}
          <div>
            <h3 className="text-xl font-semibold">
              Will this work if my lead volume fluctuates?
            </h3>
            <p className="mt-3 text-muted-foreground text-lg">
              Yes. The system handles leads consistently whether you get 5 a
              week or 50.
            </p>
          </div>

          {/* Q4 */}
          <div>
            <h3 className="text-xl font-semibold">
              Do I need to change my funnel?
            </h3>
            <p className="mt-3 text-muted-foreground text-lg">
              Usually no. We improve what happens after the lead comes in.
            </p>
          </div>

          {/* Q5 */}
          <div>
            <h3 className="text-xl font-semibold">
              How long does this take?
            </h3>
            <p className="mt-3 text-muted-foreground text-lg">
              Implementation is done in weeks, not months. You start seeing
              improvements immediately once it’s live.
            </p>
          </div>

          {/* Q6 */}
          <div>
            <h3 className="text-xl font-semibold">
              Is this just software?
            </h3>
            <p className="mt-3 text-muted-foreground text-lg">
              No. This is a full-service setup. You’re not buying software —
              you’re getting a working system installed.
            </p>
          </div>

          {/* Q7 */}
          <div>
            <h3 className="text-xl font-semibold">
              Will I need to manage this myself?
            </h3>
            <p className="mt-3 text-muted-foreground text-lg">
              No. We implement it properly so you don’t have to touch every
              lead manually.
            </p>
          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" className="px-10 py-4">
            Book Your Call
          </Button>
        </div>

      </div>
    </section>
  )
}
