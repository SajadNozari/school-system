export default function SuperAdminPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>👑 داشبورد سوپر ادمین</h1>

      <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
        <a
          href="/superadmin/students"
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            display: "block",
            textDecoration: "none",
            color: "black",
          }}
        >
          👨‍🎓 مدیریت دانش‌آموزان
        </a>

        <div style={{ border: "1px solid #ccc", padding: "15px" }}>
          👨‍🏫 مدیریت معلمان
        </div>

        <div style={{ border: "1px solid #ccc", padding: "15px" }}>
          🏫 مدیریت کلاس‌ها
        </div>

        <div style={{ border: "1px solid #ccc", padding: "15px" }}>
          📝 مدیریت آزمون‌ها
        </div>

        <div style={{ border: "1px solid #ccc", padding: "15px" }}>
          📊 گزارش‌ها
        </div>
      </div>
    </div>
  );
}