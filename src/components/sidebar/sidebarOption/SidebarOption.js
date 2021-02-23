import React from 'react'
import { SidebarOptionContainer } from './SidebarOptionStyles'

export const SidebarOption = ({ Icon, title }) => {
    return (
        <SidebarOptionContainer>
            {Icon && <Icon fontSize="small" style={{ padding: 10  }} />}
        </SidebarOptionContainer>
    )
}
