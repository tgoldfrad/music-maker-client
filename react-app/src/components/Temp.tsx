import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import apiClient from "../apiClient";
import axios from "axios";

const Temp = ({fileName }: {fileName: string })=>{
    // const dispatch = useDispatch<AppDispatch>();
    const currentUser = useSelector((state:RootState)=>state.user.currentUser);
    const convertTo = async ()=>{
        
        try {
           await axios.post(`https://music-maker-server.onrender.com/api/file/temp`, null, {
                params: {
                    userId: currentUser.id,
                    fileName: fileName,
                }
            });

            console.log('Success:');
        } catch (error) {
            console.error('Error:', error);
        }
        // dispatch(convert({currentUser?.id||0,'uuu'}));
    }
    return(<>
    <button onClick={convertTo}>to convert</button>
    </>)
    // const [file, setFile] = useState<File | null>(null);

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedFile = event.target.files?.[0];
    //     if (selectedFile) {
    //         setFile(selectedFile);
    //     }
    // };

    // const handleUpload = () => {
    //     if (file) {
    //         const formData = new FormData();
    //         formData.append('file', file);

    //         // כאן תוכל לשלוח את הקובץ לשרת שלך
    //         fetch('/upload', {
    //             method: 'POST',
    //             body: formData,
    //         })
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .catch(error => console.error('Error:', error));
    //     }
    // };

    // const handleDownload = () => {
    //     // כאן תוכל לשים את ה-URL של הקובץ להורדה
    //     const url = 'C:/Users/User/Downloads';
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = file?.name||''; // שם הקובץ להורדה
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    // };
    // return (
    //     <div>
    //         <input type="file" onChange={handleFileChange} />
    //         <button onClick={handleUpload}>Upload File</button>
    //         <div>
    //         <button onClick={handleDownload}>Download File</button>
    //     </div>
    //     </div>
        
    // );
};

export default Temp