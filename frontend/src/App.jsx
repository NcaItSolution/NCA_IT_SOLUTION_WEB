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
import WebDes from "./components/Courses/WebDes";
import NodeD from "./components/Courses/NodeD";

function App() {
  return (
      <BrowserRouter>
      <ScrollToTop/>
      <Header />
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
      



      {/* Courses Pages */}
      <Route path="/courses/dot-net-full-stack-development" element={<DotNet/>}/>
      <Route path="/courses/java-full-stack-development" element={<JFS/>}/>
      <Route path="/courses/mean-stack" element={<MEAN/>}/>
      <Route path="/courses/mern-stack" element={<MERN/>}/>
      <Route path="/courses/python-full-stack-development" element={<PFS/>}/>
      <Route path="/courses/php-full-stack-development" element={<PhpFS/>}/>
      <Route path="/courses/data-science-and-machine-learning" element={<DsMl/>}/>
      <Route path="/courses/cyber-security-and-ethical-hacking" element={<CsEh/>}/>
      <Route path="/courses/web-design" element={<WebDes/>}/>
      <Route path="/courses/mongo-db" element={<Mongo/>}/>
      <Route path="/courses/react-development" element={<ReactD/>}/>
      <Route path="/courses/artificial-intelligence" element={<AI/>}/>
      <Route path="/courses/c-sharp-full-stack-development" element={<CSharp/>}/>
      <Route path="/courses/computer-hardware" element={<CompHard/>}/>
      <Route path="/courses/javascript" element={<JavaScript/>}/>
      <Route path="/courses/nodejs" element={<NodeD/>}/>
      <Route path="/courses/python" element={<Python/>}/>
      <Route path="/courses/angular" element={<Angular/>}/>
      <Route path="/courses/c" element={<C/>}/>
      <Route path="/courses/c-plus-plus" element={<CPP/>}/>
      <Route path="/courses/data-science" element={<DataSci/>}/>
      <Route path="/courses/ethical-hacking" element={<EthiHack/>}/>
      <Route path="/courses/sql" element={<Sql/>}/>
      <Route path="/courses/java" element={<Java/>}/>


      
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    
  );
}

export default App;
