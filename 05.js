function Hitung(e){
    event.preventDefault();
    var hasil;
    var bil1 =parseInt(document.getElementById('bil1').value);
    var bil2 =parseInt(document.getElementById('bil2').value);

    var opr = document.getElementById('operasi').value;
    

    if(opr=='tambah'){
        hasil=bil1+bil2;
    }
    else {
        if(opr=='kurang')
        {
            hasil=bil1-bil2;
        }
        else{
            if(opr=='kali')
            {
                hasil=bil1*bil2;
            }else{
                hasil=bil1/bil2;
            }
        }
    }
    //alert(hasil);
    document.getElementById('hasil').value=hasil;
}
