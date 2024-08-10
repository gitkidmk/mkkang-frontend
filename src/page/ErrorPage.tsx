import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ErrorPage(props: { errorCode: number; }) {
    const [message, setMessage] = useState("")
    const errorCode = props.errorCode;
    const navigate = useNavigate();

    useEffect(() => {
        if (errorCode === 403) {
            setMessage("접근할 수 없는 사용자 권한입니다. 관리자에게 문의해주세요.");
        } else if (errorCode === 400) {
            setMessage("잘못된 주소입니다.")
        } else {
            setMessage("Sorry, an unexpected error has occurred.")
        }
    },[])

    const goToMain = () => {
        navigate("/main");
    }

    const goToLogin = () => {
        navigate("/");
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>{message}</p>
            {errorCode === 500 ?
                <button onClick={() => goToLogin()}>go to login page</button>:
                <button onClick={() => goToMain()}>go to main page</button>}
        </div>
    );
}
