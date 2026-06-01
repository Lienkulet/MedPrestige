import CardFooterLeft from '@/features/ContactCardFooter/CardFooterLeft'
import CardFooterRight from '@/features/ContactCardFooter/CardFooterRight'
import './ContactCardFooter.css'

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