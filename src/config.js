export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#ebb35c",
    SUPPORTED_DEVICES: [
        {
            name: "ASUS ZenFone 8",
            model: "sake",
            bootloaderNames: ["lahaina", "ASUS_I006D"],
        },
        {
            name: "Google Pixel 3",
            model: "blueline",
            bootloaderNames: ["blueline"],
        },
        {
            name: "Google Pixel 3 XL",
            model: "crosshatch",
            bootloaderNames: ["crosshatch"],
        },
        {
            name: "Google Pixel 6",
            model: "oriole",
            bootloaderNames: ["oriole"],
        },
        {
            name: "Google Pixel 6 Pro",
            model: "raven",
            bootloaderNames: ["raven"],
        },
        {
            name: "Google Pixel 7",
            model: "panther",
            bootloaderNames: ["panther"],
        },
        {
            name: "Google Pixel 7 Pro",
            model: "cheetah",
            bootloaderNames: ["cheetah"],
        },
        {
            name: "OnePlus 9",
            model: "lemonade",
            bootloaderNames: ["lahaina", "OnePlus9"],
        },
        {
            name: "OnePlus 9 Pro",
            model: "lemonadep",
            bootloaderNames: ["lahaina", "OnePlus9Pro"],
        },
        {
            name: "Xiaomi Mi 11X/POCO F3/Redmi K40",
            model: "alioth",
            bootloaderNames: ["alioth", "aliothin"],
        },
    ],
    DONATION_LINKS: [
        {
            title: "Recurring donation",
            description:
                "Please consider making a recurring donation on Patreon for benefits such as early access to updates, exclusive behind-the-scenes development news, and priority support. This allows us to support the project sustainably in the future.",
            highlight: true,
            url: "https://patreon.com/kdrag0n",
            icon: "patreon",
        },
        {
            title: "One-time donation",
            description:
                "You can also make a one-time donation through PayPal. It doesn’t help with sustainable support, but every little bit is appreciated!",
            highlight: false,
            url: "https://paypal.me/kdrag0ndonate",
            icon: "paypal",
        },
    ],
};
