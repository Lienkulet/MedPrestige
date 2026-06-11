'use client';
import { useState, useEffect, useCallback } from 'react';
import { reviewsService } from '../services/reviewsService';
import { getAuthPayload } from '@/utils/authUtils';
import toast from 'react-hot-toast';

export const useReviews = (doctorId) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const authUser = getAuthPayload();

    const fetchReviews = useCallback(async () => {
        try {
            setLoading(true);
            const data = await reviewsService.getByDoctor(doctorId);
            setReviews(data);
        } catch {
            setReviews([]);
        } finally {
            setLoading(false);
        }
    }, [doctorId]);

    useEffect(() => {
        if (doctorId) fetchReviews();
    }, [doctorId, fetchReviews]);

    const addReview = async (dto) => {
        try {
            setSubmitting(true);
            await reviewsService.add(dto);
            toast.success('Review submitted successfully.');
            await fetchReviews();
        } catch {
            toast.error('Failed to submit review.');
        } finally {
            setSubmitting(false);
        }
    };

    const deleteReview = async (id) => {
        try {
            await reviewsService.delete(id);
            toast.success('Review deleted.');
            await fetchReviews();
        } catch {
            toast.error('Failed to delete review.');
        }
    };

    const averageRating = reviews.length
        ? (reviews.reduce((sum, r) => sum + r.Rating, 0) / reviews.length).toFixed(1)
        : null;

    return {
        reviews,
        loading,
        submitting,
        authUser,
        averageRating,
        addReview,
        deleteReview,
    };
};
