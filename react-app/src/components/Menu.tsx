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
// export default Menu
// "use client"

// import { AppBar, Box, Typography, IconButton, Collapse } from "@mui/material"
// import { Link } from "react-router"
// import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"
// import { useState } from "react"
// import Auth from "./user/Auth"
// import { useSelector } from "react-redux"
// import type { RootState } from "../store/store"
// import { menuStyles } from "../styles/MenuStyle"

// const Menu = () => {
//   const currentUser = useSelector((state: RootState) => state.user.currentUser)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   const hasUser = Object.keys(currentUser).length > 0
//   const backgroundStyle = menuStyles.backgroundStyle(hasUser)

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen)
//   }

//   const navigationLinks = [
//     { to: "/upload", text: "Upload File" },
//     { to: "/files", text: "All Files" },
//     { to: "/allfiles", text: "Share Files" },
//     { to: "/", text: "About" },
//   ]

//   return (
//     <>
//       <div style={backgroundStyle}>
//         <AppBar position="fixed" sx={menuStyles.appBar}>
//           <Box sx={menuStyles.container}>
//             {/* Logo Section - Left */}
//             <Box sx={menuStyles.logoSection}>
//               <img src="/placeholder.svg?height=50&width=50" alt="Logo" style={menuStyles.logoImage} />
//               <Typography sx={menuStyles.logoText}>My Music</Typography>
//             </Box>

//             {/* Desktop Navigation - Right */}
//             <Box sx={{ display: { xs: "none", md: "flex" }, ...menuStyles.rightSection }}>
//               {/* Auth Section */}
//               <Box sx={menuStyles.authSection}>
//                 <Auth />
//               </Box>

//               {/* Navigation Links */}
//               <Box sx={menuStyles.navigationLinks}>
//                 {navigationLinks.map((link, index) => (
//                   <Box key={link.to} sx={{ display: "flex", alignItems: "center" }}>
//                     <Link to={link.to} style={menuStyles.navLink}>
//                       {link.text}
//                     </Link>
//                     {index < navigationLinks.length - 1 && <Typography sx={menuStyles.separator}>|</Typography>}
//                   </Box>
//                 ))}
//               </Box>
//             </Box>

//             {/* Mobile Menu Toggle */}
//             <IconButton sx={menuStyles.mobileToggle} onClick={toggleMobileMenu}>
//               {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
//             </IconButton>
//           </Box>

//           {/* Mobile Menu */}
//           <Collapse in={mobileMenuOpen}>
//             <Box sx={menuStyles.mobileMenu}>
//               {/* Mobile Auth */}
//               <Box sx={{ marginBottom: 2 }}>
//                 <Auth />
//               </Box>

//               {/* Mobile Navigation Links */}
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//                 {navigationLinks.map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     style={{
//                       ...menuStyles.navLink,
//                       display: "block",
//                       textAlign: "center",
//                     }}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {link.text}
//                   </Link>
//                 ))}
//               </Box>
//             </Box>
//           </Collapse>
//         </AppBar>
//       </div>
//     </>
//   )
// }

// export default Menu
"use client"

import { AppBar, Box, Typography, IconButton, Collapse } from "@mui/material"
import { Link } from "react-router"
import { MenuIcon, DoorClosedIcon as CloseIcon, Upload, Files, Share2, Info, Music } from "lucide-react"
import { useState } from "react"
import Auth from "./user/Auth"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { menuStyles } from "../styles/MenuStyle"

const Menu = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const hasUser = Object.keys(currentUser).length > 0
  const backgroundStyle = menuStyles.backgroundStyle(hasUser)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navigationLinks = [
    { to: "/upload", text: "Upload File", icon: Upload },
    { to: "/files", text: "All Files", icon: Files },
    { to: "/allfiles", text: "Share Files", icon: Share2 },
    { to: "/", text: "About", icon: Info },
  ]

  return (
    <>
      <div style={backgroundStyle}>
        <AppBar position="fixed" sx={menuStyles.appBar}>
          <Box sx={menuStyles.container}>
            {/* Logo Section - Left */}
            <Box sx={menuStyles.logoSection}>
              {/* 🔄 שנה כאן את נתיב התמונה */}
              <img src="/placeholder.svg?height=40&width=40" alt="My Music Logo" style={menuStyles.logoImage} />
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Music size={20} style={{ color: "#ffa500" }} />
                <Typography sx={menuStyles.logoText}>My Music</Typography>
              </Box>
            </Box>

            {/* Desktop Navigation - Right */}
            <Box sx={menuStyles.rightSection}>
              {/* Navigation Links */}
              {navigationLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <Box key={link.to} sx={{ display: "flex", alignItems: "center" }}>
                    <Link to={link.to} style={{ textDecoration: "none" }}>
                      <Box sx={menuStyles.navItem}>
                        <IconComponent size={16} style={{ color: "#ffa500" }} />
                        <span>{link.text}</span>
                      </Box>
                    </Link>
                    {index < navigationLinks.length - 1 && <Typography sx={menuStyles.separator}>|</Typography>}
                  </Box>
                )
              })}

              {/* Separator before auth */}
              <Typography sx={menuStyles.separator}>|</Typography>

              {/* Auth Section */}
              <Auth />
            </Box>

            {/* Mobile Menu Toggle */}
            <IconButton sx={menuStyles.mobileToggle} onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
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
                      <Box sx={menuStyles.mobileNavItem}>
                        <IconComponent size={18} style={{ color: "#ffa500" }} />
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
      </div>
    </>
  )
}

export default Menu
