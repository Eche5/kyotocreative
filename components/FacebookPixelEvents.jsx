"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
function FacebookPixelEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("798371758765347"); 
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
}

export default FacebookPixelEvents;
