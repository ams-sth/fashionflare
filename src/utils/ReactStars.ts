import ReactStarsImport from "react-stars";

// react-stars's CJS default export gets double-wrapped by Vite's dep
// pre-bundler; unwrap it explicitly instead of relying on interop detection.
const ReactStars =
	(ReactStarsImport as unknown as { default?: typeof ReactStarsImport })
		.default ?? ReactStarsImport;

export default ReactStars;
