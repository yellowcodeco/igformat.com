// Imports
// ------------------------------------
import React from "react";
import reactStringReplace from "react-string-replace-recursively";

// Styles
import PostStyles from "./styles";
import {
  InstagramArrowBack,
  InstagramHeart,
  InstagramComment,
  InstagramDM,
  InstagramBookmark,
  InstagramHome,
  InstagramExplore,
  InstagramNewPost,
  InstagramActivity,
} from "../../styles/Common";

var config = {
  hashTag: {
    pattern: /(#[a-z\d][\w-]*)/gi,
    matcherFn: function (rawText, processed, key) {
      return (
        <a
          key={key}
          href={`https://www.instagram.com/explore/tags/${
            rawText && rawText.slice(1)
          }/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {processed}
        </a>
      );
    },
  },
  mention: {
    pattern: /\B@([\w.]+[\w]+)/gim,
    matcherFn: function (rawText, processed, key) {
      return (
        <a
          key={key}
          href={`https://www.instagram.com/${rawText && rawText}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{processed}
        </a>
      );
    },
  },
};

// Main Component
// ------------------------------------
export default ({ text }) => {
  const formatText = (value) => {
    const encoded = window
      .encodeURI(value)
      .split("%0A")
      .map((i) => window.decodeURI(i));
    return encoded;
  };

  return (
    <PostStyles.Wrapper>
      <PostStyles.NavBar>
        <span>Post</span>
        <InstagramArrowBack />
      </PostStyles.NavBar>
      <PostStyles.ContentWrapper>
        <PostStyles.Image type="small"></PostStyles.Image>
        <PostStyles.Icons>
          <InstagramHeart />
          <InstagramComment />
          <InstagramDM />
          <InstagramBookmark />
        </PostStyles.Icons>
        <PostStyles.Content>
          <a href="#igformat.com">igformat</a>&nbsp;
          {text &&
            text.length > 0 &&
            formatText(text).map((i, k) => (
              <span key={`caption-${k}`}>
                {i ? reactStringReplace(config)(i) : <br />}
              </span>
            ))}
        </PostStyles.Content>
        <PostStyles.Timestamp>16 Seconds Ago</PostStyles.Timestamp>
        <PostStyles.Image></PostStyles.Image>
      </PostStyles.ContentWrapper>
      <PostStyles.TabBar>
        <span>
          <InstagramHome />
        </span>
        <span>
          <InstagramExplore />
        </span>
        <span>
          <InstagramNewPost />
        </span>
        <span>
          <InstagramActivity />
        </span>
        <span>
          <i></i>
        </span>
      </PostStyles.TabBar>
    </PostStyles.Wrapper>
  );
};
