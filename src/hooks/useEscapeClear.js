import React from "react";

export function useEscapeClear(callback) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.code === "Escape") {
        callback([]);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [callback]);
}
