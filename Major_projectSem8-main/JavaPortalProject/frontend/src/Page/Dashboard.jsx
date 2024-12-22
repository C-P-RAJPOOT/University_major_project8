import React, { useEffect, useState } from 'react';
import SideBar from "../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./css/dbrd.css";



export default function Dashboard() {
  const [svgData, setSvgData] = useState(null);

  // useEffect(() => {
  //   axios.get('http://192.168.1.39:5000/kmeans')
  //     .then(response => {

  //       console.log(response);
        
  //       setSvgData(response.data.kmean_svg)
    
        
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <div className="bgi">
          <Typography variant="">
            <>
              <h1>
                SFAP (Student Faculty Assesment Portal)
              </h1>



              {/* <b>
                <h3 className="our-team-heading">Our Team</h3>
              </b> */}
              {/* <div className="dashboard-flex-container">
                <div className="dashboard-flex-item">
                  <div className="dashboard-round-image" id="shiam" />
                  <h2 className="dashboard-h2">Chandrapal </h2>
                  <h3 className="dashboard-h3">Front-End Development</h3>
                </div>
                
                <div className="dashboard-flex-item">
                  <div className="dashboard-round-image"  id="aniket"/>
                  <h2 className="dashboard-h2">Aniket Kumar</h2>
                  <h3 className="dashboard-h3">Back-End Development</h3>
                </div>
                <div className="dashboard-flex-item">
                  <div className="dashboard-round-image" id="amisha"></div>                 
                  <h2 className="dashboard-h2">Amisha Kumar</h2>
                  <h3 className="dashboard-h3">Database Administration</h3>
                </div>
              </div> */}

              {/* <div>
                {svgData && <div dangerouslySetInnerHTML={{ __html: svgData }} />}
              </div> */}
              <footer className="dashboard-footer"></footer>
            </>
          </Typography>
        </div>
      </Box>
    </Box>
  );
}
