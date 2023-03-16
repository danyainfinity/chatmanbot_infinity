

function toMails(){
var href = window.location.href;
var id = href.substr(href.indexOf('/chat')+6,href.length-href.indexOf('/chat')-6);
window.location.href = href.substr(0,href.indexOf('chat'))+'mails/view/'+id;
}

var R,text,alerts;
var key;
document.querySelector(".ui-textarea_control").scrollIntoView({block: "center", inline: "center"});
document.querySelector("[data-test-id='cmp:ui-button click:send-media send-media']").click();
function get_message(){
    console.clear();
    var href = window.location.href;
    var url_app = 'https://script.google.com/macros/s/AKfycbxXhp4AtTdU0i3zEIK5FKV9sYNv_-jwIcYYLvFGBmrLKhivF03EhUkW4KTw4kPF5--ZXg/exec';
	 var id = href.substr(href.indexOf('/view')+6,8);
    var get_url = url_app+'?id='+id+'&key=O';
    return fetch(get_url).then(response => response.json(),reject => R = "retry:("); 
}
await get_message()
.then(response => {eval(response);});

setTimeout(() => {
var nodelist = document.querySelectorAll('.photo.s-m-x-2.s-m-y-3');
var array = Array.prototype.slice.call(nodelist);
array = array.filter(e => !e['innerText'].includes(':')&&e['className'].includes('can-be-selected'));
var getRandomInt = (min,max) => { return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min)};
let rnd = new Set();
if (array.length == 0) document.querySelector('.ui-button.ui-button__size-m.ui-button__type-primary.ui-button__icon-position-right').click();
else if (array.length == 1)  rnd[0] = 0;
    else if (array.length <= 3)  { rnd[0] = 0; rnd[1] = 1; rnd[2] = 2;}
        else if (array.length > 3 && array.length <= 10) 
                { var i = 0; 
                    while(i<4){
                       
                        if (i == 0) { rnd.add(getRandomInt (0, array.length)); i++; }
                        else {
                             var pr = false;
                             var s = getRandomInt (0, array.length);
                            while (!pr){
                                if (rnd.has(s)) s = getRandomInt (0,array.length);
                                else { rnd.add(s); pr = true; i++;}
                            }
                        }          
                        }     
                }
                else if (array.length > 10 && array.length <= 20) 
                { var i = 0; 
                    while(i<6){
                       
                        if (i == 0) { rnd.add(getRandomInt (0, array.length)); i++; }
                        else {
                             var pr = false;
                             var s = getRandomInt (0, array.length);
                            while (!pr){
                                if (rnd.has(s)) s = getRandomInt (0,array.length);
                                else { rnd.add(s); pr = true; i++;}
                            }
                        }          
                        }     
                }
                else if (array.length > 20 && array.length < 200) 
                { var i = 0; 
                    while(i<7){
                       
                        if (i == 0) { rnd.add(getRandomInt (0, array.length)); i++; }
                        else {
                             var pr = false;
                             var s = getRandomInt (0, array.length);
                            while (!pr){
                                if (rnd.has(s)) s = getRandomInt (0,array.length);
                                else { rnd.add(s); pr = true; i++;}
                            }
                        }          
                        }     
                }

if (rnd.size > 0) {
    rnd.forEach((e) => array[e].click());
    document.querySelector('.ui-button.ui-button__size-m.ui-button__type-primary.ui-button__icon-position-right').click();
}
alerts = true;
},3000);



async function main(){
    var target = document.querySelector('[data-test-id="cmp:ui-textarea content type-your-mail-here"]');
    const config = {
        attributes: true
    };
    const observer = new MutationObserver(async function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes') {
					target.className.includes('focus')? target.className.includes('filled')? setTimeout(()=> document.querySelector("[data-test-id='cmp:ui-button click:send-mail send']").click(),1000) : false : false
                    };
              
            }
            
        
    });
    
    observer.observe(target, config);
}
main();

//document.querySelector("[data-test-id='cmp:ui-button click:send-mail send']").click();

