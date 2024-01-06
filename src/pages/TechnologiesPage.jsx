import React from "react";
export function TechnologiesPage() {

    return (

        <div id="technologies" className="h-screen sm:h-[50vh] lg:h-[70vh] bg-secondary flex sm:flex-col pt-10">
            <FrontEndTecs></FrontEndTecs>
            <BackendTecs></BackendTecs>
        </div>
    );
}
function FrontEndTecs() {
    const [frontInfo, setFrontInfo] = React.useState("HTML (\"Linguagem de Marcação de Hipertexto\") é uma linguagem de marcação utilizada na construção de páginas na Web. É o formato de documento interpretado por todos os navegadores.")


    return (
        <div className="flex gap-4  basis-1/2  justify-center sm:justify-start sm:ml-10  2xl:mx-32">
            <div className="flex flex-col sm:flex-row items-center">
                <h2 className="vertical-text sm:horizontal-text m-0 ">Front-End</h2>
                <div id="divisor" className="h-16   border-l-2 sm:h-0 sm:w-16 2xl:w-36 sm:border-0 sm:border-b-2  border-white"></div>
                <div className=" flex flex-col sm:flex-row gap-2 ">
                    <HTMLIcon setFrontInfo={setFrontInfo} ></HTMLIcon>
                    <CssIcon setFrontInfo={setFrontInfo} ></CssIcon>
                    <JavascriptIcon setFrontInfo={setFrontInfo}></JavascriptIcon>
                    <ReactIcon setFrontInfo={setFrontInfo}></ReactIcon>
                    <BootstrapIcon setFrontInfo={setFrontInfo}></BootstrapIcon>
                    <TailwindIcon setFrontInfo={setFrontInfo}></TailwindIcon>
                </div>
            </div>
            <article className="hidden  lg:block self-end  w-96 max-h-56 rounded-lg p-6  bg-primary">
                <span>
                    <span className="text-accent w-fit">
                        {frontInfo.split(" ")[0]}
                    </span>
                    {frontInfo.substring(frontInfo.indexOf(" "))}
                </span>
            </article>
        </div>
    );
}

function BackendTecs() {
    const [backInfo, setBackInfo] = React.useState("NodeJS é um software de código aberto, multiplataforma que permite a execução de códigos JavaScript fora de um navegador web. Possui uma vasta variedade de pacotes, tornando-o muito flexível.")


    return (
        <div className="flex flex-col sm:flex-row   basis-1/2  justify-center sm:justify-end   sm:m-0  2xl:mx-32 lg:mb-20">
            <article className="hidden lg:block mr-6 w-96 max-h-56 self-end rounded-lg p-6  bg-primary">
                <span>
                    <span className="text-accent w-fit">
                        {backInfo.split(" ")[0]}
                    </span>
                    {backInfo.substring(backInfo.indexOf(" "))}
                </span>
            </article>
            <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-end sm:mr-10 ">
                <div className="flex flex-col sm:flex-row gap-2 items-center ">
                    <NodejsIcon setBackInfo={setBackInfo}></NodejsIcon>
                    <PhpIcon setBackInfo={setBackInfo}></PhpIcon>
                    <MongodbIcon setBackInfo={setBackInfo}></MongodbIcon>
                    <MySQLIcon setBackInfo={setBackInfo}></MySQLIcon>
                    <DockerIcon setBackInfo={setBackInfo}></DockerIcon>
                </div>
                <div id="divisor" className=" h-16  m-[3px] border-l-2 sm:h-0 sm:w-16 2xl:w-36 sm:border-0 sm:border-b-2 border-white"></div>
                <h2 className="vertical-text sm:horizontal-text my-2">Back-End</h2>
            </div>
        </div>
    );
}

function HTMLIcon({ setFrontInfo }) {
    return (
        <button onClick={() => {
            setFrontInfo("HTML (\"Linguagem de Marcação de Hipertexto\") é uma linguagem de marcação utilizada na construção de páginas na Web. É o formato de documento interpretado por todos os navegadores.")
        }} className="tooltip focus:tooltip-open tooltip-right sm:tooltip-bottom sm:tooltip-bottom" data-tip="HTML5">
            <svg className="w-10 2xl:w-14" viewBox="0 0 32 32" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
                    <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path>{" "}
                </g>
            </svg>
        </button>
    );
}

