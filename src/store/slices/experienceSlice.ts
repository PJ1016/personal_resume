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
    <h4>Allstate — Employee Portal (10,000+ Users)</h4>
    <ul>
        <li>Led frontend development, code reviews, and CI/CD quality enforcement, improving code reliability and reducing recurring issues by 30%.</li>
        <li>Built reusable UI components in React & Angular, improving UI consistency and raising user engagement metrics by 25% across multiple enterprise modules.</li>
        <li>Optimized performance on high-traffic Employee Portal workflows, lifting user satisfaction scores by 40% through targeted UX and rendering improvements.</li>
        <li>Developed claim management functionalities that automated workflows for 500+ claims/month, improving operational efficiency by 20%.</li>
        <li>Integrated OKTA-based authentication, improving security and reducing access-related failures across environments.</li>
        <li>Achieved an 80% reduction in Sonar issues through systematic refactoring, improved tests, and defect-prevention strategies.</li>
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
    <h4>Microsoft – Unified Support Pricing </h4>
    <ul>
        <li>Engineered and optimized complex pricing workflows in React + Fluent UI, improving render performance and cutting UI latency across critical modules.</li>
        <li>Integrated GraphQL APIs and built a hybrid state architecture (Redux Toolkit + Context), reducing redundant API calls by 20% and improving data consistency.</li>
        <li>Enhanced accessibility and load performance via virtualization, ARIA updates, and code-splitting, resulting in smoother navigation and measurable UX improvements.</li>
        <li>Automated feature-flag deployments and CI/CD workflows using Azure DevOps, decreasing environment configuration time by 30%.</li>
        <li>Standardized UI development practices and conducted React capability sessions, reducing onboarding time for new engineers and improving cross-team code consistency.</li>
        <li>Built reusable component utilities aligned with Fluent UI guidelines, accelerating development of new modules by 20%.</li>
        <li>Implemented Jest + RTL unit tests, reducing UI defects after deployment by 15–20%.</li>
    </ul>
  `,
  primarySkill: "",
};

export const defaultExperienceState: ExperienceState[] = [
  currentExperience,
  defaultExperience,
];
