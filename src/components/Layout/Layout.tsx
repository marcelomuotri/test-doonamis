// src/components/Layout.tsx
import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./layout.scss";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <header className="layout__header">
          <Navbar />
        </header>
        <main className="layout__content">
          <Outlet />
        </main>
        <footer className="layout__footer">
          <p className="layout__footer__title">© 2024 TV Series App</p>
        </footer>
      </div>
    );
  }
}

export default Layout;
