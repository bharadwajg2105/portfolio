const Sidebar = ({ toggleSidebar }) => {
  return (
    <>
      {/* Backdrop */}
      <div className="sidebar-backdrop" onClick={toggleSidebar}></div>

      <aside className="sidebar">
        {/* Close Button */}
        <button
          className="btn-close btn-close-white sidebar-close"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        ></button>

        <div className="sidebar-top">
          <h5 className="sidebar-title">Menu</h5>
        </div>

        <ul className="sidebar-links">
          <li>
            <a href="#home" className="nav-link" onClick={toggleSidebar}>
              Home
            </a>
          </li>

          <li>
            <a href="#about-sec" className="nav-link" onClick={toggleSidebar}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="nav-link" onClick={toggleSidebar}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="nav-link" onClick={toggleSidebar}>
              Projects
            </a>
          </li>

          <li>
            <a href="#resume" className="nav-link" onClick={toggleSidebar}>
              Resume
            </a>
          </li>

          <li>
            <a href="#contact" className="nav-link" onClick={toggleSidebar}>
              Contact
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;