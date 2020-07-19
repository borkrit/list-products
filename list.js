class Products {
  constructor(name, quantity, category) {
      this.name =name;
      this.quantity = quantity;
      this.category = category;
  }
}

let counter = document.getElementById('counters')
class UI {
  addProducts(product) {
      const lista = document.getElementById('lista-products')

      const div = document.createElement('div');

      div.innerHTML = `
     <div class="card text-center my-2">
          <div class="card-body">
          <strong>Name: </strong> ${product.name} </br> <strong>quantity</strong> 
          ${product.quantity} </br>
           <strong>Category </strong> ${product.category} 
            <a href="#" class="btn btn-danger" name="borrar">Delet</a>
          </div>
          
      </div>
      
     `;
      lista.appendChild(div);
  }

  resetFormular(){
      document.getElementById('formular').reset();
  }

  deletProduct(element) {
     if (element.name === 'borrar') {
         element.parentElement.parentElement.parentElement.remove();

         this.message('Product del', 'danger');
     }

    
  }

  message(message, classes) {
      const div = document.createElement('div');

      div.className = `mt-4 alert alert-${classes}` 

      div.appendChild(document.createTextNode(message))

      /* DOM */
      const container = document.querySelector('.container'); 

      document.querySelector('#app');

      container.insertBefore(div, app);
      setTimeout(function(){
          document.querySelector('.alert').remove();
      }, 3000)
  }
}

//DOM 
let i =0;

document.getElementById('formular').addEventListener('submit', function (e) {
  
  const name = document.getElementById('name-product').value;
  const quantity = document.getElementById('quantity-product').value;
  const category = document.getElementById('category-product').value;

  const productAddList = new Products (name, quantity, category);
  
 
  const ui = new UI;
  ui.addProducts(productAddList);
  ui.resetFormular();
  ui.message('Product added', 'success');

  e.preventDefault();
  i++

counter.innerHTML= "Total Products :" + i;
})

document.getElementById('lista-products').addEventListener('click', function(e){
  const ui = new UI();
  ui.deletProduct(e.target);
  --i
  counter.innerHTML= "Total Products :" + i;
  
})
