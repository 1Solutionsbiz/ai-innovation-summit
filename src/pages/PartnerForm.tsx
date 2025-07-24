import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";


import { useEffect } from "react";
import { PartnerSectionForm } from "@/components/PartnerSectionForm";

const socialLinks = {
    linkedin: "https://www.linkedin.com/showcase/guild-ai-innovation-summit/about/?viewAsMember=true",
};


const PartnerForm = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
    return (
        <div className="min-h-screen">
            <Header
                isRegistrationActive={false}
                registrationButtonName="Registration Closed"
                disabledButtonName="Register Now"
            />

            <PartnerSectionForm />

            <Footer socialLinks={socialLinks} />
        </div>
    );
};

export default PartnerForm;
