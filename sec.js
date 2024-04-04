const about=document.getElementById('about');
const footer=document.getElementById('foo');
		
		
	  about.addEventListener('click',() =>{
		footer.scrollIntoView({behavior:'smooth'});
		});
function toggleDetails(){
    var details=document.getElementById("details");
    var checkbox=document.getElementById("showdetail");
    if(checkbox.checked){
       details.style.display="block";
            
   }else{
         details.style.display="none";
         }
        }
function toggle(){
    var details=document.getElementById("empdetails");
    var checkbox=document.getElementById("emp");
    if(checkbox.checked){
    details.style.display="block";
            
    }else{
      details.style.display="none";
        }
        }
