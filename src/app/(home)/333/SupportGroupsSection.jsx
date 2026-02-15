"use client";
import React, { useState } from "react";
const SupportGroupsSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            style={{
                backgroundColor: "#FFFFFF",
                padding: "80px 0 100px",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 24px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "60px",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Side - Image Placeholder with Emergency Card */}
                    <div
                        style={{
                            flex: "1 1 500px",
                            position: "relative",
                            minWidth: "300px",
                        }}
                    >
                        {/* Main Image Container */}
                        <div
                            style={{
                                position: "relative",
                                borderRadius: "16px",
                                overflow: "hidden",
                                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            {/* Styled Placeholder - No image needed */}
                            <div
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    background: "linear-gradient(145deg, #e8f4fc 0%, #d4e8f5 30%, #c5dff0 60%, #b8d4e8 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Background decorative elements */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "-50px",
                                        right: "-50px",
                                        width: "200px",
                                        height: "200px",
                                        borderRadius: "50%",
                                        background: "rgba(75, 123, 245, 0.1)",
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "100px",
                                        left: "-30px",
                                        width: "120px",
                                        height: "120px",
                                        borderRadius: "50%",
                                        background: "rgba(75, 123, 245, 0.08)",
                                    }}
                                />

                                {/* Doctor and Patient Illustration */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-end",
                                        gap: "40px",
                                        padding: "40px",
                                    }}
                                >
                                    {/* Doctor figure */}
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        {/* Head */}
                                        <div
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #fcd5ce 0%, #f8b4a8 100%)",
                                                marginBottom: "8px",
                                                position: "relative",
                                            }}
                                        >
                                            {/* Hair */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "5px",
                                                    right: "5px",
                                                    height: "25px",
                                                    borderRadius: "30px 30px 0 0",
                                                    background: "#8B7355",
                                                }}
                                            />
                                        </div>
                                        {/* Body - white coat */}
                                        <div
                                            style={{
                                                width: "80px",
                                                height: "120px",
                                                background: "linear-gradient(180deg, #FFFFFF 0%, #f0f0f0 100%)",
                                                borderRadius: "20px 20px 0 0",
                                                position: "relative",
                                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            {/* Stethoscope */}
                                            <svg
                                                width="40"
                                                height="50"
                                                viewBox="0 0 40 50"
                                                fill="none"
                                                style={{
                                                    position: "absolute",
                                                    top: "10px",
                                                    left: "50%",
                                                    transform: "translateX(-50%)",
                                                }}
                                            >
                                                <path
                                                    d="M10 5 Q10 25 20 30 Q30 25 30 5"
                                                    stroke="#4B7BF5"
                                                    strokeWidth="3"
                                                    fill="none"
                                                />
                                                <circle cx="20" cy="35" r="8" fill="#4B7BF5" />
                                                <circle cx="20" cy="35" r="4" fill="#FFFFFF" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Patient figure */}
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        {/* Head */}
                                        <div
                                            style={{
                                                width: "55px",
                                                height: "55px",
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #fcd5ce 0%, #f8b4a8 100%)",
                                                marginBottom: "8px",
                                                position: "relative",
                                            }}
                                        >
                                            {/* Hair */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "-5px",
                                                    left: "3px",
                                                    right: "3px",
                                                    height: "35px",
                                                    borderRadius: "30px 30px 10px 10px",
                                                    background: "#C4856A",
                                                }}
                                            />
                                        </div>
                                        {/* Body - casual clothes */}
                                        <div
                                            style={{
                                                width: "70px",
                                                height: "100px",
                                                background: "linear-gradient(180deg, #E8E8E8 0%, #D0D0D0 100%)",
                                                borderRadius: "18px 18px 0 0",
                                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Decorative cross/plus signs */}
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    style={{
                                        position: "absolute",
                                        top: "40px",
                                        right: "60px",
                                        opacity: 0.3,
                                    }}
                                >
                                    <path d="M15 5v20M5 15h20" stroke="#4B7BF5" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    style={{
                                        position: "absolute",
                                        top: "80px",
                                        left: "40px",
                                        opacity: 0.2,
                                    }}
                                >
                                    <path d="M10 3v14M3 10h14" stroke="#4B7BF5" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>

                            {/* Emergency Service Card - Bottom Overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "0",
                                    left: "0",
                                    backgroundColor: "#FFFFFF",
                                    padding: "20px 28px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    borderTopRightRadius: "16px",
                                    boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                {/* Phone Icon */}
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(75, 123, 245, 0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"
                                            stroke="#4B7BF5"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                {/* Emergency Info */}
                                <div>
                                    <p
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            color: "#64748b",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                            margin: "0 0 4px 0",
                                        }}
                                    >
                                        Emergency Service
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: 700,
                                            color: "#1A1A2E",
                                            margin: 0,
                                        }}
                                    >
                                        +(690) 2560 0020
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div
                        style={{
                            flex: "1 1 400px",
                            minWidth: "300px",
                        }}
                    >
                        {/* Heading */}
                        <h2
                            style={{
                                fontSize: "36px",
                                fontWeight: 700,
                                color: "#1A1A2E",
                                lineHeight: 1.3,
                                marginBottom: "24px",
                            }}
                        >
                            Support Groups for
                            <br />
                            Depression & Anxiety
                        </h2>

                        {/* Description */}
                        <p
                            style={{
                                fontSize: "16px",
                                lineHeight: 1.8,
                                color: "#64748b",
                                marginBottom: "32px",
                                maxWidth: "440px",
                            }}
                        >
                            Letraset sheets containing Lorem Ipsum passages and more recently
                            with desktop publishing Various versions have evolved over the
                            years, sometimes by accident, sometimes chunks as necessary making.
                        </p>

                        {/* Learn More Button */}
                        <button
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                padding: "14px 36px",
                                fontSize: "15px",
                                fontWeight: 600,
                                color: isHovered ? "#FFFFFF" : "#4B7BF5",
                                backgroundColor: isHovered ? "#4B7BF5" : "transparent",
                                border: "2px solid #4B7BF5",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            Learn More
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                style={{
                                    transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                <path
                                    d="M3 8h10M9 4l4 4-4 4"
                                    stroke={isHovered ? "#FFFFFF" : "#4B7BF5"}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
        @media (max-width: 900px) {
          section > div > div {
            flex-direction: column !important;
            text-align: center;
          }
          section > div > div > div:last-child {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          section > div > div > div:last-child p {
            text-align: center;
          }
        }
      `}</style>
        </section>
    );
};

export default SupportGroupsSection;