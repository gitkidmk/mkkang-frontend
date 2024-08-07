import {useState} from "react";

export default function ErrorPage(props: { errorCode: number; }) {
    const [message, setMessage] = useState("")
    const errorCode = props.errorCode;
    if (errorCode === 403) {
        setMessage("접근할 수 없는 사용자 권한입니다. 관리자에게 문의해주세요.");
    } else if (errorCode === 400) {
        setMessage("잘못된 주소입니다.")
    } else {
        setMessage("Sorry, an unexpected error has occurred.")
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>{message}</p>
        </div>
    );
}
