import './App.css';
import {
  AllBlogPost,
  BlogPost,
  ContactPage,
  ErrorPage,
  HomePage,
  ScrollToTop,
} from './components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasicLayout } from './layout/BasicLayout';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BasicLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Blog" element={<AllBlogPost />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BasicLayout>
    </BrowserRouter>
  );
}

export default App;
