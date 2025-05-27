// import { Box, Button, CircularProgress, IconButton, InputAdornment, Modal, TextField } from "@mui/material"
// import { FormEvent, useRef, useState } from "react"
// import { inputStyle, modalStyle } from "../../styles/ModalStyle"
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../store/store";
// import { login } from "../../store/usersSlice";
// import { setUser } from "../../store/userSlice";
// import { object, string } from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import Errors from "./Errors";
// import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
// import Swal from "sweetalert2";

// const schema = object({
//     email: string().email().required(),
//     password: string().required().min(6).max(10),
// }).required()

// const SignIn = ({ onSuccess }:{ onSuccess:() => void }) => {
//     const loading = useSelector((state:RootState)=>state.users.loading);

//     const dispatch = useDispatch<AppDispatch>();

//     //const [open, setOpen] = useState(true);
//     const [showPassword, setShowPassword] = useState(false);

//     const handleClickShowPassword = () => {
//         setShowPassword((prev) => !prev);
//     };
    
//     const {
//         formState: { errors },
//         register,
//         handleSubmit,
//         setValue,
//     } = useForm({ resolver: yupResolver(schema) })

//     const onSubmit = async (data:any) => {
//         //setOpen(false);
//             const res = await dispatch(login(data));
//             if(res.meta.requestStatus === 'fulfilled') {
//                 onSuccess();
//                 dispatch(setUser(res.payload.userDto));
//                 sessionStorage.setItem('token', res.payload.token);
//             }else{
//                 onSuccess();
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: res.payload.response.data || 'login failed',
//                     confirmButtonText: 'Ok',
//                 })
//             }

//     }
//     return(
//         <>
            
//     {/* <Modal open={open} onClose={onClose}> */}
//             <Box sx={modalStyle}>
//             <form onSubmit={handleSubmit(onSubmit)}>
                   
//                     <TextField label='email' type="email" style={inputStyle} {...register("email")} slotProps={{ input: 
//                     { endAdornment: (<InputAdornment position="end"><Email/></InputAdornment>
//                             ),},
//                         }} />
//                     {errors.email && <Errors message={errors.email.message || " "} />}

//                     <TextField label='Password' type={showPassword ? 'text' : 'password'} style={inputStyle} {...register("password")}
//                     slotProps={{ input: {
//                     endAdornment: (
//                         <InputAdornment position="end">
//                             <IconButton 
//                                 aria-label={showPassword ? 'hide the password' : 'display the password'}
//                                 onClick={handleClickShowPassword}
//                             >
//                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                             </IconButton>
//                         </InputAdornment>
//                             ),},
//                         }}
//                     />
//                     {errors.password && <Errors message={errors.password.message || " "} />}
//                     <div>
//                         <Button type="submit" >Sign In</Button>
//                     </div>
//                     <div style={{display:'flex', justifyContent:"center", marginTop: 4, marginBottom: 4}}>
//                     {loading && <CircularProgress />}
//                     </div> 
//                 </form>
//             </Box>
//         {/* </Modal> */}

//         </>
//     )
// }
// export default SignIn

"use client"

import { Box, Button, CircularProgress, IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"
import { login } from "../../store/usersSlice"
import { setUser } from "../../store/userSlice"
import { object, string } from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Errors from "./Errors"
import { Email, Visibility, VisibilityOff, Login, Lock } from "@mui/icons-material"
import Swal from "sweetalert2"
import { signInStyles } from "../../styles/SignInStyle"

const schema = object({
  email: string().email().required(),
  password: string().required().min(6).max(10),
}).required()

const SignIn = ({ onSuccess }: { onSuccess: () => void }) => {
  const loading = useSelector((state: RootState) => state.users.loading)
  const dispatch = useDispatch<AppDispatch>()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data: any) => {
    const res = await dispatch(login(data))
    if (res.meta.requestStatus === "fulfilled") {
      onSuccess()
      dispatch(setUser(res.payload.userDto))
      sessionStorage.setItem("token", res.payload.token)
    } else {
      onSuccess()
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: res.payload.response.data || "login failed",
        confirmButtonText: "Ok",
      })
    }
  }

  return (
    <Box sx={signInStyles.container}>
      <Box sx={signInStyles.dialogHeader}>
        <Box component="h2" sx={signInStyles.dialogTitle}>
          <Box sx={signInStyles.titleIcon}>
            <Login />
          </Box>
          Sign In
        </Box>
        <Box sx={signInStyles.colorDots}>
          {[0, 1, 2, 3].map((index) => (
            <Box key={index} sx={signInStyles.colorDot(index)} />
          ))}
        </Box>
      </Box>

      <Box sx={signInStyles.dialogContent}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={signInStyles.form}>
          <Box sx={signInStyles.formField}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="filled"
              sx={signInStyles.textField}
              {...register("email")}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={signInStyles.inputIcon} />
                    </InputAdornment>
                  ),
                },
              }}
            />
            {errors.email && <Errors message={errors.email.message || " "} />}
          </Box>

          <Box sx={signInStyles.formField}>
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="filled"
              sx={signInStyles.textField}
              {...register("password")}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={signInStyles.inputIcon} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? "hide the password" : "display the password"}
                        onClick={handleClickShowPassword}
                        sx={signInStyles.visibilityIcon}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            {errors.password && <Errors message={errors.password.message || " "} />}
          </Box>

          <Box sx={signInStyles.dialogActions}>
            <Button sx={signInStyles.cancelButton} onClick={onSuccess}>
              Cancel
            </Button>
            <Button type="submit" sx={signInStyles.submitButton} disabled={loading}>
              <Login sx={signInStyles.buttonIcon} />
              Sign In
            </Button>
          </Box>

          {loading && (
            <Box sx={signInStyles.loadingContainer}>
              <CircularProgress size={24} sx={signInStyles.loadingSpinner} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default SignIn
