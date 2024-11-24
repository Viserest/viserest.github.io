
const bizLocation = "1219A W. Crawford St, Salina, KS, USA"; // location
const bizHours = "11AM - 8PM"; // Monday - Saturday
const bizPhone = "785-823-5556"; // phone

const logo = "./images/logo.png";

var header = div(
    div(
        div( // left links
            a("LUNCH").att$("href", "#/lunch-menu"),
            a("DINNER").att$("href", "#/dinner-menu"),
            a("SPECIALS").att$("href", "#/specials"),
            a("ORDER TAKEOUT").att$("href", "#/order")
        ),
        div( // middle logo
            a(
                img(logo)
            ).att$("href", "#/")
        ),
        div( // right links
            a("HISTORY").att$("href", "#/history"),
            a("CONTACT").att$("href", "#/contact"),
            a("LOCATION").att$("href", "#/location"),
            a("FACEBOOK").att$("href", "https://www.facebook.com/Coops-Pizzeria-205802459446951/")
        )
    ).att$("class", "inside")
).att$("class", "header");

var footer = div(
    div(
        div( // logo on footer
            img(logo)
        ),
        div(
            div(b("Location | "), bizLocation),
            div(b("Phone | "), bizPhone),
            div(b("Monday-Saturday | "), bizHours),
            div(b("Sunday | "), "Closed"),
            p("\xa0"),
            p("CHECK US OUT AND GIVE A REVIEW!"),
            p("Copyright \xa9 2014-" + new Date().getFullYear() + " by Coop's Pizzeria")
        )
    ).att$("class", "inside")
).att$("class", "footer");

var main = (...contents) => div(
    header,
    ...contents,
    footer
);

const r = router({
    "/": () => main(
        div(
            div(
                div(
                    img(logo)
                ),
                h1("TASTE THE DIFFERENCE")
            ).att$("class", "inside")
        ).att$("class", "article home"),
	    div(
		    h1("VISIT OUR NEW LOCATION"),
		    div().att$("class", "wild")
	    ).att$("class", "article new"),
	    div(
	        h1("OPEN MIC NIGHT"),
		    div().att$("class", "wild")
	    ).att$("class", "article openmic"),
	    div(
	        h1("SEE OUR MENU"),
		    div().att$("class", "wild")
	    ).att$("class", "article seemenu")
    ),
    "/lunch-menu": () => main(
        div(
            img("./images/lunch.jpg")
        ).att$("class", "article menu")
    ),
    "/dinner-menu": () => main(
        div(
            img("./images/dinner.jpg")
        ).att$("class", "article menu")
    ),
    "/specials": () => main(
        div(
            img("./images/specials.jpg")
        ).att$("class", "article menu")
    ),
    "/order": () => main(
        div(
            p("order")
        )
    ),
    "/history": () => main(
        div(
            h1("OUR STORY"),
            div(
                div(
                    p("Our slogan \"Taste The Difference\" is what we strive for everyday."),
                    p("One thing is for sure, this will be some of the best food you will ever eat!"),
                ),
                div(
                    img(logo)
                )
            ).att$("class", "slogan"),
            div(
                p("Our story starts a long time ago when two friends meet. The Cooper family and the Temple family had a lot in common. Both had a lot of kids and enjoyed being around others. I remember going over to Mama Temple's house when all of her kids were home from school. There were more kids that didn't belong to her then there were of her own kids. She always had an abundance of food that she would prepare for her kids' friends to come and enjoy. I watched in amazement how she was always giving and preparing large amounts of food to her guests. I thought to myself \"what an awesome lady, I would like to have the heart to give that way someday.\""),
                p("\xa0"),
                p("During all this time our families intertwined with each other and became very close. We would have Super Bowl, Final Four, and World Series parties during a mens gathering at our church and Mama Temple's oldest son could cook. He would always bring the best food, no matter what it was that he decided to muster up - and he, like his Mama, would bring lots of it. It was so good we couldn't stop eating it until we were about to explode. In 2007, I bought the old Greek's Pizzeria. A little nervous, yes, but ready to tackle a new venture. Mama Temple's son found out from Papa Temple my new venture and came to my rescue. We started putting together recipes that were out of this world. We decided to name it Coop's Pizzeria and offer family size portions.")
            ).att$("class", "history")
        ).att$("class", "article")
    ),
    "/contact": () => main(
        div(
            p("contact")
        )
    ),
    "/location": () => main(
        div(
            h1("COME GRAB A PIZZA PIE!"),
            div(
                h3("Location"),
                p(bizLocation),
                h3("Phone"),
                p(bizPhone),
                p("\xa0"),
                h3("Monday - Saturday"),
                p(bizHours),
                h3("Sunday"),
                p("Closed")
            ),
            div(
                iframe().att$("class","map").att$("src", "https://www.openstreetmap.org/export/embed.html?bbox=-97.62579113245012%2C38.82508183650982%2C-97.62225061655046%2C38.826979178359494&amp;layer=mapnik")
            )
        ).att$("class", "article")
    )
});

entry.appendChild(r);
