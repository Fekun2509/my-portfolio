import React from "react";
import "../scss/Contact.scss"
import InfinityText from "./IfinityText";
export default function Contact() {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch("http://localhost:3001/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            console.log(response)

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("There was an error sending your message.");
        }
    };


    React.useEffect(() => {
        // // Create the script element
        // const script = document.createElement("script");
        // script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        // script.async = true;

        // // Append script to the body
        // document.body.appendChild(script);

        // // Clean up by removing the script when the component unmounts
        // return () => {
        //     document.body.removeChild(script);
        // };
    }, []);

    const addClass = () => {
        let container = document.querySelector(".contactContainer");
        // console.log(container)
        container.classList.add("sent")
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div id="contact" className="contactContainer panel">
                    {/* <div class="visme_d" data-title="Client Contact Form" data-url="4d68j0vy-client-contact-form?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="96479"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script> */}
                    <div className="wrapper centered">
                        <article class="letter">
                            <div class="side">
                                <h1>Contact us</h1>
                                <p>
                                    <textarea name="message" placeholder="Your message" value={formData.message}
                                        onChange={handleChange} required></textarea>
                                </p>
                            </div>
                            <div class="side">
                                <p>
                                    <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                                </p>
                                <p>
                                    <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
                                </p>
                                <p>
                                    {/* <button id="sendLetter" type="submit" onClick={() => addClass()}>Send</button> */}
                                    <button id="sendLetter" type="submit" >Send</button>
                                </p>
                            </div>
                        </article>
                        <div class="envelope front"></div>
                        <div class="envelope back"></div>
                    </div>
                    <p class="result-message centered">Thank you for your message</p>
                    {/* <InfinityText></InfinityText> */}
                </div>
            </form>


        </>

    );
}