'use client'

import GrandTitle from '@/components/GrandTitle'
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

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-cream-50">
      <GrandTitle />
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
    </main>
  )
}
