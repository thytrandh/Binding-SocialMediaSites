import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout/auth-layout";
import React from "react";
import DefaultLayout from "../layout/DefaultLayout/default-layout";
import pMinDelay from "p-min-delay";
import PrivateRoute from "./PrivateRoute";
import {
  HOME_PAGE,
  LOGIN_PAGE,
  MEMBERS_ABOUT,
  MEMBERS_FRIENDS,
  MEMBERS_GALLERY,
  MEMBERS_PAGE,
  MESSAGE_PAGE,
  NOTIFICATIONS_PAGE,
  PAGES,
  PROFILES_ABOUT,
  PROFILES_FRIENDS,
  PROFILES_GALLERY,
  PROFILES_STORY_ARCHIVE,
  PROFILE_PAGE,
  REGISTER_PAGE,
  SETTINGS_PAGE,
  VERIFY_PAGE,
} from "../settings/constant";
import TimelineProfile from "../containers/DefaultPage/ProfilePage/MainProfile/TimelineProfile/TimelineProfile";

//Authencation Page
const LoginPage = React.lazy(() =>
  pMinDelay(import("../containers/AuthPage/LoginPage/LoginPage"), 600)
);

const RegisterPage = React.lazy(() =>
  pMinDelay(import("../containers/AuthPage/RegisterPage/RegisterPage"), 600)
);

const VerifyPage = React.lazy(() =>
  pMinDelay(import("../containers/AuthPage/VerifyPage/VerifyPage"), 600)
);

const HomePage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/HomePage/HomePage"), 600)
);

const NewsfeedPage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/NewsfeedPage/NewsfeedPage"), 600)
);

//================================= PROFILE ==============================

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

//======================================================================================

const SettingsPage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/SettingsPage/SettingsPage"), 600)
);

const NotificationsPage = React.lazy(() =>
  pMinDelay(
    import("../containers/DefaultPage/NotificationsPage/NotificationsPage"),
    600
  )
);

const MessagesPage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/MessagesPage/MessagesPage"), 600)
);

const Pages = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/Pages/Pages"), 600)
);

const AppRoutes = () => {
  const Loader = () => {
    return <>Loading</>;
  };

  return (
    <Routes>
      {/* Authentication */}
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

      {/* INDEX */}
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
        <Route
          index
          element={
            <React.Suspense fallback={<Loader />}>
              <NewsfeedPage />
            </React.Suspense>
          }
        />
        <Route
          path={HOME_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <HomePage />
            </React.Suspense>
          }
        />
        {/* PROFILE */}
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
                <ProfileFriendsPage />
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
        {/* PROFILE_END */}

        {/* MEMBERS */}
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
        {/* MEMBERS_END */}
        <Route
          path={SETTINGS_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <SettingsPage />
            </React.Suspense>
          }
        />
        <Route
          path={NOTIFICATIONS_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <NotificationsPage />
            </React.Suspense>
          }
        />
        <Route
          path={MESSAGE_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <MessagesPage />
            </React.Suspense>
          }
        />
        <Route
          path={PAGES}
          element={
            <React.Suspense fallback={<Loader />}>
              <Pages />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
