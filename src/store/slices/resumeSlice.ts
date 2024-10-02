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
      title: "AI-Powered Resume Builder (Personal Project)",
      subHeader: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      content: `<ul>
  <li>Developed an AI-powered resume builder using natural language processing and GPT-3 for tailored summaries. This resume was generated using the tool to demonstrate its capabilities.</li>
  <li>Utilized the Gemini API to optimize work responsibilities for clarity and conciseness.</li>
  <li>Designed a user-friendly interface and implemented PDF export functionality for easy distribution of finalized resumes.</li>
  <li><a href="https://pj1016.github.io/personal_resume" target="_blank">Live Demo for the Project</a></li>
</ul>
`,
    },
    {
      content: `
<ul>
  <li><strong>Front-End Technologies</strong>: React.js, Redux, JavaScript (ES6+), TypeScript, HTML5, CSS3</li>
  <li><strong>UI/UX</strong>: Responsive Design, Material-UI, Cloudscape</li>
  <li><strong>Testing & Debugging</strong>: React Testing Library, Jest, Cypress</li>
  <li><strong>Methodologies</strong>: Agile, Scrum</li>
  <li><strong>Backend & Databases</strong>: Python, SQL</li>
  <li><strong>Tooling & Frameworks</strong>: npm, Git, Jenkins, JIRA, VersionOne</li>
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
      title: "Scholastic Acheviements",
      subHeader: "",
      startDate: "",
      jobDescription: "",
      endDate: "",
      content: `<ul>
  <li><strong>Contributor</strong> to the project team newsletter at Accenture, enhancing team communication and knowledge sharing.</li>
  <li><strong>Achieved Elite Certification</strong> in NPTEL for "Programming in Java," demonstrating advanced proficiency in Java programming.</li>
  <li><strong>Secured 3234th Rank</strong> in Code Vita 2020, showcasing competitive coding skills among thousands of participants.</li>
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
