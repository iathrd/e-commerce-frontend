import { makeStyles } from '@material-ui/core/styles';
export const profileStyle = makeStyles((theme) => ({
  container: {
    padding: '0 7.5% 0 0',
    [theme.breakpoints.down('xs')]: {
      padding: '50px 16px 0 16px',
    },
  },
  paperProfileInfo: {
    backgroundColor: 'rgba(245,245,245,0.5)',
    height: '100vh',
  },
  sideBarContent: {
    paddingRight: 48,
    paddingTop: 50,
    paddingLeft:'30%'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:70

  },
  avatar: {
    width: '60px',
    height: '60px',
  },
  username: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    color: '#222222',
  },
  changeProfile: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    color: '#9B9B9B',
  },
  btnProfile: {
    backgroundColor: '#456BF3',
    width: 32,
    height: 32,
    '&:hover': {
      backgroundColor: '#456BF3',
    },
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  btnLocation: {
    backgroundColor: '#F36F45',
    width: 32,
    height: 32,
    '&:hover': {
      backgroundColor: '#F36F45',
    },
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  btnOrder: {
    backgroundColor: '#F3456F',
    width: 32,
    height: 32,
    '&:hover': {
      backgroundColor: '#F3456F',
    },
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  icon: {
    color: 'white',
    fontSize: 20,
  },
  iconLabel: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    color: '#9B9B9B',
  },
  iconLabelActive: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    color: '#222222',
  },
  menuWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:20
  },
  changeProfileWrapper:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
  },
  userInfoWrapper:{
      marginLeft:10
  },
  btnWrapper:{
      marginRight:14
  },
  content:{
    padding:"50px 0 0 45px"
  },
  paperContent:{
    padding:"30px 22px 0 30px"
  },
  contentLabel:{
    fontStyle:'normal',
    fontWeight:600,
    fontSize:20,
    color:'#222222'
  },
  inputWrapper:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:22
  },
  formWrapper:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  },
  labelSpacing:{
    marginRight:40
  }
}));
