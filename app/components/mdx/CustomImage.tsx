import React from "react";
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  caption,
}) => (
  <div style={{ margin: "1rem 0", textAlign: "center" }}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
      style={{ borderRadius: '10px' }}
    />
    <span>{caption}</span>
  </div>
);

export default CustomImage;