function CssIcon({ setFrontInfo }) {
    return (
        <button onClick={() => {
            setFrontInfo("CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML.")
        }} className="tooltip focus:tooltip-open tooltip-right sm:tooltip-bottom" data-tip="CSS3">
            <svg className="w-10 2xl:w-14" viewBox="0 0 32 32" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>{" "}
                    <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path>{" "}
                </g>
            </svg>
        </button>
    );
}
function JavascriptIcon({ setFrontInfo }) {
    return (
        <button onClick={() => {
            setFrontInfo("JavaScript é uma linguagem de programação interpretada estruturada, é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web.")
        }} className="tooltip focus:tooltip-open tooltip-right sm:tooltip-bottom" data-tip="Javascript">
            <svg className="w-10 2xl:w-14" viewBox="0 0 32 32" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect x="2" y="2" width="28" height="28" fill="#FFCA28"></rect>{" "}
                    <path
                        d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
                        fill="#3E3E3E"
                    ></path>{" "}
                    <path
                        d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
                        fill="#3E3E3E"
                    ></path>{" "}
                </g>
            </svg>
        </button>
    );
}

function ReactIcon({ setFrontInfo }) {
    return (
        <button onClick={() => {
            setFrontInfo("React  é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Pode ser usado para criar SPA(Single Page Applications) para web e mobile.")
        }} className="tooltip focus:tooltip-open tooltip-right sm:tooltip-bottom" data-tip="React">
            <svg className="w-10 2xl:w-14" viewBox="0 0 32 32" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                        fill="#53C1DE"
                    ></path>{" "}
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                        fill="#53C1DE"
                    ></path>{" "}
                </g>
            </svg>
        </button>
    );
}

function BootstrapIcon({ setFrontInfo }) {
    return (
        <button onClick={() => {
            setFrontInfo("Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript")
        }} className="tooltip focus:tooltip-open tooltip-right sm:tooltip-bottom" data-tip="Bootstrap">

            <svg className="w-10 2xl:w-14" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                        {" "}
                        <path
                            d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z"
                            fill="#563D7C"
                        >
                            {" "}
                        </path>{" "}
                        <path
                            d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z"
                            fill="#FFFFFF"
                        >
                            {" "}
                        </path>{" "}
                    </g>{" "}
                </g>
            </svg>

        </button>
    );
}

function TailwindIcon({ setFrontInfo }) {
    return (
        <button onClick={() => {
            setFrontInfo("Tailwind é um framework CSS de código aberto. É  focado em classes utilitárias, que você pode usar diretamente dentro de sua marcação de texto para customizar um elemento.")
        }} className="tooltip focus:tooltip-open tooltip-right sm:tooltip-bottom" data-tip="TailwindCSS">

            <svg className="w-10 2xl:w-14 fill-[#44a8b3]" viewBox="0 0 32 32" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <title>file_type_tailwind</title>
                    <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"></path>
                </g>
            </svg>
        </button>


    );
}

function NodejsIcon({ setBackInfo }) {
    return (
        <button onClick={() => {
            setBackInfo("NodeJS é um software de código aberto, multiplataforma que permite a execução de códigos JavaScript fora de um navegador web. Possui uma vasta variedade de pacotes, tornando-o muito flexível.")
        }} className="tooltip focus:tooltip-open tooltip-left sm:tooltip-top" data-tip="NodeJS">

            <svg className="w-10 2xl:w-14" viewBox="-13 0 282 282" preserveAspectRatio="xMinYMin meet" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g fill="#8CC84B">
                        {" "}
                        <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"></path>{" "}
                        <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"></path>{" "}
                    </g>{" "}
                </g>
            </svg>
        </button>
    );
}

