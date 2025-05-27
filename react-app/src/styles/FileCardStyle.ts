// import type { SxProps, Theme } from "@mui/material/styles"

// export const fileCardStyles = {
//   // Main Card Container - גודל קבוע ואחיד
//   cardContainer: (hover: boolean) =>
//     ({
//       width: "140px", // רוחב קבוע
//       height: "160px", // גובה קבוע
//       borderRadius: "16px",
//       position: "relative",
//       display: "flex",
//       flexDirection: "column",
//       margin: "0.5rem",
//       backgroundColor: hover ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
//       transition: "all 0.3s ease",
//       boxShadow: hover ? "0 15px 35px rgba(0, 0, 0, 0.2)" : "0 6px 20px rgba(0, 0, 0, 0.1)",
//       transform: hover ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
//       cursor: "pointer",
//       border: "1px solid rgba(255, 165, 0, 0.1)",
//       overflow: "hidden",
//       "&::before": {
//         content: '""',
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: "4px",
//         background: "linear-gradient(to right, #5aa454, #ffa500, #ff5733, #c70039)",
//         opacity: hover ? 1 : 0,
//         transition: "opacity 0.3s ease",
//       },
//     }) as SxProps<Theme>,

//   // File Icon Container - יותר גדול
//   iconContainer: (hover: boolean) =>
//     ({
//       width: "100%",
//       height: "110px", // הגדלה מ-80px
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       backgroundColor: hover ? "rgba(255, 165, 0, 0.03)" : "rgba(255, 165, 0, 0.05)",
//       background:"linear-gradient(90deg, #ffa500 0%, #ff5733 50%, #c70039 100%)",
//       position: "relative",
//       overflow: "hidden",
//       transition: "all 0.3s ease",

//       "&::after": hover
//         ? {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.1)", // שקיפות בהובר
//             transition: "all 0.3s ease",
//           }
//         : {},
//     }) as SxProps<Theme>,

//   // File Name Container - יותר נמוך
//   fileNameContainer: {
//     // padding: "0.8rem 0.6rem", // יותר padding
//     // width: "100%",
//     height: "50px", // גובה קבוע
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.98)",
//     borderTop: "1px solid rgba(0, 0, 0, 0.05)",
//   } as SxProps<Theme>,

//   fileName: (isExpanded: boolean, isHebrew: boolean) =>
//     ({
//       fontSize: "0.8rem",
//       fontWeight: 600,
//       color: "#333",
//       textAlign: "center",
//       lineHeight: 1.2,
//       fontFamily: '"Nunito", "Segoe UI", sans-serif',
//       overflow: isExpanded ? "visible" : "hidden",
//       textOverflow: isExpanded ? "clip" : "ellipsis",
//       whiteSpace: isExpanded ? "normal" : "nowrap",
//       cursor: "pointer",
//       maxWidth: "100%",
//       direction: isHebrew ? "rtl" : "ltr",
//       transition: "all 0.3s ease",
//       display: "-webkit-box",
//       WebkitLineClamp: isExpanded ? "none" : 2,
//       WebkitBoxOrient: "vertical",
//       "&:hover": {
//         color: "#ffa500",
//       },
//     }) as SxProps<Theme>,

//   // Action Buttons Container - מיקום משופר
//   actionsContainer: (hover: boolean) =>
//     ({
//       position: "absolute",
//       top: "0.8rem",
//       right: "0.8rem",
//       display: "flex",
//       flexDirection: "column",
//       gap: "0.4rem",
//       opacity: hover ? 1 : 0,
//       transform: hover ? "translateY(0) scale(1)" : "translateY(-15px) scale(0.8)",
//       transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//       zIndex: 20,
//     }) as SxProps<Theme>,

//   // Progress Container
//   progressContainer: {
//     position: "absolute",
//     bottom: "0.8rem",
//     left: "0.8rem",
//     right: "0.8rem",
//     backgroundColor: "rgba(0, 0, 0, 0.85)",
//     color: "white",
//     padding: "0.4rem 0.6rem",
//     borderRadius: "12px",
//     fontSize: "0.7rem",
//     fontWeight: 600,
//     textAlign: "center",
//     zIndex: 25,
//     backdropFilter: "blur(10px)",
//     border: "1px solid rgba(255, 255, 255, 0.1)",
//   } as SxProps<Theme>,

//   // Shimmer Effect משופר
//   shimmerEffect: {
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       top: 0,
//       left: "-100%",
//       width: "100%",
//       height: "100%",
//       background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
//       transition: "left 0.6s ease",
//       zIndex: 1,
//     },
//     "&:hover::after": {
//       left: "100%",
//     },
//   } as SxProps<Theme>,

