import styled from 'styled-components'


export const SidebarContainer = styled.div`
    background-color:var(--slack-color);
    color:white;
    flex:0.3;
    max-width:260px;
    margin-top:60px;
    border-top:1px solid #49274b;
    > hr{
        margin-top:10px;
        margin-bottom:10px;
        border:1px solid #49274b;
    }
`

export const SidebarHeader = styled.div`
    display:flex;
    padding:13px;
    border-bottom:1px solid #49274b;

    >.MuiSvgIcon-root{
        padding:8px;
        color:#49274b;
        font-size:18px;
        background-color:#fff;
        border-radius:999px
    }
`

export const SidebarInfo = styled.div`
    flex:1;

    > h2{
        font-weight:900;
        font-size:15px;
        margin-bottom:5px;
    }
    > h3{
        display:flex;
        font-size:13px;
        font-weight:400;
        align-items:center;

        > .MuiSvgIcon-root{
            font-size:14px;
            margin-top:1px;
            margin-right:2px;
            color:green;
        }
    }
`

