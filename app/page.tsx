import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          marginBottom: "50px",
        }}
      >
        <h2>🏫 School Hub</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <span>صفحه اصلی</span>
          <span>امکانات</span>
          <span>درباره ما</span>
          <span>تماس با ما</span>
        </div>
      </div>

      <h1
        style={{
          fontSize: "55px",
          marginBottom: "20px",
        }}
      >
        🏫 سامانه مدیریت مدارس
      </h1>

      <p
        style={{
          fontSize: "24px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        سامانه جامع مدیریت مدارس، آزمون آنلاین، کارنامه،
        مدیریت معلمان، دانش‌آموزان و امور مالی
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "15px",
            width: "250px",
          }}
        >
          <h3>📝 آزمون آنلاین</h3>
          <p>برگزاری آزمون با زمان‌بندی و تصحیح خودکار</p>
        </div>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "15px",
            width: "250px",
          }}
        >
          <h3>📚 آموزش مجازی</h3>
          <p>آپلود ویدیو و جزوات آموزشی</p>
        </div>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "15px",
            width: "250px",
          }}
        >
          <h3>📊 کارنامه هوشمند</h3>
          <p>مشاهده نمرات و پیشرفت تحصیلی</p>
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <Link href="/login">
          <button
            style={{
              padding: "15px 35px",
              fontSize: "20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            ورود به سامانه
          </button>
        </Link>
      </div>
    </div>
  );
}