//function to increment and decrement quantity

   function increment(id) {
    const element = document.getElementById(id);
    let current = parseInt(element.innerText);
    element.innerText = current + 1;
   }

function decrement(id) {
    const element = document.getElementById(id);
    let current = parseInt(element.innerText);
    if(current >1){

        element.innerText = current - 1;
    }
   }


//    checker function to add item in bill 

  document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.my-checker');
        const selectedContainer = document.getElementById('selected-items');

    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        const id = this.getAttribute('data-id');
        const name = document.getElementById('coffee-name' + id).innerText;
        const price = document.getElementById('price' + id);
 
        // .replace(/[^\d]/g, ''); this is used to remove rupees character 
        let priceInnumber=parseInt(price.innerText.replace(/[^\d]/g, ''));

        const quantity = document.getElementById('quantity' + id);

        let  quantityInnumber = parseInt(quantity.innerText)
          const itemId = 'selected-item-' + id;


        // cost of item according to number of item 
        const rate =  parseInt(priceInnumber );
        const totalprice =  parseInt(priceInnumber * quantityInnumber);


        if (this.checked) {
        // Create a new line item
          const item = document.createElement('tr');
            item.id = itemId;

            // ✅ Creating span elements with spacing
            const nameSpan = document.createElement('td');
            nameSpan.className = 'item-name';
            nameSpan.textContent = name;

            
            const qtySpan = document.createElement('td');
            qtySpan.className = 'item-qty';
            qtySpan.textContent = quantityInnumber;

            const rateSpan = document.createElement('td');
            rateSpan.className = 'item-rate';
            rateSpan.textContent = rate;

            const priceSpan = document.createElement('td');
            priceSpan.className = 'item-price';
            priceSpan.textContent = totalprice;
            

            item.appendChild(nameSpan);
            item.appendChild(qtySpan);
            item.appendChild(rateSpan);
            item.appendChild(priceSpan);

            selectedContainer.appendChild(item);
          } else {
           
            quantity.innerText="1"
            const oldItem = document.getElementById(itemId);
            if (oldItem) {
              oldItem.remove();
            }
          }
      });
    });
  });

// function to makebill



function makebill() {

   // when make bill btn is clicked then billing page show

  const selectedItems = document.getElementById("selected-items");
  const billOutput = document.getElementById("output-bill");
  
  
  // Create a single container div
  const itemList = document.createElement("table");
  itemList.className = "item-list";
  
  // Copy all item-row divs into this container
  const rows = selectedItems.querySelectorAll("tr");
  
  
  
  let totalprice=0;

  rows.forEach(row => {
    const clone = row.cloneNode(true);
    itemList.appendChild(clone);
    
    const priceElement =row.querySelector(".item-price");
    if(priceElement){
      const price = parseFloat(priceElement.textContent.trim());
      if(!isNaN(price)){
        totalprice += price;
      }
    }

  });

  // Append the container to the output
  billOutput.appendChild(itemList);

    const today = new Date().toLocaleString();
    
    const billNumber = getBillNumber();
    document.getElementById("billNumber").textContent = "#" + billNumber;
    // document.getElementById("billNumber").textContent = "#" + billNumber;
    document.getElementById("billDate").textContent = today;
    
    let subtotal = totalprice;
    const tbody = document.getElementById("billItems");
    
    
    const cgst = +(subtotal * 0.100).toFixed(2);
    const sgst = +(subtotal * 0.100).toFixed(2);
    const grandTotal = +(subtotal + cgst + sgst).toFixed(2);
    
    
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("cgst").textContent = cgst;
    document.getElementById("sgst").textContent = sgst;
    document.getElementById("total").textContent = grandTotal;
    

    const billContainer=document.getElementById("print-bill");

  billContainer.style.display='block';
    
  }
    function getBillNumber() {
  const lastReset = localStorage.getItem("lastReset");
  const now = new Date();
  const lastResetDate = lastReset ? new Date(lastReset) : null;

  // Check if 24 hours have passed or not initialized
  if (!lastResetDate || (now - lastResetDate) > 24 * 60 * 60 * 1000) {
    localStorage.setItem("billNumber", "1");
    localStorage.setItem("lastReset", now.toISOString());
    return 1;
  } else {
    // Increment the bill number
    let current = parseInt(localStorage.getItem("billNumber") || "0", 10);
    current++;
    localStorage.setItem("billNumber", current.toString());
    return current;
  }
}

// print bill function

function printBill(){
  const printcontent=document.getElementById("print-Content").innerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML=printcontent;
  window.print();

  document.body.innerHTML=originalContent;
  location.reload();
}


// function to change item page display clikced page 
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
