/* eslint-disable no-use-before-define */
/* eslint-disable no-tabs */
import styled, { keyframes } from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalBox = styled.div`
  position: relative;
  min-height: 30%;
  width: 50rem;
  height: 40rem !important;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 200;
  padding: 0 4rem;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.179);
  border-radius: 3px;
  animation: ${myAnim} 1.7s ease 0s 1 normal forwards;

  @media only screen and (max-width: 600px) {
    max-width: 33rem;
    height: 45rem !important;
    padding: 0 1rem;
    border-radius: 12px;
  }

  @media only screen and (max-width: 350px) {
    max-width: 28rem;
    height: 25rem;
  }

  .modal-profile {
    margin-top: 9rem !important;

    @media only screen and (max-width: 600px) {
      margin-top: 7.9rem !important;
    }
    .modal-img {
      max-width: 100%;
      /* width: 10%; */
      display: flex;
      justify-content: center;
    }
    .modal-img > img {
      max-width: 100%;
      object-fit: contain;

      @media only screen and (max-width: 600px) {
        max-width: 70%;
      }
    }
  }
`;
const ModalContent = styled.div`
  text-align: center;
  width: auto !important;
  margin-top: 0.5rem !important;
  margin-bottom: 5rem !important;

  @media only screen and (max-width: 600px) {
    margin-top: 1.6rem !important;
    margin-bottom: 0rem !important;

    .modal-content > p {
      font-size: 1.6rem !important;
    }
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  .button-1 {
    flex: 100%;
  }

  .button-2 {
    flex: 5%;
  }

  a {
    text-decoration: none;
  }

  .request-challenge-btn,
  .exit-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 3px;
    font-weight: bold !important;
  }

  .request-challenge-btn {
    padding: 1.5rem 3rem;
    background: #00b87c;
    cursor: pointer;
    text-decoration: none;

    @media only screen and (max-width: 600px) {
      width: 23rem;
      height: 48px;
      margin: 16px 0px;
      padding: 2rem;
    }
  }

  .exit-btn {
    width: 15rem;
    border: 0.19rem solid #b8003c;
    box-sizing: border-box;
    margin-left: 16px;
    color: #b8003c;
    background: #ffffff;
    cursor: pointer;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    @media only screen and (max-width: 600px) {
      margin-left: 0;
      width: 23rem;
      height: 48px;
      margin-bottom: 16px;
    }
  }

  .exit-button {
    border: 1px solid #e70b0b;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    color: #e70b0b;
    padding: 0;
    padding: 1.5rem 5rem;
    width: 100%;
    /* margin: 2rem 0; */
    text-align: center;
    overflow: hidden;
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    letter-spacing: -0.01em;
  }

  .exit-button:hover {
    color: #fff;
    background-color: #e70b0b;
  }
`;

const myAnim = keyframes`
  0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateY(-250px);
	}

	38% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0);
	}

	55% {
		animation-timing-function: ease-in;
		transform: translateY(-65px);
	}

	72% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	81% {
		animation-timing-function: ease-in;
		transform: translateY(-28px);
	}

	90% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	95% {
		animation-timing-function: ease-in;
		transform: translateY(-8px);
	}

	100% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}
`;

export { ModalWrapper, ModalBackdrop, ModalBox, ModalContent, Button };
