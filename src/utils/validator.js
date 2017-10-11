// import validator from 'validator'

export const hasError = meta => meta.touched && meta.error

export const isRequired = value => (value ? undefined : 'Required field')
