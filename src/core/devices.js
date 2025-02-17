const DEVICE_NAMES = {
    alioth: "Xiaomi Mi 11X/POCO F3/Redmi K40",
    blueline: "Google Pixel 3",
    cheetah: "Google Pixel 7 Pro",
    crosshatch: "Google Pixel 3 XL",
    lemonade: "OnePlus 9",
    lemonadep: "OnePlus 9 Pro",
    oriole: "Google Pixel 6",
    panther: "Google Pixel 7",
    raven: "Google Pixel 6 Pro",
    sake: "ASUS ZenFone 8",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
