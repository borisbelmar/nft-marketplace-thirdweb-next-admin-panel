import { useToken } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react'

const NATIVE_TOKEN_ADDRESS = "0x0000000000000000000000000000000000001010";

export default function useAddressBalance(address, tokenAddress) {
  const [balance, setBalance] = useState(0)
  const token = useToken(tokenAddress || NATIVE_TOKEN_ADDRESS)

  useEffect(() => {
    if (address) {
      token.balanceOf(address).then(setBalance)
    }
  }, [address, token])

  return {
    balance
  }
}
