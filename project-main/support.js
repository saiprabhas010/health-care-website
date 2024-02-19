
function fetchData( ) {
   let pin=prompt("Enter your pin",'500072');
   let sdate=prompt("Enter your preffered date",'5'); 
   let smonth=prompt("Enter your preffered month",'7',); 
   
   if(pin==null || pin<0){

            document.querySelector('#error').innerHTML= '<h1>Please Enter Valid pin </h1>';

   }else if(sdate==null || sdate>31 || sdate<1 ){
   
            document.querySelector('#error').innerHTML= '<h1>Please Enter Valid date </h1>';

    
    }else if(smonth==null || smonth>12 || smonth<1){
        document.querySelector('#error').innerHTML= '<h1>Please Enter Valid month </h1>';
    }else{


    fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${sdate}-${smonth}-2021` )
    .then(response=>{
        if(!response.ok){
            throw Error("Error");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data);
        const html=data.centers
        .map( user =>{
            return `
               <div class="user">
               <div class="box">
                <p><b>Center Name</b> <br>${user.name}</p>
                <p> <b>Address</b><br> ${user.address}</p>
                <p> <b> Center Id </b><br> ${user.center_id}</p>
                <p><b>Fee Type</b><br>${user.fee_type}</p><br><hr>
                </div>
                <button type="button" class="submit-btn"><a href="https://www.cowin.gov.in/">Book Now</a></button>
                    
                
               </div>   
            `
        })
        .join("");
        document.querySelector('#info').insertAdjacentHTML("afterbegin",html);
        
        
    });
}
}
fetchData();
