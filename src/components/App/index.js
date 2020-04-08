// Imports
// ------------------------------------
import React, { useState, useRef } from "react";
import { Map } from "immutable";
import {
  Editor,
  EditorState,
  convertToRaw,
  // RichUtils,
  ContentState,
  // CharacterMetadata,
} from "draft-js";

// Components
import Post from "../Post";

// Styles
import { Logo, LogoInstagram } from "../../styles/Common";
import AppStyles from "./styles";

// Main Component
// ------------------------------------
export default () => {
  // Vars / State
  const [editState, setEditState] = useState(
    EditorState.createWithContent(
      ContentState.createFromText("Your Caption Goes Here 👋")
    )
  );
  const [notify, setNotify] = useState(false);
  const [notifyTimeout, setNotifyTimeout] = useState(null);
  const toCopy = useRef(null);

  // Functions
  // /**
  //  *
  //  * @param {*} editorState
  //  * @param {*} retainInlineStyles
  //  */
  // const removeInlineStyles = (editorState, retainInlineStyles = []) => {
  //   let blocks = editorState
  //     .getCurrentContent()
  //     .getBlocksAsArray()
  //     .map((singleBlock) =>
  //       singleBlock.set(
  //         "characterList",
  //         singleBlock.getCharacterList().map((charMetaData) => {
  //           if (!charMetaData) {
  //             return charMetaData;
  //           }
  //           let entity = charMetaData.getEntity();
  //           let style = charMetaData.getStyle();
  //           return CharacterMetadata.create({
  //             entity: entity,
  //             style: style.intersect(retainInlineStyles),
  //           });
  //         })
  //       )
  //     );
  //   return EditorState.createWithContent(
  //     ContentState.createFromBlockArray(blocks)
  //   );
  // };

  /**
   *
   * @param {*} state
   */
  const onChangeEditor = (state) => setEditState(state);

  // /**
  //  *
  //  * @param {*} style
  //  */
  // const onClickStyling = (style) => () => {
  //   onChangeEditor(
  //     style === "NORMAL"
  //       ? removeInlineStyles(editState, [])
  //       : RichUtils.toggleInlineStyle(editState, style)
  //   );
  // };

  /**
   * Main function that converts data to format needed and copies to clipboard
   */
  const copyToClipboard = () => {
    // Add Styling
    console.log(convertToRaw(editState.getCurrentContent()).blocks);

    toCopy.current.select();
    if (toCopy.current.value.length > 0) {
      document.execCommand("copy");
      toCopy.current.blur();
      // Notify User
      setNotify(true);
      clearTimeout(notifyTimeout);
      setNotifyTimeout(
        setTimeout(() => {
          setNotify(false);
        }, 750)
      );
    }
  };

  // Hooks
  // useEffect(() => {
  //   console.log("hello");
  //   onChangeEditor();
  // }, []);
  // useEffect(() => {
  //   onChangeEditor("Your Caption Goes Here 👋");
  // }, []);
  const customRenderMap = Map({
    unstyled: {
      element: "div",
      aliasedElements: ["p"],
    },
    break: {
      element: "div",
      aliasedElements: ["br"],
    },
  });

  // Render
  return (
    <AppStyles.Wrapper>
      <main>
        <header>
          <h1>
            <a href="/" title="IGFormat.com">
              <Logo />
              <span>IG</span>
              <span>Format</span>
            </a>
          </h1>
          <a
            title="@marveyonline"
            href="https://instagram.com/marveyonline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoInstagram />
          </a>
        </header>
        <section>
          <p>Edit or paste your text below</p>

          <AppStyles.Editor>
            <Editor
              stripPastedStyles={true}
              editorState={editState}
              onChange={onChangeEditor}
              blockRenderMap={customRenderMap}
              // handleKeyCommand={handleKeyCommand}
            />
          </AppStyles.Editor>

          {/* %E2%81%A3%0A%E2%81%A3%0A
          <AppStyles.Controls>
            <button title="Regular Text" onClick={onClickStyling("NORMAL")}>
              r
            </button>
            <button title="Bold Text" onClick={onClickStyling("BOLD")}>
              b
            </button>
            <button title="Italic Text" onClick={onClickStyling("ITALIC")}>
              i
            </button>
          </AppStyles.Controls> */}
          <button onClick={copyToClipboard}>Copy To Clipboard</button>
          <AppStyles.Preview>
            <textarea
              style={{ width: "100%", height: "300px" }}
              readOnly
              ref={toCopy}
              value={window.decodeURI(
                editState
                  .getCurrentContent()
                  .getBlocksAsArray()
                  .map((singleBlock) => singleBlock.getText())
                  .join("%E2%81%A3%0A")
              )}
            ></textarea>
          </AppStyles.Preview>
        </section>
        <footer>
          <dl>
            <dt></dt>
            <dd>
              <strong>Merhaba, Ben Marvey!</strong>
              <br />
              IG post yazını güzelce hazırlaman için bu websiteyi hazırladık.
              Evet, tamamen ucretiz.
              <span role="img" aria-label="Emoji Party">
                🎉
              </span>{" "}
              Instagram tip ve güncel sosyal medya gelişmeleri için hesabımı
              takip etmeyi unutma.
              <br />
              Instagram{" "}
              <span role="img" aria-label="Emoji Point Right">
                👉
              </span>
              <a href="https://instagram.com/marveyonline">@marveyonline</a>
              <span role="img" aria-label="Emoji Point Left">
                👈
              </span>
            </dd>
          </dl>
          <p>
            <span role="img" aria-label="Emoji Hand Waving">
              👋
            </span>{" "}
            Please don't forget to follow me at{" "}
            <a
              title="@marveonline"
              href="https://instagram.com/marveyonline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @marveyonline
            </a>
          </p>
        </footer>
      </main>
      <aside>
        <Post text={editState.getCurrentContent().getPlainText()} />
      </aside>
      <AppStyles.Notification show={notify}>
        Copied To Clipboard
      </AppStyles.Notification>
    </AppStyles.Wrapper>
  );
};
