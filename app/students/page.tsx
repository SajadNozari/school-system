export default function StudentsPage() {
  return (
    <div
      style={{
        padding: "30px",
        direction: "rtl",
        fontFamily: "Tahoma",
      }}
    >
      <h1>👨‍🎓 مدیریت دانش‌آموزان</h1>

      <hr />

      <button
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
        }}
      >
        ➕ افزودن دانش‌آموز
      </button>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>پایه</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>علی</td>
            <td>محمدی</td>
            <td>هفتم</td>
          </tr>

          <tr>
            <td>2</td>
            <td>رضا</td>
            <td>احمدی</td>
            <td>هشتم</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}