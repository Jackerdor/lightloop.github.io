import React, {useState, useEffect} from 'react'

const Cursor = () => {

const [mousePosition, setMousePosition] = useState({
    x:400,
    y:400,
})

const onMouseMove = event => {
    const {pageX: x , pageY: y} = event;
    setMousePosition({x, y})
}


        useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('scroll', onMouseMove)
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('scroll', onMouseMove)
            }
        }, [])

return (

        <div>
            <div className="member-cursor" style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}></div>
        </div>
    )
}

export default Cursor
