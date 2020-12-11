import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './Card.styles'

export default function Card({ imgCard, Title }) {
  const classes = useStyles()
  return (
    <Grid direction="column" className={classes.root}>
      <img src={imgCard} alt={imgCard} className={classes.HeadIcon} />

      <Box className={classes.boxTypo} component="animate" m={20}>
        <Typography color="primary" className={classes.karTitle}>
          {Title}
        </Typography>
      </Box>
    </Grid>
  )
}
