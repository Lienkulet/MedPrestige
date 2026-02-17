import React from "react";
import Link from "next/link";

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
);

const TwitterXIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const badges = [
    { label: "LinkedIn", href: "#", color: "#0077B5", Icon: LinkedInIcon },
    { label: "Facebook", href: "#", color: "#1877F2", Icon: FacebookIcon },
    { label: "Twitter / X", href: "#", color: "#000000", Icon: TwitterXIcon },
];

const DoctorCard = ({ id, name, specialty, image, hasSocial = false, index = 0 }) => {
    const badgeBase = {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        textDecoration: "none",
    };

    const socialWrapper = {
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginTop: "12px", // space after specialty
        marginBottom: "16px", // space before card bottom
        listStyle: "none",
        padding: 0,
    };

    return (
        <article
            className="doctor-card"
            style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
                position: "relative",
                maxWidth: "270px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: index % 2 === 0 ? "90px" : "0",
                transition: "box-shadow 0.25s ease",
            }}
        >
            <style>{`
        .doctor-card {
          cursor: pointer;
        }
        .doctor-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
        .social-badge:hover {
          transform: scale(1.15) !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25) !important;
        }
      `}</style>

            <Link href={`/doctors/${id}`} aria-label={`View profile of ${name}`}>
                <figure style={{ margin: 0 }}>
                    <img
                        src={image}
                        alt={`Portrait of ${name}`}
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />
                    <figcaption style={{ padding: "20px 20px 0 20px" }}>
                        <h3 style={{ fontWeight: "bold", margin: "10px 0 5px", color: "#001f3f" }}>{name}</h3>
                        <p style={{ color: "#007bff", margin: 0 }}>{specialty}</p>
                    </figcaption>
                </figure>
            </Link>

            {hasSocial && (
                <ul className="social-badges" style={socialWrapper}>
                    {badges.map(({ label, href, color, Icon }) => (
                        <li key={label}>
                            <a
                                href={href}
                                aria-label={`${name} ${label} profile`}
                                className="social-badge"
                                style={{ ...badgeBase, backgroundColor: color, color: "#fff" }}
                            >
                                <Icon />
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
};

export default DoctorCard;