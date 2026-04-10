"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./dashboard.css";

export default function AdminDashboardPage() {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = toast.loading("Loading...", { id: "page-load" });
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors`).then((r) => r.ok ? r.json() : []),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`).then((r) => r.ok ? r.json() : []),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments`).then((r) => r.ok ? r.json() : []),
    ]).then(([d, s, a]) => {
      setDoctors(d);
      setServices(s);
      setAppointments(a);
      setLoading(false);
      toast.dismiss(id);
    }).catch(() => { setLoading(false); toast.dismiss(id); });
  }, []);

  const today = new Date().toDateString();
  const todayAppts = appointments.filter((a) => a.StartAt && new Date(a.StartAt).toDateString() === today);

  const weekEnd = new Date();
  weekEnd.setDate(weekEnd.getDate() + 7);
  const weekAppts = appointments.filter((a) => {
    if (!a.StartAt) return false;
    const d = new Date(a.StartAt);
    return d >= new Date() && d <= weekEnd;
  });

  const doctorApptCount = doctors.map((d) => ({
    name: d.Name,
    count: appointments.filter((a) => a.DoctorId === d.DoctorId).length,
  })).sort((a, b) => b.count - a.count).slice(0, 5);

  const recentAppts = [...appointments]
    .sort((a, b) => new Date(b.StartAt) - new Date(a.StartAt))
    .slice(0, 10);

  function formatDate(dt) {
    if (!dt) return "—";
    return new Date(dt).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
  }

  function statusClass(status) {
    if (!status) return "pill--muted";
    const s = status.toLowerCase();
    if (s === "confirmed") return "pill--ok";
    if (s === "completed") return "pill--info";
    return "pill--muted";
  }

  return (
    <div className="dash">
      <div className="dash__header">
        <div>
          <h1 className="dash__title">Welcome back, Admin</h1>
          <p className="dash__subtitle">Here's what's happening at your clinic today.</p>
        </div>
      </div>

      <section className="dash__kpis">
        <div className="kpi">
          <div className="kpi__label">Total Doctors</div>
          <div className="kpi__value">{loading ? "—" : doctors.length}</div>
        </div>
        <div className="kpi">
          <div className="kpi__label">Total Services</div>
          <div className="kpi__value">{loading ? "—" : services.length}</div>
        </div>
        <div className="kpi">
          <div className="kpi__label">Today's Appointments</div>
          <div className="kpi__value">{loading ? "—" : todayAppts.length}</div>
        </div>
        <div className="kpi">
          <div className="kpi__label">Upcoming This Week</div>
          <div className="kpi__value">{loading ? "—" : weekAppts.length}</div>
        </div>
      </section>

      <section className="dash__grid">
        <div className="card">
          <div className="card__title">Doctors with most appointments</div>
          <div className="table-scroll" role="region" tabIndex={0}>
            <table className="table table--compact">
              <thead>
                <tr><th>Doctor</th><th>Appointments</th></tr>
              </thead>
              <tbody>
                {doctorApptCount.length === 0 && !loading && (
                  <tr><td colSpan={2} style={{ textAlign: "center", opacity: 0.5 }}>No data</td></tr>
                )}
                {doctorApptCount.map((d) => (
                  <tr key={d.name}>
                    <td>{d.name}</td>
                    <td>{d.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card__title">Active Services</div>
          <div className="table-scroll" role="region" tabIndex={0}>
            <table className="table table--compact">
              <thead>
                <tr><th>Service</th><th>Price</th></tr>
              </thead>
              <tbody>
                {services.length === 0 && !loading && (
                  <tr><td colSpan={2} style={{ textAlign: "center", opacity: 0.5 }}>No data</td></tr>
                )}
                {services.filter((s) => s.Status?.toLowerCase() === "active").map((s) => (
                  <tr key={s.ServiceId}>
                    <td>{s.Name}</td>
                    <td>{s.Price ? `$${s.Price}` : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card card--full">
          <div className="card__title">Recent Appointments</div>
          <div className="table-scroll" role="region" tabIndex={0}>
            <table className="table table--wide">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Doctor</th>
                  <th>Service</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAppts.length === 0 && !loading && (
                  <tr><td colSpan={4} style={{ textAlign: "center", opacity: 0.5 }}>No appointments yet</td></tr>
                )}
                {recentAppts.map((a) => (
                  <tr key={a.AppointmentId}>
                    <td>{formatDate(a.StartAt)}</td>
                    <td>{a.DoctorName ?? "—"}</td>
                    <td>{a.ServiceName ?? "—"}</td>
                    <td>
                      <span className={`pill ${statusClass(a.Status)}`}>{a.Status ?? "—"}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
