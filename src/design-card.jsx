import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const DesignCard = ({ logo, tag, num, type, arrow, changes, changescolor, linecolor }) => {
    return (
        <Card style={{ width: "280px", backgroundColor: 'hsl(227, 47%, 96%)' }}>
            <div style={{ background: linecolor, height: "4px" }}></div>
            <CardContent>
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        <Grid container spacing={1} alignItems="center">
                            {logo && (
                                <Grid item>
                                    <img src={logo} alt="logo" />
                                </Grid>
                            )}
                            {tag && (
                                <Grid item>
                                    <Typography variant="body2" fontWeight={"bold"} color={"grey"}>
                                        {tag}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction="column" alignItems="center" spacing={1}>
                            {num && (
                                <Grid item>
                                    <Typography variant="h3" fontWeight={"bold"}>
                                        {num}
                                    </Typography>
                                </Grid>
                            )}
                            {type && (
                                <Grid item>
                                    <Typography variant="body2" letterSpacing={"3px"} alignSelf={"center"} fontWeight={"light"} textTransform={'uppercase'} color={"gray"}>
                                        {type}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>

                    {arrow && (
                        <Grid item>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item>
                                    <img src={arrow} alt="arrow" />
                                </Grid>
                                <Grid item>
                                    {changes && (
                                        <Typography variant="body2" color={changescolor} fontWeight={'bold'}>
                                            {changes}
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default DesignCard;
