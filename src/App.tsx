import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Wrapper from "./components/Wrapper.tsx";
import CreateBlog from "./pages/CreateBlog.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NewsFeed from "./pages/NewsFeed.tsx";

function App() {

  return (
      <>
        <Wrapper>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/create'} element={<CreateBlog />} />
                    <Route path={'/about'} element={<About />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/newsfeed'} element={<NewsFeed />} />
                </Routes>
            </BrowserRouter>
        </Wrapper>
      </>
  )
}

export default App
