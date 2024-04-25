import { faker } from "@faker-js/faker";

export interface ILinkedSites {
    name: string;
    link: string;
    status: "PENDING" | "CONNECTED"
}
export const linkedSites: ILinkedSites[] = [
    { name: "G.W.Arthur", link: "gwarthur.org", status: "PENDING" },
    { name: "Kuantu", link: "kuantu.org", status: "CONNECTED" },
    { name: "Completefarmer", link: "completefarmer.com", status: "CONNECTED" }
]

export const websitePages = [
    { 'kuantu.org': ['contact', 'booking'] },
    { 'completefarmer.com': ['careers', 'contact', 'support'] },
    { 'gwarthur.org': ['contact', 'testimonies', 'newsletter', 'partnership'] }
]
export interface IWebsiteTraffic {
    _id: string;
    siteName: string;
    page: string;
    createdAt: Date;
}

const randomWebsitePageObject = websitePages[Math.floor(Math.random() * websitePages.length)];
const websiteDomain = Object.keys(randomWebsitePageObject)[0];
const pages = randomWebsitePageObject[websiteDomain as keyof typeof randomWebsitePageObject];
const randomPage = (pages as string[])[Math.floor(Math.random() * (pages as string[]).length)];
function createWebsiteTraffic(): IWebsiteTraffic {
    return {
        _id: faker.string.uuid(),
        siteName: faker.helpers.arrayElement(linkedSites).link,
        page: randomPage,
        createdAt: faker.date.recent({ days: 1 })
    };
}

export interface IMailTraffic {
    _id: string;
    forSite: string;
    createdAt: Date;
    status: "SENT" | "FAILED"
}
function createSendMailTraffic(): IMailTraffic {
    return {
        _id: faker.string.uuid(),
        forSite: faker.helpers.arrayElement(linkedSites).link,
        status: faker.helpers.arrayElement(['SENT', 'FAILED']),
        createdAt: faker.date.recent({ days: 1 })
    };
}


export const websiteTrafficData = Array.from({ length: 20 }, createWebsiteTraffic);
export const mailTrafficData = Array.from({ length: 20 }, createSendMailTraffic);