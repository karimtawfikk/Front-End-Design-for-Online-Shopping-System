
    function submitting() { 
        alert("Thank you for your review!");
    } 

    function changeImg(id1,id2) 
    {
        var originalImg = document.getElementById(id1);
        var hoverImg = document.getElementById(id2);
    
        if (originalImg.style.display != "none") {
            originalImg.style.display = "none";
            hoverImg.style.display = "block";
        } else {
            originalImg.style.display = "block";
            hoverImg.style.display = "none";
        }
    }
    function addToCart(b)
    {
        var addToCartBtn = document.getElementById(b);
        addToCartBtn.value = "Added!";
    }
   
