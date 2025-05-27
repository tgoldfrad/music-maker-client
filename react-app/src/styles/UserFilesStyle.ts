import type { SxProps, Theme } from "@mui/material/styles"

export const userFilesStyles = {
  // Main Container
  mainContainer: {
    minHeight: "100vh",
    padding: "2rem 1rem",
    background:
      "linear-gradient(135deg, rgba(90, 164, 84, 0.03) 0%, rgba(255, 165, 0, 0.03) 25%, rgba(255, 87, 51, 0.03) 75%, rgba(199, 0, 57, 0.03) 100%)",
  } as SxProps<Theme>,

  // Header Section
  headerContainer: {
    maxWidth: "1200px",
    margin: "0 auto 2rem auto",
    padding: "0 1rem",
  } as SxProps<Theme>,

  headerCard: {
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    position: "relative",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  } as SxProps<Theme>,

  headerContent: {
    padding: "1.5rem 2rem",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "1rem",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "4px",
      background: "linear-gradient(to right, #5aa454, #ffa500, #ff5733, #c70039)",
    },
  } as SxProps<Theme>,

  // Left side - Title
  titleSection: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    flex: "0 0 auto",
  } as SxProps<Theme>,

  headerTitle: {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#333",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
  } as SxProps<Theme>,

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    backgroundColor: "#ffa500",
    color: "white",
    borderRadius: "12px",
    "& svg": {
      fontSize: "1.5rem",
    },
  } as SxProps<Theme>,

  colorDots: {
    display: "flex",
    gap: "6px",
    marginLeft: "4rem", // מיושר עם הטקסט
  } as SxProps<Theme>,

  colorDot: (index: number) => {
    const colors = ["#5aa454", "#ffa500", "#ff5733", "#c70039"]
    return {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: colors[index],
    } as SxProps<Theme>
  },

  // Center - Stats and Sort
  centerSection: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flex: "1 1 auto",
    justifyContent: "center",
    flexWrap: "wrap",
  } as SxProps<Theme>,

  statsChip: {
    backgroundColor: "rgba(255, 165, 0, 0.1)",
    color: "#ff8c00",
    fontWeight: 600,
    border: "1px solid rgba(255, 165, 0, 0.3)",
    borderRadius: "20px",
    padding: "0.5rem 1rem",
    fontSize: "0.9rem",
  } as SxProps<Theme>,

  sortButton: {
    borderRadius: "50px",
    padding: "0.8rem 1.5rem",
    backgroundColor: "transparent",
    border: "2px solid #ddd",
    color: "#666",
    fontWeight: 600,
    transition: "all 0.3s ease",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(255, 165, 0, 0.1)",
      borderColor: "#ffa500",
      color: "#ff8c00",
      transform: "translateY(-2px)",
    },
  } as SxProps<Theme>,

  // Right side - Search
  searchSection: {
    flex: "0 0 auto",
    minWidth: "300px",
  } as SxProps<Theme>,

  searchField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
      backgroundColor: "#f8f9fa",
      border: "2px solid transparent",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#f1f3f4",
        borderColor: "rgba(255, 165, 0, 0.3)",
      },
      "&.Mui-focused": {
        backgroundColor: "#ffffff",
        borderColor: "#ffa500",
        boxShadow: "0 0 0 4px rgba(255, 165, 0, 0.1)",
      },
      "& fieldset": {
        border: "none",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#666",
      "&.Mui-focused": {
        color: "#ffa500",
      },
    },
  } as SxProps<Theme>,

  // Files Grid Section
  filesContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  } as SxProps<Theme>,

  filesGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(auto-fill, minmax(140px, 1fr))",
      sm: "repeat(auto-fill, minmax(140px, 1fr))",
      md: "repeat(auto-fill, minmax(140px, 1fr))",
    },
    gap: "1.5rem",
    justifyItems: "center",
    padding: "1rem",
  } as SxProps<Theme>,

  // Empty State
  emptyStateContainer: {
    textAlign: "center",
    padding: "4rem 2rem",
    color: "#666",
  } as SxProps<Theme>,

  emptyStateIcon: {
    fontSize: "4rem",
    color: "#ddd",
    marginBottom: "1rem",
  } as SxProps<Theme>,

  emptyStateText: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
    color: "#999",
  } as SxProps<Theme>,

  emptyStateSubtext: {
    fontSize: "1rem",
    color: "#bbb",
  } as SxProps<Theme>,

  // Loading State
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem",
  } as SxProps<Theme>,

  loadingSpinner: {
    color: "#ffa500",
  } as SxProps<Theme>,

  // Animations
  fadeIn: {
    animation: "fadeIn 0.5s ease-in-out",
    "@keyframes fadeIn": {
      from: {
        opacity: 0,
        transform: "translateY(20px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  } as SxProps<Theme>,

  slideIn: {
    animation: "slideIn 0.3s ease-out",
    "@keyframes slideIn": {
      from: {
        opacity: 0,
        transform: "translateX(-20px)",
      },
      to: {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  } as SxProps<Theme>,

  // Responsive adjustments
  responsiveHeader: {
    flexDirection: { xs: "column", lg: "row" },
    alignItems: { xs: "stretch", lg: "center" },
    textAlign: { xs: "center", lg: "left" },
  } as SxProps<Theme>,

  responsiveCenterSection: {
    order: { xs: 3, lg: 2 },
    justifyContent: { xs: "center", lg: "center" },
  } as SxProps<Theme>,

  responsiveSearchSection: {
    order: { xs: 2, lg: 3 },
    minWidth: { xs: "100%", lg: "300px" },
  } as SxProps<Theme>,
}
