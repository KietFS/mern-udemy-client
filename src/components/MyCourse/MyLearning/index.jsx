import React from "react";
import {
  MyLearningBanner,
  MyLearningBody,
  MyLearningContainer,
  MyLearningItem,
  MyLearningItemContent,
  MyLearningItemLecture,
  MyLearningItemStart,
  MyLearningItemTitle,
} from "./styles";
import { CourseContext } from "../../../contexts/CourseContext";
import { useContext, useEffect } from "react";

const MyLearning = () => {
  const {
    courseState: { myCourses, myCourseLoading },
    getMyCourses,
  } = useContext(CourseContext);

  useEffect(() => {
    getMyCourses();
  }, [myCourseLoading]);

  return (
    <MyLearningContainer>
      <MyLearningBanner>My Learning</MyLearningBanner>

      <MyLearningBody>
        {myCourses.map((item) => {
          return (
            <MyLearningItem key={item._id}>
              <img src={item.imageUrl} alt="/" className="mx-auto" />
              <MyLearningItemContent>
                <MyLearningItemTitle>{item.title}</MyLearningItemTitle>
                <MyLearningItemLecture>{item.lecture}</MyLearningItemLecture>
                <MyLearningItemStart>Start Learning</MyLearningItemStart>
              </MyLearningItemContent>
            </MyLearningItem>
          );
        })}
      </MyLearningBody>
    </MyLearningContainer>
  );
};

export default MyLearning;
