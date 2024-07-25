import { nanoid } from "nanoid";
import twitter from "../assets/svg/footer/social/twitter.svg"
import linkedin from "../assets/svg/footer/social/linkedin.svg"
import instagram from "../assets/svg/footer/social/instagram.svg"
import facebook from "../assets/svg/footer/social/facebook.svg"
import location from "./svg/footer/contact/location.svg"
import mail from "./svg/footer/contact/mail.svg"
import mobile from "./svg/footer/contact/mobile.svg"



export const pages = [
    {
        id:nanoid(),
        text:"الرئيسية",
        to:"/"
    },
    {
        id:nanoid(),
        text:"جديد الشركة",
        to:"/"
    },
    {
        id:nanoid(),
        text:"مشاريعنا",
        to:"/"
    },
    {
        id:nanoid(),
        text:"عن الشركة",
        to:"/"
    },
]
export const footerLinks = [
    {
        id:nanoid(),
        text:"الرئيسية",
        to:"/"
    },
    {
        id:nanoid(),
        text:"من نحن",
        to:"/"
    },
    {
        id:nanoid(),
        text:"اخر الاخبار",
        to:"/"
    },
    {
        id:nanoid(),
        text:"الاسالة المتكررة",
        to:"/"
    },
    {
        id:nanoid(),
        text:"المشاريع",
        to:"/"
    },
]
export const projects = [
    {
        id:nanoid(),
        text:"فلل سكنية",
        to:"/"
    },
    {
        id:nanoid(),
        text:"مساجد",
        to:"/"
    },
    {
        id:nanoid(),
        text:"مدارس",
        to:"/"
    },
    {
        id:nanoid(),
        text:"مستشفيات",
        to:"/"
    },
    {
        id:nanoid(),
        text:"مشاريع كبرى",
        to:"/"
    },
]

export const footerSocial = [
    {
        id:nanoid(),
        href:"",
        img:twitter,
    },
    {
        id:nanoid(),
        href:"",
        img:linkedin,
    },
    {
        id:nanoid(),
        href:"",
        img:instagram,
    },
    {
        id:nanoid(),
        href:"",
        img:facebook,
    },
]

export const contactFooter = [
  {
    id: nanoid(),
    img: location,
    text: 'الامارات - دبي - مول الحمد شارع ٢٠',
  },
  {
    id: nanoid(),
    img: mobile,
    text: '+11 2 3456 7890',
  },
  {
    id: nanoid(),
    img: mail,
    text: 'info@exampel.com',
  },
];