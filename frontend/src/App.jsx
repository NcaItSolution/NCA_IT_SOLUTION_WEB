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
import AIBlog from "./components/Blogs/AIBlog";
import CloudNativeBlog from "./components/Blogs/Cloud-NativeBlog";
import CSPBlog from "./components/Blogs/CSPBlog";
import CSSBlog from "./components/Blogs/CSSBlog";
import EdgeComputerBlog from "./components/Blogs/EdgeComputingBlog";
import JavaScriptBlog from "./components/Blogs/JavaScriptBlog";
import NextBlog from "./components/Blogs/NextBlod";
import NodejsBlog from "./components/Blogs/NodejsBolg";
import QuantumBlog from "./components/Blogs/QuantumBlog";
import ReactBlog from "./components/Blogs/ReactBlog";
import TypeScriptBlog from "./components/Blogs/TypeScriptBlog";

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
      <Route path="/cloudblog" element={<CloudNativeBlog/>}/>
      <Route path="/aiblog" element={<AIBlog/>}/>
      <Route path="/cspblog" element={<CSPBlog/>}/>
      <Route path="/cssblog" element={<CSSBlog/>}/>
      <Route path="/edgblog" element={<EdgeComputerBlog/>}/>
      <Route path="/javascriptblog" element={<JavaScriptBlog/>}/>
      <Route path="/nextblog" element={<NextBlog/>}/>
      <Route path="/nodeblog" element={<NodejsBlog/>}/>
      <Route path="/quantumblog" element={<QuantumBlog/>}/>
      <Route path="/reactblog" element={<ReactBlog/>}/>
      <Route path="/typescriptblog" element={<TypeScriptBlog/>}/>
      <Route path="/blogs" element={<SampleBlog/>}/>
      


      
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    
  );
}

export default App;
