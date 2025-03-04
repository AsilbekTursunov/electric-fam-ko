export const decodeJWT = (token) => {
  if(!token) return null
  
  try {
    const base64Url = token.split('.')[1] // Extract the payload part
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/') // Convert Base64URL to Base64
    const decodedData = atob(base64) // Decode Base64 string

    // Properly decode UTF-8 characters
    const utf8Decoder = new TextDecoder("utf-8")
    const uint8Array = new Uint8Array([...decodedData].map(c => c.charCodeAt(0)))
    const utf8String = utf8Decoder.decode(uint8Array)

    return JSON.parse(utf8String) // Convert to JSON
  } catch (error) {
    console.log("Invalid token:", error)
    return null
  }
}