import { Logger, isElement } from "../utils";

const l = Logger("Netflix Skipper");
const SKIP_INTRO_SELECTOR = `button[data-uia="player-skip-intro"]`;
const NEXT_EPISO_SELECTOR = `button[data-uia="next-episode-seamless-button"]`;

const Observer = new MutationObserver(function (mutations) {
    for (const m of mutations) {
        if (m.type === "childList") {
            for (const n of m.addedNodes) {
                parseNodes(n);
            }
        }
    }
});

function parseNodes(n: Node) {
    if (isElement(n)) {
        if (n.matches(SKIP_INTRO_SELECTOR)) {
            l.log("Found Skip Intro button", n);

            return;
        }
    }

    for (const c of n.childNodes) {
        parseNodes(c);
    }
}

Observer.observe(document, { childList: true, subtree: true });
