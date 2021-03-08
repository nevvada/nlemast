module.exports = {
  moduleDirectories: [
    'node_modules',
    '<rootDir>/node_modules',
    '.',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx'
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    "\\.svg$": "<rootDir>/src/mocks/svgMock.js"
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
