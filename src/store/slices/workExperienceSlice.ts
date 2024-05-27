import { createSlice } from "@reduxjs/toolkit";
export interface IWorkExperienceState {
  companyName: string;
  startDate: string;
  endDate: string;
  additionalContent: string;
  id: string;
}
export const defaultWorkSummary: IWorkExperienceState[] = [
  {
    id: "",
    companyName: "",
    startDate: "",
    endDate: "",
    additionalContent: "",
  },
];
export const workExperienceInitialData: IWorkExperienceState[] = [
  {
    companyName: "Application Development Analyst (Hyderabad, India)",
    startDate: "Jan 2022",
    endDate: "Present",
    additionalContent: `<h4>Employee Portal Development (Allstate):</h4>
    <ul>
      <li>
        Developed features for the Employee Portal, facilitating access for over 10,000 users to coverage information, documentation, and benefit confirmation.
      </li>
      <li>
        Created UI features for updating beneficiaries, streamlining the process for Walmart customers by 30%, and ensuring accessibility for non-Walmart customers.
      </li>
      <li>
        Integrated external links for document access based on type (Depot, Walmart, Lowes, etc.), enhancing user convenience.
      </li>
      <li>
        Engineered functionalities for claim management, including checking claim details, payment breakdown, and filing claims for various insurance types, processing over 500 claims monthly.
      </li>
      <li>
        Implemented communication and self-service features such as Message Center and Account Center, resulting in a 40% decrease in customer service inquiries and promoting user engagement.
      </li>
    </ul>
    
    <h4>Marsh Microsite Development (CNA Insurance):</h4>
    <ul>
      <li>
        Established a React project with comprehensive coverage collection capabilities.
      </li>
      <li>
        Integrated authentication via OKTA, collaborating closely with the OKTA team to ensure seamless configuration across multiple environments.
      </li>
      <li>
        Designed and developed UI components including tiles for Active Submissions, Previous Quotes, and Closed Submissions, resulting in a 25% improvement in user engagement and navigation efficiency.
      </li>
      <li>
        Implemented enhancements for Quote Proposal Letter and Supplemental Documents sections, resulting in a 40% reduction in document management time for users.
      </li>
      <li>
        Contributed to improving code coverage and resolving defects, resulting in an 80% reduction in Sonar issues and ensuring high code quality throughout the project.
      </li>
    </ul>
    
    `,
    id: Math.random().toString(),
  },
];
const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState: {
    workExperience: workExperienceInitialData,
  },
  reducers: {
    setWorkExperience: (state, action) => {
      state.workExperience = action.payload;
    },
  },
});

export const workExperienceReducer = workExperienceSlice.reducer;
export const { setWorkExperience } = workExperienceSlice.actions;
