import type { SxProps, Theme } from "@mui/material/styles"

export const updateStyles = {
  // User Profile Section
  userProfileContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexFlow: "row-reverse",
    gap: 2,
    padding: "0.1rem",
  } as SxProps<Theme>,

  avatarSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0.5,
  } as SxProps<Theme>,

  avatar: {
    width: { xs: 30, md: 38 },
    height: { xs: 30, md: 38 },
    background: "linear-gradient(135deg, #e52f35 0%, #e02636 50%, #d71937 100%)", // צהוב כתום#
    fontSize: { xs: "1.1rem", md: "1.3rem" },
    fontWeight: 700,
    boxShadow: "0 4px 12px rgba(255, 165, 0, 0.3)",
  } as SxProps<Theme>,

  userName: {
    fontSize: { xs: "0.8rem", md: "0.9rem" },
    fontWeight: 600,
    color: "#333",
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
    textAlign: "center",
    maxWidth: "80px",
    wordBreak: "break-word",
  } as SxProps<Theme>,

  // Action Buttons
  actionButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 0.8,
    flex: "0 0 auto",
  } as SxProps<Theme>,

  updateButton: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "#ffffff",
    fontSize: { xs: "0.75rem", md: "0.8rem" },
    fontWeight: "700",
    padding: { xs: "6px 16px", md: "8px 20px" },
    borderRadius: "20px",
    background: "linear-gradient(135deg, #ffa500 0%, #ff5733 50%, #c70039 100%)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    minWidth: { xs: "100px", md: "110px" },
    justifyContent: "space-between",
    textTransform: "none",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 4px 15px rgba(255, 87, 51, 0.4)",
    },
  } as SxProps<Theme>,

  logoutButton: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "#ffffff",
    fontSize: { xs: "0.75rem", md: "0.8rem" },
    fontWeight: "700",
    padding: { xs: "6px 16px", md: "8px 20px" },
    borderRadius: "20px",
    background: "linear-gradient(135deg, #ffa500 0%, #ff5733 50%, #c70039 100%)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    minWidth: { xs: "100px", md: "110px" },
    justifyContent: "space-between",
    textTransform: "none",
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
    borderRadius: "2px",
    marginLeft: "2px",
  } as SxProps<Theme>,

  // Modal Form Styles (same as SignIn/SignUp)
  container: {
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    backgroundColor: "transparent",
    maxWidth: "400px",
    width: "100%",
  } as SxProps<Theme>,

  dialogHeader: {
    padding: "1rem 1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    position: "relative",
    borderBottom: "1px solid #f0f0f0",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "3px",
      background: "linear-gradient(to right, #5aa454, #ffa500, #ff5733, #c70039)",
    },
  } as SxProps<Theme>,

  dialogTitle: {
    fontSize: "1.4rem",
    fontWeight: 700,
    color: "#333",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
  } as SxProps<Theme>,

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    backgroundColor: "#ffa500", // כתום לעדכון
    color: "white",
    borderRadius: "8px",
    "& svg": {
      fontSize: "1.1rem",
    },
  } as SxProps<Theme>,

  colorDots: {
    display: "flex",
    marginTop: "0.35rem",
    gap: "4px",
  } as SxProps<Theme>,

  colorDot: (index: number) => {
    const colors = ["#5aa454", "#ffa500", "#ff5733", "#c70039"]
    return {
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      backgroundColor: colors[index],
    } as SxProps<Theme>
  },

  dialogContent: {
    padding: "1.5rem",
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  } as SxProps<Theme>,

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  } as SxProps<Theme>,

  formField: {
    width: "100%",
    marginBottom: "0.5rem",
  } as SxProps<Theme>,

  textField: {
    "& .MuiFilledInput-root": {
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      border: "none",
      padding: "0.6rem 0.75rem 0",
      "&:before, &:after": {
        display: "none",
      },
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
      "&.Mui-focused": {
        backgroundColor: "#f5f5f5",
        boxShadow: "0 0 0 2px rgba(255, 165, 0, 0.2)", // כתום לעדכון
      },
    },
    "& .MuiInputLabel-root": {
      color: "#666",
      "&.Mui-focused": {
        color: "#ffa500", // כתום לעדכון
      },
    },
  } as SxProps<Theme>,

  inputIcon: {
    color: "#666",
    marginRight: "0.5rem",
  } as SxProps<Theme>,

  visibilityIcon: {
    color: "#666",
    "&:hover": {
      color: "#ffa500", // כתום לעדכון
    },
  } as SxProps<Theme>,

  dialogActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.75rem",
    marginTop: "1rem",
    flexDirection: { xs: "column-reverse", sm: "row" },
  } as SxProps<Theme>,

  cancelButton: {
    color: "#666",
    backgroundColor: "transparent",
    border: "1px solid #ddd",
    borderRadius: "50px",
    padding: "0.5rem 1.25rem",
    fontSize: "0.95rem",
    fontWeight: 600,
    transition: "all 0.2s ease",
    textTransform: "none",
    width: { xs: "100%", sm: "auto" },
    "&:hover": {
      backgroundColor: "#f5f5f5",
      borderColor: "#ccc",
    },
  } as SxProps<Theme>,

  submitButton: {
    background: "linear-gradient(135deg, #ffa500, #ff8c00)", // גרדיאנט כתום לעדכון
    color: "white",
    border: "none",
    borderRadius: "50px",
    padding: "0.5rem 1.25rem",
    fontSize: "0.95rem",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    boxShadow: "0 4px 12px rgba(255, 165, 0, 0.25)",
    transition: "all 0.2s ease",
    textTransform: "none",
    width: { xs: "100%", sm: "auto" },
    "&:hover:not(.Mui-disabled)": {
      background: "linear-gradient(135deg, #ff8c00, #ff7700)",
      boxShadow: "0 6px 16px rgba(255, 165, 0, 0.35)",
      transform: "translateY(-2px)",
    },
    "&.Mui-disabled": {
      background: "linear-gradient(135deg, #ffcc80, #ffb74d)",
      cursor: "not-allowed",
      boxShadow: "none",
    },
  } as SxProps<Theme>,

  buttonIcon: {
    fontSize: "1.1rem",
  } as SxProps<Theme>,

  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  } as SxProps<Theme>,

  loadingSpinner: {
    color: "#ffa500", // כתום לעדכון
  } as SxProps<Theme>,

  // Modal positioning
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
}
