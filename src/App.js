
import './App.css';
import Templates from "./components/Templates/Templates";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Brand from "./components/Brand/Brand";


function App() {
    const router =createBrowserRouter([
        {
            path: "/",
            element: <div><Templates/></div>
        },
        {
            path: "brand",
            element: <div> <Brand/>  </div>
        },

        // <Templates/>
    ])
  return (
    <div className="App">
        <RouterProvider router={router} ></RouterProvider>

{/*<Templates/>*/}
    </div>
  );
}

export default App;
