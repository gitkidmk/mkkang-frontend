import React from 'react';
import "./css/AnyPage.css"
import axios from "../axios";

function AnyPage() {
    // github 와 notion
    // css 효과는 나중에
    const notionSite : string = "https://mkkang-space.notion.site/Mkkang-s-space-89f12ded7e674b4099449ff21b7464df";
    const gitSite : string = "https://github.com/gitkidmk?tab=repositories";

    return (
        <div className={"any-container"}>
            <div id={"notion"}
                 className={"any-child"}
                 onClick={() => window.open(notionSite)}>notion</div>
            <div id={"github"}
                 className={"any-child"}
                 onClick={() => window.open(gitSite)}>github</div>
        </div>
    );
}

export default AnyPage;