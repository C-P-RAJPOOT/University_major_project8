import React, { useState } from 'react';
import SideBar from "../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./css/dbrd.css";

const Performance = () => {
    const [selectedTag, setSelectedTag] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleTagChange = (event) => {
        setSelectedTag(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Set the image URL based on the selected tag
        switch (selectedTag) {
            case 'image1':
                setImageUrl('http://127.0.0.1:5000/kmeans_image');
                break;
            case 'image2':
                setImageUrl('http://127.0.0.1:5000/boxplot');
                break;
            case 'image3':
                setImageUrl('http://127.0.0.1:5000/confusion_matrix');
                break;
            case 'image4':
                setImageUrl('http://127.0.0.1:5000/total_score_boxplot');
                break;
            default:
                setImageUrl('');
                break;
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
                <div className="bgi">
                    <Typography variant="">
                        <>
                            <h1>Performance</h1>
                            <form onSubmit={handleSubmit}>
                                <select value={selectedTag} onChange={handleTagChange} style={{
                                    padding: '10px',
                                    fontSize: '16px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'
                                }}>
                                    <option value="">Select an image</option>
                                    <option value="image1">Image 1</option>
                                    <option value="image2">Image 2</option>
                                    <option value="image3">Image 3</option>
                                    <option value="image4">Image 4</option>
                                </select>
                                <button type="submit" style={{
                                    backgroundColor: '#4CAF50', /* Green */
                                    border: 'none',
                                    color: 'white',
                                    padding: '10px 20px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: '16px',
                                    margin: '4px 2px',
                                    cursor: 'pointer',
                                    borderRadius: '12px'
                                }}>Submit</button>
                            </form>
                            {imageUrl && <img src={imageUrl} alt="Selected" style={{ width: '100%', height: '500px' }} />}

                        </>
                    </Typography>
                </div>
            </Box>
        </Box>
    );
};

export default Performance;