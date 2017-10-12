import get from 'lodash/get'

const any = {
  'required': 'This field is required'
}

const http = {
  'bad_request': 'Something went wrong with your request'
}

const string = {
  'email': 'Not a valid email address'
}

const user = {
  'password_wrong': 'Wrong password'
}

export default function (path) {
  const types = {
    any,
    http,
    string,
    user
  }

  return get(types, path, 'Something went wrong')
}
