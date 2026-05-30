import ClockIcon from '@/components/Icons/ClockIcon'
import './CardFooterLeft.css'
import HourCard from './HourCard'
import PhoneEmailIcon from '@/components/Icons/PhoneEmailIcon'
import WaypointIcon from '@/components/Icons/WaypointIcon'
import MapIcon from '@/components/Icons/MapIcon'
import Link from 'next/link'

const CardFooterLeft = () => {
  return (
    <div className='left-block'>
      <h1>Get Quick Free <br />
        Professional Consultation</h1>
      <HourCard
        hours={[
          { days: "Mon–Fri :", open: "9:00 am - 10:00 pm" },
          { days: "Sat–Sun :", open: "9:00 am - 8:00 pm" },
        ]}
        icon={<ClockIcon />}
      />

      <div className='line'></div>
      <HourCard
        hours={[
          { days: "Phone :", open: "+(690) 2560 0020" },
          { days: "Email :", open: "booking@healthpoint.com" },
        ]}
        icon={<PhoneEmailIcon />}
      />

      <div className='line'></div>
      <HourCard
        hours={[
          { days: "Address :", open: "Medprestige" },
          { days: "", open: "4263 Wilkinson Street" },
          { days: "", open: "Tennessee" },
        ]}
        icon={<WaypointIcon />}
      />

      <Link
        href={'/contact#mapID'}
        className='locationBtn'
      >
        <MapIcon />
        <span>View Location Map</span>
      </Link>
    </div>
  )
}

export default CardFooterLeft