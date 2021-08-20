import { I18n } from "./js/i18n.js";

// SAMPLE
let i18n = new I18n();
i18n = Object.assign(i18n, {
  domain: {
    en: "Domain URL",
  },
  add: {
    en: "Add",
  },
  remove: {
    en: "Remove",
  },
  "x-domain": {
    en: "example.com",
  },
  settings: {
    en: "Settings",
  },
  Management: {
    en: "Management",
  },
  search: {
    en: "Search",
  },
  "nothing-found": {
    en: "No matches were found.",
  },
  General: {
    en: "General",
  },
  information: {
    en: "Information",
  },
  login: {
    en: "Login",
  },
  username: {
    en: "Username:",
  },
  password: {
    en: "Password:",
  },
  "x-characters": {
    en: "6 - 12 characters",
  },
  "x-characters-pw": {
    en: "10 - 18 characters",
  },
  "description-url": {
    en: "Regexp are accepted (see <a href='https://www.w3schools.com/jsref/jsref_match.asp'>JavaScript String match() Method</a>)",
  },
  logout: {
    en: "Logout",
  },
  enable: {
    en: "Enable",
  },
  useEnter: {
    en: "Use Enter key to confirm the selection (It might insert a new line on some web pages).",
  },
  About: {
    en: "About",
  },
  Credits: {
    en: "Credits",
  },
  "x-FluentTyper": {
    en: "The quickest way to contact me or report a bug in FluentTyper is by sending email to: <a href='mailto:bartekplus@gmail.com'>bartekplus@gmail.com</a>",
  },
  "x-Credits": {
    en: "With special thanks to: ",
  },
  showIcon: {
    en: "Show icon in location bar",
  },
  allUrls: {
    en: "Request permission to work on all pages - fix an issue where FluentTyper is no working if an iframe source domain doesn't match tab domain.",
  },
});

export { i18n };