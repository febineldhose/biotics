export const POST = 'POST';
export const GET = 'GET';
export const PUT = 'PUT';

//
export async function callapi(url, body, method) {
  const value = await fetch(url, {
    body: JSON.stringify(body),
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(e => e.json())
    .then(res => {
      return res;
    })
    .catch(e => {
      return e;
    });

  return value;
}

export const API_RESPONSE = 'Success';
