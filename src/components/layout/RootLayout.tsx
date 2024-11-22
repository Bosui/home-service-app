// src/components/layout/RootLayout.tsx
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <h1>Home Service App</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
