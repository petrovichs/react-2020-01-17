import {useState, useCallback} from 'react'

export const useAmount = (initialValue = 0) => {
  const [amount, setAmount] = useState(initialValue)
  const increase = useCallback(() => {
    setAmount(amount + 1)
  }, [amount])
  const decrease = useCallback(() => {
    setAmount(amount > 0 ? amount - 1 : 0)
  }, [amount])

  return {
    amount,
    decrease,
    increase,
  }
}
