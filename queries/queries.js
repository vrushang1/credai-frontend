import { gql } from '@apollo/client';

const getAllHealthForms = gql`
{
    healthform{
      id
      businessUEN
      businessName
      name
      email
      phone
      
      
    }
    
  }
`;

export { getAllHealthForms };