// src/CourseList.jsx
import React from 'react';
import PurchaseCourse from './PurchaseCourse';

function CourseList({ courses }) {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id} style={{ marginBottom: '20px' }}>
          <h3>{course.name}</h3>
          <PurchaseCourse courseId={course.id} />
        </div>
      ))}
    </div>
  );
}

export default CourseList;
