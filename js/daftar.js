// Fungsi simpan data pada session storage
function simpan(){
    // clearing session storage
    sessionStorage.clear()
    
    const userInputNama = document.getElementById('nama');
    const userInputEmail = document.getElementById('email');
    const userInputOption = document.getElementsByName('option');
    const userInputRadio = document.querySelector('input[name="radio"]:checked');  
    const userInputCheckbox = document.getElementsByName('checkbox');
    const userInputAlamat = document.getElementById('alamat');
    
    
    
    let nama = sessionStorage.getItem("nama");
    let email = sessionStorage.getItem("email");
    let option = sessionStorage.getItem("option");
    let radio = sessionStorage.getItem("radio");
    let checkbox = sessionStorage.getItem("checkbox") || [];
    let alamat = sessionStorage.getItem("alamat");

      // push 
      nama = userInputNama.value || nama;
      
      email = userInputEmail.value || email;
      
      option = userInputOption.value || option;
     
      alamat = userInputAlamat.value || alamat;
      
      radio = userInputRadio.value || radio;
      
        
      for (var i=0; i<userInputCheckbox.length; i++) {
          if (userInputCheckbox[i].checked) {
              checkbox.push(userInputCheckbox[i].value);
          }
      }

      let data ={
        'nama': nama,
        'email': email,
        'option': option,
        'radio' : radio,
        'checkbox' : checkbox,
        'alamat' : alamat,
       }

       sessionStorage.setItem("data", JSON.stringify(data));
}