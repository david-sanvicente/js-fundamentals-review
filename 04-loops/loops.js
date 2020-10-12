/* eslint-disable no-unused-vars */
function repeat(str, num){
    //
    let result = '';

    for(let i = 0; i < num; i++){
        //
        result += str;
    }
    return result;
}

function sum(arr){
    let result = 0;

    for(let i = 0; i < arr.length; i++){
        result += arr[i]
    }

    return result;
}

function join(arr, delim){
    let result = '';

    for(let i = 0; i < arr.length; i++){
        result += arr[i];
        if(delim && i != (arr.length - 1)){
            result += delim
        }
    }

    return result;
}

function gridGenerator(num){
    let result = '';

    // for number of rows
    for(let i = 0; i < num; i++){
        // for number of columns
        for(let j = 0; j < num; j++){
            // grid will render '#' at even-numbered grid-spaces
            //  and will render ' ' at odd spaces
            if((i+j)%2 == 0){
                result += '#'
            } else {
                result += ' '
            }
        }
        // add new line
        result += '\n'
    }

    return result;
}

function paramify(obj){
    const params = [];

	for(let prop in obj){
		// console.log(prop)
		if(obj.hasOwnProperty(prop)){
			params.push(`${prop}=${obj[prop]}`)
			console.log(`${prop}=${obj[prop]}`)
		}
	}
	return params.sort().join('&')
}

function paramifyObjectKeys(obj){
    const ordered = {};
	Object.keys(obj).sort().forEach(function(key) {
	  ordered[key] = obj[key];
	});

    let result = '';

	for(let i in ordered){
		result += `${i}=${ordered[i]}&`
	}

	let lastChar = result.length - 1;

	return result.slice(0, lastChar);
}

function sort(arr){
    for(let j = 0; j < arr.length - 1; j++){
		for(let i = 0; i < arr.length - 1; i++){
			if(arr[i] > arr[i + 1]){
				let tmp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = tmp;
			}
			// console.log(i)
			// console.log(`${arr[i]},${arr[i+1]}`)
		}
	}
	return arr
}