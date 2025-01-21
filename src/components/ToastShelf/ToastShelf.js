import React from "react";

import Toast from "../Toast";
import * as styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toastList } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList &&
        toastList.map((t) => (
          <li className={styles.toastWrapper} key={crypto.randomUUID()}>
            <Toast variant={t.variant} id={t.id}>
              {t.content}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
