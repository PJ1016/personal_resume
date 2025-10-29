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
  employer: "Accenture",
  jobTitle: "Application Development Analyst",
  city: "Hyderabad",
  state: "India",
  startDate: "OCT 2021",
  endDate: "JAN 2025",
  jobDescription: `
    <h4>Delivered enterprise React applications for clients including Allstate and CNA Insurance, improving performance, usability, and deployment efficiency.</h4>
    <ul>
        <li>Developed and optimized UI features for Allstate's Employee Portal serving 10,000+ users, reducing process time by 30% and support inquiries by 40%.</li>
        <li>Built a React-based microsite for CNA Insurance with OKTA authentication, reducing document handling time by 40%.</li>
        <li>Drove code quality improvements by 30% through code reviews, ESLint adoption, and CI/CD automation with Jenkins, Git, and JIRA.</li>
    </ul>
  `,
  primarySkill: "",
};
const currentExperience: ExperienceState = {
  id: Math.random().toString(),
  employer: "Infosys Limited",
  jobTitle: "Senior Associate Consultant",
  city: "Hyderabad",
  state: "India",
  startDate: "JAN 2025",
  endDate: "Present",
  jobDescription: `
    <h4>Microsoft's Unified Support Pricing Platform:</h4>
    <ul>
        <li>Engineered and optimized the UI for Microsoft's Unified Support Pricing Platform using React and Fluent UI, enhancing scalability and responsiveness across complex pricing workflows.</li>
        <li>Integrated GraphQL APIs and built a hybrid state architecture with Context API and Redux Toolkit, streamlining data synchronization and reducing redundant API calls by 20%.</li>
        <li>Improved performance and accessibility compliance (WCAG 2.1) through virtualization, code splitting, and ARIA optimization, resulting in smoother load times and inclusive UX.</li>
        <li>Collaborated with global teams via Azure DevOps, managing feature flags and automating deployments, which reduced environment configuration time by 30%.</li>
        <li>Led React capability sessions for the team, standardizing UI practices and accelerating onboarding for new developers.</li>
    </ul>
  `,
  primarySkill: "",
};

export const defaultExperienceState: ExperienceState[] = [
  currentExperience,
  defaultExperience,
];
