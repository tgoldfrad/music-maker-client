import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getSharedFiles, getUserFiles } from "../../store/filesSlice";
import { Box, Card, Typography } from "@mui/material";
import FileCard from "./FileCard";
import { getFilesByUser } from "../../store/usersSlice";
import Temp from "../Temp";
import ShareFileCard from "./ShareFileCard";

const AllFiles = () => {
    const dispatch = useDispatch<AppDispatch>();
    const files = useSelector((state: RootState) => state.files.list);
    // const currentUser = useSelector((state: RootState) => state.user.currentUser);


    useEffect(() => {
        const fetchFiles = async () => {
            // await dispatch(getUserFiles());
            await dispatch(getSharedFiles());
        }
        fetchFiles();
    }, [dispatch]);

    return (<>
        <Box
            sx={{ display: 'flex', margin: 15 }}>
            {files.map((file) => (
                <div key={file.id}>
                <ShareFileCard  fileName={file.name} id={file.id} createdBy={file.createdBy}/>
                <Temp fileName={file.name}/>
                </div>
            ))}
        </Box>

    </>)
}
export default AllFiles