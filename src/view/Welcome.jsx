import React, {useState,useEffect} from "react";
import {Redirect} from "react-router-dom";
import "../sass/Welcome.sass"

    function Welcome() {
        const [redirect, updateRedirect] = useState(false);


        useEffect(()=>{
            setTimeout(()=> updateRedirect(true), 13000)
        },[])

    return (
        <>

            {redirect === true ? <Redirect to="/Home"/> :
                <main className="Welcome">
                    <div className="Welcome__box">
                    <h2 className="Welcome__box__title">Welcome</h2>
                    <span className="Welcome__box__line"/>
                    </div>
                </main>
            }
        </>
        )
    }
    export default Welcome
