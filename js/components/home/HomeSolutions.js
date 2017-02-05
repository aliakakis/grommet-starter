import React from 'react';

import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import SolutionsIcon from 'grommet/components/icons/base/Checkmark';
import Animate from 'grommet/components/Animate';

export default function HomeSolutions(props) {
    return (
        <Animate visible="scroll"
                 enter={{"animation": "fade", "duration": 2000, "delay": 0}}
                 keep={true}>
            <Section pad="large" colorIndex="accent-2"
                     direction="row" justify="center"
                     align="center" flex="grow">
                <Box pad="large">
                    <SolutionsIcon size="huge" colorIndex="brand"/>
                </Box>
                <Box pad="large">
                    <Headline size="medium" strong={true}>
                        Lorem ipsum dolor sit amet
                    </Headline>
                    <Paragraph size="large">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Paragraph>
                    <Paragraph size="large">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Paragraph>
                    <Paragraph size="large">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Paragraph>
                    <Paragraph size="large">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Paragraph>
                </Box>
            </Section>
        </Animate>

    );
}