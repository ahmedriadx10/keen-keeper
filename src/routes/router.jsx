import { createBrowserRouter } from "react-router";
import Homepage from "../pages/hompage/Homepage";
import RootLayout from "../layouts/RootLayout";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import Details from "../pages/details/Details";
import NotFound from "../pages/not-found/NotFound";

export const router=createBrowserRouter([
  {path:'/',Component:RootLayout,

children:[{index:true,Component:Homepage},

{path:'timeline',Component:Timeline},
{path:'stats',Component:Stats},
{path:'friends/details/:id',Component:Details}

]    

  }
])