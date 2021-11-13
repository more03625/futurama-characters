import toast from 'react-hot-toast';
export const Host = window.location.host === "localhost:3000" ? "https://api.sampleapis.com/" : "https://api.sampleapis.com/"

export const Endpoints = {
    characters: "futurama/characters",
}

export const notify = (message, type) => {
    type === 'error' ? toast.error(message) : toast.success(message);
}

export const catchError = "Something went wrong, Please try again!";

export const convertToSlug = (title) => {
    return title?.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};
export const uppercaseFirstLetter = (string) => {
    return string && string[0].toUpperCase() + string.slice(1);
}