import { useEffect } from "react";

import { DelhiJune26RegisterForm } from "@/components/DelhiJune26RegisterFormNew";



const DelhiEdition = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
    return (
        <div className="min-h-screen">
            <DelhiJune26RegisterForm />
        </div>
    );
};

export default DelhiEdition;
