// import { AppBar, Box} from "@mui/material"
// import { Link } from "react-router"
// import Auth from "./user/Auth"
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";

// const Menu = ()=>{
//     const currentUser = useSelector((state:RootState)=>state.user.currentUser);
//     const backgroundStyle = Object.keys(currentUser).length === 0?{
//         height: "calc(100vh - 18px)",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(https://img.freepik.com/free-vector/music-notes-background_23-2151339663.jpg?uid=R194409080&ga=GA1.1.1604458740.1743596294&semt=ais_hybrid)"
//       }:{};
//     const styleLink = {
//         textDecoration: 'none',
//         color: '#023370',
//         fontSize: '16px',
//         '&:hover': { 
//             backgroundColor: '#ce9575'
//         }        
//     }
//     return (<>

//            <div style={backgroundStyle}>


// <AppBar position="fixed" sx={{ backgroundColor: '#fc8295', paddingTop: 2 }}> 
// <Box sx={{ display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
// <Box sx={{ left:0,top:0, marginLeft: 1 }}>
// <Auth/>
// </Box>
//         <Box
//         //sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
//             sx={{
//                 position: 'absolute',
//                 top: 0,
//                 right: 0,
//                 padding: 2,
//                 pt:3,
//                 zIndex: 1,
//                 color:'#023370'
//             }}
//         >   
//                 <Link to='/upload' style={styleLink}>upload file</Link> | 
//                 <Link to='/files' style={styleLink}> all files</Link> | 
//                 <Link to='/allfiles' style={styleLink}> share files</Link> | 
//                 <Link to='/' style={styleLink}> about</Link> 
//                 {/* <Link to='/recipes' style={styleLink}> recipes list </Link> */}
//                  {/* {user.email &&( <Link to={`/recipes/add`} style={styleLink}> | add recipe </Link>)} */}
//         </Box>
//         </Box>

//             </AppBar> 
//            </div>

//     </>)
// }
"use client"

import { AppBar, Box, IconButton, Collapse, GlobalStyles } from "@mui/material"
import { Link } from "react-router"
import { MenuIcon, X, Upload, Files, Share2, Info } from "lucide-react"
import { useState } from "react"
import Auth from "./user/Auth"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { menuStyles, navColors } from "../styles/MenuStyle"

const Menu = () => {
  // const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // const hasUser = Object.keys(currentUser).length > 0
  // const backgroundStyle = menuStyles.backgroundStyle(hasUser)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navigationLinks = [
    { to: "/upload", text: "Upload File", icon: Upload, color: navColors.upload },
    { to: "/files", text: "All Files", icon: Files, color: navColors.files },
    { to: "/allfiles", text: "Shared Files", icon: Share2, color: navColors.share },
    { to: "/", text: "About", icon: Info, color: navColors.about },
  ]

  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes colorShift": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      />

      {/* <div style={backgroundStyle}> */}
        <AppBar position="sticky" sx={menuStyles.appBar}>
          <Box sx={menuStyles.container}>
            {/* Logo Section - Left */}
            <Box sx={menuStyles.logoSection}>
              {/* 🔄 שנה כאן את נתיב התמונה */}
              {/* <img src="../src/assets/7823700-02.png" alt="Logo" style={menuStyles.logoImage} /> */}
            </Box>

            {/* Center Navigation */}
            <Box sx={menuStyles.centerSection}>
              {navigationLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <Link key={link.to} to={link.to} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        ...menuStyles.navItem,
                        color: link.color,
                      }}
                    >
                      <IconComponent size={18} />
                      <span>{link.text}</span>
                    </Box>
                  </Link>
                )
              })}
            </Box>

            {/* Right Section - Auth Buttons */}
            <Box sx={menuStyles.rightSection}>
              <Auth />
            </Box>

            {/* Mobile Menu Toggle */}
            <IconButton sx={menuStyles.mobileToggle} onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={18} /> : <MenuIcon size={18} />}
            </IconButton>
          </Box>

          {/* Mobile Menu */}
          <Collapse in={mobileMenuOpen}>
            <Box sx={menuStyles.mobileMenu}>
              <Box sx={menuStyles.mobileMenuContent}>
                {/* Mobile Navigation Links */}
                {navigationLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      style={{ textDecoration: "none" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Box
                        sx={{
                          ...menuStyles.mobileNavItem,
                          color: link.color,
                        }}
                      >
                        <IconComponent size={18} />
                        <span>{link.text}</span>
                      </Box>
                    </Link>
                  )
                })}

                {/* Mobile Auth */}
                <Auth />
              </Box>
            </Box>
          </Collapse>
        </AppBar>
      {/* </div> */}
    </>
  )
}

export default Menu
