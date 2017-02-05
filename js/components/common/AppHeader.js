import React, {Component, PropTypes} from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CompanyIcon from 'grommet/components/icons/base/integration';
import MenuIcon from 'grommet/components/icons/base/Menu';

import {inject, observer} from 'mobx-react';

@inject('commonUIStore')
@observer
export default class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    _openAppSideBar(e) {
        e.preventDefault();
        this.props.commonUIStore.activateSideBar();
    }

    render() {
        return (
            <Header colorIndex="neutral-4">
                <Box size={{width: {max: 'xxlarge'}}} direction="row"
                     responsive={false} align="center"
                     pad={{horizontal: 'medium'}} flex="grow"
                     full="horizontal">
                    <Box direction="row" justify="start"
                         responsive={false} align="center"
                         a11yTitle="Company Logo and Title">
                        <Button icon={<CompanyIcon colorIndex="accent-3" size="medium"/>} plain={true}
                                onClick={(e) => {this._openAppSideBar(e);}}/>
                        <Box pad={{horizontal: "small"}}/>
                        <Title onClick={(e) => {location.hash = '#/';}}>
                            Company
                        </Title>
                    </Box>
                    <Box flex="grow" align="center" direction="row"
                         justify="end" responsive={false}>
                        <Menu label="Info" dropAlign={{right: 'right'}}
                              direction="row" inline={true}>
                            <Anchor path="/login">Solutions</Anchor>
                            <Anchor path="/signup">Services</Anchor>
                            <Anchor path="/login">Products</Anchor>
                            <Anchor path="/signup">About Us</Anchor>
                            <Anchor path="/login">Support</Anchor>
                        </Menu>
                        <Box pad={{horizontal: "small"}}/>
                        <Menu icon={<MenuIcon />} inline={false}
                              direction="row" dropAlign={{right: 'right'}}>
                            <Anchor path="/login">Log In</Anchor>
                            <Anchor path="/signup">Sign Up</Anchor>
                        </Menu>
                    </Box>
                </Box>
            </Header>
        )
    }
}