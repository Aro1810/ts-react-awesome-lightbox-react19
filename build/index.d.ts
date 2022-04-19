import React from "react";
declare type TouchEvent = React.MouseEvent<HTMLImageElement, MouseEvent> | React.TouchEvent<HTMLImageElement>;
interface PropTypes {
    startIndex?: number;
    zoomStep?: number;
    allowZoom?: boolean;
    doubleClickZoom?: number;
    images?: Array<{
        url: string;
        title: string;
    }>;
    onNavigateImage?: (index: number) => void;
    onClose?: (e: KeyboardEvent | TouchEvent) => void;
    allowReset?: boolean;
    clickOutsideToExit?: boolean;
    keyboardInteraction?: boolean;
    allowRotate?: boolean;
    buttonAlign?: string;
    showTitle?: boolean;
    image?: string;
    title?: string;
}
interface StateTypes {
    x: number;
    y: number;
    zoom: number;
    rotate: number;
    loading: boolean;
    moving: boolean;
    current: number;
    multi: boolean;
}
export default class Lightbox extends React.Component<PropTypes, StateTypes> {
    initX: number;
    initY: number;
    lastX: number;
    lastY: number;
    _cont: React.RefObject<HTMLDivElement>;
    state: {
        x: number;
        y: number;
        zoom: number;
        rotate: number;
        loading: boolean;
        moving: boolean;
        current: number;
        multi: boolean;
    };
    createTransform: (x: number, y: number, zoom: number, rotate: number) => string;
    stopSideEffect: (e: KeyboardEvent | TouchEvent) => void;
    getCurrentImage: (s: StateTypes, p: PropTypes) => string;
    getCurrentTitle: (s: StateTypes, p: PropTypes) => string;
    resetZoom: () => void;
    shockZoom: (e: TouchEvent) => false | void;
    navigateImage: (direction: string, e: KeyboardEvent | React.MouseEvent<HTMLDivElement> | TouchEvent) => void;
    startMove: (e: TouchEvent) => false | undefined;
    duringMove: (e: TouchEvent) => false | undefined;
    endMove: (e: TouchEvent) => void;
    applyZoom: (type: string) => void;
    applyRotate: (type: string) => void;
    reset: (e: KeyboardEvent | TouchEvent) => void;
    exit: (e: KeyboardEvent | TouchEvent) => void;
    shouldShowReset: () => number | boolean;
    canvasClick: (e: TouchEvent) => void;
    keyboardNavigation: (e: KeyboardEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
export {};
//# sourceMappingURL=index.d.ts.map