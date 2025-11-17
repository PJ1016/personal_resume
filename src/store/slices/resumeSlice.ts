import { createSlice } from "@reduxjs/toolkit";
import {
  defaultPersonalDetail,
  type PersonalDetailState,
} from "./personalDetailSlice";
import {
  defaultExperienceState,
  type ExperienceState,
} from "./experienceSlice";
import type { IContent } from "./additionalContentSlice";
import type { IEducationState } from "./educationSlice";
import { act } from "react";
interface IResumeState {
  personalInfo: PersonalDetailState;
  education: IEducationState[];
  experience: ExperienceState[];
  additionalContent: IContent[];
}
const initialState: IResumeState = {
  personalInfo: defaultPersonalDetail,
  education: [],
  experience: defaultExperienceState,
  additionalContent: [
    {
      content: `
<ul>
  <li><strong>Frontend</strong>: React.js, Redux Toolkit, TypeScript, JavaScript (ES6+), HTML5, CSS3, Fluent UI, Cloudscape, Material UI</li>
  <li><strong>Architecture & Performance</strong>: SPA optimization, Code splitting, Virtualization, Accessibility (WCAG), ARIA, Caching strategies</li>
  <li><strong>Testing</strong>: Jest, React Testing Library, Cypress</li>
  <li><strong>Tooling & DevOps</strong>: Azure DevOps, Jenkins, Git, npm, JIRA, VersionOne</li>
  <li><strong>APIs & Backend</strong>: GraphQL, REST APIs, Python, SQL</li>
  <li><strong>Other</strong>: UI standardization, Component libraries, State management, CI/CD</li>
</ul>

`,
      id: "1",
      title: "Core Skills",
      subHeader: "",
      startDate: "",
      jobDescription: "",
      endDate: "",
    },
    {
      id: "",
      title: "AI-Powered Resume Builder (Personal Project)",
      subHeader: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      content: `<ul>
  <li>Developed an AI-driven resume generator using React, TypeScript, and GPT-3 NLP models to create customizable, job-tailored resumes.</li>
  <li>Integrated Gemini API for improving clarity and structure of generated content.</li>
  <li>Added export-to-PDF functionality and built a clean, customizable user interface for end-users.</li>
  <li>Live Demo: <a href="https://pj1016.github.io/personal_resume" target="_blank">pj1016.github.io/personal_resume</a></li>
</ul>
`,
    },
    {
      content: `
<ul>
  <li>Conducted React capability sessions that elevated code quality standards across squads.</li>
  <li>Standardized UI patterns and component structures, reducing fragmentation and improving onboarding efficiency.</li>
  <li>Mentored junior developers on React, TypeScript, and testing practices.</li>
</ul>

`,
      id: "1.5",
      title: "Leadership & Impact",
      subHeader: "",
      startDate: "",
      jobDescription: "",
      endDate: "",
    },
    {
      id: "2",
      title: "Achievements",
      subHeader: "",
      startDate: "",
      jobDescription: "",
      endDate: "",
      content: `<ul>
  <li>Elite NPTEL Certification — Programming in Java</li>
  <li>Ranked 3234 in TCS CodeVita 2020 (among thousands of participants)</li>
  <li>Contributed articles for Accenture's internal newsletters</li>
</ul>`,
    },
  ],
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    addWorkInfo: (state, action) => {
      state.experience.push({
        ...action.payload,
        id: Math.random().toString(),
      });
    },
    addEducationInfo: (state, action) => {
      state.education.push({
        ...action.payload,
        id: Math.random().toString(),
      });
    },
    updateEducationInfo: (state, action) => {
      state.education = action.payload;
    },
    deleteEducationInfo: (state, action) => {
      console.log(action.payload, state.education);
      state.education = state.education.filter(
        (item) => item.id !== action.payload
      );
    },
    deleteWorkExperience: (state, action) => {
      state.experience = state.experience.filter(
        (item) => item.id !== action.payload
      );
    },
    addContent: (state, action) => {
      state.additionalContent.push(action.payload);
    },
    updateContent: (state, action) => {
      state.additionalContent = action.payload;
    },
  },
});
export const {
  addPersonalInfo,
  addWorkInfo,
  deleteWorkExperience,
  updateContent,
  addEducationInfo,
  deleteEducationInfo,
  updateEducationInfo,
  addContent,
} = resumeSlice.actions;
export const resumeReducer = resumeSlice.reducer;
