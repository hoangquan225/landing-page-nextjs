"use client";
import { Wide } from "@/components/ui/Box/Wide";
import { css, styled } from "styled-components";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Banner from "../../public/svg/hero/banner.svg";
import BannerUrl from "../../public/svg/hero/banner.svg?url";
import Brightness from "../../public/svg/hero/brightness.svg";

const HeroWrapper = styled.div`
  background: linear-gradient(#ffffff, #e2f1ff);
  height: 62.4rem;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
      img {
        max-width: 85%;
      }

      .hero__container {
        margin-top: 2.4rem;
        flex-direction: column;
      }
    }

    ${theme.mediaQueries.sm} {
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      .hero__container {
        margin-top: 2.4rem;
      }
    }

    ${theme.mediaQueries.md} {
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

      .hero__container {
        margin-top: 2.4rem;
      }
    }
  `}
`;

const ButtonLearnMore = styled(Button)`
  background: #fff;
  border: none;
  color: #722ed1;
`;

const Content = styled.div`
  width: 47.2rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  display: flex;

  .content__header {
    display: flex;
    padding: 0.8rem 1.6rem;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    border-radius: 20px;
    background: #f7f1ff;
    font-size: 1.6rem;

    & > div {
      color: #722ed1;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;

      & > a {
        color: #722ed1;
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem;
        text-decoration: underline;
      }
    }
  }

  .content__title {
    color: #000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & > p {
    color: #000;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    opacity: 0.5;
  }

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      width: 100%;
      margin-top: 2.4rem;
      text-align: center;
      align-items: center;

      .content__header {
        padding: 0.4rem 1.2rem;
        font-size: 1.4rem;
      }

      .content__title {
        font-size: 3.6rem;
      }

      & > p {
        font-size: 1.4rem;
      }

      .content__button {
        width: 100%;
        justify-content: center;
      }
    }

    ${theme.mediaQueries.sm} {
      margin-top: 2.4rem;
      text-align: center;
      align-items: center;

      .content__header {
        padding: 0.4rem 1.2rem;
        font-size: 1.4rem;
      }

      .content__title {
        font-size: 3.6rem;
      }

      & > p {
        font-size: 1.4rem;
      }

      .content__button {
        width: 100%;
        justify-content: center;
      }
    }
  `}
`;

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <Wide className="flex">
          {/* <Header /> */}
          <div className="hero__container flex justify-center items-center gap-[1.6rem] grow flex-row">
            <Content>
              <div className="content__header">
                <Brightness />
                <div>
                  v3.1 released. <a href="">Learn more</a>
                </div>
              </div>
              <div className="content__title ">
                Your data with real-time analytics
              </div>
              <p>
                Harness the potential of Big Data Analytics & Cloud Services and
                become a data-driven organization with Needle tail
              </p>
              <div className="content__button flex gap-[1.6rem]">
                <Button $primary>Start free trial</Button>
                <ButtonLearnMore $primary>Learn more</ButtonLearnMore>
              </div>
            </Content>
            <div>
              {/* <Banner /> */}
              <Image
                src={BannerUrl}
                alt="image1"
                className=""
                width={472}
                height={370}
                priority
              />
            </div>
          </div>
        </Wide>
      </HeroWrapper>
    </>
  );
};

export default Hero;
