"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FloatingExitButton() {
  const router = useRouter();

  const [pos, setPos] = useState({ x: 20, y: 20 }); // initial position
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPos({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <button
      onClick={() => router.push("/")}
      onMouseDown={handleMouseDown}
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        zIndex: 50,
        cursor: dragging ? "grabbing" : "grab",
      }}
      className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full shadow-lg transition-all text-sm sm:text-base"
    >
      Exit
    </button>
  );
}
