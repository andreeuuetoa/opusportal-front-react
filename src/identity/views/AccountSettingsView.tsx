import {useState} from "react";

export const AccountSettingsView = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="account-settings-page">
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
                <button type="submit" value="Save" className="btn btn-lg submit-btn">Salvesta muudatused</button>
            </form>
        </div>
    );
}
