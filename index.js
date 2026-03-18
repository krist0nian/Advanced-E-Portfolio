// template_hjdxf61
// service_ezjxryl
// qSiVBpC_Qre_9rF7W


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_ezjxryl',
            'template_hjdxf61',
            event.target,
            'qSiVBpC_Qre_9rF7W'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at krist0nian@yahoo.com"
            );
        })
}