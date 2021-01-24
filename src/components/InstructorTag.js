import { TagWrapper, Emoji, Name, GoToGithub } from "./styles";

const InstructorTag = (props) => {
  const { name,emoji,github } = props;
  return (
    <TagWrapper onClick={() => window.open(`https://github.com/${github}`)}>
      <Emoji>{emoji}</Emoji>
      <Name>{name}</Name>
      <GoToGithub>Go to GitHub</GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
