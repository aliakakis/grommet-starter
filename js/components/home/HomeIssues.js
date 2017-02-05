import React from 'react';

import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import IssuesIcon from 'grommet/components/icons/base/Action';
import Animate from 'grommet/components/Animate';

export default function HomeIssues(props) {
    return (
        <Animate visible="scroll"
                 enter={{"animation": "fade", "duration": 2000, "delay": 0}}
                 keep={true}>
            <Section pad="large" alignContent="center"
                     direction="row" justify="center"
                     align="center" flex="grow">
                <Box pad="large">
                    <Paragraph size="xlarge">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Paragraph>
                    <Paragraph size="xlarge">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Paragraph>
                    <Paragraph size="xlarge">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Paragraph>
                </Box>
                <Box pad="large">
                    <IssuesIcon size="huge" colorIndex="brand"/>
                </Box>
            </Section>
        </Animate>

    );
}