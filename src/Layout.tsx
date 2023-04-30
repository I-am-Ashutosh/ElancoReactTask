import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      <div style={{ padding: "58px",  }}>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
