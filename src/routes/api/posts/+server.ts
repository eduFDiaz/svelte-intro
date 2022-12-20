import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    try {
        const posts = await getPosts();
        return new Response(posts);
      } catch (error) {
        console.error(error);
      }
}

const apiUrl = 'https://www.havanatimes.org/wp-json/wp/v2/posts';

async function getPosts(): Promise<any> {
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const data = await response.body;
    return data;
  } else {
    throw new Error('Failed to fetch posts');
  }
}