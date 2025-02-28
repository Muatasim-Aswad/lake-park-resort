export async function handler(event) {
  //get request query parameters
  const { start, end, number } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World", start, end, number }),
  };
}
