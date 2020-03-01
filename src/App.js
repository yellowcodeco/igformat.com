// IMPORTS
import React, { useState, useEffect, useRef } from "react";
import Image from "./img/marvey.online.jpg";
import Dictionary from "./dictionary.json";
import MobileDetect from "mobile-detect";

// MAIN COMPONENT
const App = props => {
  // States
  const toCopy = useRef(null);
  const [alert, setAlert] = useState(false);
  const [caption, setCaption] = useState("");
  const [converted, setConverted] = useState("");
  const [userAgent, setUserAgent] = useState(null);

  // Functions
  /**
   * Return html text
   * @param {string} text string to be regex
   * @returns {object} html copy text
   */
  const getCaptionShort = text => {
    const re = new RegExp("↵", "g");
    let copyText = text.replace(re, "<br/>");
    return { __html: copyText };
  };

  /**
   * Finds regular text version
   * @param {string} text text that is formatted
   * @returns {string} text that is unformatted
   */
  const getRegulatText = text => {
    let newText = text;
    for (let i in Dictionary) {
      let re = new RegExp(`${Dictionary[i]["bold-code"]}`, "g");
      newText = newText.replace(re, i);
      re = new RegExp(`${Dictionary[i]["italic-code"]}`, "g");
      newText = newText.replace(re, i);
    }
    return newText;
  };

  /**
   * When form is submitted
   * @param {Event} event on form submit
   * @returns {void}
   */
  const onSubmitForm = event => {
    toCopy.current.select();
    if (toCopy.current.value.length > 0) {
      document.execCommand("copy");
      toCopy.current.blur();
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
    event.preventDefault();
  };

  /**
   * Function that formats the text for bold or italic
   * @param {string} value text to be formatted
   * @returns {void}
   */
  const formatText = value => {
    let input = window
      .encodeURI(value)
      .split(/%0A/g)
      .map(i => i.replace(/((%20)+)$/g, ""))
      .join("↵\n");

    // Remove Spaces
    let re = new RegExp(`${Dictionary[" "]["code"]}`, "g");
    input = input.replace(re, " ");

    for (let i in Dictionary) {
      re = new RegExp(`${Dictionary[i]["bold-code"]}`, "g");
      input = input.replace(re, Dictionary[i]["bold"]);
      re = new RegExp(`${Dictionary[i]["italic-code"]}`, "g");
      input = input.replace(re, Dictionary[i]["italic"]);
    }
    setConverted(input);
  };

  /**
   * Event handling for textarea onchange
   * @param {Event} event text area onchange
   * @returns {void}
   */
  const onChangeTextarea = event => {
    setCaption(event.target.value);
    formatText(event.target.value);
  };

  /**
   * Function that formats the style selected
   * @param {string} style
   * @returns {void}
   */
  const formatStyle = style => event => {
    const selection = window.getSelection();
    const start = selection.focusNode.firstElementChild.selectionStart;
    const end = selection.focusNode.firstElementChild.selectionEnd;
    let newCaption = window.decodeURI(
      getRegulatText(window.encodeURI(caption.slice(start, end)))
    );

    for (let i in Dictionary) {
      let re = new RegExp(`${i}`, "g");
      newCaption = newCaption.replace(
        re,
        style === "normal" ? i : Dictionary[i][style]
      );
    }
    newCaption = `${caption.slice(0, start)}${newCaption}${caption.slice(end)}`;
    setCaption(newCaption);
    formatText(newCaption);
    event.preventDefault();
  };

  // Hooks
  /**
   * Hook for mobile detection
   * Remove styling for mobile
   */
  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      setUserAgent("mobile");
    } else {
      setUserAgent("desktop");
    }
  }, []);

  return (
    <>
      <header>
        <h1>
          <span>IG</span>Format<em>.com</em>
        </h1>
      </header>

      <main>
        <div id="tip">
          <p>
            <strong>BOOKMARK THIS PAGE</strong> Don't forget to format your IG
            posts.
          </p>
          <p>
            <strong>
              <small>
                <span>!</span>
                PLEASE NOTE THIS HAS LIMITTED SUPPORT FOR INTERNATIONAL
                CHARACTERS
              </small>
            </strong>
          </p>
        </div>
        <section id="formatter">
          <form onSubmit={onSubmitForm}>
            <div id="formatter-textarea">
              <textarea
                ref={toCopy}
                onChange={onChangeTextarea}
                name="caption"
                placeholder="Your caption..."
                value={caption}
              ></textarea>
              {userAgent && userAgent === "desktop" && (
                <>
                  <a
                    id="formatter-normal"
                    href="#normal"
                    onClick={formatStyle("normal")}
                  >
                    n
                  </a>
                  <a
                    id="formatter-bold"
                    href="#bold"
                    onClick={formatStyle("bold")}
                  >
                    b
                  </a>
                  <a
                    id="formatter-bold"
                    href="#italic"
                    onClick={formatStyle("italic")}
                  >
                    i
                  </a>
                  <a id="formatter-emoji" href="#emoji">
                    <span
                      role="img"
                      arial-label="Slightly Smiling Face"
                      aria-labelledby="Slightly Smiling Face"
                    >
                      {" "}
                      ☺
                    </span>
                  </a>
                </>
              )}
            </div>
            <span id="count" className={caption.length > 2200 ? "danger" : ""}>
              {caption.length > 2200 && `(-${caption.length - 2200})`}{" "}
              {caption.length} / 2200
            </span>
            <button type="submit" disabled={!caption || caption.length === 0}>
              Convert + Copy To Clipboard
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer>
          <div id="image">
            <a
              href="https://www.instagram.com/marveyonline/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Image} alt={"@marveyonline"} />
            </a>
          </div>
          <p>
            <span role="img" aria-label="wave" aria-labelledby="wave">
              👋
            </span>
            Please don't forget to follow me at{" "}
            <a
              href="https://www.instagram.com/marveyonline/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @marveyonline
            </a>
          </p>
        </footer>
        <div id="alert" className={(alert && "show") || ""}>
          Copied to Clipboard
        </div>

        {/* PREVIEW */}
        <aside>
          <div id="post">
            <div id="post-top">
              <div id="post-top-profile"></div>
              <div id="post-top-handle"></div>
              <div id="post-top-location"></div>
            </div>
            <div id="post-middle"></div>
            <div id="post-bottom">
              <div id="post-bottom-caption">
                <span>yourhandle</span>&nbsp;
                <div
                  style={{ display: "inline" }}
                  dangerouslySetInnerHTML={getCaptionShort(converted)}
                />
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default App;
