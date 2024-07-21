import './App.css';
import {
  AllBlogPost,
  BlogPost,
  ContactPage,
  ErrorPage,
  HomePage,
} from './components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasicLayout } from './layout/BasicLayout';

function App() {
  return (
    <BrowserRouter>
      <BasicLayout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/Blog" element={<AllBlogPost />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route path="/BlogPost" element={<BlogPost />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BasicLayout>
    </BrowserRouter>
  );
}

export default App;
