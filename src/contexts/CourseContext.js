import { createContext, useReducer, useState } from "react";
import { apiUrl } from "./constants";
import axios from "axios";
import { courseReducer } from "../reducers/courseReducer";
import { useEffect } from "react/cjs/react.development";

export const CourseContext = createContext();

const CourseContextProvider = ({ children }) => {
  //State
  const [courseState, dispatch] = useReducer(courseReducer, {
    course: null,
    courses: [],
    myCourses: [],
    myCourseLoading: true,
    courseLoading: true,
  });

  const getCourses = async () => {
    try {
      const response = await axios.get(`${apiUrl}/courses`);
      if (response.data.success) {
        dispatch({
          type: "COURSES_LOADED_SUCCESS",
          payload: response.data.courses,
        });
      }
      console.log(response.data);
    } catch (error) {
      dispatch({ type: "COURSES_LOADED_FAIL" });
    }
  };

  //Add coures
  const addCourse = async (newCourse) => {
    try {
      const response = await axios.post(`${apiUrl}/courses`, newCourse);
      if (response.data.success) {
        dispatch({ type: "ADD_POST", payload: response.data.course });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server Error" };
    }
  };

  //Get my courses

  const getMyCourses = async () => {
    try {
      const response = await axios.get(`${apiUrl}/courses/mycourse`);
      if (response.data.success) {
        dispatch({
          type: "MYCOURSES_LOADED_SUCCESS",
          payload: response.data.newCourses,
        });
      }
    } catch (error) {
      dispatch({ type: "MYCOURSES_LOADED_FAIL" });
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const courseContextData = {
    courseState,
    getCourses,
    addCourse,
    getMyCourses,
  };

  return (
    <CourseContext.Provider value={courseContextData}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
