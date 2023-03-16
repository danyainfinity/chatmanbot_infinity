
var id="[uid=\""+document.querySelector('.text-message').attributes.uid.value+"\"]";
var chatcontentlist = document.querySelectorAll(id);
var chatcontentlist2 = document.querySelector('.chat__messages').querySelectorAll('[role="listitem"]');
var chatArr = Array.prototype.slice.call(chatcontentlist);
var chatArr2 = Array.prototype.slice.call(chatcontentlist2);

if (chatArr.length < chatArr2.length){
    var index = 0;
    while (index < chatArr2.length){
    if (chatcontentlist2[index].querySelector('.post-message.d-flex.flex-column')){
        if (chatArr2[index].children[0].childElementCount == 2)
        chatArr.splice(index,0,chatArr2[index].children[0].children[1].children[1].children[0].children[0]);
        else
        chatArr.splice(index,0,chatArr2[index].children[0].children[0].children[1].children[0].children[0]);
    }
    index++;
    }

}

var id_man;
var id_girl;

var messageMatrix = [];

id_girl = id.substr(id.indexOf("=")+2,id.indexOf('_')-id.indexOf("=")-2);
id_man = id.substr(id.indexOf('_')+1,id.indexOf('"]')-id.indexOf('_')-1);


var name = document.querySelector('.profile-name__text.s-m-y-1.f-w-m.t-b-1').textContent;
name = name.substr(5,25); name
if (name.includes(' ')) name = name.substr(0,name.indexOf(' '));
if (name.includes(',')) name = name.substr(0,name.indexOf(','));
if (name.includes('-')) name = name.substr(0,name.indexOf('-'));
if (name.includes('.')) name = name.substr(0,name.indexOf('.'));
var time = 'today';
var timeParent;
chatArr.forEach((e,x)=> {
    messageMatrix[x] = new Array;
    messageMatrix[x][4] = e.innerText;
    timeParent = e.parentNode.parentNode.parentNode.parentNode;
    if (timeParent.childElementCount == 2) time=timeParent.querySelector('.message-wrapper__date.s-m-y-4.t-c-1.f-w-m').innerText;
    messageMatrix[x][3] = e.nextElementSibling.childNodes[2].childNodes[0].innerText+' of the '+time;
    if (e.className.includes('like-photo-message')){
        messageMatrix[x][0] = id_man;
        messageMatrix[x][1] = name;
        messageMatrix[x][2] = 'like photo message';
        messageMatrix[x][4] = '';
    }
    else if (e.className.includes('text-message')){
        if (e.attributes.length == 4) { 
            messageMatrix[x][1] = name; messageMatrix[x][0] = id_man;
        } else { 
            messageMatrix[x][0] = id_girl;
            messageMatrix[x][1] = 'Client girl';
        }
        messageMatrix[x][2] = 'text message';
        messageMatrix[x][4] = e.innerText;
    }
        else if (e.className.includes('photo-message')){
                messageMatrix[x][2] = 'photo message';
                messageMatrix[x][4] = 'Sent a photo';
                if (!e.className.includes('--my'))  { messageMatrix[x][1] = name; messageMatrix[x][0] = id_man;} 
                else { 
                    messageMatrix[x][0] = id_girl;
                    messageMatrix[x][1] = 'Client girl';
                }
                
        }
            else if (e.className.includes('video-message')){
                if (e.attributes.length == 4) { messageMatrix[x][1] = name; messageMatrix[x][0] = id_man;} 
                else { 
                    messageMatrix[x][0] = id_girl;
                    messageMatrix[x][1] = 'Client girl';
                }
                messageMatrix[x][2] = 'video message';
                messageMatrix[x][4] = e.innerText;
            }
            else if (e.className.includes('wink-message')){
                if (e.attributes.length == 4) { messageMatrix[x][1] = name; messageMatrix[x][0] = id_man;} 
                else { 
                    messageMatrix[x][0] = id_girl;
                    messageMatrix[x][1] = 'Client girl';
                }
                messageMatrix[x][2] = 'wink message';
                messageMatrix[x][4] = e.innerText;
            }
            else if (e.className.includes('gift-message')){
                if (e.attributes.length == 4) { messageMatrix[x][1] = name; messageMatrix[x][0] = id_man;} 
                else { 
                    messageMatrix[x][0] = id_girl;
                    messageMatrix[x][1] = 'Client girl';
                }
                messageMatrix[x][2] = 'gift message';
                messageMatrix[x][4] = 'Sent a gift';
            }
            else if (e.className.includes('sticker-message')){
                if (e.attributes.length == 4) { messageMatrix[x][1] = name; messageMatrix[x][0] = id_man;} 
                else { 
                    messageMatrix[x][0] = id_girl;
                    messageMatrix[x][1] = 'Client girl';
                }
                messageMatrix[x][2] = 'sticker message';
                messageMatrix[x][4] = 'Sent a sticker';
            }

            else if (e.className.includes('post-message') && !e.className.includes('like-post-message')){
                    messageMatrix[x][0] = id_girl;
                    messageMatrix[x][1] = 'Client girl';
                messageMatrix[x][2] = 'post message';
                messageMatrix[x][4] = 'Sent a post, status:'+e.parentNode.querySelector('.t-c-1.t-gray-700').innerText;
  
            }
            else if (e.className.includes('like-post-message')){
                messageMatrix[x][1] = name;
                messageMatrix[x][2] = 'like post message';
                messageMatrix[x][4] = '';
            }
   
});

var url_app = 'https://script.google.com/macros/s/AKfycbw7mOhHcHLVsrcp11E6spgwnC5-XhnzgavyI2gaTwV1slf3Ese44cIawosXKE_YYIIsWA/exec'
var get_url = url_app+'?key=red&'+'id_girl='+id_girl+'&id_man='+id_man+'&message='+JSON.stringify(messageMatrix)+'&method=last_message'
await fetch(get_url);





ОЧЕНЬ ВАЖНОЕ!
var text = 'Why do I find myself drawn to your silence, when most people would be put off by it? What is it about you that sets you apart?';
var href = window.location.href;
var id="[uid=\""+href.substr(href.indexOf('/chat')+6,17)+"\"]";
var id_man = id.substr(id.indexOf('_')+1,id.indexOf('"]')-id.indexOf('_')-1);
id_man = parseInt(id_man);
fetch("https://talkytimes.com/platform/chat/send/text", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({
    message: text,
    idRegularUser: id_man,
    captchaToken: '',
  })
})
.then( (response) => { 
  
});