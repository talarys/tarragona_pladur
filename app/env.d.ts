declare namespace NodeJS {
  interface ProcessEnv {
    EMAIL_USER: string
    EMAIL_PASSWORD: string
    EMAIL_RECIPIENT?: string
  }
}
