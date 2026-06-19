export default function SuperAdminPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <div style={{
        width: "260px",
        background: "rgba(15, 23, 42, 0.95)",
        color: "white",
        padding: "20px",
        backdropFilter: "blur(10px)"
      }}>
        <h2>🏫 مدرسه هوشمند</h2>

        <hr />

        <p>📊 داشبورد</p>
        <p>👨‍🎓 دانش‌آموزان</p>
        <p>👨‍🏫 معلمان</p>
        <p>📝 آزمون‌ها</p>
        <p>💰 مالی</p>
        <p>🤖 هوش مصنوعی</p>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: "30px" }}>

        <h1>✨ داشبورد مدیریتی</h1>

        <p>به سیستم مدیریت مدرسه خوش آمدید</p>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px"
        }}>

          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
          }}>
            👨‍🎓 دانش‌آموزان
            <h2>0</h2>
          </div>

          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
          }}>
            👨‍🏫 معلمان
            <h2>0</h2>
          </div>

          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
          }}>
            📝 آزمون‌ها
            <h2>0</h2>
          </div>

          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
          }}>
            💰 مالی
            <h2>0</h2>
          </div>

        </div>

      </div>
    </div>
  );
}