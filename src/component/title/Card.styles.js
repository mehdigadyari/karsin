import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  HeadIcon: {
    marginTop: 20,
    width: '90%',
    height: 200,
    boxShadow: '0px 15px 50px'
  },
  karTitle: {
    fontSize: 15,
    padding: 8
  },

  boxTypo: {
    backgroundColor: '#fff',
    borderRadius: 7,
    marginTop: -30
  }
}))
