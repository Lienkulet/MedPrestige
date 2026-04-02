'use client'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import DoctorsSection from './DoctorsSection'

export default function DoctorsSectionClient() {
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

    return <DoctorsSection doctors={doctors} />
}
