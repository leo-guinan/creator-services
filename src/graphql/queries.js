/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      description
      image
      creatorServices {
        items {
          id
          serviceName
          contactPhoneNumber
          contactEmail
          serviceDescription
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        description
        image
        creatorServices {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCreatorService = /* GraphQL */ `
  query GetCreatorService($id: ID!) {
    getCreatorService(id: $id) {
      id
      serviceName
      contactPhoneNumber
      contactEmail
      serviceDescription
      user {
        id
        firstName
        lastName
        description
        image
        creatorServices {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCreatorServices = /* GraphQL */ `
  query ListCreatorServices(
    $filter: ModelCreatorServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreatorServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        serviceName
        contactPhoneNumber
        contactEmail
        serviceDescription
        user {
          id
          firstName
          lastName
          description
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
