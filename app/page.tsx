import Image from "next/image";
import Hero from '@/components/Hero'
import PainSection from '@/components/PainSection'
import FeaturesSection from '@/components/FeaturesSection'
import IntergrationSection from '@/components/IntergrationSection'
import BeforeAfterSection from '@/components/BeforeAndAfterSection'
import WhoThisIsForSection from '@/components/WhoThisIsForSection'
import FAQSection from '@/components/FaqSection'
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans ">
    
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-background ">
        <section>
          <Hero/>
          <FeaturesSection/>
          <IntergrationSection/>
          <BeforeAfterSection/>
          <WhoThisIsForSection/>
          <PainSection/>
          <FAQSection/>
        </section>
      </main>
    </div>
  );
}
