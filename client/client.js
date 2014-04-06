/**
* Templates
*/
Template.messages.messages = function () {
    Meteor.subscribe("messages");
    
  return Messages.find();
};

Template.input.events = {
    'keydown input#txtMessage' : function (event) {
        if(event.which == 13){
            var name = "Anon";
            if(Meteor.user()){
                name = Meteor.user().profile.name;
            }            
            var message = $('#txtMessage').val();
            
            if(message.trim() != ''){
                Messages.insert({
                    name: name,
                    message: message,
                    time: Date.now()
                });
            }
            
          $('#txtMessage').val("");
        }
    },
    
    'click button#clear' : function () {
        
        Meteor.call("removeAllMessages");
    }
}
