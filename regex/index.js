export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const usernameRegex = /^[a-zA-Z0-9._]{3,}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d@$!%*#?&]*.{8,}$/;
export const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
export const base64Regex = /^data:[a-zA-Z0-9/]+;base64,([A-Za-z0-9+/=]+\n*)+$/;
export const subDomainRegex = /^[a-zA-Z0-9?]+\.(?:beatstore\.in)$/;
