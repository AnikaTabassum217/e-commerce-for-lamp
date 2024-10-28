"use client";

import React, { useEffect } from "react";

interface ZoomImageProps {
  src: string;
  alt: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt }) => {
  useEffect(() => {
    const addZoom = (target: string) => {
      const container = document.getElementById(target);
      if (!container) return;

      const imgsrc = window.getComputedStyle(container).backgroundImage.slice(4, -1).replace(/"/g, "");

      const img = new Image();
      img.src = imgsrc;

      img.onload = () => {
        const ratio = img.naturalHeight / img.naturalWidth;

        container.onmousemove = (e) => {
          const rect = container.getBoundingClientRect();
          const xPos = e.clientX - rect.left;
          const yPos = e.clientY - rect.top;
          const xPercent = (xPos / (container.clientWidth / 100)) + "%";
          const yPercent = (yPos / ((container.clientWidth * ratio) / 100)) + "%";

          Object.assign(container.style, {
            backgroundPosition: `${xPercent} ${yPercent}`,
            backgroundSize: `${img.naturalWidth * 2}px`,
            transition: "background-position 0.3s ease, background-size 0.3s ease", // Add transition duration
          });
        };

        container.onmouseleave = () => {
          Object.assign(container.style, {
            backgroundPosition: "center",
            backgroundSize: "cover",
            transition: "background-position 0.3s ease, background-size 0.3s ease", // Add transition duration
          });
        };
      };
    };

    addZoom("zoomC");
  }, []);

  return (
    <div
      id="zoomC"
      className="w-[500px] h-[500px] bg-center bg-cover cursor-pointer"
      style={{ backgroundImage: `url(${src})` }}
      aria-label={alt}
    />
  );
};

export default ZoomImage;


