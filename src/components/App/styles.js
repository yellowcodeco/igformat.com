// Imports
// ------------------------------------
import styled from "styled-components";
import Colors from "../../styles/Colors";
import Color from "color";
import { LogoStyles, LogoInstagramStyles } from "../../styles/Common/styles";

// Main Styles
// ------------------------------------
export default {
  Wrapper: styled.div`
    display: flex;

    main {
      width: 100%;
      height: 100vh;
      border-right: 1px solid ${Colors.border};

      header {
        display: flex;
        justify-content: space-between;
        padding: 20px 16px;
        align-items: center;
        border-bottom: 1px solid ${Colors.border};

        h1 {
          margin: 0;
          font-size: 21px;
          color: ${Colors.grey};

          a {
            display: flex;
            text-decoration: none;
            color: ${Colors.grey};
            height: 50px;

            ${LogoStyles} {
              height: 50px;
              width: 50px;
              margin-right: 10px;
            }

            span {
              font-weight: 500;
              display: none;
              transition: all 250ms ease-in-out 0s;

              &:nth-child(3) {
                display: block;
                line-height: 50px;
              }
            }

            &:hover {
              span {
                &:nth-child(3) {
                  color: ${Color(Colors.grey).darken(0.8).toString()};
                }
              }
            }
          }
        }

        a {
          display: flex;
          align-items: center;
          height: 26px;

          ${LogoInstagramStyles} {
            g {
              path {
                transition: all 250ms ease-in-out 0s;
                fill: ${Color(Colors.grey).alpha(0.5).toString()};
              }
            }
          }

          &:hover {
            ${LogoInstagramStyles} {
              g {
                path {
                  fill: ${Colors.primary};
                }
              }
            }
          }
        }
      }

      section {
        padding: 25px 16px;
        border-bottom: 1px solid ${Colors.border};

        > p {
          font-size: 14px;
          text-transform: uppercase;
          color: ${Colors.grey};
          font-weight: 500;
        }
        > button {
          background: ${Colors.primary};
          color: ${Colors.white};
          cursor: pointer;
          width: 100%;
          height: 50px;
          border-radius: 4px;
          text-transform: uppercase;
          font-size: 16px;
          border: none;
          transition: all 250ms ease-in-out 0s;

          &:hover {
            background: ${Color(Colors.primary).darken(0.2).toString()};
          }
        }
      }
      footer {
        padding: 25px 16px;

        dl {
          border: 1px solid ${Colors.border};
          box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          display: flex;
          width: 100%;
          flex-direction: column-reverse;
          justify-content: center;
          align-items: center;
          margin: 0 0 20px 0;

          dt {
            background: url("/marveyonline.jpg") no-repeat center center grey;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
            background-size: cover;
            display: flex;
            width: 80px;
            height: 80px;
            border-radius: 80px;
            border: 1px solid ${Colors.border};
            margin-bottom: 20px;
            /* height: 170px;
            width: 30%;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px; */
          }
          dd {
            width: calc(100% - 32px);
            /* width: calc(70% - 40px); */
            /* padding: 20px; */
            padding: 20px 16px;
            margin: 0;
            font-size: 12px;
            line-height: 18px;
            a {
              color: #006bff;
              text-decoration: none;
            }
            strong {
              font-weight: 600;
            }
          }
        }
        p {
          font-size: 10px;
          font-weight: 500;
          a {
            color: #006bff;
            text-decoration: none;
          }
        }
      }
    }

    aside {
      display: none;
      justify-content: center;
      align-items: center;
      background: ${Color(Colors.primary).lighten(0.6).toString()};
      width: calc(100% - 481px);
      height: 100vh;
    }

    @media (min-width: 910px) {
      main {
        width: 480px;

        header {
          padding: 20px 25px;
        }

        section {
          padding: 25px;
        }

        footer {
          padding-left: 25px;
          padding-right: 25px;
          dl {
            flex-direction: row;

            dt {
              width: 90px;
              height: 90px;
              border-radius: 90px;
              margin: 0;
            }

            dd {
              width: calc(70% - 32px);
            }
          }

          p {
            font-size: 13px;
          }
        }
      }
      aside {
        display: flex;
      }
    }
  `,
  Preview: styled.div`
    height: 1px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    background: ${Color(Colors.border).alpha(0.3).toString()};
    position: fixed;
    bottom: -50px;
    border-radius: 4px;
  `,
  Editor: styled.div`
    display: block;
    margin-bottom: 20px;
    > div {
      background: ${Color(Colors.border).alpha(0.3).toString()};
      padding: 20px 17px;
      min-height: 100px;
      max-height: 240px;
      overflow: scroll;
      border-radius: 4px;
      border: 1px solid ${Colors.border};
      color: ${Colors.caption};
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-size: 16px;
    }
  `,
  Controls: styled.div`
    margin-bottom: 20px;

    button {
      border: 1px solid ${Color(Colors.grey).lighten(1.8).toString()};
      width: 33.33%;
      height: 50px;
      cursor: pointer;
      transition: all 250ms ease-in-out 0s;

      &:hover,
      &:active {
        background: ${Colors.primary};
        border-color: ${Colors.primary};
        color: ${Colors.white};
      }

      &:nth-child(1) {
        border-right: none;
        border-bottom-left-radius: 6px;
        border-top-left-radius: 6px;
      }

      &:nth-child(2) {
        font-weight: bold;
      }

      &:nth-child(3) {
        font-style: italic;
        border-left: none;
        border-bottom-right-radius: 6px;
        border-top-right-radius: 6px;
      }
    }
  `,
  Notification: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    height: 50px;
    font-size: 16px;
    background: ${Color(Colors.primary).alpha(0.9).toString()};
    color: ${Colors.white};
    width: 100%;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    transition: all 250ms ease-in-out 0s;
    height: ${(props) => (props.show ? "50px" : "0px")};
    overflow: hidden;
  `,
};
