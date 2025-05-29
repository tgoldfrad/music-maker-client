import type { SxProps, Theme } from "@mui/material/styles"

export const aboutStyles = {
  // Main Container
  mainContainer: {
    minHeight: "100vh",
    padding: "2rem 1rem",
    background:
      "linear-gradient(135deg, rgba(90, 164, 84, 0.05) 0%, rgba(255, 165, 0, 0.05) 25%, rgba(255, 87, 51, 0.05) 75%, rgba(199, 0, 57, 0.05) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as SxProps<Theme>,

  // Content Container
  contentContainer: {
    maxWidth: "1200px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "1fr 400px" },
    gap: "4rem",
    alignItems: "center",
  } as SxProps<Theme>,

  // Left Side - Description
  descriptionSection: {
    order: { xs: 2, lg: 1 },
  } as SxProps<Theme>,

  headerCard: {
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "6px",
      background: "linear-gradient(to right, #5aa454, #ffa500, #ff5733, #c70039)",
    },
  } as SxProps<Theme>,

  headerContent: {
    padding: "3rem 2.5rem",
  } as SxProps<Theme>,

  mainTitle: {
    fontSize: { xs: "2.5rem", md: "3.5rem" },
    fontWeight: 800,
    background: "linear-gradient(135deg, #5aa454 0%, #ffa500 50%, #ff5733 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1rem",
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
    lineHeight: 1.2,
  } as SxProps<Theme>,

  subtitle: {
    fontSize: { xs: "1.2rem", md: "1.4rem" },
    fontWeight: 600,
    color: "#666",
    marginBottom: "2rem",
    lineHeight: 1.4,
  } as SxProps<Theme>,

  description: {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "#555",
    marginBottom: "2rem",
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
  } as SxProps<Theme>,

  targetAudience: {
    backgroundColor: "rgba(90, 164, 84, 0.1)",
    padding: "1.5rem",
    borderRadius: "16px",
    border: "1px solid rgba(90, 164, 84, 0.2)",
    marginBottom: "2rem",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "4px",
      background: "linear-gradient(to bottom, #5aa454, #4caf50)",
      borderRadius: "0 4px 4px 0",
    },
  } as SxProps<Theme>,

  audienceTitle: {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#5aa454",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  } as SxProps<Theme>,

  audienceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  } as SxProps<Theme>,

  audienceItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "0.8rem",
    fontSize: "1rem",
    color: "#666",
    "&:last-child": {
      marginBottom: 0,
    },
  } as SxProps<Theme>,

  audienceIcon: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "#5aa454",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8rem",
    fontWeight: "bold",
  } as SxProps<Theme>,

  // Right Side - Steps
  stepsSection: {
    order: { xs: 1, lg: 2 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  } as SxProps<Theme>,

  stepsTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#333",
    textAlign: "center",
    marginBottom: "1rem",
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
  } as SxProps<Theme>,

  stepsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    position: "relative",
  } as SxProps<Theme>,

  // Blue Rounded Triangle Steps - Updated to be larger and colorful
  triangleStep: (stepNumber: number, isReversed = false) =>
    ({
      width: "250px",
      height: "220px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      transform: isReversed ? "rotate(180deg)" : "rotate(0deg)",
      "&:hover": {
        transform: isReversed ? "rotate(180deg) scale(1.05)" : "scale(1.05)",
        filter: `drop-shadow(0 15px 40px ${getStepShadowColor(stepNumber)})`,
      },
    }) as SxProps<Theme>,

  triangleShape: (stepNumber: number) =>
    ({
      width: "220px",
      height: "190px",
      backgroundColor: getStepColor(stepNumber),
      clipPath: "polygon(50% 8%, 8% 92%, 92% 92%)", // More rounded corners
      borderRadius: "30px", // Very rounded corners
      position: "absolute",
      boxShadow: `0 12px 35px ${getStepShadowColor(stepNumber)}`,
      transition: "all 0.3s ease",
      "&::before": {
        content: '""',
        position: "absolute",
        top: "4px",
        left: "4px",
        right: "4px",
        bottom: "4px",
        background: getStepGradient(stepNumber),
        clipPath: "polygon(50% 8%, 8% 92%, 92% 92%)",
        borderRadius: "26px",
      },
    }) as SxProps<Theme>,

  stepContent: (isReversed = false) =>
    ({
      position: "absolute",
      top: "55%",
      left: "50%",
      transform: `translate(-50%, -50%) ${isReversed ? "rotate(180deg)" : ""}`,
      textAlign: "center",
      color: "white",
      zIndex: 10,
      padding: "1.5rem",
      width: "180px",
    }) as SxProps<Theme>,

  stepNumber: {
    fontSize: "3rem",
    fontWeight: 900,
    marginBottom: "0.8rem",
    textShadow: "0 3px 12px rgba(0, 0, 0, 0.4)",
    lineHeight: 1,
  } as SxProps<Theme>,

  stepTitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    textShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
    lineHeight: 1.2,
  } as SxProps<Theme>,

  stepDescription: {
    fontSize: "0.85rem",
    fontWeight: 500,
    opacity: 0.95,
    textShadow: "0 1px 4px rgba(0, 0, 0, 0.4)",
    lineHeight: 1.3,
  } as SxProps<Theme>,

  // Connecting Lines - Updated colors
  connectingLine: {
    width: "6px",
    height: "25px",
    background: "linear-gradient(to bottom, #ffa500, #ff5733)",
    borderRadius: "3px",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "16px",
      height: "16px",
      backgroundColor: "#ff5733",
      borderRadius: "50%",
      boxShadow: "0 0 0 6px rgba(255, 87, 51, 0.3)",
    },
  } as SxProps<Theme>,
 // Modal Style
 modalStyle: {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400 },
  bgcolor: "transparent",
  border: "none",
  outline: "none",
} as SxProps<Theme>,
  // Floating Elements
  floatingNote: (delay: number) =>
    ({
      position: "absolute",
      fontSize: "2rem",
      color: "rgba(59, 130, 246, 0.3)",
      animation: `float 3s ease-in-out ${delay}s infinite`,
      "@keyframes float": {
        "0%, 100%": {
          transform: "translateY(0px) rotate(0deg)",
        },
        "50%": {
          transform: "translateY(-20px) rotate(5deg)",
        },
      },
    }) as SxProps<Theme>,

  // Call to Action
  ctaSection: {
    textAlign: "center",
    marginTop: "2rem",
  } as SxProps<Theme>,

  ctaButton: {
    background: "linear-gradient(135deg, #5aa454 0%, #ffa500 50%, #ff5733 100%)",
    color: "white",
    border: "none",
    borderRadius: "50px",
    padding: "1rem 2.5rem",
    fontSize: "1.2rem",
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.8rem",
    boxShadow: "0 8px 30px rgba(255, 87, 51, 0.4)",
    transition: "all 0.3s ease",
    textTransform: "none",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 40px rgba(255, 87, 51, 0.5)",
    },
  } as SxProps<Theme>,

  // Mobile Steps - Updated
  mobileStepsContainer: {
    display: { xs: "flex", lg: "none" },
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "1rem",
  } as SxProps<Theme>,

  mobileTriangleStep: (stepNumber: number) =>
    ({
      width: "140px",
      height: "120px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }) as SxProps<Theme>,

  mobileTriangleShape: (stepNumber: number) =>
    ({
      width: "120px",
      height: "100px",
      backgroundColor: getStepColor(stepNumber),
      clipPath: "polygon(50% 10%, 10% 90%, 90% 90%)",
      borderRadius: "20px",
      position: "absolute",
      boxShadow: `0 6px 20px ${getStepShadowColor(stepNumber)}`,
    }) as SxProps<Theme>,

  mobileStepContent: {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    zIndex: 10,
    width: "100px",
  } as SxProps<Theme>,
}

// Helper functions - Updated with site colors
function getStepColor(stepNumber: number): string {
  const colors = ["#5aa454", "#ffa500", "#ff5733"] // Green, Orange, Red
  return colors[stepNumber - 1] || "#5aa454"
}

function getStepGradient(stepNumber: number): string {
  const gradients = [
    "linear-gradient(135deg, #5aa454, #4caf50, #66bb6a)", // Green gradient
    "linear-gradient(135deg, #ffa500, #ff8c00, #ff7700)", // Orange gradient
    "linear-gradient(135deg, #ff5733, #e84e2c, #d73527)", // Red gradient
  ]
  return gradients[stepNumber - 1] || gradients[0]
}

function getStepShadowColor(stepNumber: number): string {
  const shadows = [
    "rgba(90, 164, 84, 0.4)", // Green shadow
    "rgba(255, 165, 0, 0.4)", // Orange shadow
    "rgba(255, 87, 51, 0.4)", // Red shadow
  ]
  return shadows[stepNumber - 1] || shadows[0]
}
