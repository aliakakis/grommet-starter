import React from 'react';

import Section from 'grommet/components/Section';
import Animate from 'grommet/components/Animate';
import ArrowDown from 'grommet/components/icons/base/Down';

export default function HomeScrollMore(props) {
    return (
        <Animate visible={true}
                 enter={{"animation": "slide-down", "duration": 2000, "delay": 0}}
                 keep={true}>
            <Section align="center" pad="medium"
                 justify="center" flex="grow" colorIndex="light-2">
                Scroll down for more...
                <ArrowDown />
            </Section>
        </Animate>
    );
}