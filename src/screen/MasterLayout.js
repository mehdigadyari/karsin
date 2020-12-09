import { Grid } from '@material-ui/core'
import React from 'react'
import useStyles from './MasterLayout.styles'

export default function MasterLayout() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>MasterLayout</Grid>
    </div>
  )
}
