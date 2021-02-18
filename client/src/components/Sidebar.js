import React from 'react'
import {
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

export const SidebarComp = () => {
    const [visible, setVisible] = React.useState(false)

    return (
        <div className="sidebar">
            <div onClick={() => setVisible(!visible)}>Close</div>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Menu.Item as='a'>
                        <Icon name='home' />
                Home
              </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='gamepad' />
                Games
              </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                Channels
              </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h3'>Application Content</Header>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    )
}