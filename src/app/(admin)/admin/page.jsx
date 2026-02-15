import "./dashboard.css";

export default function AdminDashboardPage() {
  return (
    <div className="dash">
      <div className="dash__header">
        <div>
          <h1 className="dash__title">Welcome back, Admin 👋</h1>
          <p className="dash__subtitle">Here’s what’s happening at your clinic today.</p>
        </div>
      </div>

      <section className="dash__kpis">
        <div className="kpi">
          <div className="kpi__label">Total Doctors</div>
          <div className="kpi__value">12</div>
        </div>
        <div className="kpi">
          <div className="kpi__label">Total Services</div>
          <div className="kpi__value">24</div>
        </div>
        <div className="kpi">
          <div className="kpi__label">Today’s Appointments</div>
          <div className="kpi__value">8</div>
        </div>
        <div className="kpi">
          <div className="kpi__label">Upcoming This Week</div>
          <div className="kpi__value">31</div>
        </div>
      </section>

      <section className="dash__grid">
        <div className="card">
          <div className="card__title">Appointments per day (last 30 days)</div>
          <div className="chart-placeholder">
            Chart placeholder (we’ll wire a real chart later)
          </div>
        </div>

        <div className="card">
          <div className="card__title">Doctors with most appointments</div>
          <table className="table">
            <thead>
              <tr><th>Doctor</th><th>Appointments</th></tr>
            </thead>
            <tbody>
              {[
                ["Dr. Elena Popescu", 42],
                ["Dr. Andrei Ionescu", 38],
                ["Dr. Maria Stoica", 31],
                ["Dr. Vlad Marin", 27],
                ["Dr. Ioana Radu", 24],
              ].map(([name, count]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card card--full">
          <div className="card__title">Recent Appointments</div>
          <table className="table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Client</th>
                <th>Doctor</th>
                <th>Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Today 10:00", "Alex M.", "Dr. Elena", "Consultation", "Confirmed"],
                ["Today 11:30", "Mara L.", "Dr. Andrei", "Dermatology", "Confirmed"],
                ["Today 13:00", "Dan P.", "Dr. Maria", "Dental", "Completed"],
                ["Today 15:00", "Ioana T.", "Dr. Vlad", "Consultation", "Cancelled"],
                ["Today 16:30", "George R.", "Dr. Ioana", "Cardiology", "Confirmed"],
                ["Tomorrow 09:00", "Sonia B.", "Dr. Elena", "Consultation", "Confirmed"],
                ["Tomorrow 11:00", "Radu C.", "Dr. Andrei", "Dermatology", "Confirmed"],
                ["Fri 10:30", "Elena N.", "Dr. Maria", "Dental", "Confirmed"],
                ["Fri 14:00", "Paul S.", "Dr. Vlad", "Consultation", "No-show"],
                ["Sat 12:00", "Ana V.", "Dr. Ioana", "Cardiology", "Confirmed"],
              ].map((row, idx) => (
                <tr key={idx}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
