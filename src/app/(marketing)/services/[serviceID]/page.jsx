import ContactCardFooter from '@/components/ContactCardFooter/ContactCardFooter'
import PagesHero from '@/components/PagesHero/PagesHero'
import React from 'react'

const page = () => {
  return (
    <main>
      <PagesHero title={'Service Name'} subtitle={'Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing'} />
      <ContactCardFooter />
    </main>
  )
}

export default page