'use client'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PagesHero from "@/components/PagesHero/PagesHero"
import ContactCardFooter from "@/components/ContactCardFooter/ContactCardFooter"
import DoctorsCard from "@/components/DoctorsCard/DoctorsCard"
import DoctorsAnimations from "./DoctorsAnimations"

export default function MeetOurDoctors() {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        const id = toast.loading('Loading...', { id: 'page-load' })
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors`)
            .then(res => res.ok ? res.json() : [])
            .then(data => {
                setDoctors(data)
                toast.dismiss(id)
            })
            .catch(() => toast.dismiss(id))
    }, [])

    return (
        <main>
            <DoctorsAnimations />
            <PagesHero
                title="Meet Our Doctors"
                subtitle="Board-certified specialists dedicated to delivering exceptional, compassionate care across every discipline."
            />
            <DoctorsCard doctors={doctors} />
            <ContactCardFooter />
        </main>
    )
}
