import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StudentDataState } from "../reducer/studentData.reducer";

export const selectStudentState = createFeatureSelector<StudentDataState>('StudentData');

export const selectStudents = createSelector(
  selectStudentState,
  (state) => state.students
);

export const selectStudentsLoading = createSelector(
  selectStudentState,
  (state) => state.loading
);

export const selectStudentsError = createSelector(
  selectStudentState,
  (state) => state.error
);
