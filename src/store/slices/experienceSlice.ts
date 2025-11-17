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
    <ul>
        <li>Developed enterprise React applications for Allstate and CNA Insurance, improving usability, performance, and delivery efficiency.</li>
        <li>Enhanced Allstate's Employee Portal serving 10,000+ users, improving process efficiency by 30% and reducing support tickets by 40%.</li>
        <li>Built OKTA-secured microsites for CNA Insurance, reducing document management effort by 40%.</li>
        <li>Elevated code quality across the team through code reviews, ESLint rules, Sonar fixes, and CI/CD improvements with Jenkins + Git, reducing defects by 30%.</li>
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
        <li>Built and optimized complex UI workflows using React + Fluent UI, improving rendering performance and reducing latency across pricing modules.</li>
        <li>Integrated GraphQL APIs and implemented a hybrid state architecture (Redux Toolkit + Context) cutting redundant API calls by 20%.</li>
        <li>Improved accessibility and load performance (WCAG 2.1) through virtualization, ARIA enhancements, and code splitting — resulting in significantly smoother navigation.</li>
        <li>Automated deployments and feature flag workflows via Azure DevOps, decreasing environment configuration time by 30%.</li>
        <li>Conducted React capability sessions, standardizing UI practices and reducing onboarding time for new engineers.</li>
    </ul>
  `,
  primarySkill: "",
};

export const defaultExperienceState: ExperienceState[] = [
  currentExperience,
  defaultExperience,
];
