import "./App.css";
import { HomePage } from "./Pages/_home";
import { Footer } from "./Components/footer/Footer";
import { Navbar } from "./Components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import { PostDetailPage } from "./Pages/_postDetail";
import MyEditior from "./Components/text-editior/MyEditior";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="post/:id" element={<PostDetailPage />} />
        <Route path="editor" element={<MyEditior />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
