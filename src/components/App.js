import { useEffect } from "react/cjs/react.development"
import { useState } from "react/cjs/react.development"

// create your App component here
export default function App() {

    const [image, setImage] = useState(false)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(data=>setImage(data))
    })

    return (
        <>
        {image ? <img src={image.message} alt="A Random Dog" /> : <p>Loading...</p>}
        </>
    )
}