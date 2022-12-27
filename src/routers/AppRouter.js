import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/omnifood' element = {<LandingPage />} />
        <Route path = '*' element = {<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

































// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
// import NotFound from "../pages/NotFound";
// import Header from "../components/Header";

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;
