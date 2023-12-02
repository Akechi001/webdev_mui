import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import {Stack, Grid, Box, Typography, FormControlLabel, Switch} from "@mui/material";
import DesignCard from "./design-card";

function App() {
  return (
      <Stack direction={"column"}>
          <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10vh",
                marginTop: "30px"
            }}>
                <Stack direction="row" spacing={100}>
                    <Typography fontSize={"30px"} fontWeight={"bold"}>
                        Social Media Dashboard
                        <Typography color={"grey"} fontWeight={"bold"}>
                            {""}
                            Total Followers : 23,004
                        </Typography>
                    </Typography>
                    <FormControlLabel
                        value="start"
                        control={<Switch />}
                        label="Dark Mode"
                        labelPlacement={"start"}

                        sx={{
                            "& .MuiTypography-root":{fontWeight: "bold", color: "grey"},
                            "& .MuiSwitch-root": {
                                padding:"5px",
                                width:"60px",
                            },
                            "& .MuiSwitch-track":{
                                borderRadius:"13px",
                            },

                        }}
                    />
                </Stack>
          </Box>
          <Stack
              direction="row"
              spacing={4}
              marginTop={"30px"}
              alignSelf={"center"}
          >


          <DesignCard
              logo={logo}
              tag={""}
              num={""}
              type={""}
              arrow={""}
              changes={""}
              changescolor={""}
              linecolor={""}
          >
          </DesignCard>
          <DesignCard
              logo={logo}
              tag={""}
              num={""}
              type={""}
              arrow={""}
              changes={""}
              changescolor={""}
              linecolor={""}
          >
          </DesignCard>
          <DesignCard
              logo={logo}
              tag={""}
              num={""}
              type={""}
              arrow={""}
              changes={""}
              changescolor={""}
              linecolor={""}
          >
          </DesignCard>
          <DesignCard
              logo={logo}
              tag={""}
              num={""}
              type={""}
              arrow={""}
              changes={""}
              changescolor={""}
              linecolor={""}
          >
          </DesignCard>
          </Stack>
          </Stack>
      );
}

export default App;
