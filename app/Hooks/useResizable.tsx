import React from "react";

export const useResizable = () => {
  const [node, setNode] = React.useState<HTMLElement | null>(null);

  const ref = React.useCallback((nodeEle: any) => {
    setNode(nodeEle);
  }, []);

  const handleMouseDown = React.useCallback(
    (e: MouseEvent) => {
      if (!node) {
        return;
      }

      const startPos = {
        x: e.clientX,
      };
      const styles = window.getComputedStyle(node);
      const w = parseInt(styles.width, 10);

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const dx = moveEvent.clientX - startPos.x;
        const newWidth = Math.min(w + dx, 500);
        node.style.width = `${newWidth}px`;
        updateCursor();
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove as unknown as EventListener);
        document.removeEventListener("mouseup", handleMouseUp as unknown as EventListener);
        resetCursor();
      };

      document.addEventListener("mousemove", handleMouseMove as unknown as EventListener);
      document.addEventListener("mouseup", handleMouseUp as unknown as EventListener);
    },
    [node]
  );

  const handleTouchStart = React.useCallback(
    (e: TouchEvent) => {
      if (!node) {
        return;
      }
      const touch = e.touches[0];
      const startPos = {
        x: touch.clientX,
      };
      const styles = window.getComputedStyle(node);
      const w = parseInt(styles.width, 10);

      const handleTouchMove = (moveEvent: TouchEvent) => {
        const touch = moveEvent.touches[0];
        const dx = touch.clientX - startPos.x;
        const newWidth = Math.min(w + dx, 500);
        node.style.width = `${newWidth}px`;
        updateCursor();
      };

      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove as unknown as EventListener);
        document.removeEventListener("touchend", handleTouchEnd as unknown as EventListener);
        resetCursor();
      };

      document.addEventListener("touchmove", handleTouchMove as unknown as EventListener);
      document.addEventListener("touchend", handleTouchEnd as unknown as EventListener);
    },
    [node]
  );

  const updateCursor = () => {
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  const resetCursor = () => {
    document.body.style.removeProperty("cursor");
    document.body.style.removeProperty("user-select");
  };

  React.useEffect(() => {
    if (!node) {
      return;
    }
    const resizerElements = Array.from(node.querySelectorAll(".resizer"));
    resizerElements.forEach((resizerEle) => {
      resizerEle.addEventListener("mousedown", handleMouseDown as unknown as EventListener);
      resizerEle.addEventListener("touchstart", handleTouchStart as unknown as EventListener);
    });

    return () => {
      resizerElements.forEach((resizerEle) => {
        resizerEle.removeEventListener("mousedown", handleMouseDown as unknown as EventListener);
        resizerEle.removeEventListener("touchstart", handleTouchStart as unknown as EventListener);
      });
    };
  }, [node, handleMouseDown, handleTouchStart]);

  return [ref];
};
