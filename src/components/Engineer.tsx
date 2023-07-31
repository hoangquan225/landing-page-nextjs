"use client";
import { Wide } from "@/components/ui/Box/Wide";
import { css, styled } from "styled-components";
import Image from "next/image";
import Compass from "../../public/svg/icons/compass.svg";
import BannerSub from "../../public/svg/engineer/image6.svg";
import bannerSubUrl from "../../public/svg/engineer/image6.svg?url";

const EngineerContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 414px;
  margin-top: 12rem;
  margin-bottom: 2.2rem;
  // position: relative;

  .engineer__img {
    position: absolute;
    right: 6%;
  }

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin-top: 10rem;

      img {
        max-width: 85%;
        margin: 0.8rem auto;
      }

      & > div:nth-child(2) {
        position: relative;
        right: 0rem;
      }
    }

    ${theme.mediaQueries.sm} {
      width: 100%;
      height: 100%;
      margin-top: 10rem;
      gap: 2rem;

      & > div:first-child {
        flex-basis: 50%;
      }

      & > div:nth-child(2) {
        flex-basis: 50%;
        position: relative;
        right: unset;
      }
    }

    ${theme.mediaQueries.md} {
      width: 100%;
      height: 100%;
      margin-top: 10rem;
      gap: 2rem;

      & > div:first-child {
        flex-basis: 50%;
      }

      & > div:nth-child(2) {
        flex-basis: 50%;
        position: relative;
        right: 0rem;
      }
    }

    ${theme.mediaQueries.lg} {
      .engineer__img {
        position: relative;
        right: 4%;
      }
    }
  `}
`;

const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  .content__header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 0.8rem 1.6rem;
    border-radius: 20px;
    background: #f7f1ff;

    & > div {
      color: #722ed1;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  }

  .content__title {
    color: #160637;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }

  & > p {
    // display: flex;
    // flex-direction: column;
    width: 474px;
    color: #8989a2;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      width: 100%;
      text-align: center;
      align-items: center;
      height: 100%;

      .content__header {
        padding: 0.4rem 1.2rem;
        font-size: 1.4rem;
      }

      .content__title {
        font-size: 3.6rem;
      }

      & > p {
        font-size: 1.4rem;
        width: 100%;
      }
    }

    ${theme.mediaQueries.sm} {
      height: 100%;
      & > p {
        font-size: 1.4rem;
        width: 100%;
      }
    }

    ${theme.mediaQueries.md} {
      height: 100%;

      & > p {
        font-size: 1.4rem;
        width: 100%;
      }
    }
  `}
`;

const Engineer = () => {
  return (
    <Wide>
      <EngineerContainer>
        <Content>
          <div className="content__header">
            <Compass />
            <div>For Engineering Teams</div>
          </div>
          <div className="content__title">Data-driven pipelines in minutes</div>
          <p>
            Maintenance-free data pipelines with quick set-up and
            straight-forward deployments that are powered by a modern & scalable
            platform.
          </p>
        </Content>
        <div className="engineer__img">
          {/* <BannerSub className="w-[100%]" /> */}
          <Image
            src={bannerSubUrl}
            alt="annerSub"
            width={684}
            height={414}
            priority
          />
        </div>
      </EngineerContainer>
    </Wide>
  );
};

export default Engineer;
