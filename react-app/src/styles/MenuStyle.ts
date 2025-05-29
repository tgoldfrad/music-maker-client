import type { SxProps, Theme } from "@mui/material/styles"
import type React from "react"

export const menuStyles = {
  appBar: {
    backgroundColor: "rgb(9, 17, 40)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "3px",
      background: "linear-gradient(90deg, #ffa500 0%, #ff5733 25%, #c70039 50%, #5aa454 75%, #ffa500 100%)",
      backgroundSize: "400% 100%",
      animation: "colorShift 4s ease-in-out infinite",
    },
  } as SxProps<Theme>,

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: { xs: "8px 16px", md: "10px 32px" },
    minHeight: { xs: "56px", md: "60px" },
    width: "width: calc(100% - 0px);",
    maxWidth: "none",
  } as SxProps<Theme>,

  logoSection: {
    display: "flex",
    alignItems: "center",
    flex: "0 0 auto",
    height: "80px",
    width: "180px",
    backgroundImage: "url(/לוגו.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  } as SxProps<Theme>,

  // logoImage: {
  //   height: { xs: "28px", md: "32px" },
  //   width: { xs: "28px", md: "32px" },
  //   maxHeight: { xs: "28px", md: "32px" },
  //   maxWidth: { xs: "28px", md: "32px" },
  //   borderRadius: "6px",
  //   objectFit: "contain",
  // }as React.CSSProperties,

  centerSection: {
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    gap: { md: 2, lg: 3, xl: 4 },
    flex: "1 1 auto",
    justifyContent: "center",
  } as SxProps<Theme>,

  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 0.8,
    textDecoration: "none",
    fontSize: { md: "0.85rem", lg: "0.9rem" },
    fontWeight: "600",
    padding: "8px 12px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
    backgroundColor: "transparent",
    "&:hover": {
      transform: "translateY(-2px)",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
  } as SxProps<Theme>,

  rightSection: {
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
    gap: 0.8,
    flex: "0 0 auto",
    alignItems: "flex-end",
    marginRight: { md: "24px", lg: "5px" }, // הוספת מרווח פנימה
    // paddingRight: { md: "8px", lg: "0px" }, // מרווח נוסף
  } as SxProps<Theme>,

  authButton: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "#ffffff",
    fontSize: { md: "0.75rem", lg: "0.8rem" },
    fontWeight: "700",
    padding: { md: "6px 16px", lg: "8px 20px" },
    borderRadius: "20px",
    background: "linear-gradient(135deg, #ffa500 0%, #ff5733 50%, #c70039 100%)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    minWidth: { md: "100px", lg: "110px" },
    justifyContent: "space-between",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 4px 15px rgba(255, 87, 51, 0.4)",
    },
  } as SxProps<Theme>,

  playIcon: {
    width: 0,
    height: 0,
    borderLeft: "8px solid #ffffff",
    borderTop: "5px solid transparent",
    borderBottom: "5px solid transparent",
    borderRadius: "2px", // פינות מעוגלות קלות
    marginLeft: "2px",
  } as SxProps<Theme>,

  // Mobile styles
  mobileToggle: {
    display: { xs: "block", lg: "none" },
    color: "#ffffff",
    padding: "6px",
    backgroundColor: "#ffa500",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: "#ff5733",
    },
  } as SxProps<Theme>,

  mobileMenu: {
    display: { xs: "block", lg: "none" },
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "rgb(9, 17, 40)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    zIndex: 1000,
  } as SxProps<Theme>,

  mobileMenuContent: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  } as SxProps<Theme>,

  mobileNavItem: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "600",
    padding: "12px 16px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    backgroundColor: "transparent",
    "&:hover": {
      transform: "translateY(-1px)",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
  } as SxProps<Theme>,

  mobileAuthButton: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    color: "#ffffff",
    fontSize: "0.9rem",
    fontWeight: "700",
    padding: "12px 20px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #ffa500 0%, #ff5733 50%, #c70039 100%)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "100%",
    justifyContent: "space-between",
    "&:hover": {
      transform: "translateY(-1px)",
    },
  } as SxProps<Theme>,

  mobilePlayIcon: {
    width: 0,
    height: 0,
    borderLeft: "10px solid #ffffff",
    borderTop: "6px solid transparent",
    borderBottom: "6px solid transparent",
    borderRadius: "2px",
    marginLeft: "2px",
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
}

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400 },
  bgcolor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  p: 4,
  border: "none",
  outline: "none",
} as SxProps<Theme>

// Navigation item colors
export const navColors = {
  upload: "#ffa500",
  files: "#ff5733",
  share: "#c70039",
  about: "#5aa454",
}
