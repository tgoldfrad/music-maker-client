
// import React, { useEffect, useState } from 'react';
// import { Card, CardActions, Typography, Box } from '@mui/material';
// import DownloadFile from './DownloadFile';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../store/store';
// import { getUserById } from '../../store/usersSlice';


// const ShareFileCard = ({ id, fileName,createdBy }: { id: number; fileName: string; createdBy:number}) => {

//     const dispatch = useDispatch<AppDispatch>();
//     //const files = useSelector((state: RootState) => state.files.list);
//   const [hover, setHover] = useState(false);
//   const fileNameArr = fileName.split('.');
//   const type = fileNameArr[fileNameArr.length - 1];
//   const imageSrc = type === 'pdf'
//     // ? "https://cdn-icons-png.flaticon.com/128/136/136522.png"
//     ? "../../src/assets/‏‏pdf.PNG"

//     : "../../src/assets/for‏‏mp3.PNG";

//   // : "https://cdn-icons-png.flaticon.com/128/9496/9496646.png"
//   const isHebrew = /^[\u0590-\u05FF]+$/.test(fileName); // בדיקה אם הטקסט בעברית
//   const [isExpanded, setIsExpanded] = useState(false);

// //    let user = "";
// //   const fetchFiles = async () => {
// //     // await dispatch(getUserFiles());
// //     createdByName = await dispatch(getUserById());
// // }
// // fetchFiles();
// // useEffect(() => {
// //     // קריאה לפונקציה getUserById
// //     const user = dispatch(getUserById(createdBy));
// // }, [dispatch, createdBy]);
// // const res = dispatch(getUserById(createdBy));
//  let createdByName = "";
// useEffect(() => {
//     const fetchUser = async () => {
//         const res = await dispatch(getUserById(createdBy));
//         // createdByName = res.payload.name;/////////////////////////////////////////////////////////
//     }
//     fetchUser();
// }, [dispatch, createdBy]);

