function agecalculate() {
    let name = document.getElementById("name").value;
    let birth = document.getElementById("birth").value;
    document.getElementById("username").innerHTML = name;
    document.getElementById("datebirth").innerHTML = birth;
    document.getElementById("userage").innerHTML = 2022 - birth;
}