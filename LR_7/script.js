var arr1 = [1, 27, 3, 42, 54, 61, 17, 87, 97, 100];
        var arr2 = new Array("ab", "bd", "cr", "dr");
        var arr3 = Array.of(45, false, true, 67);
        var arr4 = arr1.concat(arr2, arr3);
        for (var i = 0; i < arr4.length; i++) {
            document.writeln(i + " --- " + arr4[i] + "<br>");}
        document.writeln("<br>");
        arr4.splice(2, 1);
        arr4.splice(4, 1); 
        for (var i = 0; i < arr4.length; i++) {
            document.writeln(i + " --- " + arr4[i] + "<br>");
        }
        document.writeln("<br>");
        arr4.shift();//удаляем первый 
        arr4.pop();//удаляем последний
        for (var i = 0; i < arr4.length; i++) {
            document.writeln(i + " --- " + arr4[i] + "<br>");
        }
        document.writeln("<br>");
        arr4.unshift("start"); //добав в начало 
        arr4.push("end"); //добав в конец
        for (var i = 0; i < arr4.length; i++) {
            document.writeln(i + " --- " + arr4[i] + "<br>");
        }
        document.writeln("<br>");
        delete arr4[2];
        delete arr4[4];
        delete arr4[7];
        for (var i = 0; i < arr4.length; i++) {
            document.writeln(i + " --- " + arr4[i] + "<br>");
        }
        document.writeln("<br>");
        document.writeln("Длина массива: " + arr4.length + "<br>");
        document.writeln("Количество элементов в массиве: " + arr4.filter(function(value) {return value !== undefined;}).length + "<br>");
        for (var i = 0; i < arr4.length; i++) {
            if (arr4[i]) {
                document.writeln(i + " --- " + arr4[i] + "<br>");
        }}
        document.writeln("<br>");
        arr4 = [];
        arr4.length = 0;