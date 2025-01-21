import React from "react";

import Button from "../Button";

import * as styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [messageInput, setMessageInput] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState("");

  const { addToastTolist } = React.useContext(ToastContext);

  function handlePopToast(e) {
    e.preventDefault();
    if (messageInput && toastVariant) {
      addToastTolist({ variant: toastVariant, content: messageInput });
    }
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handlePopToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={messageInput}
              onChange={(event) => setMessageInput(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map((v, index) => {
            return (
              <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                key={`${v}_${index}`}
              >
                <label htmlFor={`variant-${v}`}>
                  <input
                    id={`variant-${v}`}
                    type="radio"
                    name="variant"
                    value={v}
                    checked={v === toastVariant}
                    onChange={(event) => setToastVariant(event.target.value)}
                  />
                  {v}
                </label>
              </div>
            );
          })}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
