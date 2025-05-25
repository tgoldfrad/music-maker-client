import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getUserFiles } from "../../store/filesSlice";
import { Box, Card, Typography } from "@mui/material";
import FileCard from "./FileCard";
import { getFilesByUser } from "../../store/usersSlice";
import Temp from "../Temp";

const UserFiles = () => {
    const dispatch = useDispatch<AppDispatch>();
    const files = useSelector((state: RootState) => state.files.list);
    const currentUser = useSelector((state: RootState) => state.user.currentUser);


    useEffect(() => {
        const fetchFiles = async () => {
            // await dispatch(getUserFiles());
            await dispatch(getFilesByUser(currentUser?.id || -1));
        }
        fetchFiles();
    }, [dispatch]);

    return (<>

        {/* <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
            }}
        >

            <Box sx={{ width: '15%', padding: '10px' }}>
                <Typography variant="h6">My songs List:</Typography>
                {files.map((file) => (
                <Card key={file.id} sx={{ marginBottom: '5px', border: '1px solid white' }}>
                    <FileCard id={file.id} fileName={file.name}/>
                </Card>

                    // <Link key={file.id} to={`/recipes/${file.id}`} style={{ textDecoration: 'none' }}>
                    //     <Card sx={{ marginBottom: '5px', border: '1px solid white' }}>
                    //         {r.title}
                    //     </Card>
                    // </Link>

                ))}
            </Box>
        </Box> */}
        <Box
            sx={{ display: 'flex', margin: 15 }}>
            {files.map((file) => (
                <div key={file.id}>
                <FileCard  fileName={file.name} id={file.id} />
                <Temp fileName={file.name}/>
                </div>
            ))}
        </Box>

    </>)
}
export default UserFiles