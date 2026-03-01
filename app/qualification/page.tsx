 "use client"
 import {useSearchParams,useRouter} from 'next/navigation'
 import {useState,React} from 'react'
 
 
 
 const QualificationForm = () => { 
    const searchParams = useSearchParams()
    const router = useRouter()
    const prefilledEmail = searchParams.get("email") || ""

    const [formData,setFormData] = useState({
        name:'',
        email:prefilledEmail,
        website:'',
        businessType:'',
        leadsPermonth:'',
        revenue:'',
        biggestIssue:'',
        currentSystem:'',
        budget:'',
        descisionMaker:'',
        timeline:'',
    })
   const handleChange =  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}
    const handleSubmit = async(e:React.FormEvent)=>{
      e.preventDefault()
      try {
        const res = await fetch("https://n8n-workflows-3z1k.onrender.com/webhook-test/6786d56c-c9d0-4387-8214-f4c9d9be3e87", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
    
        if (!res.ok) {
          throw new Error("Failed to submit form")
        }
        console.log('Status:',res.status)
        const data = await res.json()
        console.log('type',typeof data.qualified)
        if (data.qualified == true) {
            router.push(
            `/booking?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`
          )
        } else {
        router.push("/not-qualified")
        }

      } catch (error) {
        console.error(error)
      }
    }
    

   return (
     <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Let’s See If We're A Fit
        </h1>

        <p className="text-muted-foreground text-center mb-10">
          Takes 2 minutes. If it’s a match, you’ll see available call times.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">

          
          <input
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full p-4 bg-input border border-border rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-input border border-border rounded-lg"
          />

          <input
            name="website"
            placeholder="Website / Funnel Link"
            required
            onChange={handleChange}
            className="w-full p-4 bg-input border border-border rounded-lg"
          />

          
          {[
            {
              label: "Business Type",
              name: "businessType",
              options: ["Coach", "Consultant", "Agency", "Other"]
            },
            {
              label: "Inbound Leads Per Month",
              name: "leadsPerMonth",
              options: ["0-5", "5-15", "15-30", "30+"]
            },
            {
              label: "Monthly Revenue",
              name: "revenue",
              options: ["Under $5k", "$5k-$10k", "$10k-$25k", "$25k+"]
            },
            {
              label: "Biggest Issue",
              name: "biggestIssue",
              options: [
                "Slow lead response",
                "Poor qualification",
                "Missed follow-ups",
                "No backend system",
                "Manual chaos"
              ]
            },
            {
              label: "Current Lead Handling",
              name: "currentSystem",
              options: [
                "Manual inbox",
                "VA",
                "CRM only",
                "No real system"
              ]
            },
            {
              label: "Budget Range",
              name: "budget",
              options: ["Under $1k", "$1k-$3k", "$3k-$5k", "$5k+"]
            },
            {
              label: "Decision Maker?",
              name: "decisionMaker",
              options: ["Yes", "No"]
            },
            {
              label: "Implementation Timeline",
              name: "timeline",
              options: ["Immediately", "Within 30 days", "Just exploring"]
            }
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-2 text-sm text-neutral-400">
                {field.label}
              </label>
              <select
                name={field.name}
                required
                onChange={handleChange}
                className="w-full p-4 bg-input border border-border rounded-lg"
              >
                <option value=''>Select an option</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button
            type="submit"
            className="w-full cursor-pointer bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:opacity-90 transition"
          >
            See Available Call Times
          </button>

        </form>
      </div>
    </div>
   )
 }
 
 export default QualificationForm