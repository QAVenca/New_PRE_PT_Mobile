module.exports = {
    inputUsername: "[data-uitest=\"emailLogin\"]",
    inputPassword: "[data-uitest=\"password\"]",
    btnSubmit: "#userAlreadyMB", // Dessktop i MB tenen diferents selectors
    failLogin: "[data-uitest=\"userOrPassWrong\"]",
}

/*class SelectorsLogin{

    get inputUsername() {
        return $('[data-uitest="emailLogin"]');
    }

    get inputPassword() {
        return $('[data-uitest="password"]');
    }

    get btnSubmit() {
        return $('#userAlreadyDK');
    }

    get failLogin(){
        return $('[data-uitest="userOrPassWrong"]');
    }

}

module.exports = new SelectorsLogin();*/