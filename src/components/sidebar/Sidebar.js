import React from 'react'
import FiberManualRecordIcon from '@material-ui/Icons/FiberManualRecord';
import { SidebarContainer, SidebarHeader, SidebarInfo } from './SidebarStyles';
import CreateIcon from '@material-ui/Icons/Create';

import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { SidebarOption } from './sidebarOption/SidebarOption';


export const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Gonim</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Mahmoud Gonim
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            {/*  <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
        */
            }
        </SidebarContainer>
    )
}
