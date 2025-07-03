import * as React from "react";

export interface LightboxImage {
  url: string;
  title?: string;
}

export interface LightboxProps {
  startIndex?: number;
  zoomStep?: number;
  allowZoom?: boolean;
  doubleClickZoom?: number;
  images?: Array<LightboxImage>;
  onNavigateImage?: (index: number) => void;
  onClose?: (e: KeyboardEvent | React.MouseEvent<HTMLImageElement, MouseEvent> | React.TouchEvent<HTMLImageElement>) => void;
  allowReset?: boolean;
  clickOutsideToExit?: boolean;
  keyboardInteraction?: boolean;
  allowRotate?: boolean;
  buttonAlign?: string;
  showTitle?: boolean;
  image?: string;
  title?: string;
}

declare class Lightbox extends React.Component<LightboxProps, any> {}

export default Lightbox;