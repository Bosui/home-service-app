// src/pages/HomePage.tsx

import Topbar from "../components/topbar/Topbar";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Home Page</h1>
        <p>Here is some content for the Home Page.</p>
      </div>
    </>
  );
};

export default HomePage;
