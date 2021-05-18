/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCreatorService = /* GraphQL */ `
  mutation CreateCreatorService(
    $input: CreateCreatorServiceInput!
    $condition: ModelCreatorServiceConditionInput
  ) {
    createCreatorService(input: $input, condition: $condition) {
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
export const updateCreatorService = /* GraphQL */ `
  mutation UpdateCreatorService(
    $input: UpdateCreatorServiceInput!
    $condition: ModelCreatorServiceConditionInput
  ) {
    updateCreatorService(input: $input, condition: $condition) {
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
export const deleteCreatorService = /* GraphQL */ `
  mutation DeleteCreatorService(
    $input: DeleteCreatorServiceInput!
    $condition: ModelCreatorServiceConditionInput
  ) {
    deleteCreatorService(input: $input, condition: $condition) {
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
