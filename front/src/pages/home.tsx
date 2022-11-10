import React, { useState } from "react";
import { Button, Center } from "@chakra-ui/react"
import { Identity } from "@semaphore-protocol/identity"

const Home = () => {
    // const { trapdoor, nullifier, commitment } = new Identity()
    const [test, setTest] = useState("");
    const onClick = () => {
        console.log("okk")
        setTest("yo")
        
        // const identity = new Identity()
        // console.log(identity.toString())
        console.log(test)
        // const identity2 = new Identity(identity.toString())
        // console.log(identity2)
    };

    return(
        <>
            <Center>
                <Button onClick={onClick}>Test</Button>
            </Center>
        </>
    );
};

export default Home;