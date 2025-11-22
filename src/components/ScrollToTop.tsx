"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollToTop Component
 * Automatically scrolls to top of page on forward navigation
 * Preserves scroll position on back button navigation
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const previousPathname = useRef<string | null>(null);
  const isBackNavigation = useRef(false);

  useEffect(() => {
    // Detect back/forward navigation using popstate
    const handlePopState = () => {
      isBackNavigation.current = true;
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    // Only scroll to top if it's NOT a back navigation
    if (!isBackNavigation.current && previousPathname.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // Reset back navigation flag
    isBackNavigation.current = false;
    previousPathname.current = pathname;
  }, [pathname]);

  return null;
}
