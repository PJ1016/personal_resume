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
  startDate: "Oct 2021",
  endDate: "Jan 2025",
  jobDescription: `
    <h4>Client: Allstate – Employee Portal (10,000+ Users)</h4>
    <ul>
      <li>
        Developed and maintained enterprise web modules using React, TypeScript, and Angular for a high-traffic employee portal.
      </li>
      <li>
        Built reusable UI components and standardized frontend patterns, improving UI consistency and increasing user engagement by ~25%.
      </li>
      <li>
        Integrated frontend modules with REST APIs, collaborating with backend teams on request/response contracts and validations.
      </li>
      <li>
        Contributed to claim management features supporting 500+ claims per month, improving operational efficiency by ~20%.
      </li>
      <li>
        Supported application-level authentication integration using Okta.
      </li>
      <li>
        Optimized high-traffic workflows, contributing to a ~40% improvement in user satisfaction metrics.
      </li>
      <li>
        Reduced Sonar issues by ~80% through refactoring, improved test coverage, and adherence to coding standards.
      </li>
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
  startDate: "Jan 2025",
  endDate: "Present",
  jobDescription: `
    <h4>Client: Microsoft – Unified Support Pricing</h4>
    <ul>
      <li>
        Developed and optimized complex pricing workflows using React and TypeScript, improving render performance and reducing UI latency across critical screens.
      </li>
      <li>
        Integrated MSAL authentication into React applications, implementing login flows, token acquisition, protected routes, and secure API calls.
      </li>
      <li>
        Consumed and integrated GraphQL APIs, implementing hybrid state management using Redux Toolkit and React Context, reducing redundant API calls by ~20%.
      </li>
      <li>
        Improved accessibility and user experience through ARIA enhancements, virtualization, and code-splitting.
      </li>
      <li>
        Built reusable, well-typed UI components aligned with Fluent UI, accelerating feature delivery by ~20%.
      </li>
      <li>
        Resolved scoped backend tickets in ASP.NET Core, including minor controller updates, DTO changes, and validation fixes supporting frontend workflows.
      </li>
      <li>
        Implemented unit tests using Jest and React Testing Library, reducing post-release UI defects by 15–20%.
      </li>
    </ul>
  `,
  primarySkill: "",
};

export const defaultExperienceState: ExperienceState[] = [
  currentExperience,
  defaultExperience,
];
