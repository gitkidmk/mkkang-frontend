import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import './css/Mainpage.css';
import axios from "../axios";
import {useState} from "react";
// TODO: access-token (http-only여서... 접근 불가)이 존재하면 main 페이지로 바로
// 따라서 role 이 존재하면 보내보기, role은 5분 살아있기

function MainPage() {
    const [cookies, , ] = useCookies(["role"]);
    const [logoutResult, setLogoutResult] = useState("");
    const logout = () => {
        axios.post("/logout")
            .then( response => {
                console.log(response);
                setLogoutResult(response.data);
                // TODO: router로 전환?
                // csrf 설정 넣으니까 자꾸 막힘...
                // 클라로 전달이 안되었기 때문인데...
                // 스프링에서 form 태그 사용하는 post 요청에서 자동으로 넣어주고
                // http 통신에서는 안넣어주나..?
                window.location.href="/";
                }
            )
    }

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: logoutResult}}/>
            <div className={"link-container"}>
                <Link className={"link"} to={"/any"}>Any</Link>
                <Link className={"link"} to={"/family"}>Family</Link>
                <Link className={"link"} to={"/admin"}>Admin</Link>
            </div>
            <p
                className={"out"}
                onClick={() => logout()}>✖︎︎</p>
        </>
    );
}
/*
*
function AdminPages() {
    return(<>
        <Link className={"link"} to={"/admin"}>Admin</Link>
        <Link className={"link"} to={"/family"}>Family</Link>
        <Link className={"link"} to={"/any"}>Any</Link>
    </>);
}

function FamilyPages() {
    return(<>
        <Link className={"link"} to={"/family"}>Family</Link>
        <Link className={"link"} to={"/any"}>Any</Link>
    </>);
}
* */

/*
*       <div className={"link-container"}>{cookies.role.includes("ADMIN") ?
          AdminPages(): cookies.role.includes("FAMILY")?
              FamilyPages() : <Link className={"link"} to={"/any"}>Any</Link>}
      </div>
* */

export default MainPage;
