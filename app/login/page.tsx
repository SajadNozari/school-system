import Link from "next/link";

export default function LoginPage() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>🔐 ورود به سامانه مدرسه</h1>

      <input
        placeholder="نام کاربری"
        style={{
          display: "block",
          margin: "20px auto",
          padding: 10,
        }}
      />

      <input
        type="password"
        placeholder="رمز عبور"
        style={{
          display: "block",
          margin: "20px auto",
          padding: 10,
        }}
      />

      <Link href="/superadmin">
        <button
          style={{
            padding: 10,
            marginTop: 20,
          }}
        >
          ورود
        </button>
      </Link>
    </div>
  );
}