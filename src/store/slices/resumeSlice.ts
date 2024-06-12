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
interface IResumeState {
  personalInfo: PersonalDetailState;
  experience: ExperienceState[];
  additionalContent: IContent[];
}
const initialState: IResumeState = {
  personalInfo: defaultPersonalDetail,
  experience: defaultExperienceState,
  additionalContent: [
    {
      id: "",
      title: "Project: AI-Powered Resume Builder",
      subHeader: "",
      startDate: "",
      endDate: "",
      content: `<ul>
  <li>Developed an AI-powered resume builder using natural language processing, integrating GPT-3 for tailored summaries.</li>
  <li>Utilized the Gemini API to optimize work responsibilities for clarity and conciseness.</li>
  <li>Designed a user-friendly interface for inputting personal information, skills, and fine-tuning generated summaries.</li>
  <li>Implemented PDF export functionality for easy distribution of finalized resumes.</li>
  <li>https://pj1016.github.io/personal_resume</li>
</ul>
`,
    },
    {
      content: `<ul>
    <li>Front-End Technologies: React.js, Redux, JavaScript (ES6+), HTML5, CSS3, TypeScript</li>
    <li>Backend & Databases: Python, SQL</li>
    <li>Tooling & Frameworks: npm, Git, Jenkins, JIRA, Version one</li>
    <li>UI/UX: Responsive Design, Material-UI, Cloudscape</li>
    <li>Testing & Debugging: React testing library, Jest, Cypress</li>
  </ul>`,
      id: "1",
      title: "Technical Skills",
      subHeader: "",
      startDate: "",
      endDate: "",
    },
    {
      id: "2",
      title: "Scholastic Acheviements",
      subHeader: "",
      startDate: "",
      endDate: "",
      content: `<ul>
                  <li>Contributor to the newsletter edition for the project team at Accenture.</li>
                  <li>Achieved Elite Certification in NPTEL for "Programming in Java".</li>
                  <li>Secured 3234th Rank in Code Vita 2020.</li>
                </ul>`,
    },
    {
      content: `<ul>
  <li>Proficient in creatively solving complex problems using analytical thinking and technical expertise.</li>
  <li>Passionate about staying updated with the latest trends in front-end development through online courses, workshops, and tech meetups.</li>
  <li>Enthusiastic about enhancing user experience and interface design, and eager to implement innovative solutions in collaboration with cross-functional teams. Outside of work, I enjoy playing and watching cricket.</li>
</ul>`,
      id: "3",
      title: "Interests",
      subHeader: "",
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
  addContent,
} = resumeSlice.actions;
export const resumeReducer = resumeSlice.reducer;
