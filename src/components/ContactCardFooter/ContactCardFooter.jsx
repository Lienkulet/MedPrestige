import CardFooter from '@/features/ContactCardFooter/CardFooterRight'
import './ContactCardFooter.css'
import CardFooterRight from '@/features/ContactCardFooter/CardFooterRight'
import CardFooterLeft from '@/features/ContactCardFooter/CardFooterLeft'

const ContactCardFooter = () => {
  return (
    <section className="two-color">
      <div className='container'>
        <CardFooterLeft />
        <CardFooterRight />
      </div>
    </section>
  )
}

export default ContactCardFooter