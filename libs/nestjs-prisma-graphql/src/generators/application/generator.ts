import type { GeneratorCallback, Tree } from '@nx/devkit';
import { formatFiles, runTasksInSerial } from '@nx/devkit';
import { applicationGenerator as defaultApplicationGenerator } from '@nx/nest';

import type { ApplicationGeneratorOptions } from './schema';
import { normalizeOptions } from './lib/normalize-options';
import { createFiles } from './lib/create-files';
import { addDependencies } from './lib';

export async function applicationGenerator(
  tree: Tree,
  rawOptions: ApplicationGeneratorOptions
): Promise<GeneratorCallback> {
  return await applicationGeneratorInternal(tree, {
    projectNameAndRootFormat: 'derived',
    ...rawOptions,
  });
}

export async function applicationGeneratorInternal(
  tree: Tree,
  rawOptions: ApplicationGeneratorOptions
): Promise<GeneratorCallback> {
  const tasks: GeneratorCallback[] = [];

  // Invoke the original generator
  const defaultApp = await defaultApplicationGenerator(tree, rawOptions);
  tasks.push(defaultApp);

  // Add any custom tasks on top of the original generator
  const options = await normalizeOptions(tree, rawOptions);
  if (!options.skipPackageJson) {
    const installPackagesTask = addDependencies(tree);
    tasks.push(installPackagesTask);
  }

  createFiles(tree, options);
  if (!options.skipFormat) {
    await formatFiles(tree);
  }

  return runTasksInSerial(...tasks);
}

export default applicationGenerator;
