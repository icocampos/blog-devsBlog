async function fetchGraphQL(text) {
  const NEXT_PUBLIC_API_MOCKING = process.env.NEXT_PUBLIC_API_MOCKING;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('http://localhost:4200/api', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${NEXT_PUBLIC_API_MOCKING}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
