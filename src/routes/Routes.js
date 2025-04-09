import { MAIN_ROUTE, STORIES_ROUTE, GALLERY_ROUTE, ABOUT_ROUTE, COUNTRY_ROUTE, STORY_ROUTE } from "../utils/consts";
import Main from "../pages/MainPage/MainPage";
import StoriesPage from "../pages/StoriesPage/StoriesPage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import AboutMePage from '../pages/AboutMePage/AboutMePage'
import CountryPage from '../pages/CountryPage/CountryPage'
import StoryPage from '../pages/StoryPage/StoryPage'

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: Main 
  },
  {
    path: STORIES_ROUTE,
    Component: StoriesPage 
  },
  {
    path: GALLERY_ROUTE,
    Component: GalleryPage 
  },
  {
    path: ABOUT_ROUTE,
    Component: AboutMePage
  },
  {
    path: COUNTRY_ROUTE + '/:id',
    Component: CountryPage
  },
  {
    path: STORY_ROUTE + '/:id',
    Component: StoryPage
  },
]

