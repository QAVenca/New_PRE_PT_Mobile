module.exports = {
    popupNewsletter: "#subscribe",
    newsletterEmail: "#subscribe #Email",
    newsletterEmailFooter: "#Email",
    newsletterTermsFooter: "[data-uitest=\"acceptCondition\"]",
    socialIcons: "#socialIcons",
    modalClose: "#modalSuscription .close",
    popUp: "#modalSuscription",
    newsletterSubmit: "//*[@id=\"subscribe\"]/form/div[2]/div/span/button",
    newsletterSubmitFooter: "#newsletter",
    newsletterTermsCheckbox: "/html/body/footer/section[1]/div[2]/div/form/div[2]/label[1]/span[1]/span",
    newsletterMailError: "//*[@id=\"newsletterPartial\"]/section[1]/form/div/div[1]/div/span/span",
    newsletterTermsError: "#acceptConditionsError",
    newsletterThankYou: "/html/body/main/div/section[1]/div",
    newsletterThankYouPopUp: "#modalSuscription #myModalLabel",
    thankYouPopUp: "//*[@id=\"modalSuscription\"]/div[1]/div",
}

/*class SelectorsNews{

    get popupNewsletter(){
        return $('#subscribe')
    }

    get newsletterEmail(){
        //return $('#Email')
        return $('#subscribe #Email');  
    }

    get newsletterEmailFooter(){
        return $('/html/body/footer //*[@id="Email"]');
    }

    get newsletterTermsFooter(){
        return $('/html/body/footer/section[1]/div[2]/div/form/div[2]/label[1]/span[1]/span');
    }

    get socialIcons(){
        return $('#socialIcons');
    }

    get modalClose() {
        return $('#modalSuscription .close');
    }

    get popUp() {
        return $('#modalSuscription');
    }

    get newsletterSubmit(){
        return $('//*[@id="subscribe"]/form/div[2]/div/span/button');
    }

    get newsletterSubmitFooter(){
        return $('/html/body/footer/section[1]/div[2]/div/form/div[1]/div[2]/button/span');
    }

    get newsletterTermsCheckbox(){
        return $('/html/body/footer/section[1]/div[2]/div/form/div[2]/label[1]/span[1]/span');
    }

    get newsletterMailError(){
        //return $('#subscribe #mailError');
        return $('//*[@id="newsletterPartial"]/section[1]/form/div/div[1]/div/span/span');
    }

    get newsletterTermsError(){
        //return $('#subscribe #acceptConditionsError');
        return $('#acceptConditionsError');
    }

    get newsletterThankYou(){
        return $('/html/body/main/div/section[1]/div')
    }

    get newsletterThankYouPopUp(){
        return $('#modalSuscription #myModalLabel')
    }

    get thankYouPopUp(){
        return $('//*[@id="modalSuscription"]/div[1]/div');
    }


}

module.exports = new SelectorsNews();*/