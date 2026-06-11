'use client';
import { useState } from 'react';
import './ReviewForm.css';

const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const ReviewForm = ({ doctorId, authUser, onSubmit, submitting }) => {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) return;
        onSubmit({
            UserId: authUser.userId,
            DoctorId: doctorId,
            Rating: rating,
            Comment: comment.trim(),
        });
        setRating(0);
        setComment('');
    };

    if (!authUser) {
        return (
            <div className="review-form__guest">
                <p>Please <a href="/login">log in</a> to leave a review.</p>
            </div>
        );
    }

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <h3 className="review-form__title">Leave a Review</h3>

            <div className="review-form__stars" aria-label="Select rating">
                {[1, 2, 3, 4, 5].map((n) => (
                    <button
                        key={n}
                        type="button"
                        className={`review-form__star ${n <= (hovered || rating) ? 'review-form__star--active' : ''}`}
                        onMouseEnter={() => setHovered(n)}
                        onMouseLeave={() => setHovered(0)}
                        onClick={() => setRating(n)}
                        aria-label={`Rate ${n} out of 5`}
                    >
                        <StarIcon />
                    </button>
                ))}
            </div>

            <textarea
                className="review-form__textarea"
                placeholder="Share your experience (optional)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                maxLength={500}
            />

            <button
                type="submit"
                className="review-form__submit"
                disabled={rating === 0 || submitting}
            >
                {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
        </form>
    );
};

export default ReviewForm;