//   const toggleText = () => {
//     setIsExpanded(!isExpanded);
//   };
//   return (
//     <Box
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       sx={{
//         maxWidth: 100,
//         borderRadius: 2,
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         // paddingRight: '10px',
//         marginRight: '10px',
//         backgroundColor: hover ? 'rgba(0, 0, 0, 0.04)' : 'white',
//         transition: 'background-color 0.3s',
//         boxShadow: hover ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'
//       }}
//     >
//       <img
//         src={imageSrc}
//         alt="File Icon"
//         style={{ width: '100%', height: 'auto', borderRadius: '2px 2px 0 0' }}
//       />
//       {/* <Typography variant="body1" component="div" noWrap sx={{ padding: '10px' }}>
//         {fileName}
//       </Typography> */}
//       <Typography
//         variant="body1"
//         component="div"
//         onClick={toggleText} 
//         sx={{
//           padding: '10px',
//           overflow: isExpanded ? 'visible' : 'hidden',
//           textOverflow: isExpanded ? 'clip' : 'ellipsis',
//           whiteSpace: isExpanded ? 'normal' : 'nowrap',
//           cursor: 'pointer',
//           display: 'block', // לוודא שהטקסט מתנהג כמו בלוק
//           maxWidth: '100%', // הגדר את רוחב המקסימום
//           direction: isHebrew ? 'ltr' : 'rtl' // הגדרת כיוון הטקסט בהתאם לשפה
//         }}
//       >
//         {fileName}
//         {createdByName}
//       </Typography>
//       {hover && (
//         <Box sx={{ position: 'absolute', top: 3, right: 10, display: 'flex', gap: '0' }}>
//           <CardActions sx={{ display: 'flex', flexDirection: 'row', padding: 0, margin: 0 }}>

//             <DownloadFile fileName={fileName} />
//           </CardActions>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ShareFileCard;
// "use client"

// import { useEffect, useState } from "react"
// import { Box, Typography } from "@mui/material"
// import {
//   InsertDriveFile,
//   PictureAsPdf,
//   AudioFile,
//   Image,
//   VideoFile,
//   Description,
//   Archive,
//   Code,
// } from "@mui/icons-material"
// import DownloadFile from "./DownloadFile"
// import DeleteFile from "./DeleteFile"
// import { fileCardStyles } from "../../styles/FileCardStyle"
// import { getUserById } from "../../store/usersSlice"
// import { AppDispatch, RootState } from "../../store/store"
// import { useDispatch, useSelector } from "react-redux"

// const ShareFileCard = ({ id, fileName,createdBy }: { id: number; fileName: string ,createdBy:number}) => {
//   const [hover, setHover] = useState(false)
//   const [isExpanded, setIsExpanded] = useState(false)

//   const fileNameArr = fileName.split(".")
//   const type = fileNameArr[fileNameArr.length - 1];
//   const isHebrew = /^[\u0590-\u05FF]+$/.test(fileName);
//   const dispatch = useDispatch<AppDispatch>();
//   const user = useSelector((state: RootState) => state.users.selectedUser);
  
//   useEffect(() => {
//     // קריאה לפונקציה כדי לקבל את המשתמש
//     dispatch(getUserById(createdBy));
// }, [dispatch, createdBy]);

//   const toggleText = () => {
//     setIsExpanded(!isExpanded)
//   }

//   const getFileIcon = () => {
//     const iconSize = "4rem" // הגדלת האייקון
//     const iconProps = { sx: { fontSize: iconSize, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" } }

//     switch (type.toLowerCase()) {
//       case "pdf":
//         return <PictureAsPdf {...iconProps} sx={{ ...iconProps.sx, color: "#091128" }} />
//       case "mp3":
//       case "wav":
//       case "flac":
//       case "aac":
//         return <AudioFile {...iconProps} sx={{ ...iconProps.sx, color: "#091128" }} />
//       // case "jpg":
//       // case "jpeg":
//       // case "png":
//       // case "gif":
//       // case "webp":
//       // case "svg":
//       //   return <Image {...iconProps} sx={{ ...iconProps.sx, color: "#091128" }} />
//       // case "mp4":
//       // case "avi":
//       // case "mov":
//       // case "wmv":
//       //   return <VideoFile {...iconProps} sx={{ ...iconProps.sx, color: "#091128" }} />
//       // case "doc":
//       // case "docx":
//       // case "txt":
//       //   return <Description {...iconProps} sx={{ ...iconProps.sx, color: "#091128" }} />
//       // case "zip":
//       // case "rar":
//       // case "7z":
//       //   return <Archive {...iconProps} sx={{ ...iconProps.sx, color: "#091128" }} />
//       // case "js":
//       // case "ts":
//       // case "html":
//       // case "css":
//       // case "json":
//       //   return <Code {...iconProps} sx={{ ...iconProps.sx, color: "#091128" }} />
//       default:
//         return <InsertDriveFile {...iconProps} sx={{ ...iconProps.sx, color: "#091128" }} />
//     }
//   }

//   return (
//     <Box
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       sx={{
//         ...fileCardStyles.cardContainer(hover),
//         ...fileCardStyles.shimmerEffect,
//         ...fileCardStyles.glowEffect(hover),
//       }}
//     >
//       {/* File Icon Container */}
//       <Box sx={fileCardStyles.iconContainer(hover)}>{getFileIcon()}</Box>

//       {/* File Name */}
//       <Box sx={fileCardStyles.fileNameContainer}>
//         <Typography onClick={toggleText} sx={fileCardStyles.fileName(isExpanded, isHebrew)} title={fileName}>
//           {fileName}
//         </Typography>
//       </Box>
//       <Box>
//           {"shared by:"+user?.name}
//       </Box>

//       {/* Action Buttons */}
//       <Box sx={fileCardStyles.actionsContainer(hover)}>
//         <DownloadFile fileName={fileName} />
//       </Box>
//     </Box>
//   )
// }

// export default ShareFileCard;

"use client"

import { useEffect, useState } from "react"
import { Box, Typography, CircularProgress } from "@mui/material"
import {
  InsertDriveFile,
  PictureAsPdf,
  AudioFile,
  Image,
  VideoFile,
  Description,
  Archive,
  Code,
  Person,
  Share,
} from "@mui/icons-material"
import DownloadFile from "./DownloadFile"
import { fileCardStyles } from "../../styles/FileCardStyle"
import { getUserById } from "../../store/usersSlice"
import type { AppDispatch, RootState } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"

const ShareFileCard = ({ fileName, createdBy }: {fileName: string; createdBy: number }) => {
  const [hover, setHover] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [createdByName, setCreatedByName] = useState<string>("")
  const [loadingUser, setLoadingUser] = useState(true)

  const fileNameArr = fileName.split(".")
  const type = fileNameArr[fileNameArr.length - 1]
  const isHebrew = /^[\u0590-\u05FF]+$/.test(fileName)
  const dispatch = useDispatch<AppDispatch>()
   const user = useSelector((state: RootState) => state.users.selectedUser);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoadingUser(true)
        const res = await dispatch(getUserById(createdBy))
        // if (res.payload && res.payload.name) {
        //   setCreatedByName(res.payload.name)
        // } else {
        //   setCreatedByName("Unknown User")
        // }
      } catch (error) {
        console.error("Error fetching user:", error)
        setCreatedByName("Unknown User")
      } finally {
        setLoadingUser(false)
      }
    }
    fetchUser()
  }, [dispatch, createdBy])

  const toggleText = () => {
    setIsExpanded(!isExpanded)
  }

  const getFileIcon = () => {
    const iconSize = "3.5rem"
    const iconProps = { sx: { fontSize: iconSize, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" } }

    switch (type.toLowerCase()) {
      case "pdf":
        return <PictureAsPdf {...iconProps} sx={{ ...iconProps.sx, color: "#091128" }} />
      case "mp3":
      case "wav":
      case "flac":
      case "aac":
        return <AudioFile {...iconProps} sx={{ ...iconProps.sx, color: "#091128" }} />
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "webp":
      case "svg":
        return <Image {...iconProps} sx={{ ...iconProps.sx, color: "white" }} />
      case "mp4":
      case "avi":
      case "mov":
      case "wmv":
        return <VideoFile {...iconProps} sx={{ ...iconProps.sx, color: "white" }} />
      case "doc":
      case "docx":
      case "txt":
        return <Description {...iconProps} sx={{ ...iconProps.sx, color: "white" }} />
      case "zip":
      case "rar":
      case "7z":
        return <Archive {...iconProps} sx={{ ...iconProps.sx, color: "white" }} />
      case "js":
      case "ts":
      case "html":
      case "css":
      case "json":
        return <Code {...iconProps} sx={{ ...iconProps.sx, color: "white" }} />
      default:
        return <InsertDriveFile {...iconProps} sx={{ ...iconProps.sx, color: "white" }} />
    }
  }

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        ...fileCardStyles.cardContainer(hover),
        ...fileCardStyles.shimmerEffect,
        ...fileCardStyles.glowEffect(hover),
      }}
    >
      {/* Shared Badge */}
      {/* <Box sx={fileCardStyles.sharedBadge}>
        <Share sx={{ fontSize: "0.7rem" }} />
        Shared
      </Box> */}

      {/* File Icon Container */}
      <Box sx={fileCardStyles.iconContainer(hover)}>{getFileIcon()}</Box>

      {/* File Name */}
      <Box sx={fileCardStyles.fileNameContainer}>
        <Typography onClick={toggleText} sx={fileCardStyles.fileName(isExpanded, isHebrew)} title={fileName}>
          {fileName}
        </Typography>
      </Box>

      {/* Owner Information */}
      <Box sx={fileCardStyles.ownerContainer}>
        {loadingUser ? (
          <Box sx={fileCardStyles.loadingOwner}>
            <CircularProgress size={12} sx={{ color: "#5aa454" }} />
            <Typography sx={{ fontSize: "0.7rem", color: "#999" }}>Loading...</Typography>
          </Box>
        ) : (
          <Box sx={fileCardStyles.ownerInfo}>
            <Person sx={fileCardStyles.ownerIcon} />
            <Typography sx={fileCardStyles.ownerLabel}>Shared by</Typography>
            <Typography sx={fileCardStyles.ownerName} title={user?.name}>
              {user?.name}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Action Buttons - רק הורדה */}
      <Box sx={fileCardStyles.actionsContainer(hover)}>
        <DownloadFile fileName={fileName} />
      </Box>
    </Box>
  )
}

export default ShareFileCard
