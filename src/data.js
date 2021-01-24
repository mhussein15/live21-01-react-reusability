import InstructorTag from "./components/InstructorTag";

class Instructor {
  constructor(emoji, name, github) {
    this.id = Instructor.incrementId();
    this.emoji = emoji;
    this.name = name;
    this.github = github;
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}
const InstructorData = [
  new Instructor("🌚", "Hamza","DarthHamza"),
  new Instructor("🐥", "Laila","Lailz"),
  new Instructor("🦍", "Hasan","thehasanas"),
];
export default InstructorData;
