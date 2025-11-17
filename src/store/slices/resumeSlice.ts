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
      id: "",
      title: "PROJECT — AI-Powered Resume Builder",
      subHeader: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      content: `<ul>
  <li>Built a custom AI-driven resume generator using NLP and GPT-3 to produce tailored summaries and optimized job-specific content.</li>
  <li>Integrated Gemini API to enhance clarity and structure of job role descriptions.</li>
  <li>Implemented export-to-PDF functionality and built a clean UX for template customization.</li>
  <li>Live Demo: <a href="https://pj1016.github.io/personal_resume" target="_blank">https://pj1016.github.io/personal_resume</a></li>
</ul>
`,
    },
    {
      content: `
<ul>
  <li><strong>Frontend</strong>: React.js, Redux Toolkit, JavaScript (ES6+), TypeScript, HTML5, CSS3, Cloudscape, Material-UI</li>
  <li><strong>Performance & Accessibility</strong>: Virtualization, Code Splitting, ARIA, WCAG 2.1</li>
  <li><strong>Testing</strong>: Jest, React Testing Library, Cypress</li>
  <li><strong>Tooling</strong>: Git, npm, Jenkins, Azure DevOps, JIRA, VersionOne</li>
  <li><strong>Backend/Other</strong>: Python, SQL, GraphQL, REST APIs</li>
</ul>

`,
      id: "1",
      title: "Technical Skills",
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
    {
      content: `<ul>
  <li>Proficient in creatively solving complex problems with analytical thinking and technical expertise.</li>
  <li>Passionate about front-end development trends, actively participating in online courses, workshops, and tech meetups.</li>
  <li>Enthusiastic about enhancing user experience and interface design, eager to implement innovative solutions with cross-functional teams.</li>
  <li>Enjoy playing and watching cricket and badminton outside of work.</li>
</ul>`,
      id: "3",
      title: "Interests",
      subHeader: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
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
