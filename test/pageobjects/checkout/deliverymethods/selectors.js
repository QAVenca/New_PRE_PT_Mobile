module.exports = {
    pageTitle: "",
    deliveries: "#deliveries",
    packPoint: "#packPoint",
    home: "#home",
    post: "#post",
    checkoutSummary: "#checkoutSummary",
    goToPaymentButton: "[data-uitest=\"goToPayment\"]",
    editPhone: "[data-uitest=\"editPhone\"]",
    goToAdress: "#timeline-wrap > a.marker.adress.timeline-icon.done",
    addNewAdress: "//*[@id=\"asideChk\"]/div/div[2]",
    goToDeliveryMethod: "#deliveriesStepButton",
    title: "#Name",
    adress: "#Address_Street",
    number: "#Address_Number",
    city: "#Address_City",
    postalCode: "#Address_PostalCode",
    provinceDropdown: "#dropdownMenu1",
    provinceOption: "[data-id=\"BARCELONA\"]",
    submit: "#changeDeliveryAddress > div > div > div.modal-footer.dflex.justify-content-center > button",
    defaultAdress: "#myDeliveries > div:nth-child(1) > label",
    secondAdress: "#myDeliveries > div:nth-child(2) > label",
    deliveryPackPoint: "#heading-feP > a > label",
    deliveryStandarPackPoint: "#deliveryMethodsBox > label:nth-child(1)",
    deliveryExpressPackPoint: "#deliveryMethodsBox > label:nth-child(2)",
    deliveryHome: "#heading-fe1 > a > label",
    deliveryStandarHome: "#deliveryMethodsBox > label:nth-child(1) > i",
    deliveryExpressHome: "#deliveryMethodsBox > label:nth-child(2)",
    deliveryUrgentHome: "#deliveryMethodsBox > label:nth-child(3)",
    deliveryMail: "#heading-fe0 > a > label",
    deliveryStandarMail: "#deliveryMethodsBox > label",

}

/*class DeliverySelectors {

    get deliveries() {
        return $('#deliveries');
    }

    get packPoint() {
        return $('#packPoint');
    }

    get home() {
        return $('#home');
    }

    get post() {
        return $('#post');
    }

    get checkoutSummary() {
        return $('#checkoutSummary');
    }

    get goToPaymentButton() {
        return $('[data-uitest="goToPayment"]');
    }

    get editPhone() {
        return $('[data-uitest="editPhone"]');
    }

}

module.exports = new DeliverySelectors();*/