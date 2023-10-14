import {useState} from "react";

export const AccountSettings = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <header>Kasutaja sätted</header>
            <form>
            <div className="form-group">
                <label onClick={() => setShowPassword(true)}>Vaheta salasõna</label>
                {
                    showPassword &&
                    <>
                        <input type="text" id="password" placeholder="Praegune salasõna"></input>
                        <input type="text" id="password" placeholder="Uus salasõna"></input>
                        <input type="text" id="password" placeholder="Kinnita salasõna"></input>
                    </>
                }
            </div>
            <div>
                <label>Kontaktid:</label>
                <input placeholder="Väärtus"/>
                <select placeholder="Tüüp">
                    <option></option>
                </select>
                <p>+ Lisa kontakt</p>
            </div>
            <input type="submit" value="Save">Salvesta muudatused</input>
            </form>
        </>
    );
}
