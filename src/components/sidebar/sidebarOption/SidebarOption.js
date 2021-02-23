import React from 'react'
import db from '../../../firebase/firebase'
import { SidebarOptionChannel, SidebarOptionContainer } from './SidebarOptionStyles'

export const SidebarOption = ({ Icon, title, addChannelOption ,id}) => {

    const addChannel = () => {
        const channelName = prompt('Please Add a Channel name ?')

        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }


    const selectChannel = () => {

    }

    return (
        <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ?
                (<h3> {title} </h3>) : (
                    < SidebarOptionChannel>
                        <span>#</span>{title}
                    </SidebarOptionChannel>
                )}
        </SidebarOptionContainer>
    )
}
