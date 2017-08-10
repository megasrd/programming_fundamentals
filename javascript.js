var bgImages = [];
var quotes = [];
var fonts = [];

var bgImage = document.getElementById("bg-image");
var quotePara = document.getElementById("quote");




    function Generate() {
        
        var randomNum = parseInt(randomNumber(0,9));
        var randomNum_font = parseInt(randomNumber(0,9));
        quotePara.innerHTML = quotes[randomNum];
        quotePara.style.fontFamily = fonts[randomNum_font];
        bgImage.style.backgroundImage = "url("+bgImages[randomNum]+")";
        
        
    }

    function randomNumber(min, max) {
        
        return Math.random() * (max - min) + min;
}


    function generateStuff() {
        
        storeImages();
        storeFonts();
        storeQuotes();

    }

    function storeFonts() {
        
        fonts[0] = "Acme";
        fonts[1] = "Bangers";
        fonts[2] = "Cinzel";
        fonts[3] = "Frijole";
        fonts[4] = "Kaushan+Script";
        fonts[5] = "Pacifico";
        fonts[6] = "Patrick+Hand+SC";
        fonts[7] = "Sedgwick+Ave+Display";
        fonts[8] = "Shadows+Into+Light";
    }

    function storeImages(num = 0) {
        
        for (i = 0; i <  9; i++) {
            bgImages[num] = 'img/image'+[num]+'.jpg';
            num++;
          }
    }


    function storeQuotes() {
        
        quotes[0] = "The master has failed more times than the beginner has even tried.";
        quotes[1] = "One day your parents picked you up, sat you down, and never picked you up again."
        quotes[2] = "Holding a grudge is like drinking poison and expecting the other person to die";
        quotes[3] = "Forgive others, not because they deserve forgiveness, but because you deserve peace.";
        quotes[4] = "A ship is safe in a harbor. But thats not what ships are for.";
        quotes[5] = "Confidence is quiet. Insecurities are loud.";
        quotes[6] = "When you stare into the abyss, it's not supposed to wave back.";
        quotes[7] = "A society grows great when old men plant trees whose shade they know they shall never sit in";
        quotes[8] = "Beware a man with nothing to lose";
    }

    