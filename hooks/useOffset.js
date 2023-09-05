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


  // // const MyComponent = () => {
  // //     const ref = useRef(null);
  // //     useEffect(() => {
  // //         console.log('width', ref.current ? ref.current.offsetWidth : 0);
  // //     }, [ref.current]);
  // //     return <div ref={ref}>Hello</div>;
  // // };
  // export const useContainerDimensions = myRef => {
  //   const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  //   useEffect(() => {
  //     const getDimensions = () => ({
  //       width: myRef.current.offsetWidth,
  //       height: myRef.current.offsetHeight
  //     })

  //     const handleResize = () => {
  //       setDimensions(getDimensions())
  //     }

  //     if (myRef.current) {
  //       setDimensions(getDimensions())
  //     }

  //     window.addEventListener("resize", handleResize)

  //     return () => {
  //       window.removeEventListener("resize", handleResize)
  //     }
  //   }, [myRef])

  //   return dimensions;
  // };
  // const MyComponent = () => {
  //   const componentRef = useRef()
  //   const { width, height } = useContainerDimensions(componentRef)

  //   return (
  //     <div ref={componentRef}>
  //       <p>width: {width}px</p>
  //       <p>height: {height}px</p>
  //       <div />
  //       )
  // }