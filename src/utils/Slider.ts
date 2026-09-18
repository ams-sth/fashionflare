import SliderImport from "react-slick";

// react-slick's CJS default export gets double-wrapped by Vite's dep
// pre-bundler; unwrap it explicitly instead of relying on interop detection.
const Slider =
	(SliderImport as unknown as { default?: typeof SliderImport }).default ??
	SliderImport;

export default Slider;
