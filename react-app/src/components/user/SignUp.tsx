
// import { yupResolver } from "@hookform/resolvers/yup"
// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { useDispatch, useSelector } from "react-redux"
// import { object, string } from "yup"
// import { AppDispatch, RootState } from "../../store/store"
// import { inputStyle, modalStyle } from "../../styles/ModalStyle"
// import { Box, Button, CircularProgress, FormControlLabel, IconButton, InputAdornment, Modal, Radio, RadioGroup, TextField } from "@mui/material"
// import Errors from "./Errors"
// import { registration } from "../../store/usersSlice"
// import { Email, Person, Visibility, VisibilityOff } from "@mui/icons-material"
// import { setUser } from "../../store/userSlice"
// import Swal from "sweetalert2"
// import { UserType } from "../../types/UserType"

// const schema = object({
//     name: string().required().min(3),
//     email: string().email().required(),
//     password: string().required().min(6).max(10),
// }).required()
// const SignUp = ({ onSuccess }:{ onSuccess:() => void }) => {
//     //const navigate = useNavigate();
  
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
//     } = useForm({resolver: yupResolver(schema) })

//     const onSubmit = async (data:any) => {
//         const newUser:Partial<UserType> = {
//             name: data.name,
//             email: data.email,
//             password: data.password,
//             role: 'User',
//         }
//         const res = await dispatch(registration(newUser));
//         if(res.meta.requestStatus === 'fulfilled') {
//             onSuccess();
//             dispatch(setUser(res.payload.userDto));
//             sessionStorage.setItem('token', res.payload.token);
//         }else{
//             onSuccess();
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: res.payload.response.data || 'register failed',
//                 confirmButtonText: 'Ok',
//             })
//         }
        
//             // if (e.status === 409) {
//             //     alert('user is already login, please press login');
//             // }
//             // else if (e.status === 401) {
//             //     alert('Invalid password');
//             // }
//             // else if (e.status === 404) {
//             //     alert('user not found');
//             // }
//         }
        
//         //setOpen(false);
//         //navigate(-1);
//         // try catch?

    
//     return(<>
//  {/* <Modal open={open} onClose={onClose}> */}
   
//             <Box sx={modalStyle}>
//             <form onSubmit={handleSubmit(onSubmit)}>
                   
//                     <TextField label='name' style={inputStyle} {...register("name")} slotProps={{ input: 
//                     { endAdornment: (<InputAdornment position="end"><Person/></InputAdornment>
//                             ),},
//                         }}/>
//                     {errors.name && <Errors message={errors.name.message || " "} />}
                    
//                     <TextField label='email' type="text" style={inputStyle} {...register("email")} slotProps={{ input: 
//                     { endAdornment: (<InputAdornment position="end"><Email/></InputAdornment>
//                             ),},
//                         }}/>
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
//                         <Button type="submit" >Sign Up</Button>
//                     </div>
//                     <div style={{display:'flex', justifyContent:"center", marginTop: 4, marginBottom: 4}}>
//                     {loading && <CircularProgress />}
//                     </div> 
//                 </form>
//             </Box>
//         {/* </Modal> */}

//         </>)
// }
// export default SignUp

"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { object, string } from "yup"
import type { AppDispatch, RootState } from "../../store/store"
import { Box, Button, CircularProgress, IconButton, InputAdornment, TextField } from "@mui/material"
import Errors from "./Errors"
import { registration } from "../../store/usersSlice"
import { Email, Person, Visibility, VisibilityOff, PersonAdd, Lock } from "@mui/icons-material"
import { setUser } from "../../store/userSlice"
import Swal from "sweetalert2"
import type { UserType } from "../../types/UserType"
import { signUpStyles } from "../../styles/SignUpStyle"

const schema = object({
  name: string().required().min(3),
  email: string().email().required(),
  password: string().required().min(6).max(10),
}).required()

const SignUp = ({ onSuccess }: { onSuccess: () => void }) => {
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
    const newUser: Partial<UserType> = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "User",
    }
    const res = await dispatch(registration(newUser))
    if (res.meta.requestStatus === "fulfilled") {
      onSuccess()
      dispatch(setUser(res.payload.userDto))
      sessionStorage.setItem("token", res.payload.token)
    } else {
      onSuccess()
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: res.payload.response.data || "register failed",
        confirmButtonText: "Ok",
      })
    }
  }

  return (
    <Box sx={signUpStyles.container}>
      <Box sx={signUpStyles.dialogHeader}>
        <Box component="h2" sx={signUpStyles.dialogTitle}>
          <Box sx={signUpStyles.titleIcon}>
            <PersonAdd />
          </Box>
          Sign Up
        </Box>
        <Box sx={signUpStyles.colorDots}>
          {[0, 1, 2, 3].map((index) => (
            <Box key={index} sx={signUpStyles.colorDot(index)} />
          ))}
        </Box>
      </Box>

      <Box sx={signUpStyles.dialogContent}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={signUpStyles.form}>
          <Box sx={signUpStyles.formField}>
            <TextField
              label="Name"
              type="text"
              fullWidth
              variant="filled"
              sx={signUpStyles.textField}
              {...register("name")}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={signUpStyles.inputIcon} />
                    </InputAdornment>
                  ),
                },
              }}
            />
            {errors.name && <Errors message={errors.name.message || " "} />}
          </Box>

          <Box sx={signUpStyles.formField}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="filled"
              sx={signUpStyles.textField}
              {...register("email")}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={signUpStyles.inputIcon} />
                    </InputAdornment>
                  ),
                },
              }}
            />
            {errors.email && <Errors message={errors.email.message || " "} />}
          </Box>

          <Box sx={signUpStyles.formField}>
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="filled"
              sx={signUpStyles.textField}
              {...register("password")}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={signUpStyles.inputIcon} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? "hide the password" : "display the password"}
                        onClick={handleClickShowPassword}
                        sx={signUpStyles.visibilityIcon}
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

          <Box sx={signUpStyles.dialogActions}>
            <Button sx={signUpStyles.cancelButton} onClick={onSuccess}>
              Cancel
            </Button>
            <Button type="submit" sx={signUpStyles.submitButton} disabled={loading}>
              <PersonAdd sx={signUpStyles.buttonIcon} />
              Sign Up
            </Button>
          </Box>

          {loading && (
            <Box sx={signUpStyles.loadingContainer}>
              <CircularProgress size={24} sx={signUpStyles.loadingSpinner} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default SignUp
