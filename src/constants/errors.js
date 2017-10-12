import get from 'lodash/get'

const http = {
  'bad_request': 'Something went wrong with your request'
}

const string = {
  'email': 'Not a valid email address'
}

const any = {
  'required': 'This field is required'
}

export default function (path) {
  const types = {
    http,
    string,
    any
  }

  return get(types, path)
}
