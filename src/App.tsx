import React from 'react'
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from './Layout'
import Applications from './pages/Applications';
import ApplicationDetail from './pages/ApplicationDetail';

const App = () => {
  return (
    <>
        <Layout>
        <main className="content">
        {/* <Topbar setIsSidebar={setIsSidebar} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applications">
            <Route index element={<Applications />}  />
            <Route path=":appName" element={<ApplicationDetail />}  />
        </Route>
        </Routes>
      </main>
        </Layout>
    </>
  )
}

export default App