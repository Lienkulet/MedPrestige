'use client';
import { useReviews } from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import ReviewForm from '../ReviewForm/ReviewForm';
import './ReviewsSection.css';

const ReviewsSection = ({ doctorId }) => {
    const {
        reviews,
        loading,
        submitting,
        authUser,
        averageRating,
        addReview,
        deleteReview,
    } = useReviews(doctorId);

    return (
        <section className="reviews-section" aria-labelledby="reviews-title">
            <span className="doctor-eyebrow">Patient Feedback</span>
            <div className="reviews-section__header">
                <h2 id="reviews-title" className="doctor-section__title">
                    Reviews
                </h2>
                {averageRating && (
                    <div className="reviews-section__average">
                        <span className="reviews-section__average-value">{averageRating}</span>
                        <span className="reviews-section__average-label">
                            / 5 &nbsp;·&nbsp; {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
                        </span>
                    </div>
                )}
            </div>

            <ReviewForm
                doctorId={doctorId}
                authUser={authUser}
                onSubmit={addReview}
                submitting={submitting}
            />

            {loading ? (
                <div className="reviews-section__loading">Loading reviews...</div>
            ) : reviews.length === 0 ? (
                <div className="reviews-section__empty">
                    No reviews yet. Be the first to share your experience.
                </div>
            ) : (
                <div className="reviews-section__list">
                    {reviews.map((review) => (
                        <ReviewCard
                            key={review.ReviewId}
                            review={review}
                            authUser={authUser}
                            onDelete={deleteReview}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ReviewsSection;
