import { request, gql } from 'graphql-request';

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clwejqg4904pn07wbzmzp7cvy/master';

const getImage = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        image {
          url
        }
      }
    }
  `;
  try {
    const result = await request(MASTER_URL, query);
    return result.sliders; // Return sliders directly for easier access
  } catch (error) {
    console.error('GraphQL request failed', error);
    throw error;
  }
};

export default {
  getImage,
};
console.log('MASTER_URL:', MASTER_URL);
