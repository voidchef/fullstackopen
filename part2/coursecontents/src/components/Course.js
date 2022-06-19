const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => {
      return <Part key={part.id} part={part} />;
    })}
  </>
);

const Total = ({ sum }) => <h3>total of {sum} exercises</h3>;

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        sum={course.parts.reduce((sum, part) => sum + part.exercises, 0)}
      />
    </div>
  );
};

export default Course;
