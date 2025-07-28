import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Industries from "./components/Industries";
import Blogs from "./components/Blogs";
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
import SampleBlog from "./components/SampleBlog";
import Courses from "./components/Courses";
import DotNet from "./components/Courses/DotNet";
import JFS from "./components/Courses/JFS";

function App() {
  return (
      <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
      <Route path="/" element= {<Home/>} ></Route>
      <Route path="/about" element= {<About/>} ></Route>
      <Route path="/industries" element= {<Industries/>} ></Route>
      <Route path="/blog" element= {<Blogs/>} ></Route>
      <Route path="/career" element={<CareersPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/courses" element={<Courses/>}/>
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
      {/* Sample Blogs Routes */}
      <Route path="/blogs" element={<SampleBlog/>}/>



      {/* Courses Pages */}
      <Route path="/courses/1" element={<DotNet/>}/>
      <Route path="/courses/2" element={<JFS/>}/>


      
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    
  );
}

export default App;
