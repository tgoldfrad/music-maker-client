import { createHashRouter } from "react-router";
import AppLayout from "./components/AppLayout";
import SignIn from "./components/user/SignIn";
import UploadFile from "./components/file/UploadFile";
import UserFiles from "./components/file/UserFiles";
import AllFiles from "./components/file/AllFiles";

export const router = createHashRouter([
    {
      
      path: '/',
      element: <>
        <AppLayout />
      </>,
      children: [
        { path: 'upload', element: <UploadFile />, errorElement: <>Error!</> },
        { path: 'files', element: <UserFiles />, errorElement: <>Error!</> },
        { path: 'allfiles', element: <AllFiles />, errorElement: <>Error!</> },



        // {
        //   path: 'recipes', element: <RecipesList />, errorElement: <>Error!</>,
        //   children: [
        //     { path: ':id', element: <RecipeDisplay /> },
        //   ]
        // },
        // { path: 'recipes/add', element: <RecipeForm/>, errorElement: <>Error!</> },
        // {
        //   path: 'loggedin', element: <LoggedIn />, errorElement: <>Error1</>,
        //   children: [
        //     { path: ':name', element: <LoggedIn /> }
        //   ]
        // },
        //  { path: '/about', element: <About /> },
        
      ]
    }
  ])