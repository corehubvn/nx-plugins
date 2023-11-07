# nestjs-prisma-graphql

This library was generated with [Nx](https://nx.dev).

## Getting Started

```bash
# Create a new NestJS application
nx g @corehubvn/nestjs-prisma-graphql:application api

# To remove the application
nx g rm api-e2e
nx g rm api
```

# Notes

## Libraries

- @nx-tools/nx-container
- @nx-tools/container-metadata

## Docker build warning

```
#11 10.60 warning @nestjs/apollo > @apollo/server-plugin-landing-page-graphql-playground@4.0.0: The use of GraphQL Playground in Apollo Server was supported in previous versions, but this is no longer the case as of December 31, 2022. This package exists for v4 migration purposes only. We do not intend to resolve security issues or other bugs with this package if they arise, so please migrate away from this to [Apollo Server's default Explorer](https://www.apollographql.com/docs/apollo-server/api/plugin/landing-pages) as soon as possible.
#11 21.39 warning @nestjs/graphql > subscriptions-transport-ws@0.11.0: The `subscriptions-transport-ws` package is no longer maintained. We recommend you use `graphql-ws` instead. For help migrating Apollo software to `graphql-ws`, see https://www.apollographql.com/docs/apollo-server/data/subscriptions/#switching-from-subscriptions-transport-ws    For general help using `graphql-ws`, see https://github.com/enisdenjo/graphql-ws/blob/master/README.md
```
