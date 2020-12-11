import { Grid } from '@material-ui/core'
import React from 'react'
import useStyles from './MasterLayout.styles'
import Title from '../component/title/Title'
import Body from '../component/body/Body'

export default function MasterLayout() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid justify="center" className={classes.gridbase}>
          <Title />
          {/* <Body /> */}
        </Grid>
      </Grid>
    </div>
  )
}
