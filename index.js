// ensemble des provinces et des territoires
var provinces = document.querySelectorAll(".province");


// infos sur les drapeaux utilisés pour chaques provinces/territoires
const imgAlberta = { src: `img/Alberta.svg`, alt: `drapeau de l'Alberta` };
const imgManitoba = { src: "img/Manitoba.svg", alt: "drapeau du Manitoba" };
const imgNunavut = { src: "img/Nunavut.svg", alt: "drapeau du Nunavut" };
const imgOntario = { src: "img/Ontario.svg", alt: "drapeau de l'Ontario" };
const imgQuebec = { src: "img/Quebec.svg", alt: "drapeau du Québec" };
const imgSaskatchewan = { src: "img/Saskatchewan.svg", alt: "drapeau du Saskatchewan" };
const imgYukon = { src: "img/Yukon.svg", alt: "drapeau du Yukon" };
const imgColombieBritannique = { src: "img/Colombie-Britannique.svg", alt: "drapeau de la Colombie Britannique" };
const imgNouveauBrunswick = { src: "img/Nouveau-Brunswick.svg", alt: "drapeau du Nouveau Brunswick" };
const imgNouvelleEcosse = { src: "img/Nouvelle-Écosse.svg", alt: "drapeau de la Nouvelle Écosse" };
const imgTerreNeuveEtLabrador = { src: "img/Terre-Neuve-et-Labrador.svg", alt: "drapeau de Terre Neuve et Labrador" };
const imgTerritoiresDuNordOuest = { src: "img/Territoires-du-Nord-Ouest.svg", alt: "drapeau des Territoires du NordOuest " };
const imgIleDuPrinceEdouard = { src: "img/Île-du-Prince-Édouard.svg", alt: "drapeau des Île-du-Prince-Édouard" };



provinces.forEach(province => {
    province.onclick = function () {
        verouillerProvinceSelectionnee(province);
        afficherInfoProvince(province);
    }
});

function verouillerProvinceSelectionnee(province) {
    deselectionnerEnsembleDesProvinces();
    province.classList.add("active");
}

function deselectionnerEnsembleDesProvinces() {
    provinces.forEach(province => province.classList.remove("active"));
}

function masquerInfoProvince() {
    deselectionnerEnsembleDesProvinces();
}

function afficherInfoProvince(province) {

    let nomProvince = province.querySelector("nom").innerHTML;

    let image = getImgDrapeauProvince(nomProvince);

    Swal.fire({
        title: nomProvince,
        html: "Devise : " + "<em>" + province.querySelector("devise").innerHTML + "</em>"
            + "</br></br>"
            + province.querySelector("description").innerHTML,
        imageUrl: image.src,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: image.alt,
    }).then(() => masquerInfoProvince());

}

function getImgDrapeauProvince(nomProvince) {
    let img;
    switch (nomProvince) {
        case "Alberta":
            img = imgAlberta;
            break;
        case "Manitoba":
            img = imgManitoba;
            break;
        case "Colombie-Britannique":
            img = imgColombieBritannique;
            break;
        case "Saskatchewan":
            img = imgSaskatchewan;
            break;
        case "Ontario":
            img = imgOntario;
            break;
        case "Québec":
            img = imgQuebec;
            break;
        case "Nouveau-Brunswick":
            img = imgNouveauBrunswick;
            break;
        case "Nouvelle-Écosse":
            img = imgNouvelleEcosse;
            break;
        case "Île-du-Prince-Édouard":
            img = imgIleDuPrinceEdouard;
            break;
        case "Terre-Neuve-et-Labrador":
            img = imgTerreNeuveEtLabrador;
            break;
        case "Yukon":
            img = imgYukon;
            break;
        case "Territoires du Nord-Ouest":
            img = imgTerritoiresDuNordOuest;
            break;
        case "Nunavut":
            img = imgNunavut;
            break;
        default:
            img = imgColombieBritannique;
    }
    return img;

}
