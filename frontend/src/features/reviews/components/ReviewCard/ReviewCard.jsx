'use client';
import './ReviewCard.css';

const StarIcon = ({ filled }) => (
    <svg
        width="16" height="16" viewBox="0 0 24 24"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const ReviewCard = ({ review, authUser, onDelete }) => {
    const canDelete = authUser && (
        authUser.userId === review.UserId ||
        authUser.role === 'admin'
    );

    const date = new Date(review.CreatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <article className="review-card">
            <div className="review-card__header">
                <div className="review-card__avatar" aria-hidden="true">
                    {review.UserName ? review.UserName.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="review-card__meta">
                    <span className="review-card__name">{review.UserName || 'Anonymous'}</span>
                    <span className="review-card__date">{date}</span>
                </div>
                <div className="review-card__stars" aria-label={`Rating: ${review.Rating} out of 5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                        <span key={n} className={`review-card__star ${n <= review.Rating ? 'review-card__star--filled' : ''}`}>
                            <StarIcon filled={n <= review.Rating} />
                        </span>
                    ))}
                </div>
            </div>

            {review.Comment && (
                <p className="review-card__comment">{review.Comment}</p>
            )}

            {canDelete && (
                <button
                    className="review-card__delete"
                    onClick={() => onDelete(review.ReviewId)}
                    aria-label="Delete review"
                >
                    Delete
                </button>
            )}
        </article>
    );
};

export default ReviewCard;