function PhpIcon({ setBackInfo }) {
    return (
        <button onClick={() => {
            setBackInfo("PHP é uma linguagem interpretada livre de uso geral , usada originalmente  para o desenvolvimento de aplicações no lado do servidor e  capaz de gerar conteúdo dinâmico na web.")
        }} className="tooltip focus:tooltip-open tooltip-left sm:tooltip-top" data-tip="PHP">

            <svg className="w-10 2xl:w-14" viewBox="0 0 32 32" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <circle cx="16" cy="16" r="14" fill="#8892BF"></circle>{" "}
                    <path
                        d="M14.4392 10H16.1192L15.6444 12.5242H17.154C17.9819 12.5419 18.5986 12.7269 19.0045 13.0793C19.4184 13.4316 19.5402 14.1014 19.3698 15.0881L18.5541 19.4889H16.8497L17.6288 15.2863C17.7099 14.8457 17.6856 14.533 17.5558 14.348C17.426 14.163 17.146 14.0705 16.7158 14.0705L15.3644 14.0573L14.3661 19.4889H12.6861L14.4392 10Z"
                        fill="white"
                    ></path>{" "}
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.74092 12.5243H10.0036C10.9612 12.533 11.6552 12.8327 12.0854 13.4229C12.5156 14.0132 12.6576 14.8193 12.5115 15.8414C12.4548 16.3085 12.3289 16.7665 12.1341 17.2159C11.9474 17.6652 11.6878 18.0704 11.355 18.4317C10.9491 18.8898 10.5149 19.1805 10.0523 19.304C9.58969 19.4274 9.11076 19.489 8.61575 19.489H7.15484L6.69222 22H5L6.74092 12.5243ZM7.43485 17.9956L8.16287 14.0441H8.40879C8.49815 14.0441 8.5914 14.0396 8.6888 14.0309C9.33817 14.0221 9.87774 14.0882 10.308 14.2291C10.7462 14.37 10.8923 14.9031 10.7462 15.8282C10.5678 16.9296 10.2186 17.5727 9.69926 17.7577C9.1799 17.934 8.53053 18.0176 7.75138 18.0088H7.58094C7.53224 18.0088 7.48355 18.0043 7.43485 17.9956Z"
                        fill="white"
                    ></path>{" "}
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.4365 12.5243H21.1738L19.4329 22H21.1251L21.5878 19.489H23.0487C23.5437 19.489 24.0226 19.4274 24.4852 19.304C24.9479 19.1805 25.382 18.8898 25.7879 18.4317C26.1207 18.0704 26.3803 17.6652 26.567 17.2159C26.7618 16.7665 26.8877 16.3085 26.9444 15.8414C27.0905 14.8193 26.9486 14.0132 26.5183 13.4229C26.0881 12.8327 25.3942 12.533 24.4365 12.5243ZM22.5958 14.0441L21.8678 17.9956C21.9165 18.0043 21.9652 18.0088 22.0139 18.0088H22.1843C22.9635 18.0176 23.6128 17.934 24.1322 17.7577C24.6515 17.5727 25.0007 16.9296 25.1792 15.8282C25.3253 14.9031 25.1792 14.37 24.7409 14.2291C24.3107 14.0882 23.7711 14.0221 23.1217 14.0309C23.0243 14.0396 22.9311 14.0441 22.8417 14.0441H22.5958Z"
                        fill="white"
                    ></path>{" "}
                </g>
            </svg>
        </button>
    );
}

function MongodbIcon({ setBackInfo }) {
    return (
        <button onClick={() => {
            setBackInfo("MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma. É classificado como um programa de banco de dados NoSQL(não relacional). ")
        }} className="tooltip focus:tooltip-open tooltip-left sm:tooltip-top" data-tip="MongoDB">
            <svg className="w-10 2xl:w-14 fill-[#fff]" viewBox="0 0 1024 1024" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <circle className="fill-[#13aa52]" cx="512" cy="512" r="512"></circle>{" "}
                    <path d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"></path>{" "}
                </g>
            </svg>
        </button>
    );
}

