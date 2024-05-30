export interface ExperienceState {
  id: string;
  employer: string;
  jobTitle: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
}
export const defaultExperience: ExperienceState = {
  id: "",
  employer: "",
  jobTitle: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  jobDescription: "",
};
export const defaultExperienceState: ExperienceState[] = [];
