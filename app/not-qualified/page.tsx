import React from 'react'

const NotQualifiedPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-12 shadow-sm text-center">

        <h1 className="text-3xl font-semibold mb-4">
          We're Not the Right Fit , For Now
        </h1>

        <p className="text-muted-foreground mb-6">
          Based on the information provided, we may not be a good fit at this stage.
        </p>

        <p className="text-muted-foreground mb-10">
          At this time we focus on working with established Businesses that meet a specific criteria  
          If that changes, you're welcome to apply again.
        </p>

        <p className="text-sm text-muted-foreground">
          If you believe this was a mistake, we encourage you to feel free to reach out directly.
          
        </p>
        <p className="text-sm text-muted-foreground mt-5">
          Our email :businesemail@gmail.com
        </p>
      </div>
    </div>
  )
}

export default NotQualifiedPage