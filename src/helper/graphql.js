import { gql } from "@apollo/client";

export const GET_ANT = gql`
  {
    ants {
      name
      length
      color
      weight
    
    }
  }
`;
