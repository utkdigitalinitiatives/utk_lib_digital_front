import React, { useState } from "react";
import powerT from "../src/media/ut-square.svg"

// Navigation links
const findDropdownLinks = [
  { url: "https://utk.primo.exlibrisgroup.com/discovery/search?vid=01UTN_KNOXVILLE:01UTK", text: "One Search", external_icon: false },
  { url: "https://lib.utk.edu/services", text: "Services", external_icon: false },
  { url: "https://libguides.utk.edu/databases", text: "Databases", external_icon: true },
  { url: "https://libguides.utk.edu/", text: "Research Guides", external_icon: true },
  { url: "https://digital.lib.utk.edu/", text: "Digital Collections", external_icon: true },
  { url: "https://lib.utk.edu/spaces", text: "Spaces", external_icon: false },
  { url: "https://lib.utk.edu/about", text: "About the Libraries", external_icon: false }
];


export const AccountIcon = ({ color = "#ff8200" }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.125 13.995a2.737 2.737 0 0 0-.617 1.5h-5.26a.749.749 0 0 0-.748.75v.577c0 .536.191 1.054.539 1.461 1.177 1.379 2.984 2.12 5.469 2.205.049.57.273 1.09.617 1.508h-.129c-3.145 0-5.531-.905-7.098-2.739A3.75 3.75 0 0 1 2 16.822v-.578c0-1.19.925-2.164 2.095-2.243l.154-.006h5.876Zm4.621-2.5h3c.648 0 1.18.492 1.244 1.123l.007.127-.001 1.25h1.25c.967 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-8a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75h1.25v-1.25c0-.647.492-1.18 1.123-1.243l.127-.007h3-3Zm5.5 4h-8a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h8a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Zm-2.75-2.5h-2.5v1h2.5v-1ZM9.997 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" fill={color} />
    </svg>
  );
};

export const HoursIcon = ({ color = "#ff8200" }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333 0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.333-3.738 8.333-8.333 0-4.595-3.738-8.333-8.333-8.333ZM11.25 6a.75.75 0 0 1 .743.648L12 6.75V12h3.25a.75.75 0 0 1 .102 1.493l-.102.007h-4a.75.75 0 0 1-.743-.648l-.007-.102v-6a.75.75 0 0 1 .75-.75Z" fill={color} />
    </svg>
  )
}



