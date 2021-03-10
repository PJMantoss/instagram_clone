import React from 'react';

export default function Login(){
    return(
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src='./images/iphone-with-profile.jpg' alt="phone with IG profile" />
            </div>

            <div className="flex flex-col w-2/5">
                <h1 className="flex justify-center w-full">
                    <img src="./images/logo.png" alt="instagram" className="" />
                </h1>

                <form method="POST"></form>
            </div>
        </div>
    )
}