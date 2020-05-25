import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CountUp from 'react-countup'




const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...'
    }
    return (
        <div>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0} 
                            end={confirmed.value}
                            duration={2.5}
                            separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recoverd</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0} 
                            end={recovered.value}
                            duration={2.5}
                            separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0} 
                            end={deaths.value}
                            duration={2.5}
                            separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths by COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}
export default Cards

