import type { SxProps, Theme } from "@mui/material/styles"

export const signInStyles = {
  container: {
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    backgroundColor: "transparent", // שקוף כמו שביקשת
    maxWidth: "400px",
    width: "100%",
  } as SxProps<Theme>,

  dialogHeader: {
    padding: "1rem 1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.95)", // שקיפות קלה
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
    backgroundColor: "#ff5733",
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
    backgroundColor: "rgba(255, 255, 255, 0.95)", // שקיפות קלה
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
        boxShadow: "0 0 0 2px rgba(255, 87, 51, 0.2)",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#666",
      "&.Mui-focused": {
        color: "#ff5733",
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
      color: "#ff5733",
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
    background: "linear-gradient(135deg, #ff5733, #c70039)",
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
    boxShadow: "0 4px 12px rgba(255, 87, 51, 0.25)",
    transition: "all 0.2s ease",
    textTransform: "none",
    width: { xs: "100%", sm: "auto" },
    "&:hover:not(.Mui-disabled)": {
      background: "linear-gradient(135deg, #e84e2c, #b30033)",
      boxShadow: "0 6px 16px rgba(255, 87, 51, 0.35)",
      transform: "translateY(-2px)",
    },
    "&.Mui-disabled": {
      background: "linear-gradient(135deg, #ffb8a8, #e6a0ad)",
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
    color: "#ff5733",
  } as SxProps<Theme>,

  errorText: {
    color: "#c70039",
    fontSize: "0.8rem",
    marginTop: "0.2rem",
  } as SxProps<Theme>,
}
