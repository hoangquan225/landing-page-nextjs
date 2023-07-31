"use client";
import { Wide } from "@/components/ui/Box/Wide";
import { css, styled } from "styled-components";
import { Button } from "@/components/ui/Button";
import Accenture from "../../public/svg/signup/accenture.svg";
import ReactIcon from "../../public/svg/signup/react.svg";
import Airbnb from "../../public/svg/signup/airbnb.svg";
import Sky from "../../public/svg/signup/sky.svg";
import SigninGoogle from "../../public/svg/signup/signin-google.svg";

const SignupContainer = styled.div`
  height: 52.2rem;
  display: flex;
  margin-top: 12rem;
  justify-content: space-between;

  & > div {
    flex-basis: 50%;
  }

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      flex-direction: column;
      height: 100%;
      .signup__bg {
        margin-top: 36px;
        display: flex;
        justify-content: center;

        & > div {
          bottom: unset;
          top: 50px;
        }
      }
    }

    ${theme.mediaQueries.sm} {
      height: 100%;
      flex-direction: column;
      .signup__bg {
        margin-top: 36px;
        display: flex;
        justify-content: center;

        & > div {
          bottom: unset;
          top: 12%;
        }
      }
    }

    @media (max-width: ${theme.breakpoints.md}) {
      height: 100%;
    }
  `}
`;

const Trusted = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 45%;
  margin-right: 46px;
  & > div:first-child {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 4.6rem;
    color: #160637;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4rem;
  }

  .trusted_by {
    color: #898989;
    margin: 0;
    display: flex;
    white-space: nowrap;
    border: 0;

    &::after,
    &::before {
      position: relative;
      width: 100%;
      border-top: thin solid rgba(0, 0, 0, 0.15);
      top: 0%;
      content: "";
      transform: translateY(50%);
    }
  }

  .trusted_by_text {
    margin: 0 2.4rem;
    display: inline-block;
    color: #8989a2;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
  }

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      max-width: 100%;
      margin-right: unset;

      & > div:first-child {
        text-align: center;
      }

      svg {
        margin: auto;
      }
    }

    ${theme.mediaQueries.sm} {
      max-width: 100%;
      margin-right: unset;

      & > div:first-child {
        text-align: center;
      }

      svg {
        margin: auto;
      }
    }
  `}
`;

const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.2rem 4rem;
  gap: 1.6rem;
  width: 89%;
  height: 95%;
  background: #fff;
  border-radius: 0.4rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  position: absolute;
  z-index: 10;
  right: 26px;

  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  .form__title {
    color: #160637;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }

  .signup__or {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      height: unset;
      width: 86%;
      position: relative;
      right: unset;
    }

    ${theme.mediaQueries.sm} {
      height: unset;
      width: 86%;
      position: relative;
      right: unset;
    }

    ${theme.mediaQueries.md} {
      width: 86%;
      padding: 1.2rem 4rem;
      gap: 1rem;
    }

    ${theme.mediaQueries.lg} {
      width: 86%;
    }
  `}
`;

const ButtonSignUp = styled(Button)`
  border-radius: 0.4rem;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  font-size: 1.6rem;
  filter: drop-shadow(0 0.3rem 0.6rem rgba(0, 0, 0, 0.16));
  height: 4.8rem;
  border: 0.1rem solid var(--primary-purple, #722ed1);
  line-height: 2.4rem;
`;

const SignUpInput = styled.div`
  width: 100%;
  & > input {
    width: 100%;
    padding: 1.6rem;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    color: #8989a2;
  }
`;

const SignupForm = () => {
  return (
    <Wide>
      <SignupContainer>
        <Trusted>
          <div>
            See why the world’s best companies use Qubly to become truly
            data-driven.
          </div>
          <div className="trusted_by">
            <span className="trusted_by_text">Trusted by</span>
          </div>
          <div className="flex flex-wrap justify-starts">
            <div className="basis-2/4 mt-[6.8rem]">
              <Accenture />
            </div>
            <div className="basis-2/4 mt-[6.8rem]">
              <ReactIcon />
            </div>
            <div className="basis-2/4 mt-[6.8rem]">
              <Airbnb />
            </div>
            <div className="basis-2/4  mt-[6.8rem]">
              <Sky />
            </div>
          </div>
        </Trusted>

        <div className="signup__bg relative">
          <div className="bg-[#F9F0FF] rounded-[0.4rem] absolute h-[48rem] w-[100%] bottom-0"></div>
          <Form method="submit">
            <div className="form__title">Sign Up</div>
            <ButtonSignUp $primary>Start your free trial</ButtonSignUp>
            <SignUpInput>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your primary email"
              />
            </SignUpInput>
            <SignUpInput>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </SignUpInput>
            <SignUpInput>
              <input
                type="password"
                name="re-typePpassword"
                id="re-typePpassword"
                placeholder="Re-type Password"
              />
            </SignUpInput>
            <div className="signup__or">OR</div>
            <div className="transition duration-300 ease-out hover:translate-y-[-4px]">
              <SigninGoogle />
            </div>
            <div className="border-b-[1px] opacity-50 border-solid w-full border-[#8989A2]"></div>
            <div>
              Already have an account?{" "}
              <a href="" className="text-[#722ED1] hover:underline">
                Login
              </a>
            </div>
          </Form>
        </div>
      </SignupContainer>
    </Wide>
  );
};

export default SignupForm;
