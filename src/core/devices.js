const DEVICE_NAMES = {
    alioth: "Xiaomi Mi 11X/POCO F3/Redmi K40",
    cheetah: "Google Pixel 7 Pro",
    lemonadep: "OnePlus 9 Pro",
    oriole: "Google Pixel 6",
    panther: "Google Pixel 7",
    raven: "Google Pixel 6 Pro",
    sake: "ASUS ZenFone 8",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
