import { Avatar } from '@material-ui/core'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding:10px 0;
    position:fixed;
    color:white;
    background-color:var(--slack-color)
`
export const HeaderLeft = styled.div`
    flex:0.3;
    display:flex;
    align-items:center;
    margin-left:20px;
   > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right:30px;
    }
`
export const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`

export const HeaderSearch = styled.div`
     display:flex;
     flex:0.4;
     opacity:1;
     border-radius:6px;
     background-color:#421f44;
     text-align:center;
     padding:0 50px;
     color:gray;
     border:1px gray solid;
     > input{
         border:none;
         outline:0;
         min-width:30vw;
         background-color:transparent;
         text-align:center;
         color:white;
     }   
`

export const HeaderRight = styled.div`
     display:flex;
     flex:0.3;
     align-items:flex-flex-start;
     >.MuiSvgIcon-root{
         margin-left:auto;
         margin-right:20px;
     }
`