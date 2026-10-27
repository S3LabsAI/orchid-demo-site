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
  short: string;
  intro: string;
  items: string[];
}[] = [
  {
    id: "commercial",
    title: "Commercial lines",
    short: "Business owner's policies, liability, property, auto, and workers' comp.",
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
    short: "Auto, home and dwelling, umbrella, and the boat or RV in the driveway.",
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
    short: "Our specialty. Owner-operators, fleets, and transportation businesses.",
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

export const whyPoints = [
  {
    icon: "scales",
    title: "We shop, you choose",
    body: "No more chasing quotes. We compare 20+ top-rated carriers side by side and bring back the options that fit your risks.",
  },
  {
    icon: "magnifier",
    title: "We find the gaps",
    body: "We analyze your risks and identify coverage gaps, so protection keeps you secure today and prepared for tomorrow.",
  },
  {
    icon: "truck",
    title: "Trucking specialists",
    body: "Owner-operators, fleets, and transportation businesses get coverage built for the road, from cargo to trailer interchange.",
  },
] as const;

export const stats = [
  { value: "20+", label: "Carriers compared" },
  { value: "14", label: "States licensed" },
  { value: "3", label: "Lines of coverage" },
  { value: "9 to 5", label: "Central, Mon to Fri" },
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
    // Source is a circular crop on white; zoom past the circle edge when framed square.
    portrait: null,
    circular: true,
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
    portrait: `${cdn}/ChatGPT%20Image%20Feb%2019%2C%202026%2C%2002_19_36%20PM.png/:/rs=w:800,cg:true,m`,
    circular: false,
    alt: "Lan Nguyen, smiling, with dark hair in a black top",
  },
];

export const heroPhotos = {
  main: `${cdn}/DNAillustratedphotography-dangfamily(11of13).jpg/:/rs=w:1200,cg:true,m`,
  mainAlt: "Phi Dang and Lan Nguyen with their son on an autumn trail",
  detail: `${cdn}/18-DH106219.jpg/:/rs=w:600,cg:true,m`,
  detailAlt: "A toddler walking on a garden path, holding his parents' hands",
};

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
  { href: "/#why", label: "Why Orchid" },
  { href: "/meet-the-team-1", label: "Meet the team" },
  { href: "/#partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
] as const;
