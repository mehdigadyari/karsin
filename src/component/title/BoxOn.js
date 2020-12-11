import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './BoxOn.styles'

export default function BoxOn({ TitleGrid }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.typo}> {TitleGrid} </Typography>
    </div>
  )
}
