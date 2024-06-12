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
        <li>Led code reviews to ensure top-notch code quality and fostered team collaboration.</li>
        <li>Designed and developed UI components, enhancing user engagement by 25%.</li>
        <li>Enhanced Allstate's Employee Portal for streamlined beneficiary updates, ensuring universal access to coverage information for over 10,000 users.</li>
        <li>Engineered functionalities for claim management, processing over 500 claims monthly for various insurance types.</li>
        <li>Integrated authentication via OKTA for seamless configuration across multiple environments.</li>
        <li>Utilized Jenkins for continuous integration, Git for version control, and JIRA for project management, alongside ES Lint for code quality checks.</li>
        <li>Contributed to improving code coverage and resolving defects, resulting in an 80% reduction in Sonar issues.</li>
      </ul>
`,
  primarySkill: "",
};
export const defaultExperienceState: ExperienceState[] = [defaultExperience];
