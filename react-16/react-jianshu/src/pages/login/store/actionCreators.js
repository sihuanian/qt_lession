import * as CONTENTS from './constants'

export const changeLoginStatus = status => {
  return {
    type: CONTENTS.CHANGE_LOGIN_STATUS,
    status
  }
}