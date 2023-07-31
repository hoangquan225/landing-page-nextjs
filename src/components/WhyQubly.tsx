"use client";
import { Wide } from "@/components/ui/Box/Wide";
import { css, styled } from "styled-components";
import AwesomeEye from "../../public/svg/icons/awesome-eye.svg";
import ChartBar from "../../public/svg/whyQubly/chart-bar-33.svg";
import Newsletter from "../../public/svg/whyQubly/newsletter.svg";
import Timeline from "../../public/svg/whyQubly/timeline.svg";

const WhyQublyContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  margin-top: 11.2rem;
`;

const WheQublyHeader = styled.div`
  display: flex;
  padding: 0.8rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  border-radius: 2rem;
  background: #f7f1ff;

  & > p {
    color: #722ed1;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
  }
`;

const WheQublyTitle = styled.div`
  color: #160637;
  text-align: center;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4rem;
`;

const WheQublySubTitle = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;

  color: #8989a2;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      width: 100%;
    }

    ${theme.mediaQueries.md} {
      width: 100%;
    }
  `}
`;

const WheQublyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  .WheQubly__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    font-style: normal;
    font-size: 1.6rem;
    line-height: 2.4rem;

    & > div:nth-child(2) {
      width: 30.7rem;
      color: #160637;
      text-align: center;
      font-weight: 700;
    }

    & > p {
      width: 30.5rem;
      color: #8989a2;
      text-align: center;
      font-weight: 500;
    }
  }

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      flex-direction: column;
      gap: 3rem;
    }

    ${theme.mediaQueries.sm} {
    }

    .WheQubly__item {
      & > div:nth-child(2) {
        width: 100%;
      }
      & > p {
        width: 100%;
      }
    }
  `}
`;

const WhyQubly = () => {
  return (
    <Wide>
      <WhyQublyContainer>
        <WheQublyHeader>
          <AwesomeEye />
          <p>Why Qubly</p>
        </WheQublyHeader>
        <WheQublyTitle>
          Get actionable insights from Big Data in 3 steps
        </WheQublyTitle>
        <WheQublySubTitle>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </WheQublySubTitle>
        <WheQublyList>
          <div className="WheQubly__item">
            <div>
              <ChartBar />
            </div>
            <div>Valuable business insights</div>
            <p>
              Collect processed & cleansed data that is ready to be analyzed to
              gather valuable business insights.
            </p>
          </div>

          <div className="WheQubly__item">
            <div>
              <Newsletter />
            </div>
            <div>Powerful Algorithms</div>
            <p>
              With the help of powerful algorithms, quality rules & techniques,
              obtain simplified & enriched data.
            </p>
          </div>

          <div className="WheQubly__item">
            <div>
              <Timeline />
            </div>
            <div>Data in real-time</div>
            <p>
              Collect data in real-time from multiple channels and move it into
              a data lake, in its original format.
            </p>
          </div>
        </WheQublyList>
      </WhyQublyContainer>
    </Wide>
  );
};

export default WhyQubly;