//   // Glow Effect
//   glowEffect: (hover: boolean) =>
//     ({
//       "&::before": hover
//         ? {
//             content: '""',
//             position: "absolute",
//             top: "-2px",
//             left: "-2px",
//             right: "-2px",
//             bottom: "-2px",
//             background: "linear-gradient(45deg, #5aa454, #ffa500, #ff5733, #c70039)",
//             borderRadius: "18px",
//             zIndex: -1,
//             opacity: 0.3,
//             filter: "blur(8px)",
//             transition: "all 0.3s ease",
//           }
//         : {},
//     }) as SxProps<Theme>,
// }

// // Styles for action buttons - משופרים
// export const actionButtonStyles = {
//   downloadButton: {
//     width: "36px",
//     height: "36px",
//     minWidth: "36px",
//     borderRadius: "50%",
//     backgroundColor: "#5aa454",
//     color: "white",
//     margin: 0,
//     padding: 0,
//     boxShadow: "0 4px 15px rgba(90, 164, 84, 0.4)",
//     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//     backdropFilter: "blur(10px)",
//     border: "2px solid rgba(255, 255, 255, 0.2)",
//     "&:hover": {
//       backgroundColor: "#4a9b47",
//       transform: "scale(1.15) rotate(5deg)",
//       boxShadow: "0 8px 25px rgba(90, 164, 84, 0.6)",
//     },
//     "&:active": {
//       transform: "scale(0.95)",
//     },
//     "& svg": {
//       fontSize: "1.1rem",
//     },
//   } as SxProps<Theme>,

//   deleteButton: {
//     width: "36px",
//     height: "36px",
//     minWidth: "36px",
//     borderRadius: "50%",
//     backgroundColor: "#ff5733",
//     color: "white",
//     margin: 0,
//     padding: 0,
//     boxShadow: "0 4px 15px rgba(255, 87, 51, 0.4)",
//     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//     backdropFilter: "blur(10px)",
//     border: "2px solid rgba(255, 255, 255, 0.2)",
//     "&:hover": {
//       backgroundColor: "#e84e2c",
//       transform: "scale(1.15) rotate(-5deg)",
//       boxShadow: "0 8px 25px rgba(255, 87, 51, 0.6)",
//     },
//     "&:active": {
//       transform: "scale(0.95)",
//     },
//     "& svg": {
//       fontSize: "1.1rem",
//     },
//   } as SxProps<Theme>,

//   actionContainer: {
//     margin: 0,
//     padding: 0,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   } as SxProps<Theme>,
// }
import type { SxProps, Theme } from "@mui/material/styles"

