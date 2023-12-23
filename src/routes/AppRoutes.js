import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout/auth-layout";
import React from "react";
import DefaultLayout from "../layout/DefaultLayout/default-layout";
import pMinDelay from "p-min-delay";
import PrivateRoute from "./PrivateRoute";
import {
  ACCOUNT_SETTING,
  ADMIN_PAGE,
  AVATAR_SETTING,
  BACKGROUND_COVER_SETTING,
  COMMENTS_MANAGEMENT,
  CONVERSATION,
  FRIENDS_PAGE,
  FRIENDS_REQUESTS,
  FRIENDS_SENT_REQUESTS,
  HOME_PAGE,
  LOGIN_PAGE,
  MEMBERS_ABOUT,
  MEMBERS_FRIENDS,
  MEMBERS_GALLERY,
  MEMBERS_PAGE,
  MESSAGE_PAGE,
  NOTIFICATIONS_PAGE,
  PAGES,
  PAGES_MANAGEMENT,
  PAGE_BINDING,
  PAGE_GALLERY,
  PAGE_INTRO,
  PAGE_MEMBERS,
  PAGE_MEMBER_BINDING,
  PAGE_MEMBER_GALLERY,
  PAGE_MEMBER_INTRO,
  PAGE_MEMBER_MEMBERS,
  PASSWORD_SETTING,
  POSTS_MANAGEMENT,
  PROFILES_ABOUT,
  PROFILES_FRIENDS,
  PROFILES_GALLERY,
  PROFILES_STORY_ARCHIVE,
  PROFILE_PAGE,
  REGISTER_PAGE,
  SETTINGS_PAGE,
  USERS_MANAGEMENT,
  VERIFY_PAGE,
} from "../settings/constant";
import TimelineProfile from "../containers/DefaultPage/ProfilePage/MainProfile/TimelineProfile/TimelineProfile";
import ConversationEmpty from "../containers/DefaultPage/MessagesPage/ConversationSide/ConversationEmpty/ConversationEmpty";
import AdminLayout from "../containers/AdminPage/AdminLayout/AdminLayout";
import AdminHome from "../containers/AdminPage/AdminHome/AdminHome";
import UsersManagement from "../containers/AdminPage/UsersManagement/UsersManagement";
import PostsManagement from "../containers/AdminPage/PostsManagement/PostsManagement";
import CommentsManagement from "../containers/AdminPage/CommentsManagement/CommentsManagement";
import PagesManagement from "../containers/AdminPage/PagesManagement/PagesManagement";

//Authencation Page
//================================= AUTHENCATION PAGE ==================================

const LoginPage = React.lazy(() =>
  pMinDelay(import("../containers/AuthPage/LoginPage/LoginPage"), 600)
);

const RegisterPage = React.lazy(() =>
  pMinDelay(import("../containers/AuthPage/RegisterPage/RegisterPage"), 600)
);

const VerifyPage = React.lazy(() =>
  pMinDelay(import("../containers/AuthPage/VerifyPage/VerifyPage"), 600)
);

//======================================================================================

////DEFAULT PAGE

const HomePage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/HomePage/HomePage"), 600)
);

const NewsfeedPage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/NewsfeedPage/NewsfeedPage"), 600)
);

//================================= PROFILE ===========================================

const ProfilePage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/ProfilePage/ProfilePage"), 600)
);

const ProfileAboutPage = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/ProfilePage/MainProfile/AboutProfile/AboutProfile"
    ),
    600
  )
);

const ProfileFriendsPage = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/ProfilePage/MainProfile/FriendsProfile/FriendsProfile"
    ),
    600
  )
);

const ProfileGalleryPage = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/ProfilePage/MainProfile/GalleryProfile/GalleryProfile"
    ),
    600
  )
);

const ProfileArchivePage = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/ProfilePage/MainProfile/ArchiveProfile/ArchiveProfile"
    ),
    600
  )
);

