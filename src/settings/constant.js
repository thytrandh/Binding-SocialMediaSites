//============================ PUBLICPAGE ============================

export const LOGIN_PAGE = "/login";
export const REGISTER_PAGE = "/register";
export const VERIFY_PAGE = "/veriry";
export const FORGOT_PASSWORD_PAGE = "/forgot-password";

//======================================================================

//============================ PRIVATE PAGE ============================

//HOME PAGE SECTION
export const HOME_PAGE = "/home";

//NEWSFEED PAGE SECTION
export const NEWSFEED_PAGE = "/";

//FRIENDS PAGE SECTION
export const FRIENDS_PAGE = "/friends";
export const FRIENDS_REQUESTS = "/friends/requests";
export const FRIENDS_SENT_REQUESTS = "/friends/sent-requests";
//PROFILE PAGE SECTION
export const PROFILE_PAGE = "/profile";
// export const PROFILES_TIME_LINE = "/profile/timeline";
export const PROFILES_ABOUT = "/profile/about";
export const PROFILES_FRIENDS = "/profile/friends";
export const PROFILES_GALLERY = "/profile/gallery";
export const PROFILES_STORY_ARCHIVE = "/profile/archive";

//MEMBERS PAGE SECTION
export const MEMBERS_PAGE = "/members/:memberId";
export const MEMBERS_ABOUT = "/members/:memberId/about";
export const MEMBERS_FRIENDS = "/members/:memberId/friends";
export const MEMBERS_GALLERY = "/members/:memberId/gallery";

//SETTINGS PAGE SECTION
export const SETTINGS_PAGE = "/settings";
export const AVATAR_SETTING = "/settings/profile/change-avatar";
export const BACKGROUND_COVER_SETTING = "/settings/profile/change-bg-cover";

export const ACCOUNT_SETTING = "/settings/account-info";
export const PASSWORD_SETTING = "/settings/account/change-password";

//NOTIFICATIONS PAGE SECTION
export const NOTIFICATIONS_PAGE = "/notifications";

//MESSAGE PAGE SECTION
export const MESSAGE_PAGE = "/message";
export const CONVERSATION = "/message/:chatId";

//PAGES
export const PAGES = "/pages";
export const LIKED_PAGE = "/pages/liked-pages";
export const MY_PAGES = "/pages/my-pages";
export const CREATE_PAGES = "/pages/create";
//==Profile
export const PAGE_BINDING = "/page-binding";
export const PAGE_INTRO = "/page-binding/intro";
export const PAGE_MEMBERS = "/page-binding/members";
export const PAGE_GALLERY = "/page-binding/gallery";
//== Page Binding
export const PAGE_MEMBER_BINDING = "/page-binding/:pageId";
export const PAGE_MEMBER_INTRO = "/page-binding/:pageId/intro";
export const PAGE_MEMBER_MEMBERS = "/page-binding/:pageId/members";
export const PAGE_MEMBER_GALLERY = "/page-binding/:pageId/gallery";

//======================================================================

export const ADMIN_PAGE = "/admin-page";
export const USERS_MANAGEMENT = "/admin-page/users";
export const POSTS_MANAGEMENT = "/admin-page/posts";
export const COMMENTS_MANAGEMENT = "/admin-page/comments";
export const PAGES_MANAGEMENT = "/admin-page/pages";
