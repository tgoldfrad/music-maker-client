
import React, { useEffect, useState } from 'react';
import { Card, CardActions, Typography, Box } from '@mui/material';
import DownloadFile from './DownloadFile';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { getUserById } from '../../store/usersSlice';


const ShareFileCard = ({ id, fileName,createdBy }: { id: number; fileName: string; createdBy:number}) => {

    const dispatch = useDispatch<AppDispatch>();
    //const files = useSelector((state: RootState) => state.files.list);
  const [hover, setHover] = useState(false);
  const fileNameArr = fileName.split('.');
  const type = fileNameArr[fileNameArr.length - 1];
  const imageSrc = type === 'pdf'
    // ? "https://cdn-icons-png.flaticon.com/128/136/136522.png"
    ? "../../src/assets/‏‏pdf.PNG"

    : "../../src/assets/for‏‏mp3.PNG";

  // : "https://cdn-icons-png.flaticon.com/128/9496/9496646.png"
  const isHebrew = /^[\u0590-\u05FF]+$/.test(fileName); // בדיקה אם הטקסט בעברית
  const [isExpanded, setIsExpanded] = useState(false);

//    let user = "";
//   const fetchFiles = async () => {
//     // await dispatch(getUserFiles());
//     createdByName = await dispatch(getUserById());
// }
// fetchFiles();
// useEffect(() => {
//     // קריאה לפונקציה getUserById
//     const user = dispatch(getUserById(createdBy));
// }, [dispatch, createdBy]);
// const res = dispatch(getUserById(createdBy));
 let createdByName = "";
useEffect(() => {
    const fetchUser = async () => {
        const res = await dispatch(getUserById(createdBy));
        // createdByName = res.payload.name;/////////////////////////////////////////////////////////
    }
    fetchUser();
}, [dispatch, createdBy]);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        maxWidth: 100,
        borderRadius: 2,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // paddingRight: '10px',
        marginRight: '10px',
        backgroundColor: hover ? 'rgba(0, 0, 0, 0.04)' : 'white',
        transition: 'background-color 0.3s',
        boxShadow: hover ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <img
        src={imageSrc}
        alt="File Icon"
        style={{ width: '100%', height: 'auto', borderRadius: '2px 2px 0 0' }}
      />
      {/* <Typography variant="body1" component="div" noWrap sx={{ padding: '10px' }}>
        {fileName}
      </Typography> */}
      <Typography
        variant="body1"
        component="div"
        onClick={toggleText} 
        sx={{
          padding: '10px',
          overflow: isExpanded ? 'visible' : 'hidden',
          textOverflow: isExpanded ? 'clip' : 'ellipsis',
          whiteSpace: isExpanded ? 'normal' : 'nowrap',
          cursor: 'pointer',
          display: 'block', // לוודא שהטקסט מתנהג כמו בלוק
          maxWidth: '100%', // הגדר את רוחב המקסימום
          direction: isHebrew ? 'ltr' : 'rtl' // הגדרת כיוון הטקסט בהתאם לשפה
        }}
      >
        {fileName}
        {createdByName}
      </Typography>
      {hover && (
        <Box sx={{ position: 'absolute', top: 3, right: 10, display: 'flex', gap: '0' }}>
          <CardActions sx={{ display: 'flex', flexDirection: 'row', padding: 0, margin: 0 }}>

            <DownloadFile fileName={fileName} />
          </CardActions>
        </Box>
      )}
    </Box>
  );
};

export default ShareFileCard;