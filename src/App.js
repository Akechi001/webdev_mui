import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Stack, Grid, Box, Typography, FormControlLabel, Switch} from "@mui/material";
import DesignCard from "./design-card";
import DesignCardToday from "./design-card-today";


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
                <Stack direction="row" spacing={93}>
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
              logo={'../images/icon-facebook.svg'}
              tag={"@ nathan"}
              num={"2222"}
              type={"Subscriber"}
              arrow={"../images/icon-up.svg"}
              changes={"12 today"}
              changescolor={"hsl(163, 72%, 41%)"}
              linecolor={"hsl(208, 92%, 63%)"}
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
          <Stack>
              <Box
                  sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "10vh",
                      marginTop: "30px"
                  }}>
                  <Stack direction="row" spacing={123}>
                      <Typography fontSize={"30px"} fontWeight={"bold"} color={"grey"}>
                          Overview - Today

                      </Typography>
                      <Typography>

                      </Typography>

                  </Stack>

              </Box>
          </Stack>
          <Stack
              direction="row"
              spacing={4}
              marginTop={"30px"}
              alignSelf={"center"}
          >
            <DesignCardToday
                type={"Page Views"}
                logo={'../images/icon-facebook.svg'}
                num={"87"}
                percentage={"3%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-facebook.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Page Views"}
                logo={'../images/icon-facebook.svg'}
                num={"87"}
                percentage={"3%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-facebook.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Page Views"}
                logo={'../images/icon-facebook.svg'}
                num={"87"}
                percentage={"3%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-facebook.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Page Views"}
                logo={'../images/icon-facebook.svg'}
                num={"87"}
                percentage={"3%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-facebook.svg'}
            >
            </DesignCardToday>
          </Stack><Stack
              direction="row"
              spacing={4}
              marginTop={"30px"}
              alignSelf={"center"}
          >
            <DesignCardToday
                type={"Page Views"}
                logo={'../images/icon-facebook.svg'}
                num={"87"}
                percentage={"3%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-facebook.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Page Views"}
                logo={'../images/icon-facebook.svg'}
                num={"87"}
                percentage={"3%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-facebook.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Page Views"}
                logo={'../images/icon-facebook.svg'}
                num={"87"}
                percentage={"3%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-facebook.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Page Views"}
                logo={'../images/icon-facebook.svg'}
                num={"87"}
                percentage={"3%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-facebook.svg'}
            >
            </DesignCardToday>
          </Stack>
          </Stack>
      );
}

export default App;
