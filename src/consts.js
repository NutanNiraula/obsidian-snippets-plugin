const DEFAULT_VARIANTS = {
  python: {
    template: 'python3 -c "{{src}}"',
    showModal: true,
    appendOutputContents: true,
    showRunButtonInPreview: true,
  },
  javascript: {
    template: 'node -e "{{src}}"',
    showModal: true,
    appendOutputContents: true,
    showRunButtonInPreview: true,
  },
  sh: {
    template: "{{src}}",
    showModal: true,
    appendOutputContents: true,
    showRunButtonInPreview: true,
  },
  swift: {
    template: 'echo \'{{src}}\' >| \'/Users/nutanniraula/temp.swift\' && swift \'/Users/nutanniraula/temp.swift\'',
    showModal: true,
    appendOutputContents: true,
    showRunButtonInPreview: true,
  },
};

module.exports = {
  variants: DEFAULT_VARIANTS,
};
