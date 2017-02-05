import React, {Component, PropTypes} from 'react';

import InductorsApp from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Split from 'grommet/components/Split';

import AppSidebar from '../components/common/AppSidebar';
import AppHeader from '../components/common/AppHeader';
import AppFooter from '../components/common/AppFooter';

import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
//<DevTools />

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <InductorsApp centered={false}>
                <DevTools />
                <AppSidebar />
                <Article>
                    <AppHeader />
                    <Box tag="main" colorIndex="light-2">
                        {this.props.children}
                    </Box>
                    <AppFooter />
                </Article>
            </InductorsApp>
        )
    };
}

Home.defaultProps = {

};

Home.propTypes = {

};
