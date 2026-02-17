import React from "react";
import PagesHero from "@/components/PagesHero/PagesHero";
import ContactCardFooter from "@/components/ContactCardFooter/ContactCardFooter";

const DoctorProfile = ({
                         name,
                         image,
                         biography,
                         occupation,
                         experience,
                         certificates = [],
                         skills = [],
                         location,
                         phone,
                         email,
                         awards = [],
                         awardNote,
                         skillRatings = [],
                         skillNote,
                       }) => {
  return (
      <main>
        <PagesHero
            title={name}
            subtitle={occupation}

        />
        <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Two-column header: big photo left, all info right */}
        <div
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: "40px",
              alignItems: "start",
            }}
        >
          {/* LEFT: Photo */}
          <img
              src={image}
              alt={name}
              style={{
                width: "100%",
                height: "420px",
                borderRadius: "14px",
                objectFit: "cover",
                boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
                display: "block",
              }}
          />

          {/* RIGHT: All content */}
          <div>
            {/* Name & occupation */}
            <h1 style={{ margin: "0 0 6px", color: "#001f3f", fontSize: "28px" }}>{name}</h1>
            <p style={{ margin: "0 0 16px", color: "#007bff", fontWeight: "600", fontSize: "16px" }}>
              {occupation}
            </p>

            {/* Biography */}
            <section style={{ marginBottom: "24px" }}>
              <h2 style={{ margin: "0 0 8px", color: "#007bff", fontSize: "18px" }}>Biography</h2>
              <p style={{ margin: 0, color: "#333", lineHeight: 1.7 }}>{biography}</p>
            </section>

            {/* Profile */}
            <section style={{ marginBottom: "24px" }}>
              <h2 style={{ margin: "0 0 10px", color: "#007bff", fontSize: "18px" }}>Profile</h2>
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <tbody>
                {[
                  ["Occupation", occupation],
                  ["Experience", experience],
                  ["Certificates", certificates.join(", ")],
                  ["Skills", skills.join(", ")],
                  ["Location", location],
                  ["Phone", phone],
                  ["Email", email],
                ].map(([label, value]) => (
                    <tr key={label}>
                      <td style={{ padding: "5px 16px 5px 0", fontWeight: "600", color: "#001f3f", whiteSpace: "nowrap", verticalAlign: "top" }}>
                        {label}
                      </td>
                      <td style={{ padding: "5px 0", color: "#444", lineHeight: 1.5 }}>{value}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </section>

            {/* Awards */}
            <section style={{ marginBottom: "24px" }}>
              <h2 style={{ margin: "0 0 8px", color: "#007bff", fontSize: "18px" }}>Awards & Honors</h2>
              <p style={{ margin: "0 0 8px", color: "#333" }}>{awardNote}</p>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#333" }}>
                {awards.map((award, idx) => (
                    <li key={idx} style={{ marginBottom: "4px" }}>{award}</li>
                ))}
              </ul>
            </section>

            {/* Skills */}
            <section>
              <h2 style={{ margin: "0 0 8px", color: "#007bff", fontSize: "18px" }}>My Skills</h2>
              <p style={{ margin: "0 0 12px", color: "#333" }}>{skillNote}</p>
              {skillRatings.map(({ skill, rating }, idx) => (
                  <div key={idx} style={{ marginBottom: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <strong style={{ color: "#001f3f" }}>{skill}</strong>
                      <span style={{ color: "#007bff", fontSize: "13px" }}>{rating}%</span>
                    </div>
                    <div
                        style={{
                          backgroundColor: "#e9ecef",
                          borderRadius: "6px",
                          overflow: "hidden",
                          height: "10px",
                        }}
                    >
                      <div
                          style={{
                            width: `${rating}%`,
                            backgroundColor: "#007bff",
                            height: "100%",
                            borderRadius: "6px",
                            transition: "width 0.5s ease",
                          }}
                      />
                    </div>
                  </div>
              ))}
            </section>
          </div>
        </div>
      </section>
      <ContactCardFooter />
      </main>
  );
};

const DoctorProfilePage = () => {
  return (
      <DoctorProfile
          name="Dr. Jessica Joan"
          image="/doctor1.jpg"
          biography="Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from re"
          occupation="Nephrology"
          experience="20 years"
          certificates={["Robert L. Nobel Price", "Edison Awards"]}
          skills={["Working with both children and adults"]}
          location="380 Albert ST, Melbourne"
          phone="+1  (230)-369-155-23"
          email="jessica@joan.com"
          awardNote="It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from re"
          awards={[
            "Robert L. Nobel Price",
            "Edison Awards",
            "Canadian Cancer Society",
            "Research in Developmental",
          ]}
          skillNote="It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate."
          skillRatings={[
            { skill: "Empathy", rating: 95 },
            { skill: "Technique", rating: 84 },
            { skill: "Operation", rating: 90 },
          ]}
      />

  );
};

export default DoctorProfilePage;