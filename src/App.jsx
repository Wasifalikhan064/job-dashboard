// import React from 'react'
// import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Header from './components/Header'
// import Sidebar from './components/Sidebar'
// import Dashboard from './components/Dashboard'

// export default function App() {
//   return (
//     <BrowserRouter>
//     <Header />
//     <Sidebar />
//     <Routes>
//       <Route path="/" element={<Dashboard/>} />
//       <Route path="/dashboard" element={<Dashboard/>} />
//       <Route path="/recruitment" element={<Dashboard/>} />
//       <Route path="/schedule" element={<Dashboard/>} />
//       <Route path="/employee" element={<Dashboard/>} />
//       <Route path="/department" element={<Dashboard/>} />
//       <Route path="/support" element={<Dashboard/>} />
//       <Route path="/settings" element={<Dashboard/>} />
//     </Routes>
//     </BrowserRouter>
//   )
// }

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Sider from "./components/Sider";
export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sider />

          {/* Main Content */}
          <div className="flex-1 bg-gray-100 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/recruitment" element={<Dashboard />} />
              <Route path="/schedule" element={<Dashboard />} />
              <Route path="/employee" element={<Dashboard />} />
              <Route path="/department" element={<Dashboard />} />
              <Route path="/support" element={<Dashboard />} />
              <Route path="/settings" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
