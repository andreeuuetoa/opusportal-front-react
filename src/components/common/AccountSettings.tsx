import {useState} from "react";

export const AccountSettings = () => {
    const [password, setPassword] = useState(false);

    return (
        <>
            <header>Kasutaja sätted</header>
            <form>
            <div className="form-group">
                <label>Vaheta salasõna</label>
                <input type="text" id="password" placeholder="Praegune salasõna"></input>
                <input type="text" id="password" placeholder="Uus salasõna"></input>
                <input type="text" id="password" placeholder="Kinnita salasõna"></input>
            </div>
            <input type="submit" value="Save">Salvesta muudatused</input>
            </form>
        </>
    );
}