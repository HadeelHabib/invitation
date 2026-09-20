'use client'

import HeroVideo from '@/components/HeroVideo'
import QuranVerse from '@/components/QuranVerse'
import FormalInvitation from '@/components/FormalInvitation'
import AboutCouple from '@/components/AboutCouple'
import Countdown from '@/components/Countdown'
import VenueDetails from '@/components/VenueDetails'
import SaveTheDate from '@/components/SaveTheDate'
import RSVPForm from '@/components/RSVPForm'
import GuestbookWall from '@/components/GuestbookWall'
import ContactSection from '@/components/ContactSection'
import WeddingFooter from '@/components/WeddingFooter'
import { useIntroGate } from '@/components/useIntroGate'

export default function Home() {
  const { unlocked } = useIntroGate()
  return (
    <main className="relative w-full overflow-hidden bg-cream-50">
      <HeroVideo />
      <div
        className={unlocked ? 'contents' : 'hidden'}
        aria-hidden={unlocked ? false : true}
      >
        <QuranVerse />
        <FormalInvitation />
        <AboutCouple />
        <Countdown />
        <VenueDetails />
        <SaveTheDate />
        <RSVPForm />
        <GuestbookWall />
        <ContactSection />
        <WeddingFooter />
      </div>
    </main>
  )
}



