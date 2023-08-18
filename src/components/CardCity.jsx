import { Link as Anchor } from "react-router-dom"

export default function CardCity({ src, alt, text, id}) {
    return (
        <Anchor to={'/city/'+id}>
            <img src={src} alt={alt} />
            <p>{ text }</p>
        </Anchor>
    )
}
