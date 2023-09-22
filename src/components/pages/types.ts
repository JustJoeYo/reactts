import About from "./about";
import Resume from "./resume";
import Contact from "./contact";
import Portfolio from "./myportfolio";
import PageNotFound from "./pagenotfound";

export {
  About,
  Resume,
  Contact,
  Portfolio,
  PageNotFound,
};

export enum SelectedPage {
  About = "/reactts/about",
  Resume = "/reactts/resume",
  Portfolio = "/reactts/portfolio",
  Contact = "/reactts/contact",
  PageNotFound = "404",
};