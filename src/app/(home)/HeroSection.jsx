import Image from "next/image";
import Link from "next/link";
import "./hero-section.css";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        Advanced Healthcare <br /> Made Personal
                    </h1>
                    <p className="hero-description">
                        Letraset sheets containing Lorem Ipsum passages
                        and more recently with desktop publishing
                    </p>
                    <Link href="/contact" className="hero-btn">
                        Book appointment
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="hero-btn-arrow"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>

                    {/* Two images BELOW the text — no overlap */}
                    <div className="hero-left-images">
                        <div className="hero-left-img-card">
                            <Image
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop&crop=center"
                                alt="Medical professional"
                                width={180}
                                height={140}
                                className="hero-left-img"
                                unoptimized
                            />
                        </div>
                        <div className="hero-left-img-card">
                            <Image
                                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop&crop=center"
                                alt="Mother and baby care"
                                width={180}
                                height={140}
                                className="hero-left-img"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Right Images Grid */}
                <div className="hero-images">
                    {/* Top row */}
                    <div className="hero-images-top">
                        <div className="hero-img-card hero-img-dentist">
                            <Image
                                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&crop=center"
                                alt="Dental care"
                                width={320}
                                height={220}
                                className="hero-img"
                                unoptimized
                            />
                        </div>
                        <div className="hero-stat-card hero-stat-rating">
                            <div className="rating-score">
                                4.9<span className="rating-out-of">/5</span>
                            </div>
                            <div className="rating-stars">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="#FFD700"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <div className="rating-label">Client Rating</div>
                            <div className="rating-reviews">2,847 reviews</div>
                        </div>
                    </div>

                    {/* Bottom row */}
                    <div className="hero-images-bottom">
                        <div className="hero-img-card hero-img-checkup">
                            <Image
                                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=500&fit=crop&crop=center"
                                alt="Health checkup"
                                width={500}
                                height={280}
                                className="hero-img"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Customers stat */}
                    <div className="hero-stat-card hero-stat-customers">
                        <span className="hero-stat-number">16800+</span>
                        <span className="hero-stat-label">Customers</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;