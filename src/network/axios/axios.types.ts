export interface loginRequestType {
  username: string;
  password: string;
  deviceToken: string;
}

export interface sendOtpType {
  countryCode: string;
  phoneNumber: string;
}

export interface verifyOtpType {
  otp: string;
  phoneNumber: string;
}

export interface resetPasswordType {
  password: string;
  username: string;
}

export interface putUserPersonalInfoType {
  firstName: string;
  lastName: string;
  email: string;
  profileUri: string;
}

export interface signupRequestType {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  userRole: string;
}

export interface preferredLanguageRequestType {
  id?: string;
  userId: string;
  preferredLanguage: string;
}

export interface getUserRoleRequestType {
  langType: string;
}
