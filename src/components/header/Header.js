import React from 'react'
import { HeaderAvatar, HeaderContainer, HeaderLeft, HeaderRight, HeaderSearch } from '../../styles/HeaderStyle'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export const Header = () => {
    return (
        <HeaderContainer>

            <HeaderLeft  >
                <HeaderAvatar />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input type="text" placeholder="Search for something" />
            </HeaderSearch>


            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>


        </HeaderContainer>
    )
}
