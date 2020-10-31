function setShoutColor(color) {

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'data:text/javascript,dvz_shoutbox.shout%20%3D%20function%28%29%20%7B%0A%0A%20%20%20%20%20%20%20%20var%20message%20%3D%20%24%28%27%23shoutbox%20input.text%27%29.val%28%29%3B%0A%0A%20%20%20%20%20%20%20%20if%20%28%24.trim%28message%29%20%3D%3D%20%27%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20if%20%28%21dvz_shoutbox.antifloodPass%28%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20dvz_shoutbox.handleErrors%28%27A%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20dvz_shoutbox.toggleForm%28false%29%3B%0A%20%20%20%20%20%20%20%20message%20%3D%20%22%5Bcolor%3D%23' + color + '%5D%22%2Bmessage%2B%22%5B%2Fcolor%5D%22%0A%20%20%20%20%20%20%20%20%24.post%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%27xmlhttp.php%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20action%3A%20%27dvz_sb_shout%27%2C%20text%3A%20message%2C%20key%3A%20my_post_key%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20function%28data%29%20%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%21dvz_shoutbox.handleErrors%28data%29%29%20%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dvz_shoutbox.lastSent%20%3D%20Math.floor%28%28new%20Date%29.getTime%28%29%20%2F%201000%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dvz_shoutbox.clearForm%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dvz_shoutbox.loop%28true%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dvz_shoutbox.runCallbacks%28%27shout%27%2C%20%7B%20message%3A%20message%20%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dvz_shoutbox.toggleForm%28true%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%29%3B%0A%0A%20%20%20%20%7D%0A%20%20%0A%20%20';
        document.head.append(script);
        document.head.removeChild(script);
};

function setColor(pickr) {
        color = Math.round(pickr.toRGBA()[0]).toString(16) + Math.round(pickr.toRGBA()[1]).toString(16) + Math.round(pickr.toRGBA()[2]).toString(16);
        browser.storage.local.set({
                color
        }).then(function () {
                setShoutColor(color);
        });
};

function getColor() {
        browser.storage.local.get("color").then(function (items) {
                pickr.setColor('#' + items["color"]);

        })
};

document.querySelector("html body div#container div#content div.wrapper div.navigation").remove();

pickr = document.createElement("input");
pickr.id = "CPKr";

title = document.querySelector("html body div#container div#content div.wrapper div#shoutbox.front div.head");
title.appendChild(pickr);

pickr = Pickr.create({
        el: '#CPKr',
        theme: 'monolith',
        closeOnScroll: true,
        padding: 20,
        swatches: [
                'rgb(244, 67, 54)',
                'rgb(233, 30, 99)',
                'rgb(156, 39, 176)',
                'rgb(103, 58, 183)',
                'rgb(63, 81, 181)',
                'rgb(33, 150, 243)',
                'rgb(3, 169, 244)',
                'rgb(0, 188, 212)'
        ],

        components: {

                // Main components      
                preview: false,
                opacity: false,
                hue: true,

                // Input / output Options
                interaction: {
                        hex: false,
                        rgba: false,
                        hsla: false,
                        hsva: false,
                        cmyk: false,
                        input: true,
                        clear: false,
                        save: true
                }
        }
});
document.querySelector(".pcr-button").style.width = "16px";
document.querySelector(".pcr-button").style.height = "16px";
document.querySelector(".pcr-button").style.position = "relative";
document.querySelector(".pcr-button").style.right = "11px";


document.querySelector("#shoutbox>.head>strong").style.float = "right";

getColor();
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'data:text/javascript,%24%28document%29.off%28%22click%22%2C%20%22%23shoutbox%20.head%22%29%3B%24%28document%29.on%28%22click%22%2C%20%22%23shoutbox%20.head%22%2C%20function%20%28event%29%20%7Bif%20%28document.querySelector%28%22html%20body%20div%23container%20div%23content%20div.wrapper%20div%23shoutbox.front%20div.head%20div.pickr%22%29%20%3D%3D%20event.target%29dvz_shoutbox.toggle%28%21dvz_shoutbox.status%29%3B%7D%29%3B';
document.head.append(script);
document.head.removeChild(script);

pickr.on('save', colorO => {
        setColor(colorO);
        pickr.hide();
        
});

document.querySelector("html body div#container div.footer2 div#bkh_footer div.bkh_lower center a span.white-s").innerHTML += "<br>"+'<span style="font-size: 10px;color: #fff;">'+"بهبود یافته توسط نور ماه خیابان بیکر"+"</span>";
