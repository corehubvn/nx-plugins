/* eslint-disable */
export default {
  displayName: '@corehubvn/nestjs-prisma-graphql',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/nestjs-prisma-graphql',
};
