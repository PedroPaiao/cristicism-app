interface SignInRequestData {
  email: string
  password: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function signInRequest(data: SignInRequestData) {
  return {
    token:
      'ae10bf0cafdb398f46100037d0f79f0074ae460b95a1a8a9161d344b7a7592824cbb541bbb51012ef77047969186ccf9b61e4d3522f734be15721ad050f8ac73',
    user: {
      name: 'hide pass',
      email: 'hidepass@gmail.com'
    }
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function recoverUserInfo() {
  return {
    user: {
      name: 'hide pass',
      email: 'hidepass@gmail.com'
    }
  }
}
