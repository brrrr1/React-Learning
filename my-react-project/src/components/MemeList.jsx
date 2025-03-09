import axios from "axios"
import { useState, useEffect } from "react"
import "./MemeList.css"

function MemeList() {
    const [memes, setMemes] = useState([])

    const HTMLMemes = memes.map((meme) => {
        return (
            <li key={meme.id}>
                <h3>{meme.name}</h3>
                <img src={meme.url} alt={meme.name} className="meme-img" />
            </li>
        )
    })

    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            .then((response) => {
                console.log(response.data.data.memes)
                setMemes(response.data.data.memes)
            })
    }, [])
    

    return (
        <ul className="meme-list">
            {HTMLMemes}
        </ul>
    )
}

export default MemeList;