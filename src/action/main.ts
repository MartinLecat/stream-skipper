export {};
declare global {
    /** Function adding tw dark class to <html> according to preference, defined in <head> */
    function udpateTheme(): void;
    /** Toggling dark preference and update class to <html>, defined in <head> */
    function toggleTheme(): void;
}
type TabElement = {
    show: () => void;
    hide: () => void;
} & HTMLElement;

document.querySelector("#toggle-dark")?.addEventListener("click", toggleTheme);

const tabs = [...document.querySelectorAll(".tab")] as TabElement[];
tabs.forEach((tab) => {
    const button = tab.querySelector("button") as HTMLButtonElement;
    const contentSelector = tab.dataset["target"] as string;
    const content = document.querySelector(contentSelector) as HTMLElement;

    tab["show"] = function () {
        tabs.forEach((t) => t.hide());
        tab.classList.add("tab-active");
        content.classList.add("tab-active");
    };
    tab["hide"] = function () {
        tab.classList.remove("tab-active");
        content.classList.remove("tab-active");
    };
    button.addEventListener("click", tab["show"]);
});
