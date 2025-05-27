// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../store/store";
// import { useEffect } from "react";
// import { getSharedFiles, getUserFiles } from "../../store/filesSlice";
// import { Box, Card, Typography } from "@mui/material";
// import FileCard from "./FileCard";
// import { getFilesByUser } from "../../store/usersSlice";
// import Temp from "../Temp";
// import ShareFileCard from "./ShareFileCard";

// const AllFiles = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const files = useSelector((state: RootState) => state.files.list);
//     // const currentUser = useSelector((state: RootState) => state.user.currentUser);


//     useEffect(() => {
//         const fetchFiles = async () => {
//             // await dispatch(getUserFiles());
//             await dispatch(getSharedFiles());
//         }
//         fetchFiles();
//     }, [dispatch]);

//     return (<>
//         <Box
//             sx={{ display: 'flex', margin: 15 }}>
//             {files.map((file) => (
//                 <div key={file.id}>
//                 <ShareFileCard  fileName={file.name} id={file.id} createdBy={file.createdBy}/>
//                 {/* <Temp fileName={file.name}/> */}
//                 </div>
//             ))}
//         </Box>

//     </>)
// }
// export default AllFiles
"use client"

import type React from "react"

import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"
import { useEffect, useState, useMemo } from "react"
import { Box, TextField, Typography, Button, Chip, CircularProgress, InputAdornment } from "@mui/material"
import FileCard from "./FileCard"
import { getFilesByUser } from "../../store/usersSlice"
import { Folder, Search, SortByAlpha, FolderOpen } from "@mui/icons-material"
import { userFilesStyles } from "../../styles/UserFilesStyle"
import { getSharedFiles } from "../../store/filesSlice"
import ShareFileCard from "./ShareFileCard"

const AllFiles = () => {
  const dispatch = useDispatch<AppDispatch>()
  const files = useSelector((state: RootState) => state.files.list)
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const loading = useSelector((state: RootState) => state.files.loading)

  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

//   useEffect(() => {
//     const fetchFiles = async () => {
//       await dispatch(getFilesByUser(currentUser?.id || -1))
//     }
//     fetchFiles()
//   }, [dispatch, currentUser?.id])
    useEffect(() => {
        const fetchFiles = async () => {
            // await dispatch(getUserFiles());
            await dispatch(getSharedFiles());
        }
        fetchFiles();
    }, [dispatch]);
  // מיון וחיפוש הקבצים
  const filteredAndSortedFiles = useMemo(() => {
    const filtered = files.filter((file) => file.name.toLowerCase().includes(searchTerm.toLowerCase()))

    // מיון לפי שם
    filtered.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name, "he", { numeric: true })
      return sortOrder === "asc" ? comparison : -comparison
    })

    return filtered
  }, [files, searchTerm, sortOrder])

  const handleSortToggle = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  if (loading) {
    return (
      <Box sx={userFilesStyles.mainContainer}>
        <Box sx={userFilesStyles.loadingContainer}>
          <CircularProgress size={48} sx={userFilesStyles.loadingSpinner} />
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={userFilesStyles.mainContainer}>
      {/* Header Section */}
      <Box sx={userFilesStyles.headerContainer}>
        <Box sx={{ ...userFilesStyles.headerCard, ...userFilesStyles.fadeIn }}>
          <Box sx={{ ...userFilesStyles.headerContent, ...userFilesStyles.responsiveHeader }}>
            {/* Left - Title */}
            <Box sx={userFilesStyles.titleSection}>
              <Box component="h1" sx={userFilesStyles.headerTitle}>
                <Box sx={userFilesStyles.titleIcon}>
                  <Folder />
                </Box>
                Shared Files
              </Box>
              <Box sx={userFilesStyles.colorDots}>
                {[0, 1, 2, 3].map((index) => (
                  <Box key={index} sx={userFilesStyles.colorDot(index)} />
                ))}
              </Box>
            </Box>

            {/* Center - Stats and Sort */}
            <Box sx={{ ...userFilesStyles.centerSection, ...userFilesStyles.responsiveCenterSection }}>
              <Chip label={`${filteredAndSortedFiles.length} files`} sx={userFilesStyles.statsChip} />
              <Button onClick={handleSortToggle} sx={userFilesStyles.sortButton} startIcon={<SortByAlpha />}>
                {sortOrder === "asc" ? "A-Z" : "Z-A"}
              </Button>
            </Box>

            {/* Right - Search */}
            <Box sx={{ ...userFilesStyles.searchSection, ...userFilesStyles.responsiveSearchSection }}>
              <TextField
                fullWidth
                placeholder="Search files..."
                value={searchTerm}
                onChange={handleSearchChange}
                sx={userFilesStyles.searchField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: "#666" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Files Grid */}
      <Box sx={userFilesStyles.filesContainer}>
        {filteredAndSortedFiles.length === 0 ? (
          <Box sx={userFilesStyles.emptyStateContainer}>
            {searchTerm ? (
              <>
                <Search sx={userFilesStyles.emptyStateIcon} />
                <Typography sx={userFilesStyles.emptyStateText}>No files found for "{searchTerm}"</Typography>
                <Typography sx={userFilesStyles.emptyStateSubtext}>Try adjusting your search terms</Typography>
              </>
            ) : (
              <>
                <FolderOpen sx={userFilesStyles.emptyStateIcon} />
                <Typography sx={userFilesStyles.emptyStateText}>No files uploaded yet</Typography>
                <Typography sx={userFilesStyles.emptyStateSubtext}>Upload your first file to get started</Typography>
              </>
            )}
          </Box>
        ) : (
          <Box sx={{ ...userFilesStyles.filesGrid, ...userFilesStyles.slideIn }}>
            {filteredAndSortedFiles.map((file, index) => (
              <Box
                key={file.id}
                sx={{
                  ...userFilesStyles.fadeIn,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <ShareFileCard  fileName={file.name} createdBy={file.createdBy}/>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default AllFiles
