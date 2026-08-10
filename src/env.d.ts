/// <reference types="astro/client" />

// gsap ships its plugin type declarations bundled inside "gsap/types/index.d.ts"
// as ambient module blocks, but its package.json "exports" map points the
// "types" condition for subpaths (e.g. "gsap/ScrollTrigger") at a per-file
// declaration that doesn't actually exist. This shim keeps subpath imports
// like `import { ScrollTrigger } from 'gsap/ScrollTrigger'` resolvable.
declare module 'gsap/ScrollTrigger' {
	const ScrollTrigger: any;
	export { ScrollTrigger };
	export default ScrollTrigger;
}

// This editor's diagnostics don't seem to traverse pnpm's symlinked
// node_modules layout to pick up gsap's own types either, so the base
// import ends up untyped too. Shim it the same way.
declare module 'gsap' {
	const gsap: any;
	export { gsap };
	export default gsap;
}
