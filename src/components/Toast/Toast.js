import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X as CloseButton,
} from "react-feather";

import * as styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, timeAlive = 4000, id, children }) {
  const [isOpen, setIsOpen] = React.useState(true);
  const IconComponent = Object.keys(ICONS_BY_VARIANT).includes(variant)
    ? ICONS_BY_VARIANT[variant]
    : ICONS_BY_VARIANT["notice"];

  const { dismissToast } = React.useContext(ToastContext);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, timeAlive);
  }, [timeAlive]);
  return (
    isOpen && (
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <IconComponent size={24} />
        </div>
        <p className={styles.content}>
          <span className="VisuallyHidden_wrapper">error</span>
          {children}
        </p>
        <button
          className={styles.closeButton}
          onClick={() => dismissToast(id)}
          aria-label="Dismiss message"
          aria-live="off"
        >
          <CloseButton size={24} />
        </button>
      </div>
    )
  );
}

export default Toast;
