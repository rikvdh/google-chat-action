export async function notifyGoogleChat(
  url: string,
  body: string
): Promise<void> {
  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })

  const responseBody = await response.json()
  console.log(
    `Google Chat notification failed! error-message=${responseBody.error.message} status=${responseBody.error.status} code=${responseBody.error.code}`
  )

  if (response.status < 200 && response.status > 299) {
    throw new Error(
      `Google Chat notification failed! error-message=${responseBody.error.message} status=${responseBody.error.status} code=${responseBody.error.code}`
    )
  }
}
