import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { CourseContext } from "../../../contexts/CourseContext";
import CourseBanner from "../CourseBanner";
import {
  CourseBoardContainer,
  CourseBoardDes,
  CourseBoardLabel,
  SetTopicBar,
  TopicItem,
  WelcomeBackContainer,
} from "./styles";
import { AuthContext } from "../../../contexts/AuthContext";
import { ExploreButton } from "../CourseBanner/styles";

const CourseBoard = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);

  const topics = [
    {
      id: 1,
      type: "Web",
      title: "Web Development",
      description:
        "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
    },

    {
      id: 2,
      type: "Mobile",
      title: "Mobile Development",
      description:
        "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!. Create a portfolio of apps to apply for junior developer jobs at a technology company",
    },

    {
      id: 3,
      type: "CyberSec",
      title: "Cyber Security",
      description:
        "Data science is everywhere. Better data science practices are allowing corporations to cut unnecessary costs, automate computing, and analyze markets. Essentially, data science is the key to getting ahead in a competitive global climate.",
    },
    {
      id: 4,
      type: "AI",
      title: "Artificial Intelligence",
      description:
        "Data science is everywhere. Better data science practices are allowing corporations to cut unnecessary costs, automate computing, and analyze markets. Essentially, data science is the key to getting ahead in a competitive global climate.",
    },
  ];

  //Local State
  const [topic, setTopic] = useState(topics[0]);
  if (!user) {
    return (
      <CourseBoardContainer>
        <CourseBoardLabel>A broad selection of courses</CourseBoardLabel>
        <CourseBoardDes>
          Choose from 155,000 online video courses with new additions published
          every month
        </CourseBoardDes>

        <SetTopicBar>
          {topics.map((element) => {
            return (
              <TopicItem key={element.id} onClick={() => setTopic(element)}>
                {element.title}
              </TopicItem>
            );
          })}
        </SetTopicBar>

        <CourseBanner topic={topic} />
      </CourseBoardContainer>
    );
  } else {
    return (
      <CourseBoardContainer>
        <WelcomeBackContainer>
          <CourseBoardLabel>
            Let start learning {user.userName}
          </CourseBoardLabel>
          <TopicItem className="text-purple-500 underline">
            My Learning
          </TopicItem>
        </WelcomeBackContainer>
        <CourseBoardDes>
          Good afternoon Michale, let's start learning a couple lessons
        </CourseBoardDes>
        <ExploreButton>Go to your courses</ExploreButton>
      </CourseBoardContainer>
    );
  }
};

export default CourseBoard;