export const fileCardStyles = {
  // Main Card Container - גודל קבוע ואחיד
  cardContainer: (hover: boolean) =>
    ({
      width: "140px", // רוחב קבוע
      height: "160px", // גובה קבוע
      borderRadius: "16px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      margin: "0.5rem",
      backgroundColor: hover ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
      transition: "all 0.3s ease",
      boxShadow: hover ? "0 15px 35px rgba(0, 0, 0, 0.2)" : "0 6px 20px rgba(0, 0, 0, 0.1)",
      transform: hover ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
      cursor: "pointer",
      border: "1px solid rgba(255, 165, 0, 0.1)",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "linear-gradient(to right, #5aa454, #ffa500, #ff5733, #c70039)",
        opacity: hover ? 1 : 0,
        transition: "opacity 0.3s ease",
      },
    }) as SxProps<Theme>,

  // Shared File Card Container - וריאציה לקבצים משותפים
  sharedCardContainer: (hover: boolean) =>
    ({
      width: "140px",
      height: "180px", // גובה יותר גדול לשם המשתף
      borderRadius: "16px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      margin: "0.5rem",
      backgroundColor: hover ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
      transition: "all 0.3s ease",
      boxShadow: hover ? "0 15px 35px rgba(0, 0, 0, 0.2)" : "0 6px 20px rgba(0, 0, 0, 0.1)",
      transform: hover ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
      cursor: "pointer",
      border: "1px solid rgba(90, 164, 84, 0.2)", // גבול ירוק לקבצים משותפים
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "linear-gradient(to right, #5aa454, #4caf50, #66bb6a, #81c784)", // גרדיאנט ירוק
        opacity: hover ? 1 : 0,
        transition: "opacity 0.3s ease",
      },
    }) as SxProps<Theme>,

  // File Icon Container - יותר גדול
  iconContainer: (hover: boolean) =>
    ({
      width: "100%",
      height: "100px", // הגדלה מ-80px
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: hover ? "rgba(255, 165, 0, 0.03)" : "rgba(255, 165, 0, 0.05)",
      background: "linear-gradient(90deg, #ffa500 0%, #ff5733 50%, #c70039 100%)",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      "&::after": hover
        ? {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.1)", // שקיפות בהובר
            transition: "all 0.3s ease",
          }
        : {},
    }) as SxProps<Theme>,

  // Shared Icon Container - וריאציה ירוקה
  sharedIconContainer: (hover: boolean) =>
    ({
      width: "100%",
      height: "90px", // קצת יותר קטן לפנות מקום לשם המשתף
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: hover ? "rgba(90, 164, 84, 0.03)" : "rgba(90, 164, 84, 0.05)",
      background: "linear-gradient(90deg, #5aa454 0%, #4caf50 50%, #66bb6a 100%)",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      "&::after": hover
        ? {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }
        : {},
    }) as SxProps<Theme>,

  // File Name Container - יותר נמוך
  fileNameContainer: {
    height: "50px", // גובה קבוע
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    borderTop: "1px solid rgba(0, 0, 0, 0.05)",
    padding: "0.4rem 0.6rem",
  } as SxProps<Theme>,

  // Shared File Name Container - קטן יותר
  sharedFileNameContainer: {
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    borderTop: "1px solid rgba(0, 0, 0, 0.05)",
    padding: "0.3rem 0.5rem",
  } as SxProps<Theme>,

  fileName: (isExpanded: boolean, isHebrew: boolean) =>
    ({
      fontSize: "0.8rem",
      fontWeight: 600,
      color: "#333",
      textAlign: "center",
      lineHeight: 1.2,
      fontFamily: '"Nunito", "Segoe UI", sans-serif',
      overflow: isExpanded ? "visible" : "hidden",
      textOverflow: isExpanded ? "clip" : "ellipsis",
      whiteSpace: isExpanded ? "normal" : "nowrap",
      cursor: "pointer",
      maxWidth: "100%",
      direction: isHebrew ? "rtl" : "ltr",
      transition: "all 0.3s ease",
      display: "-webkit-box",
      WebkitLineClamp: isExpanded ? "none" : 2,
      WebkitBoxOrient: "vertical",
      "&:hover": {
        color: "#ffa500",
      },
    }) as SxProps<Theme>,

  // Shared File Name - קטן יותר
  sharedFileName: (isExpanded: boolean, isHebrew: boolean) =>
    ({
      fontSize: "0.75rem",
      fontWeight: 600,
      color: "#333",
      textAlign: "center",
      lineHeight: 1.2,
      fontFamily: '"Nunito", "Segoe UI", sans-serif',
      overflow: isExpanded ? "visible" : "hidden",
      textOverflow: isExpanded ? "clip" : "ellipsis",
      whiteSpace: isExpanded ? "normal" : "nowrap",
      cursor: "pointer",
      maxWidth: "100%",
      direction: isHebrew ? "rtl" : "ltr",
      transition: "all 0.3s ease",
      display: "-webkit-box",
      WebkitLineClamp: isExpanded ? "none" : 2,
      WebkitBoxOrient: "vertical",
      "&:hover": {
        color: "#5aa454",
      },
    }) as SxProps<Theme>,

  // Owner Container - חדש לשם המשתף
  ownerContainer: {
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(90, 164, 84, 0.08)",
    borderTop: "1px solid rgba(90, 164, 84, 0.2)",
    padding: "0.5rem 0.8rem",
    position: "relative",
    overflow: "hidden",
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   left: 0,
    //   top: 0,
    //   bottom: 0,
    //   width: "3px",
    //   background: "linear-gradient(to bottom, #5aa454, #4caf50)",
    // },
  } as SxProps<Theme>,

  ownerInfo: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    width: "100%",
    justifyContent: "center",
  } as SxProps<Theme>,

  ownerLabel: {
    fontSize: "0.6rem",
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
    fontWeight: 500,
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  } as SxProps<Theme>,

  ownerName: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#5aa454",
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "70px",
  } as SxProps<Theme>,

  ownerIcon: {
    fontSize: "0.9rem",
    color: "#5aa454",
    opacity: 0.8,
  } as SxProps<Theme>,

  // Loading Owner
  loadingOwner: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    fontSize: "0.7rem",
    color: "#999",
    fontStyle: "italic",
    animation: "pulse 1.5s ease-in-out infinite",
    "@keyframes pulse": {
      "0%": { opacity: 1 },
      "50%": { opacity: 0.5 },
      "100%": { opacity: 1 },
    },
  } as SxProps<Theme>,

  // Shared Badge
  sharedBadge: {
    position: "absolute",
    top: "0.5rem",
    left: "0.5rem",
    backgroundColor: "#5aa454",
    color: "white",
    padding: "0.2rem 0.5rem",
    borderRadius: "12px",
    fontSize: "0.6rem",
    fontWeight: 700,
    textTransform: "uppercase",
    boxShadow: "0 2px 8px rgba(90, 164, 84, 0.3)",
    zIndex: 15,
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
  } as SxProps<Theme>,

  // Action Buttons Container - מיקום משופר
  actionsContainer: (hover: boolean) =>
    ({
      position: "absolute",
      top: "0.8rem",
      right: "0.8rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.4rem",
      opacity: hover ? 1 : 0,
      transform: hover ? "translateY(0) scale(1)" : "translateY(-15px) scale(0.8)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: 20,
    }) as SxProps<Theme>,

  // Progress Container
  progressContainer: {
    position: "absolute",
    bottom: "0.8rem",
    left: "0.8rem",
    right: "0.8rem",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    color: "white",
    padding: "0.4rem 0.6rem",
    borderRadius: "12px",
    fontSize: "0.7rem",
    fontWeight: 600,
    textAlign: "center",
    zIndex: 25,
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  } as SxProps<Theme>,

  // Shimmer Effect משופר
  shimmerEffect: {
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
      transition: "left 0.6s ease",
      zIndex: 1,
    },
    "&:hover::after": {
      left: "100%",
    },
  } as SxProps<Theme>,

  // Shared Shimmer Effect
  sharedShimmerEffect: {
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(90, 164, 84, 0.3), transparent)",
      transition: "left 0.6s ease",
      zIndex: 1,
    },
    "&:hover::after": {
      left: "100%",
    },
  } as SxProps<Theme>,

  // Glow Effect
  glowEffect: (hover: boolean) =>
    ({
      "&::before": hover
        ? {
            content: '""',
            position: "absolute",
            top: "-2px",
            left: "-2px",
            right: "-2px",
            bottom: "-2px",
            background: "linear-gradient(45deg, #5aa454, #ffa500, #ff5733, #c70039)",
            borderRadius: "18px",
            zIndex: -1,
            opacity: 0.3,
            filter: "blur(8px)",
            transition: "all 0.3s ease",
          }
        : {},
    }) as SxProps<Theme>,

  // Shared Glow Effect
  sharedGlowEffect: (hover: boolean) =>
    ({
      "&::before": hover
        ? {
            content: '""',
            position: "absolute",
            top: "-2px",
            left: "-2px",
            right: "-2px",
            bottom: "-2px",
            background: "linear-gradient(45deg, #5aa454, #4caf50, #66bb6a, #81c784)",
            borderRadius: "18px",
            zIndex: -1,
            opacity: 0.3,
            filter: "blur(8px)",
            transition: "all 0.3s ease",
          }
        : {},
    }) as SxProps<Theme>,
}

