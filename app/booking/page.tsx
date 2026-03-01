"use client"

import { useSearchParams } from "next/navigation"

export default function CalendarBookingPage() {
  const searchParams = useSearchParams()

  const name = searchParams.get("name") || ""
  const email = searchParams.get("email") || ""

  const GOOGLE_BOOKING_URL = "https://calendar.app.google/KA1xgvq1DGr7VaaU7"

  const bookingUrl = `${GOOGLE_BOOKING_URL}`

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-12 shadow-sm text-center">

        <h1 className="text-3xl font-semibold mb-4">
          Book Your Strategy Call
        </h1>

        <p className="text-muted-foreground mb-10">
          Choose a time that works for you. This call will focus on fixing your
          lead qualification and backend automation.
        </p>

       
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Book Your call
        </a>

     
        {(name || email) && (
          <div className="mt-10 text-sm text-muted-foreground">
            Booking for:{" "}
            <span className="font-medium text-foreground">
              {name}
            </span>
          </div>
        )}

      </div>
    </div>
  )
}