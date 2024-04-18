import { faker } from "@faker-js/faker";

export const linkedSites: {
    name: string;
    link: string;
}[] = [
        { name: "G.W.Arthur", link: "gwarthur.org" },
        { name: "Kuantu", link: "kuantu.org" },
        { name: "Completefarmer", link: "completefarmer.com" }
    ]
export interface IWebsiteTraffic {
    _id: string;
    siteName: string;
    createdAt: Date;
}

function createWebsiteTraffic(): IWebsiteTraffic {
    return {
        _id: faker.string.uuid(),
        siteName: faker.helpers.arrayElement(linkedSites).link,
        createdAt: faker.date.recent({ days: 2 })
    };
}

export const websiteTrafficData = Array.from({ length: 20 }, createWebsiteTraffic);