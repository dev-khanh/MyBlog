/* eslint-disable prettier/prettier */
export function handlarrys() {
    // Array.prototype.inArray = function (comparer) {
    //   for (var i = 0; i < this.length; i++) {
    //     if (comparer(this[i])) {
    //       return true;
    //     }
    //   }
    //   return false;
    // };
    // Array.prototype.pushIfNotExist = function (element, comparer) {
    //   if (!this.inArray(comparer)) {
    //     this.push(element);
    //   }
    // };
    // var array = [{name: 'tom', text: 'tasty'}];
    // var element = {name: 'tom', text: 'tasty'};
    // array.pushIfNotExist(element, function (e) {
    //   return e.name === element.name && e.text === element.text;
    // });
}
export function splitImages(arraysBloc) {
    arraysBloc.map((data) => {
        var fields = data.content.split('class="titleImage" src="');
        var street = fields[1];
        var getImage = street.split('" id="apiImage"');
        var arraysImage = getImage[0];
        Object.assign(data, { arraysImage: arraysImage });
    });
    return arraysBloc;
}
export function hendleShowList(arrays) {
    let arrayList = [];
    var dataImages = splitImages(arrays);
    dataImages.map((d) => {
        arrayList.push(d.arraysImage);
    });
    return arrayList;
}
export function reformatDate(item) {
    var dt = item.split('T');
    var dArr = dt[0].split('-');  // ex input "2010-01-18"
    return dArr[2] + '/' + dArr[1] + '/' + '20' + dArr[0].substring(2); //ex out: "18/01/10"
}
export function searchFlatList(text, array){
    const newData = array.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    return newData;
}