// Styles for action buttons - משופרים
export const actionButtonStyles = {
  downloadButton: {
    width: "36px",
    height: "36px",
    minWidth: "36px",
    borderRadius: "50%",
    backgroundColor: "#5aa454",
    color: "white",
    margin: 0,
    padding: 0,
    boxShadow: "0 4px 15px rgba(90, 164, 84, 0.4)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    "&:hover": {
      backgroundColor: "#4a9b47",
      transform: "scale(1.15) rotate(5deg)",
      boxShadow: "0 8px 25px rgba(90, 164, 84, 0.6)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
    "& svg": {
      fontSize: "1.1rem",
    },
  } as SxProps<Theme>,

  deleteButton: {
    width: "36px",
    height: "36px",
    minWidth: "36px",
    borderRadius: "50%",
    backgroundColor: "#ff5733",
    color: "white",
    margin: 0,
    padding: 0,
    boxShadow: "0 4px 15px rgba(255, 87, 51, 0.4)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    "&:hover": {
      backgroundColor: "#e84e2c",
      transform: "scale(1.15) rotate(-5deg)",
      boxShadow: "0 8px 25px rgba(255, 87, 51, 0.6)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
    "& svg": {
      fontSize: "1.1rem",
    },
  } as SxProps<Theme>,

  actionContainer: {
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as SxProps<Theme>,
}
