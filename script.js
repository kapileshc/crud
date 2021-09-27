let selectedRow= null;
function onFormSubmit()
{
    var formData= readFormData();
    if(formData.country)
    {
        if(selectedRow==null) insertNewRecord(formData);
    else updateRecord(formData);
    }
    else
    resetForm();   
}


function readFormData()
{
    const formData={};
    formData["country"] =document.getElementById("country").value;
    
    return formData;

}

function insertNewRecord(data)
{
    let table =document.getElementById("countryList").getElementsByTagName("tbody")[0];
    var newRow =table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML = data.country;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<a onClick="onEdit(this)"> Edit </a>`
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onDelete(this)"> Delete </a>`

}
function resetForm() {
    document.getElementById("country").value = "";
    selectedRow = null;
  }


function onEdit(td)
{
    selectedRow =td.parentElement.parentElement;
    document.getElementById("country").value= selectedRow.cells[0].innerHTML;
}

function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML= formData.country;
}


function onDelete(td)
{
    if(confirm("do you want to delete this record?"))
    {
        row =td.parentElement.parentElement;
        document.getElementById("countryList").deleteRow(row.rowIndex);
        resetForm();
    }
    
}

function onSearch()
{
    let table =document.getElementById("countryList").getElementsByTagName("tbody")[0],flag=0;
    let len=document.getElementById("countryList").getElementsByTagName("tbody")[0].getElementsByTagName('tr').length;
    let data = document.getElementById("countrysearch").value;
    for(i=0; i<len; i++) 
    {
      let match = document.getElementById("countryList").getElementsByTagName("tbody")[0].getElementsByTagName('tr')[i];
      let row = match.getElementsByTagName("td")[0];
      if(row.innerHTML === data) 
      {
        document.getElementById("countryList").getElementsByTagName("tbody")[0].deleteRow(i);
        flag=1;
        break;
      } 
    }
    if(flag===1)
    {
    var newRow =table.insertRow(0);
    cell1=newRow.insertCell(0);
    cell1.innerHTML = data;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<a onClick="onEdit(this)"> Edit </a>`
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onDelete(this)"> Delete </a>`
    }

}