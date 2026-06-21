export default function SuperAdminPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Super Admin Dashboard</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <div style={{ padding: 20, background: "#eee" }}>Users</div>
        <div style={{ padding: 20, background: "#eee" }}>Classes</div>
        <div style={{ padding: 20, background: "#eee" }}>Exams</div>
        <div style={{ padding: 20, background: "#eee" }}>Reports</div>
      </div>
    </div>
  );
}