import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section className="about">
            <div className="about-container">
                {/* Left — Image Grid */}
                <div className="about-images">
                    {/* Top row: two images side by side */}
                    <div className="about-images-top">
                        <div className="about-img-card">
                            <Image
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=350&fit=crop&crop=center"
                                alt="Doctor examining patient"
                                width={280}
                                height={200}
                                className="about-img"
                                unoptimized
                            />
                        </div>
                        <div className="about-img-card about-img-video">
                            <iframe src="https://www.youtube.com/embed/FfZZ5fBdTWs" allowFullScreen />

                        </div>
                    </div>


                    {/* Bottom row: one large image */}
                    <div className="about-images-bottom">
                        <div className="about-img-card about-img-large">
                            <Image
                                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&h=500&fit=crop&crop=center"
                                alt="Medical examination"
                                width={560}
                                height={340}
                                className="about-img"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Right — Text Content */}
                <div className="about-content">
                    <h2 className="about-title">
                        The Heart and Science <br /> Of Medicine Service
                    </h2>
                    <p className="about-description">
                        Letraset sheets containing Lorem Ipsum passages and more
                        recently with desktop publishing Various versions have evolved
                        over the years, sometimes by accident, sometimes chunks as
                        necessary making desktop publishing Various versions have
                        evolved over the years, sometimes by accident.
                    </p>
                    <Link href="/about" className="about-btn">
                        Read More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;