# NX-Plugins

## Plugins Development

```bash
# Install nx plugins
yarn add -D -W @nx/plugin
yarn add -D -W @nx/nest

# Create a first nestjs plugin
nx g @nx/plugin:plugin --name=@corehubvn/nestjs-prisma-graphql \
--directory=packages/nestjs-prisma-graphql \
--publishable=true

# Create a generator
nx g @nx/plugin:generator application --project=@corehubvn/nestjs-prisma-graphql

# Run your generator
nx g @corehubvn/nestjs-prisma-graphql:application api
```

## List of plugins

- [@corehubvn/nestjs-prisma-graphql](./libs/nestjs-prisma-graphql/README.md)
