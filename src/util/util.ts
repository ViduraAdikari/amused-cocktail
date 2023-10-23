export const getErrorMessageByCode = (statusCode: number): string => {
  switch (statusCode) {
    case 400: return "Bad Request. Invalid syntax, missing required argument or invalid request."
    case 401: return "Unauthorized. Authorization failed."
    case 404: return "Resource not found. The url is invalid."
    case 429: return "Too Many Requests."
    case 500: return "Internal Server Error."
    default: return "Error!"
  }
}
