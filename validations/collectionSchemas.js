import * as Yup from 'yup'

const ETH_ADDR_REGEX = /^0x[a-fA-F0-9]{40}$/

const collectionShape = {
  name: Yup.string(),
  description: Yup.string(),
  image: Yup.string().url('Image must be a valid URL'),
  symbol: Yup.string().min(2, 'Symbol must be 2 characters or more').max(5, 'Symbol must be 5 characters or less'),
  owner: Yup.string().matches(ETH_ADDR_REGEX, 'Owner must be a valid Ethereum address')
}

export const createCollectionSchema = Yup.object().shape({
  name: collectionShape.name.required('Name is required'),
  description: collectionShape.description.required('Description is required'),
  image: collectionShape.image.required('Image is required'),
  symbol: collectionShape.symbol.required('Symbol is required'),
  owner: collectionShape.owner.required('Owner is required')
})

export const updateCollectionSchema = Yup.object().shape(collectionShape)