//============================================================================================

//================================= SETTINGS PAGE ===========================================

const SettingsPage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/SettingsPage/SettingsPage"), 600)
);

const ChangeProfileInfoPage = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/SettingsPage/PersonalInformation/PersonalInformation"
    ),
    600
  )
);

const ChangeAvatarPage = React.lazy(() =>
  pMinDelay(
    import("../containers/DefaultPage/SettingsPage/ChangeAvatar/ChangeAvatar"),
    600
  )
);

const ChangeBackgroundCoverPage = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/SettingsPage/ChangeBackground/ChangeBackground"
    ),
    600
  )
);

const ChangeAccountInfoPage = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/SettingsPage/AccountInformation/AccountInformation"
    ),
    600
  )
);

const ChangePasswordPage = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/SettingsPage/ChangePassword/ChangePassword"
    ),
    600
  )
);

//========================================================================================

//================================= FRIENDS PAGE ===========================================

const FriendsPage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/FriendsPage/FriendsPage"), 600)
);

const AllFriendsPage = React.lazy(() =>
  pMinDelay(
    import("../containers/DefaultPage/FriendsPage/AllFriends/AllFriends"),
    600
  )
);

const FriendsRequestsPage = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/FriendsPage/FriendsRequests/FriendsRequests"
    ),
    600
  )
);

const FriendsSentRequestsPage = React.lazy(() =>
  pMinDelay(
    import("../containers/DefaultPage/FriendsPage/SentRequests/SentRequests"),
    600
  )
);

//==========================================================================================

//================================= PAGE BINDING ===========================================

const Pages = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/Pages/Pages"), 600)
);

const PageBinding = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/PageBinding/PageBinding"), 600)
);

const TimelinePageBinding = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/PageBinding/MainPageBinding/Timeline/Timeline"
    ),
    600
  )
);

const IntroducePageBinding = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/PageBinding/MainPageBinding/Introduce/Introduce"
    ),
    600
  )
);

const MembersPageBinding = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/PageBinding/MainPageBinding/Members/Members"
    ),
    600
  )
);

const GalleryPageBinding = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/PageBinding/MainPageBinding/Gallery/Gallery"
    ),
    600
  )
);

//==========================================================================================

const NotificationsPage = React.lazy(() =>
  pMinDelay(
    import("../containers/DefaultPage/NotificationsPage/NotificationsPage"),
    600
  )
);

const MessagesPage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/MessagesPage/MessagesPage"), 600)
);

const Conversation = React.lazy(() =>
  pMinDelay(
    import(
      "../containers/DefaultPage/MessagesPage/ConversationSide/Conversation/Conversation"
    ),
    600
  )
);

