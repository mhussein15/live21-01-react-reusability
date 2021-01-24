import { AppWrapper } from "./components/styles";
import InstructorData from "./data";
import InstructorTag from "./components/InstructorTag";
const App = () => {
  const Instructors = InstructorData.map((instructor) => (
    <InstructorTag
      key={instructor.id}
      name={instructor.name}
      github={instructor.github}
      emoji={instructor.emoji}
    />
  ));
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      {Instructors}
    </AppWrapper>
  );
};

export default App;
