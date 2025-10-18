import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,

    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
    avalanche,
    bitcoin,
    bnb,
    ethereum,
    lympo,
    near,
    optimism,
    polkadot,
    polygon,
    solana,
    stellar,
    uniswap,
    copymColoredIcon,
} from "../assets";
import { links } from "../config";

export const navigation = [{
        id: "0",
        title: "Features",
        url: "#features",
    },
    {
        id: "1",
        title: "Pricing",
        url: "#pricing",
    },
    {
        id: "2",
        title: "How to use",
        url: "#how-to-use",
    },

    {
        id: "4",
        title: "Source Code",
        url: links.sourceCode,
        onlyMobile: true,
        external: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
    avalanche,
    bitcoin,
    bnb,
    ethereum,
    lympo,
    near,
    optimism,
    polkadot,
    polygon,
    solana,
    stellar,
    uniswap
];

export const brainwaveServices = [
    "RWA Tokenization",
    "AI Compliance",
    "DeFi Integration",
];

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];



export const collabText =
    "Enterprise-grade platform that transforms real-world assets into digital tokens, connecting traditional finance with blockchain technology for enhanced liquidity, regulatory compliance, and institutional security.";

export const collabContent = [{
        id: "0",
        title: "INSTANT ASSET DIGITIZATION",
        text: "Transform real estate, commodities, and securities into blockchain tokens in minutes. Native integration with Ethereum, Polygon, Solana, and Avalanche.",
    },
    {
        id: "1",
        title: "COMPLIANCE ON AUTOPILOT",
        text: "AI-driven KYC/AML that works 24/7. Automatic FATF, SEC and global regulatory compliance with zero human intervention.",
    },
    {
        id: "2",
        title: "FORTRESS-LEVEL SECURITY",
        text: "MPC custody with cross-chain atomic settlements. Enterprise-grade protection for every digital asset transaction.",
    },
];

export const collabApps = [{
        id: "0",
        title: "Securitize",
        icon: ethereum,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Polymath",
        icon: polygon,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "RealT",
        icon: bitcoin,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Centrifuge",
        icon: solana,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Tokeny",
        icon: avalanche,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Redbelly",
        icon: optimism,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Algorand",
        icon: near,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Swarm",
        icon: stellar,
        width: 38,
        height: 32,
    },
];

export const pricing = [{
        id: "0",
        title: "COPYM-AI Starter",
        description: "Basic RWA tokenization with COPYM-AI compliance",
        price: "0",
        features: [
            "Access to COPYM-AI's Securitize compliance AI",
            "Basic real estate tokenization via COPYM-AI",
            "Standard KYC/AML verification through COPYM-AI",
        ],
        premium: false,
    },
    {
        id: "1",
        title: "COPYM-AI Professional",
        description: "Advanced RWA tokenization with COPYM-AI's multi-platform integration",
        price: "99.99",
        features: [
            "Full COPYM-AI platform integration (Securitize, Polymath, RealT)",
            "COPYM-AI's AI-powered portfolio optimization",
            "Priority compliance support from COPYM-AI team",
        ],
        premium: true,
    },
    {
        id: "2",
        title: "COPYM-AI Enterprise",
        description: "Complete RWA ecosystem with COPYM-AI's custom AI solutions",
        price: null,
        features: [
            "All RWA platforms + DeFi integration through COPYM-AI",
            "Custom COPYM-AI AI compliance engine",
            "Dedicated COPYM-AI account manager",
        ],
        premium: false,
    },
];

export const benefits = [{
        id: "0",
        title: "The Problem We Solve",
        text: "Traditional RWA investment is broken: too expensive, illiquid, and complex. Great opportunities missed by everyday investors.",
        backgroundUrl: "/src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: "/assets/copym/png/Copym-05-1.png",
    },
    {
        id: "1",
        title: "AI-Powered Tokenization",
        text: "Convert real-world assets into secure blockchain tokens with AI verification. Start investing with just $100.",
        backgroundUrl: "/src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: "/assets/copym/png/Copym-05-1.png",
        light: true,
    },
    {
        id: "2",
        title: "Integrated Marketplace",
        text: "Buy, sell, and trade fractional ownership instantly. No more waiting weeks to liquidate investments.",
        backgroundUrl: "/src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: "/assets/copym/png/Copym-05-1.png",
    },
    {
        id: "3",
        title: "AI Investment Advisor",
        text: "AI predicts asset growth with 23% better accuracy than traditional tools. Get personalized recommendations.",
        backgroundUrl: "/src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: "/assets/copym/png/Copym-05-1.png",
        light: true,
    },
    {
        id: "4",
        title: "Smart Asset Verification",
        text: "AI + human experts verify every asset's value and authenticity. Bank-level security with compliance.",
        backgroundUrl: "/src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: "/assets/copym/png/Copym-05-1.png",
    },
    {
        id: "5",
        title: "Business Model",
        text: "Revenue through tokenization fees, marketplace fees, premium AI insights, and management fees.",
        backgroundUrl: "/src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: "/assets/copym/png/Copym-05-1.png",
    },
];

export const socials = [{
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];