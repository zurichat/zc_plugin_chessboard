/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const RulesContainer = styled.div`
  width: 100%;

  .top {
    display: flex;
    flex-direction: row;
    margin: 2rem auto;
    width: 95%;
    justify-content: space-around;
    padding: 3rem 0;
    border-radius: 0.5rem;
    background: #00bb7c;

    .content {
      width: 80%;
      color: white;
    }
    .content_heading {
      font-size: 20px;
      padding-bottom: 5px;
    }
    .content_heading_par {
      font-size: 15px;
      line-height: 23px;
      text-align: justify;
      padding-bottom: 5px;
    }

    .pieces {
      position: relative;
      width: 10%;
      display: flex;
      justify-content: center;

      img {
        width: 4.6rem;
        height: 6rem;
      }

      .white img {
        position: absolute;
        bottom: 1.5rem;
        right: 2rem;
        transform: rotate(15deg);
      }
    }
  }

  .middle {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .carrier {
      width: 20rem;
      text-align: center;
      height: 25rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .carrier {
      width: 20rem;
      text-align: center;
      height: 25rem;
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .grey-space {
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
        width: 100%;

        img {
          width: 5rem;
          height: 6rem;
        }

        .queen img,
        .king img {
          width: 6rem;
          height: 7rem;
        }

        .image,
        .queen,
        .king {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          background: #f3f3f3;
          width: 70%;
        }
      }

      .white-space {
        height: 30%;
        width: 100%;
        text-align: center;

        p {
          font-size: 1.3rem;
          line-height: 17px;
        }

        h4 {
          font-size: 1.9rem;
        }
      }
    }
  }

  .bottom {
    text-align: center;
    margin-top: 5rem;

    button {
      background: #1db286;
      border-radius: 0.3rem;
      color: white;
      width: 30%;
      height: 5rem;
      padding: 0.5rem 0;
      outline: none;
      border: none;
      margin-bottom: 40px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .top {
      padding: 0.2rem;
    }

    .top .content {
      width: 75%;
      padding: 10px 15px;
    }

    .top .content p {
      font-size: 1rem;
      line-height: 18px;
    }

    // .top .content h4 {
    //   font-size: 20px;
    // }
    .content_heading {
      font-size: 17px;
      padding-bottom: 0;
    }

    .top .pieces {
      width: 20%;
      justify-content: center;
      align-items: center;
    }

    .top .pieces img {
      width: 3rem;
      height: 4rem;
    }

    .top .pieces .white img {
      right: 0.8rem;
      bottom: 1.5rem;
    }

    .middle {
      width: 100%;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      display: flex;
      text-align: center;
    }

    .middle .carrier {
      width: 40%;
      margin: 1rem 0 2rem 0;
    }

    .middle .carrier .grey-space {
      height: 50%;
    }

    .middle .carrier .grey-space .image img,
    .middle .carrier .grey-space .queen img,
    .middle .carrier .grey-space .king img {
      width: 3rem;
      height: 3.5rem;
    }

    .middle .carrier .whitespace p,
    .middle .carrier .whitespace h4 {
      font-size: 1rem;
    }
  }

  @media (width: 768px) {
    .top .pieces {
      align-items: center;
      justify-content: flex-start;
    }

    .top .pieces .white img {
      left: 2rem;
      top: 5.5rem;
    }

    .content_heading {
      font-size: 17px;
      padding-bottom: 0;
    }
  }

  @media (width: 1024px) {
    .top .pieces {
      align-items: center;
    }

    .top .pieces .white img {
      right: 2rem;
      bottom: 1rem;
    }
  }

  @media (width: 1440px) {
    .middle .carrier {
      margin: 1rem auto 2rem auto;
    }
  }
`;
