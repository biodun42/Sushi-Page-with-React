import React from "react";
import logo from "./images/LOGO.svg";
import home from "./images/home house icon.svg";
import menu from "./images/Menu icon.svg";
import about from "./images/About icon.svg";
import services from "./images/aws.svg";
import offers from "./images/circle-exclamation-solid.svg";
import play from "./images/Play icon.svg";
import main from "./images/MAIN SUSHI IMAGE.svg";
import best from "./images/Best Sushi Ever.svg";
import twoBelow from "./images/2 Items Below Sushi.svg";
import mainDish from "./images/Main Dish.svg";
import breakFast from "./images/Breakfast.svg";
import sushiCombo from "./images/Sushi Combo.svg";
import browseAll from "./images/Browse All.svg";
import whiteArrow from "./images/White Arrow BTN.svg";
import greenArrow from "./images/Green Arrow BTN.svg";
import heartGreen from "./images/Heart Green.svg";
import sushiSalad1 from "./images/Sushi Salad 1.svg";
import sushiSalad2 from "./images/Sushi Salad -- 2.svg";
import sushiSalad3 from "./images/Sushi Salad -- 3.svg";
import star from "./images/fi-sr-star.svg";
import theChef from "./images/The Chef.svg";
import ourBestChef from "./images/OUR BEST CHEF GRP.svg";
import threePeople from "./images/Three people.svg";
import vector from "./images/Vector.svg";
import timeFast from "./images/fi-rr-time-fast.svg";
import shoppingCartCheck from "./images/fi-rr-shopping-cart-check.svg";
import gift from "./images/fi-rr-gift.svg";
import facebook from "./images/Facebook.svg";
import group40 from "./images/Group 40.svg";
import "./App.css";

