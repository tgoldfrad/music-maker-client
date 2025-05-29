
//  import Update from "./Update";
//  import SignIn from "./SignIn";
//  import SignUp from "./SignUp";

// import React, { useState } from 'react';
// import { Modal, Box, Button, Grid2 as Grid, Typography } from '@mui/material';
// import { modalStyle } from '../../styles/ModalStyle';
// import { useSelector } from "react-redux";
// import { RootState } from "../../store/store";


// //https://img.freepik.com/free-photo/flat-lay-audio-cassette-with-musical-notes_23-2148282065.jpg?uid=R194409080&ga=GA1.1.1604458740.1743596294&semt=ais_hybrid
// //https://img.freepik.com/free-vector/music-notes-background_23-2151339663.jpg?uid=R194409080&ga=GA1.1.1604458740.1743596294&semt=ais_hybrid
// const Auth = () => {
//     const [open, setOpen] = useState(false);
//     const [isSignIn, setIsSignIn] = useState(false);
//     const currentUser = useSelector((state:RootState)=>state.user.currentUser);
//     // const backgroundStyle = Object.keys(currentUser).length === 0?{
//     //     height: "calc(100vh - 18px)",
//     //     backgroundPosition: "center",
//     //     backgroundSize: "cover",
//     //     backgroundRepeat: "no-repeat",
//     //     backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(https://img.freepik.com/free-vector/music-notes-background_23-2151339663.jpg?uid=R194409080&ga=GA1.1.1604458740.1743596294&semt=ais_hybrid)"
//     //   }:{};

//     const handleSuccess = () => {
//         setOpen(false);
//     };
//     // const toggleForm = () => setIsSignIn(!isSignIn);

//     return (<>
//          {/* <div style={backgroundStyle}> */}
//             {/* <Grid container> */}
//                  {/* <Grid size={4} padding={2}> */}
//                      {Object.keys(currentUser).length === 0?
//                       <div>
//                          <Button onClick={() => {setOpen(true);setIsSignIn(true)}} 
//                              sx={{color:'#023370','&:hover': {color:'white', backgroundColor: '#023370' }, marginRight: '8px',mb:2 }}>
//                              Sign in </Button>
//                          <Button 
//                               onClick={() => {setOpen(true);setIsSignIn(false)}} 
//                              sx={{color:'#023370','&:hover': {color:'white', backgroundColor: '#023370' },mb:2 }}>
//                              Sign up </Button>
//                      </div>:
//                      <Update />
                 
//                      }
//                  {/* </Grid> */}
//              {/* </Grid> */}
//             <Modal
//                 open={open}
//                 onClose={() => setOpen(false)}
//                 aria-labelledby="auth-modal-title"
//                 aria-describedby="auth-modal-description"
//             >
//                 <Box sx={{ modalStyle }}>
//                     {isSignIn ? (
//                         <div>
//                             {/* <h2 id="auth-modal-title">Sign In</h2> */}
//                             <SignIn onSuccess={handleSuccess}/>
//                             {/* <p>Don't have an account? <Button onClick={toggleForm}>Sign Up</Button></p> */}
//                         </div>
//                     ) : (
//                         <div>
//                             {/* <h2 id="auth-modal-title">Sign Up</h2> */}
//                             <SignUp onSuccess={handleSuccess}/>
//                             {/* <p>Already have an account? <Button onClick={toggleForm}>Sign In</Button></p> */}
//                         </div>
//                     )}
//                 </Box>
//             </Modal>
//          {/* </div> */}
//         </> );
// };



// export default Auth;
"use client"

import { useState } from "react"
import { Modal, Box } from "@mui/material"
import { menuStyles, modalStyle } from "../../styles/MenuStyle"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import Update from "./Update"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { useMediaQuery, useTheme } from "@mui/material"

const Auth = () => {
  const [open, setOpen] = useState(false)
  const [isSignIn, setIsSignIn] = useState(false)
  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"))

  const handleSuccess = () => {
    setOpen(false)
  }

  const handleSignInClick = () => {
    setOpen(true)
    setIsSignIn(true)
  }

  const handleSignUpClick = () => {
    setOpen(true)
    setIsSignIn(false)
  }

  return (
    <>
      {Object.keys(currentUser||"").length === 0 ? (
        <>
          {/* Desktop Auth */}
          {!isMobile && (
            <>
              <Box sx={menuStyles.authButton} onClick={handleSignInClick}>
                <span>SIGN IN</span>
                <Box sx={menuStyles.playIcon} />
              </Box>
              <Box sx={menuStyles.authButton} onClick={handleSignUpClick}>
                <span>SIGN UP</span>
                <Box sx={menuStyles.playIcon} />
              </Box>
            </>
          )}

          {/* Mobile Auth */}
          {isMobile && (
            <>
              <Box sx={menuStyles.mobileAuthButton} onClick={handleSignInClick}>
                <span>SIGN IN</span>
                <Box sx={menuStyles.mobilePlayIcon} />
              </Box>
              <Box sx={menuStyles.mobileAuthButton} onClick={handleSignUpClick}>
                <span>SIGN UP</span>
                <Box sx={menuStyles.mobilePlayIcon} />
              </Box>
            </>
          )}
        </>
      ) : (
        <Update />
      )}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="auth-modal-title"
        aria-describedby="auth-modal-description"
      >
        <Box sx={modalStyle}>
          {isSignIn ? <SignIn onSuccess={handleSuccess} /> : <SignUp onSuccess={handleSuccess} />}
        </Box>
      </Modal>
    </>
  )
}

export default Auth

