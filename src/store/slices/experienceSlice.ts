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
        <li>Led code reviews and front-end collaboration, improving overall code quality and reducing recurring issues by 30%. Implemented CI/CD best practices using Jenkins, Git, JIRA, and ESLint, improving delivery efficiency and build reliability.</li>
        <li>Designed and developed reusable UI components using React and Angular, increasing UI consistency and boosting user engagement by 25% across multiple enterprise modules.</li>
        <li>Enhanced Allstate's Employee Portal, used by 10,000+ users, optimizing key workflows and improving user satisfaction scores by 40% through performance tuning and UX refinements.</li>
        <li>Engineered claim management features to process 500+ claims/month, improving operational efficiency by 20% through automation and workflow optimization.</li>
        <li>Integrated OKTA authentication to deliver secure, seamless login experiences across environments, reducing access-related issues and improving reliability.</li>
        <li>Improved code quality by 80% through systematic Sonar issue reductions, stronger test coverage, and defect resolution strategies that improved long-term maintainability.</li>
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
        <li>Architected reusable components and utilities aligned with Fluent UI, reducing development time for new modules by 20%.</li>
        <li>Implemented unit tests using Jest + RTL, reducing post-deployment UI defects by 15–20%.</li>
    </ul>
  `,
  primarySkill: "",
};

export const defaultExperienceState: ExperienceState[] = [
  currentExperience,
  defaultExperience,
];