const Body = () => {
  const toggleMenu = () => {
    const hamMenu = document.querySelector(".hamburger-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const container = document.querySelector("section");
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    container.classList.toggle("active");
  };

  const closeMenu = () => {
    const navButton = document.querySelectorAll("nav");
    const hamMenu = document.querySelector(".hamburger-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const container = document.querySelector("section");
    navButton.forEach((nav) => {
      nav.classList.toggle("active");
      hamMenu.classList.remove("active");
      offScreenMenu.classList.remove("active");
      container.classList.remove("active");
    });
  };

  return (
    <section>
      <nav>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <ul className="firstlink">
          <li>
            <img src={home} alt="Home" />
            <a href="#Home">Home</a>
          </li>
          <li>
            <img src={menu} alt="Menu" />
            <a href="#Menu">Menu</a>
          </li>
          <li>
            <img src={about} alt="About" />
            <a href="#About">About</a>
          </li>
          <li>
            <img src={services} alt="Services" />
            <a href="#Services">Services</a>
          </li>
          <li>
            <img src={offers} alt="Offers" />
            <a href="#Offers">Offers</a>
          </li>
        </ul>
        <div onClick={toggleMenu} className="hamburger-menu">
          <div className="hambar bar1"></div>
          <div className="hambar bar2"></div>
          <div className="hambar bar3"></div>
        </div>
      </nav>
      <div className="off-screen-menu">
        <ul className="secondlink">
          <li onClick={closeMenu} className="nav">
            <img src={home} alt="Home" />
            <a href="#Home">Home</a>
          </li>
          <li onClick={closeMenu} className="nav">
            <img src={menu} alt="Menu" />
            <a href="#Menu">Menu</a>
          </li>
          <li onClick={closeMenu} className="nav">
            <img src={about} alt="About" />
            <a href="#About">About</a>
          </li>
          <li onClick={closeMenu} className="nav">
            <img src={services} alt="Services" />
            <a href="#Services">Services</a>
          </li>
          <li onClick={closeMenu} className="nav">
            <img src={offers} alt="Offers" />
            <a href="#Offers">Offers</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="second-wrapper" id="about">
          <div id="Home" className="left-part">
            <h1>
              Sushi Bliss, Every Roll a Flavorful <span>Kiss</span>
            </h1>
            <p>
              Masters of Maki: Elevate Your Bud with Our Sushi Creations, Where
              Tradition Meets innovation!
            </p>
            <div className="buttons">
              <p>Order Now</p>
              <div className="Video">
                <h5>Watch Video</h5>
                <div className="Play_pic">
                  <img src={play} alt="Play" />
                </div>
              </div>
            </div>
          </div>
          <div className="right-part">
            <div className="best-sushi">
              <img src={best} alt="Best Sushi" />
            </div>
            <div className="sushi">
              <img className="sushi-image" src={main} alt="Main Sushi" />
            </div>
            <div className="below_sushi">
              <img src={twoBelow} alt="Two Below Sushi" />
            </div>
          </div>
        </div>
        <div id="Menu" className="third_header">
          <p>CUSTOMER FAVORITE</p>
          <h1>Popular Categories</h1>
        </div>
        <div className="sushi_types">
          <div className="all_sushi">
            <div className="dish">
              <img src={mainDish} alt="Main Dish" />
            </div>
            <h5>Main Dish</h5>
            <p>(86 dishes)</p>
          </div>
          <div className="all_sushi">
            <div className="dish">
              <img src={breakFast} alt="Breakfast" />
            </div>
            <h5>Breakfast</h5>
            <p>(12 items)</p>
          </div>
          <div className="all_sushi">
            <div className="dish">
              <img src={sushiCombo} alt="Sushi Combo" />
            </div>
            <h5>Dinner</h5>
            <p>(12 items)</p>
          </div>
          <div className="all_sushi">
            <div className="dish">
              <img src={browseAll} alt="Browse All" />
            </div>
            <h5>Browse All</h5>
            <p>(255 items)</p>
          </div>
        </div>
        <div id="Offers" className="Special">
          <p>SPECIAL DISHES</p>
        </div>
        <div className="available_sushi">
          <div className="Best_dishes">
            <h1>Best Dishes From Our Menu</h1>
          </div>
          <div className="arrow">
            <img src={whiteArrow} alt="White Arrow" />
            <img src={greenArrow} alt="Green Arrow" />
          </div>
        </div>
        <div className="fourth_wrapper">
          <div className="sushi_and_price">
            <div className="green_heart">
              <img src={heartGreen} alt="Heart Green" />
            </div>
            <div className="sushi_picture">
              <img src={sushiSalad1} alt="Sushi Salad 1" />
            </div>
            <div className="About">
              <h5>Best Sushi Salad</h5>
              <p>Description of the item</p>
              <div className="price">
                <div className="dollar">
                  <h5>
                    <span>$</span>10.00
                  </h5>
                </div>
                <div className="rating">
                  <img src={star} alt="Star" />
                  <p>4.9</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sushi_and_price">
            <div className="green_heart">
              <img src={heartGreen} alt="Heart Green" />
            </div>
            <div className="sushi_picture">
              <img src={sushiSalad2} alt="Sushi Salad 2" />
            </div>
            <div className="About">
              <h5>Maki-zushi</h5>
              <p>Description of the item</p>
              <div className="price">
                <div className="dollar">
                  <h5>
                    <span>$</span>22.00
                  </h5>
                </div>
                <div className="rating">
                  <img src={star} alt="Star" />
                  <p>4.9</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sushi_and_price">
            <div className="green_heart">
              <img src={heartGreen} alt="Heart Green" />
            </div>
            <div className="sushi_picture">
              <img src={sushiSalad3} alt="Sushi Salad 3" />
            </div>
            <div className="About">
              <h5>Seaside Sushi Salad</h5>
              <p>Description of the item</p>
              <div className="price">
                <div className="dollar">
                  <h5>
                    <span>$</span>18.00
                  </h5>
                </div>
                <div className="rating">
                  <img src={star} alt="Star" />
                  <p>4.9</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fifth_wrapper">
          <div className="The_chef">
            <img className="Chef" src={theChef} alt="The Chef" />
            <img className="best-chef" src={ourBestChef} alt="Our Best Chef" />
          </div>
          <div id="About" className="Right_About">
            <h4>TESTIMONIALS</h4>
            <h1>What Our Customers Say About Us</h1>
            <h5>
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </h5>
            <div className="Feedback">
              <div className="three_people">
                <img src={threePeople} alt="Three People" />
              </div>
              <div className="Customer_feeback">
                <p>Customer Feedback</p>
                <div className="rating2">
                  <img src={star} alt="Star" />
                  <p>
                    4.9 <span>(18.6k Reviews)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Services" className="sixth-wrapper">
          <div className="left_story">
            <h5>OUR STORY & SERVICES</h5>
            <h1>Our Culinary Journey And Services</h1>
            <h4>
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </h4>
            <p>Explore</p>
          </div>
          <div className="right_story">
            <div className="two_top">
              <div className="box">
                <img src={vector} alt="Vector" />
                <h5>CATERING</h5>
                <p>Delight your guests with our flavors and presentation</p>
              </div>
              <div className="box">
                <img src={timeFast} alt="Time Fast" />
                <h5>FAST DELIVERY</h5>
                <p>We deliver your order promptly to your door step</p>
              </div>
            </div>
            <div className="two_top">
              <div className="box">
                <img src={shoppingCartCheck} alt="Shopping Cart Check" />
                <h5>ONLINE ORDER</h5>
                <p>Explore menu & order with ease using your Online Ordering</p>
              </div>
              <div className="box">
                <img src={gift} alt="Gift" />
                <h5>GIFT CARDS</h5>
                <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
              </div>
            </div>
          </div>
        </div>
        <div className="seventh-wrapper">
          <div className="about_sushi">
            <img src={logo} alt="Logo" />
            <h5>
              Savor the artistry where every dish is a culinary masterpiece
            </h5>
          </div>
          <div className="links">
            <h4>Useful links</h4>
            <p>About us</p>
            <p>Events</p>
            <p>Blogs</p>
            <p>FAQ</p>
          </div>
          <div className="Menu">
            <h4>Main Menu</h4>
            <p>Home</p>
            <p>Offers</p>
            <p>Menus</p>
            <p>Reservation</p>
          </div>
          <div className="Menu">
            <h4>Contact Us</h4>
            <p>example@gmail.com</p>
            <p>+64 958 248 966</p>
            <p>Social media</p>
          </div>
        </div>
        <div className="footer">
          <div className="apps">
            <img src={facebook} alt="Facebook" />
            <img src={group40} alt="Group 40" />
          </div>
          <div className="Copyright">
            <p>
              Copyright © 2024{" "}
              <a href="https://github.com/biodun42?tab=repositories">
                BiodunCode
              </a>{" "}
              | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
