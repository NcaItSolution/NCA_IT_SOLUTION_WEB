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
import MEAN from "./components/Courses/MEAN";
import MERN from "./components/Courses/MERN";
import PFS from "./components/Courses/PFS";
import PhpFS from "./components/Courses/PhpFS";
import DsMl from "./components/Courses/DsMl";
import CsEh from "./components/Courses/CsEh";
import Mongo from "./components/Courses/Mongo";
import ReactD from "./components/Courses/ReactD";
import AI from "./components/Courses/AI";
import CSharp from "./components/Courses/CSharp";
import CompHard from "./components/Courses/CompHard";
import JavaScript from "./components/Courses/JavaScript";
import Python from "./components/Courses/Python";
import Angular from "./components/Courses/Angular";
import C from "./components/Courses/C";
import CPP from "./components/Courses/CPP";
import DataSci from "./components/Courses/DataSci";
import EthiHack from "./components/Courses/EthiHack";
import Sql from "./components/Courses/Sql";
import Java from "./components/Courses/Java";

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
      <Route path="/courses/3" element={<MEAN/>}/>
      <Route path="/courses/4" element={<MERN/>}/>
      <Route path="/courses/5" element={<PFS/>}/>
      <Route path="/courses/6" element={<PhpFS/>}/>
      <Route path="/courses/7" element={<DsMl/>}/>
      <Route path="/courses/8" element={<CsEh/>}/>
      <Route path="/courses/9" element={<WebD/>}/>
      <Route path="/courses/10" element={<Mongo/>}/>
      <Route path="/courses/11" element={<ReactD/>}/>
      <Route path="/courses/12" element={<AI/>}/>
      <Route path="/courses/13" element={<CSharp/>}/>
      <Route path="/courses/14" element={<CompHard/>}/>
      <Route path="/courses/15" element={<JavaScript/>}/>
      <Route path="/courses/16" element={<Node/>}/>
      <Route path="/courses/17" element={<Python/>}/>
      <Route path="/courses/18" element={<Angular/>}/>
      <Route path="/courses/19" element={<C/>}/>
      <Route path="/courses/20" element={<CPP/>}/>
      <Route path="/courses/21" element={<DataSci/>}/>
      <Route path="/courses/22" element={<EthiHack/>}/>
      <Route path="/courses/23" element={<Sql/>}/>
      <Route path="/courses/24" element={<Java/>}/>


      
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    
  );
}

export default App;
