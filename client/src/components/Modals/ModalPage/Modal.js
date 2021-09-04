import React, { useState } from "react";
import CongratulationsModal from "../CongratulationsModal/CongratulationsModal";

export default function Modal() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(true)}>Show Congratulations Modal</button>
            <CongratulationsModal onClose={() => setShow(false)} show={show} />
        </div>
    );
}
