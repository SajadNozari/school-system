export default function SuperAdminPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>👑 Super Admin Dashboard</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 20 }}>
        <div style={{ padding: 20, background: "#f2f2f2" }}>👤 Users Management</div>
        <div style={{ padding: 20, background: "#f2f2f2" }}>🏫 Classes</div>
        <div style={{ padding: 20, background: "#f2f2f2" }}>📝 Exams</div>
        <div style={{ padding: 20, background: "#f2f2f2" }}>📊 Reports</div>
      </div>
    </div>
  );
}