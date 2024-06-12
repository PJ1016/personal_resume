export interface ExperienceState {
  id: string;
  employer: string;
  jobTitle: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
  primarySkill: string;
}
export const defaultExperience: ExperienceState = {
  id: Math.random().toString(),
  employer: "Accenture (Hyderabad, India)",
  jobTitle: "Application Development Analyst",
  city: "",
  state: "",
  startDate: "OCT 2021",
  endDate: "PRESENT",
  jobDescription: `
     <ul>
  <li><strong>Code Reviews and Team Collaboration:</strong> Led code reviews and team collaboration, improving code quality and reducing issues by 30%, and utilized Jenkins, Git, JIRA, and ES Lint for continuous integration and project management.</li>
  <li><strong>UI Component Design and Development:</strong> Designed and developed UI components with React and Angular, boosting user engagement by 25%, and enhanced Allstate's Employee Portal for over 10,000 users, improving satisfaction by 40%.</li>
  <li><strong>Claim Management Functionality and OKTA Integration:</strong> Engineered claim management functionalities, processing over 500 claims monthly and improving efficiency by 20%, and integrated OKTA for secure, seamless authentication across environments.</li>
  <li><strong>Code Quality and Defect Resolution:</strong> Contributed to code quality and defect resolution, achieving an 80% reduction in Sonar issues through improved code coverage and defect resolution strategies.</li>
</ul>


`,
  primarySkill: "",
};
export const defaultExperienceState: ExperienceState[] = [defaultExperience];
