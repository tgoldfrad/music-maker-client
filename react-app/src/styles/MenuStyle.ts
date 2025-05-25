import type { SxProps, Theme } from "@mui/material/styles"
import type React from "react"

export const menuStyles = {
  appBar: {
    backgroundColor: "#2f2f2f",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    borderBottom: "2px solid #5aa454",
  } as SxProps<Theme>,

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: { xs: "8px 16px", md: "12px 24px" },
    minHeight: "64px",
    width: "100%",
    maxWidth: "none",
  } as SxProps<Theme>,

  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: { xs: 1, md: 1.5 },
    flex: "0 0 auto",
  } as SxProps<Theme>,

  logoImage: {
      height: { xs: "35px", md: "40px" },
      width: "auto",
      borderRadius: "4px",
      objectFit: "contain",
  } as unknown as React.CSSProperties,

  logoText: {
    fontWeight: "600",
    fontSize: { xs: "1rem", md: "1.2rem" },
    color: "#ffffff",
    letterSpacing: "0.5px",
    display: { xs: "none", sm: "block" },
  } as SxProps<Theme>,

  rightSection: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: 0.5,
    flex: "1 1 auto",
    justifyContent: "flex-end",
    overflow: "visible",
  } as SxProps<Theme>,

  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "0.85rem",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "all 0.2s ease",
    minWidth: "auto",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#5aa454",
    },
  } as SxProps<Theme>,

  authItem: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    color: "#ffffff",
    fontSize: "0.85rem",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "all 0.2s ease",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    minWidth: "auto",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#5aa454",
    },
  } as SxProps<Theme>,

  separator: {
    color: "#ffa500",
    margin: "0 4px",
    fontSize: "0.8rem",
  } as SxProps<Theme>,

  // Mobile styles
  mobileToggle: {
    display: { xs: "block", md: "none" },
    color: "#ffffff",
    padding: "6px",
    "&:hover": {
      backgroundColor: "#5aa454",
    },
  } as SxProps<Theme>,

  mobileMenu: {
    display: { xs: "block", md: "none" },
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#2f2f2f",
    borderTop: "1px solid #5aa454",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: 1000,
  } as SxProps<Theme>,

  mobileMenuContent: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: 1,
  } as SxProps<Theme>,

  mobileNavItem: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "0.9rem",
    fontWeight: "500",
    padding: "12px 16px",
    borderRadius: "4px",
    transition: "all 0.2s ease",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#5aa454",
    },
  } as SxProps<Theme>,

  mobileAuthItem: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "#ffffff",
    fontSize: "0.9rem",
    fontWeight: "500",
    padding: "12px 16px",
    borderRadius: "4px",
    transition: "all 0.2s ease",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left",
    width: "100%",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#5aa454",
    },
  } as SxProps<Theme>,

  backgroundStyle: (hasUser: boolean) => ({
    minHeight: hasUser ? "auto" : "calc(100vh - 18px)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: hasUser
      ? "none"
      : "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(https://img.freepik.com/free-vector/music-notes-background_23-2151339663.jpg?uid=R194409080&ga=GA1.1.1604458740.1743596294&semt=ais_hybrid)",
  }),

  icon: {
    fontSize: "1rem",
    color: "#ffa500",
  } as SxProps<Theme>,
}

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400 },
  bgcolor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  p: 4,
  border: "none",
  outline: "none",
} as SxProps<Theme>
