import {
  GeneratorCallback,
  Tree,
  addDependenciesToPackageJson,
} from '@nx/devkit';

export function addDependencies(tree: Tree): GeneratorCallback {
  return addDependenciesToPackageJson(
    tree,
    {
      // Prisma dependencies
      '@prisma/client': '5.5.2',
      'nestjs-prisma': '0.22.0',
      // GraphQL dependencies
      '@apollo/server': '4.9.5',
      '@nestjs/apollo': '12.0.9',
      '@nestjs/graphql': '12.0.9',
      graphql: '^16.8.1',
      'graphql-tools': '^9.0.0',
      // Others
      'class-validator': '^0.14.0',
      'class-transformer': '0.5.1',
      '@nestjs/config': '3.1.1',
      '@nestjs/swagger': '7.1.14',
      '@nestjs/terminus': '10.1.1',
    },
    {
      prisma: '5.5.2',
      '@nx-tools/container-metadata': '^5.1.0',
      '@nx-tools/nx-container': '^5.1.0',
    }
  );
}
