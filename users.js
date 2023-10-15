let status = window.localStorage.getItem("loginStatus");
function logOut() {
    window.localStorage.setItem("loginStatus", "false")
    window.location.href = "index.html";
}
const getUsers = () => {
 axios
   .get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
   .then(function (response) {
     var mydatas = response.data;
     $("#search-box").on("keyup", function () {
        let value = $(this).val()
     if (value.length<2) {
       alert("Please enter atleast 2 characters")
         } 
      var data1 = searchTable(value, mydatas)
     buildTableData(data1);
    })
   buildTableData(mydatas)
   function searchTable(value, mydatas) {
     var filtereddata = []
   for (let i = 0; i < mydatas.length; i++) {
       value = value.toLowerCase()
        var name = mydatas[i].fullName.toLowerCase();
      if (name.includes(value)) {
         filtereddata.push(mydatas[i])
           }
     }
    return filtereddata;
   }   
   function buildTableData(data1) {         
   var temp = "";
     data1.forEach((itemData) => {
       temp += "<tr >";
       temp += "<td>" + itemData.id + "</td>";
       temp += "<td>" + `<img src=${itemData.profilePic}/>`+ "</td>";
      temp += "<td>" + itemData.fullName + "</td>";
       temp += "<td>" + itemData.dob + "</td>";
       temp += "<td>" + itemData.gender + "</td>";
       temp += "<td>" + itemData.currentCity +" "+itemData.currentCountry+ "</td></tr>";
     });
     document.getElementById("mytabledata").innerHTML = temp;
   }
   })
   .catch(function (error) {
       })
   .then(function () {
   });
};
getUsers();
console.log(a) 
   var a=10;