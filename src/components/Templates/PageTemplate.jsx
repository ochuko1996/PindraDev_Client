import NavBar from "../Organisms/NavBar";
import Footer from "../Organisms/Footer";

function PageTemplate({ header, footer, children }) {
  return (
    <>
      {!header ? <NavBar /> : header}
      {children}
      {!footer ? <Footer /> : footer}
    </>
  );
}

export default PageTemplate;
