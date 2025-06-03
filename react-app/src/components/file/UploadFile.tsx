// import React, { ChangeEvent, useState } from "react";
// import { Box, Button, Typography } from "@mui/material";
// import axios from "axios";
// import { FileType } from "../../types/FileType";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../store/store";
// import { addFile, convertFile } from "../../store/filesSlice";
// import apiClient from "../../apiClient";
// import Swal from "sweetalert2";

// const UploadFile = () => {
//     const [file, setFile] = useState<File | null>(null);
//     const [message, setMessage] = useState<string>('');
//     const dispatch = useDispatch<AppDispatch>();
//     const currentUser = useSelector((state: RootState) => state.user.currentUser);
//     let isShared: boolean = false;
//     let fileNameToConvert: string | undefined;


//     const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files[0]) {
//             setFile(event.target.files[0]);
//         }
//     };

//     const handleDrop = (event: React.DragEvent) => {
//         event.preventDefault();
//         event.stopPropagation();
//         const droppedFile = event.dataTransfer.files?.[0];
//         if (droppedFile) {
//             setFile(droppedFile);
//         }
//     };

//     const handleDragOver = (event: React.DragEvent) => {
//         event.preventDefault();
//         event.stopPropagation();
//     };


//     const UploadFile = async (fileToUpload:File|null) => {

//         if (!fileToUpload) {
//             setMessage('Please select a file to upload');
//             return;
//         }






//         try {
//             // Get pre-signed URL from the server
//             const response = await apiClient.get('file/presigned-url', {
//                 params: {
//                     userId: currentUser.id,
//                     fileName: fileToUpload.name,
//                     contentType: fileToUpload.type,
//                 }
//                 //   userName: 'your-username' // Replace with the actual username
//             }
//             );
//             console.log(response);

//             const url = response.data.url;
//             console.log(url);

//             // Upload the file to S3 using the pre-signed URL
//             const uploadResponse = await axios.put(url, fileToUpload, {
//                 headers: {
//                     'Content-Type': fileToUpload.type
//                 }
//             });

//             if (uploadResponse.status === 200) {
//                 setMessage('File uploaded successfully');
//             } else {
//                 setMessage('Failed to upload file');
//             }
//             //add file to db
//             console.log(currentUser);




//             const response2 = await apiClient.get('file/download-url', {
//                 params: {
//                     userId: currentUser.id,
//                     fileName: fileToUpload.name
//                 },
//                 // params: { fileName: fileName},
//             });

//             const presignedUrl = response2.data.url;
//             console.log("------------------url----------");
//             console.log(presignedUrl);





//             const newFile: Partial<FileType> = {
//                 createdBy: currentUser.id,
//                 name: fileToUpload.name,
//                 type: fileToUpload.type,
//                 size: fileToUpload.size,
//                 path: presignedUrl,
//                 isUser: isShared
//             }
//             console.log(newFile);
            
//             const res = await dispatch(addFile(newFile));
// console.log(res);


//             ///////////////////////////////////////////////////הורדה אוטומטית של הקובץ שהעלו

//             console.log("Added file");
//             //return file.name as string;
//             return newFile;

//         } catch (error) {
//             console.error('Error uploading file:', error);
//             setMessage('Error uploading file');

//         }

//     };

//     const handleUpload = async () => {
//         Swal.fire({
//             title: 'Share File',
//             text: 'Do you want to share this file with others?',
//             icon: 'info', // או כל אייקון אחר שתרצה
//             showCancelButton: true,
//             confirmButtonText: 'Yes, share it!',
//             cancelButtonText: 'No, keep it private'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 isShared = true;
//                 // אם המשתמש לחץ על "Yes, share it!"
//                 console.log('User wants to share the file');
//                 // כאן תוכל להוסיף את הקוד שברצונך להריץ במקרה של שיתוף
//             } else {
//                 // אם המשתמש לחץ על "No, keep it private"
//                 console.log('User does not want to share the file');
//                 // כאן תוכל להוסיף את הקוד שברצונך להריץ במקרה של שמירה פרטית
//             }
//         })//.then()
//         const fileToConvert: Partial<FileType> | undefined = await UploadFile(file);
//         //fileNameToConvert=await UploadFile();
//         const action = await dispatch(convertFile(fileToConvert));
//         if (convertFile.fulfilled.match(action)) {
//             // action.payload הוא Blob של הקובץ
//             const blob = action.payload;
//             const fileNamePrefix = fileToConvert?.name?.split('.')[0];
//             // יצירת קובץ מסוג File
//             const wavFile = new File([blob], fileNamePrefix + '.wav', { type: 'audio/wav' });
//             const url = URL.createObjectURL(wavFile);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = wavFile.name;
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
//   URL.revokeObjectURL(url);
//             //setFile(wavFile);
//             //console.log(file);
            
