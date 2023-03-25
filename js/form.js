form()
function form(){
    let data = sessionStorage.getItem("data");
    data = JSON.parse(data);
    const nama = data['nama'];
    const email = data['email'];
    const option = data['option'];
    const radio = data['radio'];
    const checkbox = data['checkbox'];
    const alamat = data['alamat'];
    
    const userInputNama = document.getElementById('nama_form');
    const userInputEmail = document.getElementById('email_form');
    const userInputOption = document.getElementsByName('option_form');
    const userInputRadio = document.getElementById('radio_form');  
    const userInputCheckbox = document.getElementById('checkbox_form');
    const userInputAlamat = document.getElementById('alamat_form');

    userInputNama.innerHTML =     "Nama Lengkap                             : " + nama;
    userInputEmail.innerHTML =    "Email                                    : " + email;
    userInputOption.innerHTML =   "Tahun Lahir                              : " + option;
    userInputRadio.innerHTML =    "Jenis Kelamin                            : " + radio;
    userInputCheckbox.innerHTML = "Destinasi Liburan                        : " + checkbox;
    userInputAlamat.innerHTML =   "Alamat                                   : " + alamat;

}
  