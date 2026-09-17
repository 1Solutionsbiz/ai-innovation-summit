/**
 * Single, app-wide scroll-direction tracker. One scroll listener shared by
 * every <Reveal>, instead of each instance attaching its own.
 */

type Direction = "up" | "down";

let currentDirection: Direction = "down";
let lastY = typeof window !== "undefined" ? window.scrollY : 0;
let ticking = false;
let initialized = false;

const listeners = new Set<(direction: Direction) => void>();

function handleScroll() {
  if (ticking) return;
  ticking = true;

  requestAnimationFrame(() => {
    const y = window.scrollY;
    const next: Direction = y > lastY ? "down" : y < lastY ? "up" : currentDirection;
    lastY = y;
    ticking = false;

    if (next !== currentDirection) {
      currentDirection = next;
      listeners.forEach((listener) => listener(currentDirection));
    }
  });
}

function ensureListener() {
  if (initialized || typeof window === "undefined") return;
  window.addEventListener("scroll", handleScroll, { passive: true });
  initialized = true;
}

export function getScrollDirection(): Direction {
  return currentDirection;
}

export function subscribeScrollDirection(listener: (direction: Direction) => void) {
  ensureListener();
  listeners.add(listener);
  return () => listeners.delete(listener);
}
