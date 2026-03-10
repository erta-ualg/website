const data = {
    email: "erta@ualg.pt",
    location: "Universidade do Algarve, Campus da Penha, 8005-139 Faro, Portugal",
    web3formsKey: "19ade01e-5ebb-4866-833b-bf3a7574e50b", // minha chave por agora, é access key, não secret key
    map: {
        query: "Universidade do Algarve, Campus da Penha, Faro",
        zoom: 16,
        get embedUrl() {
            return `https://maps.google.com/maps?q=${encodeURIComponent(this.query)}&z=${this.zoom}&t=k&ie=UTF8&iwloc=B&output=embed`;
        },
    },
};

export default data;
