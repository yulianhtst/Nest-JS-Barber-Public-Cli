import { useState, useEffect, useCallback } from 'react';

const useOffset = myRef => {
  const [widthOffset, setWidth] = useState(0)
  const [leftOffset, setLeft] = useState(0)

  const handleResize = useCallback(() => {
    setWidth(myRef.current.offsetWidth)
    setLeft(myRef.current.offsetLeft)
  }, [myRef])

  useEffect(() => {
    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)



    return () => {
      window.removeEventListener('load', handleResize)
      window.removeEventListener('resize', handleResize)
    }
  }, [myRef, handleResize])

  return { widthOffset, leftOffset }
}
export default useOffset
