declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'highlight.js/lib/core' {
  const content: typeof import('highlight.js');
  export default content;
}
