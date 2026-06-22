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

  return (
    <div style={{ padding: 20 }}>
      <h1>👨‍🎓 مدیریت دانش‌آموزان</h1>

      <input
        type="text"
        placeholder="نام دانش‌آموز"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>
        ➕ افزودن دانش‌آموز
      </button>

      <hr />

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}