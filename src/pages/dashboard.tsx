import { useSearchParams, useParams, useLocation } from "react-router-dom";

export default function Dashboard(){
    // params
    const pId = useParams()?.id;

    // search
    const [search] = useSearchParams();
    const sId = search?.get('id');

    // state
    const location = useLocation();
    const stateId = location?.state?.id;

    return <>
        <div>params: {pId}</div>
        <div>search: {sId}</div>
        <div>locationState: {stateId}</div>
    </>
}