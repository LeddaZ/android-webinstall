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
};
