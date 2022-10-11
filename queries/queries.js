import { gql } from '@apollo/client';

const getAllHealthForms = gql`
  {
    healthform {
      id
      businessUEN
      businessName
      name
      email
      phone
    }
  }
`;

const addHealthForm = gql`
  mutation (
    $file: [Upload!]!
    $businessUEN: String!
    $businessName: String!
    $name: String!
    $email: String!
    $phone: String!
  ) {
    createHealthForm(
      file: $file
      input: {
        businessUEN: $businessUEN
        businessName: $businessName
        name: $name
        email: $email
        phone: $phone
      }
    ) {
      id
      businessName
      businessUEN
      name
      email
      phone
      attachments
    }
  }
`;

export { getAllHealthForms, addHealthForm };
