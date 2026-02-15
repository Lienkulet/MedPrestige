import "./admin-footer.css";

export default function AdminFooter() {
  return (
    <div className="admin-footer">
      <div>© {new Date().getFullYear()} MedPrestige Admin</div>
      <div className="admin-footer__muted">v0.1 (UI only)</div>
    </div>
  );
}
