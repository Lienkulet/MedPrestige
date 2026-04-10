"use client";

import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";
import "./ContactConsultationCard.css";

const CustomSelect = ({ options, placeholder, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value) || null;

  return (
    <div className="custom-select" ref={ref}>
      <button
        type="button"
        className={`custom-select__trigger${open ? " open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selected ? undefined : "custom-select__placeholder"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg className="custom-select__chevron" width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul className="custom-select__menu" role="listbox">
          {options.map((opt) => (
            <li key={opt.value} role="option" aria-selected={value === opt.value}
              className={`custom-select__option${value === opt.value ? " custom-select__option--selected" : ""}`}
              onClick={() => { onChange(opt.value); setOpen(false); }}>
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ContactConsultationCard = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
      .then((r) => r.ok ? r.json() : [])
      .then(setServices);
  }, []);

  useEffect(() => {
    if (!serviceId) { setDoctors([]); setDoctorId(""); return; }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${serviceId}/doctors`)
      .then((r) => r.ok ? r.json() : [])
      .then((data) => { setDoctors(data); setDoctorId(""); });
  }, [serviceId]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      toast.error("Please log in to book an appointment.");
      router.push("/login");
      return;
    }
    if (!serviceId || !date || !time) {
      toast.error("Please fill in all fields.");
      return;
    }

    const startAt = new Date(date);
    startAt.setHours(time.getHours(), time.getMinutes(), 0, 0);

    setSubmitting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          PatientId: user.patientId,
          ServiceId: parseInt(serviceId),
          DoctorId: doctorId ? parseInt(doctorId) : null,
          StartAt: startAt.toISOString(),
          Status: "confirmed",
        }),
      });
      if (!res.ok) throw new Error();
      toast.success("Appointment requested! We'll confirm within 24 hours.");
      setServiceId("");
      setDate(null);
      setTime(null);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const serviceOptions = services.map((s) => ({ value: String(s.ServiceId), label: s.Name }));
  const doctorOptions = doctors.map((d) => ({ value: String(d.DoctorId), label: d.Name }));

  return (
    <section className="consult-card" aria-labelledby="consult-title">
      <h2 id="consult-title" className="consult-card__title">Book an Appointment</h2>
      <p className="consult-card__subtitle">
        {user
          ? `Booking as ${user.Name}. Complete the form below.`
          : "Complete the form below and our team will confirm your visit within 24 hours."}
      </p>

      <form className="consult-card__form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Service<span aria-hidden="true">*</span></label>
          <CustomSelect
            options={serviceOptions}
            placeholder="Choose a service"
            value={serviceId}
            onChange={setServiceId}
          />
        </div>

        {doctors.length > 0 && (
          <div className="field">
            <label>Doctor<span aria-hidden="true">*</span></label>
            <CustomSelect
              options={doctorOptions}
              placeholder="Choose a doctor"
              value={doctorId}
              onChange={setDoctorId}
            />
          </div>
        )}

        <div className="field">
          <label htmlFor="appt-date">Preferred date<span aria-hidden="true">*</span></label>
          <DatePicker
            id="appt-date"
            selected={date}
            onChange={setDate}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a date"
            minDate={new Date()}
            className="dp-input dp-input--date"
          />
        </div>

        <div className="field">
          <label htmlFor="appt-time">Preferred time<span aria-hidden="true">*</span></label>
          <DatePicker
            id="appt-time"
            selected={time}
            onChange={setTime}
            showTimeSelect showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
            placeholderText="Select a time"
            className="dp-input dp-input--time"
          />
        </div>

        {!user && (
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>
            You need to{" "}
            <a href="/login" style={{ color: "var(--accent)" }}>log in</a> or{" "}
            <a href="/register" style={{ color: "var(--accent)" }}>create an account</a>{" "}
            to book an appointment.
          </p>
        )}

        <button className="consult-card__button" type="submit" disabled={submitting}>
          {submitting ? "Requesting..." : user ? "Request Appointment" : "Log in to Book"}
        </button>
      </form>
    </section>
  );
};

export default ContactConsultationCard;
