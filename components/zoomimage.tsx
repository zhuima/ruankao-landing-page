"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ZoomImage = ({ ...props }) => (
  <Zoom {...props}>
    <Image {...props} alt={props.alt} src={props.src} />
  </Zoom>
);

export default ZoomImage;
