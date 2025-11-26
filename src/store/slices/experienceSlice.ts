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
    <h4>Microsoft — Unified Support Pricing</h4>
    <ul>
        <li>Migrating legacy React modules to Next.js App Router, implementing server components, parallel/streaming fetch, route handlers, and segment-based error boundaries, improving load performance and page responsiveness.</li>
        <li>Built hybrid state management using Redux Toolkit + Context, reducing redundant network calls by 20% and improving consistency across multi-step workflows.</li>
        <li>Optimized accessibility and rendering performance via code-splitting, ARIA updates, virtualization, and UI caching.</li>
        <li>Automated feature-flag deployments and environment pipelines via Azure DevOps, reducing configuration effort by 30%.</li>
        <li>Standardized reusable component libraries aligned with Fluent UI standards, reducing development cycle time by 20%.</li>
        <li>Implemented Jest + React Testing Library tests, reducing post-release UI defects by 15–20%.</li>
        <li>Collaborated closely with backend engineers and UX teams in an agile setup to iterate rapidly on UI workflows and optimize feature delivery.</li>
    </ul>
  `,
  primarySkill: "",
};

export const defaultExperienceState: ExperienceState[] = [
  currentExperience,
  defaultExperience,
];
