import React from 'react'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';
import {
    FooterContainer,
    FoterWrap,
    FooterlinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterTitle,
    FooterLinks,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    Websiterights,
    SocialIcons,
    SocialIconlink
} from './FooterElements'

const Footer = () => {
    return (
      <>
        <FooterContainer>
            <FoterWrap>
               
                    <FooterlinksContainer>
                        <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterTitle>About US</FooterTitle>
                               
                                <FooterLinks to="/signin" >How it works</FooterLinks>
                                <FooterLinks to="/signin" >Testomonial</FooterLinks>
                                <FooterLinks to="/signin" >careers</FooterLinks>
                                <FooterLinks to="/signin" >Term of services</FooterLinks>
                                <FooterLinks to="/signin" >Investors</FooterLinks>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterTitle>Videos</FooterTitle>
                               
                                <FooterLinks to="/signin" >Submit Videos</FooterLinks>
                                <FooterLinks to="/signin" >Ambassador</FooterLinks>
                                <FooterLinks to="/signin" >Agency</FooterLinks>
                                <FooterLinks to="/signin" >Influencer</FooterLinks>
                                {/* <FooterLinks to="/signin" >Investors</FooterLinks> */}
                            
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterTitle>Contact Us</FooterTitle>
                               
                                <FooterLinks to="/signin" >Contact</FooterLinks>
                                <FooterLinks to="/signin" >Support</FooterLinks>
                                <FooterLinks to="/signin" >Destination</FooterLinks>
                                <FooterLinks to="/signin" >Sponsership</FooterLinks>
                                <FooterLinks to="/signin" >Investors</FooterLinks>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterTitle>Bussiness</FooterTitle>
                               
                                <FooterLinks to="/signin" >Instagram</FooterLinks>
                                <FooterLinks to="/signin" >Tacebook</FooterLinks>
                                <FooterLinks to="/signin" >Youtube</FooterLinks>
                                <FooterLinks to="/signin" >Twitter</FooterLinks>
                                <FooterLinks to="/signin" >LinkedIN</FooterLinks>
                            
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterlinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                            aashish 
                            </SocialLogo>
                            <Websiterights>aashish © {new Date().getFullYear()} All rights reserved</Websiterights>
                            <SocialIcons>
                                <SocialIconlink href="/" target="_blank"
                                aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconlink>
                                <SocialIconlink href="/" target="_blank"
                                aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconlink>
                                <SocialIconlink href="/" target="_blank"
                                aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconlink>
                                <SocialIconlink href="/" target="_blank"
                                aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconlink>
                                <SocialIconlink href="/" target="_blank"
                                aria-label="linkedin">
                                    <FaLinkedin />
                                </SocialIconlink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                
            </FoterWrap>
        </FooterContainer>
      </>
    )
}

export default Footer
