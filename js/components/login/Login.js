import React, {Component, PropTypes} from 'react';

import Anchor from 'grommet/components/Anchor';
import LoginForm from 'grommet/components/LoginForm';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Columns from 'grommet/components/Columns';
import Card from 'grommet/components/Card';
import Sidebar from 'grommet/components/Sidebar';
import Split from 'grommet/components/Split';

import {RouteTransition} from '../../decorators/RouteTransition';

import {observer} from 'mobx-react';
//import DevTools from 'mobx-react-devtools';
//<DevTools />

@observer
@RouteTransition()
export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    _loginUser(e) {
        e.preventDefault();
        this.props.route.loginStore.setUsername("Antonios Liakakis");
    };

    render() {
        return (
            <Section pad="medium" tag="section"
                     justify="center" align="center"
                     alignContent="center">
                <Columns justify="center" size="small">
                    <Box pad="medium">
                        <LoginForm onSubmit={(e) => {this._loginUser(e)}}
                                   title="Log In"
                                   forgotPassword={<Anchor href="#" label="Forgot password?" />}
                                   rememberMe={true} />
                    </Box>
                    <Columns justify="center" size="small">
                        <Box pad="medium" align="center"
                             justify="center" flex="grow">
                            <Card className="drop-shadow-hover" thumbnail="css/images/piano.jpg"
                                  heading='Title' colorIndex="accent-2"
                                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' />
                            <Box pad="medium"/>
                            <Card className="drop-shadow-hover" thumbnail="css/images/guitar.jpg"
                                  heading='Title' colorIndex="accent-3-a"
                                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' />
                        </Box>
                        <Box pad="medium" align="center"
                             justify="center" flex="grow">
                            <Card className="drop-shadow-hover" thumbnail="css/images/violin.jpg"
                                  heading='Title' colorIndex="neutral-2"
                                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' />
                            <Box pad="medium"/>
                            <Card className="drop-shadow-hover" thumbnail="css/images/trumpet.jpg"
                                  heading='Title' colorIndex="brand"
                                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' />
                        </Box>
                    </Columns>
                </Columns>
            </Section>
        )
    };
}

Login.defaultProps = {

};

Login.propTypes = {

};
