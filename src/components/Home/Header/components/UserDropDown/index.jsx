import React from "react";
import {
  AcademicContainer,
  AcademicItem,
  AvtLarge,
  DropDownContainer,
  NumberButton,
  UserContent,
  UserEmail,
  UserInfoContainer,
  UserName,
} from "./styles";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { useContext } from "react";
import { useHistory } from "react-router";

const UserDropDown = ({ className, userName, cartLength }) => {
  const { logoutUser } = useContext(AuthContext);
  //Push to home function
  let history = useHistory();
  const pushToHome = () => {
    history.push("/");
  };

  return (
    <DropDownContainer className={className}>
      <UserInfoContainer>
        <AvtLarge>{userName.charAt(0)}</AvtLarge>
        <UserContent>
          <UserName>{userName}</UserName>
          <UserEmail>annonymouse@gmail.com</UserEmail>
        </UserContent>
      </UserInfoContainer>
      <AcademicContainer>
        <AcademicItem>My learning</AcademicItem>
        <AcademicItem>
          My cart
          <NumberButton>{cartLength}</NumberButton>
        </AcademicItem>
        <AcademicItem>My wishlist</AcademicItem>
        <AcademicItem>Teach on Udemy</AcademicItem>
      </AcademicContainer>
      <AcademicContainer>
        <AcademicItem>Nofitications</AcademicItem>
        <AcademicItem>
          Messages
          <NumberButton>2</NumberButton>
        </AcademicItem>
      </AcademicContainer>
      <AcademicContainer>
        <AcademicItem>Account settings</AcademicItem>
        <AcademicItem>Payment methods</AcademicItem>
        <AcademicItem>Udemy credits</AcademicItem>
        <AcademicItem>Payment methods</AcademicItem>
      </AcademicContainer>
      <AcademicContainer>
        <AcademicItem>Language</AcademicItem>
      </AcademicContainer>
      <AcademicContainer>
        <AcademicItem>Public Profile</AcademicItem>
        <AcademicItem>Edit Profile</AcademicItem>
      </AcademicContainer>
      <AcademicContainer>
        <AcademicItem>Help</AcademicItem>
        <AcademicItem
          onClick={() => {
            logoutUser();
            pushToHome();
          }}
        >
          Log out
        </AcademicItem>
      </AcademicContainer>
      <AcademicContainer>
        <AcademicItem className="font-bold text-gray-900">
          Udemy Bussiness
        </AcademicItem>
      </AcademicContainer>
    </DropDownContainer>
  );
};

export default UserDropDown;
