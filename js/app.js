

function add1(){
    document.getElementById('creative-tab-item1').classList.toggle('active');
    document.getElementById('creative-tab1').classList.toggle('active-tab');
}
function add2(){
    document.getElementById('creative-tab-item2').classList.toggle('active');
    document.getElementById('creative-tab2').classList.toggle('active-tab');
}
function add3(){
    document.getElementById('creative-tab-item3').classList.toggle('active');
    document.getElementById('creative-tab3').classList.toggle('active-tab');
}
function add4(){
    document.getElementById('creative-tab-item4').classList.toggle('active');
    document.getElementById('creative-tab4').classList.toggle('active-tab');
}


// tab.addEventListener('click',function(){
//     console.log('working');
//     for(let i=0;i<tab.length;i++){
//         for(let i=0;tab.length;i++){
//             tab[i]=className('accordian');
//         this.tab=className('active-tab');
//         }
//         for(let i=0;i<item.length;i++){
//             item[i]=className('accordian-item');
//         }
//         document.getElementById(this.data.set).classList.add('active');
//     };
// })



function arrange(){
    var search_item = document.getElementById('search_box').value.toUpperCase();

    var mytable =document.getElementById('doc_list');
    var row = mytable.getElementsByTagName('tr');
    for(let i=0;i<row.length;i++){
        let col1= row[i].getElementsByTagName('td')[0];
        if(col1){
            let txtVal = col1.textContent || col1.innerHTML;
            if(txtVal.toUpperCase().indexOf(search_item) > -1 ){
                row[i].style.display = "";
            }
            else{
                row[i].style.display = "none";
            }
        }
    }
    
}

