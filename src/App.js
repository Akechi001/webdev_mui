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
              logo={"../images/icon-facebook.svg"}
              tag={"@nathanf"}
              num={"1987"}
              type={"followers"}
              arrow={"../images/icon-up.svg"}
              changes={"12 today"}
              changescolor={"hsl(163, 72%, 41%)"}
              linecolor={"hsl(208, 92%, 63%)"}
          >
          </DesignCard>
          <DesignCard
              logo={"../images/icon-twitter.svg"}
              tag={"@nathanf"}
              num={"1044"}
              type={"followers"}
              arrow={"../images/icon-up.svg"}
              changes={"99 Today"}
              changescolor={"hsl(163, 72%, 41%)"}
              linecolor={"hsl(208, 92%, 63%)"}
          >
          </DesignCard>
          <DesignCard
              logo={"../images/icon-instagram.svg"}
              tag={"@realnathanf"}
              num={"11k"}
              type={"followers"}
              arrow={"../images/icon-up.svg"}
              changes={"1099 Today"}
              changescolor={"hsl(163, 72%, 41%)"}
              linecolor={"linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"}
          >
          </DesignCard>
          <DesignCard
              logo={"../images/icon-youtube.svg"}
              tag={"Nathan F."}
              num={"8239"}
              type={"subscribers"}
              arrow={"../images/icon-down.svg"}
              changes={"144 Today"}
              changescolor={"hsl(356, 69%, 56%)"}
              linecolor={"hsl(348, 97%, 39%)"}
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
                logo={"../images/icon-facebook.svg"}
                num={"87"}
                percentage={"3%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-up.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Likes"}
                logo={'../images/icon-facebook.svg'}
                num={"52"}
                percentage={"2%"}
                colorpercen={"hsl(356, 69%, 56%)"}
                arrow={'../images/icon-down.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Likes"}
                logo={'../images/icon-instagram.svg'}
                num={"5462"}
                percentage={"2257%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-up.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Profile Views"}
                logo={'../images/icon-instagram.svg'}
                num={"52k"}
                percentage={"1375%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-up.svg'}
            >
            </DesignCardToday>
          </Stack><Stack
              direction="row"
              spacing={4}
              marginTop={"30px"}
              alignSelf={"center"}
              marginBottom={"50px"}
          >
            <DesignCardToday
                type={"Retweets"}
                logo={'../images/icon-twitter.svg'}
                num={"117"}
                percentage={"303%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-up.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Likes"}
                logo={'../images/icon-twitter.svg'}
                num={"507"}
                percentage={"553%"}
                colorpercen={"hsl(163, 72%, 41%)"}
                arrow={'../images/icon-up.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Likes"}
                logo={'../images/icon-youtube.svg'}
                num={"107"}
                percentage={"19%"}
                colorpercen={"hsl(356, 69%, 56%)"}
                arrow={'../images/icon-down.svg'}
            >
            </DesignCardToday>
            <DesignCardToday
                type={"Total Views"}
                logo={'../images/icon-youtube.svg'}
                num={"1407"}
                percentage={"12%"}
                colorpercen={"hsl(356, 69%, 56%)"}
                arrow={'../images/icon-down.svg'}
            >
            </DesignCardToday>
          </Stack>
          </Stack>
      );
}

export default App;