//             await UploadFile(wavFile);
//             // convertFile(fileNameToConvert);
//         }
//     }
//     return (
//         <div>
//             <Box
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="center"
//                 alignItems="center"
//                 height="90vh" // שינוי הגובה כדי להגביה את הקומפוננטה
//                 marginTop="20px" // הוספת רווח עליון
//             >
//                 <Box
//                     onDrop={handleDrop}
//                     onDragOver={handleDragOver}
//                     sx={{
//                         border: '2px dashed #ccc',
//                         // padding: '20px',
//                         // width: '300px',
//                         padding: '40px', // הגדלת ה-padding
//                         width: '400px', // אפשר להגדיל גם את הרוחב
//                         textAlign: 'center',
//                         '&:hover': {
//                             borderColor: '#007bff',
//                         },
//                     }}
//                 >
//                     <Typography variant="body1" gutterBottom>
//                         Drag the file here or click to select a file
//                     </Typography>
//                     <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="file-upload" />
//                     <label htmlFor="file-upload">
//                         <Button variant="contained" component="span" sx={{ marginTop: 4 }}>
//                             select file
//                         </Button>
//                     </label>
//                     {file && <Typography variant="body2" color="textSecondary"> {file.name}</Typography>}
//                 </Box>
//                 {/* <h2>Upload Image to AWS S3</h2>
//           <input type="file" onChange={handleFileChange} /> */}
//                 <Button onClick={handleUpload} sx={{ marginTop: 1 }}>upload</Button>
//                 <p>{message}</p>
//             </Box>
//         </div>
//     );
// };

// export default UploadFile
"use client"

"use client"

