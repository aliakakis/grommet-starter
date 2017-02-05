import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Menu from 'grommet/components/Menu';
import Headline from 'grommet/components/Headline';
import FbIcon from 'grommet/components/icons/base/SocialFacebook';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedin';

export default function AppFooter(props) {
    return (
        <Footer direction="column">
            <Box direction="row" colorIndex="neutral-4-a"
                 justify="center" full="horizontal"
                 pad={{horizontal: "small", vertical: "medium"}}
                 flex="grow">
                <Section direction="column" responsive={false}
                     pad="medium" full="horizontal">
                    <Heading tag="h3" strong={true}>
                        Help & Support
                    </Heading>
                    <Menu inline={true}
                          direction="column" responsive={false}>
                        <Anchor path="/docs">Documentation</Anchor>
                        <Anchor path="/support">Contact Support</Anchor>
                    </Menu>
                </Section>
                <Section direction="column" responsive={false}
                     pad="medium" full="horizontal">
                    <Heading tag="h3" strong={true}>
                        Useful Links
                    </Heading>
                    <Menu inline={true}
                          direction="column" responsive={false}>
                        <Anchor path="/about">About Us</Anchor>
                        <Anchor path="/careers">Careers</Anchor>
                        <Anchor path="/faq">FAQs</Anchor>
                        <Anchor path="/contact">Contact Us</Anchor>
                    </Menu>
                </Section>
                <Section direction="column" responsive={false}
                         pad="medium" full="horizontal"
                         separator="right">
                    <Heading tag="h3" strong={true}>
                        News & Updates
                    </Heading>
                    <Menu inline={true}
                          direction="column" responsive={false}>
                        <Anchor path="/register">Register for Updates</Anchor>
                        <Anchor path="/blog">Blog</Anchor>
                    </Menu>
                </Section>
                <Section pad={{horizontal: "large", vertical: "medium"}}
                         justify="center" align="center">
                    <Headline size="small" strong={false}
                              margin="small">
                        Find Us
                    </Headline>
                    <Box pad="none" direction="row"
                         flex="grow" justify="center"
                         responsive={false}>
                        <Anchor icon={<FbIcon />}
                                animateIcon={true}
                                href='#' />
                        <Anchor icon={<TwitterIcon />}
                                animateIcon={true}
                                href='#' />
                        <Anchor icon={<LinkedInIcon />}
                                animateIcon={true}
                                href='#' />
                    </Box>
                </Section>
            </Box>
            <Box direction="row" colorIndex="neutral-4"
                 justify="start" full="horizontal"
                 pad="medium" responsive={false}>
                <Paragraph margin='none'>
                    © 2017 Company
                </Paragraph>
            </Box>
        </Footer>
    );
}