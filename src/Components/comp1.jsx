import { useState } from 'react';
export function Comp1 () {
    const [darkTheme, setDarkTheme] = useState(false);
    function changeTheme () {
        if (darkTheme === false) {
            setDarkTheme (true)
        } else {setDarkTheme (false)}

    };
    return (<div>
        <div className="Comp1" onClick={changeTheme}>
        Сменить фон </div>
        
        <style jsx global>{`
            body {
                background-color: ${darkTheme ? '#212121' : 'white'};
            }
            .Comp1 {
                color: ${darkTheme ? 'white' : '#212121'};
            }
        `}
        </style>
    </div>)
        

};