import React, {Component, PropTypes} from 'react';

import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Anchor from 'grommet/components/Anchor';
import Close from 'grommet/components/icons/base/Close';
import CompanyIcon from 'grommet/components/icons/base/integration';

import {inject, observer} from 'mobx-react';
//import DevTools from 'mobx-react-devtools';
//<DevTools />

@inject('commonUIStore')
@observer
export default class AppSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0
        };
    }

    componentDidMount() {
        this.setState({
            left: -this.appSidebar.offsetWidth
        });
    }

    _closeAppSideBar(e) {
        e.preventDefault();
        this.props.commonUIStore.activateSideBar();
    }

    render() {
        const toggleSidebar = this.props.commonUIStore.toggleSideBar ? "app-sidebar open" : "app-sidebar";

        return (
            <div style={{left: this.state.left + "px"}} className={toggleSidebar}
                 ref={(el) => {this.appSidebar = el;}}>
                <Sidebar colorIndex="grey-4"
                         full={true}>
                    <Header pad='medium' align="stretch"
                            direction="column">
                        <Box direction="row" flex="grow" justify="between">
                            <Title className="mobile">
                                <CompanyIcon colorIndex='light-1' />
                                <span>Options</span>
                            </Title>
                            <Button icon={<Close />} plain={true}
                                    onClick={(e) => {this._closeAppSideBar(e);}}/>
                        </Box>
                        <Box pad={{vertical: "small"}} />
                        <Search placeHolder='Search'
                                inline={true} />
                    </Header>
                    <Box flex='grow'
                         justify='start'>
                        <Menu primary={true}>
                            <Anchor href='#'
                                    className='active'>
                                First
                            </Anchor>
                            <Anchor href='#'>
                                Second
                            </Anchor>
                            <Anchor href='#'>
                                Third
                            </Anchor>
                        </Menu>
                    </Box>
                    <Footer pad='medium'>
                        <Button label="Support" primary={true} />
                    </Footer>
                </Sidebar>
            </div>
        )
    }
}

AppSidebar.defaultProps = {

};

AppSidebar.propTypes = {

};
