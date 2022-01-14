

let app = new Vue(
    
    {
        el: "#miaapp",
        data: {
            
            welcomeMessage: "Benvenuto nel sito",
            nome: "",
            cognome: "",
            imgUrl: "https://doodles.google.ca/d4g/images/splashes/featured.png",
            loginMessage : "",
           
        },

        methods: {
            printMessage: function(){
                if (this.nome.trim() != ""){
                    this.loginMessage = "accesso come ";
                }
            }
        }
    }
);

