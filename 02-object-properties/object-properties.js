/* eslint-disable no-unused-vars */
function setPropsOnObj(object){
    //
    object.x = 7;
    object['y'] = 8;
    object.onePlus = (num) => {return num+=1};
}

function setPropsOnArr(array){
    //
    array.hello = () => {return 'Hello!'};
    array['full'] = 'stack';
    array[0] = 5;
    array['twoTimes'] = (num) => {return num * 2};
}

function setPropsOnFunc(func){
    //
    func.year = '20??';
    func.divideByTwo = (num) => {return num / 2};
}

function shallowCopy(obj1, obj2){
    //
    if(Array.isArray(obj1)){
        return [...obj1, ...obj2]
    } else {
        return {...obj1, ...obj2}
    }
}