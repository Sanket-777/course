import React, { useState } from "react";

import Course from "./Courses";
export default function Allcourses() {
  const [courses, setcourses] = useState([
    { title: "java", description: "This is the World's Best Java Course" },
    { title: "Django", description: "This is the World's Best Django Course" },
    { title: "Python", description: "This is the World's Best Python Course" },
    { title: "C++", description: "This is the World's Best C++ Course" },
  ]);
  return (
    <>
      <h1>All Courses</h1>
      <h2>You can find all courses below</h2>
      <div>
        {courses.length > 0
          ? courses.map((item) => <Course course={item} />)
          : "No Courses are available right now"}
      </div>
    </>
  );
}
