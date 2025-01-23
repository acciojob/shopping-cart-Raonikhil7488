//your code here
 let total = 0;

        document.getElementById('add').addEventListener('click', function() {
            const itemName = document.getElementById('item-name-input').value.trim();
            const itemPrice = parseFloat(document.getElementById('item-price-input').value);
            
            if(itemName !== '' && !isNaN(itemPrice) && itemPrice >= 0) {
                const table = document.getElementById('list');
                const newRow = document.createElement('tr');
                const itemCell = document.createElement('td');
                const priceCell = document.createElement('td');
                
                itemCell.textContent = itemName;
                priceCell.textContent = itemPrice.toFixed(2);
                
                newRow.appendChild(itemCell);
                newRow.appendChild(priceCell);
                table.insertBefore(newRow, table.lastElementChild);

                total += itemPrice;
                document.getElementById('total').textContent = total.toFixed(2);

                // Clear the input fields
                document.getElementById('item-name-input').value = '';
                document.getElementById('item-price-input').value = '';
            } else {
                alert('Please enter a valid item name and price.');
            }
        });