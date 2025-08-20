import React from "react";
import Header from "./components/Header";
import AdminLogin from "./components/AdminLogin";
import AdminDash from "./components/AdminDash";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

import CareersPage from "./components/CareersPage";
import Contact from "./components/Contact";
import WebD from "./components/Services/WebD";
import Android from "./components/Services/Android";
import DataD from "./components/Services/DataD";
import EComSol from "./components/Services/EComSol";
import ContentSol from "./components/Services/ContentSol";
import MobD from "./components/Services/MobD";
import Maintain from "./components/Services/Maintain";
import Ios from "./components/Services/Ios";
import SharedHosting from "./components/Services/SharedHosting";
import VpsServer from "./components/Services/VpsServer";
import CloudServer from "./components/Services/CloudServer";
import AwsAzure from "./components/Services/AwsAzure";
import IvrSol from "./components/Services/IvrSol";
import ScrollToTop from "./components/ScrollToTop";

import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";

import Register from "./components/Register";
import Certificate from "./components/Certificate";
function App() {
  // Simple admin auth state using localStorage
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');

  // Listen for admin login/logout changes
  useEffect(() => {
    const handleStorage = () => setIsAdmin(localStorage.getItem('isAdmin') === 'true');
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Protect AdminDash route
  const ProtectedAdminDash = () => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!isAdmin) navigate('/');
    }, [isAdmin, navigate]);
    return isAdmin ? <AdminDash onLogout={() => setIsAdmin(false)} /> : null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/industries" element={<Industries/>} /> */}
        {/* <Route path="/blog" element={<Blogs/>} /> */}
        <Route path="/career" element={<CareersPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:name" element={<CourseDetail />} />
        {/*Services Route  */}
        <Route path="/services/web-app" element={<WebD/>}/>
        <Route path="/services/android" element={<Android/>}/>
        <Route path="/services/database" element={<DataD/>}/>
        <Route path="/services/ecommerce" element={<EComSol/>}/>
        <Route path="/services/cms" element={<ContentSol/>}/>
        <Route path="/services/mobile-app" element={<MobD/>}/>
        <Route path="/services/support" element={<Maintain/>}/>
        <Route path="/services/ios" element={<Ios/>}/>
        <Route path="/services/shared-hosting" element={<SharedHosting/>}/>
        <Route path="/services/vps-hosting" element={<VpsServer/>}/>
        <Route path="/services/cloud" element={<CloudServer/>}/>
        <Route path="/services/aws-azure" element={<AwsAzure/>}/>
        <Route path="/services/ivr" element={<IvrSol/>}/>


        <Route path="/register" element={<Register/>}/>
        <Route path="/certificate" element={<Certificate/>}/>

        
        {/* Admin routes */}
        <Route path="/admin-login" element={<AdminLogin onSuccess={() => { localStorage.setItem('isAdmin', 'true'); setIsAdmin(true); }} />} />
        <Route path="/admin-dash" element={<ProtectedAdminDash />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
