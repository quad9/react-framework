// components/layouts/main
import Header from '../Header';

const MainLayout = ({ children }) => (
  <div className="main-container">
    <Header />

    <div className="content-wrapper">{children}</div>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default MainLayout;