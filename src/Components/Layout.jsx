import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./Scroll";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
        <ScrollRestoration />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
