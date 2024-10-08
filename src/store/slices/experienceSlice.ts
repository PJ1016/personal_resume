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
  employer: "Application Development Analyst",
  jobTitle: "Accenture, Hyderabad, India",
  city: "",
  state: "",
  startDate: "OCT 2021",
  endDate: "PRESENT",
  jobDescription: `
    <h4 >Employee Portal Development (Allstate):</h4>
    <ul>
        <li>Developed features for the Employee Portal, improving access for over 10,000 users and streamlining beneficiary updates, reducing process time by 30%.</li>
        <li>Collaborated with cross-functional teams to identify user needs and implement data-driven enhancements, enabling real-time decision-making capabilities.</li>
        <li>Reduced customer service inquiries by 40% through the implementation of self-service features like the Message Center.</li>
    </ul>
    <h4>Marsh Microsite Development (CNA Insurance):</h4>
    <ul>
      <li>Established a React-based microsite for coverage management, enhancing navigation and reducing document handling time by 40%.</li>
      <li>Integrated secure OKTA authentication across environments, ensuring seamless access.</li>
      <li>Developed a customizable React-based platform allowing users to perform in-depth financial analysis, improving efficiency and user engagement.</li>
    </ul>

    <h4>Code Reviews and Continuous Integration:</h4>
    <ul>
      <li>Led code reviews, enhancing code quality by 30%, and utilized Jenkins, Git, JIRA, and ES Lint for project management and integration.</li>
    </ul>


`,
  primarySkill: "",
};
export const defaultExperienceState: ExperienceState[] = [defaultExperience];
