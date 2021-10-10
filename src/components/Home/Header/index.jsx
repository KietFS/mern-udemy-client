import React, { useState } from "react";
import {
  SearchIcon,
  ShoppingCartIcon,
  GlobeAltIcon,
  HeartIcon,
  BellIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import LogoIcon from "../../../images/logo.svg";
import {
  HeaderContainer,
  SearchBar,
  SearchContainer,
  HeaderItem,
  LoginButton,
  SignupButton,
  ChangeLanguageButton,
  AvtButton,
  SurplusButton,
  CartCount,
  ShoppingCartContainer,
  MyLearningContainer,
  NofiticationContainer,
  MyWishListContainer,
  AvtContainer,
  UdemyTeachContainer,
  BusinessContainer,
} from "./styles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { CartContext } from "../../../contexts/CartContext";
import { useContext, useRef } from "react";
import { useMenuState } from "@szhsin/react-menu";
import { ControlledMenu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useHistory } from "react-router";
import CartInfo from "./components/CartInfo";
import MyLearningInfo from "./components/MyLearningInfo";
import Nofitication from "./components/Nofitication";
import WishList from "./components/WishList";
import UserDropDown from "./components/UserDropDown";
import TechOnUdemy from "./components/TeachOnUdemy";
import UdemyBusiness from "./components/UdemyBusiness";

const Header = () => {
  //Contexts
  const {
    authState: { user },
    logoutUser,
  } = useContext(AuthContext);
  const {
    cartState: { carts },
  } = useContext(CartContext);

  //Push to home function
  let history = useHistory();
  const pushToHome = () => {
    history.push("/");
  };

  //Local State
  const [cartOpen, setCartOpen] = useState(false);
  const [myLearningOpen, setMyLearningOpen] = useState(false);
  const [nofiticationOpen, setNofiticationOpen] = useState(false);
  const [wishListOpen, setWishListOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [teachOnOpen, setTeachOnOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);

  if (!user) {
    return (
      <HeaderContainer>
        <MenuIcon className="flex h-5 font-bold cursor-pointer lg:hidden hover:text-purple-600" />
        <Link to="/">
          <img src={LogoIcon} alt="/" width={90} height={30} />
        </Link>
        <HeaderItem>Categories</HeaderItem>
        <SearchContainer>
          <SearchBar placeholder="Search for anything" />
          <SearchIcon className="relative h-5 font-bold right-8" />
        </SearchContainer>
        <HeaderItem>Udemy Business</HeaderItem>
        <HeaderItem>Teach on Udemy</HeaderItem>
        <ShoppingCartIcon className="hidden h-5 font-bold cursor-pointer xl:flex hover:text-purple-600" />
        <SearchIcon className="flex h-5 font-bold cursor-pointer xl:hidden hover:text-purple-600" />
        <Link to="/login" className="hidden xl:flex">
          <LoginButton>Log in</LoginButton>
        </Link>
        <Link to="/signup" className="hidden xl:flex">
          <SignupButton>Sign up</SignupButton>
        </Link>
        <ChangeLanguageButton>
          <GlobeAltIcon className="h-5 font-bold" />
        </ChangeLanguageButton>
      </HeaderContainer>
    );
  } else {
    return (
      <>
        <HeaderContainer>
          <MenuIcon className="flex h-5 font-bold cursor-pointer lg:hidden hover:text-purple-600" />
          <Link to="/">
            <img src={LogoIcon} alt="/" width={90} height={30} />
          </Link>
          <HeaderItem>Categories</HeaderItem>
          <SearchContainer>
            <SearchBar placeholder="Search for anything" />
            <SearchIcon className="relative h-5 font-bold right-8" />
          </SearchContainer>

          <BusinessContainer>
            <HeaderItem onMouseEnter={() => setBusinessOpen(true)}>
              Udemy Business
            </HeaderItem>
            <div onMouseLeave={() => setBusinessOpen(false)}>
              <UdemyBusiness
                className={`${businessOpen === true ? "block" : "hidden"}`}
              />
            </div>
          </BusinessContainer>

          <UdemyTeachContainer>
            <HeaderItem onMouseEnter={() => setTeachOnOpen(true)}>
              Teach on Udemy
            </HeaderItem>
            <div onMouseLeave={() => setTeachOnOpen(false)}>
              <TechOnUdemy
                className={`${teachOnOpen === true ? "block" : "hidden"}`}
              />
            </div>
          </UdemyTeachContainer>

          {/*My Learning Container*/}
          <MyLearningContainer>
            <Link to="/mycourses">
              <HeaderItem
                onMouseEnter={() => {
                  setMyLearningOpen(true);
                }}
              >
                My Learning
              </HeaderItem>
            </Link>
            <div onMouseLeave={() => setMyLearningOpen(false)}>
              <MyLearningInfo
                className={`${myLearningOpen === true ? "block" : "hidden"}`}
              />
            </div>
          </MyLearningContainer>

          {/*Wishlist Container*/}
          <MyWishListContainer>
            <HeartIcon
              className="hidden h-5 font-bold cursor-pointer hover:text-purple-600 xl:flex"
              onMouseEnter={() => setWishListOpen(true)}
            />
            <div className="w-min" onMouseLeave={() => setWishListOpen(false)}>
              <WishList
                className={`${wishListOpen === true ? "block" : "hidden"}`}
              />
            </div>
          </MyWishListContainer>

          {/*Shopping Cart Container*/}
          <ShoppingCartContainer>
            <Link to="/cart">
              <ShoppingCartIcon
                className="hidden h-5 font-bold cursor-pointer hover:text-purple-600 xl:flex"
                onMouseEnter={() => setCartOpen(true)}
              />
            </Link>
            <CartCount>{carts.length}</CartCount>
            <div className="w-min" onMouseLeave={() => setCartOpen(false)}>
              <CartInfo
                className={`${cartOpen === true ? "block" : "hidden"}`}
              />
            </div>
          </ShoppingCartContainer>

          {/*Nofitications Container*/}
          <NofiticationContainer>
            <BellIcon
              className="hidden h-5 font-bold cursor-pointer hover:text-purple-600 xl:flex"
              onMouseEnter={() => setNofiticationOpen(true)}
            />
            <div
              className="w-min"
              onMouseLeave={() => setNofiticationOpen(false)}
            >
              <Nofitication
                className={`${nofiticationOpen === true ? "block" : "hidden"}`}
              />
            </div>
          </NofiticationContainer>

          {/*Avt Container*/}
          <AvtContainer>
            <AvtButton
              onClick={() => {
                pushToHome();
                logoutUser();
              }}
              onMouseEnter={() => setDropDownOpen(true)}
            >
              {user.userName.charAt(0)}
            </AvtButton>
            <div className="w-min" onMouseLeave={() => setDropDownOpen(false)}>
              <UserDropDown
                className={`${dropDownOpen === true ? "block" : "hidden"}`}
                userName={user.userName}
                cartLength={carts.length}
              />
            </div>
          </AvtContainer>
          {/*Avt Container*/}
        </HeaderContainer>
      </>
    );
  }
};

export default Header;
