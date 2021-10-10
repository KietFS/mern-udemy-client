export const courseReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case "COURSES_LOADED_SUCCESS":
      return {
        ...state,
        courses: payload,
        courseLoading: false,
      };

    case "MYCOURSES_LOADED_SUCCESS":
      return {
        ...state,
        myCourses: payload,
        myCourseLoading: false,
      };

    case "MYCOURSES_LOADED_FAIL":
      return {
        ...state,
        myCourses: [],
        myCourseLoading: false,
      };

    case "COURSES_LOADED_FAIL":
      return {
        ...state,
        courses: [],
        courseLoading: false,
      };

    case "ADD_COURSE":
      return {
        ...state,
        courses: [...state.courses, payload],
      };

    case "SHOW_SINGLE_COURSE":
      return {
        ...state,
        course: payload,
        courseLoading: false,
      };
  }
};
