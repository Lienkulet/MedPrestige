"use client";
import React, { useState } from "react";
import "./servicesection.css";
const services = [
    {
        name: "Cardiology",
        description:
            "Making this the true generator Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing...",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 42S6 30 6 17a9 9 0 0 1 18 0 9 9 0 0 1 18 0c0 13-18 25-18 25Z" stroke="#4B7BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 24h6l3-6 4 12 3-6h6" stroke="#4B7BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        name: "Radiology",
        description:
            "Making this the true generator Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing...",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" stroke="#4B7BF5" strokeWidth="2"/>
                <circle cx="24" cy="24" r="10" stroke="#4B7BF5" strokeWidth="2"/>
                <path d="M24 6v4M24 38v4M6 24h4M38 24h4" stroke="#4B7BF5" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="24" cy="24" r="3" fill="#4B7BF5"/>
            </svg>
        ),
    },
    {
        name: "Gynecology",
        description:
            "Making this the true generator Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing...",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="20" r="14" stroke="#4B7BF5" strokeWidth="2"/>
                <circle cx="24" cy="20" r="8" stroke="#4B7BF5" strokeWidth="2"/>
                <path d="M24 34v10M20 40h8" stroke="#4B7BF5" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        name: "Sports Injury",
        description:
            "Making this the true generator Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing...",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="8" r="4" stroke="#4B7BF5" strokeWidth="2"/>
                <path d="M24 14v10M18 20l6 4 6-4M16 36l8-12 8 12" stroke="#4B7BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 30h8" stroke="#4B7BF5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 16l4 4M36 16l-4 4" stroke="#4B7BF5" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        name: "Lung Diseases",
        description:
            "Making this the true generator Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing...",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 10v16" stroke="#4B7BF5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 18c-4 0-8 2-10 6s-3 10-1 14c1 2 3 3 5 3h6V18Z" stroke="#4B7BF5" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M24 18c4 0 8 2 10 6s3 10 1 14c-1 2-3 3-5 3h-6V18Z" stroke="#4B7BF5" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M18 28h4M26 28h4M20 34h3M25 34h3" stroke="#4B7BF5" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        name: "Eye Care",
        description:
            "Making this the true generator Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing...",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 24s8-14 20-14 20 14 20 14-8 14-20 14S4 24 4 24Z" stroke="#4B7BF5" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="24" cy="24" r="6" stroke="#4B7BF5" strokeWidth="2"/>
                <circle cx="24" cy="24" r="2" fill="#4B7BF5"/>
                <path d="M24 10V6M18 11l-1-3M30 11l1-3M14 14l-2-2M34 14l2-2" stroke="#4B7BF5" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        ),
    },
];

const ServicesSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section
            style={{
                backgroundColor: "#EEF3FB",
                padding: "80px 0",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 24px",
                }}
            >
                {/* Section Heading */}
                <h2
                    style={{
                        fontSize: "36px",
                        fontWeight: 700,
                        color: "#1A1A2E",
                        lineHeight: 1.3,
                        marginBottom: "48px",
                    }}
                >
                    Highly Innovative
                    <br />
                    Technology & Services
                </h2>

                {/* Cards Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "24px",
                        marginBottom: "48px",
                    }}
                >
                    {services.map((service, index) => {
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    position: "relative",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "12px",
                                    padding: "32px",
                                    minHeight: "220px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    cursor: "pointer",
                                    border: isHovered ? "2px solid #4B7BF5" : "2px solid transparent",
                                    overflow: "hidden",
                                    transition: "border 0.3s ease, box-shadow 0.3s ease",
                                    boxShadow: isHovered
                                        ? "0 8px 30px rgba(75, 123, 245, 0.15)"
                                        : "0 2px 12px rgba(0, 0, 0, 0.04)",
                                }}
                            >
                                {/* Hover overlay with description */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: isHovered ? "60%" : "0%",
                                        background: "linear-gradient(135deg, #5B8AF5 0%, #4B7BF5 50%, #3A6AE0 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: isHovered ? "28px 32px" : "0 32px",
                                        overflow: "hidden",
                                        transition: "height 0.4s ease, padding 0.3s ease",
                                        zIndex: 2,
                                        borderRadius: "10px 10px 0 0",
                                    }}
                                >
                                    <p
                                        style={{
                                            color: "#FFFFFF",
                                            fontSize: "15px",
                                            lineHeight: 1.7,
                                            opacity: isHovered ? 1 : 0,
                                            transition: "opacity 0.3s ease 0.15s",
                                            margin: 0,
                                        }}
                                    >
                                        {service.description}
                                    </p>
                                </div>

                                {/* Icon area */}
                                <div
                                    style={{
                                        opacity: isHovered ? 0 : 1,
                                        transition: "opacity 0.3s ease",
                                    }}
                                >
                                    {service.icon}
                                </div>

                                {/* Bottom area with separator and name */}
                                <div style={{ position: "relative", zIndex: 3 }}>
                                    <div
                                        style={{
                                            height: "1px",
                                            backgroundColor: "#E8EDF5",
                                            marginBottom: "20px",
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                    <span
                        style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "#1A1A2E",
                        }}
                    >
                      {service.name}
                    </span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{
                                                transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                transition: "transform 0.3s ease",
                                            }}
                                        >
                                            <path
                                                d="M4 10h12M12 6l4 4-4 4"
                                                stroke="#4B7BF5"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View More Button */}
                <button
                    style={{
                        padding: "12px 32px",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#4B7BF5",
                        backgroundColor: "transparent",
                        border: "2px solid #4B7BF5",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#4B7BF5";
                        e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#4B7BF5";
                    }}
                >
                    View More
                </button>
            </div>

            {/* Responsive styles */}
            <style>{`
        @media (max-width: 900px) {
          section > div > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          section > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          section > div > h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default ServicesSection;