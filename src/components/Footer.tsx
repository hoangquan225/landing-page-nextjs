"use client";
import { Wide } from "@/components/ui/Box/Wide";
import { css, styled } from "styled-components";
import Logo from "../../public/svg/logo.svg";
import MediaIcons from "../../public/svg/icons/media-icons.svg";
import SendIcon from "../../public/svg/icons/send-icon.svg";
import IconCopyRight from "../../public/svg/footer/image7.svg";

const FooterWapper = styled.div`
  background-color: #fbfcff;
  height: 40rem;
  margin-top: 12rem;

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      margin-top: 10rem;
      padding-bottom: 2.4rem;
      height: 100%;
    }
  `}
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.8rem;

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      gap: 2rem;
    }

    ${theme.mediaQueries.sm} {
      gap: 16px;
    }

    ${theme.mediaQueries.md} {
      gap: 16px;
    }
  `}
`;

const FooterContent = styled.div`
  display: flex;
  padding-top: 5.8rem;
  gap: 4rem;
  width: 100%;
  justify-content: space-around;

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      flex-wrap: wrap;
      margin-bottom: 16px;
      gap: 0;

      & > div:first-child,
      div:last-child {
        flex-basis: 100%;
        margin-bottom: 1.2rem;
        & > p {
          width: 100%;
        }
      }

      & > div {
        flex-basis: 50%;
      }
    }

    ${theme.mediaQueries.sm} {
      gap: 0;
      & > div:first-child {
        & > p {
          width: 16rem;
        }
      }
    }

    ${theme.mediaQueries.md} {
      gap: 0;
      & > div:first-child {
        & > p {
          width: 16rem;
        }
      }
    }
  `}
`;

const FooterLogo = styled.div`
  & > p {
    display: flex;
    width: 20.9rem;
    flex-direction: column;
    margin-top: 1.4rem;
    margin-bottom: 2.4rem;

    color: #160637;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
  }
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > div:first-child {
    color: #160637;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & > div:nth-child(2) > p {
    color: #160637;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 1rem;
  }

  .footer__text-shadow {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const StyleInput = styled.input`
  width: 85%;
  padding: 1.2rem;
  &:focus {
    outline: none;
  }
  color: #8989a2;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const FooterCopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.8rem;
  & > div {
    color: #160637;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterWapper>
        <Wide>
          <FooterContainer>
            <FooterContent>
              <FooterLogo>
                <div>
                  <Logo />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat ut wisi enim ad minim
                </p>
                <div>
                  <MediaIcons />
                </div>
              </FooterLogo>
              <FooterItem>
                <div className="footer__text-shadow">Product</div>
                <div className="footer__text-shadow">
                  <p>Connections</p>
                  <p>Protocols</p>
                  <p>Personas</p>
                  <p>Integrations</p>
                  <p>Catalog</p>
                  <p>Pricing</p>
                  <p>Security</p>
                  <p>GDPR</p>
                </div>
              </FooterItem>
              <FooterItem>
                <div>For Developers</div>
                <div>
                  <p>Docs</p>
                  <p>API</p>
                  <p>Open Source</p>
                  <p>Engineering Team</p>
                </div>
              </FooterItem>
              <FooterItem>
                <div>Company</div>
                <div>
                  <p>Careers</p>
                  <p>Blog</p>
                  <p>Press</p>
                </div>
              </FooterItem>
              <FooterItem>
                <div>Support</div>
                <div>
                  <p>Help Center</p>
                  <p>Contact Us</p>
                  <p>Security</p>
                  <p>Bulletins</p>
                  <p>Documentation</p>
                  <p>Partner</p>
                  <p>Portal</p>
                </div>
              </FooterItem>
              <FooterItem>
                <div>Newsletter</div>

                <div className="flex w-full bg-[#FFFFFF] h-[4rem] drop-shadow-[0_5px_9px_rgba(0,0,0,0.05)]">
                  <StyleInput type="email" placeholder="Email..." />
                  <button className="hover:opacity-[0.8]">
                    <SendIcon />
                  </button>
                </div>
              </FooterItem>
            </FooterContent>
            <FooterCopyRight>
              <div>Rahul Rao</div>
              <IconCopyRight />
            </FooterCopyRight>
          </FooterContainer>
        </Wide>
      </FooterWapper>
    </>
  );
};

export default Footer;
