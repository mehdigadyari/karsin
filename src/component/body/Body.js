import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './Body.styles'

export default function Body() {
  const classes = useStyles()
  return (
    <Grid direction="column" className={classes.root}>
      <Typography color="primary" className={classes.karTitle}>
        چگونه در 5 مرحله اولین پروژه خود را در کارسین دریافت کنیم؟
      </Typography>
    </Grid>
  )
}
