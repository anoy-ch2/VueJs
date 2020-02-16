var myapp = new Vue({
    el:"#my-app",
    data:{
      name:"Anoy Chowdhury",
      age:"23"

    },
    methods:{
        run:function(msg,msg2){

        return "I am Running "+msg+" Oh: "+msg2;
        },
        welcome:function(dayTime){

            return "Good "+dayTime;
        },
        _valueAccess: function () {
            return this.name + "  " + this.age;
        },
        get valueAccess() {
            return this._valueAccess;
        },
        set valueAccess(value) {
            this._valueAccess = value;
        },
    }
});