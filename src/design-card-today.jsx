import React from "react";
import {Card, CardContent, Typography, Grid, dividerClasses} from "@mui/material";

const designCardToday = ({type, logo, num, percentage, colorpercen, arrow}) => {
    return(
        <Card style={{width: "280px", backgroundColor: 'hsl(227, 47%, 96%)' }}>
            <div style={{ height: "4px" } }></div>
            <CardContent>
                <Grid container direction="column" alignItems="center" spacing={5}>
                    <Grid item>
                        <Grid container spacing={13} alignItems="center">
                            {type && (
                                <Grid item>
                                    <Typography variant="body2" fontWeight={"bold"} color={"grey"}>
                                        {type}
                                    </Typography>
                                </Grid>
                            )}
                            {logo && (
                                <Grid item>
                                    <img src={logo} alt="logo" />
                                </Grid>
                            )}
                        </Grid>
                    </Grid>

                    {num && (
                        <Grid item>
                            <Grid container spacing={13} alignItems="center">
                                <Grid item>
                                    <Typography variant="h4" fontWeight={"bold"} color={"black"}>
                                        {num}
                                    </Typography>
                                </Grid>
                                {arrow && (
                                    <Grid item>
                                        <Grid container spacing={1} alignItems="center">
                                            <Grid item>
                                                <img src={arrow} alt="arrow" />
                                            </Grid>
                                            <Grid item>
                                                {percentage && (
                                                    <Typography variant="body2" color={colorpercen} fontWeight={'bold'}>
                                                        {percentage}
                                                    </Typography>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    )}
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default designCardToday;