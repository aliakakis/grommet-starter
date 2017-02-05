import React from 'react';

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';

export default function HomeHero(props) {
    return (
        <Hero background={<Image src="css/images/auditorium.jpg"
                                 fit="cover"
                                 full={true}/>}
              size="large" backgroundColorIndex="dark">
            <Animate visible={true}
                     enter={{"animation": "slide-left", "duration": 2000, "delay": 0}}
                     keep={true}>
                <Box direction="row" justify="start">
                    <Box colorIndex="grey-4-a" pad="small"
                         size="xlarge" direction="row">
                        <Heading tag="h3" strong={true} margin="none">
                            Sometimes an orchestra needs the right tune...
                        </Heading>
                    </Box>
                </Box>
            </Animate>
        </Hero>
    );
}