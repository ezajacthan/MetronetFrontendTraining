import gql from "graphql-tag";

export const QUERIES = gql`
    query getRandomDog {
        randomDog @rest(type: "RandomDog", path: "/breeds/image/random"){
            message
            status
        }
    }
`;