import React, { useContext } from "react";
import { EmptyText, KeepShoppingText } from "../CartInfo/styles";
import {
  CourseItem,
  CourseItemContainer,
  CourseItemContent,
  CourseItemImage,
  CourseItemLabel,
  CourseLearning,
  GoToMyLearningButton,
  MyLearningInfoContainer,
} from "./styles";
import { CourseContext } from "../../../../../contexts/CourseContext";

const MyLearningInfo = ({ className }) => {
  const {
    courseState: { myCourses },
  } = useContext(CourseContext);

  console.log(myCourses.length);
  if (myCourses.length === 0) {
    return (
      <MyLearningInfoContainer className={className}>
        <EmptyText>You don't have any course at the moment</EmptyText>
        <KeepShoppingText>Keep shopping</KeepShoppingText>
      </MyLearningInfoContainer>
    );
  } else if (myCourses.length > 0) {
    return (
      <MyLearningInfoContainer className={className}>
        <CourseItemContainer>
          {myCourses.map((myCourse) => {
            return (
              <CourseItem key={myCourse._id}>
                <CourseItemImage>
                  <img src={myCourse.imageUrl} alt="/" />
                </CourseItemImage>
                <CourseItemContent>
                  <CourseItemLabel>{myCourse.title}</CourseItemLabel>
                  <CourseLearning>Start learning</CourseLearning>
                </CourseItemContent>
              </CourseItem>
            );
          })}
        </CourseItemContainer>
        <GoToMyLearningButton>Go to My learning</GoToMyLearningButton>
      </MyLearningInfoContainer>
    );
  }
};

export default MyLearningInfo;
