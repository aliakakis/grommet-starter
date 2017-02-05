import React, {Component, PropTypes} from 'react';

import Section from 'grommet/components/Section';

import {RouteTransition} from '../../decorators/RouteTransition';

import HomeHero from './HomeHero';
import HomeScrollMore from './HomeScrollMore';
import HomeDetails from './HomeDetails';
import HomeIssues from './HomeIssues';
import HomeSolutions from './HomeSolutions';
import HomeGetStarted from './HomeGetStarted';

import {observer} from 'mobx-react';
//import DevTools from 'mobx-react-devtools';
//<DevTools />

@observer
@RouteTransition()
export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Section pad="none" tag="section">
                <HomeHero />
                <HomeScrollMore />
                <HomeDetails />
                <HomeIssues />
                <HomeSolutions />
                <HomeGetStarted />
            </Section>
        )
    };
}

Home.defaultProps = {

};

Home.propTypes = {

};
