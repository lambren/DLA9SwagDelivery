import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    headerRoot: {
      fontWeight: 'bold',
      color: 'rgb(28, 167, 226)',
      padding:'0.5em',
      borderBottom: 'solid rgb(196, 196, 196) 1px'
    },
    paperRoot: {
      padding: '2em',
      
    },
    textInputRoot: {
      margin: '2em',
      minWidth: '300px',
      padding: '1em',
      borderRadius: '3px',
      border: 'solid 1px rgb(196, 196, 196)'
    },
    leftTextAlign: {
      textAlign: 'left',
      padding: '0.5em',
      position: 'relative'
    },
    themeBackgroud: {
      backgroundColor: 'rgb(28, 167, 226)',
    },
    loadingOverlay: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      zIndex: '10000',
      position: 'absolute',
      width: '100%'
    },
    successBackground: {
      backgroundColor: "#5cffc0",
      color: "#1fab65",
      padding: '2em'
    },
    errorBackground: {
      backgroundColor: '#ffa6a6',
      color: '#bd0b0b',
      padding: '2em'
    }
})

export default useStyles;