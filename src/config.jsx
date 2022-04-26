import JensPenneman from "./images/IMG_1429.jpeg";

import HoGentLogo from "./images/HoGentLogo.png";
import BroederschoolStekeneLogo from "./images/BroederschoolStekeneLogo.png";

import {Facebook, Handyman, Instagram, LinkedIn, Twitter} from "@mui/icons-material";

const firstname = "Jens";
const lastname  = "Penneman";
const portret   = JensPenneman;
const leadText  = "Ik ben Jens, een student aan HoGent, gedreven door de nieuwste snufjes en technologieën." +
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
	},
	{
		startdate:  new Date("2018-09-01"),
		enddate:    new Date("2020-06-01"),
		name:       "I²CT",
		href:       undefined,
		schoolName: "GTI Beveren",
		schoolHref: "https://www.beveren.be/nl/scholen/gti-beveren",
		schoolLogo: undefined,
	},
	{
		startdate:  new Date("2016-09-01"),
		enddate:    new Date("2018-06-01"),
		name:       "Electro mechanica",
		href:       "https://stekene.broeders.be/studieaanbod/4de-leerjaar-d-a-finaliteit-domeingebonden-elektromechanische-technieken/",
		schoolName: "Broederschool Stekene",
		schoolHref: "https://stekene.broeders.be/",
		schoolLogo: BroederschoolStekeneLogo,
	},
];

const work = [{
	startdate: new Date("2021-10-01"),
	enddate:   undefined,
	name:      "WEB4YOU",
	role:      "Co-Founder",
	href:      "https://web-4-you.be/",
}/*De anderen moeten nog komen*/];

const projects = [/*Nog geen toegevoegd*/];

const socialMedia = [{
	name: "Facebook",
	icon: <Facebook />,
	href: "https://facebook.com",
}, {
	name: "Instagram",
	icon: <Instagram />,
	href: "https://facebook.com",
}, {
	name: "Twitter",
	icon: <Twitter />,
	href: "https://facebook.com",
}, {
	name: "LinkedIn",
	icon: <LinkedIn />,
	href: "https://facebook.com",
}];

const workInProgress = {
	title: "Work in progress",
	short: "WIP",
	text:  "Er wordt nog aan de site gewerkt... Kom eens terug binnen een week of 2.",
	icon:  <Handyman />,
};

export {firstname, lastname, portret, leadText, studies, work, projects, socialMedia, workInProgress};