export const emailRegex: RegExp =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const usernameRegex: RegExp = /^[a-zA-Z0-9._]{3,}$/;
export const passwordRegex: RegExp =
  /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d@$!%*#?&]*.{8,}$/;
export const urlRegex: RegExp = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
export const base64Regex: RegExp =
  /^data:[a-zA-Z0-9/]+;base64,([A-Za-z0-9+/=]+\n*)+$/;
export const subDomainRegex: RegExp = /^[a-zA-Z0-9?]+\.(?:beatstore\.in)$/;
