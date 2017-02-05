import React, {Component, PropTypes} from 'react';

//import MediaQuery from '../common/MediaQuery';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Section from 'grommet/components/Section';
import Columns from 'grommet/components/Columns';

import {RouteTransition} from '../../decorators/RouteTransition';

import {inject, observer} from 'mobx-react';
//import DevTools from 'mobx-react-devtools';
//<DevTools />

//@inject('store')
@observer
@RouteTransition()
export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    _signUpUser(e) {
        e.preventDefault();
        //this.props.route.signUpStore.setUsername("Antonios Liakakis");
        //this.props.route.signUpStore.setUsername("Antonios Liakakis")
    };

    render() {
        return (
            <Section pad="medium" tag="section"
                     justify="center" align="start"
                     direction="row" flex="grow">
                <Columns justify="center" size="small">
                    <Box pad="medium">
                        <Form>
                            <Header justify="center" pad="medium">
                                <Heading strong={true}>
                                    Sign Up
                                </Heading>
                            </Header>

                            <FormFields>
                                <FormField label="Email" htmlFor="email">
                                    <TextInput id="email" name="email"/>
                                </FormField>
                                <FormField label="Password" htmlFor="password">
                                    <TextInput id="password" name="password"/>
                                </FormField>
                                <FormField label="Re-enter Password" htmlFor="repassword">
                                    <TextInput id="repassword" name="repassword"/>
                                </FormField>

                                <Heading tag="h4" margin="medium">
                                    Optional
                                </Heading>

                                <FormField label="First Name" htmlFor="firstname">
                                    <TextInput id="firstname" name="firstname"/>
                                </FormField>
                                <FormField label="Last Name" htmlFor="lastname">
                                    <TextInput id="lastname" name="lastname"/>
                                </FormField>
                                <FormField label="Country" htmlFor="country">
                                    <TextInput id="country" name="country"/>
                                </FormField>
                            </FormFields>

                            <Footer pad={{"vertical": "medium"}}>
                                <Button onClick={(e) => {this._signUpUser(e)}}
                                        label="Submit" type="submit"
                                        primary={true} fill={true} />
                            </Footer>
                        </Form>
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

SignUp.defaultProps = {

};

SignUp.propTypes = {

};
