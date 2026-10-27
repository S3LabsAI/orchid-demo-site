// All copy and facts come from orchidag.com (fetched 27 Oct 2026) or the Orchid design canvas.

export const contact = {
  phone: "(515) 809-9099",
  phoneHref: "tel:+15158099099",
  email: "info@OrchidAG.com",
  emailHref: "mailto:info@OrchidAG.com",
};

export const hours = {
  summary: "Monday to Friday, 9 AM to 5 PM Central",
  weekends: "Closed weekends, but we stay responsive by mobile and email.",
  timeZone: "America/Chicago",
  openHour: 9,
  closeHour: 17,
};

export const states = [
  "AZ", "CA", "CO", "FL", "IA", "IL", "MD", "MI", "NE", "NM", "OH", "SC", "TN", "TX",
];

export type CoverageId = "commercial" | "personal" | "trucking";

export const coverage: {
  id: CoverageId;
  title: string;
  intro: string;
  items: string[];
}[] = [
  {
    id: "commercial",
    title: "Commercial lines",
    intro: "Comprehensive protection for business owners across industries.",
    items: [
      "Business Owner's Policies (BOP)",
      "General liability",
      "Commercial property",
      "Commercial auto",
      "Commercial umbrella",
      "Inland marine and equipment",
      "Crime coverage",
      "Workers' compensation",
      "Flood insurance",
    ],
  },
  {
    id: "personal",
    title: "Personal lines",
    intro: "Personal coverage designed for security and peace of mind.",
    items: [
      "Auto insurance",
      "Homeowners and dwelling",
      "Umbrella protection",
      "Motorcycle, RV and watercraft",
      "Valuable property",
      "Flood insurance",
    ],
  },
  {
    id: "trucking",
    title: "Trucking and transportation",
    intro: "Tailored coverage for owner-operators, fleets, and transportation businesses.",
    items: [
      "Commercial auto liability",
      "Physical damage",
      "Motor truck cargo",
      "Non-trucking liability",
      "Trailer interchange",
      "Workers' compensation",
    ],
  },
];

export const process = [
  {
    title: "We analyze your risks",
    body: "Tell us what you need to protect: your home, your vehicles, your business, or your fleet.",
  },
  {
    title: "We identify coverage gaps",
    body: "We look at what you carry today and find what is missing before an unexpected event does.",
  },
  {
    title: "We shop 20+ carriers",
    body: "No more chasing quotes. We compare top-rated carriers and bring back options that fit your risks and budget.",
  },
];

const cdn = "https://img1.wsimg.com/isteam/ip/92171dbe-d379-4423-8fb4-1a33374b31b8";
const logo = (file: string) => `${cdn}/${file}/:/rs=h:100,cg:true`;

export type Carrier = { name: string; src: string };

export const carriers: { insurance: Carrier[]; trucking: Carrier[] } = {
  insurance: [
    { name: "Travelers", src: logo("blob-03d164a.png") },
    { name: "Chubb", src: logo("chubb-7e3a77e.png") },
    { name: "The Hartford", src: logo("blob-dc7dcfe.png") },
    { name: "Liberty Mutual", src: logo("blob-8a3d03e.png") },
    { name: "Nationwide", src: logo("blob-fa8f753.png") },
    { name: "Progressive", src: logo("blob-76990ca.png") },
    { name: "Hiscox", src: logo("hiscox.png") },
    { name: "Berkshire Hathaway GUARD", src: logo("guard.png") },
    { name: "biBERK", src: logo("blob-5f5370b.png") },
    { name: "Attune", src: logo("attune-ebfa4b2.png") },
    { name: "Pie Insurance", src: logo("blob-94bb9c0.png") },
    { name: "ERGO NEXT", src: logo("blob-230df6e.png") },
    { name: "Homeowners of America", src: logo("blob-d583895.png") },
  ],
  trucking: [
    { name: "Progressive", src: logo("blob-1090254.png") },
    { name: "GEICO", src: logo("blob-b158483.png") },
    { name: "Canal Insurance", src: logo("blob-be3b9dc.png") },
    { name: "Northland Insurance", src: logo("blob-0be0e34.png") },
    { name: "IAT Insurance Group", src: logo("blob-24d3d58.png") },
    { name: "Cover Whale", src: logo("blob-0b971dc.png") },
    { name: "Star Mutual RRG", src: logo("blob-0955409.png") },
    { name: "Berkshire Hathaway Homestate Companies", src: logo("blob-7d3688a.png") },
    { name: "Reliable Transportation Association", src: logo("blob-459747d.png") },
    { name: "biBERK", src: logo("blob-5f5370b.png") },
    { name: "Pie Insurance", src: logo("blob-e560b97.png") },
    { name: "Liberty Mutual", src: logo("blob-4c99135.png") },
    { name: "The Hartford", src: logo("blob-b785298.png") },
  ],
};

export const team = [
  {
    name: "Phi Dang",
    role: "Owner and sales producer",
    since: 2014,
    bio: "Phi began his insurance career in 2014, building sales and leadership experience with Nationwide Insurance, Northwestern Mutual, and Gallagher Risk Management Services. A proud graduate of Iowa State University, he is passionate about helping clients protect what matters most.",
    phone: "(515) 949-4100",
    phoneHref: "tel:+15159494100",
    email: "Phi@OrchidAG.com",
    photo: `${cdn}/blob-79ea9cb.png/:/rs=w:640,h:640,cg:true`,
    alt: "Phi Dang, smiling, in a blue suit",
  },
  {
    name: "Lan Nguyen",
    role: "Owner and account manager",
    since: 2015,
    bio: "Lan began her insurance career in 2015, gaining customer service and policy processing experience with Nationwide Insurance. A graduate of Iowa State University, she is dedicated to attentive support and a smooth experience for every client.",
    phone: "(515) 809-9320",
    phoneHref: "tel:+15158099320",
    email: "info@OrchidAG.com",
    photo: `${cdn}/ChatGPT%20Image%20Feb%2019%2C%202026%2C%2002_19_36%20PM.png/:/cr=t:2.75%25,l:0%25,w:100%25,h:66.67%25/rs=w:640,h:640,cg:true`,
    alt: "Lan Nguyen, smiling, with dark hair in a black top",
  },
];

export const familyPhotos = [
  "DNAillustratedphotography-dangfamily(11of13).jpg",
  "110-DH107991.jpg",
  "Family%20Picture.jpg",
  "18-DH106219.jpg",
  "Phi%20Fam%20Pic-0001.jpg",
  "Family%20in%20Chicago-0001.jpg",
].map((file, i) => ({
  src: `${cdn}/${file}/:/rs=w:1200,cg:true,m`,
  alt: `Orchid team family photo ${i + 1} of 6`,
}));

export const nav = [
  { href: "/", label: "Home" },
  { href: "/meet-the-team-1", label: "Meet the team" },
  { href: "/contact", label: "Contact" },
] as const;
