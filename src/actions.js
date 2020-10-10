export const CHANGE_PAGE = "CHANGE_PAGE";

export const Pages = {
    DASHBOARD: "DASHBOARD",
    MY_NODE: "MY_NODE",
    INFLUENCERS: "INFLUENCERS",
    CONTENT: "CONTENT",
    FAVORITE: "FAVORITE",
    REVIEWS: "REVIEWS",
    PROFILE: "PROFILE",
};
/* action creators */

export function changePage(page) {
    return { type: CHANGE_PAGE, page };
}
