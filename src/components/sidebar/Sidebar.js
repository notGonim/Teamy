import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { SidebarContainer, SidebarHeader, SidebarInfo } from './SidebarStyles';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddIcon from '@material-ui/icons/Add';
import { useCollection } from 'react-firebase-hooks/firestore'
import { SidebarOption } from './sidebarOption/SidebarOption';
import db from '../../firebase/firebase';


export const Sidebar = () => {

    const [channels, loading, errors] = useCollection(db.collection('rooms'))

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
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />

            {channels?.docs.map(doc => (
                <SidebarOption  key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
        </SidebarContainer>
    )
}
