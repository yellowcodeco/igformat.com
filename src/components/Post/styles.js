// Imports
// ------------------------------------
import styled from "styled-components";
import Colors from "../../styles/Colors";
import { InstagramArrowBackStyles } from "../../styles/Common/styles";

// Main Styles
// ------------------------------------
export default {
  Wrapper: styled.div`
    background: ${Colors.white};
    width: 375px;
    height: 667px;
    position: relative;
    overflow: scroll;
  `,
  NavBar: styled.div`
    position: relative;
    height: 44px;
    width: 100%;
    border-bottom: 1px solid ${Colors.border};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    font-weight: 600;

    span {
      display: block;
      line-height: 44px;
      text-align: center;
    }

    ${InstagramArrowBackStyles} {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      transform: rotate(270deg);
      left: 16px;
    }
  `,
  Image: styled.div`
    background: ${Colors.primary};
    display: block;
    width: 100%;
    height: ${(props) => (props.type === "small" ? "40px" : "375px")};
  `,
  Icons: styled.div`
    display: flex;
    width: calc(100% - 32px);
    height: 40px;
    margin-top: 2px;
    position: relative;
    padding: 0 16px;
    align-items: stretch;

    svg {
      display: block;
      padding: 8px;

      &:nth-child(1) {
        margin-left: -8px;
      }

      &:last-child {
        margin-left: auto;
        margin-right: -10px;
      }
    }
  `,
  ContentWrapper: styled.div`
    width: 100%;
    height: calc(100% - 90px);
    overflow: scroll;
  `,
  Content: styled.div`
    padding: 0 16px 15px 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgb(38, 38, 38);
    > a {
      font-weight: 600;
      color: rgb(38, 38, 38);
      text-decoration: none;
    }

    span {
      display: block;
      overflow-wrap: break-word;
      margin: 0;

      &:nth-child(2) {
        display: inline;
      }

      a {
        color: rgba(0, 55, 107);
        text-decoration: none;
      }
    }
  `,
  Timestamp: styled.div`
    height: 19px;
    margin-bottom: 4px;
    color: rgb(142, 142, 142);
    padding: 0 16px;
    line-height: 18px;
    font-size: 10px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  `,
  TabBar: styled.div`
    background: ${Colors.white};
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 44px;
    border-top: 1px solid ${Colors.border};

    span {
      display: flex;
      width: 20%;
      align-items: center;
      justify-content: center;

      i {
        display: block;
        width: 23px;
        height: 23px;
        border: 1px solid ${Colors.border};
        border-radius: 23px;
        &:after {
          content: "";
          display: block;
          width: 23px;
          height: 23px;
          background: ${Colors.primary};
          border-radius: 23px;
        }
      }
    }
  `,
};
