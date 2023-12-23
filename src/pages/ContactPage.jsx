import React from "react";
import emailjs from "@emailjs/browser";

export function ContactPage() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [formModalText, setFormModalText] = React.useState("");
    const [formModal, setFormModal] = React.useState(false);
    const timingAlertModal = () => {
        setFormModal(true);
        setTimeout(() => {
            setFormModal(false);
        }, 3000);
    };
    function handleSubmit(e) {
        e.preventDefault();
        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        };
        if (name === "" || email === "" || message === "") {
            setFormModalText("Preencha todos os campos");
            timingAlertModal();
            return;
        }
        emailjs.send("service_p252die", "template_pdejm0v", templateParams, import.meta.env.VITE_APP_EMAILJSKEY);
        setFormModalText("Email enviado com sucesso!");
        timingAlertModal();
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div
            id="contact"
            className="bg-secondary relative h-screen flex flex-col justify-center
      items-center  p-14 align-middle lg:mb-0"
        >
            <div>
                <div className="divisor border-b-2 border-white w-32"></div>
                <div className="flex flex-col my-10 self-start md:text-center">
                    <h1 className="xl-text basis-11 self-start">Faça Contato!</h1>
                    <span className="md-text md:w-52  md:my-8 self-start text-start">Sinta-se à vontade para me mandar uma mensagem!</span>
                </div>
                <form action="" onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-0 md:w-[480px] lg:w-[960px] md:self-center lg:grid lg:grid-cols-2 gap-6 ">
                    <h2 className="m-0 lg:col-start-1 lg:row-start-1">Qual o seu nome?</h2>

                    <input
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome..."
                        className="outline-none border-b-[1px] border-accent bg-secondary lg:col-start-1"
                    />

                    <h2 className="flex flex-col justify-center  lg:col-start-2 lg:row-start-1">Qual seu email?</h2>
                    <InputEmailFormValidation setEmail={setEmail}></InputEmailFormValidation>

                    <h2 className="">Sua mensagem</h2>
                    <textarea
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        name="email-mensagem"
                        id="email-mensagem"
                        cols="10"
                        rows="4"
                        className="bg-secondary outline-none resize-none border-b-[1px] border-accent lg:col-span-2"
                        placeholder="Digite sua mensagem aqui!"
                    ></textarea>
                    <button type="submit" className="mx-auto  md:h-28 lg:col-span-2">
                        <span className="btn btn-secondary  border border-white text-accent w-64 ">Enviar</span>
                    </button>
                </form>
                {formModal ? <MessageModal formModalText={formModalText}></MessageModal> : null}
            </div>
        </div>
    );
}
function InputEmailFormValidation({ setEmail }) {
    const [errorLabel, setErrorLabel] = React.useState(false);

    function handleEmail(e) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            const newValue = e.target.value;
            setEmail(newValue);
            setErrorLabel(false);

            return;
        }
        setEmail("");
        setErrorLabel(true);
    }
    return (
        <div className="relative">
            <input onChange={handleEmail} type="text" id="email" name="email" placeholder="Digite seu email..." className="outline-none border-b-[1px] w-full border-accent bg-secondary " />
            {errorLabel ? <span className="absolute z-50 right-0 -bottom-8 text-sm text-warning">Formato de email inválido.</span> : null}
        </div>
    );
}
function MessageModal({ formModalText }) {
    return formModalText === "Email enviado com sucesso!" ? (
        <div className="alert alert-success shadow-lg w-[75%] sm:w-[33%] fixed bottom-10 right-10 ">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-primary">{formModalText}</span>
            </div>
        </div>
    ) : (
        <div className="alert alert-error shadow-lg w-[75%] sm:w-[33%] fixed transition-all translate-x-0  bottom-10 right-10">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">{formModalText}</span>
            </div>
        </div>
    );
}
