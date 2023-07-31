"use client";
import { Wide } from "@/components/ui/Box/Wide";
import { css, styled } from "styled-components";
import Profile from "../../public/svg/testimonial/profile.svg";
import Tonkean from "../../public/svg/testimonial/tonkean.svg";
import BigSpring from "../../public/svg/testimonial/big-spring.svg";
import ClearBit from "../../public/svg/testimonial/clear-bit.svg";
import Mine from "../../public/svg/testimonial/mine.svg";
import Shake from "../../public/svg/testimonial/shake.svg";

const TestimonialWrapper = styled.div`
  background: linear-gradient(#f9f0ff, #e2f1ff);
  height: 73rem;
  &:only-child {
    opacity: 0.4699999988079071;
  }
  clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
      margin-top: 2rem;
    }

    ${theme.mediaQueries.sm} {
      clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
      margin-top: 2rem;
    }

    ${theme.mediaQueries.md} {
      clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
      margin-top: 2rem;
    }
  `}
`;

const TestimonialContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
  height: 100%;
  font-style: normal;

  .testimonial__title {
    color: #160637;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.2rem;
  }

  .testimonial__name {
    color: #000;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.4rem;
  }

  .testimonial__group-img {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      .testimonial__group-img {
        gap: 2.4rem;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    ${theme.mediaQueries.sm} {
      .testimonial__group-img {
        gap: 2.4rem;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    ${theme.mediaQueries.md} {
      .testimonial__group-img {
        gap: 2rem;
      }
    }
  `}
`;

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <Wide>
        <TestimonialContainer>
          <div className="testimonial__title">
            {
              "What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"
            }
          </div>
          <div>
            <Profile />
          </div>
          <div className="testimonial__name">
            Guillaume Cabane
            <br />
            CTO @ BigSpring
          </div>

          <div className="border-b-[2px] border-solid w-full border-[#DEC9FA]"></div>

          <div className="testimonial__group-img ">
            <div>
              <Tonkean />
            </div>
            <div>
              <BigSpring />
            </div>
            <div>
              <ClearBit />
            </div>
            <div>
              <Shake />
            </div>
            <div>
              <Mine />
            </div>
          </div>
        </TestimonialContainer>
      </Wide>
    </TestimonialWrapper>
  );
};

export default Testimonial;
