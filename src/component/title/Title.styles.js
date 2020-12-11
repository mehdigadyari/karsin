import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  HeadGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
  HeadIcon: {
    marginTop: 130,
    width: '60%',
    height: 600
  },
  TitleOn: {
    paddingTop: 25,
    paddingBottom: 20,
    color: '#6D7D95'
  },

  karTitle: {
    fontSize: 17,
    position: 'absolute',
    top: 70,
    fontWeight: '700'
  },
  bodyRight: {
    fontSize: 17,
    fontWeight: '700',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 40
  },
  bodyRight1: {
    fontSize: 14,
    fontWeight: '300',
    padding: 10,
    paddingBottom: 40
  },
  bodyDown: {
    width: '60%',
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
  bodyDown1: {
    // backgroundColor: '#f0f'
  },
  bodyDown2: {
    // backgroundColor: '#ff0'
  },
  BodyOne: {
    // marginTop: 130,
    width: '100%',
    height: 300
  },
  leftPic: {
    marginTop: 10,
    width: '95%',
    height: 350
  },
  LineVerb: {
    // marginTop: 130,
    backgroundColor: '#6D7D95',
    width: '90%',
    border: 5,
    height: 1
  },
  boxOnStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  divProfile: {
    display: 'flex',
    position: 'absolute',
    marginTop: 650,
    marginLeft: 650
  },
  divProfile2: {
    display: 'flex',
    position: 'absolute',
    marginTop: 750,
    marginLeft: 630
  },

  profTypo: {
    padding: 20,
    color: '#6D7D95',
    fontSize: 14
  },
  ProfileIcon: {
    height: 20,
    marginTop: 18
  }
}))
