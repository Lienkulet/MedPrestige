'use client'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function PageLoader() {
    useEffect(() => {
        const id = toast.loading('Loading...')
        return () => toast.dismiss(id)
    }, [])
    return null
}
