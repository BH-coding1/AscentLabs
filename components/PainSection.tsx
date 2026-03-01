"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {useRouter} from 'next/navigation'
type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const timelineData: TimelineEntry[] = [
    {
      date: "",
      title: "• Leads pile up while you scramble to respond manually",
      content:
        ".",
    },
    {
      date: "",
      title: "• Follow-ups slip through the cracks, leaving hot prospects hanging.",
      content:
        "",
    },
    {
      date: "",
      title: "• Hours are wasted qualifying every lead instead of selling.",
      content:
        "",
    },
    {
      date: "",
      title: "• Your Business growth stalls without you",
      content:
        "",
    },
  ];
const PainSection = () => {
  const router = useRouter()
  const handleClick = ()=>{
    
    router.push(`/qualification`)
  }
  return (
    <section className="relative py-28 bg-background">
      <div className="container mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          You’re Losing Revenue Without Even Realizing It
        </h2>

        {/* Body / Pain bullets */}
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          Every day, your business is leaking revenue , not because leads aren’t coming in, but because they’re slipping through the cracks:
        </p>
        <section className={"bg-background py-20"}>
     <div className="container">
        <div className="relative mx-auto max-w-4xl">

          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-5 pl-8">
              
              <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                {entry.title}
              </h4>

            </div>
          ))}
        </div>
      </div>
    </section>
    

        {/* Emotional hook */}
        <p className="mx-auto  max-w-2xl text-muted-foreground md:text-lg">
          You feel busy and stretched thin, but the numbers don’t reflect your effort. Every missed opportunity is lost revenue you can never recover.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button onClick={handleClick } size="lg" className="px-10 py-4">
            Stop Losing Leads — Book Your Call
          </Button>
        </div>

        
      </div>
    </section>
  )
}

export default PainSection