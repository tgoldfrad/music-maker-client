import type { SxProps, Theme } from "@mui/material/styles"

export const uploadFileStyles = {
  // Main Container - צר יותר
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    // paddingTop: "10px !important",
    padding: "0.5rem", // הקטנת ה-padding
    background:
      "linear-gradient(135deg, rgba(255, 165, 0, 0.05) 0%, rgba(255, 87, 51, 0.05) 50%, rgba(199, 0, 57, 0.05) 100%)",
  } as SxProps<Theme>,

  // Upload Card Container - צר יותר ונמוך יותר
  uploadCard: {
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    maxWidth: "600px", // הקטנה מ-800px
    width: "100%",
    height: "300px", // גובה קבוע כמו שביקשת
    position: "relative",
    display: "flex",
    flexDirection: "column",
  } as SxProps<Theme>,

  // Header - קטן יותר
  cardHeader: {
    padding: "1rem 1.5rem", // הקטנת ה-padding
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    position: "relative",
    borderBottom: "1px solid #f0f0f0",
    flex: "0 0 auto",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "3px", // הקטנה מ-4px
      background: "linear-gradient(to right, #5aa454, #ffa500, #ff5733, #c70039)",
    },
  } as SxProps<Theme>,

  headerTitle: {
    fontSize: "1.3rem", // הקטנה מ-1.6rem
    fontWeight: 700,
    color: "#333",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "0.8rem", // הקטנה מ-1rem
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
  } as SxProps<Theme>,

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px", // הקטנה מ-40px
    height: "32px",
    backgroundColor: "#ffa500",
    color: "white",
    borderRadius: "8px", // הקטנה מ-10px
    "& svg": {
      fontSize: "1.1rem", // הקטנה מ-1.3rem
    },
  } as SxProps<Theme>,

  colorDots: {
    display: "flex",
    marginTop: "0.3rem", // הקטנה מ-0.5rem
    gap: "4px", // הקטנה מ-6px
  } as SxProps<Theme>,

  colorDot: (index: number) => {
    const colors = ["#5aa454", "#ffa500", "#ff5733", "#c70039"]
    return {
      width: "5px", // הקטנה מ-6px
      height: "5px",
      borderRadius: "50%",
      backgroundColor: colors[index],
    } as SxProps<Theme>
  },

  // Content Area - קטן יותר
  cardContent: {
    padding: "1rem", // הקטנה משמעותית מ-2rem 3rem
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  } as SxProps<Theme>,

  // Drag and Drop Area - קטן יותר
  dropZone: {
    border: "2px dashed #ccc", // הקטנה מ-3px
    borderRadius: "12px", // הקטנה מ-16px
    padding: "1rem", // הקטנה משמעותית מ-2rem
    textAlign: "center",
    backgroundColor: "#fafafa",
    transition: "all 0.3s ease",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    width: "calc(100% - 2rem);",
    minHeight: "120px", // הקטנה מ-150px
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      borderColor: "#ffa500",
      backgroundColor: "rgba(255, 165, 0, 0.05)",
      transform: "translateY(-1px)", // הקטנה מ-2px
      boxShadow: "0 4px 15px rgba(255, 165, 0, 0.15)", // הקטנה
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(255, 165, 0, 0.1), transparent)",
      transition: "left 0.5s ease",
    },
    "&:hover::before": {
      left: "100%",
    },
  } as SxProps<Theme>,

  dropZoneIcon: {
    fontSize: "2.5rem", // הקטנה מ-4rem
    color: "#ffa500",
    marginBottom: "0.5rem", // הקטנה מ-1rem
    opacity: 0.8,
  } as SxProps<Theme>,

  dropZoneText: {
    fontSize: "1rem", // הקטנה מ-1.2rem
    fontWeight: 600,
    color: "#555",
    marginBottom: "0.8rem", // הקטנה מ-1rem
    lineHeight: 1.3,
  } as SxProps<Theme>,

  // File Input
  hiddenInput: {
    display: "none",
  } as SxProps<Theme>,

  selectFileButton: {
    background: "linear-gradient(135deg, #ffa500 0%, #ff8c00 50%, #ff7700 100%)",
    color: "white",
    border: "none",
    borderRadius: "25px", // הקטנה מ-50px
    padding: "0.6rem 1.5rem", // הקטנה מ-1rem 3rem
    fontSize: "0.9rem", // הקטנה מ-1.1rem
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    boxShadow: "0 4px 12px rgba(255, 165, 0, 0.3)", // הקטנה
    transition: "all 0.3s ease",
    textTransform: "none",
    "&:hover": {
      background: "linear-gradient(135deg, #ff8c00, #ff7700, #ff6600)",
      boxShadow: "0 6px 18px rgba(255, 165, 0, 0.4)", // הקטנה
      transform: "translateY(-1px)", // הקטנה מ-2px
    },
  } as SxProps<Theme>,

  // Selected File Display - בתוך ה-drop zone
  selectedFileInDrop: {
    marginTop: "0.8rem",
    padding: "0.6rem",
    backgroundColor: "rgba(90, 164, 84, 0.1)",
    borderRadius: "6px",
    border: "1px solid rgba(90, 164, 84, 0.3)",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    width: "100%",
    maxWidth: "280px", // הקטנה מ-300px
  } as SxProps<Theme>,

  fileIconInDrop: {
    color: "#5aa454",
    fontSize: "1rem", // הקטנה מ-1.2rem
  } as SxProps<Theme>,

  fileNameInDrop: {
    fontSize: "0.8rem", // הקטנה מ-0.9rem
    fontWeight: 600,
    color: "#333",
    flex: 1,
    wordBreak: "break-all",
    textAlign: "left",
  } as SxProps<Theme>,

  // Action Buttons - מתחת לכרטיס
  actionButtonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
    width: "100%",
  } as SxProps<Theme>,

  uploadButton: {
    background: "linear-gradient(135deg, #5aa454 0%, #4a9b47 50%, #3d8a3a 100%)",
    color: "white",
    border: "none",
    borderRadius: "25px", // הקטנה מ-50px
    padding: "0.8rem 2rem", // הקטנה מ-1rem 3rem
    fontSize: "1rem", // הקטנה מ-1.1rem
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    boxShadow: "0 4px 15px rgba(90, 164, 84, 0.3)", // הקטנה
    transition: "all 0.3s ease",
    textTransform: "none",
    minWidth: "150px", // הקטנה מ-180px
    "&:hover:not(.Mui-disabled)": {
      background: "linear-gradient(135deg, #4a9b47, #3d8a3a, #2d7a2d)",
      boxShadow: "0 6px 20px rgba(90, 164, 84, 0.4)", // הקטנה
      transform: "translateY(-1px)", // הקטנה מ-2px
    },
    "&.Mui-disabled": {
      background: "linear-gradient(135deg, #b8d4b8, #a8c9a8)",
      cursor: "not-allowed",
      boxShadow: "none",
    },
  } as SxProps<Theme>,

  // Message Display
  messageContainer: {
    marginTop: "1rem",
    padding: "0.8rem",
    borderRadius: "8px",
    textAlign: "center",
    width: "100%",
  } as SxProps<Theme>,

  messageText: {
    fontSize: "0.9rem", // הקטנה מ-1rem
    fontWeight: 600,
    margin: 0,
    color: "#666",
  } as SxProps<Theme>,
}
