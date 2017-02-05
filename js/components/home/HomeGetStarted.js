import React from 'react';

import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';
import GetStartedIcon from 'grommet/components/icons/base/Achievement';
import Animate from 'grommet/components/Animate';

export default function HomeGetStarted(props) {
    return (
        <Animate visible="scroll"
                 enter={{"animation": "fade", "duration": 2000, "delay": 0}}
                 keep={true}>
            <Section pad="large"
                     direction="row" justify="center"
                     align="center">
                <Box pad="large">
                    <GetStartedIcon size="huge" colorIndex="brand"/>
                </Box>
                <Box pad="large">
                    <Headline size="small" strong={true}>
                        Title
                    </Headline>
                    <Box pad="small" direction="row"
                         flex="grow" justify="center"
                         align="center">
                        <Button label="Sign Up" path="/signup"
                                primary={true}/>
                        <Box pad="small"> or </Box>
                        <Button label="Login" path="/login"
                                secondary={true} />
                    </Box>
                </Box>
            </Section>
        </Animate>

    );
}