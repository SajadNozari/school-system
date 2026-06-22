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
    <div style={{ padding: "20px" }}>
      <h1>👨‍🎓 مدیریت دانش‌آموزان</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="نام دانش‌آموز"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "8px",
            marginLeft: "10px",
          }}
        />

        <button onClick={addStudent}>
          ➕ افزودن دانش‌آموز
        </button>
      </div>

      <hr />

      <h3>لیست دانش‌آموزان</h3>

      <ul>
        {students.map((student, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
            }}
          >
            {student}

            <button
              onClick={() => deleteStudent(index)}
              style={{
                marginRight: "10px",
              }}
            >
              🗑 حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}