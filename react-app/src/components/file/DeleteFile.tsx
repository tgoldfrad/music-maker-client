// import { IconButton } from "@mui/material"
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../store/store";
// import { deleteFile } from "../../store/filesSlice";
// ///to do delete from s3///////////////
// const DeleteFile = ({id}:{id:number})=>{

//     const dispatch = useDispatch<AppDispatch>();
    
//     const handleDelete = async()=>{
//         try {
//             const res = await dispatch(deleteFile(id));
//         } catch (e) {
//             console.log(e);
//         }
//     }
//     return(<>
//     <div style={{margin: 0}}>
//           <IconButton size="small" onClick={handleDelete}>
//             <DeleteIcon />
//           </IconButton>
//           </div>
//     </>)
// }
// export default DeleteFile
"use client"

import { IconButton, Box } from "@mui/material"
import { DeleteOutline } from "@mui/icons-material" // אייקון יותר יפה
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store/store"
import { deleteFile } from "../../store/filesSlice"
import { actionButtonStyles } from "../../styles/FileCardStyle"

const DeleteFile = ({ id }: { id: number }) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleDelete = async () => {
    try {
      const res = await dispatch(deleteFile(id))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box sx={actionButtonStyles.actionContainer}>
      <IconButton sx={actionButtonStyles.deleteButton} onClick={handleDelete}>
        <DeleteOutline />
      </IconButton>
    </Box>
  )
}

export default DeleteFile
