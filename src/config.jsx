import JensPenneman from "./images/IMG_1429.jpeg";

import HoGentLogo from "./images/HoGentLogo.png";
import BroederschoolStekeneLogo from "./images/BroederschoolStekeneLogo.png";

import WEB4YOULogo from "./images/WEB4YOULogo.svg";
import HoutshopLogo from "./images/HoutshopLogo.png";
import StoraEnsoLogo from "./images/StoraEnsoLogo.jpg";

import BertsCreationsWebsite from "./images/BertsCreationsWebsitePC.png";
import BartBostoenWebsite from "./images/BartBostoenWebsite.png";
import KLJStekeneWebsite from "./images/KLJStekeneWebsite.png";

import {Facebook, Instagram, LinkedIn, Twitter} from "@mui/icons-material";

const firstname = "Jens";
const lastname = "Penneman";
const portret = JensPenneman;
const leadText = "Ik ben Jens, een student aan HoGent, gedreven door de nieuwste snufjes en technologieën." +
	"Ik heb ook een enorme passie voor React en website-gerelateerde talen en frameworks.";

const studies = [
	{
		startdate:  new Date("2020-09-01"),
		enddate:    new Date("2023-06-01"),
		name:       "Toegepaste informatica",
		href:       "https://www.hogent.be/opleidingen/bachelors/toegepaste-informatica/",
		schoolName: "HoGent",
		schoolHref: "https://www.hogent.be/",
		schoolLogo: HoGentLogo,
		size:       {
			xs: 1,
			sm: 1,
			md: 2,
			lg: 3,
		},
	},
	{
		startdate:  new Date("2018-09-01"),
		enddate:    new Date("2020-06-01"),
		name:       "I²CT",
		href:       undefined,
		schoolName: "GTI Beveren",
		schoolHref: "https://www.beveren.be/nl/scholen/gti-beveren",
		schoolLogo: undefined,
		size:       {
			xs: 1,
			sm: 1,
			md: 1,
			lg: 2,
		},
	},
	{
		startdate:  new Date("2016-09-01"),
		enddate:    new Date("2018-06-01"),
		name:       "Electro mechanica",
		href:       "https://stekene.broeders.be/studieaanbod/4de-leerjaar-d-a-finaliteit-domeingebonden-elektromechanische-technieken/",
		schoolName: "Broederschool Stekene",
		schoolHref: "https://stekene.broeders.be/",
		schoolLogo: BroederschoolStekeneLogo,
		size:       {
			xs: 1,
			sm: 1,
			md: 1,
			lg: 1,
		},
	},
];

const work = [
	{
		periods:     [
			{
				displayText: undefined,
				startdate:   new Date("2022-05-02"),
				enddate:     new Date("2022-07-02"),
			},
		],
		companyName: "WEB4YOU",
		companyLogo: WEB4YOULogo,
		role:        "Co-Founder",
		href:        "https://web-4-you.be/",
		isHoliday:   false,
	}, {
		periods:     [
			{
				displayText: "Zomer 2021",
				startdate:   new Date("2021-08-01"),
				enddate:     new Date("2021-08-31"),
			},
		],
		companyName: "StoraEnso (Lumipaper)",
		companyLogo: StoraEnsoLogo,
		role:        "Magazijnmedewerker",
		href:        "",
		isHoliday:   true,
	}, {
		periods:     [
			{
				displayText: "Augustus '18",
				startdate:   new Date("2018-08-01"),
				enddate:     new Date("2018-08-31"),
			},
			{
				displayText: "Augustus '19",
				startdate:   new Date("2019-08-01"),
				enddate:     new Date("2019-08-31"),
			},
			{
				displayText: "Augustus '19",
				startdate:   new Date("2019-08-01"),
				enddate:     new Date("2019-08-31"),
			},
		],
		companyName: "Houtshop Van Der Gucht",
		companyLogo: HoutshopLogo,
		role:        "Magazijnmedewerker",
		href:        "https://www.houtshop.be/",
		isHoliday:   true,
	}, {
		periods:     [
			{
				displayText: "Woensdagen en zaterdagen '15 - '17",
				startdate:   new Date("2016-10-01"),
				enddate:     new Date("2018-06-01"),
			},
		],
		companyName: "V3-Consulting",
		companyLogo: undefined,
		role:        "Administratief assistent",
		href:        undefined,
		isHoliday:   true,
	},
];

const projects = [
	{
		name:  "Bart Bostoen",
		href:  "https://bartbostoen.be/",
		image: BartBostoenWebsite,
	},
	{
		name:  "Berts Creations",
		href:  "https://bertscreations.be",
		image: BertsCreationsWebsite,
	},
	{
		name:  "KLJ Stekene",
		href:  "https://kljstekene.be",
		image: KLJStekeneWebsite,
	},
];

const socialMedia = [{
	name: "Facebook",
	icon: <Facebook/>,
	href: "https://www.facebook.com/PennemanJens",
}, {
	name: "Instagram",
	icon: <Instagram/>,
	href: "https://www.instagram.com/jens.penneman/",
}, {
	name: "Twitter",
	icon: <Twitter/>,
	href: "https://twitter.com/JensPenneman",
}, {
	name: "LinkedIn",
	icon: <LinkedIn/>,
	href: "https://www.linkedin.com/in/jenspenneman/",
}];

const workInProgress = undefined;
/*{
 title: "Work in progress",
 short: "WIP",
 text:  "Er wordt nog aan de site gewerkt... Kom eens terug binnen een week of 2.",
 icon: <Handyman/>,
 };*/

const siteSettings = {
	sectionSpacing: 2,
};

export {firstname, lastname, portret, leadText, studies, work, projects, socialMedia, workInProgress, siteSettings};