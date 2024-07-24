import Course from "./Course";

function Courses({ courses, removeCourse }) {
  // console.log(courses);
  return (
    <div className="course-main-div">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="card-div">
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