import type React from "react"
import { type ChangeEvent, useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import axios from "axios"
import { CloudUpload, InsertDriveFile, Upload } from "@mui/icons-material"
import type { FileType } from "../../types/FileType"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"
import { addFile, convertFile } from "../../store/filesSlice"
import apiClient from "../../apiClient"
import Swal from "sweetalert2"
import { uploadFileStyles } from "../../styles/FileUploadStyle"

const UploadFile = () => {
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState<string>("")
  const dispatch = useDispatch<AppDispatch>()
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  let isShared = false
  let fileNameToConvert: string | undefined

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()
    const droppedFile = event.dataTransfer.files?.[0]
    if (droppedFile) {
      setFile(droppedFile)
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const UploadFile = async (fileToUpload: File | null) => {
    if (!fileToUpload) {
      setMessage("Please select a file to upload")
      return
    }

    try {
      // Get pre-signed URL from the server
      const response = await apiClient.get("file/presigned-url", {
        params: {
          userId: currentUser.id,
          fileName: fileToUpload.name,
          contentType: fileToUpload.type,
        },
        //   userName: 'your-username' // Replace with the actual username
      })
      console.log(response)

      const url = response.data.url
      console.log(url)

      // Upload the file to S3 using the pre-signed URL
      const uploadResponse = await axios.put(url, fileToUpload, {
        headers: {
          "Content-Type": fileToUpload.type,
        },
      })

      if (uploadResponse.status === 200) {
        setMessage("File uploaded successfully")
      } else {
        setMessage("Failed to upload file")
      }
      //add file to db
      console.log(currentUser)

      const response2 = await apiClient.get("file/download-url", {
        params: {
          userId: currentUser.id,
          fileName: fileToUpload.name,
        },
        // params: { fileName: fileName},
      })

      const presignedUrl = response2.data.url
      console.log("------------------url----------")
      console.log(presignedUrl)

      const newFile: Partial<FileType> = {
        createdBy: currentUser.id,
        name: fileToUpload.name,
        type: fileToUpload.type,
        size: fileToUpload.size,
        path: presignedUrl,
        isUser: isShared,
      }
      console.log(newFile)

      const res = await dispatch(addFile(newFile))
      console.log(res)

      ///////////////////////////////////////////////////הורדה אוטומטית של הקובץ שהעלו

      console.log("Added file")
      //return file.name as string;
      return newFile
    } catch (error) {
      console.error("Error uploading file:", error)
      setMessage("Error uploading file")
    }
  }

  const handleUpload = async () => {

    Swal.fire({
      title: "Share File",
      text: "Do you want to share this file with others?",
      icon: "info", // או כל אייקון אחר שתרצה
      showCancelButton: true,
      confirmButtonText: "Yes, share it!",
      cancelButtonText: "No, keep it private",
    }).then((result) => {
      if (result.isConfirmed) {
        isShared = true
        // אם המשתמש לחץ על "Yes, share it!"
        console.log("User wants to share the file")
        // כאן תוכל להוסיף את הקוד שברצונך להריץ במקרה של שיתוף
      } else {
        // אם המשתמש לחץ על "No, keep it private"
        console.log("User does not want to share the file")
        // כאן תוכל להוסיף את הקוד שברצונך להריץ במקרה של שמירה פרטית
      }
    }) //.then()
    const fileToConvert: Partial<FileType> | undefined = await UploadFile(file)
    //fileNameToConvert=await UploadFile();
    const action = await dispatch(convertFile(fileToConvert))
    console.log(action);
    
    if (convertFile.fulfilled.match(action)) {
      // action.payload הוא Blob של הקובץ
      const blob = action.payload
      const fileNamePrefix = fileToConvert?.name?.split(".")[0]
      // יצירת קובץ מסוג File
      const wavFile = new File([blob], fileNamePrefix + ".wav", { type: "audio/wav" })
      const url = URL.createObjectURL(wavFile)
      const a = document.createElement("a")
      a.href = url
      a.download = wavFile.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      //setFile(wavFile);
      //console.log(file);

      const wavRes = await UploadFile(wavFile);
      console.log("wav result");
      console.log(wavRes);

      
      // convertFile(fileNameToConvert);
    }
  }

  return (
    <Box sx={uploadFileStyles.mainContainer}>
      <Box sx={uploadFileStyles.uploadCard}>
        {/* Header */}
        <Box sx={uploadFileStyles.cardHeader}>
          <Box component="h1" sx={uploadFileStyles.headerTitle}>
            <Box sx={uploadFileStyles.titleIcon}>
              <CloudUpload />
            </Box>
            File Upload & Convert
          </Box>
          <Box sx={uploadFileStyles.colorDots}>
            {[0, 1, 2, 3].map((index) => (
              <Box key={index} sx={uploadFileStyles.colorDot(index)} />
            ))}
          </Box>
        </Box>

        {/* Content */}
        <Box sx={uploadFileStyles.cardContent}>
          {/* Drop Zone */}
          <Box sx={uploadFileStyles.dropZone} onDrop={handleDrop} onDragOver={handleDragOver}>
            <CloudUpload sx={uploadFileStyles.dropZoneIcon} />
            <Typography sx={uploadFileStyles.dropZoneText}>Drag the file here or click to select a file</Typography>

            <input type="file" onChange={handleFileChange} style={{ display: "none" }} id="file-upload" />
            <label htmlFor="file-upload">
              <Button component="span" sx={uploadFileStyles.selectFileButton}>
                <Upload sx={{ fontSize: "1rem" }} />
                Select File
              </Button>
            </label>

            {/* Selected File Display - inside drop zone */}
            {file && (
              <Box sx={uploadFileStyles.selectedFileInDrop}>
                <InsertDriveFile sx={uploadFileStyles.fileIconInDrop} />
                <Typography sx={uploadFileStyles.fileNameInDrop}>{file.name}</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* Action Buttons - outside the card */}
      <Box sx={uploadFileStyles.actionButtonsContainer}>
        <Button disabled={file==null} sx={uploadFileStyles.uploadButton} onClick={handleUpload}>
          <CloudUpload sx={{ fontSize: "1rem" }} />
          Upload & Convert
        </Button>
      </Box>

      {/* Message Display */}
      {message && (
        <Box sx={uploadFileStyles.messageContainer}>
          <Typography sx={uploadFileStyles.messageText}>{message}</Typography>
        </Box>
      )}
    </Box>
  )
}

export default UploadFile