export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [findOpen, setFindOpen] = useState(false);

  // Inline styles
  const headerStyle = {
    background: "#fff",
    borderBottom: "1px solid #eee",
    padding: "0.25rem 0",
    position: "fixed",
    top: 0,
    zIndex: 100,
    width: "100%",
  };
  const containerStyle = {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  };
  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
  };
  const logoImgStyle = {
    height: 40,
    width: "auto",
    display: "block",
  };
  const logoTextStyle = {
    fontWeight: "bold",
    color: "#333",
    fontSize: 22,
    letterSpacing: "2px",
    marginLeft: 8,
    textDecoration: "none",
  };
  const actionsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  };
  const actionLinkStyle = {
    display: "flex",
    alignItems: "center",
    color: "#333",
    textDecoration: "none",
    fontSize: 16,
    fontWeight: 500,
    gap: 6,
    padding: "0.25rem 0.5rem",
    borderRadius: 4,
    transition: "background 0.2s",
  };
  const menuButtonStyle = {
    background: "none",
    border: "none",
    fontSize: 20,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    color: "#333",
    padding: "0.25rem 0.5rem",
    borderRadius: 4,
    marginLeft: 8,
  };
  const mobileMenuStyle = {
    position: "fixed",
    top: 0,
    right: showMobileMenu ? 0 : "-320px",
    width: 300,
    height: "100vh",
    background: "#fff",
    boxShadow: "0 0 16px rgba(0,0,0,0.15)",
    zIndex: 200,
    transition: "right 0.3s",
    padding: "2rem 1.5rem 1.5rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };
  const overlayStyle = {
    display: showMobileMenu ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.2)",
    zIndex: 150,
  };

  const dropdownContainerStyle = {
    position: "relative",
    display: "inline-block",
  };
  const dropdownMenuStyle = {
    display: findOpen ? "block" : "none",
    position: "absolute",
    top: "100%",
    right: 0,
    minWidth: 200,
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    borderRadius: 4,
    zIndex: 1000,
    padding: "0.5rem 0",
  };
  const dropdownItemStyle = {
    padding: "0.5rem 1rem",
    color: "#333",
    textDecoration: "none",
    display: "block",
    fontSize: 16,
    background: "none",
    border: "none",
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
  };

  return (
    <React.Fragment>
      <style>{`
      @media (max-width: 900px) {
        .utk-header-actions {
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }
        .utk-header-logo-text {
          font-size: 18px !important;
        }
      }
      @media (max-width: 899px) {
        .utk-header-container {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
        }
        .utk-header-actions {
          display: none !important;
        }
        .mobile-only-menu-btn {
          display: inline-flex !important;
          position: absolute;
          top: 0.75rem;
          right: 1rem;
        }
      }
      @media (min-width: 899px) {
        .mobile-only-menu-btn {
          display: none !important;
        }
      }
    `}</style>
      <div style={overlayStyle} onClick={() => setShowMobileMenu(false)} />
      <div style={headerStyle}>
        <div style={containerStyle} className="utk-header-container">
          {/* Logo and site title */}
          <a href="/" style={logoStyle}>
            <img
              src={powerT}
              alt="UT Libraries"
              style={logoImgStyle}
            />
            <span className="utk-header-logo-text" style={logoTextStyle}>LIBRARIES</span>
          </a>

          {/* Mobile-only menu button */}
          <button
            className="mobile-only-menu-btn"
            style={{
              ...menuButtonStyle,
              display: 'none',
            }}
            aria-label="Open Main Menu"
            onClick={() => setShowMobileMenu(true)}
          >
            <span className="icon-menu" style={{ marginRight: 4 }}></span>
            <span>Menu</span>
          </button>

          {/* Desktop Actions */}
          <div style={actionsStyle} className="utk-header-actions">
            {/* My Account */}
            <a style={actionLinkStyle} href="https://utk.primo.exlibrisgroup.com/discovery/account?vid=01UTN_KNOXVILLE:01UTK&section=overview&lang=en">
              <AccountIcon />
              <span>My Account</span>
            </a>
            {/* Hours */}
            <a style={actionLinkStyle} href="https://libcal.utk.edu/">
              <HoursIcon />
              <span>Hours</span>
            </a>
            {/* Find dropdown */}
            <div
              style={dropdownContainerStyle}
              onMouseEnter={() => setFindOpen(true)}
              onMouseLeave={() => setFindOpen(false)}
              onFocus={() => setFindOpen(true)}
              onBlur={() => setFindOpen(false)}
              tabIndex={0}
            >
              <a
                style={{ ...actionLinkStyle, cursor: "pointer" }}
                href="#find"
                aria-haspopup="true"
                aria-expanded={findOpen}
                onClick={e => e.preventDefault()}
              >
                <span>Find</span>
                <span style={{ marginLeft: 4, fontSize: 12 }}>▼</span>
              </a>
              <div style={dropdownMenuStyle} role="menu">
                {findDropdownLinks.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    style={dropdownItemStyle}
                    target={link.external_icon ? "_blank" : undefined}
                    rel={link.external_icon ? "noopener noreferrer" : undefined}
                  >
                    {link.text}
                    {link.external_icon && (
                      <span style={{ marginLeft: 6, color: "#ff8200" }}>↗</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Offcanvas Menu - Moved outside the header-actions div */}
        <div style={mobileMenuStyle}>
          <button
            style={{ ...menuButtonStyle, alignSelf: "flex-end" }}
            aria-label="Close Main Menu"
            onClick={() => setShowMobileMenu(false)}
          >
            <span className="icon-cancel" style={{ marginRight: 4 }}></span>
            <span>Close</span>
          </button>

          {/* Menu section for mobile */}
          <div style={{ marginBottom: 12, marginTop: 20, fontWeight: 600, color: "#333" }}>Menu</div>
          {findDropdownLinks.map(link => (
            <a
              key={link.url}
              href={link.url}
              style={actionLinkStyle}
              target={link.external_icon ? "_blank" : undefined}
              rel={link.external_icon ? "noopener noreferrer" : undefined}
            >
              {link.text}
              {link.external_icon && (
                <span style={{ marginLeft: 4, color: "#ff8200" }}>↗</span>
              )}
            </a>
          ))}
        </div>

      </div>
    </React.Fragment>
  );
}
