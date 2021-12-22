const obj = {
    _name: [],
    get name(){
      return obj._name
    },
    set name(value){
      const splitValue = value.split(',')
      return splitValue.forEach(element => {
        obj._name.push(element,element.length)
      });
    }
  }
 
  obj.name = "sona,Hovhanes"
  console.log(obj.name);