const AppRoutes = () => {
  const Loader = () => {
    return <>Loading</>;
  };

  return (
    <Routes>
      {/* ====================== Authentication ======================*/}
      <Route element={<AuthLayout />}>
        <Route
          path={LOGIN_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <LoginPage />
            </React.Suspense>
          }
        />
        <Route
          path={REGISTER_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <RegisterPage />
            </React.Suspense>
          }
        />
        <Route
          path={VERIFY_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <VerifyPage />
            </React.Suspense>
          }
        />
      </Route>
      {/* ============================================================*/}

      {/* ====================== ADMIN ======================*/}
      <Route
        path={ADMIN_PAGE}
        element={
          <PrivateRoute>
            <React.Suspense fallback={<Loader />}>
              <AdminLayout />
            </React.Suspense>
          </PrivateRoute>
        }
      >
        <Route
          index
          element={
            <React.Suspense fallback={<Loader />}>
              <AdminHome />
            </React.Suspense>
          }
        />
        <Route
          path={USERS_MANAGEMENT}
          element={
            <React.Suspense fallback={<Loader />}>
              <UsersManagement />
            </React.Suspense>
          }
        />
        <Route
          path={POSTS_MANAGEMENT}
          element={
            <React.Suspense fallback={<Loader />}>
              <PostsManagement />
            </React.Suspense>
          }
        />
        <Route
          path={COMMENTS_MANAGEMENT}
          element={
            <React.Suspense fallback={<Loader />}>
              <CommentsManagement />
            </React.Suspense>
          }
        />
        <Route
          path={PAGES_MANAGEMENT}
          element={
            <React.Suspense fallback={<Loader />}>
              <PagesManagement />
            </React.Suspense>
          }
        />
      </Route>
      {/* ============================================================*/}

      {/* ====================== INDEX =============================*/}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <React.Suspense fallback={<Loader />}>
              <DefaultLayout />
            </React.Suspense>
          </PrivateRoute>
        }
      >
        {/* ====================== NEWSFEED =========================*/}
        <Route
          index
          element={
            <React.Suspense fallback={<Loader />}>
              <NewsfeedPage />
            </React.Suspense>
          }
        />

        {/* ====================== NEWSFEED_END ===================== */}

        {/* ====================== HOME_PAGE =========================*/}
        <Route
          path={HOME_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <HomePage />
            </React.Suspense>
          }
        />

        {/* ====================== HOME_PAGE_END ===================== */}

        {/* ====================== FRIENDS ======================*/}
        <Route
          path={FRIENDS_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <FriendsPage />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<Loader />}>
                <AllFriendsPage />
              </React.Suspense>
            }
          />
          <Route
            path={FRIENDS_REQUESTS}
            element={
              <React.Suspense fallback={<Loader />}>
                <FriendsRequestsPage />
              </React.Suspense>
            }
          />
          <Route
            path={FRIENDS_SENT_REQUESTS}
            element={
              <React.Suspense fallback={<Loader />}>
                <FriendsSentRequestsPage />
              </React.Suspense>
            }
          />
        </Route>
        {/* ====================== FRIENDS_END ====================== */}

        {/* ====================== PROFILE ====================== */}
        <Route
          path={PROFILE_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <ProfilePage accountOwner={true} />
            </React.Suspense>
          }
        >
          <Route index element={<TimelineProfile accountOwner={true} />} />
          <Route
            path={PROFILES_ABOUT}
            element={
              <React.Suspense fallback={<Loader />}>
                <ProfileAboutPage />
              </React.Suspense>
            }
          />
          <Route
            path={PROFILES_FRIENDS}
            element={
              <React.Suspense fallback={<Loader />}>
                <ProfileFriendsPage accountOwner={true} />
              </React.Suspense>
            }
          />
          <Route
            path={PROFILES_GALLERY}
            element={
              <React.Suspense fallback={<Loader />}>
                <ProfileGalleryPage />
              </React.Suspense>
            }
          />
          <Route
            path={PROFILES_STORY_ARCHIVE}
            element={
              <React.Suspense fallback={<Loader />}>
                <ProfileArchivePage />
              </React.Suspense>
            }
          />
        </Route>
        {/* ====================== PROFILE_END ====================== */}

        {/* ====================== MEMBERS ====================== ===*/}
        <Route
          path={MEMBERS_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <ProfilePage accountOwner={false} />
            </React.Suspense>
          }
        >
          <Route index element={<TimelineProfile accountOwner={false} />} />
          <Route
            path={MEMBERS_ABOUT}
            element={
              <React.Suspense fallback={<Loader />}>
                <ProfileAboutPage />
              </React.Suspense>
            }
          />
          <Route
            path={MEMBERS_FRIENDS}
            element={
              <React.Suspense fallback={<Loader />}>
                <ProfileFriendsPage />
              </React.Suspense>
            }
          />
          <Route
            path={MEMBERS_GALLERY}
            element={
              <React.Suspense fallback={<Loader />}>
                <ProfileGalleryPage />
              </React.Suspense>
            }
          />
        </Route>
        {/* ====================== MEMBERS_END ====================== */}

        {/* ====================== SETTINGS =========================*/}
        <Route
          path={SETTINGS_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <SettingsPage />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<Loader />}>
                <ChangeProfileInfoPage />
              </React.Suspense>
            }
          />
          <Route
            path={AVATAR_SETTING}
            element={
              <React.Suspense fallback={<Loader />}>
                <ChangeAvatarPage />
              </React.Suspense>
            }
          />
          <Route
            path={BACKGROUND_COVER_SETTING}
            element={
              <React.Suspense fallback={<Loader />}>
                <ChangeBackgroundCoverPage />
              </React.Suspense>
            }
          />
          <Route
            path={ACCOUNT_SETTING}
            element={
              <React.Suspense fallback={<Loader />}>
                <ChangeAccountInfoPage />
              </React.Suspense>
            }
          />
          <Route
            path={PASSWORD_SETTING}
            element={
              <React.Suspense fallback={<Loader />}>
                <ChangePasswordPage />
              </React.Suspense>
            }
          />
        </Route>

        {/* ====================== SETTINGS_END ========================== */}

        {/* ====================== NOTIFICATIONS =========================*/}
        <Route
          path={NOTIFICATIONS_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <NotificationsPage />
            </React.Suspense>
          }
        />
        {/* ====================== NOTIFICATIONS_END ===================== */}

        {/* ====================== MESSAGES_PAGE =========================*/}
        <Route
          path={MESSAGE_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <MessagesPage />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<Loader />}>
                <ConversationEmpty />
              </React.Suspense>
            }
          />
          <Route
            path={CONVERSATION}
            element={
              <React.Suspense fallback={<Loader />}>
                <Conversation />
              </React.Suspense>
            }
          />
        </Route>

        {/* ====================== MESSAGES_PAGE_END ===================== */}

        {/* ====================== PAGES =========================*/}
        <Route
          path={PAGES}
          element={
            <React.Suspense fallback={<Loader />}>
              <Pages />
            </React.Suspense>
          }
        />
        {/* Owner */}
        <Route
          path={PAGE_BINDING}
          element={
            <React.Suspense fallback={<Loader />}>
              <PageBinding pageOwner={true} />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<Loader />}>
                <TimelinePageBinding pageOwner={true} />
              </React.Suspense>
            }
          />
          <Route
            path={PAGE_INTRO}
            element={
              <React.Suspense fallback={<Loader />}>
                <IntroducePageBinding />
              </React.Suspense>
            }
          />
          <Route
            path={PAGE_MEMBERS}
            element={
              <React.Suspense fallback={<Loader />}>
                <MembersPageBinding pageOwner={true} />
              </React.Suspense>
            }
          />
          <Route
            path={PAGE_GALLERY}
            element={
              <React.Suspense fallback={<Loader />}>
                <GalleryPageBinding />
              </React.Suspense>
            }
          />
        </Route>

        {/* Member */}
        <Route
          path={PAGE_MEMBER_BINDING}
          element={
            <React.Suspense fallback={<Loader />}>
              <PageBinding pageOwner={false} />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<Loader />}>
                <TimelinePageBinding pageOwner={false} />
              </React.Suspense>
            }
          />
          <Route
            path={PAGE_MEMBER_INTRO}
            element={
              <React.Suspense fallback={<Loader />}>
                <IntroducePageBinding />
              </React.Suspense>
            }
          />
          <Route
            path={PAGE_MEMBER_MEMBERS}
            element={
              <React.Suspense fallback={<Loader />}>
                <MembersPageBinding pageOwner={false} />
              </React.Suspense>
            }
          />
          <Route
            path={PAGE_MEMBER_GALLERY}
            element={
              <React.Suspense fallback={<Loader />}>
                <GalleryPageBinding />
              </React.Suspense>
            }
          />
        </Route>

        {/* ====================== PAGES_END ===================== */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