function MySQLIcon({ setBackInfo }) {
    return (
        <button onClick={() => {
            setBackInfo("MySQL é um sistema de criação e gerenciamento de banco de dados (SGBD), com um modelo cliente-servidor, que utiliza a linguagem SQL (Linguagem de Consulta Estruturada) como interface.")
        }} className="tooltip focus:tooltip-open tooltip-left sm:tooltip-top" data-tip="MySQL">

            <svg className="w-12 2xl:w-16" viewBox="-18.458 -22.75 191.151 191.151" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M-18.458 6.58h191.151v132.49H-18.458V6.58z" fill="none"></path>
                    <path
                        d="M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919M62.497 90.771c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z"
                        fill="#5d87a1"
                    ></path>
                    <path
                        d="M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zM112.834 114.33l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796M85.165 105.013c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534"
                        fill="#f8981d"
                    ></path>
                    <path
                        d="M137.59 72.308c-2.99-.076-5.305.225-7.248 1.047-.561.224-1.453.224-1.531.933.303.3.338.784.601 1.198.448.747 1.229 1.752 1.942 2.276.783.6 1.569 1.194 2.393 1.717 1.453.899 3.1 1.422 4.516 2.318.825.521 1.645 1.195 2.471 1.756.406.299.666.784 1.193.971v-.114c-.264-.336-.339-.822-.598-1.196l-1.122-1.082c-1.084-1.456-2.431-2.727-3.884-3.771-1.196-.824-3.812-1.944-4.297-3.322l-.076-.076c.822-.077 1.797-.375 2.578-.604 1.271-.335 2.43-.259 3.734-.594.6-.15 1.195-.338 1.797-.523v-.337c-.676-.673-1.158-1.567-1.869-2.203-1.902-1.643-3.998-3.25-6.164-4.595-1.16-.749-2.652-1.231-3.887-1.868-.445-.225-1.195-.336-1.457-.71-.67-.822-1.047-1.904-1.533-2.877-1.08-2.053-2.129-4.331-3.061-6.502-.674-1.456-1.084-2.91-1.906-4.257-3.85-6.35-8.031-10.196-14.457-13.971-1.381-.786-3.024-1.121-4.779-1.533l-2.803-.148c-.598-.262-1.197-.973-1.719-1.309-2.132-1.344-7.621-4.257-9.189-.411-1.01 2.431 1.494 4.821 2.354 6.054.635.856 1.458 1.83 1.902 2.802.263.635.337 1.309.6 1.98.598 1.644 1.157 3.473 1.943 5.007.41.782.857 1.604 1.381 2.312.3.414.822.597.936 1.272-.521.744-.562 1.867-.861 2.801-1.344 4.221-.819 9.45 1.086 12.552.596.934 2.018 2.99 3.92 2.202 1.684-.672 1.311-2.801 1.795-4.668.111-.451.038-.747.262-1.043v.073c.521 1.045 1.047 2.052 1.53 3.1 1.159 1.829 3.177 3.735 4.858 5.002.895.676 1.604 1.832 2.725 2.245V74.1h-.074c-.227-.335-.559-.485-.857-.745-.674-.673-1.42-1.495-1.943-2.241-1.566-2.093-2.952-4.41-4.182-6.801-.602-1.16-1.121-2.428-1.606-3.586-.226-.447-.226-1.121-.601-1.346-.562.821-1.381 1.532-1.791 2.538-.711 1.609-.785 3.588-1.049 5.646l-.147.072c-1.19-.299-1.604-1.53-2.056-2.575-1.119-2.654-1.307-6.914-.336-9.976.26-.783 1.385-3.249.936-3.995-.225-.715-.973-1.122-1.383-1.685-.482-.708-1.01-1.604-1.346-2.39-.896-2.091-1.347-4.408-2.312-6.498-.451-.974-1.234-1.982-1.868-2.879-.712-1.008-1.495-1.718-2.058-2.913-.186-.411-.447-1.083-.148-1.53.073-.3.225-.412.523-.487.484-.409 1.867.111 2.352.336 1.385.56 2.543 1.083 3.699 1.867.523.375 1.084 1.085 1.755 1.272h.786c1.193.26 2.538.072 3.661.41 1.979.636 3.772 1.569 5.38 2.576 4.893 3.103 8.928 7.512 11.652 12.778.447.858.637 1.644 1.045 2.539.787 1.832 1.76 3.7 2.541 5.493.785 1.755 1.533 3.547 2.654 5.005.559.784 2.805 1.195 3.812 1.606.745.335 1.905.633 2.577 1.044 1.271.783 2.537 1.682 3.732 2.543.595.448 2.465 1.382 2.576 2.13M99.484 39.844a5.82 5.82 0 0 0-1.529.188v.075h.072c.301.597.824 1.011 1.197 1.532.301.599.562 1.193.857 1.791l.072-.074c.527-.373.789-.971.789-1.868-.227-.264-.262-.522-.451-.784-.22-.374-.705-.56-1.007-.86"
                        fill="#5d87a1"
                    ></path>
                    <path
                        d="M141.148 113.578h.774v-3.788h-1.161l-.947 2.585-1.029-2.585h-1.118v3.788h.731v-2.882h.041l1.078 2.882h.557l1.074-2.882v2.882zm-6.235 0h.819v-3.146h1.072v-.643h-3.008v.643h1.115l.002 3.146z"
                        fill="#f8981d"
                    ></path>
                </g>
            </svg>
        </button>
    );
}

function DockerIcon({ setBackInfo }) {
    return (
        <button onClick={() => {
            setBackInfo("Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. ")
        }} className="tooltip focus:tooltip-open tooltip-left sm:tooltip-top" data-tip="Docker">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14"
                fill="none"
                viewBox="0 0 32 32"
            >
                <g>
                    <circle cx="16" cy="16" r="14" fill="#1794D4"></circle>
                    <path
                        fill="#fff"
                        d="M18 7h-2v2h2V7zM10 10h2v2h-2v-2zM6.002 16.941C6.172 19.843 7.9 24 14 24c6.8 0 9.833-5 10.5-7.5.833 0 2.7-.5 3.5-2.5-.5-.5-2.5-.5-3.5 0 0-.8-.5-2.5-1.5-3-.667.667-1.7 2.4-.5 4-.5 1-1.833 1-2.5 1H6.943c-.53 0-.973.413-.941.941zM9 13H7v2h2v-2z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M10 13h2v2h-2v-2zM15 13h-2v2h2v-2zM16 13h2v2h-2v-2zM21 13h-2v2h2v-2zM15 10h-2v2h2v-2zM16 10h2v2h-2v-2z"
                    ></path>
                </g>
            </svg>

        </button>
    );
}
