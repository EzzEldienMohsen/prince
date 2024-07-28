import { nanoid } from 'nanoid';
import breadCrumpImg from '../assets/svg/secondaryPages/titleVector.svg';



import specialty from './svg/mainPage/Speciality.svg';
import skill from './svg/mainPage/skill.svg';

import vision from "../assets/svg/secondaryPages/vision.svg"
import message from "../assets/svg/secondaryPages/message.svg"

export const theFAQ = [
  { id: nanoid(), text: 'ما أهم مميزات شركة برنس؟' },
  { id: nanoid(), text: 'كيف يتم الاتفاق على المشروعات الكبرى في شركة برنس؟' },
  { id: nanoid(), text: 'ما أهم مميزات شركة برنس؟' },
  { id: nanoid(), text: 'كيف يتم الاتفاق على المشروعات الكبرى في شركة برنس؟' },
  { id: nanoid(), text: 'ما أهم مميزات شركة برنس؟' },
];

export const expertise = [
  {
    id: nanoid(),
    title: 'mainExpertiseTitle1',
    img: skill,
    text: 'mainPageHeroTextAndOthers',
  },
  {
    id: nanoid(),
    title: 'mainExpertiseTitle2',
    img: specialty,
    text: 'mainPageHeroTextAndOthers',
  },
];
export const theVision = [
  {
    id: nanoid(),
    title: 'secondAboutCardTitle2',
    img: vision,
    text: 'secondAboutCardText',
  },
  {
    id: nanoid(),
    title: 'secondAboutCardTitle1',
    img: message,
    text: 'secondAboutCardText',
  },
];


export const pages = [
  {
    id: nanoid(),
    key: 'main',
    to: '/',
  },
  {
    id: nanoid(),
    key: 'mainLatestBigTitle',
    to: '/news',
  },
  {
    id: nanoid(),
    key: 'mainProjects',
    to: '/projects',
  },
  {
    id: nanoid(),
    key:  "about2",
    to: '/about',
  },
];
export const footerLinks = [
  {
    id: nanoid(),
    key: 'main',
    to: '/',
  },
  {
    id: nanoid(),
    key: 'about',
    to: '/',
  },
  {
    id: nanoid(),
    key: 'latest',
    to: '/',
  },
  {
    id: nanoid(),
    key: 'faqs',
    to: '/',
  },
  {
    id: nanoid(),
    key: 'project',
    to: '/projects',
  },
];




export const mainFormOptions = [
  { value: '', label: 'اختر المدينة' },
  { value: 'dubai', label: 'دبي' },
  { value: 'abu-dhabi', label: 'أبو ظبي' },
  { value: 'sharjah', label: 'الشارقة' },
];


export const aboutBreadCrumbs = [
  { id: nanoid(), img: breadCrumpImg, key: 'main', to: '/' },
  { id: nanoid(), img: "", key: 'about2', to: '/about' },

];
export const projectsBreadCrumbs = [
  { id: nanoid(), img: breadCrumpImg, key: 'main', to: '/' },
  { id: nanoid(), img: '', key: 'mainProjects', to: '/projects' },
];
export const newsBreadCrumbs = [
  { id: nanoid(), img: breadCrumpImg, key: 'main', to: '/' },
  { id: nanoid(), img: '', key: 'mainLatestBigTitle', to: '/projects' },
];