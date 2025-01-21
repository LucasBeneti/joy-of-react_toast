import React from "react";

import { useEscapeClear } from "../../hooks/useEscapeClear";

export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  const [toastDuration, setToastDuration] = React.useState(3000);

  function addToastTolist({ variant, content }) {
    const nextToasts = [
      ...toastList,
      { id: crypto.randomUUID(), variant, content },
    ];
    setToastList(nextToasts);
  }

  function dismissToast(id) {
    const updatedToasts = toastList.filter((t) => t.id !== id);
    setToastList(updatedToasts);
  }

  useEscapeClear(setToastList);
  return (
    <ToastContext.Provider
      value={{ toastList, toastDuration, addToastTolist, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
