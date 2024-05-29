export interface ExperienceState {
  employer: string;
  jobTitle: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
}

export const defaultExperienceState: ExperienceState[] = [
  {
    employer: "",
    jobTitle: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
  },
];
