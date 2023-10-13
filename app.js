document.getElementById("gonder").addEventListener("click", formkontrol);
var kayitformu = document.getElementById("kayitformu");
var kullaniciadi = document.getElementById("kullaniciadi");
var sifre = document.getElementById("sifre");
var sifretekrar = document.getElementById("sifretekrar");
var email = document.getElementById("email");
var cinsiyet = document.getElementsByClassName("cinsiyet");
var hobi = document.getElementsByClassName("hobi");
var  not = document.getElementById("not");

function formkontrol(){
    if(kullaniciadi.value ==""){
        alert("Kullanıcı Adı Boş Bırakılamaz");
        kullaniciadi.focus();
        return;
    }
    if(kullaniciadi.value != ""){
        if(kullaniciadi.value.length < 4 || kullaniciadi.value.length > 20){
            alert("Kullanıcı Adı 4 ile 20 karakter arasında olmalıdır");
            kullaniciadi.value = "";
            kullaniciadi.focus();
            return;
        }
    }
    if(sifre.value ==""){
        alert("Şifre Alanı Boş Bırakılamaz");
        sifre.focus();
        return;
    }
    if(sifre.value != ""){
        if(sifre.value.length < 4 || sifre.value.length > 20){
            alert("Şifre 4 ile 20 karakter arasında olmalıdır");
            sifre.value = "";
            sifretekrar.value = "";
            sifre.focus();
            return;
        }
    }
    if(sifretekrar.value ==""){
        alert("Şifre Tekrar Alanı Boş Bırakılamaz");
        sifretekrar.focus();
        return;
    }
    if(sifretekrar.value != ""){
        if(sifretekrar.value.length < 4 || sifretekrar.value.length > 20){
            alert("Şifre 4 ile 20 karakter arasında olmalıdır");
            sifre.value = "";
            sifretekrar.value = "";
            sifretekrar.focus();
            return;
        }
    }
    if(sifre.value != "" && sifretekrar.value != "" ){
        if(sifre.value != sifretekrar.value){
            alert("Girdiğiniz Şifreler Uyuşmuyor");
            sifre.value = "";
            sifretekrar.value = "";
            sifretekrar.focus();
            return;
        }
    }

    if(email.value ==""){
        alert("E-Mail Alanı Boş Bırakılamaz");
        email.focus();
        return;
    }
    if(email.value !=""){
        if(email.value.indexOf("@",0) == -1 || email.value.indexOf(".",0) == -1 ){
            alert(" Geçersiz E-Mail");
            email.value = "";
            email.focus();
            return;
        } 
    }
    if(cinsiyet[0].checked == false && cinsiyet[1].checked == false){
        alert("Cinsiyetinizi Seçiniz");
        return;
    }
    if(hobi[0].checked == false && hobi[1].checked == false  && hobi[2].checked == false){
        alert("Hobilerinizi Seçiniz");
        return;
    }
    document.kayitformu.submit();
}