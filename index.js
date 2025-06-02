
    
        // Change document background color to silver
        document.body.style.backgroundColor = "silver";

        // Change the font color for h1 title tag to green
        document.getElementById("title").style.color = "green";

        // Change the font case for h3 title tags to uppercase
        let h3title = document.getElementsByTagName("h3");
        for (let i = 0; i < h3s.length; i++) {
            h3title[i].style.textTransform = "uppercase";
        }

        // Add one more fruit to the fruits list
        const fruitList = document.getElementById("fruList");
        const newFruit = document.createElement("li");
        newFruit.textContent = "Oranges";
        fruitList.appendChild(newFruit);

        // Add one more vegetable to the vegetables list
        const vegList = document.getElementById("vegList");
        const newVeg = document.createElement("li");
        newVeg.textContent = "Spinach";
        vegList.appendChild(newVeg);
