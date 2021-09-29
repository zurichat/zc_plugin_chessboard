import styled from "styled-components";

const ForfeitContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ForfeitModal = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 464px;
  height: 599px;
  border-radius: 4px;
  box-shadow: 1px 1px 44px rgba(64, 64, 64, 0.5);
`;

const ForfeitModalClose = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

const ForfeitHeader = styled.div`
  margin-top: 0.1em;
`;

const ForfeitContent = styled.div`
  margin-top: 0.1em;

  .forfeit-content-text {
    text-align: center;
    font-size: 1.6em;
    font-weight: normal;
    color: #505050;
    line-height: 24px;
    padding: 1.1em 0 2em 0;
    text-align: center;
  }
`;

const ForfeitFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 5rem;
  font-size: 1.4rem;
  letter-spacing: 1px;
`;

const ForfeitGameBtn = styled.div`
  .btn-forfeit-modal {
    font-size: 1.2em;
    line-height: 17px;
    font-weight: 300;
    border-radius: 4px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .btn-accept-forfeit {
    background-color: #00b87c;
    color: #fff;
  }

  .btn-decline-forfeit {
    background-color: #fff;
    color: #b8003c;
    border: 1px solid #a37d8a;
  }
`;

export {
  ForfeitContainer,
  ForfeitModal,
  ForfeitModalClose,
  ForfeitHeader,
  ForfeitContent,
  ForfeitFooter,
  ForfeitGameBtn,
};
