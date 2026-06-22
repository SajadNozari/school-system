"use client";

export default function SuperAdminPage() {
return (
<div className="min-h-screen bg-slate-100 flex">

  {/* Sidebar */}
  <aside className="w-72 bg-slate-900 text-white p-6">

    <h1 className="text-2xl font-bold mb-10">
      👑 سوپر ادمین
    </h1>

    <nav className="space-y-3">

      <a
        href="/superadmin/students"
        className="block p-3 rounded-xl bg-slate-800 hover:bg-blue-600 transition"
      >
        👨‍🎓 مدیریت دانش‌آموزان
      </a>

      <div className="p-3 rounded-xl bg-slate-800">
        👨‍🏫 مدیریت معلمان
      </div>

      <div className="p-3 rounded-xl bg-slate-800">
        🏫 مدیریت کلاس‌ها
      </div>

      <div className="p-3 rounded-xl bg-slate-800">
        📝 مدیریت آزمون‌ها
      </div>

      <div className="p-3 rounded-xl bg-slate-800">
        💰 مدیریت مالی
      </div>

      <div className="p-3 rounded-xl bg-slate-800">
        ⚙ تنظیمات
      </div>

    </nav>
  </aside>

  {/* Main */}
  <main className="flex-1 p-8">

    <h2 className="text-3xl font-bold mb-8">
      داشبورد مدیریت
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-gray-500">دانش‌آموزان</h3>
        <p className="text-3xl font-bold mt-2">0</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-gray-500">معلمان</h3>
        <p className="text-3xl font-bold mt-2">0</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-gray-500">کلاس‌ها</h3>
        <p className="text-3xl font-bold mt-2">0</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-gray-500">آزمون‌ها</h3>
        <p className="text-3xl font-bold mt-2">0</p>
      </div>

    </div>

    {/* Activity */}
    <div className="bg-white rounded-2xl shadow-lg mt-8 p-6">

      <h3 className="text-xl font-bold mb-4">
        آخرین فعالیت‌ها
      </h3>

      <p className="text-gray-500">
        هنوز فعالیتی ثبت نشده است.
      </p>

    </div>

  </main>
</div>

);
}