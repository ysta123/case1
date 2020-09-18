function validasi() {
    var kerja = document.getElementById("kerja").value;
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var nomor = document.getElementById("nomor").value;
    var topik = document.getElementById("topik").value;
    if (kerja == "" && nama == "" && email == "" && nomor == "" && topik == "") {
        alert("Anda harus mengisi data dengan lengkap!");
        return false;
    } else {
        alert("Terimakasih "+nama+" telah mengirim pesan!");
        return 1;
    }
}
function uploadCV() {
    alert('Upload CV');
    return 1;
}
function uploadPorto() {
    alert('Upload Portofolio atau Proposal Kerja Sama');
    return 1;
}