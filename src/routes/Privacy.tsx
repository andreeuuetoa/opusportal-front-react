import {useParams} from "react-router-dom";

export const Privacy = () => {
    let {id} = useParams();

    return (
        <>
            JWTResponse: {id}
        </>
    );
}