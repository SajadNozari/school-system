"use client";

import { useState } from "react";

export default function StudentsPage() {
  const [students, setStudents] = useState<string[]>([]);
  const [name, setName] = useState("");

  const addStudent = () => {
    if (!name.trim()) return;
    setStudents([...students, name]);
    setName("");
  };

  const deleteStudent = (index: number) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 font-sans">
      
      {/* Card */}
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-white/40">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          👨‍🎓 مدیریت دانش‌آموزان
        </h1>

        {/* Form */}
        <div className="flex gap-3 mb-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="نام دانش‌آموز را وارد کنید..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={addStudent}
            className="px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            ➕ افزودن
          </button>
        </div>

        {/* List */}
        <div className="space-y-3">
          {students.length === 0 ? (
            <p className="text-gray-500 text-center py-6">
              هنوز هیچ دانش‌آموزی ثبت نشده
            </p>
          ) : (
            students.map((s, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border"
              >
                <span className="text-gray-700">{s}</span>

                <button
                  onClick={() => deleteStudent(i)}
                  className="text-red-500 hover:text-red-700"
                >
                  حذف 🗑
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}