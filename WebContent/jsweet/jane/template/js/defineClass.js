define(/**name,*/
    [/** dependency */],
    function(/**return of dependency */){
        //global variable
        var staticMember3={}
        var classFactory=function(){
            //private variable
            var privateMember2={}
            /** constructor first */
            var className=function(){
                /** define private function/member */
                this.privateMember1={}
                this.privateFunction1=function(){}
            }
            className.prototype.classMethod1=function(){
                this.privateMember1
            }
            className.prototype.classMember1={}
            return new className();
        }
        return classFactory
})