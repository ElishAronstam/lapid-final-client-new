import {RootState} from "../../../app/store";

export const statusFilterSelector = (state:RootState) => state.filterSlice.filterTaskByOpenStatus;
export const priorityFilterSelector = (state:RootState) => state.filterSlice.filterTaskByHighPriority;
export const keywordFilterSelector = (state:RootState) => state.filterSlice.searchQuery;