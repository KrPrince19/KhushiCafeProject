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

            const priceSpan = document.createElement('td');
            priceSpan.className = 'item-price';
            priceSpan.textContent = totalprice;

            item.appendChild(nameSpan);
            item.appendChild(qtySpan);
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
  const selectedItems = document.getElementById("selected-items");
  const billOutput = document.getElementById("output-bill");
  const billTitle = document.getElementById("bill-title");
  

  // Clear previous output
  billTitle.innerHTML = "<div><h2>Item</h2> <h2>Quantity</h2><h2>Price</h2></div>";

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
      console.log(price)
      if(!isNaN(price)){
        totalprice += price;
      }
    }

  });

  // Append the container to the output
  billOutput.appendChild(itemList);

  const TotalPrice=document.getElementById("TotalPrice");
  TotalPrice.innerText=totalprice;


}

//print function to print bill by printer
function print_btn(){
  const printContents = document.getElementById('Bill-Box').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload(); // Optional: Reloads the page after printing
}

// item page change and show function 
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
