function sendMoney(){
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
 var enterSName = document.getElementById("enterSName").value;
  var findSenderBankAccount = enter your Name + "BankBalance";
    var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount) {
       alert("Insufficient Balance.")
    }
 else {
       var findUserBankAccount = enter your Name + "BankBalance";
      
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
       document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       alert(`Successful Transaction !!  
       $${enterAmount} is sent to ${enterName}@email.com.`)
 
       // transaction history 
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id ${enterSName}@email.com
  to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
    }
 }