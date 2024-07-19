import './App.css';
import { ContactPage, ErrorPage, HomePage } from './components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasicLayout } from './layout/BasicLayout';
import { AllBlogPost } from './components/AllBlogPost';

function App() {
  return (
    <BrowserRouter>
      <BasicLayout>
        <Routes>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/Blog" element={<AllBlogPost />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BasicLayout>
    </BrowserRouter>
  );
}

export default App;
