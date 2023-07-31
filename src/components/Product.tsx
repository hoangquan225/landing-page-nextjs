"use client";
import { Wide } from "@/components/ui/Box/Wide";
import { css, styled } from "styled-components";
import Image from "next/image";
import Electronic from "../../public/svg/icons/electronic.svg";

const ProductContainer = styled.div`
  // width: 97.45rem;
  height: 43.55rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12.7rem;

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      flex-direction: column-reverse;
      width: 100%;
      height: 100%;
      margin-top: 10rem;

      img {
        max-width: 80%;
        margin: 0.8rem auto;
      }
    }

    ${theme.mediaQueries.md} {
      width: 100%;
      height: 100%;
      margin-top: 10rem;
      gap: 2rem;

      & > div:first-child {
        flex-basis: 40%;
      }

      & > div:nth-child(2) {
        flex-basis: 60%;
      }
    }
  `}
`;

const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;

  .content__header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    padding: 0.8rem 1.6rem;
    border-radius: 20px;
    background: #f7f1ff;

    & > div {
      color: #722ed1;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }

  .content__title {
    color: #160637;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4rem;
  }

  & > p {
    // display: flex;
    // flex-direction: column;

    width: 47.4rem;
    color: #8989a2;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
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
      justify-content: center;

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

const ProductTeams = () => {
  return (
    <Wide>
      <ProductContainer>
        <div>
          <Image
            src="./svg/icons/group-icons.svg"
            alt="group-icons"
            width={412}
            height={435}
            priority
          />
        </div>
        <Content>
          <div className="content__header">
            <Electronic />
            <div>For Product Teams</div>
          </div>
          <div className="content__title">Launch with the best stack</div>
          <p>
            A centralized platform that integrates zillions of data sources
            using Big Data ELT (Extract, Load & Transform) that leaves no data
            behind
          </p>
        </Content>
      </ProductContainer>
    </Wide>
  );
};

export default ProductTeams;
