import React from 'react';

import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import UserIcon from 'grommet/components/icons/base/UserNew';
import Animate from 'grommet/components/Animate';

export default function HomeDetails(props) {
    return (
        <Animate visible="scroll"
                 enter={{"animation": "fade", "duration": 2000, "delay": 0}}
                 keep={true}>
            <Section pad="large" colorIndex="accent-3"
                     direction="row" justify="center"
                     align="center" flex="grow" alignContent="center">
                <Box pad="large">
                    <UserIcon size="huge" colorIndex="brand"/>
                </Box>
                <Box pad="large">
                    <Paragraph size="xlarge">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Paragraph>
                    <Paragraph size="xlarge">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Paragraph>
                </Box>
            </Section>
        </Animate>

    );
}