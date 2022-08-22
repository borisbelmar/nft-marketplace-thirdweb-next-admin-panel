import * as Yup from 'yup'

const userShape = {
  firstName: Yup.string().min(3, 'First name must be 3 characters or more').max(20, 'First name must be 20 characters or less'),
  lastName: Yup.string().min(3, 'Last name must be 3 characters or more').max(20, 'Last name must be 20 characters or less'),
  email: Yup.string().email('Email must be a valid email address'),
  password: Yup.string().min(6, 'Password must be 6 characters or more'),
  wallets: Yup.string()
}

const userShapeBackend = {
  ...userShape,
  wallets: Yup.array().of(Yup.string().matches(/^0x[a-fA-F0-9]{40}$/, 'Wallet must be a valid Ethereum address'))
}

export const createUserSchemaBackend = Yup.object().shape({
  firstName: userShapeBackend.firstName.required('First name is required'),
  lastName: userShapeBackend.lastName.required('Last name is required'),
  email: userShapeBackend.email.required('Email is required'),
  password: userShapeBackend.password.required('Password is required'),
  wallets: userShapeBackend.wallets.required('Wallets is required')
})

export const updateUserSchemaBackend = Yup.object().shape(userShapeBackend)

export const createUserSchemaFront = Yup.object().shape({
  firstName: userShape.firstName.required('First name is required'),
  lastName: userShape.lastName.required('Last name is required'),
  email: userShape.email.required('Email is required'),
  password: userShape.password.required('Password is required'),
  wallets: userShape.wallets.required('Wallets is required')
})

export const updateUserSchemaFront = Yup.object().shape(userShape)