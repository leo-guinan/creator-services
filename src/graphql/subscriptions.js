/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCreatorService = /* GraphQL */ `
  subscription OnCreateCreatorService {
    onCreateCreatorService {
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
export const onUpdateCreatorService = /* GraphQL */ `
  subscription OnUpdateCreatorService {
    onUpdateCreatorService {
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
export const onDeleteCreatorService = /* GraphQL */ `
  subscription OnDeleteCreatorService {
    onDeleteCreatorService {
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
